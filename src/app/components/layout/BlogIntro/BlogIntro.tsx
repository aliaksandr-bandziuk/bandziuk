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

  const metaParts: React.ReactNode[] = [];
  if (author?.role) metaParts.push(author.role);
  if (categoryTitle) metaParts.push(categoryTitle);
  if (date) metaParts.push(formatDate(date));

  return (
    <section className={styles.blogIntro}>
      <div className="container">
        <div className={styles.blogIntroWrapper}>
          <div className={styles.blogIntroContent}>
            <h1 className={styles.blogHeading}>{title}</h1>
            {(author?.name || metaParts.length > 0) && (
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
                {metaParts.map((part, index) => (
                  <React.Fragment key={index}>
                    {(author?.name || index > 0) && (
                      <span className={styles.bylineDot} aria-hidden="true">
                        &bull;
                      </span>
                    )}
                    <span
                      className={
                        // category reads as a quiet mono label; role/date stay plain
                        categoryTitle && part === categoryTitle
                          ? styles.bylineCategory
                          : styles.bylineMeta
                      }
                    >
                      {part}
                    </span>
                  </React.Fragment>
                ))}
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
