"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent, RefObject } from "react";

const DRAG_MIN_VIEWPORT_WIDTH = 640; // matches Tailwind's `sm` breakpoint — dragging is desktop-only
const MIN_VISIBLE_PX = 60; // keep at least this much of the window reachable on screen

interface DragOffset {
  x: number;
  y: number;
}

interface DragState {
  startX: number;
  startY: number;
  originX: number;
  originY: number;
  rect: DOMRect;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function useDraggable(elementRef: RefObject<HTMLElement | null>) {
  const [offset, setOffset] = useState<DragOffset>({ x: 0, y: 0 });
  const dragRef = useRef<DragState | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;

    const minDeltaX = MIN_VISIBLE_PX - drag.rect.right;
    const maxDeltaX = window.innerWidth - MIN_VISIBLE_PX - drag.rect.left;
    const minDeltaY = -drag.rect.top;
    const maxDeltaY = window.innerHeight - MIN_VISIBLE_PX - drag.rect.top;

    const deltaX = clamp(event.clientX - drag.startX, minDeltaX, maxDeltaX);
    const deltaY = clamp(event.clientY - drag.startY, minDeltaY, maxDeltaY);

    setOffset({ x: drag.originX + deltaX, y: drag.originY + deltaY });
  }, []);

  const startDrag = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (window.innerWidth < DRAG_MIN_VIEWPORT_WIDTH) return;
      if (event.button !== 0) return;
      if ((event.target as HTMLElement).closest("button")) return;
      const element = elementRef.current;
      if (!element) return;

      event.preventDefault();
      dragRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        originX: offset.x,
        originY: offset.y,
        rect: element.getBoundingClientRect(),
      };

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      document.addEventListener("pointermove", handlePointerMove, { signal: controller.signal });
      document.addEventListener(
        "pointerup",
        () => {
          dragRef.current = null;
          controller.abort();
        },
        { signal: controller.signal },
      );
    },
    [elementRef, offset, handlePointerMove],
  );

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  return { offset, startDrag };
}
