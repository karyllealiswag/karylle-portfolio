"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

// react95's styled-components use plain (non-transient) style props like
// `active`/`primary`/`square`/`fullWidth`/`variant`/`shadow` that aren't real
// HTML attributes. Without this, they leak straight through to the DOM and
// React logs an "unknown prop"/"non-boolean attribute" warning for each one.
function shouldForwardProp(propName: string, target: unknown) {
  return typeof target === "string" ? isPropValid(propName) : true;
}

export function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {children}
      </StyleSheetManager>
    );
  }

  return (
    <StyleSheetManager sheet={sheet.instance} shouldForwardProp={shouldForwardProp}>
      {children}
    </StyleSheetManager>
  );
}
