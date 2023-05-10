import type { FC } from "react";
import { motion } from "framer-motion";

import references from "../../../assets/json/references.json";
import profileImg from "../../../assets/img/profile.jpg";
import Card from "../../Card";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const IMAGES: Record<string, string> = {
  chris: profileImg,
  johnny: profileImg,
};

const ANIMATION_DURATION = 0.5;
const INDEX_DELAY = 0.1;
const IMAGE_DELAY = 0.2;

const ReferencesItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  const renderReference = (
    reference: {
      name: string;
      title: string;
      imageKey: string;
      email: string;
    },
    index: number
  ) => {
    const animationDelay = INDEX_DELAY * index;

    return (
      <div key={reference.imageKey} className={styles.referenceContainer}>
        <div className={styles.referenceImageContainer}>
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              type: "spring",
              delay: animationDelay,
              duration: ANIMATION_DURATION,
            }}
            className={styles.referenceImageBackground}
          />
          <motion.img
            src={IMAGES[reference.imageKey]}
            alt={reference.name}
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              type: "spring",
              delay: IMAGE_DELAY + animationDelay,
              duration: ANIMATION_DURATION,
            }}
            className={styles.referenceImage}
          />
        </div>
        <h3 className={styles.referenceName}>{reference.name}</h3>
        <p className={styles.referenceTitle}>{reference.title}</p>
        <p className={styles.referenceEmail}>{reference.email}</p>
      </div>
    );
  };

  return (
    <Card
      title="References"
      inTransition={inTransition}
      expanded={active}
      setExpanded={setActive}
    >
      <div className={styles.referencesItem}>
        <div className={styles.referencesContent}>
          {references.map(renderReference)}
        </div>
      </div>
    </Card>
  );
};

export default ReferencesItem;
