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
  TitleArea,
  ExpandedContent,
} from "./styles";

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
  const expandable = title && expanded !== undefined && setExpanded;
  const isExpanded = expandable && expanded;
  const isCollapsed = expandable && !expanded;
  const isButtonCard = isCollapsed && !inTransition;
  const isScrollable = scrollable && !isCollapsed;
  const contentPadding = padding && !isExpanded && !isStatic;

  const renderExpandableContent = () => {
    const expandableContent = isCollapsed ? (
      <ButtonCardContent buttonTitle={title || ""} isLoading={false} />
    ) : (
      <div className="d-f fd-c h-100">
        <TitleArea>
          <h2>{title}</h2>
          {setExpanded ? (
            <IconButton icon={Icon.Close} onClick={() => setExpanded(false)} />
          ) : null}
        </TitleArea>
        <ExpandedContent>{children}</ExpandedContent>
      </div>
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
        style={{ overflowY: isScrollable ? "auto" : "hidden" }}
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
