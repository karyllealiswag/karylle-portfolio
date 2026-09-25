"use client";

import { useRef } from "react";
import type { ComponentType } from "react";
import { createPortal } from "react-dom";
import { Window, WindowHeader, WindowContent, Button } from "react95";
import { useFocusTrap } from "../useFocusTrap";
import { CloseGlyph, MaximizeGlyph, MinimizeGlyph } from "@/components/icons";
import ContactContent from "../content/ContactContent";

interface ContactModalProps {
  title: string;
  Icon: ComponentType<{ className?: string }>;
  onClose: () => void;
}

const TITLE_ID = "modal-title-contact";

export default function ContactModal({ title, Icon, onClose }: ContactModalProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  useFocusTrap(windowRef, onClose);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <Window
        ref={windowRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={TITLE_ID}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className="flex! h-full w-full flex-col! overflow-hidden motion-reduce:transition-none sm:h-auto sm:max-h-[85dvh] sm:w-auto sm:min-w-[400px] sm:max-w-[750px] shadow-xl"
      >
        <WindowHeader className="flex items-center justify-between gap-2">
          <span className="flex min-w-0 items-center gap-2">
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span id={TITLE_ID} className="truncate font-bold tracking-wide">
              {title}
            </span>
          </span>
          <span className="flex shrink-0 gap-1">
            <Button type="button" aria-hidden="true" tabIndex={-1} className="px-1.5! py-1!">
              <MinimizeGlyph className="h-3 w-3" />
            </Button>
            <Button type="button" aria-hidden="true" tabIndex={-1} className="px-1.5! py-1!">
              <MaximizeGlyph className="h-3 w-3" />
            </Button>
            <Button
              type="button"
              aria-label={`Close ${title}`}
              onClick={onClose}
              className="px-1.5! py-1! font-bold"
            >
              <CloseGlyph className="h-3 w-3" />
            </Button>
          </span>
        </WindowHeader>

        <WindowContent className="flex min-h-0 grow flex-col p-3! sm:p-4!">
          <div className="flex-1 overflow-y-auto pr-2 pb-2">
            <ContactContent />
          </div>

          <div className="mt-4 flex shrink-0 justify-end pt-2">
            <Button type="button" onClick={onClose} className="min-w-24 font-bold">
              OK
            </Button>
          </div>
        </WindowContent>
      </Window>
    </div>,
    document.body,
  );
}
