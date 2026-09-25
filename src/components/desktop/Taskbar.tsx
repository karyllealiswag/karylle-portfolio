"use client";

import { AppBar, Toolbar, Button, Cutout } from "react95";
import { StartIcon, CloseGlyph } from "@/components/icons";
import { MODAL_DEFS, type ModalId } from "./modal-registry";

interface TaskbarProps {
  openIds: ModalId[];
  activeId: ModalId | null;
  onSelect: (id: ModalId) => void;
  onCloseTab: (id: ModalId) => void;
}

const TASKBAR_Z_INDEX = 900;

export function Taskbar({ openIds, activeId, onSelect, onCloseTab }: TaskbarProps) {
  return (
    <AppBar position="fixed" style={{ top: "auto", bottom: 0, zIndex: TASKBAR_Z_INDEX }}>
      <Toolbar noPadding className="flex! h-10! items-center gap-1.5 px-1!">
        <Button aria-hidden="true" tabIndex={-1} className="shrink-0 gap-1.5 px-2! font-bold">
          <StartIcon className="h-4 w-4" aria-hidden="true" />
          Start
        </Button>

        <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto">
          {openIds.map((id) => {
            const def = MODAL_DEFS.find((d) => d.id === id);
            if (!def) return null;
            const isActive = id === activeId;

            return (
              <div key={id} className="flex shrink-0 items-stretch gap-0.5">
                <Button
                  active={isActive}
                  onMouseDown={() => onSelect(id)}
                  className="flex min-w-24 max-w-40 items-center gap-1.5 px-2! text-left"
                >
                  <def.Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate text-xs">{def.label}</span>
                </Button>
                <Button
                  aria-label={`Close ${def.label}`}
                  onMouseDown={(event) => {
                    event.stopPropagation();
                    onCloseTab(id);
                  }}
                  className="shrink-0 px-1.5!"
                >
                  <CloseGlyph className="h-2.5 w-2.5" aria-hidden="true" />
                </Button>
              </div>
            );
          })}
        </div>

        <Cutout className="shrink-0 px-2 py-1 text-xs text-black">04/16/05</Cutout>
      </Toolbar>
    </AppBar>
  );
}
