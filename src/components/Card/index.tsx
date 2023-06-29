import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import FadeIn from "../FadeIn";
import IconButton from "../IconButton";
import Icon from "../Icon";
import ButtonCardContent from "./ButtonCardContent";
import {
  CardContainer,
  GradientBackground,
  StyledCard,
  ExpandedContainer,
  TitleArea,
  ExpandedContent,
} from "./styles";

interface Props {
  scrollable?: boolean;
  fullHeightScrollable?: boolean;
  padding?: boolean;
  title?: string;
  expanded?: boolean;
  inTransition?: boolean;
  fullscreenEnabled?: boolean;
  // Like expandable, but always expanded
  isStatic?: boolean;
  onClick?: () => void;
  setExpanded?: (expanded: boolean) => void;
}

const Card: FC<PropsWithChildren<Props>> = ({
  scrollable = false,
  fullHeightScrollable = false,
  padding = true,
  title,
  expanded,
  inTransition = false,
  fullscreenEnabled = false,
  isStatic = false,
  children,
  onClick,
  setExpanded,
}) => {
  const expandable = title && expanded !== undefined && setExpanded;
  const isExpanded = expandable && expanded;
  const isCollapsed = expandable && !expanded;
  const isButtonCard = isCollapsed && !inTransition;
  const isScrollable = scrollable && !isCollapsed;
  const isFullHeightScrollable = fullHeightScrollable && !isCollapsed;
  const isFullscreen = isExpanded && fullscreenEnabled;
  const contentPadding = padding && !isExpanded && !isStatic;

  const renderExpandableContent = () => {
    const expandableContent = isCollapsed ? (
      <ButtonCardContent buttonTitle={title || ""} />
    ) : (
      <ExpandedContainer>
        <TitleArea className={clsx({ fullscreenTitleArea: isFullscreen })}>
          <div>
            <h2>{title}</h2>
            {setExpanded ? (
              <IconButton
                icon={Icon.Close}
                onClick={() => setExpanded(false)}
              />
            ) : null}
          </div>
        </TitleArea>
        <ExpandedContent
          className={clsx({ fullscreenExpandedContent: isFullscreen })}
        >
          {children}
        </ExpandedContent>
      </ExpandedContainer>
    );

    return isStatic ? (
      expandableContent
    ) : (
      <FadeIn visible={!inTransition}>{expandableContent}</FadeIn>
    );
  };

  return (
    <CardContainer>
      {isButtonCard ? (
        <>
          <GradientBackground className="gradientShadow" />
          <GradientBackground />
        </>
      ) : null}

      <StyledCard
        className={clsx({
          clickableCard: onClick,
          buttonCard: isButtonCard,
        })}
        style={{
          overflowY: isScrollable || isFullHeightScrollable ? "auto" : "hidden",
          ...(isFullscreen ? { borderWidth: 0, borderRadius: 0 } : {}),
        }}
        onClick={isButtonCard ? () => setExpanded(true) : onClick}
      >
        <div
          className={clsx({ contentPadding })}
          style={{ height: isScrollable ? "auto" : "100%" }}
        >
          {expandable || isStatic ? renderExpandableContent() : children}
        </div>
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
