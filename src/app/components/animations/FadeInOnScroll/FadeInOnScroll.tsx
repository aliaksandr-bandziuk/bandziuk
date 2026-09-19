"use client";

import React, { ReactNode, useLayoutEffect, useRef } from "react";
import styles from "./FadeInOnScroll.module.scss";

type Props = {
  children: ReactNode;
  index?: number; // для stagger-эффекта
  yOffset?: number; // смещение при появлении
  once?: boolean; // kept for existing callers; the reveal always runs once
};

/**
 * Scroll reveal in CSS, no animation library.
 *
 * The server HTML is plain and visible. On mount, a block that is already on
 * screen is left alone; only blocks below the fold are hidden and fade in when
 * scrolled to. The previous framer-motion version hid everything after
 * hydration, including the first screen, and re-showed it: PageSpeed then
 * counted the whole JS load as part of the page's paint.
 */
const FadeInOnScroll: React.FC<Props> = ({ children, index = 0, yOffset = 40 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.setProperty("--reveal-y", `${yOffset}px`);
    el.style.setProperty("--reveal-delay", `${index * 0.1}s`);
    el.classList.add(styles.hidden);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        el.classList.add(styles.shown);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index, yOffset]);

  return <div ref={ref}>{children}</div>;
};

export default FadeInOnScroll;
