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
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : "0";
  const computedMarginBottom =
    marginBottom && marginValues[marginBottom] ? marginValues[marginBottom] : "0";

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
                  <Link href={href} className={styles.itemLink}>
                    {item.previewImage && (
                      <div className={styles.imageWrapper}>
                        <Image
                          src={urlFor(item.previewImage).width(600).url()}
                          alt={item.previewImage.alt ?? item.title}
                          fill
                          className={styles.image}
                          sizes="(max-width: 768px) 100vw, 400px"
                          unoptimized
                        />
                      </div>
                    )}
                    <span className={styles.itemLabel}>{item.title}</span>
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
