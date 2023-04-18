import type { FC, PropsWithChildren, CSSProperties } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { CONTENT_GRID_ANIMATION_DURATION_SEC } from "../../constants";
import styles from "./styles.module.css";

interface Props {
  hideItem?: boolean;
  className?: string;
  style?: CSSProperties;
}

const GridItemContainer: FC<PropsWithChildren<Props>> = ({
  hideItem,
  className,
  style,
  children,
}) => {
  if (hideItem) {
    return null;
  }

  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        duration: CONTENT_GRID_ANIMATION_DURATION_SEC,
      }}
      className={clsx(styles.gridItem, className)}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default GridItemContainer;
