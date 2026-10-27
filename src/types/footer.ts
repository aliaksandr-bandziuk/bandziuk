import { ContactsSection } from "./homepage";

type Image = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

// Тип ссылки (label + link)
export type FooterLink = {
  _key: string;
  label: string;
  link: string;
};

// Соцсети
export type SocialLink = {
  _key: string;
  label: string;
  link: string;
};

// Колонки футера
export type FooterColumn = {
  _key: string;
  title: string;
  links: FooterLink[];
};

// Основной тип Footer
export type Footer = {
  _type: "footer";
  _id: string;
  _rev?: string;
  title: string;
  contactsSection: ContactsSection;
  logo: Image;
  /** Two or three sentences under the logo. */
  aboutText?: string;
  /** As it should read, e.g. +48 786 517 446; links to WhatsApp. */
  phone?: string;
  /** Digits only; falls back to the digits of `phone`. */
  whatsappNumber?: string;
  /** Label of the button that opens the contact dialog. */
  ctaLabel?: string;
  socialLinks: SocialLink[];
  footerColumns: FooterColumn[];
  copyright: string;
  finalText: string;
  language: string;
};
