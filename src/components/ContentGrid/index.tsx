import { FC, useState, useEffect, CSSProperties } from "react";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import { useWindowDimensions } from "../../hooks";
import * as GridItem from "../GridItems";
import { GridItemType } from "./types";
import * as Styled from "./styles";
import { getGridLayout } from "./utils";

const GRID_COLUMN_WIDTH = 350;
const GRID_ROW_HEIGHT = 100;
const HORIZONTAL_PADDING = 64;
const VERTICAL_PADDING = 80;

const ContentGrid: FC = () => {
  const [inTransition, setInTransition] = useState(false);
  const [activeItem, setActiveItem] = useState<GridItemType | null>(null);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  const anyActive = activeItem !== null;
  const workActive = activeItem === GridItemType.Work;
  const skillsActive = activeItem === GridItemType.Skills;
  const referencesActive = activeItem === GridItemType.References;

  const columnCount = Math.floor(
    (windowWidth - 2 * HORIZONTAL_PADDING) / GRID_COLUMN_WIDTH
  );
  const rowCount = Math.floor(
    (windowHeight - 2 * VERTICAL_PADDING) / GRID_ROW_HEIGHT
  );
  const gridLayout = getGridLayout(columnCount, rowCount, activeItem);

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
    if (!inTransition && anyActive) {
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

  return (
    <Styled.ContentGrid
      style={
        {
          gridTemplateAreas: gridLayout,
          "--grid-columns-count": columnCount,
          "--grid-rows-count": rowCount,
        } as CSSProperties
      }
    >
      <Styled.NameItem>
        <GridItem.Name clearActiveItem={handleClearItem} />
      </Styled.NameItem>

      <Styled.InfoItem>
        <GridItem.Info />
      </Styled.InfoItem>

      <Styled.AboutItem>
        <GridItem.About />
      </Styled.AboutItem>

      <Styled.ImageItem>
        <GridItem.Image />
      </Styled.ImageItem>

      <Styled.EmailItem>
        <GridItem.Email />
      </Styled.EmailItem>

      <Styled.SocialItem>
        <GridItem.Social />
      </Styled.SocialItem>

      <Styled.WorkItem>
        <GridItem.Work
          inTransition={inTransition}
          active={workActive}
          setActive={handleSetActiveItem(GridItemType.Work)}
        />
      </Styled.WorkItem>

      <Styled.SkillsItem>
        <GridItem.Skills
          inTransition={inTransition}
          active={skillsActive}
          setActive={handleSetActiveItem(GridItemType.Skills)}
        />
      </Styled.SkillsItem>

      <Styled.ReferencesItem>
        <GridItem.References
          inTransition={inTransition}
          active={referencesActive}
          setActive={handleSetActiveItem(GridItemType.References)}
        />
      </Styled.ReferencesItem>

      {gridLayout.includes("education") && (
        <Styled.EducationItem>
          <GridItem.Education />
        </Styled.EducationItem>
      )}

      {gridLayout.includes("languages") && (
        <Styled.LanguagesItem>
          <GridItem.Languages />
        </Styled.LanguagesItem>
      )}
    </Styled.ContentGrid>
  );
};

export default ContentGrid;
