"use client";

import React, { useLayoutEffect, useRef } from "react";
import styles from "./ScrambleOnView.module.scss";

type Props = {
  /** Server-rendered content. It stays server-rendered: this wrapper only
   *  animates the characters already in the DOM and never renders the text
   *  itself, so the value is in the HTML once, for crawlers, assistants and
   *  screen readers. */
  children: React.ReactNode;
};

const TICKS = 12;
const INTERVAL_MS = 125;

const DIGITS = "0123456789";
const LATIN_LOWER = "abcdefghijklmnopqrstuvwxyz";
const LATIN_UPPER = LATIN_LOWER.toUpperCase();
const CYRILLIC_LOWER = "абвгдежзийклмнопрстуфхцчшщыэюя";
const CYRILLIC_UPPER = CYRILLIC_LOWER.toUpperCase();

/**
 * The pool a random stand-in is drawn from: the same kind of character as the
 * real one. A digit stays a digit and a lowercase letter a lowercase letter, so
 * word widths barely change while the text scrambles, and Russian text scrambles
 * in Cyrillic. Spaces and punctuation are never replaced, which keeps word
 * boundaries readable.
 */
function poolFor(ch: string): string | null {
  if (ch >= "0" && ch <= "9") return DIGITS;
  if (ch.toLowerCase() === ch.toUpperCase()) return null; // not a letter
  const upper = ch === ch.toUpperCase();
  const code = ch.charCodeAt(0);
  if (code >= 0x0400 && code <= 0x04ff) return upper ? CYRILLIC_UPPER : CYRILLIC_LOWER;
  return upper ? LATIN_UPPER : LATIN_LOWER;
}

/**
 * Text scrambles into random characters, then settles left to right into the
 * real value when it scrolls into view: the timing of the credentials band on
 * giuseppeiannone.it (12 ticks of 125 ms, starting at 40% visibility).
 * Respects prefers-reduced-motion.
 */
export default function ScrambleOnView({ children }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes: { node: Text; original: string }[] = [];
    while (walker.nextNode()) {
      const node = walker.currentNode as Text;
      if (node.data.trim()) nodes.push({ node, original: node.data });
    }
    const total = nodes.reduce(
      (sum, n) => sum + n.original.split("").filter((ch) => poolFor(ch) !== null).length,
      0,
    );
    if (total === 0) return;

    let timer = 0;

    // Random letters can be wider than the real ones and push a line to wrap,
    // which would make the block grow and shrink back (seen in Russian on a
    // phone). The nearest block container keeps its settled height while the
    // text scrambles, and is released at the end.
    let box: HTMLElement | null = root.parentElement;
    while (box && getComputedStyle(box).display.startsWith("inline")) box = box.parentElement;
    const lock = () => {
      if (!box) return;
      box.style.height = `${box.getBoundingClientRect().height}px`;
      box.style.overflow = "hidden";
    };
    const unlock = () => {
      if (!box) return;
      box.style.height = "";
      box.style.overflow = "";
    };
    const restore = () => {
      nodes.forEach(({ node, original }) => (node.data = original));
      unlock();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.unobserve(root);
        lock();
        let tick = 0;
        timer = window.setInterval(() => {
          tick += 1;
          const revealed = Math.ceil((tick / TICKS) * total);
          let index = 0;
          for (const { node, original } of nodes) {
            node.data = original
              .split("")
              .map((ch) => {
                const pool = poolFor(ch);
                if (!pool) return ch;
                const position = index++;
                return position < revealed ? ch : pool[Math.floor(Math.random() * pool.length)];
              })
              .join("");
          }
          if (tick >= TICKS) {
            window.clearInterval(timer);
            restore();
          }
        }, INTERVAL_MS);
      },
      { threshold: 0.4 },
    );

    observer.observe(root);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
      restore();
    };
  }, []);

  return (
    <span ref={ref} className={styles.scramble}>
      {children}
    </span>
  );
}
