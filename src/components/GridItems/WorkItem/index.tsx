import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import work from "../../../assets/json/work.json";
// import { FADE_IN_DURATION_SEC } from "../../../constants";
import { Card } from "../../elements";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const WorkItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  const [hoverLinkIndex, setHoverLinkIndex] = useState(-1);

  return (
    <Card
      scrollable
      inTransition={inTransition}
      title={work.title}
      expanded={active}
      setExpanded={setActive}
    >
      <div className={styles.workItem}>
        {work.jobs.map((job, index) => (
          <div
            key={job.company}
            className={clsx(styles.jobContainer, {
              [styles.hoveringLink]: hoverLinkIndex === index,
            })}
          >
            <div className={styles.jobCircleContainer}>
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setHoverLinkIndex(index)}
                onMouseLeave={() => setHoverLinkIndex(-1)}
              >
                <motion.div
                  initial={{ height: 12, width: 12, borderWidth: 6 }}
                  animate={{ height: 25, width: 25, borderWidth: 4 }}
                  transition={{
                    type: "spring",
                    delay: 0.3 * (index + 1),
                    duration: 0.5,
                  }}
                  className={styles.jobCircle}
                />
              </a>
            </div>
            <motion.div
              className="f-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3 * (index + 1),
                duration: 0.5,
              }}
            >
              <h3 className={styles.jobCompany}>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setHoverLinkIndex(index)}
                  onMouseLeave={() => setHoverLinkIndex(-1)}
                >
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
            </motion.div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WorkItem;
