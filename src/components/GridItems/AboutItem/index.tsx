import { FC } from "react";

import about from "../../../assets/json/about.json";
import { useMediaQuery } from "../../../hooks";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import DefaultLayout from "../../DefaultLayout";

const AboutItem: FC = () => {
  const { isGridDesktop, isGridTablet } = useMediaQuery();
  const aboutText =
    isGridDesktop || isGridTablet ? about.shortText : about.text;

  return (
    <FadeIn>
      <Card scrollable>
        <DefaultLayout>
          <h2>{about.title}</h2>
          {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </DefaultLayout>
      </Card>
    </FadeIn>
  );
};

export default AboutItem;
