"use client";
import React from "react";
import styles from "./ButtonModal.module.scss";
import { useModal } from "@/app/context/ModalContext";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ButtonModal = ({ children, className }: Props) => {
  const { openModal } = useModal();

  return (
    <button
      type="button"
      className={`${styles.btn} ${className ? className : ""}`}
      onClick={openModal}
    >
      <span className={styles.btnText}>{children}</span>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </button>
  );
};
