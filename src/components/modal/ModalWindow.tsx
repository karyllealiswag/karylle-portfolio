"use client";

import { useRef } from "react";
import type { ComponentType, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import { useFocusTrap } from "./useFocusTrap";
import { CloseGlyph, MaximizeGlyph, MinimizeGlyph } from "@/components/icons";

interface ModalWindowProps {
  titleId: string;
  title: string;
  Icon: ComponentType<{ className?: string }>;
  onClose: () => void;
  children: ReactNode;
}

export function ModalWindow({
  titleId,
  title,
  Icon,
  onClose,
  children,
}: ModalWindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  useFocusTrap(windowRef, onClose);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-2 sm:p-4"
      onClick={onClose}
    >
      <Window
        ref={windowRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="flex! h-full w-full flex-col! overflow-hidden motion-reduce:transition-none sm:h-auto sm:max-h-[80dvh] sm:w-auto sm:min-w-[320px] sm:max-w-140"
      >
        <WindowHeader className="flex items-center justify-between gap-2">
          <span className="flex min-w-0 items-center gap-2">
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span id={titleId} className="truncate">
              {title}
            </span>
          </span>
          <span className="flex shrink-0 gap-1">
            <Button type="button" aria-hidden="true" tabIndex={-1} className="px-1.5 py-1">
              <MinimizeGlyph className="h-3 w-3" />
            </Button>
            <Button type="button" aria-hidden="true" tabIndex={-1} className="px-1.5 py-1">
              <MaximizeGlyph className="h-3 w-3" />
            </Button>
            <Button
              type="button"
              aria-label={`Close ${title}`}
              onClick={onClose}
              className="px-1.5 py-1"
            >
              <CloseGlyph className="h-3 w-3" />
            </Button>
          </span>
        </WindowHeader>
        <WindowContent className="flex min-h-0 grow flex-col overflow-y-auto">
          <div className="grow">{children}</div>
          <div className="mt-4 flex justify-end">
            <Button type="button" onClick={onClose} className="min-w-20">
              OK
            </Button>
          </div>
        </WindowContent>
      </Window>
    </div>,
    document.body,
  );
}
