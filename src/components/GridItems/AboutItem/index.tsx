import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const AboutItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <h2>About</h2>
      </FadeIn>
    </Card>
  );
};

export default AboutItem;
