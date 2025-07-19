import "@/app/globals.css";
import type { Metadata } from "next";
import { Rubik, Roboto, Inter } from "next/font/google";
import { cookies } from "next/headers";
import { GoogleTagManager } from "@next/third-parties/google";
import { ModalProvider } from "../context/ModalContext";
import CustomCookieConsent from "../components/shared/CustomCookieConsent/CustomCookieConsent";
import GoogleAdsScript from "../components/scripts/GoogleAdsScript/GoogleAdsScript";
import GoogleAnalyticsWrapper from "../components/scripts/GoogleAnalyticsWrapper/GoogleAnalyticsWrapper";
import MicrosoftClarity from "../components/scripts/MicrosoftClarity/MicrosoftClarity";
import LenisProvider from "../components/animations/LenisProvider/LenisProvider";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });
const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
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
      <body className={roboto.className}>
        <LenisProvider />
        <ModalProvider>{children}</ModalProvider>

        {/* {hasAnalytics && (
          <>
          </>
        )} */}
        <GoogleAnalyticsWrapper />
        <MicrosoftClarity />
        {/* <GoogleTagManager gtmId="GTM-MQNF6L9V" /> */}
        {/* <GoogleAdsScript /> */}

        <CustomCookieConsent lang={params.lang as "en" | "pl" | "ru"} />
      </body>
    </html>
  );
}
