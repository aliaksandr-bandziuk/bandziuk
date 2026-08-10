// app/components/Breadcrumbs/Breadcrumbs.tsx
import React from "react";
import Link from "next/link";
import styles from "./Breadcrumbs.module.scss";

type BreadcrumbsProps = {
  lang: string;
  /** Сегменты URL: ["apartments-in-cyprus","just-subpage","sub-sub-page"] */
  segments: string[];
  /** Заголовок текущей (последней) страницы */
  currentTitle: string;
  /** slug -> real Sanity title, for intermediate crumbs. Falls back to a
   * humanized slug for any segment not present (e.g. non-singlepage routes). */
  titles?: Record<string, string>;
};

const humanize = (s: string) =>
  s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()); // Just Subpage

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  lang,
  segments,
  currentTitle,
  titles,
}) => {
  const base = lang === "en" ? "" : `/${lang}`;
  const homeTitle =
    lang === "en"
      ? "Home"
      : lang === "ru"
        ? "Главная"
        : lang === "pl"
          ? "Strona główna"
          : "Home";

  // Собираем массив крошек
  const crumbs = [
    { name: homeTitle, href: base || "/" },
    // промежуточные сегменты
    ...segments.slice(0, -1).map((seg, i) => {
      const path = segments.slice(0, i + 1).join("/");
      return { name: titles?.[seg] ?? humanize(seg), href: `${base}/${path}` };
    }),
    // последняя — уже настоящий заголовок страницы
    { name: currentTitle, href: `${base}/${segments.join("/")}` },
  ];

  return (
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
  );
};

export default Breadcrumbs;
