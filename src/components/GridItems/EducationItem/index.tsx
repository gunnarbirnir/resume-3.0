import { FC } from "react";

import education from "../../../assets/json/education.json";
import { useMediaQuery } from "../../../hooks";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import DefaultLayout from "../../DefaultLayout";

const EducationItem: FC = () => {
  const { isGridDesktop, isGridTablet } = useMediaQuery();
  const educationText =
    isGridDesktop || isGridTablet ? education.shortText : education.text;

  return (
    <FadeIn>
      <Card scrollable>
        <DefaultLayout>
          <h2>{education.title}</h2>
          {educationText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </DefaultLayout>
      </Card>
    </FadeIn>
  );
};

export default EducationItem;
