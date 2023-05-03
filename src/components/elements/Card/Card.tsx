import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import { useLoading } from "../../../hooks";
import FadeIn from "../FadeIn";
import { IconButton } from "../Button";
import Icon from "../Icon";
import styles from "./styles.module.css";
import ButtonCardContent from "./ButtonCardContent";

interface Props {
  inTransition?: boolean;
  scrollable?: boolean;
  padding?: boolean;
  buttonTitle?: string;
  expanded?: boolean;
  onClick?: () => void;
  setExpanded?: (expanded: boolean) => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  inTransition = false,
  scrollable = false,
  padding = true,
  buttonTitle,
  expanded,
  children,
  onClick,
  setExpanded,
}) => {
  const isLoading = useLoading();
  const expandable = buttonTitle && expanded !== undefined && setExpanded;
  const isExpanded = expandable && expanded;
  const isCollapsed = expandable && !expanded;
  const isButtonCard = isCollapsed && !inTransition && !isLoading;
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
          [styles.clickableCard]: onClick,
          [styles.buttonCard]: isButtonCard,
        })}
        style={{ overflow: isScrollable ? "auto" : "hidden" }}
        onClick={isButtonCard ? () => setExpanded(true) : onClick}
      >
        <div
          className={clsx({
            [styles.contentPadding]: padding,
            [styles.expandedContent]: isExpanded,
          })}
          style={{ height: isScrollable ? "auto" : "100%" }}
        >
          <FadeIn visible={!inTransition}>
            {isCollapsed ? (
              <ButtonCardContent
                buttonTitle={buttonTitle}
                isLoading={isLoading}
              />
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
