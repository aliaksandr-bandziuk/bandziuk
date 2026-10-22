"use client";

import React, { useEffect, useState } from "react";
import styles from "./StickyCtaBar.module.scss";
import Icon from "../Icon/Icon";
import { useModal } from "@/app/context/ModalContext";
import { loadModalDialog } from "@/app/components/modals/ModalFull/loadModalDialog";
import { trackEvent } from "@/utils/analytics";
import { WHATSAPP_URL } from "../WhatsAppButton/WhatsAppButton";

type Props = {
  lang: string;
};

const LABELS: Record<string, { quote: string; whatsapp: string }> = {
  en: { quote: "Get a quote", whatsapp: "Chat on WhatsApp" },
  pl: { quote: "Zapytaj o wycenę", whatsapp: "Napisz na WhatsApp" },
  ru: { quote: "Узнать стоимость", whatsapp: "Написать в WhatsApp" },
};

// Landing pages with `stickyCta` (variant A, 2026-10): a bar fixed to the
// bottom of a phone screen with the two ways to get in touch. Like the round
// FloatingWhatsAppButton it replaces, it mounts only after the visitor has
// scrolled past the intro (whose own buttons it would otherwise duplicate)
// and is hidden by CSS from 768px up.
const StickyCtaBar: React.FC<Props> = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const { openModal } = useModal();
  const label = LABELS[lang] ?? LABELS.en;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.bar}>
      <button
        type="button"
        className={styles.quote}
        onClick={() => {
          trackEvent("cta_click", { placement: "sticky_bar", page_path: window.location.pathname });
          openModal();
        }}
        onTouchStart={loadModalDialog}
        onFocus={loadModalDialog}
      >
        {label.quote}
      </button>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label={label.whatsapp}
        onClick={() => trackEvent("whatsapp_click", { placement: "sticky_bar", page_path: window.location.pathname })}
      >
        <Icon name="whatsapp" size={24} />
      </a>
    </div>
  );
};

export default StickyCtaBar;
