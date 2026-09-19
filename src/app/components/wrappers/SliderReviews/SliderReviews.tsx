"use client";
import React, { FC, useEffect, useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import styles from "./SliderReviews.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ReviewItem } from "@/types/homepage";
import ReviewSlide from "./ReviewSlide";

type Props = {
  reviews: ReviewItem[];
};

const SliderReviews: FC<Props> = ({ reviews }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperInstance | null>(null);

  // Autoplay runs only while the slider is on screen. Swiper's autoplay keeps a
  // requestAnimationFrame loop going the whole time, which PageSpeed counted as
  // seconds of main-thread work on a slider far below the first screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      const autoplay = swiperRef.current?.autoplay;
      if (!autoplay) return;
      if (entries[0]?.isIntersecting) autoplay.start();
      else autoplay.stop();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className={styles.sliderReviews} ref={rootRef}>
      <Swiper
        modules={[Pagination, Autoplay, Parallax]}
        pagination={{ clickable: true }}
        parallax={true}
        speed={2000}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay?.stop(); // started by the observer when visible
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._key} className={styles.slide}>
            <ReviewSlide review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderReviews;
