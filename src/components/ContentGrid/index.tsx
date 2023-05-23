import { FC, useState, useEffect, CSSProperties } from "react";
import styled from "styled-components";

import { GRID_ANIMATION_DURATION_MS } from "../../constants";
import * as GridItem from "../GridItems";
import GridItemContainer from "./GridItemContainer";
import useGridLayout from "./useGridLayout";
import { GridItemType } from "./types";
import { formatGridString, calcItemColumnsAndRows } from "./utils";
import {
  GRID_ROW_MIN_HEIGHT,
  GRID_ROW_MAX_HEIGHT,
  GRID_SPACING,
} from "./constants";

const ContentGrid: FC = () => {
  const [inTransition, setInTransition] = useState(false);
  const [activeItem, setActiveItem] = useState<GridItemType | null>(null);
  const { gridLayout, rowsCount } = useGridLayout(activeItem);
  const gridTemplateAreas = formatGridString(gridLayout);

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

  return (
    <StyledContentGrid
      style={
        { gridTemplateAreas, "--grid-rows-count": rowsCount } as CSSProperties
      }
    >
      <GridItemContainer item={GridItemType.Name} gridLayout={gridLayout}>
        <GridItem.Name clearActiveItem={handleClearItem} />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Info} gridLayout={gridLayout}>
        <GridItem.Info />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.About} gridLayout={gridLayout}>
        <GridItem.About />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Image} gridLayout={gridLayout}>
        <GridItem.Image
          {...calcItemColumnsAndRows(GridItemType.Image, gridLayout)}
        />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Email} gridLayout={gridLayout}>
        <GridItem.Email />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Social} gridLayout={gridLayout}>
        <GridItem.Social />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Work} gridLayout={gridLayout}>
        <GridItem.Work
          inTransition={inTransition}
          active={activeItem === GridItemType.Work}
          setActive={handleSetActiveItem(GridItemType.Work)}
        />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Skills} gridLayout={gridLayout}>
        <GridItem.Skills
          inTransition={inTransition}
          active={activeItem === GridItemType.Skills}
          setActive={handleSetActiveItem(GridItemType.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer
        item={GridItemType.SkillsStatic}
        gridLayout={gridLayout}
      >
        <GridItem.Skills />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.References} gridLayout={gridLayout}>
        <GridItem.References
          inTransition={inTransition}
          active={activeItem === GridItemType.References}
          setActive={handleSetActiveItem(GridItemType.References)}
        />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Education} gridLayout={gridLayout}>
        <GridItem.Education />
      </GridItemContainer>

      <GridItemContainer item={GridItemType.Languages} gridLayout={gridLayout}>
        <GridItem.Languages />
      </GridItemContainer>
    </StyledContentGrid>
  );
};

export const StyledContentGrid = styled.div`
  --grid-row-min-height: ${GRID_ROW_MIN_HEIGHT}px;
  --grid-row-max-height: ${GRID_ROW_MAX_HEIGHT}px;
  --grid-spacing: ${GRID_SPACING}px;

  height: 100%;
  min-height: calc(
    var(--grid-rows-count) * var(--grid-row-min-height) +
      (var(--grid-rows-count) - 1) * var(--grid-spacing)
  );
  max-height: calc(
    var(--grid-rows-count) * var(--grid-row-max-height) +
      (var(--grid-rows-count) - 1) * var(--grid-spacing)
  );
  width: 100%;
  max-width: var(--content-max-width);
  isolation: isolate;

  display: grid;
  grid-auto-flow: column;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: var(--grid-spacing);
`;

export default ContentGrid;
