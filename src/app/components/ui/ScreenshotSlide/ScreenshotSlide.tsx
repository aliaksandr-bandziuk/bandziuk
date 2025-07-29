import React, { FC } from "react";
import styles from "./ScreenshotSlide.module.scss";
import { Screenshot } from "@/types/portfolio";
import { RichText } from "../../shared/RichText/RichText";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  screenshot: Screenshot;
};

const ScreenshotSlide: FC<Props> = ({ screenshot }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.slideWrapper}>
        <div className={styles.slideText}>
          {screenshot.title && (
            <h3 className={`${bitter.className} ${styles.slideTitle}`}>
              {screenshot.title}
            </h3>
          )}
          <PortableText value={screenshot.caption} components={RichText} />
        </div>
        <div className={styles.slideImage}>
          {screenshot.image && (
            <Image
              src={urlFor(screenshot.image).url()}
              alt={screenshot.image.alt ?? screenshot.caption}
              width={screenshot.image.asset.metadata.dimensions.width}
              height={screenshot.image.asset.metadata.dimensions.height}
              className={styles.img}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotSlide;
