"use client";

import React from "react";
import Link from "next/link";
import { trackEvent } from "@/utils/analytics";

// Thin client wrapper so a server component (e.g. ContactMethodsBlockComponent)
// can fire a GA4 event on click without itself becoming a client component.
type Props = React.ComponentProps<typeof Link> & {
  trackAs?: string;
  trackParams?: Record<string, string | number | boolean | undefined>;
};

const TrackedLink: React.FC<Props> = ({ trackAs, trackParams, onClick, ...rest }) => {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        if (trackAs) {
          trackEvent(trackAs, { ...trackParams, page_path: window.location.pathname });
        }
        onClick?.(e);
      }}
    />
  );
};

export default TrackedLink;
