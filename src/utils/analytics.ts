// Single helper for firing GA4 events, so calls aren't scattered as inline
// gtag()/dataLayer pushes across components. The site loads gtag.js
// directly (GoogleAnalyticsWrapper, gtag('config', 'G-LXSBE4EEP9')) rather
// than a GTM container — so the correct call is window.gtag('event', ...),
// not a raw dataLayer.push({event: ...}) (that GTM-style convention is what
// FormFullBlockComponent/FormMinimalBlockComponent/FormFull already use for
// "form_submission_success"; with gtag.js loaded directly rather than a GTM
// container, gtag.js's own listener does not treat an arbitrary pushed
// object as an event, so those pushes are inert today — see session report).

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  // Fallback if gtag.js hasn't attached yet (e.g. analytics consent not
  // granted) — harmless, and matches the dataLayer-push convention already
  // used elsewhere in the codebase.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
