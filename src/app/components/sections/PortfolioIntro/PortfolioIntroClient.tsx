"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioIntroClient = () => {
  useEffect(() => {
    const imageEl = document.querySelector<HTMLElement>("[data-animate-image]");
    if (!imageEl) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop only
        "(min-width: 1024px)": () => {
          const tl = gsap.fromTo(
            imageEl,
            { scale: 1 },
            {
              scale: 1.3,
              scrollTrigger: {
                trigger: imageEl,
                start: "top center",
                end: "bottom top",
                scrub: true,
              },
              transformOrigin: "center center",
              ease: "none",
            }
          );

          return () => tl.kill(); // Clean up this timeline
        },
        // Mobile: do nothing
        "(max-width: 1023px)": () => {
          // no scroll trigger
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default PortfolioIntroClient;
