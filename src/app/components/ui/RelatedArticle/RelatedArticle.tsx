import React, { FC } from "react";
import styles from "./RelatedArticle.module.scss";
import { Category, Image as ImageType } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
});

export type Props = {
  title: string;
  excerpt: string;
  category: Category;
  slug: {
    [lang: string]: {
      current: string;
    };
  };
  previewImage?: ImageType;
  lang: string;
};

const RelatedArticle: FC<Props> = ({
  title,
  excerpt,
  slug,
  category,
  previewImage,
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

  return (
    <Link
      href={lang === "en" ? `/blog/${current}` : `/${lang}/blog/${current}`}
      className={styles.relatedArticle}
    >
      <div className={styles.relatedArticleImage}>
        {previewImage ? (
          <Image
            src={urlFor(previewImage).url()}
            alt={previewImage.alt ?? title}
            fill
            className={styles.previewImage}
          />
        ) : (
          <Image
            src={PLACEHOLDER}
            alt="Placeholder"
            fill
            className={styles.previewImage}
          />
        )}
        {category && <p className={styles.categoryTitle}>{category.title}</p>}
      </div>
      <div className={styles.content}>
        <h3 className={`${styles.articleTitle} ${bitter.className}`}>
          {title}
        </h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>
    </Link>
  );
};

export default RelatedArticle;
