import type { FC } from "react";

import education from "../../../assets/json/education.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import ContentLayout from "../../ContentLayout";

const EducationItem: FC = () => {
  return (
    <FadeIn direction="left">
      <Card scrollable>
        <ContentLayout>
          <h2>{education.title}</h2>
          {education.text.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </ContentLayout>
      </Card>
    </FadeIn>
  );
};

export default EducationItem;
