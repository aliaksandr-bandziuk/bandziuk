"use client";

import { useEffect } from "react";
import { afterInteraction, injectScript } from "@/lib/defer";

type ClarityWindow = Window & { clarity?: ((...args: unknown[]) => void) & { q?: unknown[] } };

export default function MicrosoftClarity() {
  useEffect(() => {
    const w = window as ClarityWindow;
    if (!w.clarity) {
      w.clarity = function clarity(...args: unknown[]) {
        (w.clarity!.q = w.clarity!.q || []).push(args);
      };
    }
    // Loads on the first interaction or 4 s after load, like GA.
    return afterInteraction(() => injectScript("https://www.clarity.ms/tag/shkdmxspc0"));
  }, []);

  return null;
}
