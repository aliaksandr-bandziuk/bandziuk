import React, { FC } from "react";
import Link from "next/link";
import { Bitter } from "next/font/google";
import { RelatedServicesBlock } from "@/types/blog";
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
            // Build full path: localePrefix + /parentSlug/slug or /slug for root pages.
            // parentSlug is null for root-level singlepages.
            const fullSlug = item.parentSlug
              ? `${item.parentSlug}/${item.slug}`
              : item.slug;
            const href = `${localePrefix(lang)}/${fullSlug}`;
            return (
              <li key={item._id} className={styles.item}>
                <FadeInOnScroll index={index}>
                  <Link href={href} className={styles.itemLink}>
                    <span className={styles.itemLabel}>{item.title}</span>
                    {item.excerpt && (
                      <span className={styles.itemDescription}>
                        {item.excerpt}
                      </span>
                    )}
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
