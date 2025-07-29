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
  socialLinks: SocialLink[];
  footerColumns: FooterColumn[];
  copyright: string;
  finalText: string;
  language: string;
};
