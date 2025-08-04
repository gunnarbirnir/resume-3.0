import { useState, useEffect, useRef } from "react";

import { EMPTY_ANIMATION, GREEN_HUE } from "./animation";

const INITIAL_COORDS = [
  { x: 1, y: 3 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 4, y: 3 },
];

type Direction = "left" | "right" | "up" | "down";

export const useSnakeGame = () => {
  const currentDirection = useRef<Direction>("right");
  const currentCommand = useRef<Direction | null>(null);
  const snakeCoords = useRef(INITIAL_COORDS);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(() => {
    const initialScreen = JSON.parse(JSON.stringify(EMPTY_ANIMATION[0]));
    INITIAL_COORDS.forEach((coord) => {
      initialScreen[coord.y][coord.x] = GREEN_HUE;
    });
    return initialScreen;
  });

  useEffect(() => {
    const checkKey = (e: KeyboardEvent) => {
      if (!gameStarted || gameFinished) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          currentCommand.current = "left";
          break;
        case "ArrowRight":
          currentCommand.current = "right";
          break;
        case "ArrowUp":
          currentCommand.current = "up";
          break;
        case "ArrowDown":
          currentCommand.current = "down";
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", checkKey);

    return () => {
      document.removeEventListener("keydown", checkKey);
    };
  }, [gameStarted, gameFinished]);

  useEffect(() => {
    const gameTick = () => {
      if (!gameStarted || gameFinished) {
        return;
      }

      const direction = currentDirection.current;
      const command = currentCommand.current;
      const newCoords = [...snakeCoords.current];
      const head = newCoords[newCoords.length - 1];
      const newHead = { ...head };

      console.log("newCoords: ", newCoords);
      console.log("direction: ", direction);
      console.log("command: ", command);
      console.log("---------------");

      if (direction === "left" || direction === "right") {
        switch (command) {
          case "up":
            newHead.y -= 1;
            currentDirection.current = "up";
            break;
          case "down":
            newHead.y += 1;
            currentDirection.current = "down";
            break;
          default:
            newHead.x += direction === "left" ? -1 : 1;
            break;
        }
      }

      if (direction === "up" || direction === "down") {
        switch (command) {
          case "left":
            newHead.x -= 1;
            currentDirection.current = "left";
            break;
          case "right":
            newHead.x += 1;
            currentDirection.current = "right";
            break;
          default:
            newHead.y += direction === "up" ? -1 : 1;
            break;
        }
      }

      newCoords.push(newHead);
      newCoords.shift();
      snakeCoords.current = newCoords;
      currentCommand.current = null;

      const updatedScreen = JSON.parse(JSON.stringify(EMPTY_ANIMATION[0]));
      newCoords.forEach((coord) => {
        updatedScreen[coord.y][coord.x] = GREEN_HUE;
      });
      setCurrentScreen(updatedScreen);
    };

    const interval = setInterval(gameTick, 200);

    return () => {
      clearInterval(interval);
    };
  }, [gameStarted, gameFinished]);

  return {
    animation: [currentScreen],
    framesPerUpdate: 30,
    started: gameStarted,
    finished: gameFinished,
    setStarted: setGameStarted,
    setFinished: setGameFinished,
  };
};
