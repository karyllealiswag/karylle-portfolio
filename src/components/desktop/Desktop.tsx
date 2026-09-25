"use client";

import { useCallback, useState } from "react";
import { DesktopBackground } from "./DesktopBackground";
import { DesktopIcon } from "./DesktopIcon";
import { ActiveModal } from "@/components/modal/ActiveModal";
import { MODAL_DEFS, type ModalId } from "./modal-registry";

export function Desktop() {
  const [activeModalId, setActiveModalId] = useState<ModalId | null>(null);

  const closeModal = useCallback(() => setActiveModalId(null), []);

  const activeModal =
    MODAL_DEFS.find((def) => def.id === activeModalId) ?? null;

  return (
    <div className="relative min-h-dvh">
      <DesktopBackground />
      <main className="relative flex h-full flex-wrap content-start gap-3 p-4 sm:h-dvh sm:flex-col sm:gap-5 sm:p-6">
        {MODAL_DEFS.map((def) => (
          <DesktopIcon
            key={def.id}
            label={def.label}
            Icon={def.Icon}
            onOpen={() => setActiveModalId(def.id)}
          />
        ))}
      </main>
      {activeModal ? (
        <ActiveModal
          id={activeModal.id}
          title={activeModal.title}
          Icon={activeModal.Icon}
          onClose={closeModal}
        />
      ) : null}
    </div>
  );
}
