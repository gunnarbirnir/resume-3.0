import type { FC } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import * as GridItem from "../GridItems";
import styles from "./styles.module.css";
import GridItemContainer from "./GridItemContainer";
import { GridItemType } from "./types";

const ContentGrid: FC = () => {
  const [inTransition, setInTransition] = useState(false);
  const [activeItem, setActiveItem] = useState<GridItemType | null>(null);
  const [transitionItem, setTransitionItem] = useState<GridItemType | null>(
    null
  );

  const anyActive = activeItem !== null;
  const workActive = activeItem === GridItemType.Work;
  const skillsActive = activeItem === GridItemType.Skills;
  const referencesActive = activeItem === GridItemType.References;

  const handleSetActiveItem =
    (gridItem: GridItemType | null) =>
    (active: boolean = true) => {
      if (!inTransition) {
        setInTransition(true);
        setActiveItem(active ? gridItem : null);
        if (active) {
          setTransitionItem(gridItem);
        }
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
      if (!activeItem) {
        setTransitionItem(null);
      }
    }, CONTENT_GRID_ANIMATION_DURATION_MS);

    return () => {
      clearTimeout(transitionTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inTransition]);

  return (
    <div className={styles.contentGrid}>
      <GridItemContainer className="gr-2">
        <GridItem.Name inTransition={false} clearActiveItem={handleClearItem} />
      </GridItemContainer>

      <GridItemContainer hideItem={workActive || referencesActive}>
        <GridItem.Info inTransition={false} />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive || referencesActive}
        className="gr-3"
      >
        <GridItem.About inTransition={false} />
      </GridItemContainer>

      <GridItemContainer className="gr-4">
        <GridItem.Image inTransition={false} />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive}
        className={clsx({
          [styles.referencesActiveEmailItem]: referencesActive,
        })}
      >
        <GridItem.Email inTransition={false} />
      </GridItemContainer>

      <GridItemContainer
        hideItem={workActive}
        className={clsx({
          [styles.referencesActiveSocialItem]: referencesActive,
        })}
      >
        <GridItem.Social inTransition={false} />
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
          setActive={handleSetActiveItem(GridItemType.Work)}
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
          setActive={handleSetActiveItem(GridItemType.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer
        className={clsx({ [styles.referencesItemActive]: referencesActive })}
      >
        <GridItem.References
          inTransition={inTransition}
          active={referencesActive}
          setActive={handleSetActiveItem(GridItemType.References)}
        />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive} className="gr-2">
        <GridItem.Education inTransition={false} />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive}>
        <GridItem.Languages inTransition={false} />
      </GridItemContainer>
    </div>
  );
};

export default ContentGrid;
