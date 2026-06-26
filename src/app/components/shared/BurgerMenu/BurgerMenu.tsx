// BurgerMenu.tsx

"use client";

import { useEffect } from "react";
import styles from "./BurgerMenu.module.scss";

type Props = {
  isMenuOpen: boolean;
  onToggle: () => void;
};

const BurgerMenu: React.FC<Props> = ({ isMenuOpen, onToggle }) => {
  const toggleMenu = () => {
    onToggle();
  };

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
        className={styles.burgerIcon}
        role="button"
        tabIndex={0}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMenu();
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
};

export default BurgerMenu;
