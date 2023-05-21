import { FC } from "react";
import styled from "styled-components";

import Background from "./components/Background";
import ContentGrid from "./components/ContentGrid";

const App: FC = () => {
  return (
    <AppContainer>
      <Background />
      <main>
        <ContentGrid />
      </main>
    </AppContainer>
  );
};

const AppContainer = styled.main`
  height: 100%;
  isolation: isolate;

  & > main {
    height: 100%;
    display: grid;
    place-items: center;
    overflow: auto;
    padding: var(--spacing-7) var(--spacing-8);
  }
`;

export default App;
