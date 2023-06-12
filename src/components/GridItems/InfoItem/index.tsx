import { FC } from "react";
import styled from "styled-components";

import info from "../../../assets/json/info.json";
import { useMediaQuery } from "../../../hooks";
import Card from "../../Card";
import FadeIn from "../../FadeIn";

const InfoItem: FC = () => {
  const { isGridSize } = useMediaQuery();
  const infoItems = isGridSize ? [info.singleItem] : info.items;

  return (
    <FadeIn>
      <InfoItemContainer>
        {infoItems.map((item) => (
          <Card key={item} padding={false}>
            <StyledInfoItem>
              <p>{item}</p>
            </StyledInfoItem>
          </Card>
        ))}
      </InfoItemContainer>
    </FadeIn>
  );
};

const InfoItemContainer = styled.div`
  display: flex;
  gap: var(--spacing-4);
  height: 100%;

  & > * {
    flex: 1;
    height: 100%;
  }
`;

const StyledInfoItem = styled.div`
  height: 100%;
  display: grid;
  place-content: center;
  text-align: center;
  padding: var(--spacing-3);

  p {
    max-width: 300px;
    font-weight: var(--font-weight-bold);
    color: var(--color-transparent);
    background-image: linear-gradient(
      var(--gradient-rotation),
      var(--color-primary) 50%,
      var(--color-secondary)
    );
    background-clip: text;
    -webkit-background-clip: text;
  }
`;

export default InfoItem;
