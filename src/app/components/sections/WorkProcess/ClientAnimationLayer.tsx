// ClientAnimationLayer.tsx
"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import styles from "./WorkProcess.module.scss";
import { FillSegment } from "./FillSegment";
import { AnimatedMarker } from "./AnimatedMarker";

type Props = {
  stepsCount: number;
  children: React.ReactNode;
};

const ClientAnimationLayer: React.FC<Props> = ({ stepsCount, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "1 0.5"],
  });

  const thresholds = Array.from(
    { length: stepsCount },
    (_, i) => i / (stepsCount - 1)
  );

  return (
    <div className={styles.timeline} ref={ref}>
      <div className={styles.line} />

      {/* Заливка сегментов */}
      {thresholds.slice(0, -1).map((from, i) => (
        <FillSegment
          key={i}
          scrollY={scrollYProgress}
          from={from}
          to={thresholds[i + 1]}
        />
      ))}

      {/* Маркеры */}
      {React.Children.map(children, (wrapper) => {
        // 1) Гардимся и кастим обёртку
        if (!React.isValidElement<{ children?: React.ReactNode }>(wrapper))
          return wrapper;
        const wrapperEl = wrapper as React.ReactElement<{
          children?: React.ReactNode;
        }>;

        // 2) Идём по шагам внутри обёртки
        const steps = React.Children.map(
          wrapperEl.props.children,
          (stepEl, i) => {
            // Гардимся и кастим сам шаг
            if (!React.isValidElement(stepEl)) return stepEl;
            const stepElement = stepEl as React.ReactElement<any>;

            // Генерим новые “inner children”
            const newChildren = React.Children.map(
              stepElement.props.children,
              (inner) => {
                if (!React.isValidElement(inner)) return inner;
                const el = inner as React.ReactElement<any>;
                const className = el.props.className as string | undefined;

                // Если это маркер — заменяем на AnimatedMarker
                if (className?.includes("marker")) {
                  const prev = i === 0 ? 0 : thresholds[i - 1];
                  const curr = thresholds[i];
                  return (
                    <AnimatedMarker
                      key={i}
                      scrollY={scrollYProgress}
                      prev={prev}
                      curr={curr}
                      className={className}
                    />
                  );
                }

                return inner;
              }
            );

            // Клонируем шаг с новыми детьми
            return React.cloneElement(stepElement, {
              children: newChildren,
            });
          }
        );

        // Клонируем обёртку с анимированными шагами
        return React.cloneElement(wrapperEl, { children: steps });
      })}
    </div>
  );
};

export default ClientAnimationLayer;
