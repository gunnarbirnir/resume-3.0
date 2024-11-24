import { FC, useMemo } from "react";
import { LEDMessageSign } from "@gunnarbirnir/led-message-sign";

import info from "../../../assets/json/info.json";
import FadeIn from "../../FadeIn";

const InfoItem: FC = () => {
  const signText = useMemo(() => info.items.join(" - "), []);

  return (
    <FadeIn>
      <LEDMessageSign
        text={signText}
        fullWidth
        height={100}
        colorHue={155}
        animationFramesPerUpdate={4}
      />
    </FadeIn>
  );
};

export default InfoItem;
