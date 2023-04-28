import type { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  icon: FC;
  href: string;
}

const SocialIcon: FC<Props> = ({ icon: Icon, href }) => {
  return (
    <a
      className={styles.socialIcon}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.iconBackground} />
      <Icon />
    </a>
  );
};

export default SocialIcon;
