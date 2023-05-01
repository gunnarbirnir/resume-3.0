import type { FC } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import Icon from "../Icon";
import styles from "./styles.module.css";

interface Props {
  buttonTitle: string;
  isLoading: boolean;
}

const ANIMATION_DURATION = 0.5;

const ButtonCardContent: FC<Props> = ({ buttonTitle, isLoading }) => {
  return (
    <div
      className={clsx(styles.buttonCardContent, {
        [styles.buttonCardLoaded]: !isLoading,
      })}
    >
      <h2>{buttonTitle}</h2>
      <div className={styles.buttonCardIconContainer}>
        <motion.div
          animate={{ height: "100%", width: "100%" }}
          transition={{
            type: "spring",
            // Wait for fade in animation to finish
            delay: 0.2,
            duration: ANIMATION_DURATION,
          }}
          className={styles.buttonCardIcon}
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
