import type { FC, PropsWithChildren, CSSProperties } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  scrollable?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  scrollable = false,
  className,
  style,
  children,
  onClick,
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        { [styles.clickableCard]: onClick },
        className
      )}
      style={style}
      onClick={onClick}
    >
      <div style={{ height: scrollable ? "auto" : "100%" }}>{children}</div>
    </div>
  );
};

export default Card;
