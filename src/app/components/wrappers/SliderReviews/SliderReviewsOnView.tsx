"use client";

import dynamic from "next/dynamic";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./SliderReviews.module.scss";
import ReviewSlide from "./ReviewSlide";
import { ReviewItem } from "@/types/homepage";

// Swiper (~35 KB) loads when the visitor scrolls within ~600px of the reviews.
// Until then the server HTML carries every review, with the first one shown,
// so the text is there for crawlers and the block looks the same.
const SliderReviews = dynamic(() => import("./SliderReviews"), { ssr: false });

type Props = {
  reviews: ReviewItem[];
};

const SliderReviewsOnView: FC<Props> = ({ reviews }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setShow(true);
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!reviews || reviews.length === 0) return null;
  if (show) return <SliderReviews reviews={reviews} />;

  return (
    <div ref={ref} className={styles.sliderReviews}>
      {reviews.map((review, i) => (
        <div key={review._key} className={styles.slide} style={i > 0 ? { display: "none" } : undefined}>
          <ReviewSlide review={review} />
        </div>
      ))}
    </div>
  );
};

export default SliderReviewsOnView;
