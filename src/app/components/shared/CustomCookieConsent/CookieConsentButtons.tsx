"use client";

import Cookies from "js-cookie";
import styles from "./CustomCookieConsent.module.scss";
import { CONSENT_SET_CLASS, COOKIE_NAME } from "./consent";

type Props = {
  acceptLabel: string;
  rejectLabel: string;
};

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
