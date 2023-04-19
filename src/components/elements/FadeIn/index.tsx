import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

interface Props {
  visible: boolean;
  direction?: "up" | "down";
}

const FadeIn: FC<PropsWithChildren<Props>> = ({
  visible,
  direction = "up",
  children,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx(styles.fadeIn, {
        [styles.fadeInDown]: direction === "down",
      })}
    >
      {children}
    </div>
  );
};

export default FadeIn;
