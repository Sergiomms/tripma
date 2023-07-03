"use client"

import { createGlobalStyle, DefaultTheme, } from "styled-components";

type GlobalStyleProps = {
  theme: DefaultTheme
  removeBg?: boolean
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
