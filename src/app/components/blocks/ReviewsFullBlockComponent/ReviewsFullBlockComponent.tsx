import React, { FC } from "react";
import { ReviewsFullBlock } from "@/types/blog";
import { ReviewItem } from "@/types/homepage";
import ReviewsPanel from "../../shared/ReviewsPanel/ReviewsPanel";
import styles from "./ReviewsFullBlockComponent.module.scss";

type Props = {
  block: ReviewsFullBlock;
};

const ReviewsFullBlockComponent: FC<Props> = ({ block }) => {
  const { title, pretitle, subtitle, reviews } = block;

  if (!reviews?.length) return null;

  // Same panel the homepage reviews section uses — map this block's own
  // field names (text) onto ReviewItem's shape (reviewText) rather than
  // reimplementing the presentation here.
  const sliderReviews: ReviewItem[] = reviews.map((review) => ({
    _key: review._key,
    _type: "review",
    image: review.image,
    reviewText: review.text,
    name: review.name,
    position: review.position ?? "",
    country: review.country ?? "",
  }));

  return (
    <section className={styles.reviewsFullBlock}>
      <div className="container">
        <ReviewsPanel
          pretitle={pretitle}
          title={title}
          subtitle={subtitle}
          reviews={sliderReviews}
        />
      </div>
    </section>
  );
};

export default ReviewsFullBlockComponent;
