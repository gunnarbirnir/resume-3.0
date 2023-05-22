import { FC } from "react";
import styled from "styled-components";

import info from "../../../assets/json/info.json";
import Card from "../../Card";
import FadeIn from "../../FadeIn";

const InfoItem: FC = () => {
  return (
    <FadeIn>
      <InfoItemContainer>
        {info.items.map((item) => (
          <div className="innerContainer" key={item}>
            <Card padding={false}>
              <StyledInfoItem>
                <p>{item}</p>
              </StyledInfoItem>
            </Card>
          </div>
        ))}
      </InfoItemContainer>
    </FadeIn>
  );
};

const InfoItemContainer = styled.div`
  display: flex;
  gap: var(--spacing-4);
  height: 100%;

  .innerContainer {
    height: 100%;
    width: 100%;
  }
`;

const StyledInfoItem = styled.div`
  height: 100%;
  display: grid;
  place-content: center;
  text-align: center;
  padding: var(--spacing-3) var(--spacing-4);

  p {
    font-size: var(--font-size-normal-px);
    font-weight: var(--font-weight-bold);
    color: var(--color-transparent);
    background-image: linear-gradient(
      var(--gradient-rotation),
      var(--color-primary) 30%,
      var(--color-secondary)
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

export default InfoItem;
