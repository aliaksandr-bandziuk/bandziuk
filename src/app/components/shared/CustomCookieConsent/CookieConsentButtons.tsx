"use client";

import Cookies from "js-cookie";
import { useEffect, useLayoutEffect } from "react";
import styles from "./CustomCookieConsent.module.scss";
import { CONSENT_SET_CLASS, COOKIE_NAME } from "./consent";

type Props = {
  acceptLabel: string;
  rejectLabel: string;
};

// useLayoutEffect warns when React renders a client component on the server.
const useBeforePaint = typeof window === "undefined" ? useEffect : useLayoutEffect;

// Nothing on the server reads this cookie (analytics load unconditionally),
// so storing it and hiding the banner is all a click has to do.
function save(all: boolean) {
  Cookies.set(COOKIE_NAME, JSON.stringify({ necessary: true, analytics: all, marketing: all }), {
    expires: 180,
    sameSite: "Lax",
  });
  document.documentElement.classList.add(CONSENT_SET_CLASS);
}

export default function CookieConsentButtons({ acceptLabel, rejectLabel }: Props) {
  // Switching language is a client-side navigation across the [lang] segment,
  // so React rebuilds the layout and rewrites the attributes of <html> — which
  // wipes the class CONSENT_HEAD_SCRIPT added. That script only runs on a full
  // document load, so the banner came back on every language switch and stayed
  // until the next hard reload, however many times the visitor had accepted.
  // The banner re-mounts with the layout, so re-apply the class here, before
  // the browser paints.
  useBeforePaint(() => {
    if (document.cookie.indexOf(`${COOKIE_NAME}=`) > -1) {
      document.documentElement.classList.add(CONSENT_SET_CLASS);
    }
  });

  return (
    <div className={styles.buttons}>
      <button type="button" onClick={() => save(true)} className={styles.primaryButton}>
        {acceptLabel}
      </button>
      <button type="button" onClick={() => save(false)} className={styles.linkButton}>
        {rejectLabel}
      </button>
    </div>
  );
}
