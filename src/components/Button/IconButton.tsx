import type { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";
import ButtonBase from "./ButtonBase";

interface Props {
  icon: FC;
  color?: "primary" | "light";
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ icon: Icon, color = "primary", onClick }) => {
  return (
    <ButtonBase
      onClick={onClick}
      className={clsx(styles.iconButton, {
        [styles.iconButtonLight]: color === "light",
      })}
    >
      <Icon />
    </ButtonBase>
  );
};

export default IconButton;
