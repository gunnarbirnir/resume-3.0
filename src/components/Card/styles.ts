import styled from "styled-components";

export const CardContainer = styled.div`
  height: 100%;
  position: relative;
  isolation: isolate;
  --card-border-radius: 8px;
`;

export const GradientBackground = styled.div`
  z-index: -1;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  border-radius: var(--card-border-radius);
  background-image: linear-gradient(
    var(--gradient-rotation),
    var(--color-primary) 50%,
    var(--color-secondary)
  );

  &.gradientShadow {
    z-index: -2;
    display: none;
    border-radius: 0px;
    filter: blur(8px);
    opacity: 0.8;
    /* To fix in Safari */
    transform: translateZ(0);

    ${CardContainer}:hover & {
      display: block;
    }
  }
`;

export const StyledCard = styled.div`
  z-index: 1;
  height: 100%;
  background-color: var(--color-gray-6);
  border-radius: var(--card-border-radius);
  border: 1px solid var(--color-gray-4);
  overflow-x: hidden;
  /* To fix on iOS */
  transform: translateZ(0);

  &.clickableCard {
    cursor: pointer;
    &:hover {
      border-color: var(--color-primary);
    }
  }

  &.buttonCard {
    cursor: pointer;
    border-color: var(--color-transparent);
    background-clip: padding-box;
    background-image: linear-gradient(
      var(--gradient-rotation),
      var(--color-gray-6) 50%,
      var(--color-gray-5)
    );
  }

  .contentPadding {
    padding: var(--spacing-4) var(--spacing-5);
  }
`;

export const TitleArea = styled.div`
  z-index: 10;
  position: sticky;
  top: 0px;
  right: 0px;
  width: 100%;
  border-top-left-radius: var(--card-border-radius);
  border-top-right-radius: var(--card-border-radius);
  padding: var(--spacing-4) var(--spacing-5);
  background-color: var(--color-gray-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;

  h2 {
    font-size: var(--font-size-large);
  }

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;

export const ExpandedContent = styled.div`
  flex: 1;
  background-color: var(--color-gray-6);
  padding: var(--spacing-4) var(--spacing-5) var(--spacing-6) var(--spacing-5);
`;

export const StyledButtonCardContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: var(--font-size-medium-px);
  }
`;

export const ButtonTitleLine = styled.div`
  height: 3px;
  width: 30px;
  background-color: var(--color-gray-3);
  margin-top: var(--spacing-2);
  transition: width 0.2s ease-out;

  ${StyledCard}${".buttonCard"}:hover & {
    width: 100%;
  }
`;

export const ButtonCardIconContainer = styled.div`
  height: 30px;
  width: 30px;
  display: grid;
  place-content: center;

  .buttonCardIcon {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: grid;
    place-content: center;
    background-color: var(--color-white);
    overflow: hidden;

    svg {
      height: 24px;
      width: 24px;
      color: var(--color-gray-6);
    }
  }

  ${StyledCard}${".buttonCard"}:hover & .buttonCardIconLoaded {
    transform: scale(1.1);
  }
`;
