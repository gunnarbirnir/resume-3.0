import type { FC } from "react";

import education from "../../../assets/json/education.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import DefaultLayout from "../../DefaultLayout";

const EducationItem: FC = () => {
  return (
    <FadeIn direction="left">
      <Card scrollable>
        <DefaultLayout>
          <h2>{education.title}</h2>
          {education.text.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </DefaultLayout>
      </Card>
    </FadeIn>
  );
};

export default EducationItem;
