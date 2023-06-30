import { FC, useMemo } from "react";
import styled from "styled-components";

import { AppContext } from "./context";
import { useWindowDimensionsListener } from "./hooks";
import GlobalStyles from "./components/GlobalStyles";
import Background from "./components/Background";
import ContentGrid from "./components/ContentGrid";

const App: FC = () => {
  const { width: windowWidth, height: windowHeight } =
    useWindowDimensionsListener();
  const contextValue = useMemo(
    () => ({ windowWidth, windowHeight }),
    [windowWidth, windowHeight]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <GlobalStyles />
      <Background />
      <AppMain>
        <ContentGrid />
      </AppMain>
    </AppContext.Provider>
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
