export type Image = {
  _key: string;
  _ref: string;
  _type: string;
  url: string;
};

export type navLink = {
  _key: string;
  label: string;
  link: string;
  /** Second level, rendered as a dropdown. Always present in the markup. */
  children?: { _key: string; label: string; link: string }[];
};

/** One link inside a mega menu column. `extra*` is the small tag beside it
 *  (the industry's SEO page, a city's website page). Links are full paths,
 *  with the language prefix, exactly as they are rendered. */
export type MegaLink = {
  _key: string;
  label: string;
  link: string;
  extraLabel?: string;
  extraLink?: string;
};

export type MegaColumn = {
  _key: string;
  title: string;
  /** Key of the column icon, see MEGA_ICONS in the schema. */
  icon?: string;
  links: MegaLink[];
  /** A short second list under the column (e.g. free tools). */
  subTitle?: string;
  subLinks?: MegaLink[];
};

export type MegaCase = {
  _key: string;
  title: string;
  result?: string;
  link: string;
};

export type MegaItem = {
  _key: string;
  label: string;
  /** "link" — a plain top link; "mega" — full-width panel with columns;
   *  "cases" — portfolio panel; "list" — a small dropdown. */
  kind: "link" | "mega" | "cases" | "list";
  link?: string;
  columns?: MegaColumn[];
  cases?: MegaCase[];
  promo?: {
    kicker?: string;
    title?: string;
    text?: string;
    linkLabel?: string;
    link?: string;
  };
  /** Links in the bottom strip of a panel ("All services", "Pricing"). */
  footerLinks?: MegaLink[];
  footerNote?: string;
};

export type Header = {
  _type: "header";
  _id: string;
  _rev: string;
  logo: Image;
  logoMobile: Image;
  /** Legacy two-level menu; used only while megaMenu is empty. */
  navLinks: navLink[];
  megaMenu?: MegaItem[];
  buttonLabel: string;
  /** Shown at the bottom of the mobile menu; empty hides the row. */
  phone?: string;
  /** Digits only. Falls back to the digits of `phone`. */
  whatsappNumber?: string;
};
