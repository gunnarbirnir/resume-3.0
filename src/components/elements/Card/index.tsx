import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  onClick?: () => void;
}

const Card: FC<PropsWithChildren<Props>> = ({ children, onClick }) => {
  return (
    <div
      className={clsx(styles.card, { [styles.clickableCard]: true })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
