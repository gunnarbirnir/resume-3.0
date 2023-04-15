import type { FC } from "react";
import {
  PropsWithChildren,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import styles from "./styles.module.css";
import { Card } from "../elements";
import {
  CARD_GRID_ANIMATION_DURATION_SEC,
  CARD_GRID_ANIMATION_DURATION_MS,
} from "../../constants";

const CardGrid: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hideContent, setHideContent] = useState(false);

  const onCardClick = useCallback(() => {
    if (!hideContent) {
      setHideContent(true);

      if (selectedIndex === 0) {
        setSelectedIndex(null);
      } else {
        setSelectedIndex(0);
      }
    }
  }, [hideContent, selectedIndex]);

  useEffect(() => {
    if (!hideContent) {
      return;
    }

    const hideTimeout = setTimeout(() => {
      setHideContent(false);
    }, CARD_GRID_ANIMATION_DURATION_MS);

    return () => {
      clearTimeout(hideTimeout);
    };
  }, [hideContent]);

  return (
    <div
      className={clsx(styles.cardGrid, {
        [styles.aboutLayout]: selectedIndex !== null,
      })}
    >
      <CardGridItem
        index={0}
        selectedIndex={selectedIndex}
        hideContent={hideContent}
        onCardClick={onCardClick}
      >
        <h2>About me</h2>
        {selectedIndex === 0 && (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A et
            veritatis velit quidem blanditiis suscipit, sapiente necessitatibus,
            obcaecati corporis officia ad magni quisquam id. Voluptatum,
            suscipit. Ad facere consequatur ipsum? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. A et veritatis velit quidem blanditiis
            suscipit, sapiente necessitatibus, obcaecati corporis officia ad
            magni quisquam id. Voluptatum, suscipit. Ad facere consequatur
            ipsum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
            et veritatis velit quidem blanditiis suscipit, sapiente
            necessitatibus, obcaecati corporis officia ad magni quisquam id.
            Voluptatum, suscipit. Ad facere consequatur ipsum?
          </p>
        )}
      </CardGridItem>
      <CardGridItem
        index={1}
        hideContent={hideContent}
        selectedIndex={selectedIndex}
        onCardClick={onCardClick}
      >
        <h2>Work</h2>
      </CardGridItem>
      <CardGridItem
        index={2}
        selectedIndex={selectedIndex}
        hideContent={hideContent}
        onCardClick={onCardClick}
      >
        <h2>Skills</h2>
      </CardGridItem>
      <CardGridItem
        index={3}
        hideContent={hideContent}
        selectedIndex={selectedIndex}
        onCardClick={onCardClick}
      >
        <h2>Education</h2>
      </CardGridItem>
      <CardGridItem
        index={4}
        selectedIndex={selectedIndex}
        hideContent={hideContent}
        onCardClick={onCardClick}
      >
        <h2>References</h2>
      </CardGridItem>
      <CardGridItem
        index={5}
        selectedIndex={selectedIndex}
        hideContent={hideContent}
        onCardClick={onCardClick}
      >
        <h2>Get in touch</h2>
      </CardGridItem>
    </div>
  );
};

interface CardGridItemProps {
  index: number;
  selectedIndex: number | null;
  hideContent: boolean;
  onCardClick: () => void;
}

const CardGridItem: FC<PropsWithChildren<CardGridItemProps>> = ({
  index,
  children,
  selectedIndex,
  hideContent,
  onCardClick,
}) => {
  const isSelected = useMemo(
    () => index === selectedIndex,
    [index, selectedIndex]
  );

  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        duration: CARD_GRID_ANIMATION_DURATION_SEC,
      }}
      style={{
        gridColumn: isSelected ? "span 2" : undefined,
        gridRow: isSelected ? "span 2" : undefined,
      }}
    >
      <Card onClick={onCardClick}>
        {!hideContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
};

export default CardGrid;
