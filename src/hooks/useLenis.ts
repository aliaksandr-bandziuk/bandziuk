// src/hooks/useLenis.ts
"use client";

import { useEffect } from "react";
import { afterLoadIdle } from "@/lib/defer";

export const useLenis = () => {
  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void } | undefined;
    let frame = 0;
    let cancelled = false;

    // Smooth scroll is not needed for the first paint: the library is loaded
    // and started after `load`, in an idle slot.
    const cancelIdle = afterLoadIdle(async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      cancelIdle();
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);
};
