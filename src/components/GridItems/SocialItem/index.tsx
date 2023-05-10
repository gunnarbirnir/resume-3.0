import type { FC } from "react";

import Card from "../../Card";
import Icon from "../../Icon";
import FadeIn from "../../FadeIn";
import styles from "./styles.module.css";
import SocialIcon from "./SocialIcon";

const SocialItem: FC = () => {
  return (
    <FadeIn>
      <Card padding={false}>
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
      </Card>
    </FadeIn>
  );
};

export default SocialItem;
