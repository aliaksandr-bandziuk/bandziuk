import React, { FC } from "react";
import styles from "./RelatedArticle.module.scss";
import { Category, Image as ImageType } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";

export type Props = {
  _type?: string;
  title: string;
  excerpt: string;
  category: Category;
  slug: {
    [lang: string]: {
      current: string;
    };
  };
  previewImage?: ImageType;
  /** Parent slugs of a referenced service page, e.g. "services" or "oferty/lokalizacje". */
  parentPath?: string;
  lang: string;
};

const SEGMENT_BY_TYPE: Record<string, string> = {
  blog: "blog",
  portfolio: "portfolio",
};

const RelatedArticle: FC<Props> = ({
  _type,
  title,
  excerpt,
  slug,
  category,
  previewImage,
  parentPath,
  lang,
}) => {
  const langKey = lang as keyof typeof slug;
  const current =
    slug?.[langKey]?.current ??
    slug?.[category.language as keyof typeof slug]?.current ??
    Object.values(slug ?? {})[0]?.current ??
    "";

  const PLACEHOLDER =
    "https://cdn.sanity.io/files/88gk88s2/production/1580d3312e8cb973526a4d8f1019c78868ab3a45.jpg";

  // Blog and portfolio docs live under a fixed path segment. A service page
  // lives under its parents (services/…, oferty/lokalizacje/…): linking to the
  // bare slug was a link to a redirect on every related-article card.
  const segment = _type ? SEGMENT_BY_TYPE[_type] : "blog";
  const prefix = segment || parentPath || "";
  const path = prefix ? `${prefix}/${current}` : current;

  return (
    <Link
      href={lang === "en" ? `/${path}` : `/${lang}/${path}`}
      className={styles.relatedArticle}
    >
      <div className={styles.relatedArticleImage}>
        {previewImage ? (
          <Image
            src={urlFor(previewImage).url()}
            alt={previewImage.alt ?? title}
            fill
            sizes="(max-width: 980px) 100vw, 33vw"
            className={styles.previewImage}
          />
        ) : (
          <Image
            src={PLACEHOLDER}
            alt="Placeholder"
            fill
            sizes="(max-width: 980px) 100vw, 33vw"
            className={styles.previewImage}
          />
        )}
        {category && <p className={styles.categoryTitle}>{category.title}</p>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </Link>
  );
};

export default RelatedArticle;
