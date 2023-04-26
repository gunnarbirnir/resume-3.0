import type { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  text: string;
  icon: FC;
}

const IconHeader: FC<Props> = ({ text, icon: Icon }) => {
  return (
    <div className={styles.iconHeader}>
      <div className={styles.headerIcon}>
        <Icon />
      </div>
      <h2>{text}</h2>
    </div>
  );
};

export default IconHeader;
