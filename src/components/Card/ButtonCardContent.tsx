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

const CIRCLE_ANIMATION_DURATION = 0.3;
const ARROW_ANIMATION_DURATION = 0.5;

const ButtonCardContent: FC<Props> = ({ buttonTitle, isLoading }) => {
  const renderButtonIcon = () => {
    return (
      <div className={styles.buttonCardIconContainer}>
        <motion.div
          animate={{ height: 30, width: 30 }}
          transition={{
            type: "spring",
            delay: FADE_IN_DURATION_SEC,
            duration: CIRCLE_ANIMATION_DURATION,
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
              delay: CIRCLE_ANIMATION_DURATION + FADE_IN_DURATION_SEC / 2,
              duration: ARROW_ANIMATION_DURATION,
            }}
          >
            <Icon.Arrow />
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className={styles.buttonCardContent}>
      <div>
        <h2>{buttonTitle}</h2>
        <div className={styles.buttonTitleLine} />
      </div>
      {renderButtonIcon()}
    </div>
  );
};

export default ButtonCardContent;
