"use client";

import Script from "next/script";

export default function GoogleAnalyticsWrapper() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LXSBE4EEP9"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-LXSBE4EEP9');
        `}
      </Script>
    </>
  );
}
