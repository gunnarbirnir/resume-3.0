import type { FC } from "react";

import styles from "./styles.module.css";
import ButtonBase from "./ButtonBase";

interface Props {
  icon: FC;
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ icon: Icon, onClick }) => {
  return (
    <ButtonBase onClick={onClick} className={styles.iconButton}>
      <Icon />
    </ButtonBase>
  );
};

export default IconButton;
