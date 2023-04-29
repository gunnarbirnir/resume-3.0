import type { FC } from "react";

import about from "../../../assets/json//about.json";
import { Card } from "../../elements";
import type { GridItemProps } from "../types";

const AboutItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card scrollable inTransition={inTransition}>
      <h2>{about.title}</h2>
      {about.text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </Card>
  );
};

export default AboutItem;
