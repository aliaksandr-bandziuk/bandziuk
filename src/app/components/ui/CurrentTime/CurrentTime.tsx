"use client";

import React, { FC, useEffect, useState } from "react";

type Props = {
  timezone: string;
  className?: string;
};

function getFormatter(timezone: string): Intl.DateTimeFormat | null {
  try {
    return new Intl.DateTimeFormat([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: timezone,
    });
  } catch {
    return null;
  }
}

function formatNow(timezone: string): string {
  const formatter = getFormatter(timezone);
  return formatter ? formatter.format(new Date()) : "Invalid timezone";
}

const CurrentTime: FC<Props> = ({ timezone, className }) => {
  // Computed once at render time so the card never shows a blank "—" —
  // on the server this bakes a real formatted time into the initial HTML;
  // on the client's pre-hydration pass it recomputes a moment later (a
  // real, expected difference for a live clock), hence
  // suppressHydrationWarning below, scoped to just this text node. The
  // effect then takes over ticking every second exactly as before.
  const [time, setTime] = useState(() => formatNow(timezone));

  useEffect(() => {
    const formatter = getFormatter(timezone);
    if (!formatter) {
      console.error("Invalid timezone:", timezone);
      setTime("Invalid timezone");
      return;
    }

    const update = () => setTime(formatter.format(new Date()));
    update();
    const timerId = window.setInterval(update, 1000);

    return () => clearInterval(timerId);
  }, [timezone]);

  return (
    <div className={className}>
      <div suppressHydrationWarning>{time}</div>
    </div>
  );
};

export default CurrentTime;
