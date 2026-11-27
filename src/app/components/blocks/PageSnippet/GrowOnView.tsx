"use client";

import React, { ReactNode, useLayoutEffect, useRef } from "react";

type Props = { children: ReactNode; className?: string; pendingClass: string; shownClass: string };

// The funnel bars grow from zero when the chart scrolls into view — the one
// motion kept from the earlier service-page design. Same rule as BarsReveal
// and FadeInOnScroll: the server HTML is the finished chart, a chart already
// on screen at load is left alone, and reduced motion gets no growth.
export default function GrowOnView({ children, className, pendingClass, shownClass }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add(pendingClass);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        el.classList.add(shownClass);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [pendingClass, shownClass]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
