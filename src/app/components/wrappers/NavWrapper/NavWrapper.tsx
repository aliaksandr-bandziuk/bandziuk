// NavWrapper.tsx

"use client";

import { useState } from "react";
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

const NavWrapper: React.FC<Props> = ({ navLinks, params, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className={`${styles.navWrapper} ${isMenuOpen ? styles.navWrapperOpen : ""}`}
      >
        <NavLinks navLinks={navLinks} params={params} closeMenu={closeMenu} />
        <div className={styles.mobileLocaleWrapper}>
          <LocaleSwitcher translations={translations} />
        </div>
      </div>
      <BurgerMenu isMenuOpen={isMenuOpen} onToggle={toggleMenu} />
    </>
  );
};

export default NavWrapper;
