import type { FC, PropsWithChildren, CSSProperties } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const ButtonBase: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.buttonBase, className)}
      style={style}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
