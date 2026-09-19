import "@/app/globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { ModalProvider } from "../context/ModalContext";
import CustomCookieConsent from "../components/shared/CustomCookieConsent/CustomCookieConsent";
import GoogleAdsScript from "../components/scripts/GoogleAdsScript/GoogleAdsScript";
import GoogleAnalyticsWrapper from "../components/scripts/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper";
import MicrosoftClarity from "../components/scripts/MicrosoftClarity/MicrosoftClarity";
import LenisProvider from "../components/animations/LenisProvider/LenisProvider";
import SchemaIdentity from "../components/seo/SchemaIdentity/SchemaIdentity";

const fontHeading = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
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

  const {
    children
  } = props;

  return (
    <html lang={params.lang}>
      <body
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
