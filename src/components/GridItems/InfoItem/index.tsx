import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const InfoItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <h2>Info</h2>
      </FadeIn>
    </Card>
  );
};

export default InfoItem;
