import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import { FADE_IN_DURATION_MS } from "../../constants";
import styles from "./styles.module.css";

interface Props {
  visible: boolean;
  direction?: "up" | "down";
  duration?: "fast" | "slow";
}

const SLOW_DURATION_MS = 400;

const FadeIn: FC<PropsWithChildren<Props>> = ({
  visible,
  direction = "up",
  duration = "fast",
  children,
}) => {
  const animationDuration =
    duration === "slow" ? SLOW_DURATION_MS : FADE_IN_DURATION_MS;

  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx(styles.fadeIn, {
        [styles.fadeInDown]: direction === "down",
      })}
      style={{
        animationDuration: `${animationDuration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
