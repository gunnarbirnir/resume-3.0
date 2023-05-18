import type { FC } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import * as GridItem from "../GridItems";
import styles from "./styles.module.css";
import GridItemContainer from "./GridItemContainer";
import { GridActionItem } from "./types";

const ContentGrid: FC = () => {
  const [inTransition, setInTransition] = useState(false);
  const [activeItem, setActiveItem] = useState<GridActionItem | null>(null);

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
    <div className={styles.contentGrid}>
      <GridItemContainer className="gr-2">
        <GridItem.Name clearActiveItem={handleClearItem} />
      </GridItemContainer>

      <GridItemContainer hideItem={workActive || referencesActive}>
        <GridItem.Info />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive || referencesActive}
        className="gr-3"
      >
        <GridItem.About />
      </GridItemContainer>

      <GridItemContainer className="gr-4">
        <GridItem.Image />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive}
        className={clsx({
          [styles.referencesActiveEmailItem]: referencesActive,
        })}
      >
        <GridItem.Email />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive}
        className={clsx({
          [styles.referencesActiveSocialItem]: referencesActive,
        })}
      >
        <GridItem.Social />
      </GridItemContainer>

      <GridItemContainer
        className={clsx({
          [styles.workItemActive]: workActive,
          [styles.referencesActiveWorkItem]: referencesActive,
        })}
      >
        <GridItem.Work
          inTransition={inTransition}
          active={workActive}
          setActive={handleSetActiveItem(GridActionItem.Work)}
        />
      </GridItemContainer>

      <GridItemContainer
        className={clsx({
          [styles.skillsItemActive]: skillsActive,
          [styles.referencesActiveSkillsItem]: referencesActive,
        })}
      >
        <GridItem.Skills
          inTransition={inTransition}
          active={skillsActive}
          setActive={handleSetActiveItem(GridActionItem.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer
        className={clsx({ [styles.referencesItemActive]: referencesActive })}
      >
        <GridItem.References
          inTransition={inTransition}
          active={referencesActive}
          setActive={handleSetActiveItem(GridActionItem.References)}
        />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive} className="gr-2">
        <GridItem.Education />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive}>
        <GridItem.Languages />
      </GridItemContainer>
    </div>
  );
};

export default ContentGrid;
