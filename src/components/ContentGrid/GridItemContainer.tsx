import { FC, PropsWithChildren, CSSProperties } from "react";
import { motion } from "framer-motion";

import { CONTENT_GRID_ANIMATION_DURATION_SEC } from "../../constants";

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
    <motion.article
      layout
      transition={{
        type: "spring",
        duration: CONTENT_GRID_ANIMATION_DURATION_SEC,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.article>
  );
};

export default GridItemContainer;
