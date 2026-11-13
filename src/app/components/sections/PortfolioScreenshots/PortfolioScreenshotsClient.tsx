"use client";
import React, { FC, useState } from "react";
import { Screenshot } from "@/types/portfolio";
import SliderScreenshots from "../../wrappers/SliderScreenshots/SliderScreenshots";
import ScreenshotLightbox from "./ScreenshotLightbox";

type Props = {
  screenshots: Screenshot[];
  // "log" — слайдер кадров сессии внутри статьи: один кадр на экран и
  // картинка во всю ширину слайда, иначе лог нечитаем.
  variant?: "portfolio" | "log";
};

const PortfolioScreenshotsClient: FC<Props> = ({
  screenshots,
  variant = "portfolio",
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <SliderScreenshots
        screenshots={screenshots}
        onSlideClick={setLightboxIndex}
        variant={variant}
      />
      <ScreenshotLightbox
        screenshots={screenshots}
        initialSlide={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
      />
    </>
  );
};

export default PortfolioScreenshotsClient;
