import type { FC } from "react";

import about from "../../../assets/json/about.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import DefaultLayout from "../../DefaultLayout";

const AboutItem: FC = () => {
  return (
    <FadeIn direction="right">
      <Card scrollable>
        <DefaultLayout>
          <h2>{about.title}</h2>
          {about.text.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </DefaultLayout>
      </Card>
    </FadeIn>
  );
};

export default AboutItem;
