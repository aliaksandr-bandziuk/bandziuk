import React, { FC } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Bitter } from "next/font/google";
import { ReviewsFullBlock } from "@/types/blog";
import { urlFor } from "@/sanity/sanity.client";
import { RichText } from "../../shared/RichText/RichText";
import styles from "./ReviewsFullBlockComponent.module.scss";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: ReviewsFullBlock;
};

const ReviewsFullBlockComponent: FC<Props> = ({ block }) => {
  const { title, reviews } = block;

  if (!reviews?.length) return null;

  return (
    <section className={styles.reviewsFullBlock}>
      <div className="container">
        {title && (
          <h2 className={`${styles.title} ${bitter.className}`}>{title}</h2>
        )}
        <ul className={styles.reviews}>
          {reviews.map((review) => (
            <li key={review._key} className={styles.review}>
              {review.text && (
                <div className={styles.reviewText}>
                  <PortableText value={review.text} components={RichText} />
                </div>
              )}
              <div className={styles.author}>
                {review.image && (
                  <div className={styles.authorAvatar}>
                    <Image
                      src={urlFor(review.image).url()}
                      alt={review.image.alt ?? review.name}
                      width={64}
                      height={64}
                      unoptimized
                      className={styles.authorImage}
                    />
                  </div>
                )}
                <p className={styles.authorName}>{review.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReviewsFullBlockComponent;
