import { FC } from "react";
import { createGlobalStyle } from "styled-components";

import { useMediaQueryVariables } from "../../hooks";

const Variables: FC = () => {
  const { contentMaxWidth, verticalPadding, horizontalPadding } =
    useMediaQueryVariables();

  return (
    <VariablesStyle
      contentMaxWidth={contentMaxWidth}
      verticalPadding={verticalPadding}
      horizontalPadding={horizontalPadding}
    />
  );
};

const VariablesStyle = createGlobalStyle<{
  contentMaxWidth: number;
  verticalPadding: number;
  horizontalPadding: number;
}>`
  :root {
    /* Colors */
    --color-primary: hsl(164deg 99% 50%);
    --color-primary-dark: hsl(165deg 100% 12%);
    --color-secondary: hsl(201deg 100% 67%);
    --color-secondary-dark: hsl(202deg 100% 13%);

    --color-white: hsl(0deg 0% 100%);
    --color-black: hsl(0deg 0% 0%);
    --color-transparent: hsl(0deg 0% 0% / 0%);

    /* Gray colors */
    --color-gray-1: hsl(0deg 0% 80%);
    --color-gray-2: hsl(0deg 0% 70%);
    --color-gray-3: hsl(0deg 0% 50%);
    --color-gray-4: hsl(0deg 0% 30%);
    --color-gray-5: hsl(0deg 0% 15%);
    --color-gray-6: hsl(0deg 0% 5%);

    /* Spacing */
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 24px;
    --spacing-6: 32px;
    --spacing-7: 48px;
    --spacing-8: 64px;

    /* Font size */
    --font-size-small: calc(16px * 0.8);
    --font-size-normal: 16px;
    --font-size-medium: calc(16px * 1.3);
    --font-size-large: calc(16px * 1.5);
    --font-size-extra-large: calc(16px * 2.2);

    /* Font weight */
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;

    /* Layout */
    --content-max-width: ${({ contentMaxWidth }) => contentMaxWidth}px;
    --page-vertical-padding: ${({ verticalPadding }) => verticalPadding}px;
    --page-horizontal-padding: ${({ horizontalPadding }) =>
      horizontalPadding}px;

    /* Other */
    --gradient-rotation: 135deg;
  }
`;

export default Variables;
