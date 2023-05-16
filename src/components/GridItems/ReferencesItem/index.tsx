import type { FC } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import references from "../../../assets/json/references.json";
import chrisImg from "../../../assets/img/chris.webp";
import Card from "../../Card";
import type { GridActionItemProps } from "../types";
import styles from "./styles.module.css";

const IMAGES: Record<string, string> = {
  chris: chrisImg,
  johnny: chrisImg,
};

const ANIMATION_DURATION = 0.5;
const INDEX_DELAY = 0.1;
const IMAGE_DELAY = 0.2;
const CLICK_TIMEOUT = 3000;

const ReferencesItem: FC<GridActionItemProps> = ({
  active,
  inTransition,
  setActive,
}) => {
  const [hoveringReference, setHoveringReference] = useState("");
  const [referenceClicked, setReferenceClicked] = useState("");

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setReferenceClicked(email);
  };

  useEffect(() => {
    let clickTimeout: number | null = null;

    if (referenceClicked) {
      clickTimeout = setTimeout(() => {
        setReferenceClicked("");
      }, CLICK_TIMEOUT);
    }

    return () => {
      if (clickTimeout) {
        clearTimeout(clickTimeout);
      }
    };
  }, [referenceClicked]);

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
    const isClicked = referenceClicked === reference.email;

    return (
      <div key={reference.email} className={styles.referenceContainer}>
        <div
          className={styles.referenceImageContainer}
          onMouseEnter={() => setHoveringReference(reference.email)}
          onMouseLeave={() => setHoveringReference("")}
          // TODO: Disable in mobile
          onClick={() => copyEmail(reference.email)}
        >
          <motion.div
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{
              type: "spring",
              delay: animationDelay,
              duration: ANIMATION_DURATION,
            }}
            className={styles.referenceImageBackground}
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
            className={styles.referenceImage}
          />
        </div>
        <h3 className={styles.referenceName}>{reference.name}</h3>
        <p className={styles.referenceTitle}>{reference.title}</p>
        <p className={styles.referenceEmail}>
          {isClicked
            ? "Copied!"
            : isHovering
            ? "Click to Copy Email"
            : reference.email}
        </p>
      </div>
    );
  };

  return (
    <Card
      title="References"
      inTransition={inTransition}
      expanded={active}
      setExpanded={setActive}
    >
      <div className={styles.referencesItem}>
        <div className={styles.referencesContent}>
          {references.map(renderReference)}
        </div>
      </div>
    </Card>
  );
};

export default ReferencesItem;
