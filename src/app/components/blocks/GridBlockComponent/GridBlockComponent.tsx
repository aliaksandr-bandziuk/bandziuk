import React, { FC } from "react";
import { GridBlock } from "@/types/blog";
import styles from "./GridBlockComponent.module.scss";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import Link from "next/link";
import { Bitter } from "next/font/google";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: GridBlock;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.625rem, 2.5vw, 1.875rem)",
  medium: "clamp(1.25rem, 0.5rem + 3vw, 2.75rem)",
  large: "clamp(1.25rem, 5vw, 3.75rem)",
};

const GridBlockComponent: FC<Props> = ({ block }) => {
  const { title, items, marginTop, marginBottom } = block;

  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : "0";

  const computedMarginBottom =
    marginBottom && marginValues[marginBottom]
      ? marginValues[marginBottom]
      : "0";

  if (!items?.length) return null;

  return (
    <section
      className={styles.gridBlock}
      style={{
        marginTop: computedMarginTop,
        marginBottom: computedMarginBottom,
      }}
    >
      <div className="container">
        {title && (
          <div className={styles.text}>
            <h2 className={`${styles.title} ${bitter.className}`}>{title}</h2>
          </div>
        )}

        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={item._key} className={styles.serviceItemWrapperGrid}>
              <FadeInOnScroll index={index}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceItemWrapper}>
                    <div className={styles.serviceItemIcon}>
                      <Image
                        src={urlFor(item.icon).url()}
                        alt={item.icon.alt ?? title}
                        width={70}
                        height={70}
                        unoptimized
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.serviceItemText}>
                      <h3 className={styles.serviceItemTitle}>{item.title}</h3>
                      <p className={styles.serviceItemDescription}>
                        {item.description}
                      </p>
                      {item.linkDestination && item.linkLabel && (
                        <Link
                          href={item.linkDestination}
                          className={styles.serviceItemLink}
                        >
                          {item.linkLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridBlockComponent;
