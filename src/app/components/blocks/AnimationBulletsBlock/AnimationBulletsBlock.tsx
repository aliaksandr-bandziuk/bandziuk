import { AnimationBulletsBlock } from "@/types/blog";
import React, { FC } from "react";
import styles from "./AnimationBulletsBlock.module.scss";
import CountNumber from "../../animations/CountNumber/CountNumber";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: AnimationBulletsBlock;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const AnimationBulletsBlockComponent: FC<Props> = ({ block }) => {
  if (!block.bullets?.length) return null;

  const { title, bullets, marginTop, marginBottom } = block;

  const computedMarginTop =
    marginTop && marginValues[marginTop] ? marginValues[marginTop] : "0";

  const computedMarginBottom =
    marginBottom && marginValues[marginBottom]
      ? marginValues[marginBottom]
      : "0";

  return (
    <section
      className={styles.bulletsBlock}
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
        <div className={styles.bulletsList}>
          {bullets.map((bullet, index) => (
            <div key={index} className={styles.bullet}>
              <div className={styles.bulletTitle}>
                <CountNumber>{bullet.number}</CountNumber>
                {bullet.sign && <span>{bullet.sign}</span>}
              </div>
              <div className={styles.bulletText}>{bullet.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimationBulletsBlockComponent;
