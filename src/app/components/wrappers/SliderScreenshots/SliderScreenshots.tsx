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
  onSlideClick?: (index: number) => void;
};

const SliderScreenshots: FC<Props> = ({ screenshots, onSlideClick }) => {
  const slidesRef = useRef<HTMLDivElement[]>([]);
  // Drag detection: track pointer origin so a swipe doesn't open the lightbox.
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const didDrag = useRef(false);

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
        speed={1000}
        spaceBetween={30}
        grabCursor={true}
        resistanceRatio={0}
        edgeSwipeDetection={true}
        slidesPerView={1.3}
        breakpoints={{
          980: {
            slidesPerView: 2.3,
          },
        }}
      >
        {screenshots.map((screenshot, i) => (
          <SwiperSlide key={screenshot._key} className={styles.slide}>
            <div
              ref={(el) => {
                if (el) slidesRef.current[i] = el;
              }}
              className={`${styles.slide} ${onSlideClick ? styles.clickable : ""}`}
              onPointerDown={(e) => {
                pointerStart.current = { x: e.clientX, y: e.clientY };
                didDrag.current = false;
              }}
              onPointerMove={(e) => {
                if (!pointerStart.current) return;
                const dx = Math.abs(e.clientX - pointerStart.current.x);
                const dy = Math.abs(e.clientY - pointerStart.current.y);
                if (dx > 5 || dy > 5) didDrag.current = true;
              }}
              onClick={() => {
                if (!didDrag.current) onSlideClick?.(i);
              }}
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
