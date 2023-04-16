import type { FC } from "react";

import type { GridItemProps } from "../types";
import ItemContentFadeIn from "../ItemContentFadeIn";

const NameItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <ItemContentFadeIn visible={!inTransition}>
      <h1>Gunnar Olafsson</h1>
    </ItemContentFadeIn>
  );
};

export default NameItem;
