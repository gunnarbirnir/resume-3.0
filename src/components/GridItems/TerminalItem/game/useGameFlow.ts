import { useEffect } from "react";

import { EMPTY_ANIMATION } from "../animations";
import { Direction, Coords, RefVal, StateSetter, GameScreen } from "./types";
import { getRandomCoords, updateScreen } from "./utils";

const MAX_GAME_SCORE = 15;

export const useGameFlow = ({
  gameScore,
  gameStarted,
  gameFinished,
  activeCommand,
  activeDirection,
  applePosition,
  snakeCoords,
  setGameScore,
  setGameFinished,
  redrawScreen,
}: {
  gameScore: number;
  gameStarted: boolean;
  gameFinished: boolean;
  activeDirection: RefVal<Direction>;
  activeCommand: RefVal<Direction | null>;
  applePosition: RefVal<Coords>;
  snakeCoords: RefVal<Coords[]>;
  setGameScore: StateSetter<number>;
  setGameFinished: StateSetter<boolean>;
  redrawScreen: (newScreen: GameScreen) => void;
}) => {
  useEffect(() => {
    const gameTick = () => {
      if (!gameStarted || gameFinished) {
        return;
      }

      const direction = activeDirection.current;
      const command = activeCommand.current;
      const applePos = applePosition.current;
      const newCoords = [...snakeCoords.current];
      const head = newCoords[newCoords.length - 1];
      const newHead = { ...head };

      /* console.log("newCoords: ", newCoords);
      console.log("direction: ", direction);
      console.log("command: ", command);
      console.log("applePos: ", applePos);
      console.log("---------------"); */

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
        setGameScore((prev) => prev + 1);
        let newApplePos: { x: number; y: number };

        do {
          newApplePos = getRandomCoords();
        } while (
          newCoords.some(
            (coord) => coord.x === newApplePos.x && coord.y === newApplePos.y
          )
        );

        applePosition.current = newApplePos;
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
        gameScore >= MAX_GAME_SCORE
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

    const interval = setInterval(gameTick, 200 - gameScore * 10);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Only refs and state setters missing
  }, [gameScore, gameStarted, gameFinished]);
};
