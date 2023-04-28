import type { FC } from "react";

import { Card } from "../../elements";
import type { GridActionItemProps } from "../types";

const WorkItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  return (
    <Card
      scrollable
      hideContent={inTransition}
      buttonTitle="Work"
      expanded={active}
      setExpanded={setActive}
    >
      <h2>Work</h2>
      {active && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      )}
    </Card>
  );
};

export default WorkItem;
