import type { FC } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import { useMediaQueries } from "../../hooks";
import * as GridItem from "../GridItems";
import styles from "./styles.module.css";
import GridItemContainer from "./GridItemContainer";
import { GridActionItem } from "./types";

const ContentGrid: FC = () => {
  const [inTransition, setInTransition] = useState(false);
  const [activeItem, setActiveItem] = useState<GridActionItem | null>(null);
  const { isLargeVertical } = useMediaQueries();

  const anyActive = activeItem !== null;
  const workActive = activeItem === GridActionItem.Work;
  const skillsActive = activeItem === GridActionItem.Skills;
  const referencesActive = activeItem === GridActionItem.References;

  const handleSetActiveItem =
    (gridItem: GridActionItem) =>
    (active: boolean = true) => {
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
    <div
      className={clsx(styles.contentGrid, {
        [styles.workItemActive]: workActive,
        [styles.skillsItemActive]: skillsActive,
        [styles.referencesItemActive]: referencesActive,
      })}
    >
      <GridItemContainer className={styles.nameItem}>
        <GridItem.Name clearActiveItem={handleClearItem} />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive || (referencesActive && !isLargeVertical)}
        className={styles.infoItem}
      >
        <GridItem.Info />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive || referencesActive}
        className={styles.aboutItem}
      >
        <GridItem.About />
      </GridItemContainer>

      <GridItemContainer className={styles.imageItem}>
        <GridItem.Image />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive && !isLargeVertical}
        className={styles.emailItem}
      >
        <GridItem.Email />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive && !isLargeVertical}
        className={styles.socialItem}
      >
        <GridItem.Social />
      </GridItemContainer>

      <GridItemContainer className={styles.workItem}>
        <GridItem.Work
          inTransition={inTransition}
          active={workActive}
          setActive={handleSetActiveItem(GridActionItem.Work)}
        />
      </GridItemContainer>

      <GridItemContainer className={styles.skillsItem}>
        <GridItem.Skills
          inTransition={inTransition}
          active={skillsActive}
          setActive={handleSetActiveItem(GridActionItem.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer className={styles.referencesItem}>
        <GridItem.References
          inTransition={inTransition}
          active={referencesActive}
          setActive={handleSetActiveItem(GridActionItem.References)}
        />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive || referencesActive}
        className={styles.skillsItemStatic}
      >
        <GridItem.Skills />
      </GridItemContainer>

      <GridItemContainer
        hideItem={isLargeVertical ? workActive : anyActive}
        className={styles.educationItem}
      >
        <GridItem.Education />
      </GridItemContainer>

      <GridItemContainer
        hideItem={isLargeVertical ? workActive : anyActive}
        className={styles.languageItem}
      >
        <GridItem.Languages />
      </GridItemContainer>
    </div>
  );
};

export default ContentGrid;
