import { FC, PropsWithChildren, CSSProperties } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import clsx from "clsx";

import { GRID_ANIMATION_DURATION_SEC } from "../../constants";
import { calcGridItemIndex } from "./utils";
import { GridItemType } from "./types";

interface Props {
  item: GridItemType;
  gridLayout: GridItemType[][];
  activeItem: GridItemType | null;
  lastActiveItem: GridItemType | null;
  fullscreenEnabled: boolean;
  className?: string;
  style?: CSSProperties;
}

const GridItemContainer: FC<PropsWithChildren<Props>> = ({
  item,
  gridLayout,
  activeItem,
  lastActiveItem,
  fullscreenEnabled,
  className,
  style,
  children,
}) => {
  const isFullscreen = item === activeItem && fullscreenEnabled;
  const fullscreenInTransition = item === lastActiveItem && fullscreenEnabled;
  const gridItemIndex = calcGridItemIndex(item, gridLayout);

  if (gridItemIndex === null) {
    return null;
  }

  return (
    <StyledGridItemContainer
      layout
      transition={{
        type: "spring",
        duration: GRID_ANIMATION_DURATION_SEC,
      }}
      className={clsx(className, { fullScreenItemContainer: isFullscreen })}
      style={{
        ...style,
        gridArea: item.toString(),
        zIndex: fullscreenInTransition ? 1000 : gridItemIndex,
      }}
    >
      {children}
    </StyledGridItemContainer>
  );
};

export const StyledGridItemContainer = styled(motion.article)`
  &.fullScreenItemContainer {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
  }
`;

export default GridItemContainer;
