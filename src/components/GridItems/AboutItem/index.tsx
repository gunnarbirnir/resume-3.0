import type { FC } from "react";

import about from "../../../assets/json//about.json";
import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const AboutItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card scrollable>
      <FadeIn visible={!inTransition}>
        <h2>{about.title}</h2>
        {about.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </FadeIn>
    </Card>
  );
};

export default AboutItem;
