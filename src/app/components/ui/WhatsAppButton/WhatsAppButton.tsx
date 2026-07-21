"use client";

import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { trackEvent } from "@/utils/analytics";

// Canonical number — same one used by the site's existing contact icons
// (contactMethodsBlock's WhatsApp entry, and the footer's social link).
// Do not invent a different one; update here if the owner's number changes.
export const WHATSAPP_URL = "https://wa.me/48786517446";

export type WhatsAppPlacement = "hero" | "cta_band" | "floating" | "contacts";

type Props = {
  lang: string;
  placement: WhatsAppPlacement;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
};

const labels: Record<string, string> = {
  en: "Chat on WhatsApp",
  pl: "Napisz na WhatsApp",
  ru: "Написать в WhatsApp",
};

const WhatsAppButton: React.FC<Props> = ({
  lang,
  placement,
  variant = "secondary",
  size = "md",
  className,
}) => {
  const label = labels[lang] ?? labels.en;

  return (
    <Button
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
      onClick={() =>
        trackEvent("whatsapp_click", {
          placement,
          page_path: window.location.pathname,
        })
      }
    >
      <Icon name="whatsapp" size={18} />
      {label}
    </Button>
  );
};

export default WhatsAppButton;
