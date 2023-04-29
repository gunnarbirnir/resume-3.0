import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import FadeIn from "../FadeIn";
import { IconButton } from "../Button";
import Icon from "../Icon";
import styles from "./styles.module.css";
import ButtonCardContent from "./ButtonCardContent";

interface Props {
  scrollable?: boolean;
  hideContent?: boolean;
  buttonTitle?: string;
  expanded?: boolean;
  setExpanded?: (expanded: boolean) => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  scrollable = false,
  hideContent = false,
  buttonTitle,
  expanded,
  children,
  setExpanded,
}) => {
  const expandable = buttonTitle && expanded !== undefined && setExpanded;
  const isButtonCard = expandable && !expanded && !hideContent;
  const isExpanded = expandable && expanded;
  const isScrollable = scrollable && !isButtonCard;

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
          <FadeIn visible={!hideContent}>
            {isButtonCard ? (
              <ButtonCardContent buttonTitle={buttonTitle} />
            ) : (
              children
            )}
          </FadeIn>
        </div>
      </div>

      {isExpanded ? (
        <div className={styles.closeButton}>
          <FadeIn visible={!hideContent}>
            <IconButton icon={Icon.Close} onClick={() => setExpanded(false)} />
          </FadeIn>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
