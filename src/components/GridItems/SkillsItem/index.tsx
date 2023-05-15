import type { FC } from "react";
import { motion } from "framer-motion";

import skills from "../../../assets/json/skills.json";
import Card from "../../Card";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const ANIMATION_DELAY = 0.05;
const ANIMATION_DURATION = 0.2;
const ANIMATION_GROUP_SIZE = 3;

const SkillsItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  const renderSkill = (skill: string, index: number) => {
    const animationDelay =
      Math.floor(index / ANIMATION_GROUP_SIZE) * ANIMATION_DELAY;

    return (
      <motion.p
        key={skill}
        className={styles.skill}
        initial={{ opacity: 0, transform: "translateX(10px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{
          delay: animationDelay,
          duration: ANIMATION_DURATION,
        }}
      >
        {skill}
      </motion.p>
    );
  };

  return (
    <Card
      scrollable
      title="Skills"
      inTransition={inTransition}
      expanded={active}
      setExpanded={setActive}
    >
      <div className={styles.skillsItem}>
        <h3 className={styles.generalTitle}>{skills.generalTitle}</h3>
        <div className={styles.skillsContainer}>
          {skills.general.map(renderSkill)}
        </div>

        <h3>{skills.toolsTitle}</h3>
        <div className={styles.skillsContainer}>
          {skills.tools.map(renderSkill)}
        </div>
      </div>
    </Card>
  );
};

export default SkillsItem;
