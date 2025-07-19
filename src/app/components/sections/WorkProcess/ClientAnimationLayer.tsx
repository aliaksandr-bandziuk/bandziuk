"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./WorkProcess.module.scss";
import type { ReactElement, ReactNode } from "react";

type Props = {
  stepsCount: number;
  children: ReactNode;
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
  const segments = thresholds.slice(0, -1);

  return (
    <div className={styles.timeline} ref={ref}>
      <div className={styles.line} />

      {segments.map((t, i) => {
        const next = thresholds[i + 1];
        const segmentFill = useTransform(scrollYProgress, [t, next], [0, 1], {
          clamp: true,
        });

        return (
          <motion.div
            key={i}
            className={styles.fillSegment}
            style={{
              top: `${t * 100}%`,
              height: `${(next - t) * 100}%`,
              scaleY: segmentFill,
            }}
          />
        );
      })}

      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const stepsWrapper = child.props.children;

        const steps = React.Children.map(stepsWrapper, (stepEl, i) => {
          if (!React.isValidElement(stepEl)) return stepEl;

          const step = stepEl as ReactElement;

          const prev = i === 0 ? 0 : thresholds[i - 1];
          const curr = i === 0 ? 1 / (stepsCount - 1) : thresholds[i];

          const markerOn = useTransform(scrollYProgress, [prev, curr], [0, 1]);
          const markerColor = useTransform(
            markerOn,
            [0, 1],
            ["#fff", "rgb(255, 162, 96)"]
          );
          const markerShadow = useTransform(
            markerOn,
            [0.7, 1],
            ["none", "0 0 8px rgba(255,162,96,0.8)"]
          );

          const innerChildren = React.Children.map(
            step.props.children,
            (inner) => {
              if (React.isValidElement(inner)) {
                const el = inner as ReactElement;
                const className = el.props?.className;

                if (
                  typeof className === "string" &&
                  className.includes("marker")
                ) {
                  return (
                    <motion.div
                      className={className}
                      style={{
                        backgroundColor: markerColor,
                        boxShadow: markerShadow,
                      }}
                    />
                  );
                }

                return inner;
              }

              return inner;
            }
          );

          return React.cloneElement(step, {
            children: innerChildren,
          });
        });

        return React.cloneElement(child as ReactElement, {
          children: steps,
        });
      })}
    </div>
  );
};

export default ClientAnimationLayer;
