"use client";

import React, { FC, useEffect, useState } from "react";

type Props = {
  timezone: string;
  className?: string;
};

const CurrentTime: FC<Props> = ({ timezone, className }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    let timerId: number | undefined;

    try {
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: timezone,
      };

      const formatter = new Intl.DateTimeFormat([], options);

      const update = () => {
        setTime(formatter.format(new Date()));
      };

      update(); // первый раз сразу
      timerId = window.setInterval(update, 1000);
    } catch (error) {
      console.error("Invalid timezone:", timezone, error);
      setTime("Invalid timezone");
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timezone]);

  return (
    <div className={className}>
      <div>{time || "—"}</div>
    </div>
  );
};

export default CurrentTime;
