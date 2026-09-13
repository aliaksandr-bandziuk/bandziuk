import React, { FC } from "react";
import styles from "./BlogIntro.module.scss";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { ImageAlt } from "@/types/common";
import { Author } from "@/types/blog";
import { clampedAspectRatio } from "@/utils/sanityImageDimensions";

// The frame follows the cover's own proportions instead of forcing one crop on
// every article: most covers are 16:9 and were losing their top and bottom edge
// to a hardcoded 21:9. The bounds keep an unusually tall or wide upload from
// distorting the page — 16:9 is as tall as a hero may get, 21:9 as wide.
const MIN_COVER_RATIO = 16 / 9;
const MAX_COVER_RATIO = 21 / 9;

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
            <div
              className={styles.blogIntroImage}
              style={{
                aspectRatio:
                  clampedAspectRatio(
                    previewImage,
                    MIN_COVER_RATIO,
                    MAX_COVER_RATIO
                  ) ?? undefined,
              }}
            >
              <Image
                src={urlFor(previewImage).url()}
                alt={previewImage.alt ?? title}
                fill={true}
                sizes="(max-width: 1024px) 100vw, 1200px"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogIntro;
