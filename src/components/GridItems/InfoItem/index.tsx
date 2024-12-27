import { FC, useRef, useState } from "react";
import { LEDMessageSign } from "@gunnarbirnir/led-message-sign";

import info from "../../../assets/json/info.json";
import FadeIn from "../../FadeIn";
import { useObjectSize } from "../../../hooks";

const GREEN_HUE = 155;
const BLUE_HUE = 190;

const InfoItem: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { height: containerHeight } = useObjectSize(containerRef);
  const [clickCount, setClickCount] = useState(0);

  return (
    <FadeIn>
      <div
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
        onClick={() => setClickCount((prev) => prev + 1)}
      >
        <LEDMessageSign
          text={info.singleItem}
          fullWidth
          height={containerHeight}
          colorHue={clickCount % 2 == 0 ? GREEN_HUE : BLUE_HUE}
          onBulbLightness={100}
          offBulbLightness={10}
          backgroundLightness={5}
          frameLightness={20}
          animationFramesPerUpdate={8}
        />
      </div>
    </FadeIn>
  );
};

export default InfoItem;
