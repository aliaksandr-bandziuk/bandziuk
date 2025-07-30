"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PortfolioIntro.module.scss";
import ParticlesBackground from "../../animations/ParticlesBackground/ParticlesBackground";

gsap.registerPlugin(ScrollTrigger);

const ClientAnimationLayer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = document.querySelector(
      `.${styles.portfolioIntro}`
    ) as HTMLElement;
    const image = section?.querySelector(`.${styles.image}`) as HTMLElement;

    if (!section || !image) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          return gsap
            .timeline({
              scrollTrigger: {
                trigger: section,
                start: "top top+=5rem",
                end: "+=500",
                scrub: true,
                pin: section,
                pinSpacing: true,
              },
            })
            .set(image, { zIndex: 3 }, 0)
            .to(image, { scale: 1.2, ease: "none", duration: 0.6 }, 0)
            .to(image, { y: "-20%", ease: "none", duration: 0.4 }, 0.6);
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.particlesWrapper}>
      <ParticlesBackground />
    </div>
  );
};

export default ClientAnimationLayer;
