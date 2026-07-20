"use client";

import React, { useEffect, useState } from "react";
import styles from "./TableOfContents.module.scss";
import type { Heading } from "@/utils/tableOfContents";

type Props = {
  headings: Heading[];
  variant: "sidebar" | "mobile";
  lang: string;
};

const LABELS: Record<string, string> = {
  en: "On this page",
  pl: "Na tej stronie",
  ru: "На этой странице",
};

const TableOfContents: React.FC<Props> = ({ headings, variant, lang }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-110px 0px -70% 0px", threshold: 0 }
    );

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  const label = LABELS[lang] ?? LABELS.en;

  const list = (
    <ul className={styles.list}>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={`${styles.link} ${activeId === heading.id ? styles.active : ""}`}
          >
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );

  if (variant === "mobile") {
    return (
      <details className={styles.mobileToc}>
        <summary className={styles.mobileTocSummary}>{label}</summary>
        {list}
      </details>
    );
  }

  return (
    <nav className={styles.toc} aria-label={label}>
      <p className={styles.eyebrow}>{label}</p>
      {list}
    </nav>
  );
};

export default TableOfContents;
