import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bitter } from "next/font/google";
import { RelatedServicesBlock } from "@/types/blog";
import { urlFor } from "@/sanity/sanity.client";
import { localePrefix } from "@/utils/hreflang";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import styles from "./RelatedServicesBlockComponent.module.scss";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: RelatedServicesBlock;
  lang: string;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const RelatedServicesBlockComponent: FC<Props> = ({ block, lang }) => {
  const { title, items, marginTop, marginBottom } = block;

  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : undefined;
  const computedMarginBottom =
    marginBottom && marginValues[marginBottom] ? marginValues[marginBottom] : undefined;

  if (!items?.length) return null;

  return (
    <section
      className={styles.relatedServicesBlock}
      style={{ marginTop: computedMarginTop, marginBottom: computedMarginBottom }}
    >
      <div className="container">
        {title && (
          <div className={styles.text}>
            <h2 className={`${styles.title} ${bitter.className}`}>{title}</h2>
          </div>
        )}
        <ul className={styles.items}>
          {items.map((item, index) => {
            const fullSlug = item.parentSlug
              ? `${item.parentSlug}/${item.slug}`
              : item.slug;
            const href = `${localePrefix(lang)}/${fullSlug}`;
            return (
              <li key={item._id} className={styles.item}>
                <FadeInOnScroll index={index}>
                  <Link href={href} className={styles.card}>
                    {item.previewImage && (
                      <Image
                        src={urlFor(item.previewImage).width(900).url()}
                        alt={item.previewImage.alt ?? item.title}
                        fill
                        className={styles.cardImage}
                        sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        unoptimized
                      />
                    )}
                    <div className={styles.cardGradient} />
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                    </div>
                  </Link>
                </FadeInOnScroll>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default RelatedServicesBlockComponent;
