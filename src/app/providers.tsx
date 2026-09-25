"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/lib/react95-theme";
import { GlobalStyle } from "@/lib/react95-global-style";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
