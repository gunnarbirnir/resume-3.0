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
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  /* Because only half is visible and half is shifted out */
  --gradient-scale-up: 4;
  --gradient-base-width: max(
    200px,
    calc((100vw - var(--content-max-width)) / 2)
  );

  &.gradientPrimary {
    --gradient-primary-width: calc(
      var(--gradient-scale-up) * var(--gradient-base-width) + 600px
    );
    --gradient-primary-height: calc(var(--gradient-primary-width) / 1.5);
    width: var(--gradient-primary-width);
    height: var(--gradient-primary-height);
    left: calc(-1 * var(--gradient-primary-width) / 2);
    bottom: calc(-1 * var(--gradient-primary-height) / 2 - 4vh);
    animation-duration: 1.5s;
    background-image: radial-gradient(
      var(--color-primary-dark),
      var(--color-transparent) 50%
    );
  }

  &.gradientSecondary {
    --gradient-secondary-width: calc(
      var(--gradient-scale-up) * var(--gradient-base-width) + 200px
    );
    --gradient-secondary-height: calc(var(--gradient-secondary-width) * 2);
    width: var(--gradient-secondary-width);
    height: var(--gradient-secondary-height);
    top: calc(-1 * var(--gradient-secondary-height) / 2);
    right: calc(-1 * var(--gradient-secondary-width) / 2);
    animation-duration: 1s;
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
