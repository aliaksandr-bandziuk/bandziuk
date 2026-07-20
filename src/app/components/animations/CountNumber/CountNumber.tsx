"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useIsMounted } from "@/hooks/useIsMounted";

type Props = {
  children: string | number;
};

const CountNumber: FC<Props> = ({ children }) => {
  const targetNumber =
    typeof children === "string" ? parseInt(children, 10) : children;

  // Server render (and pre-hydration client render) shows the final value —
  // only once mounted AND scrolled into view do we drop to 0 and count up,
  // same animation as before, just no longer the default/SSR state.
  const [count, setCount] = useState(targetNumber);
  const [hasCounted, setHasCounted] = useState(false);
  const isMounted = useIsMounted();

  const ref = useRef<HTMLParagraphElement>(null);
  const isVisible = useIntersectionObserver(ref);

  useEffect(() => {
    if (!isMounted || !isVisible || hasCounted) return;

    let start = 0;
    const end = targetNumber;
    setCount(start);

    if (start === end) {
      setHasCounted(true);
      return;
    }

    const incrementTime = Math.abs(Math.floor(1500 / (end as number))); // duration of animation (1.5 seconds)

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
        setHasCounted(true); // Устанавливаем флаг, что счет уже произошел
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isMounted, targetNumber, isVisible, hasCounted]);

  return <p ref={ref}>{count}</p>;
};

export default CountNumber;
