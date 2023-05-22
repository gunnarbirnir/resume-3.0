import { FC } from "react";
import { createGlobalStyle } from "styled-components";

import Reset from "./Reset";
import Variables from "./Variables";

const GlobalStyles: FC = () => {
  return (
    <>
      <Reset />
      <Variables />
      <Global />
    </>
  );
};

const Global = createGlobalStyle`
  html,
  body,
  #root {
    background-color: var(--color-black);
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-white);
    font-family: "Roboto", sans-serif;
  }

  ::selection {
    color: var(--color-black);
    background: var(--color-primary);
  }

  p {
    font-size: var(--font-size-normal);
    color: var(--color-gray-1);
  }

  h1 {
    font-size: var(--font-size-extra-large);
  }

  h2 {
    font-size: var(--font-size-medium);
  }

  h3 {
    font-size: var(--font-size-medium);
  }
`;

export default GlobalStyles;
