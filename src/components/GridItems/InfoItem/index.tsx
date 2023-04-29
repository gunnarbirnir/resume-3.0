import type { FC } from "react";

import { Card } from "../../elements";
import type { GridItemProps } from "../types";

const InfoItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card inTransition={inTransition}>
      <h2>Info</h2>
    </Card>
  );
};

export default InfoItem;
