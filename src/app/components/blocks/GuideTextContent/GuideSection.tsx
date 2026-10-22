"use client";

import React, { useState } from "react";
import styles from "./GuideTextContent.module.scss";

type Props = {
  id: string;
  title: string;
  defaultOpen: boolean;
  children: React.ReactNode;
};

// One H2 section of a guide. The open/closed state only matters on phones:
// from 768px up CSS shows every body and hides the toggle mark, so the
// server-rendered page looks complete before any script runs.
const GuideSection: React.FC<Props> = ({ id, title, defaultOpen, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = `${id}-body`;

  return (
    <section className={`${styles.section} ${open ? styles.open : ""}`}>
      <h2 id={id} className={styles.heading}>
        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls={bodyId}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{title}</span>
          {/* the +/− sign comes from CSS (::after), so it never becomes part of the H2 text search engines read */}
          <span className={styles.mark} aria-hidden="true" />
        </button>
      </h2>
      <div id={bodyId} className={styles.body}>
        {children}
      </div>
    </section>
  );
};

export default GuideSection;
