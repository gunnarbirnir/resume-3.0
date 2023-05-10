import type { FC } from "react";

import education from "../../../assets/json/education.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";

const EducationItem: FC = () => {
  return (
    <FadeIn direction="left">
      <Card scrollable>
        <h2>{education.title}</h2>
        {education.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Card>
    </FadeIn>
  );
};

export default EducationItem;
