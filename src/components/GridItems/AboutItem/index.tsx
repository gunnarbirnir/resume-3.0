import type { FC } from "react";

import about from "../../../assets/json/about.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";

const AboutItem: FC = () => {
  return (
    <FadeIn direction="right">
      <Card scrollable>
        <h2>{about.title}</h2>
        {about.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Card>
    </FadeIn>
  );
};

export default AboutItem;
