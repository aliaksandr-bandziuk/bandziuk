"use client";

import { useEffect, useId, useRef } from "react";
import type { Container, ISourceOptions } from "tsparticles-engine";
import { afterLoadIdle } from "@/lib/defer";
import styles from "./ParticlesBackground.module.scss";

// The engine (~160 KB) is imported after `load`, in an idle slot: particles
// are decoration and must not compete with the first paint.
// Loaded once per page. React 19 runs effects twice in dev (StrictMode); the
// react-tsparticles v2 wrapper then registered the plugins twice and started
// two animations under one id, and the second destroyed the first mid-frame:
// "Cannot read properties of undefined (reading 'position')".
type Engine = typeof import("tsparticles-engine").tsParticles;
let engineReady: Promise<Engine> | null = null;
const initEngine = () =>
  (engineReady ??= Promise.all([
    import("tsparticles-engine"),
    import("tsparticles-basic"),
    import("tsparticles-updater-twinkle"),
  ]).then(
    async ([{ tsParticles }, { loadBasic }, { loadTwinkleUpdater }]) => {
      // Only what OPTIONS uses (circles, opacity, size, movement, twinkle).
      // loadFull registered every plugin: a single 0.5 s task on a phone.
      await loadBasic(tsParticles);
      await loadTwinkleUpdater(tsParticles);
      return tsParticles;
    },
  ));

const OPTIONS: ISourceOptions = {
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
};

const ParticlesBackground = () => {
  // генерирует стабильный id, одинаковый на сервере и клиенте
  const particlesId = `tsparticles-${useId()}`;
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let container: Container | undefined;

    const cancelIdle = afterLoadIdle(async () => {
      const tsParticles = await initEngine();
      if (cancelled || !rootRef.current) return;
      container = await tsParticles.load({ id: particlesId, element: rootRef.current, options: OPTIONS });
      // Unmounted while loading: stop the animation that just started.
      if (cancelled) container?.destroy();
    });

    return () => {
      cancelled = true;
      cancelIdle();
      container?.destroy();
    };
  }, [particlesId]);

  return (
    <div id={particlesId} ref={rootRef} className={styles.particles}>
      <canvas style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default ParticlesBackground;
