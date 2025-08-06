import { useEffect } from "react";

import { EMPTY_ANIMATION } from "../animations";
import { Direction, Coords, RefVal, StateSetter, GameScreen } from "./types";
import { getRandomCoords, updateScreen } from "./utils";

const MAX_GAME_SCORE = 50;
const FRAME_DURATION = 1000 / 60;
const INITIAL_FPU = 12;
const SPEED_UP_INTERVAL = 2;

export const useGameFlow = ({
  gameScore,
  gameStarted,
  gameFinished,
  activeCommand,
  activeDirection,
  applePosition,
  snakeCoords,
  setGameFinished,
  redrawScreen,
}: {
  gameStarted: boolean;
  gameFinished: boolean;
  gameScore: RefVal<number>;
  activeDirection: RefVal<Direction>;
  activeCommand: RefVal<Direction | null>;
  applePosition: RefVal<Coords>;
  snakeCoords: RefVal<Coords[]>;
  setGameFinished: StateSetter<boolean>;
  redrawScreen: (newScreen: GameScreen) => void;
}) => {
  useEffect(() => {
    let then = Date.now();
    let animationFrame: number | null = null;

    const animateGame = () => {
      if (!gameStarted || gameFinished) {
        return;
      }

      animationFrame = requestAnimationFrame(animateGame);
      const now = Date.now();
      const elapsed = now - then;
      const fpsInterval =
        FRAME_DURATION *
        (INITIAL_FPU - Math.floor(gameScore.current / SPEED_UP_INTERVAL));

      // Check if next screen should be drawn
      if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        // https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
        then = now - (elapsed % fpsInterval);
      } else {
        return;
      }

      const direction = activeDirection.current;
      const command = activeCommand.current;
      const applePos = applePosition.current;
      let newScore = gameScore.current;
      const newCoords = [...snakeCoords.current];
      const head = newCoords[newCoords.length - 1];
      const newHead = { ...head };

      // Horizontal movement
      if (direction === "left" || direction === "right") {
        switch (command) {
          case "up":
            newHead.y -= 1;
            activeDirection.current = "up";
            break;
          case "down":
            newHead.y += 1;
            activeDirection.current = "down";
            break;
          default:
            newHead.x += direction === "left" ? -1 : 1;
            break;
        }
      }

      // Vertical movement
      if (direction === "up" || direction === "down") {
        switch (command) {
          case "left":
            newHead.x -= 1;
            activeDirection.current = "left";
            break;
          case "right":
            newHead.x += 1;
            activeDirection.current = "right";
            break;
          default:
            newHead.y += direction === "up" ? -1 : 1;
            break;
        }
      }

      // Score update
      if (newHead.x === applePos.x && newHead.y === applePos.y) {
        newScore++;
        let newApplePos: { x: number; y: number };

        do {
          newApplePos = getRandomCoords();
        } while (
          newCoords.some(
            (coord) => coord.x === newApplePos.x && coord.y === newApplePos.y
          )
        );

        applePosition.current = newApplePos;
        gameScore.current = newScore;
      } else {
        newCoords.shift();
      }

      // Check for game over
      if (
        newHead.x < 0 ||
        newHead.x >= EMPTY_ANIMATION[0][0].length ||
        newHead.y < 0 ||
        newHead.y >= EMPTY_ANIMATION[0].length ||
        newCoords.some(
          (coord) => coord.x === newHead.x && coord.y === newHead.y
        ) ||
        newScore >= MAX_GAME_SCORE
      ) {
        setGameFinished(true);
        return;
      }

      // Update game state
      newCoords.push(newHead);
      snakeCoords.current = newCoords;
      activeCommand.current = null;
      redrawScreen(updateScreen(newCoords, applePosition.current));
    };

    animateGame();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only refs and state setters missing
  }, [gameStarted, gameFinished]);
};
