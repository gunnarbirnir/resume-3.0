import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import skills from "../../../assets/json/skills.json";
import Card from "../../Card";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const ANIMATION_DELAY = 0.05;
const ANIMATION_DURATION = 0.2;
const ANIMATION_GROUP_SIZE = 3;

const calcAnimationDelay = (index: number) => {
  return Math.floor(index / ANIMATION_GROUP_SIZE) * ANIMATION_DELAY;
};

const SkillsItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  const [selectedSkill, setSelectedSkill] = useState<{
    label: string;
    tools: string[];
  } | null>(null);

  const animationProps = {
    initial: { opacity: 0, transform: "translateX(10px)" },
    animate: { opacity: 1, transform: "translateX(0px)" },
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
        <h3>{skills.generalTitle}</h3>
        <div className={styles.skillsContainer}>
          {skills.general.map((skill, index) => (
            <motion.p
              key={skill.label}
              className={clsx(styles.skill, styles.generalSkill, {
                [styles.activeGeneralSkill]:
                  selectedSkill?.label === skill.label,
              })}
              {...animationProps}
              transition={{
                delay: calcAnimationDelay(index),
                duration: ANIMATION_DURATION,
              }}
              onClick={() => setSelectedSkill(skill)}
              onMouseEnter={() => setSelectedSkill(skill)}
              onMouseLeave={() => setSelectedSkill(null)}
            >
              {skill.label}
            </motion.p>
          ))}
        </div>

        <h3>{skills.toolsTitle}</h3>
        <div className={styles.skillsContainer}>
          {skills.tools.map((skill, index) => (
            <motion.p
              key={skill.id}
              className={clsx(styles.skill, {
                [styles.activeToolSkill]: selectedSkill?.tools.includes(
                  skill.id
                ),
              })}
              {...animationProps}
              transition={{
                delay: calcAnimationDelay(index),
                duration: ANIMATION_DURATION,
              }}
            >
              {skill.label}
            </motion.p>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SkillsItem;
