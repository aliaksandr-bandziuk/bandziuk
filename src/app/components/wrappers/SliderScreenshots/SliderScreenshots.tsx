"use client";
import React, { FC, useEffect, useRef } from "react";
import styles from "./SliderScreenshots.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PortableText } from "@portabletext/react";
import { RichText } from "../../shared/RichText/RichText";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Screenshot } from "@/types/portfolio";
import ScreenshotSlide from "../../ui/ScreenshotSlide/ScreenshotSlide";

type Props = {
  screenshots: Screenshot[];
};

const SliderScreenshots: FC<Props> = ({ screenshots }) => {
  const slidesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!slidesRef.current.length) return;

    // Обнуляем высоты перед перерасчётом
    slidesRef.current.forEach((slide) => {
      if (slide) slide.style.height = "auto";
    });

    const maxHeight = Math.max(
      ...slidesRef.current.map((slide) => slide?.offsetHeight || 0)
    );

    slidesRef.current.forEach((slide) => {
      if (slide) slide.style.height = `${maxHeight}px`;
    });
  }, [screenshots]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className={styles.sliderScreenshots}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        speed={2000}
        spaceBetween={20}
        grabCursor={true}
        slidesPerView={1.3}
        breakpoints={{
          980: {
            slidesPerView: 2.3,
          },
        }}
        loop={true}
      >
        {screenshots.map((screenshot, i) => (
          <SwiperSlide key={screenshot._key} className={styles.slide}>
            <div
              ref={(el) => {
                if (el) slidesRef.current[i] = el;
              }}
              className={styles.slide}
            >
              <ScreenshotSlide screenshot={screenshot} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderScreenshots;
