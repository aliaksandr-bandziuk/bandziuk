import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import styles from "./SliderReviews.module.scss";
import { RichText } from "../../shared/RichText/RichText";
import { ReviewItem } from "@/types/homepage";
import { urlFor } from "@/sanity/imageUrl";

// Same picture as the old files/ URL, uploaded as an image asset so Sanity's
// image CDN can resize it (18 KB PNG → 3 KB WebP).
const avatarUrl =
  "https://cdn.sanity.io/images/x6jc462y/production/d355838057446111a204245c97aed7a0cec7acba-300x300.png";

/** One review. Shared by the Swiper slider and its static stand-in. */
const ReviewSlide = ({ review }: { review: ReviewItem }) => {
  return (
    <div className={styles.reviewBlock}>
      <div
        className={styles.textReview}
        data-swiper-parallax="-500"
        data-swiper-parallax-duration="600"
      >
        <PortableText value={review.reviewText} components={RichText} />
      </div>
      <div
        className={styles.author}
        data-swiper-parallax="-650"
        data-swiper-parallax-duration="1000"
      >
        <div className={styles.authorAvatar}>
          {review.image ? (
            <Image
              src={urlFor(review.image).url()}
              alt={review.image.alt ?? review.name}
              width={100}
              height={100}
              className={styles.authorImage}
            />
          ) : (
            <Image
              src={avatarUrl}
              alt={review.name}
              width={100}
              height={100}
              className={styles.authorImage}
            />
          )}
        </div>
        <div className={styles.authorText}>
          <p className={styles.authorName}>
            <span>{review.name}</span> | <span>{review.position}</span>
          </p>
          <p className={styles.authorCountry}>{review.country}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlide;
