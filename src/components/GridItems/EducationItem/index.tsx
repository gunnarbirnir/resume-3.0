import type { FC } from "react";

import education from "../../../assets/json/education.json";
import Card from "../../Card";

const EducationItem: FC = () => {
  return (
    <Card scrollable>
      <h2>{education.title}</h2>
      {education.text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </Card>
  );
};

export default EducationItem;
