"use client";
import React, { FC, useState } from "react";
import { Screenshot } from "@/types/portfolio";
import SliderScreenshots from "../../wrappers/SliderScreenshots/SliderScreenshots";
import ScreenshotLightbox from "./ScreenshotLightbox";

type Props = {
  screenshots: Screenshot[];
};

const PortfolioScreenshotsClient: FC<Props> = ({ screenshots }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <SliderScreenshots
        screenshots={screenshots}
        onSlideClick={setLightboxIndex}
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
