// BurgerMenu.tsx

"use client";

import React, { useEffect, forwardRef } from "react";
import styles from "./BurgerMenu.module.scss";

type Props = {
  isMenuOpen: boolean;
  onToggle: () => void;
};

const BurgerMenu = forwardRef<HTMLDivElement, Props>(
  ({ isMenuOpen, onToggle }, ref) => {
    useEffect(() => {
      if (isMenuOpen) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
    }, [isMenuOpen]);

    return (
      <div className={styles.burgerMenu}>
        <div
          ref={ref}
          className={styles.burgerIcon}
          role="button"
          tabIndex={0}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.rotateBar1 : ""}`}
          />
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.rotateBar2 : ""}`}
          />
          <div
            className={`${styles.bar} ${isMenuOpen ? styles.rotateBar3 : ""}`}
          />
        </div>
      </div>
    );
  }
);

BurgerMenu.displayName = "BurgerMenu";

export default BurgerMenu;
