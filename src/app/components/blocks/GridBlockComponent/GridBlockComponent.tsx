import React, { FC } from "react";
import { GridBlock } from "@/types/blog";
import styles from "./GridBlockComponent.module.scss";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import Link from "next/link";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import Icon from "../../ui/Icon/Icon";
import IconBadge from "../../ui/Icon/IconBadge";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

type Props = {
  block: GridBlock;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const GridBlockComponent: FC<Props> = ({ block }) => {
  const { title, items, eyebrow, align, variant, marginTop, marginBottom } = block;

  // "answers" and "numbered" are the pricing-page layouts: left-aligned,
  // denser, no icon badges. The default stays exactly as it was everywhere
  // else on the site.
  const dense = variant === "answers" || variant === "numbered";
  const numbered = variant === "numbered";

  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : "0";

  const computedMarginBottom =
    marginBottom && marginValues[marginBottom]
      ? marginValues[marginBottom]
      : "0";

  if (!items?.length) return null;

  return (
    <section
      className={[
        styles.gridBlock,
        variant === "answers" ? styles.answers : "",
        numbered ? styles.numbered : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        marginTop: computedMarginTop,
        marginBottom: computedMarginBottom,
      }}
    >
      <div className="container">
        {(title || eyebrow) && (
          <SectionHeading
            eyebrow={eyebrow}
            eyebrowVariant={dense ? "plain" : "pill"}
            title={title}
            align={align ?? "center"}
            size={dense ? "compact" : "default"}
            className={dense ? styles.headingDense : styles.heading}
          />
        )}

        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={item._key} className={styles.serviceItemWrapperGrid}>
              <FadeInOnScroll index={index}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceItemWrapper}>
                    {numbered && (
                      <span className={styles.rowNumber} aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                    {dense ? null : item.iconName ? (
                      <IconBadge>
                        <Icon name={item.iconName} />
                      </IconBadge>
                    ) : (
                      item.icon && (
                        <div className={styles.serviceItemIcon}>
                          <Image
                            src={urlFor(item.icon).url()}
                            alt={item.icon.alt ?? title}
                            width={70}
                            height={70}
                            className={styles.image}
                          />
                        </div>
                      )
                    )}
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
