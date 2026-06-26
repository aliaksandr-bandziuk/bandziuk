"use client";
import React, { FC, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Screenshot } from "@/types/portfolio";
import { RichText } from "../../shared/RichText/RichText";
import styles from "./ScreenshotLightbox.module.scss";

type Props = {
  screenshots: Screenshot[];
  initialSlide: number;
  isOpen: boolean;
  onClose: () => void;
};

const ScreenshotLightbox: FC<Props> = ({
  screenshots,
  initialSlide,
  isOpen,
  onClose,
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<Element | null>(null);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Focus management — separate effect so it runs after DOM is committed
  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
    } else if (previousFocusRef.current) {
      (previousFocusRef.current as HTMLElement).focus?.();
    }
  }, [isOpen]);

  // Esc key
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot lightbox"
    >
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeBtnRef}
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ✕
        </button>

        <div className={styles.swiperWrapper}>
          {/* Explicit refs passed via onBeforeInit — fixes nav not appearing
              inside conditionally-rendered portals where Swiper can init
              before its auto-created elements are in layout. */}
          <button ref={prevRef} className={styles.navPrev} aria-label="Previous image">
            &#8249;
          </button>
          <button ref={nextRef} className={styles.navNext} aria-label="Next image">
            &#8250;
          </button>

          <Swiper
            modules={[Navigation, Keyboard]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              // Bind refs before init so Navigation finds them on first mount
              // @ts-ignore — navigation is typed as boolean | NavigationOptions
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            keyboard={{ enabled: true, onlyInViewport: false }}
            slidesPerView={1}
            initialSlide={initialSlide}
            spaceBetween={0}
            className={styles.swiper}
          >
            {screenshots.map((screenshot) => (
              <SwiperSlide key={screenshot._key} className={styles.slide}>
                <div className={styles.slideInner}>
                  {screenshot.image && (
                    <div className={styles.imageWrap}>
                      <Image
                        src={urlFor(screenshot.image).url()}
                        alt={screenshot.image.alt ?? screenshot.title ?? ""}
                        width={
                          screenshot.image.asset.metadata.dimensions.width
                        }
                        height={
                          screenshot.image.asset.metadata.dimensions.height
                        }
                        className={styles.image}
                        priority
                      />
                    </div>
                  )}
                  {(screenshot.title || screenshot.caption) && (
                    <div className={styles.caption}>
                      {screenshot.title && (
                        <p className={styles.captionTitle}>
                          {screenshot.title}
                        </p>
                      )}
                      {screenshot.caption && (
                        <PortableText
                          value={screenshot.caption}
                          components={RichText}
                        />
                      )}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ScreenshotLightbox;
