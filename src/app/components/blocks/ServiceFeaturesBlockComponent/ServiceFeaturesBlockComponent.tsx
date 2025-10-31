import React, { FC } from "react";
import styles from "./ServiceFeaturesBlockComponent.module.scss";
import { ServiceFeatureItem, ServiceFeaturesBlock } from "@/types/blog";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: ServiceFeaturesBlock;
};

const ServiceFeaturesBlockComponent: FC<Props> = ({ block }) => {
  const count = Math.max(3, Math.min(block.features?.length || 0, 5));
  const colsClass =
    count === 3 ? styles.cols3 : count === 4 ? styles.cols4 : styles.cols5;

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.text}>
          {block.title && (
            <h2 className={`${styles.subtitle} ${bitter.className}`}>
              {block.title}
            </h2>
          )}
        </div>

        <div className={`${styles.grid} ${colsClass}`}>
          {block.features?.map((f: ServiceFeatureItem) => {
            const img = f?.feature?.image;

            return (
              <div key={f._key} className={styles.card}>
                <div className={styles.iconWrap}>
                  {img?.asset && (
                    <Image
                      src={urlFor(img).url()}
                      alt={f.title}
                      fill
                      style={{ objectFit: "cover" }}
                      unoptimized
                    />
                  )}
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{f.title}</h3>
                  {f.description && (
                    <p className={styles.desc}>{f.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturesBlockComponent;
