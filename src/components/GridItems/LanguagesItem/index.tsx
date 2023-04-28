import type { FC } from "react";

import { Card } from "../../elements";
import type { GridItemProps } from "../types";

const LanguagesItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card hideContent={inTransition}>
      <h2>Languages</h2>
    </Card>
  );
};

export default LanguagesItem;
