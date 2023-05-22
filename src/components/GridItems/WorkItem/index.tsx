import { FC, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import clsx from "clsx";

import work from "../../../assets/json/work.json";
import Card from "../../Card";
import { GridActionItemProps } from "../types";

const CIRCLE_ANIMATION_DURATION = 0.3;
const CONTENT_ANIMATION_DURATION = 0.3;
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

  const renderJob = (
    job: {
      company: string;
      title: string;
      start: string;
      end: string;
      link: string;
      description: string;
    },
    index: number
  ) => {
    const animationDelay = ANIMATION_DELAY * index;
    const linkProps = {
      href: job.link,
      target: "_blank",
      rel: "noreferrer",
      onMouseEnter: () => setHoverLinkIndex(index),
      onMouseLeave: () => setHoverLinkIndex(-1),
    };

    return (
      <JobContainer
        key={job.company}
        className={clsx({
          hoveringLink: hoverLinkIndex === index,
        })}
      >
        <JobCircleContainer>
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
                duration: CIRCLE_ANIMATION_DURATION,
              }}
              className="jobCircle"
            />
          </a>
        </JobCircleContainer>
        <motion.div
          style={{ flex: 1 }}
          initial={{ opacity: 0, transform: "translateX(10px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{
            delay: animationDelay,
            duration: CONTENT_ANIMATION_DURATION,
          }}
        >
          <h3>
            <JobLink {...linkProps}>{job.company}</JobLink>
          </h3>
          <JobTitle>
            {job.title}
            <span className="jobYears">
              {job.start === job.end ? job.start : `${job.start} - ${job.end}`}
            </span>
          </JobTitle>
          <JobDescription>{job.description}</JobDescription>
        </motion.div>
      </JobContainer>
    );
  };

  return (
    <Card
      scrollable
      title={work.title}
      inTransition={inTransition}
      expanded={active}
      setExpanded={setActive}
    >
      {work.jobs.map(renderJob)}
    </Card>
  );
};

const JobContainer = styled.div`
  --job-circle-size: 26px;
  --job-circle-border-width: 4px;
  --job-container-left-padding: var(--spacing-4);
  --job-content-left-padding: var(--spacing-4);

  display: flex;
  padding-left: var(--job-container-left-padding);
  padding-right: var(--spacing-5);
  padding-bottom: var(--spacing-5);
  position: relative;
  isolation: isolate;

  &:last-child {
    padding-bottom: 0px;
  }

  &:not(:last-child)::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: calc(var(--job-circle-size) / 2);
    left: calc(
      var(--job-container-left-padding) + (var(--job-circle-size) / 2) -
        (var(--job-circle-border-width) / 2)
    );
    height: 100%;
    width: var(--job-circle-border-width);
    background-color: var(--color-gray-4);
  }
`;

const JobCircleContainer = styled.div`
  /* Title height */
  height: 1.875rem;
  width: var(--job-circle-size);
  display: flex;
  justify-content: center;
  align-items: center;

  .jobCircle {
    border-radius: 50%;
    background-color: var(--color-gray-6);
    border: var(--job-circle-border-width) solid var(--color-gray-4);

    ${JobContainer}${".hoveringLink"} & {
      border-color: var(--color-primary);
    }
  }
`;

const JobLink = styled.a`
  text-decoration: none;
  color: var(--color-white);
  padding-left: var(--job-content-left-padding);
`;

const JobTitle = styled.p`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  padding-left: var(--job-content-left-padding);
  padding-bottom: var(--spacing-2);

  .jobYears {
    color: var(--color-white);
    margin-left: var(--spacing-2);
  }
`;

const JobDescription = styled.p`
  padding-left: var(--job-content-left-padding);
`;

export default WorkItem;
