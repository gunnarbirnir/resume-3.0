import { useEffect } from "react";

import { Direction } from "./types";

export const useGameInput = ({
  gameStarted,
  gameFinished,
  activeCommand,
}: {
  gameStarted: boolean;
  gameFinished: boolean;
  activeCommand: React.MutableRefObject<Direction | null>;
}) => {
  // TODO: Handle mobile input
  useEffect(() => {
    const checkKey = (e: KeyboardEvent) => {
      if (!gameStarted || gameFinished) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          activeCommand.current = "left";
          break;
        case "ArrowRight":
          activeCommand.current = "right";
          break;
        case "ArrowUp":
          activeCommand.current = "up";
          break;
        case "ArrowDown":
          activeCommand.current = "down";
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", checkKey);

    return () => {
      document.removeEventListener("keydown", checkKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- activeCommand is a ref
  }, [gameStarted, gameFinished]);
};
