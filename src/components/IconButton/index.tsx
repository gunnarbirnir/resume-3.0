import type { FC } from "react";

import styles from "./styles.module.css";

interface Props {
  icon: FC;
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ icon: Icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.iconButton}>
      <Icon />
    </button>
  );
};

export default IconButton;
