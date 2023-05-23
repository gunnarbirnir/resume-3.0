import { FC } from "react";
import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles";
import Background from "./components/Background";
import ContentGrid from "./components/ContentGrid";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Background />
      <AppMain>
        <ContentGrid />
      </AppMain>
    </>
  );
};

const AppMain = styled.main`
  height: 100%;
  display: grid;
  place-items: center;
  overflow: auto;
  padding: var(--page-vertical-padding) var(--page-horizontal-padding);
`;

export default App;
