import type { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

const Background: FC = () => {
  return (
    <div className={styles.background}>
      <div
        className={clsx(styles.backgroundGradient, styles.gradientPrimary)}
      />
      <div
        className={clsx(styles.backgroundGradient, styles.gradientSecondary)}
      />
    </div>
  );
};

export default Background;
