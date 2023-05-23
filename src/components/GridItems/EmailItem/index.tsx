import { FC } from "react";
import styled from "styled-components";

import { useHandleCopy } from "../../../hooks";
import Card from "../../Card";
import Icon from "../../Icon";
import FadeIn from "../../FadeIn";

const EMAIL = "gunnarbirnir@gmail.com";

const EmailItem: FC = () => {
  const [copyActive, handleCopy] = useHandleCopy();

  return (
    <FadeIn>
      <Card onClick={() => handleCopy(EMAIL)}>
        <StyledEmailItem>
          <Icon.Mail />
          <div>
            <EmailText>{EMAIL}</EmailText>
            <ClickText>{copyActive ? "Copied!" : "Click to Copy"}</ClickText>
          </div>
        </StyledEmailItem>
      </Card>
    </FadeIn>
  );
};

const StyledEmailItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);

  svg {
    color: var(--color-white);
    height: 24px;
    width: 24px;
  }
`;

const EmailText = styled.p`
  color: var(--color-white);
  font-size: var(--font-size-normal-px);
  font-weight: var(--font-weight-bold);
  padding-bottom: 2px;
`;

const ClickText = styled.p`
  color: var(--color-primary);
  font-size: var(--font-size-small-px);
  text-transform: uppercase;
`;

export default EmailItem;
