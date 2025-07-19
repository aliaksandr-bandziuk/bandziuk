"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  index?: number; // для stagger-эффекта
  yOffset?: number; // смещение при появлении
  once?: boolean; // показать только 1 раз
};

const FadeInOnScroll: React.FC<Props> = ({
  children,
  index = 0,
  yOffset = 40,
  once = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.2,
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
