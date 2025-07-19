"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import styles from "./WorkProcess.module.scss";

type FillSegmentProps = {
  scrollY: MotionValue<number>;
  from: number;
  to: number;
};

export const FillSegment: React.FC<FillSegmentProps> = ({
  scrollY,
  from,
  to,
}) => {
  // Хук вызывается здесь, на самом верху компонента
  const scaleY = useTransform(scrollY, [from, to], [0, 1], { clamp: true });

  return (
    <motion.div
      className={styles.fillSegment}
      style={{
        top: `${from * 100}%`,
        height: `${(to - from) * 100}%`,
        scaleY,
      }}
    />
  );
};
