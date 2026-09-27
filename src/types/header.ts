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

export type Header = {
  _type: "header";
  _id: string;
  _rev: string;
  logo: Image;
  logoMobile: Image;
  navLinks: navLink[];
  buttonLabel: string;
  /** Shown at the bottom of the mobile menu; empty hides the row. */
  phone?: string;
  /** Digits only. Falls back to the digits of `phone`. */
  whatsappNumber?: string;
};
