import type { FC } from "react";

import { Card } from "../../elements";
import type { SelectableGridItemProps } from "../types";
import ItemContentFadeIn from "../ItemContentFadeIn";

const ReferencesItem: FC<SelectableGridItemProps> = ({
  inTransition,
  toggleSelected,
}) => {
  return (
    <Card onClick={toggleSelected}>
      <ItemContentFadeIn visible={!inTransition}>
        <h2>References</h2>
      </ItemContentFadeIn>
    </Card>
  );
};

export default ReferencesItem;
