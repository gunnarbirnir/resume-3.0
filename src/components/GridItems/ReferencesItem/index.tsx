import { FC, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import references from "../../../assets/json/references.json";
import chrisImg from "../../../assets/img/chris.webp";
import johnnyImg from "../../../assets/img/johnny.webp";
import { useHandleCopy } from "../../../hooks";
import Card from "../../Card";
import { GridActionItemProps } from "../types";

const IMAGES: Record<string, string> = {
  chris: chrisImg,
  johnny: johnnyImg,
};

const ANIMATION_DURATION = 0.5;
const INDEX_DELAY = 0.1;
const IMAGE_DELAY = 0.2;

const ReferencesItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  const [hoveringReference, setHoveringReference] = useState("");
  const [clickedReference, handleCopy] = useHandleCopy();

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
          // TODO: Disable in mobile
          onClick={() => handleCopy(reference.email)}
        >
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
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
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
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
        <ReferenceEmail>
          {isClicked
            ? "Copied!"
            : isHovering
            ? "Click to Copy Email"
            : reference.email}
        </ReferenceEmail>
      </ReferenceContainer>
    );
  };

  return (
    <>
      <Card
        title={references.title}
        inTransition={inTransition}
        expanded={active}
        setExpanded={setActive}
      >
        <StyledReferencesItem>
          <ReferencesContent>
            {references.items.map(renderReference)}
          </ReferencesContent>
        </StyledReferencesItem>
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
  height: 100%;
  display: grid;
  place-items: center;
`;

const ReferencesContent = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  cursor: pointer;
  animation-name: enable-hover;
  animation-duration: 2s;
  animation-fill-mode: forwards;

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

  @keyframes enable-hover {
    from {
      pointer-events: none;
    }
  }
`;

const ReferenceName = styled.h3`
  padding-top: var(--spacing-3);
  font-size: var(--font-size-medium-px);
`;

const ReferenceTitle = styled.p`
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  padding-bottom: var(--spacing-1);
  font-size: var(--font-size-normal-px);
`;

const ReferenceEmail = styled.p`
  font-size: var(--font-size-normal-px);
`;

export default ReferencesItem;
