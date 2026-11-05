"use client";

import { useEffect } from "react";
import { afterInteraction, injectScript } from "@/lib/defer";

/**
 * Meta (Facebook) pixel ID from Events Manager. In Meta's newer UI the same
 * number is also called the dataset ID — it is one value, not two.
 *
 * Empty on purpose until the pixel exists: with no ID the component does
 * nothing at all, so this can ship before the Meta side is set up and start
 * working the moment the value is filled in.
 */
const PIXEL_ID = "";

type FbqFn = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded?: boolean;
  version?: string;
};

type FbqWindow = Window & { fbq?: FbqFn; _fbq?: FbqFn };

export default function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return;

    const w = window as FbqWindow;

    // The fbq() queue exists from the start, so conversions fired before the
    // library arrives (trackEvent → fbq) are kept and sent once it loads.
    if (!w.fbq) {
      const fbq = function () {
        // fbevents.js reads the `arguments` object itself, not an array.
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        if (fbq.callMethod) fbq.callMethod.apply(fbq, args as unknown as unknown[]);
        else fbq.queue.push(args);
      } as unknown as FbqFn;

      fbq.queue = [];
      fbq.loaded = true;
      fbq.version = "2.0";
      // fbevents.js looks for both names.
      w.fbq = fbq;
      w._fbq = fbq;

      w.fbq("init", PIXEL_ID);
      w.fbq("track", "PageView");
    }

    // Loads on the first interaction, a tab switch, or 1.5 s after load, like
    // GA and Clarity.
    return afterInteraction(() => injectScript("https://connect.facebook.net/en_US/fbevents.js"));
  }, []);

  return null;
}
