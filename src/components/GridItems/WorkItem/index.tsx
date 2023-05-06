import type { FC } from "react";

import work from "../../../assets/json/work.json";
import { Card } from "../../elements";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const WorkItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  return (
    <Card
      scrollable
      inTransition={inTransition}
      title={work.title}
      expanded={active}
      setExpanded={setActive}
    >
      <div className={styles.workItem}>
        {work.jobs.map((job) => (
          <div key={job.company} className={styles.jobContainer}>
            <div className={styles.jobCircle} />
            <div className="f-1">
              <h3 className={styles.jobCompany}>
                <a href={job.link} target="_blank" rel="noreferrer">
                  {job.company}
                </a>
              </h3>
              <p className={styles.jobTitle}>
                {job.title}
                <span className={styles.jobYears}>
                  {job.start === job.end
                    ? job.start
                    : `${job.start} - ${job.end}`}
                </span>
              </p>
              <p className={styles.jobDescription}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WorkItem;
