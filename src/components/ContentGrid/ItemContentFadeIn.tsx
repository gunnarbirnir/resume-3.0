import type { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface Props {
  visible: boolean;
}

const ItemContentFadeIn: FC<PropsWithChildren<Props>> = ({
  visible,
  children,
}) => {
  return visible ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="h-100"
    >
      {children}
    </motion.div>
  ) : null;
};

export default ItemContentFadeIn;
