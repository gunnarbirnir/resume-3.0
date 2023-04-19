import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const EmailItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <h2>Email</h2>
      </FadeIn>
    </Card>
  );
};

export default EmailItem;
