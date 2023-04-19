import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const LanguagesItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <h2>Languages</h2>
      </FadeIn>
    </Card>
  );
};

export default LanguagesItem;
