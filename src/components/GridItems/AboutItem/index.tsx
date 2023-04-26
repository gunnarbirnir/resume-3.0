import type { FC } from "react";

import about from "../../../assets/json//about.json";
import { Card, FadeIn, Icon, IconHeader } from "../../elements";
import type { GridItemProps } from "../types";

const AboutItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card scrollable>
      <FadeIn visible={!inTransition}>
        <IconHeader text={about.title} icon={Icon.About} />
        {about.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </FadeIn>
    </Card>
  );
};

export default AboutItem;
