import { useRef, useState, useEffect, useCallback } from "react";

import { gameOverAnimation } from "../animations";
import { Coords, Direction } from "./types";
import { useGameInput } from "./useGameInput";
import { useGameFlow } from "./useGameFlow";
import { getRandomCoords, updateScreen } from "./utils";

const INITIAL_COORDS: Coords[] = [
  { x: 1, y: 3 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 4, y: 3 },
];
const GAME_OVER_FPU = 30;
const FRAME_DURATION = 1000 / 60;

export const useSnakeGame = () => {
  const activeDirection = useRef<Direction>("right");
  const activeCommand = useRef<Direction | null>(null);
  const applePosition = useRef<Coords>(getRandomCoords({ fromX: 6 }));
  const snakeCoords = useRef<Coords[]>(INITIAL_COORDS);

  const [gameScore, setGameScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [gameScreen, setGameScreen] = useState(
    updateScreen(INITIAL_COORDS, applePosition.current)
  );

  useGameInput({ gameFinished, gameStarted, activeCommand });
  useGameFlow({
    gameScore,
    gameStarted,
    gameFinished,
    activeCommand,
    activeDirection,
    applePosition,
    snakeCoords,
    setGameScore,
    setGameScreen,
    setGameFinished,
  });

  const resetGame = useCallback(() => {
    activeDirection.current = "right";
    activeCommand.current = null;
    applePosition.current = getRandomCoords({ fromX: 6 });
    snakeCoords.current = INITIAL_COORDS;

    setGameScore(0);
    setGameStarted(false);
    setGameFinished(false);
    setGameScreen(updateScreen(INITIAL_COORDS, applePosition.current));
  }, []);

  const startGame = useCallback(() => {
    resetGame();
    setGameStarted(true);
  }, [resetGame]);

  // Show game over info three times
  // It would be better to replace this with onFinished callback in LEDImageSign
  useEffect(() => {
    let gameOverTimeout: number | null = null;

    if (gameFinished) {
      gameOverTimeout = setTimeout(() => {
        resetGame();
        // -10 to prevent animation starting again and flickering
      }, GAME_OVER_FPU * FRAME_DURATION * gameOverAnimation(0).length * 3 - 10);
    }

    return () => {
      if (gameOverTimeout) {
        clearTimeout(gameOverTimeout);
      }
    };
  }, [gameFinished, resetGame]);

  return {
    animation: gameFinished ? gameOverAnimation(gameScore) : [gameScreen],
    framesPerUpdate: GAME_OVER_FPU,
    started: gameStarted,
    finished: gameFinished,
    startGame,
    resetGame,
  };
};
