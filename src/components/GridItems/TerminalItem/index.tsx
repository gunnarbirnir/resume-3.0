import { LEDImageSign } from "@gunnarbirnir/led-message-sign";
import { FC, useRef } from "react";

import { useObjectSize } from "../../../hooks";
import FadeIn from "../../FadeIn";
import { TERMINAL_ANIMATION } from "./animation";
import { useSnakeGame } from "./useSnakeGame";

const TerminalItem: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: containerHeight } = useObjectSize(containerRef);
  const {
    started: gameStarted,
    finished: gameFinished,
    animation: gameAnimation,
    framesPerUpdate: gameFramesPerUpdate,
    setStarted: setGameStarted,
  } = useSnakeGame();
  const gameOngoing = gameStarted && !gameFinished;

  return (
    <FadeIn>
      <div
        ref={containerRef}
        style={{
          height: "100%",
          width: "100%",
          cursor: !gameOngoing ? "pointer" : "default",
        }}
        onClick={!gameOngoing ? () => setGameStarted(true) : undefined}
      >
        <LEDImageSign
          images={gameOngoing ? gameAnimation : TERMINAL_ANIMATION}
          animationFramesPerUpdate={gameOngoing ? gameFramesPerUpdate : 8}
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
