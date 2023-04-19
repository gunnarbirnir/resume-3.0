import type { FC } from "react";
import { motion } from "framer-motion";

import nameImg from "../../../assets/go.svg";
import nameOutlineImg from "../../../assets/go-outline.svg";
import type { GridItemProps } from "../types";
import styles from "./styles.module.css";

const FADE_DISTANCE = 20;
const FADE_DURATION_SHORT = 0.2;
const FADE_DURATION_LONG = 0.4;

interface Props extends GridItemProps {
  clearActiveItem: () => void;
}

const NameItem: FC<Props> = ({ clearActiveItem }) => {
  return (
    <div className={styles.nameItem}>
      <div className={styles.nameImgContainer} onClick={clearActiveItem}>
        <motion.div
          initial={{ opacity: 0, x: -FADE_DISTANCE }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: FADE_DURATION_SHORT }}
        >
          <img alt="Gunnar Olafsson" src={nameImg} className={styles.nameImg} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -FADE_DISTANCE }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut",
            duration: FADE_DURATION_LONG,
            delay: FADE_DURATION_SHORT,
          }}
          className={styles.shiftedName}
        >
          <img
            alt="Gunnar Olafsson"
            src={nameOutlineImg}
            className={styles.nameImg}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default NameItem;
