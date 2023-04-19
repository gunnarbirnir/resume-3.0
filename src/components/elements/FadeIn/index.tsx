import type { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props {
  visible: boolean;
  direction?: "up" | "down";
}

const FADE_DISTANCE = 20;
const FADE_DURATION = 0.2;

const FadeIn: FC<PropsWithChildren<Props>> = ({
  visible,
  direction = "up",
  children,
}) => {
  if (!visible) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? FADE_DISTANCE : -FADE_DISTANCE,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: FADE_DURATION }}
      className="h-100"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
