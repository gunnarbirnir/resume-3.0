import { FC } from "react";
import styled from "styled-components";

import FadeIn from "../../FadeIn";
import DefaultLayout from "../../DefaultLayout";

const ErrorItem: FC = () => {
  return (
    <FadeIn>
      <StyledErrorItem>
        <div>
          <DefaultLayout>
            <h1>Error</h1>
            <p>Something went wrong. Please try again.</p>
          </DefaultLayout>
        </div>
      </StyledErrorItem>
    </FadeIn>
  );
};

const StyledErrorItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    height: 200px;
    text-align: center;
  }
`;

export default ErrorItem;
