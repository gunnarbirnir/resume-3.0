import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import { FADE_IN_DURATION_SEC } from "../../constants";
import styles from "./styles.module.css";

interface Props {
  visible?: boolean;
  direction?: "up" | "down" | "left" | "right";
  duration?: "fast" | "slow";
}

const SLOW_DURATION_SEC = 0.4;

const FadeIn: FC<PropsWithChildren<Props>> = ({
  visible = true,
  direction = "up",
  duration = "fast",
  children,
}) => {
  const animationDuration =
    duration === "slow" ? SLOW_DURATION_SEC : FADE_IN_DURATION_SEC;

  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx(styles.fadeIn, {
        [styles.fadeInDown]: direction === "down",
        [styles.fadeInLeft]: direction === "left",
        [styles.fadeInRight]: direction === "right",
      })}
      style={{
        animationDuration: `${animationDuration}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
