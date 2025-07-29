import React from "react";
import Link from "next/link";
import styles from "./BreadcrumbsPortfolio.module.scss";

type BreadcrumbsProps = {
  lang: string;
  segments: string[]; // e.g. ['my-post']
  currentTitle: string;
};

const humanize = (s: string) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const portfolioLabelByLang: Record<string, string> = {
  en: "Portfolio",
  ru: "Портфолио",
  pl: "Portfolio",
};

const homeLabelByLang: Record<string, string> = {
  en: "Home",
  ru: "Главная",
  pl: "Strona główna",
};

const BreadcrumbsPortfolio: React.FC<BreadcrumbsProps> = ({
  lang,
  segments,
  currentTitle,
}) => {
  const base = lang === "en" ? "" : `/${lang}`;
  const homeTitle = homeLabelByLang[lang] ?? homeLabelByLang.en;
  const portfolioTitle = portfolioLabelByLang[lang] ?? portfolioLabelByLang.en;

  const crumbs = [
    { name: homeTitle, href: base || "/" },
    { name: portfolioTitle, href: `${base}/portfolio` },
    // Если у вас будут вложенные рубрики внутри портфолио, их тоже можно вывести:
    ...segments.slice(0, -1).map((seg, i) => {
      const path = segments.slice(0, i + 1).join("/");
      return { name: humanize(seg), href: `${base}/portfolio/${path}` };
    }),
    // Наконец — сама статья
    { name: currentTitle, href: `${base}/portfolio/${segments.join("/")}` },
  ];

  return (
    <div className="container">
      <nav
        aria-label="breadcrumb"
        className={styles.breadcrumbs}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <ol className={styles.breadcrumb}>
          {crumbs.map((crumb, idx) => (
            <li
              key={idx}
              className={`${styles.breadcrumbItem} ${
                idx === crumbs.length - 1 ? styles.breadcrumbItemActive : ""
              }`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {idx < crumbs.length - 1 ? (
                <Link href={crumb.href} itemProp="item">
                  <span itemProp="name">{crumb.name}</span>
                </Link>
              ) : (
                <span itemProp="name">{crumb.name}</span>
              )}
              <meta itemProp="position" content={String(idx + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbsPortfolio;
