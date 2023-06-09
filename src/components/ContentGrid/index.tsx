import { FC, useState, useEffect, CSSProperties } from "react";
import styled from "styled-components";

import {
  GRID_ANIMATION_DURATION_MS,
  GRID_ROW_MIN_HEIGHT,
  GRID_ROW_MAX_HEIGHT,
  GRID_SPACING,
} from "../../constants";
import { useMediaQuery } from "../../hooks";
import * as GridItem from "../GridItems";
import ErrorMessage from "../ErrorMessage";
import GridItemContainer from "./GridItemContainer";
import useGridLayout from "./useGridLayout";
import { GridItemType } from "./types";
import { formatGridString, calcItemColumnsAndRows } from "./utils";

const ContentGrid: FC = () => {
  const { isMobileOrSmaller } = useMediaQuery();
  const [inTransition, setInTransition] = useState(false);
  const [activeItem, setActiveItem] = useState<GridItemType | null>(null);
  const [lastActiveItem, setLastActiveItem] = useState<GridItemType | null>(
    null
  );
  const { gridLayout, rowsCount } = useGridLayout(activeItem);
  const gridTemplateAreas = formatGridString(gridLayout);
  const gridItemProps = { gridLayout, activeItem, lastActiveItem };

  const handleSetActiveItem = (gridItem: GridItemType) => (active: boolean) => {
    if (!inTransition) {
      setInTransition(true);
      setActiveItem(active ? gridItem : null);
    }
  };

  const handleClearItem = () => {
    if (!inTransition && activeItem !== null) {
      setInTransition(true);
      setActiveItem(null);
    }
  };

  useEffect(() => {
    if (!inTransition) {
      return;
    }

    const transitionTimeout = setTimeout(() => {
      setInTransition(false);
    }, GRID_ANIMATION_DURATION_MS);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [inTransition]);

  useEffect(() => {
    if (activeItem) {
      setLastActiveItem(activeItem);
    }
  }, [activeItem]);

  if (!gridLayout.length) {
    return <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>;
  }

  return (
    <StyledContentGrid
      className={
        isMobileOrSmaller ? "content-grid-mobile" : "content-grid-default"
      }
      style={
        { gridTemplateAreas, "--grid-rows-count": rowsCount } as CSSProperties
      }
    >
      <GridItemContainer item={GridItemType.Name} {...gridItemProps}>
        <GridItem.Name clearActiveItem={handleClearItem} />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Info} {...gridItemProps}>
        <GridItem.Info />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.About} {...gridItemProps}>
        <GridItem.About />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Image} {...gridItemProps}>
        <GridItem.Image
          {...calcItemColumnsAndRows(GridItemType.Image, gridLayout)}
        />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Email} {...gridItemProps}>
        <GridItem.Email />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Social} {...gridItemProps}>
        <GridItem.Social />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Work} {...gridItemProps}>
        <GridItem.Work
          inTransition={inTransition}
          active={activeItem === GridItemType.Work}
          setActive={handleSetActiveItem(GridItemType.Work)}
        />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Skills} {...gridItemProps}>
        <GridItem.Skills
          inTransition={inTransition}
          active={activeItem === GridItemType.Skills}
          setActive={handleSetActiveItem(GridItemType.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.SkillsStatic} {...gridItemProps}>
        <GridItem.Skills />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.References} {...gridItemProps}>
        <GridItem.References
          inTransition={inTransition}
          active={activeItem === GridItemType.References}
          setActive={handleSetActiveItem(GridItemType.References)}
        />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Education} {...gridItemProps}>
        <GridItem.Education />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Languages} {...gridItemProps}>
        <GridItem.Languages />
      </GridItemContainer>
    </StyledContentGrid>
  );
};

export const StyledContentGrid = styled.div`
  --grid-spacing: ${GRID_SPACING}px;

  width: 100%;
  max-width: var(--content-max-width);
  display: grid;
  gap: var(--grid-spacing);
  isolation: isolate;

  &.content-grid-default {
    --grid-row-min-height: ${GRID_ROW_MIN_HEIGHT}px;
    --grid-row-max-height: ${GRID_ROW_MAX_HEIGHT}px;

    height: 100%;
    min-height: calc(
      var(--grid-rows-count) * var(--grid-row-min-height) +
        (var(--grid-rows-count) - 1) * var(--grid-spacing)
    );
    max-height: calc(
      var(--grid-rows-count) * var(--grid-row-max-height) +
        (var(--grid-rows-count) - 1) * var(--grid-spacing)
    );
    grid-auto-rows: 1fr;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
  }

  &.content-grid-mobile {
    grid-auto-rows: minmax(92px, auto);
  }
`;

export default ContentGrid;
