import type { FC } from "react";
import { useState, useCallback, useEffect } from "react";

import { CONTENT_GRID_ANIMATION_DURATION_MS } from "../../constants";
import styles from "./styles.module.css";
import GridItemContainer from "./GridItemContainer";
import * as GridItem from "./GridItems";
import { ContentGridItem } from "./types";

const ContentGrid: FC = () => {
  const [inTransition, setInTransition] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ContentGridItem | null>(
    null
  );

  const toggleSelectedItem = useCallback(
    (gridItem: ContentGridItem | null) => () => {
      if (!inTransition) {
        setInTransition(true);

        if (selectedItem === gridItem) {
          setSelectedItem(null);
        } else {
          setSelectedItem(gridItem);
        }
      }
    },
    [inTransition, selectedItem]
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
      <GridItemContainer>
        <GridItem.Name inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Info inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.About inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Image inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.SocialMedia inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Email inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Languages inTransition={inTransition} />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Work
          inTransition={inTransition}
          selected={selectedItem === ContentGridItem.Work}
          toggleSelected={toggleSelectedItem(ContentGridItem.Work)}
        />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Skills
          inTransition={inTransition}
          selected={selectedItem === ContentGridItem.Skills}
          toggleSelected={toggleSelectedItem(ContentGridItem.Skills)}
        />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.References
          inTransition={inTransition}
          selected={selectedItem === ContentGridItem.References}
          toggleSelected={toggleSelectedItem(ContentGridItem.References)}
        />
      </GridItemContainer>

      <GridItemContainer>
        <GridItem.Education inTransition={inTransition} />
      </GridItemContainer>
    </div>
  );
};

export default ContentGrid;
