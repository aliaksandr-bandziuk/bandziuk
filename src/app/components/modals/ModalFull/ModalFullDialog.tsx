"use client";
import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ModalFull.module.scss";
import { useModal } from "@/app/context/ModalContext";
import { FormStandardDocument } from "@/types/formStandardDocument";
import FormFull from "../../forms/FormFull/FormFull";

// react-modal's own overlay and content boxes are reduced to plain wrappers:
// the scrolling backdrop and the card are styled in ModalFull.module.scss
// (see the note there on why the old full-screen flex box cut the form off).
const customStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: "transparent",
    // above the site header (1050–1101), below the portfolio lightbox (1200);
    // at 999 the header sat on top of the popup and hid the top of the card
    zIndex: 1150,
  },
  content: {
    inset: 0,
    padding: 0,
    border: "none",
    borderRadius: 0,
    background: "transparent",
    overflow: "visible",
  },
};

type Props = {
  lang: string;
  formDocument: FormStandardDocument;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const TITLE: Record<string, string> = {
  ru: "Укажите контакты для связи",
  pl: "Proszę podać swoje dane kontaktowe",
  en: "Please provide your contact details",
};
const TEXT: Record<string, string> = {
  ru: "Я свяжусь с вами как можно скорее",
  pl: "Skontaktuję się z Tobą jak najszybciej",
  en: "I will contact you as soon as possible",
};
const CLOSE: Record<string, string> = {
  ru: "Закрыть форму",
  pl: "Zamknij formularz",
  en: "Close contact form",
};

const ModalFullDialog = ({ lang, formDocument }: Props) => {
  const { isModalOpen, closeModal } = useModal();
  const contentRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
      previousFocusRef.current = document.activeElement as HTMLElement;
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  // Focus trap
  useEffect(() => {
    if (!isModalOpen) {
      previousFocusRef.current?.focus();
      return;
    }

    const el = contentRef.current;
    if (!el) return;

    const focusable = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE));
    // Focus the first field without scrolling the page or popping the phone
    // keyboard up over the form on open: focus the card itself instead on
    // touch screens.
    if (window.matchMedia("(pointer: coarse)").matches) el.focus({ preventScroll: true });
    else focusable[0]?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isModalOpen]);

  // A tap on the dimmed area around the card closes the popup.
  const onBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <AnimatePresence>
      <Modal
        closeTimeoutMS={50}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={customStyles}
        contentLabel={TITLE[lang] ?? TITLE.en}
      >
        <div className={styles.scroller} onClick={onBackdrop}>
          <div className={styles.center} onClick={onBackdrop}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              className={styles.card}
              ref={contentRef}
              tabIndex={-1}
            >
              <div className={styles.header}>
                <h3 className={styles.modalTitle}>{TITLE[lang] ?? TITLE.en}</h3>
                <p className={styles.modalText}>{TEXT[lang] ?? TEXT.en}</p>
              </div>

              <div className={styles.formInner}>
                <FormFull form={formDocument} lang={lang} compact />
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={closeModal}
                aria-label={CLOSE[lang] ?? CLOSE.en}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    d="M15 1L1 15M1.00001 1L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </Modal>
    </AnimatePresence>
  );
};

export default ModalFullDialog;
