"use client";

import React from "react";
import { useModal } from "@/app/context/ModalContext";
import { loadModalDialog } from "@/app/components/modals/ModalFull/loadModalDialog";

type Props = { className?: string; children: React.ReactNode };

// The quiet "request a quote" link under each pinned chapter heading. It opens
// the same dialog as the hero button, so it works on pages with or without a
// quote form further down.
export default function AskLink({ className, children }: Props) {
  const { openModal } = useModal();
  return (
    <button
      type="button"
      className={className}
      onClick={() => openModal()}
      onMouseEnter={loadModalDialog}
      onFocus={loadModalDialog}
      onTouchStart={loadModalDialog}
    >
      {children}
    </button>
  );
}
