import { FC, useRef } from "react";
import { LEDImageSign } from "@gunnarbirnir/led-message-sign";

import FadeIn from "../../FadeIn";
import { EMPTY_ANIMATION } from "./animation";
import { useObjectSize } from "../../../hooks";

const TerminalItem: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: containerHeight } = useObjectSize(containerRef);

  return (
    <FadeIn>
      <div ref={containerRef} style={{ height: "100%", width: "100%" }}>
        <LEDImageSign
          images={EMPTY_ANIMATION}
          fullWidth
          minHeight={containerHeight}
          onBulbLightness={100}
          offBulbLightness={10}
          frameLightness={20}
          backgroundLightness={0}
          animationFramesPerUpdate={8}
          frameToWidthRatio={0.025}
        />
      </div>
    </FadeIn>
  );
};

export default TerminalItem;
