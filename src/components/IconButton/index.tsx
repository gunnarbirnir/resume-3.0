import { FC } from "react";
import styled from "styled-components";

import { MEDIA_QUERY_HOVER } from "../../constants";

interface Props {
  icon: FC;
  onClick?: () => void;
}

const IconButton: FC<Props> = ({ icon: Icon, onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <Icon />
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  cursor: pointer;
  border: none;
  outline: 0;
  user-select: none;
  padding: 0px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  background-color: var(--color-primary);

  svg {
    height: 24px;
    width: 24px;
    color: var(--color-gray-6);
  }

  @media ${MEDIA_QUERY_HOVER} {
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

export default IconButton;
