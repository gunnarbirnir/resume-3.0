import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import DefaultLayout from "../DefaultLayout";

interface Props {
  title?: string;
}

const ErrorMessage: FC<PropsWithChildren<Props>> = ({
  title = "Error",
  children,
}) => {
  return (
    <StyledErrorMessage>
      <DefaultLayout>
        <h1>{title}</h1>
        <p>{children}</p>
      </DefaultLayout>
    </StyledErrorMessage>
  );
};

const StyledErrorMessage = styled.div`
  text-align: center;
  height: 200px;
`;

export default ErrorMessage;
