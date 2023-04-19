import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridActionItemProps } from "../types";

const ReferencesItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  return (
    <Card onClick={() => setActive(!active)}>
      <FadeIn visible={!inTransition}>
        <h2>References</h2>
      </FadeIn>
    </Card>
  );
};

export default ReferencesItem;
