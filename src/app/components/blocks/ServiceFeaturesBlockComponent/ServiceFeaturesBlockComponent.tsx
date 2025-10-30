import React, { FC } from "react";
import styles from "./ServiceFeaturesBlockComponent.module.scss";
import { ServiceFeatureItem, ServiceFeaturesBlock } from "@/types/blog";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";

type Props = {
  block: ServiceFeaturesBlock;
};

const ServiceFeaturesBlockComponent: FC<Props> = ({ block }) => {
  const count = Math.max(3, Math.min(block.features?.length || 0, 5));
  const colsClass =
    count === 3 ? styles.cols3 : count === 4 ? styles.cols4 : styles.cols5;

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {block.title && <h2 className={styles.title}>{block.title}</h2>}

        <div className={`${styles.grid} ${colsClass}`}>
          {block.features?.map((f: ServiceFeatureItem) => {
            const img = f?.feature?.image;

            // 👇 Временный лог (виден в консоли сервера/браузера)
            console.log(
              "[ServiceFeature]",
              f.feature?.title,
              "assetRef:",
              img?.asset?._ref,
              "url:",
              img ? urlFor(img).url() : "NO_IMAGE"
            );

            return (
              <article key={f._key} className={styles.card}>
                <div className={styles.iconWrap}>
                  {img?.asset && (
                    <Image
                      src={urlFor(img).width(80).height(80).url()}
                      alt={img.alt || f.feature.title || "Feature"}
                      width={80}
                      height={80}
                    />
                  )}
                </div>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                {f.description && (
                  <p className={styles.desc}>{f.description}</p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturesBlockComponent;
