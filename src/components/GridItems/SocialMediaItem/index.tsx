import type { FC } from "react";

import { Card, FadeIn } from "../../elements";
import type { GridItemProps } from "../types";

const SocialMediaItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <h2>SocialMedia</h2>
      </FadeIn>
    </Card>
  );
};

export default SocialMediaItem;
