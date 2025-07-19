import React from "react";
import styles from "./ButtonPrimary.module.scss";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const ButtonPrimary = ({ children, onClick, disabled, className }: Props) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
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

export default ButtonPrimary;
