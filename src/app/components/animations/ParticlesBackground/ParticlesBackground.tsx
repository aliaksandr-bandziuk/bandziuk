"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useId, useState } from "react";
import type { Engine } from "tsparticles-engine";
import styles from "./ParticlesBackground.module.scss";

const ParticlesBackground = () => {
  // генерирует стабильный id, одинаковый на сервере и клиенте
  const reactId = useId();
  const particlesId = `tsparticles-${reactId}`;
  const [mounted, setMounted] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!mounted) return null;

  return (
    <Particles
      id={particlesId}
      init={particlesInit}
      className={styles.particles}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: {
            value: "#ffffff", // 🎨 разные оттенки белого
          },
          shape: { type: "circle" },
          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.2,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            animation: {
              enable: false,
            },
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            trail: {
              enable: false,
            },
          },
          zIndex: {
            value: { min: 0, max: 100 }, // 📏 создаёт глубину
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.8,
              color: "#ffffff",
            },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
