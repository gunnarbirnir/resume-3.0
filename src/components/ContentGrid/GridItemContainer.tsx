import type { FC, PropsWithChildren, CSSProperties } from "react";
import { motion } from "framer-motion";

import { CONTENT_GRID_ANIMATION_DURATION_SEC } from "../../constants";

interface Props {
  className?: string;
  style?: CSSProperties;
}

const GridItemContainer: FC<PropsWithChildren<Props>> = ({
  className,
  style,
  children,
}) => {
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        duration: CONTENT_GRID_ANIMATION_DURATION_SEC,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default GridItemContainer;
