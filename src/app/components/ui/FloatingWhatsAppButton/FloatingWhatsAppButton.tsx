"use client";

import React, { useEffect, useState } from "react";
import styles from "./FloatingWhatsAppButton.module.scss";
import Icon from "../Icon/Icon";
import { trackEvent } from "@/utils/analytics";
import { WHATSAPP_URL } from "../WhatsAppButton/WhatsAppButton";

type Props = {
  lang: string;
};

const ariaLabels: Record<string, string> = {
  en: "Chat on WhatsApp",
  pl: "Napisz na WhatsApp",
  ru: "Написать в WhatsApp",
};

// Singlepage-only (rendered directly in [...slug]/page.tsx, not in a
// shared layout) — mobile viewports only (CSS gate), appears once the
// user has scrolled past the hero so it never covers the hero's own CTAs.
const FloatingWhatsAppButton: React.FC<Props> = ({ lang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingButton}
      aria-label={ariaLabels[lang] ?? ariaLabels.en}
      onClick={() =>
        trackEvent("whatsapp_click", {
          placement: "floating",
          page_path: window.location.pathname,
        })
      }
    >
      <Icon name="whatsapp" size={26} />
    </a>
  );
};

export default FloatingWhatsAppButton;
