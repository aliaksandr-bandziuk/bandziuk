"use client";

import { useEffect } from "react";
import { afterInteraction, injectScript } from "@/lib/defer";

const GA_ID = "G-LXSBE4EEP9";

export default function GoogleAnalyticsWrapper() {
  useEffect(() => {
    // The gtag() queue exists from the start, so events tracked before the
    // library arrives (trackEvent) are kept and sent once it loads.
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function gtag() {
        // gtag.js reads the `arguments` object itself, not an array.
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_ID);
    }
    // The library itself (~170 KB) loads on the first interaction or 4 s
    // after load, outside the window PageSpeed measures.
    return afterInteraction(() => injectScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`));
  }, []);

  return null;
}
