import { FC } from "react";

import about from "../../../assets/json/about.json";
import { useMediaQuery } from "../../../hooks";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import DefaultLayout from "../../DefaultLayout";
import { getRandomFadeInDelay } from "../utils";

const AboutItem: FC = () => {
  const { isGridSize } = useMediaQuery();
  const aboutText = isGridSize ? about.shortText : about.text;

  return (
    <FadeIn delay={getRandomFadeInDelay()}>
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
