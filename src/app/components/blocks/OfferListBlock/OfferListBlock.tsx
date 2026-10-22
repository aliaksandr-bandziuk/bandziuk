import React, { FC } from "react";
import styles from "./OfferListBlock.module.scss";
import Icon from "../../ui/Icon/Icon";
import { OfferListBlock as OfferListBlockType } from "@/types/blog";

type Props = {
  block: OfferListBlockType;
};

// "What you get" on a landing page (variant A, 2026-10). Rows instead of big
// centred cards: on a phone six rows take about one screen, the old card grid
// took three. Prices sit right under the list, because the price is the first
// thing a buyer looks for.
const OfferListBlock: FC<Props> = ({ block }) => {
  const items = block.items ?? [];
  const prices = block.prices ?? [];
  if (!items.length && !prices.length) return null;

  return (
    <section className={styles.offerList}>
      <div className="container">
        {block.eyebrow && <div className={styles.eyebrow}>{block.eyebrow}</div>}
        <h2 className={styles.title}>{block.title}</h2>

        {items.length > 0 && (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item._key} className={styles.item}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon name={item.iconName || "check"} size={20} />
                </span>
                <span className={styles.itemText}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  {item.text && <span className={styles.itemLine}>{item.text}</span>}
                </span>
              </li>
            ))}
          </ul>
        )}

        {prices.length > 0 && (
          <div className={styles.prices}>
            {prices.map((price) => (
              <div
                key={price._key}
                className={[styles.price, price.highlight ? styles.priceHighlight : ""].filter(Boolean).join(" ")}
              >
                <div className={styles.priceLabel}>{price.label}</div>
                <div className={styles.priceValue}>{price.value}</div>
                {price.note && <div className={styles.priceNote}>{price.note}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OfferListBlock;
