import React, { FC } from "react";
import styles from "./BlogIntro.module.scss";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { ImageAlt } from "@/types/project";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

type Props = {
  title: string;
  excerpt?: string;
  categoryTitle: string;
  date: string;
  previewImage: ImageAlt;
};

const BlogIntro: FC<Props> = ({
  title,
  excerpt,
  categoryTitle,
  date,
  previewImage,
}) => {
  const formatDate = (dateString: string) => {
    const parsedDate = new Date(dateString);
    return parsedDate.toLocaleDateString("en-GB").replace(/\//g, ".");
  };

  return (
    <section className={styles.blogIntro}>
      <div className="container">
        <div className={styles.blogIntroWrapper}>
          <div className={styles.blogIntroContent}>
            <div className={styles.data}>
              <div className={`${styles.category} ${bitter.className}`}>
                {categoryTitle}
              </div>
              <div className={styles.date}>{formatDate(date)}</div>
            </div>
            <h1 className={`${styles.blogHeading} ${bitter.className}`}>
              {title}
            </h1>
            <p className={styles.excerpt}>{excerpt}</p>
          </div>
          <div className={styles.blogIntroImage}>
            {previewImage && (
              <Image src={urlFor(previewImage).url()} alt={title} fill={true} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
