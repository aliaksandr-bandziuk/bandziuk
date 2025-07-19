"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

type AnimatedMarkerProps = {
  scrollY: MotionValue<number>;
  prev: number;
  curr: number;
  className?: string;
};

export const AnimatedMarker: React.FC<AnimatedMarkerProps> = ({
  scrollY,
  prev,
  curr,
  className,
}) => {
  const progress = useTransform(scrollY, [prev, curr], [0, 1]);
  const bgColor = useTransform(progress, [0, 1], ["#fff", "rgb(255,162,96)"]);
  const boxShadowVal = useTransform(
    progress,
    [0.7, 1],
    ["none", "0 0 8px rgba(255,162,96,0.8)"]
  );

  return (
    <motion.div
      className={className}
      style={{
        backgroundColor: bgColor,
        boxShadow: boxShadowVal,
      }}
    />
  );
};
