import type { FC } from "react";

import education from "../../../assets/json/education.json";
import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const EducationItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card scrollable>
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
