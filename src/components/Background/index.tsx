import { FC, CSSProperties } from "react";
import styled from "styled-components";

import { useWindowDimensions } from "../../hooks";

// Because only half is visible and half is shifted out
const GRADIENT_SCALE_UP = 4;
const GRADIENT_PRIMARY_PERCENTAGE_SMALL = 0.5;
const GRADIENT_PRIMARY_PERCENTAGE_LARGE = 0.6;
const GRADIENT_SECONDARY_PERCENTAGE_SMALL = 0.45;
const GRADIENT_SECONDARY_PERCENTAGE_LARGE = 0.65;

const Background: FC = () => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const isLandscape = windowWidth >= windowHeight;

  const gradientPrimaryWidth =
    GRADIENT_SCALE_UP *
    windowWidth *
    (isLandscape
      ? GRADIENT_PRIMARY_PERCENTAGE_SMALL
      : GRADIENT_PRIMARY_PERCENTAGE_LARGE);

  const gradientPrimaryHeight =
    GRADIENT_SCALE_UP *
    windowHeight *
    (isLandscape
      ? GRADIENT_PRIMARY_PERCENTAGE_LARGE
      : GRADIENT_PRIMARY_PERCENTAGE_SMALL);

  const gradientSecondaryWidth =
    GRADIENT_SCALE_UP *
    windowWidth *
    (isLandscape
      ? GRADIENT_SECONDARY_PERCENTAGE_SMALL
      : GRADIENT_SECONDARY_PERCENTAGE_LARGE);

  const gradientSecondaryHeight =
    GRADIENT_SCALE_UP *
    windowHeight *
    (isLandscape
      ? GRADIENT_SECONDARY_PERCENTAGE_LARGE
      : GRADIENT_SECONDARY_PERCENTAGE_SMALL);

  return (
    <StyledBackground
      style={
        {
          "--gradient-primary-width": `${gradientPrimaryWidth}px`,
          "--gradient-primary-height": `${gradientPrimaryHeight}px`,
          "--gradient-secondary-width": `${gradientSecondaryWidth}px`,
          "--gradient-secondary-height": `${gradientSecondaryHeight}px`,
        } as CSSProperties
      }
    >
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

  &.gradientPrimary {
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
