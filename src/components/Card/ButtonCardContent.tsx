import type { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { FADE_IN_DURATION_SEC } from "../../constants";
import Icon from "../Icon";
import styles from "./styles.module.css";

interface Props {
  buttonTitle: string;
  isLoading: boolean;
}

const ANIMATION_DURATION = 0.5;

const ButtonCardContent: FC<Props> = ({ buttonTitle, isLoading }) => {
  return (
    <div className={styles.buttonCardContent}>
      <h2>{buttonTitle}</h2>
      <div className={styles.buttonCardIconContainer}>
        <motion.div
          animate={{ height: 30, width: 30 }}
          transition={{
            type: "spring",
            delay: FADE_IN_DURATION_SEC,
            duration: ANIMATION_DURATION,
          }}
          className={clsx(styles.buttonCardIcon, {
            [styles.buttonCardIconLoaded]: !isLoading,
          })}
        >
          <motion.div
            initial={{ transform: "translateX(-50px)" }}
            animate={{ transform: "translateX(0px)" }}
            transition={{
              type: "spring",
              delay: ANIMATION_DURATION,
              duration: ANIMATION_DURATION,
            }}
          >
            <Icon.Arrow />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ButtonCardContent;
