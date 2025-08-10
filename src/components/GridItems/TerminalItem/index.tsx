import { LEDImageSign } from "@gunnarbirnir/led-message-sign";
import { FC, useRef, useEffect, useCallback } from "react";

import { useObjectSize, useMediaQuery } from "../../../hooks";
import FadeIn from "../../FadeIn";
import { TERMINAL_ANIMATION } from "./animations";
import { useSnakeGame } from "./game/useSnakeGame";

const TERMINAL_FPU = 8;

const TerminalItem: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ledSignRef = useRef<{
    redrawImage: (args: { newImage: (number | null)[][] }) => void;
  }>(null);

  const { isMobileOrSmaller } = useMediaQuery();
  const { height: containerHeight } = useObjectSize(containerRef);
  const redrawGameScreen = useCallback((newImage: (number | null)[][]) => {
    if (ledSignRef?.current) {
      ledSignRef.current.redrawImage({ newImage });
    }
  }, []);

  const {
    started: gameStarted,
    finished: gameFinished,
    animation: gameAnimation,
    framesPerUpdate: gameFramesPerUpdate,
    startGame: startSnakeGame,
  } = useSnakeGame({ redrawScreen: redrawGameScreen });
  const gameOngoing = gameStarted && !gameFinished;
  const startGameClickDisabled = gameOngoing || isMobileOrSmaller;

  useEffect(() => {
    const checkKey = (e: KeyboardEvent) => {
      if (
        !gameStarted &&
        !isMobileOrSmaller &&
        ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)
      ) {
        startSnakeGame();
      }

      if (gameFinished && !isMobileOrSmaller && e.key === " ") {
        startSnakeGame();
      }
    };

    document.addEventListener("keydown", checkKey);

    return () => {
      document.removeEventListener("keydown", checkKey);
    };
  }, [gameStarted, gameFinished, isMobileOrSmaller, startSnakeGame]);

  return (
    <FadeIn>
      <div
        ref={containerRef}
        style={{
          height: "100%",
          width: "100%",
          cursor: !startGameClickDisabled ? "pointer" : "default",
        }}
        onClick={!startGameClickDisabled ? startSnakeGame : undefined}
      >
        <LEDImageSign
          ref={ledSignRef}
          images={gameStarted ? gameAnimation : TERMINAL_ANIMATION}
          animationFramesPerUpdate={
            gameStarted ? gameFramesPerUpdate : TERMINAL_FPU
          }
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
