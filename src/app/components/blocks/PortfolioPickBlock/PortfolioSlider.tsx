"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./PortfolioPickBlock.module.scss";

type Props = {
  lang: string;
  count: number;
  header: React.ReactNode;
  children: React.ReactNode;
};

const LABELS: Record<string, { prev: string; next: string; go: string }> = {
  en: { prev: "Previous project", next: "Next project", go: "Go to project" },
  pl: { prev: "Poprzedni projekt", next: "Następny projekt", go: "Przejdź do projektu" },
  ru: { prev: "Предыдущий проект", next: "Следующий проект", go: "Перейти к проекту" },
};

// The track is a native scroll-snap row (swipe works without this script);
// the script only adds arrows, dots and the disabled state at either end.
const PortfolioSlider: React.FC<Props> = ({ lang, count, header, children }) => {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // positions the row can actually stop at: on desktop three cards fill the
  // view, so five projects give three positions, not five
  const [positions, setPositions] = useState(count);
  // where a click is taking the row, until the smooth scroll arrives — so two
  // quick clicks move two cards instead of reading a half-finished position
  const pending = useRef<{ index: number; left: number } | null>(null);
  const t = LABELS[lang] ?? LABELS.en;

  const step = () => {
    const el = track.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    const gap = parseFloat(getComputedStyle(el).columnGap || "0") || 0;
    return first.offsetWidth + gap;
  };

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const s = step();
    if (pending.current && Math.abs(el.scrollLeft - pending.current.left) < 2) pending.current = null;
    setIndex(pending.current ? pending.current.index : s ? Math.round(el.scrollLeft / s) : 0);
    setPositions(s ? Math.round((el.scrollWidth - el.clientWidth) / s) + 1 : count);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, [count]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // scrollTo to an absolute position, never scrollBy: in Chrome a smooth
  // scrollBy on a scroll-snap row is sometimes swallowed (tested 2026-10-22).
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const target = Math.max(0, Math.min(positions - 1, i));
    const left = Math.min(target * step(), el.scrollWidth - el.clientWidth);
    pending.current = { index: target, left };
    setIndex(target);
    setAtStart(left <= 2);
    setAtEnd(left >= el.scrollWidth - el.clientWidth - 2);
    el.scrollTo({ left, behavior: "smooth" });
  };
  const by = (d: number) => go((pending.current ? pending.current.index : index) + d);
  const scrollable = !(atStart && atEnd);

  return (
    <>
      <div className={styles.toolbar}>
        {header}
        {scrollable && (
          <div className={styles.arrows}>
            <button type="button" className={styles.arrow} onClick={() => by(-1)} disabled={atStart} aria-label={t.prev}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button type="button" className={styles.arrow} onClick={() => by(1)} disabled={atEnd} aria-label={t.next}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        )}
      </div>
      <ul className={styles.row} ref={track}>
        {children}
      </ul>
      {scrollable && positions > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: positions }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === index ? styles.dotActive : styles.dot}
              onClick={() => go(i)}
              aria-label={`${t.go} ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PortfolioSlider;
