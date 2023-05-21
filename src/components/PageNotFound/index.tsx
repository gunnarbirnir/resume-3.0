import { FC } from "react";
import styled from "styled-components";

import DefaultLayout from "../DefaultLayout";

const PageNotFound: FC = () => {
  return (
    <StyledPageNotFound>
      <DefaultLayout>
        <h1>Page not Found</h1>
        <p>
          Click <a href="/">here</a> to go back to the main page.
        </p>
      </DefaultLayout>
    </StyledPageNotFound>
  );
};

const StyledPageNotFound = styled.div`
  text-align: center;
  height: 200px;
`;

export default PageNotFound;
