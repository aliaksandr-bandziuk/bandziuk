import React, { FC } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import styles from "./ImageFullBlockComponent.module.scss";
import { ImageFullBlock } from "@/types/blog";
import { imageDimensions } from "@/utils/sanityImageDimensions";

type Props = {
  block: ImageFullBlock;
};

const ImageFullBlockComponent: FC<Props> = ({ block }) => {
  const {
    title,
    imageMain,
    // hasDescription,
    // description
  } = block;
  const { picture, aspectRatio } = imageMain;

  const dimensions = imageDimensions(picture);

  // No aspect ratio means an inline figure: render at the image's own size so
  // nothing is cropped. `fill` plus a forced ratio is object-fit: cover, which
  // silently cut the edges off charts.
  if (!aspectRatio && dimensions) {
    return (
      <section className={styles.imageFullBlock}>
        <div className={`container ${styles.figure}`}>
          <Image
            src={urlFor(picture).url()}
            alt={picture.alt ?? title}
            width={dimensions.width}
            height={dimensions.height}
            sizes="(max-width: 900px) 100vw, 900px"
            className={styles.figureImage}
          />
        </div>
      </section>
    );
  }

  // Выбираем HTML-тег для описания (h1 | h2 | h3 | p)
  // const Tag = description?.tag ?? "p";
  // Применяем стили в зависимости от тега
  // const tagStyle =
  //   Tag === "h1"
  //     ? styles.h1
  //     : Tag === "h2"
  //       ? styles.h2
  //       : Tag === "h3"
  //         ? styles.h3
  //         : styles.paragraph;

  return (
    <section className={styles.imageFullBlock}>
      {/* Основное изображение */}
      <div
        className={[
          styles.imageWrapper,
          aspectRatio ? styles[`ratio_${aspectRatio.replace(":", "_")}`] : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Image
          src={urlFor(picture).url()}
          alt={picture.alt ?? title}
          fill
          className={styles.image}
        />
      </div>

      {/* Описание, если включено */}
      {/* {hasDescription && description && (
        <div className={styles.contentParent}>
          <div className={`container ${styles.contentInner}`}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
              <Tag className={`${styles.description} ${tagStyle}`}>
                {description.textItems.map((item, idx) =>
                  item.highlighted ? (
                    <span key={idx} className={styles.highlight}>
                      {item.text}
                    </span>
                  ) : (
                    <React.Fragment key={idx}>{item.text}</React.Fragment>
                  )
                )}
              </Tag>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default ImageFullBlockComponent;
