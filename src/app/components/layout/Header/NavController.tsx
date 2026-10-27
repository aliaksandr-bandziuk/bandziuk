"use client";

// NavController — behaviour for the server-rendered menu (MegaNav) and the
// footer accordions. It renders nothing and receives no links: it only
// toggles data-open / aria-expanded on markup that is already in the HTML.
//
//  [data-nav-trigger]  top item button → opens its [data-nav-item]
//  [data-acc-trigger]  column title     → folds its [data-acc] (phones only)
//  [data-nav-burger]   burger           → slides the mobile panel in and out
//  any link or button inside the menu   → closes the menu after the click
//  Escape, a click outside              → close everything

import { useEffect } from "react";

const MOBILE = "(max-width: 1023px)";
const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function NavController() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-nav]");
    const burger = document.querySelector<HTMLButtonElement>("[data-nav-burger]");
    const panel = document.querySelector<HTMLElement>("[data-nav-panel]");
    const isMobile = () => window.matchMedia(MOBILE).matches;

    const setItem = (item: Element, open: boolean) => {
      item.toggleAttribute("data-open", open);
      item.querySelector(":scope > [data-nav-trigger]")?.setAttribute("aria-expanded", String(open));
    };
    const closeItems = (except?: Element) =>
      document.querySelectorAll("[data-nav-item][data-open]").forEach((i) => i !== except && setItem(i, false));

    const setMenu = (open: boolean) => {
      root?.toggleAttribute("data-menu-open", open);
      burger?.setAttribute("aria-expanded", String(open));
      document.documentElement.classList.toggle("nav-locked", open);
      if (open) panel?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
      else closeItems();
    };
    const menuOpen = () => !!root?.hasAttribute("data-menu-open");

    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;

      const trigger = t.closest("[data-nav-trigger]");
      if (trigger) {
        const item = trigger.closest("[data-nav-item]");
        if (item) {
          const open = !item.hasAttribute("data-open");
          closeItems(item);
          setItem(item, open);
        }
        return;
      }

      const acc = t.closest("[data-acc-trigger]");
      if (acc) {
        // Columns fold only on phones; on a desktop the title is just a heading.
        if (!isMobile() && acc.closest("[data-nav]")) return;
        if (!acc.closest("[data-nav]") && window.matchMedia("(min-width: 768px)").matches) return;
        const box = acc.closest("[data-acc]");
        if (box) {
          const open = !box.hasAttribute("data-open");
          box.toggleAttribute("data-open", open);
          acc.setAttribute("aria-expanded", String(open));
        }
        return;
      }

      if (t.closest("[data-nav-burger]")) {
        setMenu(!menuOpen());
        return;
      }

      // A link or a button (the contact dialog) inside the menu: close it.
      if (root?.contains(t) && t.closest("a, button")) {
        if (menuOpen()) setMenu(false);
        closeItems();
        return;
      }

      // The contact button next to the burger stays on top of the open panel:
      // pressing it opens the dialog, so the menu closes first.
      if (menuOpen() && t.closest("header a, header button")) setMenu(false);

      // A click anywhere else closes an open desktop panel.
      if (!root?.contains(t)) closeItems();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const open = document.querySelector("[data-nav-item][data-open]");
        closeItems();
        if (menuOpen()) {
          setMenu(false);
          burger?.focus();
        } else if (open) {
          open.querySelector<HTMLElement>("[data-nav-trigger]")?.focus();
        }
        return;
      }
      // Keep Tab inside the open mobile menu (the burger counts as part of it).
      if (e.key === "Tab" && menuOpen() && panel && burger) {
        const list = [...Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null), burger];
        const first = list[0];
        const last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };

    // Moving the pointer onto another top item closes a panel opened by click,
    // so a clicked panel and a hovered one never show together.
    const onEnter = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || isMobile()) return;
      const item = (e.target as HTMLElement).closest?.("[data-nav-item]");
      if (item) closeItems(item);
    };

    // Leaving the phone layout with the menu open must not leave the page locked.
    const mq = window.matchMedia(MOBILE);
    const onMq = () => { if (!mq.matches && menuOpen()) setMenu(false); };

    // Desktop footer columns are always open; a phone starts with them folded.
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    root?.addEventListener("pointerover", onEnter);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      root?.removeEventListener("pointerover", onEnter);
      mq.removeEventListener("change", onMq);
      document.documentElement.classList.remove("nav-locked");
    };
  }, []);

  return null;
}
