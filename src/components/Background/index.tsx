import { FC } from "react";
import styled from "styled-components";

const Background: FC = () => {
  return (
    <StyledBackground>
      <BackgroundGradient className="gradientPrimary" />
      <BackgroundGradient className="gradientSecondary" />
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: var(--color-black);
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  animation-name: gradient-fade-in;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  /* Because only half is visible and half is shifted out */
  --gradient-scale-up: 4;

  &.gradientPrimary {
    --gradient-primary-width: calc(var(--gradient-scale-up) * 50vw);
    --gradient-primary-height: calc(var(--gradient-scale-up) * 60vh);
    width: var(--gradient-primary-width);
    height: var(--gradient-primary-height);
    left: calc(-1 * var(--gradient-primary-width) / 2);
    bottom: calc(-1 * var(--gradient-primary-height) / 2);
    background-image: radial-gradient(
      var(--color-primary-dark),
      var(--color-transparent) 50%
    );
  }

  &.gradientSecondary {
    --gradient-secondary-width: calc(var(--gradient-scale-up) * 45vw);
    --gradient-secondary-height: calc(var(--gradient-scale-up) * 65vh);
    width: var(--gradient-secondary-width);
    height: var(--gradient-secondary-height);
    top: calc(-1 * var(--gradient-secondary-height) / 2);
    right: calc(-1 * var(--gradient-secondary-width) / 2);
    background-image: radial-gradient(
      var(--color-secondary-dark),
      var(--color-transparent) 50%
    );
  }

  @keyframes gradient-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Background;
