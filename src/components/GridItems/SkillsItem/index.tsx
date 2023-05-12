import type { FC } from "react";

import skills from "../../../assets/json/skills.json";
import Card from "../../Card";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const SkillsItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  return (
    <Card
      scrollable
      title="Skills"
      inTransition={inTransition}
      expanded={active}
      setExpanded={setActive}
    >
      <div className={styles.skillsItem}>
        {skills.general.map((skill) => (
          <p key={skill} className={styles.skill}>
            {skill}
          </p>
        ))}
        <div className={styles.tools}>
          <h3>{skills.toolsTitle}</h3>
          {skills.tools.map((skill) => (
            <p key={skill} className={styles.skill}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SkillsItem;
