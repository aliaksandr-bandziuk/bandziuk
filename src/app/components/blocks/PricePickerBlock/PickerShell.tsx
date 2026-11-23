"use client";

import React, { FC, ReactNode, useEffect, useRef } from "react";

type Props = { children: ReactNode; className?: string };

// Everything inside is rendered on the server: all tracks, all option cards,
// all «what moves it» lines. This wrapper never creates or removes content —
// it only marks which parts are on screen and keeps the URL fragment in step,
// so a crawler that does not run JavaScript still reads the whole price list.
const PickerShell: FC<Props> = ({ children, className }) => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const strip = el.querySelector<HTMLElement>("[data-tabs]");
    const stripWrap = el.querySelector<HTMLElement>("[data-tabs-wrap]");
    const tabs = Array.from(el.querySelectorAll<HTMLAnchorElement>("[data-tab]"));
    const panels = Array.from(el.querySelectorAll<HTMLElement>("[data-panel]"));
    const line = el.querySelector<HTMLElement>("[data-tabline]");
    if (!tabs.length || !panels.length) return;

    // picks[trackId][questionId] = index of the chosen answer
    const picks: Record<string, Record<string, number>> = {};
    panels.forEach((panel) => {
      const track = panel.dataset.panel as string;
      picks[track] = {};
      panel.querySelectorAll<HTMLElement>("[data-question-row]").forEach((row) => {
        picks[track][row.dataset.questionRow as string] = 0;
      });
    });

    // Which side of the tab strip still has tabs behind it. Drives the fade
    // that tells a phone user the strip scrolls at all.
    const updateFade = () => {
      if (!strip || !stripWrap) return;
      const slack = strip.scrollWidth - strip.clientWidth;
      if (slack <= 1) {
        stripWrap.setAttribute("data-fade", "none");
        return;
      }
      const atStart = strip.scrollLeft <= 1;
      const atEnd = strip.scrollLeft >= slack - 1;
      stripWrap.setAttribute(
        "data-fade",
        atStart ? "right" : atEnd ? "left" : "both",
      );
    };

    const moveLine = (tab: HTMLElement) => {
      if (!line) return;
      line.style.width = `${tab.offsetWidth}px`;
      line.style.transform = `translateX(${tab.offsetLeft}px)`;
    };

    const activate = (id: string) => {
      const tab = tabs.find((t) => t.dataset.tab === id) ?? tabs[0];
      const target = tab.dataset.tab as string;
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.toggleAttribute("data-on", on);
      });
      panels.forEach((p) => {
        const on = p.dataset.panel === target;
        p.toggleAttribute("data-on", on);
        if (on) {
          p.removeAttribute("data-anim");
          void p.offsetWidth;
          p.setAttribute("data-anim", "");
        }
      });
      moveLine(tab);
      // On a phone the chosen tab can be off to one side of the strip. Only
      // the strip is scrolled — scrollIntoView would also move the page
      // vertically when the picker is below the fold at load.
      if (strip) {
        const left = tab.offsetLeft;
        const right = left + tab.offsetWidth;
        if (left < strip.scrollLeft) strip.scrollLeft = left - 12;
        else if (right > strip.scrollLeft + strip.clientWidth)
          strip.scrollLeft = right - strip.clientWidth + 12;
      }
      updateFade();
    };

    const applyTrack = (track: string) => {
      const panel = panels.find((p) => p.dataset.panel === track);
      if (!panel) return;
      const chosen = picks[track] ?? {};
      const ids = new Set<string>();
      panel.querySelectorAll<HTMLButtonElement>("[data-choice]").forEach((b) => {
        if (Number(b.dataset.index) !== chosen[b.dataset.question as string]) return;
        (b.dataset.picks || "").split(",").filter(Boolean).forEach((id) => ids.add(id));
      });
      panel.querySelectorAll<HTMLElement>("[data-option]").forEach((card) => {
        const on = ids.has(card.dataset.option as string);
        if (on && !card.hasAttribute("data-on")) {
          card.setAttribute("data-on", "");
          card.setAttribute("data-anim", "");
          window.setTimeout(() => card.removeAttribute("data-anim"), 340);
        } else if (!on) {
          card.removeAttribute("data-on");
        }
      });
      let any = false;
      panel.querySelectorAll<HTMLElement>("[data-push]").forEach((li) => {
        const [q, i] = (li.dataset.push as string).split(":");
        const on = chosen[q] === Number(i);
        li.toggleAttribute("data-on", on);
        if (on) any = true;
      });
      const none = panel.querySelector<HTMLElement>("[data-nopush]");
      none?.toggleAttribute("data-on", !any);
    };

    const onClick = (e: MouseEvent) => {
      const node = e.target as HTMLElement;

      const tab = node.closest<HTMLAnchorElement>("[data-tab]");
      if (tab) {
        e.preventDefault();
        const id = tab.dataset.tab as string;
        window.history.replaceState(null, "", `#${id}`);
        activate(id);
        return;
      }

      const choice = node.closest<HTMLButtonElement>("[data-choice]");
      if (choice) {
        const track = choice.dataset.track as string;
        const q = choice.dataset.question as string;
        picks[track][q] = Number(choice.dataset.index);
        choice
          .closest("[data-choices]")
          ?.querySelectorAll<HTMLButtonElement>("[data-choice]")
          .forEach((b) => {
            const on = b === choice;
            b.toggleAttribute("data-on", on);
            b.setAttribute("aria-pressed", String(on));
          });
        applyTrack(track);
      }
    };

    const onHash = () => activate(window.location.hash.slice(1));
    const onResize = () => {
      const current = tabs.find((t) => t.hasAttribute("data-on"));
      if (current) moveLine(current);
      updateFade();
    };

    el.setAttribute("data-js", "on");
    Object.keys(picks).forEach(applyTrack);
    activate(window.location.hash.slice(1) || (tabs[0].dataset.tab as string));

    el.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("resize", onResize);
    strip?.addEventListener("scroll", updateFade, { passive: true });
    return () => {
      el.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("resize", onResize);
      strip?.removeEventListener("scroll", updateFade);
    };
  }, []);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
};

export default PickerShell;
