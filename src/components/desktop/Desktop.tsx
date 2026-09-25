"use client";

import { useCallback, useState } from "react";
import { DesktopBackground } from "./DesktopBackground";
import { DesktopIcon } from "./DesktopIcon";
import { Taskbar } from "./Taskbar";
import { ActiveModal } from "@/components/modal/ActiveModal";
import { MODAL_DEFS, type ModalId } from "./modal-registry";

const BASE_Z_INDEX = 50;

export function Desktop() {
  const [openIds, setOpenIds] = useState<ModalId[]>([]);

  const openOrFocus = useCallback((id: ModalId) => {
    setOpenIds((prev) =>
      prev.includes(id) ? [...prev.filter((x) => x !== id), id] : [...prev, id],
    );
  }, []);

  const closeModal = useCallback((id: ModalId) => {
    setOpenIds((prev) => prev.filter((x) => x !== id));
  }, []);

  const activeId = openIds[openIds.length - 1] ?? null;

  return (
    <div className="relative min-h-dvh">
      <DesktopBackground />
      <main className="relative flex h-full flex-wrap content-start gap-3 p-4 pb-14 sm:h-dvh sm:flex-col sm:gap-5 sm:p-6 sm:pb-14">
        {MODAL_DEFS.map((def) => (
          <DesktopIcon
            key={def.id}
            label={def.label}
            Icon={def.Icon}
            onOpen={() => openOrFocus(def.id)}
          />
        ))}
      </main>
      {openIds.map((id, stackIndex) => {
        const def = MODAL_DEFS.find((d) => d.id === id);
        if (!def) return null;
        return (
          <ActiveModal
            key={id}
            id={def.id}
            title={def.title}
            Icon={def.Icon}
            zIndex={BASE_Z_INDEX + stackIndex}
            onFocus={() => openOrFocus(id)}
            onClose={() => closeModal(id)}
          />
        );
      })}
      <Taskbar
        openIds={openIds}
        activeId={activeId}
        onSelect={openOrFocus}
        onCloseTab={closeModal}
      />
    </div>
  );
}
