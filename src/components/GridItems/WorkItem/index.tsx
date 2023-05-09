import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import work from "../../../assets/json/work.json";
import { FADE_IN_DURATION_SEC } from "../../../constants";
import Card from "../../Card";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAY = 0.1;
const CIRCLE_INIT_SIZE = 12;
const CIRCLE_SIZE = 26;
const CIRCLE_BORDER_WIDTH = 4;

const WorkItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  const [hoverLinkIndex, setHoverLinkIndex] = useState(-1);

  const renderJob = (job: any, index: number) => {
    const animationDelay = FADE_IN_DURATION_SEC + ANIMATION_DELAY * index;
    const linkProps = {
      href: job.link,
      target: "_blank",
      rel: "noreferrer",
      onMouseEnter: () => setHoverLinkIndex(index),
      onMouseLeave: () => setHoverLinkIndex(-1),
    };

    return (
      <div
        key={job.company}
        className={clsx(styles.jobContainer, {
          [styles.hoveringLink]: hoverLinkIndex === index,
        })}
      >
        <div className={styles.jobCircleContainer}>
          <a {...linkProps}>
            <motion.div
              initial={{
                height: CIRCLE_INIT_SIZE,
                width: CIRCLE_INIT_SIZE,
                borderWidth: CIRCLE_INIT_SIZE / 2,
              }}
              animate={{
                height: CIRCLE_SIZE,
                width: CIRCLE_SIZE,
                borderWidth: CIRCLE_BORDER_WIDTH,
              }}
              transition={{
                type: "spring",
                delay: animationDelay,
                duration: ANIMATION_DURATION,
                iterations: 1,
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
            delay: animationDelay,
            duration: ANIMATION_DURATION,
          }}
        >
          <h3 className={styles.jobCompany}>
            <a {...linkProps}>{job.company}</a>
          </h3>
          <p className={styles.jobTitle}>
            {job.title}
            <span className={styles.jobYears}>
              {job.start === job.end ? job.start : `${job.start} - ${job.end}`}
            </span>
          </p>
          <p className={styles.jobDescription}>{job.description}</p>
        </motion.div>
      </div>
    );
  };

  return (
    <Card
      scrollable
      inTransition={inTransition}
      title={work.title}
      expanded={active}
      setExpanded={setActive}
    >
      <div className={styles.workItem}>{work.jobs.map(renderJob)}</div>
    </Card>
  );
};

export default WorkItem;
