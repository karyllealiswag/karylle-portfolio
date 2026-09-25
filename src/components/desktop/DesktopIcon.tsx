"use client";

import type { ComponentType } from "react";

interface DesktopIconProps {
  label: string;
  Icon: ComponentType<{ className?: string }>;
  onOpen: () => void;
}

export function DesktopIcon({ label, Icon, onOpen }: DesktopIconProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="flex w-20 flex-col items-center gap-1 rounded p-2 text-white sm:w-24"
    >
      <Icon
        className="h-8 w-8 drop-shadow-[1px_1px_0_rgba(0,0,0,0.8)] sm:h-10 sm:w-10"
        aria-hidden="true"
      />
      <span className="rounded bg-black/40 px-1.5 py-0.5 text-center text-xs leading-tight break-words">
        {label}
      </span>
    </button>
  );
}
