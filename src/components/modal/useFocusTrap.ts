"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Styling note for every modal file that imports this hook (all of
 * src/components/modal/modals/*.tsx):
 *
 * Tailwind classes applied to a react95 component (Button, Window,
 * WindowHeader, WindowContent, ...) need the `!` suffix for any property
 * react95 itself also sets on that element (padding, display, width/height,
 * border, background, etc.) — e.g. `p-3!`, not `p-3`. Otherwise the class is
 * silently ignored: Tailwind v4 puts all utilities inside `@layer utilities`,
 * react95's styled-components CSS is unlayered, and per the CSS cascade spec
 * unlayered rules always beat layered ones for normal (non-!important)
 * declarations, regardless of specificity or source order. `!important`
 * (Tailwind's `!` suffix) is evaluated before layering, so it reliably wins.
 *
 * Plain HTML elements you author yourself (div, span, button you wrote,
 * etc.) never need this — only react95's own components do.
 */

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  onEscape: () => void,
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    container.focus();

    function getFocusable(): HTMLElement[] {
      return Array.from(
        container!.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !container!.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !container!.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [containerRef, onEscape]);
}
