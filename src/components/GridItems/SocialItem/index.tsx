import type { FC } from "react";

import Card from "../../Card";
import Icon from "../../Icon";
import FadeIn from "../../FadeIn";
import styles from "./styles.module.css";

const ITEMS = [
  {
    icon: Icon.Facebook,
    link: "https://www.facebook.com/gunnarbirnir/",
  },
  {
    icon: Icon.LinkedIn,
    link: "https://www.linkedin.com/in/gunnarbirnir/",
  },
  {
    icon: Icon.Github,
    link: "https://github.com/gunnarbirnir",
  },
];

const SocialItem: FC = () => {
  const renderSocialIcon = ({
    icon: Icon,
    link,
  }: {
    icon: FC;
    link: string;
  }) => {
    return (
      <a
        key={link}
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.socialIcon}
      >
        <div className={styles.iconBackground} />
        <Icon />
      </a>
    );
  };

  return (
    <FadeIn>
      <Card padding={false}>
        <div className={styles.socialItem}>
          <div className={styles.iconContainer}>
            {ITEMS.map(renderSocialIcon)}
          </div>
        </div>
      </Card>
    </FadeIn>
  );
};

export default SocialItem;
