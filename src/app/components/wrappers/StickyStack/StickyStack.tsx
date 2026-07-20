"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { useIsMounted } from "@/hooks/useIsMounted";

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
  const isMounted = useIsMounted();
  const arr = React.Children.toArray(children);
  // Before hydration, fall through to the same "no animation" branch this
  // component already supports (animate=false) — no opacity/transform is
  // baked into the server-rendered HTML. The reveal is progressive
  // enhancement layered on top once the client has mounted.
  const shouldAnimate = animate && isMounted;

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
                willChange: "transform",
              }}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
              whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              viewport={shouldAnimate ? { once: true, amount: 0.5 } : undefined}
              transition={
                shouldAnimate ? { duration: 0.4, delay: i * 0.1 } : undefined
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
