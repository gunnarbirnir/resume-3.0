import type { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";

const Card: FC<PropsWithChildren> = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
