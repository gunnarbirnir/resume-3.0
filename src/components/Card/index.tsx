import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import { useIsLoading } from "../../hooks";
import FadeIn from "../FadeIn";
import IconButton from "../IconButton";
import Icon from "../Icon";
import styles from "./styles.module.css";
import ButtonCardContent from "./ButtonCardContent";

interface Props {
  scrollable?: boolean;
  padding?: boolean;
  title?: string;
  expanded?: boolean;
  inTransition?: boolean;
  // Like expandable, but always expanded
  isStatic?: boolean;
  onClick?: () => void;
  setExpanded?: (expanded: boolean) => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  scrollable = false,
  padding = true,
  title,
  expanded,
  inTransition = false,
  isStatic = false,
  children,
  onClick,
  setExpanded,
}) => {
  const isLoading = useIsLoading();
  const expandable = title && expanded !== undefined && setExpanded;
  const isExpanded = expandable && expanded;
  const isCollapsed = expandable && !expanded;
  const isButtonCard = isCollapsed && !inTransition && !isLoading;
  const isScrollable = scrollable && !isCollapsed;
  const contentPadding = padding && !isExpanded && !isStatic;

  const renderExpandableContent = () => {
    const expandableContent = isCollapsed ? (
      <ButtonCardContent buttonTitle={title || ""} isLoading={isLoading} />
    ) : (
      <div className="d-f fd-c h-100">
        <div className={styles.titleArea}>
          <h2>{title}</h2>
          {setExpanded ? (
            <IconButton icon={Icon.Close} onClick={() => setExpanded(false)} />
          ) : null}
        </div>
        <div className={styles.expandedContent}>{children}</div>
      </div>
    );

    return isStatic ? (
      expandableContent
    ) : (
      <FadeIn visible={!inTransition}>{expandableContent}</FadeIn>
    );
  };

  return (
    <div className={styles.cardContainer}>
      {isButtonCard ? (
        <>
          <div
            className={clsx(styles.gradientBackground, styles.gradientShadow)}
          />
          <div className={styles.gradientBackground} />
        </>
      ) : null}

      <div
        className={clsx(styles.card, {
          [styles.clickableCard]: onClick,
          [styles.buttonCard]: isButtonCard,
        })}
        style={{ overflowY: isScrollable ? "auto" : "hidden" }}
        onClick={isButtonCard ? () => setExpanded(true) : onClick}
      >
        <div
          className={clsx({ [styles.contentPadding]: contentPadding })}
          style={{ height: isScrollable ? "auto" : "100%" }}
        >
          {expandable || isStatic ? renderExpandableContent() : children}
        </div>
      </div>
    </div>
  );
};

export default Card;
