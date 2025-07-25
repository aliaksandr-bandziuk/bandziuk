"use client";
import React, { useEffect } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ModalFull.module.scss";
import { useModal } from "@/app/context/ModalContext";
import { FormStandardDocument } from "@/types/formStandardDocument";
import FormStandard from "../../forms/FormStandard/FormStandard";
import FormFull from "../../forms/FormFull/FormFull";
import { Bitter } from "next/font/google";

const customStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(242, 244, 247, 0.7)",
    zIndex: 999,
  },
  content: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: "20px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    inset: "0",
  },
};

type Props = {
  lang: string;
  formDocument: FormStandardDocument;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["500"],
});

const ModalFull = ({ lang, formDocument }: Props) => {
  const { isModalOpen, closeModal } = useModal(); // Используйте хук useModal для управления состоянием модального окна

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isModalOpen]);

  // console.log("formDocument", formDocument);
  return (
    <AnimatePresence>
      <Modal
        closeTimeoutMS={50}
        isOpen={isModalOpen} // Состояние открытия модального окна
        onRequestClose={closeModal} // Функция для закрытия модального окна
        ariaHideApp={false}
        style={customStyles}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{ width: "100%" }}
        >
          <div className={styles.popupContent}>
            <div className={styles.popupContentWrapper}>
              <div className={styles.formContent}>
                <div className={styles.formText}>
                  <h3 className={`${styles.modalTitle} ${bitter.className}`}>
                    {lang === "ru"
                      ? "Укажите контакты для связи"
                      : lang === "pl"
                        ? "Proszę podać swoje dane kontaktowe"
                        : "Please provide your contact details"}
                  </h3>
                  <p className={styles.modalText}>
                    {lang === "ru"
                      ? "Я свяжусь с вами как можно скорее"
                      : lang === "pl"
                        ? "Skontaktuję się z Tobą jak najszybciej"
                        : "I will contact you as soon as possible"}
                  </p>
                </div>

                <div className={styles.formInner}>
                  <FormFull form={formDocument} lang={lang} />
                </div>
              </div>
              <button className={styles.closeButton} onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="#BABABA"
                >
                  <path
                    d="M15 1L1 15M1.00001 1L15 15"
                    stroke="#BABABA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </Modal>
    </AnimatePresence>
  );
};

export default ModalFull;
