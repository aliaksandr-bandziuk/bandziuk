// Shared by the server banner, its client buttons and the inline script in
// [lang]/layout.tsx. Kept out of any "use client" module: a server component
// importing a constant from one gets a client reference, not the value.
export const COOKIE_NAME = "cookieConsent";

/** Class on <html> once a choice is stored; the banner's CSS hides it. */
export const CONSENT_SET_CLASS = "cookie-consent-set";

/** Runs in <head> before the first paint, so a returning visitor never sees the banner flash. */
export const CONSENT_HEAD_SCRIPT = `try{if(document.cookie.indexOf("${COOKIE_NAME}=")>-1)document.documentElement.classList.add("${CONSENT_SET_CLASS}")}catch(e){}`;
