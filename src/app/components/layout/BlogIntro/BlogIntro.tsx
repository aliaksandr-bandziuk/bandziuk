import React, { FC } from "react";
import styles from "./BlogIntro.module.scss";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { ImageAlt } from "@/types/common";

type Props = {
  title: string;
  excerpt?: string;
  categoryTitle?: string;
  date?: string;
  previewImage?: ImageAlt;
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
              {categoryTitle && (
                <div className={styles.category}>{categoryTitle}</div>
              )}
              {date && <div className={styles.date}>{formatDate(date)}</div>}
            </div>
            <h1 className={styles.blogHeading}>{title}</h1>
            <p className={styles.excerpt}>{excerpt}</p>
          </div>
          {previewImage && (
            <div className={styles.blogIntroImage}>
              <Image src={urlFor(previewImage).url()} alt={title} fill={true} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
