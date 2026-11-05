// Helpers that keep non-essential client work out of the first paint.
// Lighthouse's simulation puts every script that runs before the largest
// paint on the path to it, so work that can wait must wait.

/** Calls `fn` once the page has loaded (immediately if it already has). */
function onLoad(fn: () => void): () => void {
  if (document.readyState === "complete") {
    const id = window.setTimeout(fn, 0);
    return () => window.clearTimeout(id);
  }
  window.addEventListener("load", fn, { once: true });
  return () => window.removeEventListener("load", fn);
}

/**
 * `delay` ms after `load`, then in the next idle slot (at most `timeout` ms
 * later). The delay matters: `load` can fire before the first paint, and any
 * request that starts before the largest paint is counted towards it.
 */
export function afterLoadIdle(fn: () => void, delay = 1500, timeout = 2000): () => void {
  let idleId = 0;
  let timerId = 0;
  const cancelLoad = onLoad(() => {
    timerId = window.setTimeout(() => {
      timerId = 0;
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(fn, { timeout });
      else fn();
    }, delay);
  });
  return () => {
    cancelLoad();
    if (idleId) window.cancelIdleCallback(idleId);
    if (timerId) window.clearTimeout(timerId);
  };
}

const INTERACTION_EVENTS = ["scroll", "pointerdown", "touchstart", "keydown", "mousemove"] as const;

/**
 * On the visitor's first interaction, or `fallbackMs` after `load` if they
 * do nothing — whichever comes first. Used for analytics.
 *
 * The fallback is deliberately short. A visitor who leaves before it elapses
 * is not counted at all, and arrivals from deep search positions are exactly
 * the ones that leave in the first second or two. Measured 05.11.2026:
 * Search Console reported 145 clicks over 28 days where GA4 recorded 52
 * organic sessions (see claude/analytics-discrepancy-2026-11-05.md).
 * `visibilitychange` is in the trigger list for the same reason: opening a
 * page and switching tab is a real visit that the interaction events alone
 * never see.
 */
export function afterInteraction(fn: () => void, fallbackMs = 1500): () => void {
  let done = false;
  let timerId = 0;
  const run = () => {
    if (done) return;
    done = true;
    cleanup();
    fn();
  };
  const cancelLoad = onLoad(() => {
    timerId = window.setTimeout(run, fallbackMs);
  });
  INTERACTION_EVENTS.forEach((e) => window.addEventListener(e, run, { once: true, passive: true }));
  // Dispatched on document rather than window: catches a tab switch either way.
  document.addEventListener("visibilitychange", run, { once: true });
  function cleanup() {
    cancelLoad();
    window.clearTimeout(timerId);
    INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, run));
    document.removeEventListener("visibilitychange", run);
  }
  return () => {
    done = true;
    cleanup();
  };
}

/** Appends an async script once per page. */
export function injectScript(src: string): void {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}
