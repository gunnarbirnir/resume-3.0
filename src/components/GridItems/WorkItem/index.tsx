import type { FC } from "react";

import { Card } from "../../elements";
import type { GridActionItemProps } from "../types";
import { FadeIn } from "../../elements";

const WorkItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  return (
    <Card onClick={() => setActive(!active)}>
      <FadeIn visible={!inTransition}>
        <h2>Work</h2>
      </FadeIn>
    </Card>
  );
};

export default WorkItem;
