import { FC } from "react";

import about from "../../../assets/json/about.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import DefaultLayout from "../../DefaultLayout";
import { GridItemLayoutProps } from "../types";

const AboutItem: FC<GridItemLayoutProps> = ({ rows }) => {
  const aboutText = rows === 2 ? about.shortText : about.text;

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
