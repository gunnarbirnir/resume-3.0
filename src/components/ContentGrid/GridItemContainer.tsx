import { FC, PropsWithChildren, CSSProperties } from "react";
import { motion } from "framer-motion";

import { CONTENT_GRID_ANIMATION_DURATION_SEC } from "../../constants";
import { hideGridItem } from "./utils";
import { GridItemType } from "./types";

interface Props {
  item: GridItemType;
  gridLayout: string;
  className?: string;
  style?: CSSProperties;
}

const GridItemContainer: FC<PropsWithChildren<Props>> = ({
  item,
  gridLayout,
  className,
  style,
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
      className={className}
      style={{ ...style, gridArea: item.toString() }}
    >
      {children}
    </motion.article>
  );
};

export default GridItemContainer;
