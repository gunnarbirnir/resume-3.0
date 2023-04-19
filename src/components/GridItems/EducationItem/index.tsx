import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const EducationItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <h2>Education</h2>
      </FadeIn>
    </Card>
  );
};

export default EducationItem;
