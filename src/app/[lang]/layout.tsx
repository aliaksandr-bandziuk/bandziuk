import "@/app/globals.css";
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { GoogleTagManager } from "@next/third-parties/google";
import { ModalProvider } from "../context/ModalContext";
import CustomCookieConsent from "../components/shared/CustomCookieConsent/CustomCookieConsent";
import GoogleAdsScript from "../components/scripts/GoogleAdsScript/GoogleAdsScript";
import GoogleAnalyticsWrapper from "../components/scripts/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper";
import MicrosoftClarity from "../components/scripts/MicrosoftClarity/MicrosoftClarity";
import LenisProvider from "../components/animations/LenisProvider/LenisProvider";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bandziuk.com"),
  title: "Bandziuk - Full Stack Developer & SEO Manager",
  description:
    "Full Stack Developer with a focus on SEO optimization, creating high-performance web applications and enhancing online visibility.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const cookieStore = cookies();
  const consentCookie = cookieStore.get("cookieConsent");
  let hasAnalytics = false;

  try {
    const consent = consentCookie?.value
      ? JSON.parse(consentCookie.value)
      : null;
    hasAnalytics = consent?.analytics === true;
  } catch {
    // ignore error
  }

  return (
    <html lang={params.lang}>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}
      >
        <LenisProvider />
        <ModalProvider>{children}</ModalProvider>

        {hasAnalytics && (
          <>
            <GoogleAnalyticsWrapper />
            <MicrosoftClarity />
          </>
        )}

        {/* <GoogleTagManager gtmId="GTM-MQNF6L9V" /> */}
        {/* <GoogleAdsScript /> */}

        <CustomCookieConsent lang={params.lang as "en" | "pl" | "ru"} />
      </body>
    </html>
  );
}
