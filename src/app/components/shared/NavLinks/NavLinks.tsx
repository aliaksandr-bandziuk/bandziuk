"use client";
import Link from "next/link";
import { Header as HeaderType } from "@/types/header";
import styles from "../../layout/Header/Header.module.scss";
import { useEffect, useState } from "react";

type Props = {
  navLinks: HeaderType["navLinks"];
  params: { lang: string };
  closeMenu: () => void;
};

const NavLinks: React.FC<Props> = ({ navLinks, params, closeMenu }) => {
  const [activeSection, setActiveSection] = useState("");
  const [isHomePage, setIsHomePage] = useState(false);
  // Hover and :focus-within open the dropdowns on a pointer device. A tablet
  // has neither, so the caret is also a button; this only adds a class, the
  // list itself is in the markup either way.
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const getNormalizedHref = (lang: string, link: string) => {
    const normalizedLink = link.startsWith("/") ? link.slice(1) : link;
    const languagePrefix = lang === "en" ? "" : `/${lang}`;
    return `${languagePrefix}/${normalizedLink}`;
  };

  useEffect(() => {
    // Проверяем, находимся ли мы на главной странице
    setIsHomePage(window.location.pathname === `/${params.lang}`);

    const handleScroll = () => {
      let closestSectionId = "";
      let smallestDistance = Infinity;
      navLinks.forEach((navLink) => {
        const sectionElement = document.getElementById(navLink.link);
        if (sectionElement) {
          const distance = Math.abs(sectionElement.getBoundingClientRect().top);
          if (distance < smallestDistance) {
            smallestDistance = distance;
            closestSectionId = navLink.link;
          }
        }
      });

      setActiveSection(closestSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks, params.lang]);

  // Close an open dropdown on Escape or on a click outside the nav.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenMenu(null); };
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement)?.closest(`.${styles.navItemWithChildren}`)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [openMenu]);

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const offset =
        sectionElement.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    } else if (!isHomePage) {
      // Перенаправление на главную страницу, если элемент не найден и не на главной странице
      window.location.href = `/${params.lang}/#${sectionId}`;
    }
  };

  if (!navLinks) {
    return null;
  }

  return (
    <nav className={styles.navLinks}>
      {navLinks.map((link) => {
        const isPageLink = link.link?.startsWith("/");
        const children = (link.children ?? []).filter((c) => c?.label && c?.link);
        // An item with a dropdown but no page of its own ("Industries": those
        // pages sit at the root with no hub above them). It opens the menu and
        // is not a link, rather than an anchor pointing nowhere.
        const isLabelOnly = !link.link && children.length > 0;

        const isOpen = openMenu === link.label;
        const toggle = () => setOpenMenu(isOpen ? null : link.label);

        const top = isLabelOnly ? (
          <button
            type="button"
            className={styles.navLink}
            aria-expanded={isOpen}
            onClick={toggle}
          >
            {link.label}
          </button>
        ) : isPageLink ? (
          <Link
            href={getNormalizedHref(params.lang, link.link)}
            className={`${styles.navLink} ${
              activeSection === link.link ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            {link.label}
          </Link>
        ) : (
          <a
            href={`#${link.link}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.link);
              closeMenu();
            }}
            className={`${styles.navLink} ${
              activeSection === link.link ? styles.active : ""
            }`}
          >
            {link.label}
          </a>
        );

        if (!children.length)
          return (
            <div key={link.label} className={styles.navItem}>
              {top}
            </div>
          );

        // The dropdown is always rendered and only hidden with CSS — on hover
        // and focus-within on a pointer device, expanded inside the mobile
        // menu. Building it on open would keep these links out of the server
        // HTML, which is the whole reason the menu carries them.
        return (
          <div
            key={link.label}
            className={`${styles.navItem} ${styles.navItemWithChildren} ${isOpen ? styles.open : ""}`}
          >
            <span className={styles.navTopRow}>
              {top}
              {isLabelOnly ? (
                <span className={styles.caret} aria-hidden="true" />
              ) : (
                <button
                  type="button"
                  className={styles.caretButton}
                  aria-expanded={isOpen}
                  aria-label={link.label}
                  onClick={toggle}
                >
                  <span className={styles.caret} aria-hidden="true" />
                </button>
              )}
            </span>
            <ul className={styles.dropdown}>
              {children.map((child) => (
                <li key={child.link}>
                  <Link
                    href={getNormalizedHref(params.lang, child.link)}
                    className={styles.dropdownLink}
                    onClick={closeMenu}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default NavLinks;
