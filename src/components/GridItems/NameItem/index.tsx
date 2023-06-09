import { FC } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { MEDIA_QUERY } from "../../../constants";
import NameImage from "./NameImage";

interface Props {
  clearActiveItem: () => void;
}

const NameItem: FC<Props> = ({ clearActiveItem }) => {
  const [hideName, setHideName] = useState(false);

  const handleNameClick = () => {
    clearActiveItem();
    setHideName(true);
  };

  useEffect(() => {
    if (hideName) {
      setHideName(false);
    }
  }, [hideName]);

  return (
    <StyledNameItem>
      <NameImageContainer onClick={handleNameClick}>
        {!hideName && <NameImage />}
      </NameImageContainer>
    </StyledNameItem>
  );
};

const StyledNameItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${MEDIA_QUERY.MOBILE}px) {
    padding-bottom: var(--spacing-4);
  }
`;

const NameImageContainer = styled.h1`
  position: relative;
  cursor: pointer;
  width: 100%;
  max-width: 350px;
`;

export default NameItem;
