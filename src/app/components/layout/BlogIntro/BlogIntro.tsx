import React, { FC } from "react";
import styles from "./BlogIntro.module.scss";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { ImageAlt } from "@/types/common";
import { Author } from "@/types/blog";

type Props = {
  title: string;
  excerpt?: string;
  categoryTitle?: string;
  date?: string;
  previewImage?: ImageAlt;
  author?: Author;
};

const BlogIntro: FC<Props> = ({
  title,
  excerpt,
  categoryTitle,
  date,
  previewImage,
  author,
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
            </div>
            <h1 className={styles.blogHeading}>{title}</h1>
            {(author?.name || date) && (
              <div className={styles.byline}>
                {author?.photo && (
                  <Image
                    src={urlFor(author.photo).url()}
                    alt={author.photo.alt ?? author.name}
                    width={36}
                    height={36}
                    unoptimized
                    className={styles.bylineAvatar}
                  />
                )}
                {author?.name && (
                  <span className={styles.bylineName}>{author.name}</span>
                )}
                {author?.role && (
                  <span className={styles.bylineRole}>{author.role}</span>
                )}
                {date && (
                  <>
                    {author?.name && (
                      <span className={styles.bylineDot} aria-hidden="true">
                        &bull;
                      </span>
                    )}
                    <span className={styles.bylineDate}>{formatDate(date)}</span>
                  </>
                )}
              </div>
            )}
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
