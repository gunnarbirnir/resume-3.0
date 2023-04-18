import type { FC } from "react";
import { motion } from "framer-motion";

import nameImg from "../../../assets/go.svg";
import nameOutlineImg from "../../../assets/go-outline.svg";
import type { GridItemProps } from "../types";

// TODO: Clean up

const NameItem: FC<GridItemProps> = ({ inTransition }) => {
  if (inTransition) {
    return null;
  }

  return (
    <div className="h-100 d-f fd-c jc-c">
      <div className="pos-r">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <img
            alt="Gunnar Olafsson"
            src={nameImg}
            className="w-100"
            style={{ transform: "translateX(5%) scale(1.1)" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.4, delay: 0.2 }}
          className="pos-a w-100"
          style={{ top: -3, left: 3 }}
        >
          <img
            alt="Gunnar Olafsson outline"
            src={nameOutlineImg}
            width={350}
            className="w-100"
            style={{ transform: "translateX(5%) scale(1.1)" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NameItem;
