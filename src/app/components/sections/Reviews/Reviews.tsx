import React, { FC } from "react";
import styles from "./Reviews.module.scss";
import { Bitter } from "next/font/google";
import { ReviewsSection } from "@/types/homepage";
import SliderReviews from "../../wrappers/SliderReviews/SliderReviews";
import Image from "next/image";
import dynamic from "next/dynamic";

type Props = {
  reviews: ReviewsSection;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const ParticlesBackground = dynamic(
  () => import("../../animations/ParticlesBackground/ParticlesBackground"),
  {
    ssr: false,
  }
);

const Reviews: FC<Props> = ({ reviews }) => {
  const { pretitle, title, subtitle } = reviews;

  if (!reviews || reviews.reviews.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={styles.particlesWrapper}>
        <ParticlesBackground />
      </div>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.pretitle}>{pretitle}</div>
            <h2 className={styles.title}>{title}</h2>
            <p className={`${styles.subtitle} ${bitter.className}`}>
              {subtitle}
            </p>
          </div>
        </div>
        <div className={styles.reviewsWrapper}>
          <div className={styles.decoration}>
            <svg
              className={styles.svgDecorationIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M125 0H75V39.644L46.9672 11.6113L11.6118 46.9668L39.645 75H0V125H39.6444L11.6117 153.033L46.967 188.388L75 160.355V200H125V160.355L153.033 188.388L188.389 153.033L160.356 125H200V75H160.355L188.388 46.9668L153.033 11.6113L125 39.6445V0Z"
                fill="rgba(255, 162, 96, 0.8)"
              />
            </svg>
          </div>
          <div className={styles.sliderBlock}>
            <Image
              src="https://cdn.sanity.io/files/x6jc462y/production/b239dcb40978658f72556afa82a177e56a95c313.png"
              alt={title}
              width={134}
              height={114}
              className={styles.imageQuote}
            />
            <SliderReviews reviews={reviews.reviews} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
