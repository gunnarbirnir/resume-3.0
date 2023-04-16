import type { FC } from "react";

import { Card } from "../../elements";
import type { SelectableGridItemProps } from "../types";
import ItemContentFadeIn from "../ItemContentFadeIn";

const WorkItem: FC<SelectableGridItemProps> = ({
  inTransition,
  toggleSelected,
}) => {
  return (
    <Card onClick={toggleSelected}>
      <ItemContentFadeIn visible={!inTransition}>
        <h2>Work</h2>
      </ItemContentFadeIn>
    </Card>
  );
};

export default WorkItem;
