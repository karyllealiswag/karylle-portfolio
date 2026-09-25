import { createGlobalStyle } from "styled-components";
import { styleReset } from "react95";

export const GlobalStyle = createGlobalStyle`
  ${styleReset}

  html,
  body,
  button,
  input,
  select,
  textarea {
    font-family: var(--font-pixel);
  }
`;
