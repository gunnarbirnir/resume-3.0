import type { FC } from "react";
import { useState, useCallback, useEffect } from "react";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import * as GridItem from "../GridItems";
import styles from "./styles.module.css";
import GridItemContainer from "./GridItemContainer";
import { GridItemType } from "./types";

const ContentGrid: FC = () => {
  const [activeItem, setActiveItem] = useState<GridItemType | null>(null);
  const [inTransition, setInTransition] = useState(false);

  const handleSetActiveItem = useCallback(
    (gridItem: GridItemType | null) => (active: boolean) => {
      if (!inTransition) {
        setInTransition(true);
        setActiveItem(active ? gridItem : null);
      }
    },
    [inTransition]
  );

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
        <GridItem.Name inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Info inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer className="gr-3">
        <GridItem.About inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer className="gr-4">
        <GridItem.Image inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.SocialMedia inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Email inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Work
          inTransition={inTransition}
          active={activeItem === GridItemType.Work}
          setActive={handleSetActiveItem(GridItemType.Work)}
        />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Skills
          inTransition={inTransition}
          active={activeItem === GridItemType.Skills}
          setActive={handleSetActiveItem(GridItemType.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.References
          inTransition={inTransition}
          active={activeItem === GridItemType.References}
          setActive={handleSetActiveItem(GridItemType.References)}
        />
      </GridItemContainer>

      <GridItemContainer className="gr-2">
        <GridItem.Education inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Languages inTransition={inTransition} />
      </GridItemContainer>
    </div>
  );
};

export default ContentGrid;
