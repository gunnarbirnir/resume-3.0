import type { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import { useLoading } from "../../hooks";
import FadeIn from "../FadeIn";
import { IconButton } from "../Button";
import Icon from "../Icon";
import styles from "./styles.module.css";
import ButtonCardContent from "./ButtonCardContent";

interface Props {
  scrollable?: boolean;
  padding?: boolean;
  title?: string;
  expanded?: boolean;
  inTransition?: boolean;
  onClick?: () => void;
  setExpanded?: (expanded: boolean) => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  scrollable = false,
  padding = true,
  title,
  expanded,
  inTransition = false,
  children,
  onClick,
  setExpanded,
}) => {
  const isLoading = useLoading();
  const expandable = title && expanded !== undefined && setExpanded;
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
        style={{ overflowY: isScrollable ? "auto" : "hidden" }}
        onClick={isButtonCard ? () => setExpanded(true) : onClick}
      >
        <div
          className={clsx({ [styles.contentPadding]: padding })}
          style={{ height: isScrollable ? "auto" : "100%" }}
        >
          <FadeIn visible={!inTransition}>
            {isExpanded ? (
              <>
                <div className={styles.titleArea}>
                  <h2>{title}</h2>
                  <IconButton
                    icon={Icon.Close}
                    onClick={() => setExpanded(false)}
                  />
                </div>
                <div className={styles.expandedContent}>{children}</div>
              </>
            ) : isCollapsed ? (
              <ButtonCardContent buttonTitle={title} isLoading={isLoading} />
            ) : (
              children
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Card;