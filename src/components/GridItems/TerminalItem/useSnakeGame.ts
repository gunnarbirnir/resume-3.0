import { useState } from "react";

import { GAME_OVER_ANIMATION } from "./animation";

export const useSnakeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  return {
    animation: GAME_OVER_ANIMATION,
    framesPerUpdate: 30,
    started: gameStarted,
    finished: gameFinished,
    setStarted: setGameStarted,
    setFinished: setGameFinished,
  };
};
