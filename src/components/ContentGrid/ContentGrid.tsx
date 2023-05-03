import type { FC } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import * as GridItem from "../GridItems";
import styles from "./styles.module.css";
import GridItemContainer from "./GridItemContainer";
import { GridItemType } from "./types";

const ContentGrid: FC = () => {
  const [activeItem, setActiveItem] = useState<GridItemType | null>(null);
  const [inTransition, setInTransition] = useState(false);

  // const noneActive = activeItem === null;
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
        <GridItem.Name
          inTransition={inTransition}
          clearActiveItem={handleClearItem}
        />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive}>
        <GridItem.Info inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive} className="gr-3">
        <GridItem.About inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer className="gr-4">
        <GridItem.Image inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive}>
        <GridItem.Email inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive}>
        <GridItem.Social inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer className={clsx({ [styles.activeItem]: workActive })}>
        <GridItem.Work
          inTransition={inTransition}
          active={workActive}
          setActive={handleSetActiveItem(GridItemType.Work)}
        />
      </GridItemContainer>

      <GridItemContainer
        className={clsx({ [styles.activeItem]: skillsActive })}
      >
        <GridItem.Skills
          inTransition={inTransition}
          active={skillsActive}
          setActive={handleSetActiveItem(GridItemType.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer
        className={clsx({ [styles.activeItem]: referencesActive })}
      >
        <GridItem.References
          inTransition={inTransition}
          active={referencesActive}
          setActive={handleSetActiveItem(GridItemType.References)}
        />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive} className="gr-2">
        <GridItem.Education inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer hideItem={anyActive}>
        <GridItem.Languages inTransition={inTransition} />
      </GridItemContainer>
    </div>
  );
};

export default ContentGrid;
