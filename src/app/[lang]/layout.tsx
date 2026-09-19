import "@/app/globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { GoogleTagManager } from "@next/third-parties/google";
import { ModalProvider } from "../context/ModalContext";
import CustomCookieConsent from "../components/shared/CustomCookieConsent/CustomCookieConsent";
import GoogleAdsScript from "../components/scripts/GoogleAdsScript/GoogleAdsScript";
import GoogleAnalyticsWrapper from "../components/scripts/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper";
import MicrosoftClarity from "../components/scripts/MicrosoftClarity/MicrosoftClarity";
import LenisProvider from "../components/animations/LenisProvider/LenisProvider";
import SchemaIdentity from "../components/seo/SchemaIdentity/SchemaIdentity";
import { locales } from "@/i18n.config";
import { CONSENT_HEAD_SCRIPT } from "../components/shared/CustomCookieConsent/consent";

// No font is preloaded. Preloads land on Lighthouse's simulated path to the H1
// and pushed mobile LCP from ~1 s to 6-7 s. With display: swap the H1 paints in
// the fallback (metric-matched by next/font, so no layout shift) and switches
// to the web font a moment later.

const fontHeading = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-heading",
  display: "swap",
  preload: false,
});

const fontBody = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

const fontMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

// Default cache lifetime for every page under [lang]. Must be a literal; keep
// equal to SANITY_REVALIDATE_SECONDS. Content changes arrive through the
// publish webhook's revalidateTag, not through this timer.
export const revalidate = 86400;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bandziuk.com"),
  title: "Bandziuk - Full Stack Developer & SEO Manager",
  description:
    "Full Stack Developer with a focus on SEO optimization, creating high-performance web applications and enhancing online visibility.",
};

export default async function RootLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
  }
) {
  const params = await props.params;

  // Any path with a dot skips the proxy and lands here as a "language"
  // (/llms.txt, /wp-login.php): that rendered the homepage or failed with 500.
  if (!locales.includes(params.lang)) notFound();

  const {
    children
  } = props;

  return (
    // suppressHydrationWarning: CONSENT_HEAD_SCRIPT may add a class before React loads.
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: CONSENT_HEAD_SCRIPT }} />
      </head>
      <body
        // Browser extensions (ColorZilla, Grammarly…) add attributes to <body>
        // before React hydrates; this silences that one-level mismatch only.
        suppressHydrationWarning
        className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}
      >
        {/* Site-wide entity graph. Must stay on every page: it's the node all
            other schema on the site references by @id. */}
        <SchemaIdentity lang={params.lang} />

        <LenisProvider />
        <ModalProvider>{children}</ModalProvider>

        {/* Treated as necessary, per owner's explicit instruction (2026-09-09):
            these load unconditionally and no longer wait on analytics consent. */}
        <GoogleAnalyticsWrapper />
        <MicrosoftClarity />

        {/* <GoogleTagManager gtmId="GTM-MQNF6L9V" /> */}
        {/* <GoogleAdsScript /> */}

        <CustomCookieConsent lang={params.lang as "en" | "pl" | "ru"} />
      </body>
    </html>
  );
}
