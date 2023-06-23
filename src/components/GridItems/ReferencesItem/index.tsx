import { FC, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import clsx from "clsx";

import references from "../../../assets/json/references.json";
import chrisImg from "../../../assets/img/chris.webp";
import johnnyImg from "../../../assets/img/johnny.webp";
import { useHandleCopy } from "../../../hooks";
import { MEDIA_QUERY_HOVER } from "../../../constants";
import Card from "../../Card";
import FadeIn from "../../FadeIn";
import { GridActionItemProps, GridItemLayoutProps } from "../types";
import { getAnimationPropFunc } from "../utils";

const IMAGES: Record<string, string> = {
  chris: chrisImg,
  johnny: johnnyImg,
};

const ANIMATION_DURATION = 0.5;
const INDEX_DELAY = 0.1;
const IMAGE_DELAY = 0.2;

const ReferencesItem: FC<GridActionItemProps & GridItemLayoutProps> = ({
  active,
  inTransition,
  fullscreenEnabled,
  columns,
  setActive,
}) => {
  const [hoveringReference, setHoveringReference] = useState("");
  const [clickedReference, handleCopy] = useHandleCopy();
  const isStatic = active === undefined;
  const calcAnimationProp = getAnimationPropFunc(isStatic);

  const animationProps = {
    initial: calcAnimationProp({ transform: "scale(0)" }),
    animate: calcAnimationProp({ transform: "scale(1)" }),
  };

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
    const isHovering = hoveringReference === reference.email;
    const isClicked = clickedReference === reference.email;

    return (
      <ReferenceContainer key={reference.email}>
        <ReferenceImageContainer
          onMouseEnter={() => setHoveringReference(reference.email)}
          onMouseLeave={() => setHoveringReference("")}
          onClick={() => handleCopy(reference.email)}
          // enable-hover animation
          style={{ animationDuration: isStatic ? "0s" : "2s" }}
        >
          <motion.div
            {...animationProps}
            transition={{
              type: "spring",
              delay: animationDelay,
              duration: ANIMATION_DURATION,
            }}
            className="referenceImageBackground"
          />
          <motion.img
            src={IMAGES[reference.imageKey]}
            alt={reference.name}
            {...animationProps}
            transition={{
              type: "spring",
              delay: IMAGE_DELAY + animationDelay,
              duration: ANIMATION_DURATION,
            }}
            className="referenceImage"
          />
        </ReferenceImageContainer>
        <ReferenceName>{reference.name}</ReferenceName>
        <ReferenceTitle>{reference.title}</ReferenceTitle>
        <p>
          {isClicked
            ? "Copied!"
            : isHovering
            ? "Click to Copy Email"
            : reference.email}
        </p>
      </ReferenceContainer>
    );
  };

  const referencesContent = (
    <StyledReferencesItem
      className={clsx({ verticalReferences: columns === 1 })}
    >
      {references.items.map(renderReference)}
    </StyledReferencesItem>
  );

  return isStatic ? (
    <FadeIn>
      <Card isStatic title={references.title} fullHeightScrollable>
        {referencesContent}
      </Card>
    </FadeIn>
  ) : (
    <>
      <Card
        title={references.title}
        inTransition={inTransition}
        fullscreenEnabled={fullscreenEnabled}
        fullHeightScrollable
        expanded={active}
        setExpanded={setActive}
      >
        {referencesContent}
      </Card>

      {/* Preload images */}
      {references.items.map((reference) => (
        <img
          key={reference.imageKey}
          src={IMAGES[reference.imageKey]}
          alt={reference.name}
          height={0}
          width={0}
          style={{ display: "none" }}
        />
      ))}
    </>
  );
};

const StyledReferencesItem = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: var(--spacing-6) 0px;

  &.verticalReferences {
    flex-direction: column;
    justify-content: center;
    gap: var(--spacing-8);
  }
`;

const ReferenceContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ReferenceImageContainer = styled.div`
  border-radius: 50%;
  position: relative;
  isolation: isolate;
  pointer-events: none;

  .referenceImageBackground {
    --ref-img-overflow: 4px;
    position: absolute;
    z-index: -2;
    top: calc(-1 * var(--ref-img-overflow));
    left: calc(-1 * var(--ref-img-overflow));
    height: calc(100% + var(--ref-img-overflow) * 2);
    width: calc(100% + var(--ref-img-overflow) * 2);
    border-radius: 50%;
    background-color: var(--color-gray-4);

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: -1;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: var(--color-primary);
      clip-path: inset(100% 0px 0px 0px);
      transition: clip-path 0.2s ease-out;
    }
  }

  &:hover .referenceImageBackground::before {
    clip-path: inset(0% 0px 0px 0px);
  }

  .referenceImage {
    user-select: none;
    height: 150px;
    width: 150px;
    object-fit: cover;
    object-position: top;
    clip-path: circle(50% at 50% 50%);
  }

  @media ${MEDIA_QUERY_HOVER} {
    cursor: pointer;
    animation-name: enable-hover;
    animation-fill-mode: forwards;
  }

  @keyframes enable-hover {
    to {
      pointer-events: auto;
    }
  }
`;

const ReferenceName = styled.h3`
  padding-top: var(--spacing-3);
`;

const ReferenceTitle = styled.p`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  padding-bottom: var(--spacing-1);
`;

export default ReferencesItem;
