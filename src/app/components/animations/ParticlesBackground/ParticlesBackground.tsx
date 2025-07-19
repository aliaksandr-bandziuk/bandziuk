"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useId } from "react";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  // генерирует стабильный id, одинаковый на сервере и клиенте
  const reactId = useId();
  const particlesId = `tsparticles-${reactId}`;

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id={particlesId}
      init={particlesInit}
      className="absolute inset-0 z-0"
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
