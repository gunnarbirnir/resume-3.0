import { FC, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import clsx from "clsx";

import skills from "../../../assets/json/skills.json";
import { useMediaQuery } from "../../../hooks";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import { GridActionItemProps } from "../types";

const ANIMATION_DELAY = 0.05;
const ANIMATION_DURATION = 0.2;
const ANIMATION_GROUP_SIZE = 3;

const calcAnimationDelay = (index: number) => {
  return Math.floor(index / ANIMATION_GROUP_SIZE) * ANIMATION_DELAY;
};

interface GeneralSkill {
  label: string;
  tools: string[];
}

interface ToolSkill {
  id: string;
  label: string;
}

const SkillsItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  fullscreenEnabled,
  setActive,
}) => {
  const {
    isGridDesktopOnly,
    isGridTabletOnly,
    isGridMobileOrSmaller,
    isTabletOrSmaller,
  } = useMediaQuery();
  const [selectedSkill, setSelectedSkill] = useState<GeneralSkill | null>(null);
  const isStatic = active === undefined;

  const animationProps = {
    initial: { opacity: 0, transform: "translateX(10px)" },
    animate: { opacity: 1, transform: "translateX(0px)" },
  };

  const renderGeneralSkill = (skill: GeneralSkill, index: number) => {
    const generalSkillProps = {
      key: skill.label,
      className: clsx("skill", "generalSkill", {
        activeGeneralSkill: selectedSkill?.label === skill.label,
      }),
      ...(isTabletOrSmaller
        ? {
            onClick: () =>
              setSelectedSkill((currentSkill) =>
                currentSkill === skill ? null : skill
              ),
          }
        : {
            onMouseEnter: () => setSelectedSkill(skill),
            onMouseLeave: () => setSelectedSkill(null),
          }),
    };

    return isStatic ? (
      <p {...generalSkillProps}>{skill.label}</p>
    ) : (
      <motion.p
        {...generalSkillProps}
        {...animationProps}
        transition={{
          delay: calcAnimationDelay(index),
          duration: ANIMATION_DURATION,
        }}
      >
        {skill.label}
      </motion.p>
    );
  };

  const renderToolSkill = (skill: ToolSkill, index: number) => {
    const toolSkillProps = {
      key: skill.id,
      className: clsx("skill", {
        activeToolSkill: selectedSkill?.tools.includes(skill.id),
      }),
    };

    return isStatic ? (
      <p {...toolSkillProps}>{skill.label}</p>
    ) : (
      <motion.p
        {...toolSkillProps}
        {...animationProps}
        transition={{
          delay: calcAnimationDelay(index),
          duration: ANIMATION_DURATION,
        }}
      >
        {skill.label}
      </motion.p>
    );
  };

  const skillsContent = (
    <SkillsContent
      className={clsx({
        largeSkillsContent: fullscreenEnabled && !isGridMobileOrSmaller,
      })}
    >
      {(fullscreenEnabled || !(isGridDesktopOnly || isGridTabletOnly)) && (
        <SkillsItemTitle>{skills.generalTitle}</SkillsItemTitle>
      )}
      <SkillsContainer>
        {skills.general.map(renderGeneralSkill)}
      </SkillsContainer>

      <SkillsItemTitle>{skills.toolsTitle}</SkillsItemTitle>
      <SkillsContainer>{skills.tools.map(renderToolSkill)}</SkillsContainer>
    </SkillsContent>
  );

  return isStatic ? (
    <FadeIn>
      <Card scrollable isStatic title={skills.title}>
        {skillsContent}
      </Card>
    </FadeIn>
  ) : (
    <Card
      scrollable
      title={skills.title}
      inTransition={inTransition}
      fullscreenEnabled={fullscreenEnabled}
      expanded={active}
      setExpanded={setActive}
    >
      {skillsContent}
    </Card>
  );
};

const SkillsItemTitle = styled.h3`
  padding-bottom: var(--spacing-3);
  font-size: var(--font-size-normal);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--spacing-1);

  &:not(:last-child) {
    padding-bottom: var(--spacing-5);
  }

  .skill {
    text-align: center;
    color: var(--color-white);
    font-size: var(--font-size-small);
    border: 1px solid var(--color-gray-4);
    border-radius: var(--font-size-small);
    padding: 2px 8px;
    margin: 2px 0px;
    min-width: 40px;
  }

  .generalSkill {
    user-select: none;
  }

  .activeGeneralSkill {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-gray-6);
  }

  .activeToolSkill {
    border-color: var(--color-primary);
  }
`;

const SkillsContent = styled.div`
  &.largeSkillsContent {
    ${SkillsItemTitle} {
      font-size: var(--font-size-medium);
    }

    ${SkillsContainer} {
      gap: var(--spacing-2);

      &:not(:last-child) {
        padding-bottom: var(--spacing-6);
      }

      .skill {
        font-size: var(--font-size-normal);
        border-radius: var(--font-size-normal);
        padding: 3px 12px;
        min-width: 50px;
      }
    }
  }
`;

export default SkillsItem;
