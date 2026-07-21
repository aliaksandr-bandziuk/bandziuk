import React, { FC } from "react";
import styles from "./Reviews.module.scss";
import { ReviewsSection } from "@/types/homepage";
import dynamic from "next/dynamic";
import ReviewsPanel from "../../shared/ReviewsPanel/ReviewsPanel";

type Props = {
  reviews: ReviewsSection;
};

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
        <ReviewsPanel
          pretitle={pretitle}
          title={title}
          subtitle={subtitle}
          reviews={reviews.reviews}
        />
      </div>
    </section>
  );
};

export default Reviews;
