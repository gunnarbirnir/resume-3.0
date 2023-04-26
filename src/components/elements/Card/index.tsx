import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  scrollable?: boolean;
  onClick?: () => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  scrollable = false,
  children,
  onClick,
}) => {
  return (
    <div
      className={clsx(styles.card, { [styles.clickableCard]: onClick })}
      onClick={onClick}
    >
      <div style={{ height: scrollable ? "auto" : "100%" }}>{children}</div>
    </div>
  );
};

export default Card;
