"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactElement;
};

const Floating = ({ children }: Props) => {
  return (
    <motion.div
      animate={{
        y: [0, -50, 0, 20, 0], // вверх-вниз
        x: [0, 10, 0, -10, 0], // немного по сторонам
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Floating;
