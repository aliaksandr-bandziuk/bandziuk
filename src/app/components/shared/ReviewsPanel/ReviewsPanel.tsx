import React, { FC } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import SliderReviews from "../../wrappers/SliderReviews/SliderReviews";
import { ReviewItem } from "@/types/homepage";
import styles from "./ReviewsPanel.module.scss";

type Props = {
  pretitle?: string;
  title: string;
  subtitle?: string;
  reviews: ReviewItem[];
};

// The homepage reviews section's full presentation (eyebrow/title/subtitle
// heading + the elevated panel with the orange asterisk and slider) —
// shared so the reviewsFullBlock singlepage block renders identically to
// the homepage instead of reimplementing the same look.
const ReviewsPanel: FC<Props> = ({ pretitle, title, subtitle, reviews }) => {
  if (!reviews?.length) return null;

  return (
    <>
      <div className={styles.text}>
        <SectionHeading eyebrow={pretitle} title={title} subtitle={subtitle} />
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
              fill="rgba(255, 138, 60, 0.8)"
            />
          </svg>
        </div>
        <div className={styles.sliderBlock}>
          <Image
            src="https://cdn.sanity.io/files/x6jc462y/production/b239dcb40978658f72556afa82a177e56a95c313.png"
            alt={title}
            width={134}
            height={114}
            unoptimized
            className={styles.imageQuote}
          />
          <SliderReviews reviews={reviews} />
        </div>
      </div>
    </>
  );
};

export default ReviewsPanel;
