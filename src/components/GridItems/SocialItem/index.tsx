import type { FC } from "react";

import { Card, FadeIn, Icon } from "../../elements";
import type { GridItemProps } from "../types";
import styles from "./styles.module.css";
import SocialIcon from "./SocialIcon";

const SocialItem: FC<GridItemProps> = ({ inTransition }) => {
  return (
    <Card>
      <FadeIn visible={!inTransition}>
        <div className={styles.socialItem}>
          <div className={styles.iconContainer}>
            <SocialIcon
              icon={Icon.Facebook}
              href="https://www.facebook.com/gunnarbirnir/"
            />
            <SocialIcon
              icon={Icon.LinkedIn}
              href="https://www.linkedin.com/in/gunnarbirnir/"
            />
            <SocialIcon
              icon={Icon.Github}
              href="https://github.com/gunnarbirnir"
            />
          </div>
        </div>
      </FadeIn>
    </Card>
  );
};

export default SocialItem;