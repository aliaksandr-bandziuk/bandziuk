"use client";

import React from "react";
import Button from "./Button";
import { useModal } from "@/app/context/ModalContext";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
};

export const ModalButton = ({ children, variant, size, className }: Props) => {
  const { openModal } = useModal();

  return (
    <Button type="button" variant={variant} size={size} className={className} onClick={openModal}>
      {children}
    </Button>
  );
};
