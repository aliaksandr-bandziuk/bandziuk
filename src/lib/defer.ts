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
 */
export function afterInteraction(fn: () => void, fallbackMs = 4000): () => void {
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
  function cleanup() {
    cancelLoad();
    window.clearTimeout(timerId);
    INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, run));
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
