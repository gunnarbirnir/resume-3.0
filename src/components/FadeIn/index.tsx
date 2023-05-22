import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import clsx from "clsx";

import { FADE_IN_DURATION } from "../../constants";

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
    duration === "slow" ? SLOW_DURATION_SEC : FADE_IN_DURATION;

  if (!visible) {
    return null;
  }

  return (
    <StyledFadeIn
      className={clsx({
        fadeInDown: direction === "down",
        fadeInLeft: direction === "left",
        fadeInRight: direction === "right",
      })}
      style={{
        animationDuration: `${animationDuration}s`,
      }}
    >
      {children}
    </StyledFadeIn>
  );
};

const StyledFadeIn = styled.div`
  opacity: 0;
  height: 100%;
  animation-name: fade-in;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  transform: translateY(20px);

  &.fadeInDown {
    transform: translateY(-20px);
  }
  &.fadeInLeft {
    transform: translateX(20px);
  }
  &.fadeInRight {
    transform: translateX(-20px);
  }

  @keyframes fade-in {
    to {
      opacity: 1;
      transform: none;
    }
  }
`;

export default FadeIn;
