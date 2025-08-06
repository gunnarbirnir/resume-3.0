import { LEDImageSign } from "@gunnarbirnir/led-message-sign";
import { FC, useRef, useEffect } from "react";

import { useObjectSize } from "../../../hooks";
import FadeIn from "../../FadeIn";
import { TERMINAL_ANIMATION } from "./animations";
import { useSnakeGame } from "./game/useSnakeGame";

const TerminalItem: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: containerHeight } = useObjectSize(containerRef);
  const {
    started: gameStarted,
    finished: gameFinished,
    animation: gameAnimation,
    framesPerUpdate: gameFramesPerUpdate,
    startGame: startSnakeGame,
  } = useSnakeGame();
  const gameOngoing = gameStarted && !gameFinished;

  useEffect(() => {
    const checkKey = (e: KeyboardEvent) => {
      if (
        !gameStarted &&
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
      ) {
        startSnakeGame();
      }

      if (gameFinished && e.key === " ") {
        startSnakeGame();
      }
    };

    document.addEventListener("keydown", checkKey);

    return () => {
      document.removeEventListener("keydown", checkKey);
    };
  }, [gameStarted, gameFinished, startSnakeGame]);

  return (
    <FadeIn>
      <div
        ref={containerRef}
        style={{
          height: "100%",
          width: "100%",
          cursor: !gameOngoing ? "pointer" : "default",
        }}
        onClick={!gameOngoing ? startSnakeGame : undefined}
      >
        <LEDImageSign
          // TODO: Go over animation file
          images={gameStarted ? gameAnimation : TERMINAL_ANIMATION}
          animationFramesPerUpdate={gameStarted ? gameFramesPerUpdate : 8}
          fullWidth
          minHeight={containerHeight}
          onBulbLightness={100}
          offBulbLightness={10}
          frameLightness={20}
          backgroundLightness={0}
          frameToWidthRatio={0.025}
        />
      </div>
    </FadeIn>
  );
};

export default TerminalItem;
