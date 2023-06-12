import { FC } from "react";
import styled from "styled-components";

import { MEDIA_QUERY_HOVER } from "../../../constants";
import Card from "../../Card";
import Icon from "../../Icon";
import FadeIn from "../../FadeIn";

const ITEMS = [
  {
    icon: Icon.Facebook,
    link: "https://www.facebook.com/gunnarbirnir/",
  },
  {
    icon: Icon.LinkedIn,
    link: "https://www.linkedin.com/in/gunnarbirnir/",
  },
  {
    icon: Icon.Github,
    link: "https://github.com/gunnarbirnir",
  },
];

const SocialItem: FC = () => {
  const renderSocialIcon = ({
    icon: Icon,
    link,
  }: {
    icon: FC;
    link: string;
  }) => {
    return (
      <SocialIcon key={link} href={link} target="_blank" rel="noreferrer">
        <IconBackground />
        <Icon />
      </SocialIcon>
    );
  };

  return (
    <FadeIn>
      <Card padding={false}>
        <StyledSocialItem>
          <IconContainer>{ITEMS.map(renderSocialIcon)}</IconContainer>
        </StyledSocialItem>
      </Card>
    </FadeIn>
  );
};

const StyledSocialItem = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: var(--spacing-3) var(--spacing-5);
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 250px;
  width: 100%;
  gap: var(--spacing-3);
`;

const IconBackground = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  transform: scale(0);
  background-color: var(--color-primary);
  transition: transform 0.15s ease-out;
`;

const SocialIcon = styled.a`
  --social-icon-container-size: 50px;
  height: var(--social-icon-container-size);
  width: var(--social-icon-container-size);
  background-color: var(--color-gray-5);
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
  user-select: none;

  svg {
    --social-icon-size: 24px;
    --social-icon-spacing: calc(
      (var(--social-icon-container-size) - var(--social-icon-size)) / 2
    );
    position: absolute;
    height: var(--social-icon-size);
    width: var(--social-icon-size);
    top: var(--social-icon-spacing);
    left: var(--social-icon-spacing);
    color: var(--color-white);
  }

  @media ${MEDIA_QUERY_HOVER} {
    &:hover {
      svg {
        color: var(--color-gray-6);
      }
      ${IconBackground} {
        transform: unset;
      }
    }
  }
`;

export default SocialItem;
