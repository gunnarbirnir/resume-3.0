import { FC, useState, useEffect } from "react";
import styled from "styled-components";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import { useWindowDimensions } from "../../hooks";
import * as GridItem from "../GridItems";
import GridItemContainer from "./GridItemContainer";
import { GridItemType } from "./types";
import { calcColumnCount, calcRowCount, calcGridLayout } from "./utils";
import { GRID_COLUMN_WIDTH, GRID_ROW_HEIGHT } from "./constants";

const ContentGrid: FC = () => {
  const [inTransition, setInTransition] = useState(false);
  const [activeItem, setActiveItem] = useState<GridItemType | null>(null);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const columnCount = calcColumnCount(windowWidth);
  const rowCount = calcRowCount(windowHeight);
  const gridLayout = calcGridLayout(columnCount, rowCount, activeItem);

  console.log("columnCount: ", columnCount);
  console.log("rowCount: ", rowCount);
  console.log("gridLayout: ", gridLayout);

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
    }, CONTENT_GRID_ANIMATION_DURATION_MS);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [inTransition]);

  /* const GridItemContainer: FC<PropsWithChildren<{ item: GridItemType }>> = ({
    item,
    children,
  }) => {
    if (hideGridItem(item, gridLayout)) {
      return null;
    }

    return (
      <motion.article
        layout
        transition={{
          type: "spring",
          duration: CONTENT_GRID_ANIMATION_DURATION_SEC,
        }}
        style={{ gridArea: item.toString() }}
      >
        {children}
      </motion.article>
    );
  };
 */

  return (
    <StyledContentGrid style={{ gridTemplateAreas: gridLayout }}>
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
        <GridItem.Image />
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
  width: 100%;
  max-width: var(--content-max-width);
  isolation: isolate;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: ${GRID_COLUMN_WIDTH}px;
  grid-auto-rows: ${GRID_ROW_HEIGHT}px;
  justify-content: center;
  gap: var(--spacing-5);
`;

export default ContentGrid;
