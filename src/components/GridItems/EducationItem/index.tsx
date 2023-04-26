import type { FC } from "react";

import education from "../../../assets/json/education.json";
import { Card, FadeIn, Icon, IconHeader } from "../../elements";
import type { GridItemProps } from "../types";

const EducationItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card scrollable>
      <FadeIn visible={!inTransition}>
        <IconHeader text={education.title} icon={Icon.Education} />
        {education.text.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </FadeIn>
    </Card>
  );
};

export default EducationItem;
