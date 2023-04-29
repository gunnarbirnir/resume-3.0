import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import FadeIn from "../FadeIn";
import { IconButton } from "../Button";
import Icon from "../Icon";
import styles from "./styles.module.css";
import ButtonCardContent from "./ButtonCardContent";

interface Props {
  inTransition?: boolean;
  scrollable?: boolean;
  buttonTitle?: string;
  expanded?: boolean;
  setExpanded?: (expanded: boolean) => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  inTransition = false,
  scrollable = false,
  buttonTitle,
  expanded,
  children,
  setExpanded,
}) => {
  const expandable = buttonTitle && expanded !== undefined && setExpanded;
  const isExpanded = expandable && expanded;
  const isCollapsed = expandable && !expanded;
  const isButtonCard = isCollapsed && !inTransition;
  const isScrollable = scrollable && !isCollapsed;

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
          [styles.buttonCard]: isButtonCard,
        })}
        style={{ overflow: isScrollable ? "auto" : "hidden" }}
        onClick={isButtonCard ? () => setExpanded(true) : undefined}
      >
        <div
          className={clsx(styles.cardContent, {
            [styles.expandedContent]: isExpanded,
          })}
          style={{ height: isScrollable ? "auto" : "100%" }}
        >
          <FadeIn visible={!inTransition}>
            {isCollapsed ? (
              <ButtonCardContent buttonTitle={buttonTitle} />
            ) : (
              children
            )}
          </FadeIn>
        </div>
      </div>

      {isExpanded ? (
        <div className={styles.closeButton}>
          <FadeIn visible={!inTransition}>
            <IconButton icon={Icon.Close} onClick={() => setExpanded(false)} />
          </FadeIn>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
