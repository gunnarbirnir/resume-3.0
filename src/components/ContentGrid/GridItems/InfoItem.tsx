import type { FC } from "react";

import { Card } from "../../elements";
import type { GridItemProps } from "../types";
import ItemContentFadeIn from "../ItemContentFadeIn";

const InfoItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <ItemContentFadeIn visible={!inTransition}>
        <h2>Info</h2>
      </ItemContentFadeIn>
    </Card>
  );
};

export default InfoItem;
