import type { FC } from "react";

import { Card } from "../../elements";
import type { GridItemProps } from "../types";

const EmailItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card inTransition={inTransition}>
      <h2>Email</h2>
    </Card>
  );
};

export default EmailItem;
