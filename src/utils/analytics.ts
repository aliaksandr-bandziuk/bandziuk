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
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Meta works from a fixed vocabulary of standard events, so our own event
 * names are mapped onto it rather than sent as-is. Only the two that an ad
 * campaign optimises towards are mapped; everything else stays GA4-only,
 * because an advertising account full of custom events is harder to optimise,
 * not easier.
 *
 * `Lead` is also what should sit at priority 1 in Events Manager →
 * Aggregated Event Measurement.
 */
const META_STANDARD_EVENTS: Record<string, string> = {
  form_submission_success: "Lead",
  whatsapp_click: "Contact",
};

export function trackEvent(eventName: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;

  // Meta first: the gtag branch below returns early, and the pixel has to be
  // told about a conversion whether or not gtag.js has attached yet. fbq is
  // undefined until MetaPixel mounts with an ID, so this is a no-op until
  // then; once mounted its own queue holds calls made before the library
  // finishes loading.
  const metaEvent = META_STANDARD_EVENTS[eventName];
  if (metaEvent && typeof window.fbq === "function") {
    window.fbq("track", metaEvent);
  }

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
