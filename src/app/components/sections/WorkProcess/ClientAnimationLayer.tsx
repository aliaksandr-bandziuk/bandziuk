// ClientAnimationLayer.tsx
"use client";

import React, { useEffect, useRef } from "react";
import styles from "./WorkProcess.module.scss";

type Props = {
  stepsCount: number;
  children: React.ReactNode;
};

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * Scroll-linked timeline: the line fills segment by segment and each marker
 * turns orange as the section scrolls past. Plain scroll listener writing
 * styles straight to the DOM; the framer-motion version brought ~100 KB of JS
 * to every page for this one effect.
 *
 * Progress follows framer's former offset ["0.2 1", "1 0.5"]: 0 when 20% of
 * the timeline has entered from the bottom of the viewport, 1 when its bottom
 * reaches the middle of the viewport.
 */
const ClientAnimationLayer: React.FC<Props> = ({ stepsCount, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const thresholds = Array.from({ length: stepsCount }, (_, i) => i / Math.max(1, stepsCount - 1));

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const segments = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.fillSegment}`));
    const markers = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.marker}`));
    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh - 0.2 * height; // `top` at progress 0
      const end = 0.5 * vh - height; // `top` at progress 1
      const p = clamp01((start - top) / (start - end));

      segments.forEach((el, i) => {
        const from = thresholds[i];
        const to = thresholds[i + 1];
        el.style.scale = `1 ${clamp01((p - from) / (to - from))}`;
      });
      markers.forEach((el, i) => {
        const prev = i === 0 ? 0 : thresholds[i - 1];
        const curr = thresholds[i];
        const m = curr === prev ? (p >= curr ? 1 : 0) : clamp01((p - prev) / (curr - prev));
        el.style.backgroundColor = `rgb(255, ${Math.round(255 - 117 * m)}, ${Math.round(255 - 195 * m)})`;
        el.style.boxShadow = m > 0.7 ? `0 0 8px rgba(255, 138, 60, ${((m - 0.7) / 0.3) * 0.8})` : "none";
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // thresholds derive from stepsCount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepsCount]);

  return (
    <div className={styles.timeline} ref={ref}>
      <div className={styles.line} />
      {thresholds.slice(0, -1).map((from, i) => (
        <div
          key={i}
          className={styles.fillSegment}
          style={{ top: `${from * 100}%`, height: `${(thresholds[i + 1] - from) * 100}%`, scale: "1 0" }}
        />
      ))}
      {children}
    </div>
  );
};

export default ClientAnimationLayer;
