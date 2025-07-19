"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface StickyStackProps {
  children: React.ReactNode[];
  offset?: number; // отступ при прилипании
  spacing?: number; // шаг между стопками
  animate?: boolean;
}

const StickyStack: FC<StickyStackProps> = ({
  children,
  offset = 120,
  spacing = 50,
  animate = true,
}) => {
  const arr = React.Children.toArray(children);

  return (
    <div style={{ position: "relative" }}>
      {arr.map((child, i) => {
        const top = offset + spacing * i;
        const zIndex = arr.length + i;

        return (
          <React.Fragment key={(child as any).key ?? i}>
            {/* Карточка с sticky */}
            <motion.div
              style={{
                position: "sticky",
                top,
                zIndex,
              }}
              initial={animate ? { opacity: 0, y: 20 } : undefined}
              whileInView={animate ? { opacity: 1, y: 0 } : undefined}
              viewport={animate ? { once: true, amount: 0.5 } : undefined}
              transition={
                animate ? { duration: 0.4, delay: i * 0.1 } : undefined
              }
            >
              {child}
            </motion.div>

            {/* Spacer — невидимый отступ между карточками */}
            <div style={{ height: spacing }} aria-hidden="true" />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StickyStack;
