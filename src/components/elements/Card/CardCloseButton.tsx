import type { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  collapseCard: () => void;
}

const CardCloseButton: FC<Props> = ({ collapseCard }) => {
  return (
    <p className={styles.closeButton} onClick={collapseCard}>
      X
    </p>
  );
};

export default CardCloseButton;
