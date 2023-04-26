import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";
import education from "./education.json";

const EducationItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <h2>{education.title}</h2>
        {education.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </FadeIn>
    </Card>
  );
};

export default EducationItem;
