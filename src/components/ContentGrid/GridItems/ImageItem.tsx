import type { FC } from "react";
import { motion } from "framer-motion";

import profileImg from "../../../assets/profile.jpg";
import type { GridItemProps } from "../types";

// TODO: Clean up

const ImageItem: FC<GridItemProps> = ({ inTransition }) => {
  if (inTransition) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="h-100"
    >
      <img
        alt="Profile"
        src={profileImg}
        className="h-100 w-100"
        style={{ objectFit: "cover", filter: "brightness(0.9)" }}
      />
    </motion.div>
  );
};

export default ImageItem;
