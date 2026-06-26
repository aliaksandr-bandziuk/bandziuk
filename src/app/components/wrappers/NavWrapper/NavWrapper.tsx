// NavWrapper.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../../layout/Header/Header.module.scss";
import NavLinks from "../../shared/NavLinks/NavLinks";
import BurgerMenu from "../../shared/BurgerMenu/BurgerMenu";
import { Header as HeaderType } from "@/types/header";
import { Translation } from "@/types/homepage";
import LocaleSwitcher from "../../shared/LocaleSwitcher/LocaleSwitcher";

type Props = {
  navLinks: HeaderType["navLinks"];
  params: { lang: string };
  translations?: Translation[];
};

const FOCUSABLE =
  'a[href], button:not([disabled]), [role="button"][tabindex]:not([tabindex="-1"])';

const NavWrapper: React.FC<Props> = ({ navLinks, params, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Focus trap for the mobile nav overlay
  useEffect(() => {
    // When the menu closes, return focus to the burger button
    if (!isMenuOpen) {
      if (wasOpen.current) {
        burgerRef.current?.focus();
      }
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const nav = navRef.current;
    if (!nav) return;

    const focusable = Array.from(nav.querySelectorAll<HTMLElement>(FOCUSABLE));
    focusable[0]?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
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
  }, [isMenuOpen]);

  return (
    <>
      <div
        ref={navRef}
        className={`${styles.navWrapper} ${isMenuOpen ? styles.navWrapperOpen : ""}`}
        aria-label="Main navigation"
      >
        <NavLinks navLinks={navLinks} params={params} closeMenu={closeMenu} />
        <div className={styles.mobileLocaleWrapper}>
          <LocaleSwitcher translations={translations} />
        </div>
      </div>
      <BurgerMenu ref={burgerRef} isMenuOpen={isMenuOpen} onToggle={toggleMenu} />
    </>
  );
};

export default NavWrapper;
