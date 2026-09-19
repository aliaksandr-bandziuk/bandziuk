import { assertLocale } from "@/lib/assertLocale";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BASE_URL, buildLanguageAlternates, localePrefix } from "@/utils/hreflang";
import { i18n } from "@/i18n.config";
import { getFormStandardDocumentByLang } from "@/sanity/sanity.utils";
import { FormStandardDocument } from "@/types/formStandardDocument";
import { Translation } from "@/types/homepage";
import { personRef, SITE_URL } from "@/lib/schema/identity";
import { aiCheckAvailable } from "@/lib/aiCheck/config";
import type { AiCheckLang } from "@/lib/aiCheck/types";
import Header from "@/app/components/layout/Header/Header";
import Footer from "@/app/components/layout/Footer/Footer";
import ModalFull from "@/app/components/modals/ModalFull/ModalFull";
import SectionHeading from "@/app/components/shared/SectionHeading/SectionHeading";
import AiVisibilityChecker from "@/app/components/tools/AiVisibilityChecker/AiVisibilityChecker";
import { CHECKER_COPY } from "@/app/components/tools/AiVisibilityChecker/copy";
import styles from "./page.module.scss";

type Props = { params: Promise<{ lang: string }> };

const PATH = "/tools/ai-visibility-checker";
const LANGS: AiCheckLang[] = ["en", "pl", "ru"];

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;

  assertLocale(params.lang);
  const lang = params.lang as AiCheckLang;
  const t = CHECKER_COPY[lang];
  if (!t) return {};

  const canonical = `${localePrefix(lang)}${PATH}`;
  const languages = buildLanguageAlternates(
    Object.fromEntries(LANGS.map((l) => [l, `${BASE_URL}${localePrefix(l)}${PATH}`])),
  );

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical, languages },
    openGraph: { title: t.meta.title, description: t.meta.description, url: canonical },
    twitter: { title: t.meta.title, description: t.meta.description },
    // Kept out of the index until the tool is switched on: a page whose form
    // is disabled should not be what a searcher lands on.
    ...(aiCheckAvailable() ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function AiVisibilityCheckerPage(props: Props) {
  const params = await props.params;

  assertLocale(params.lang);
  const lang = params.lang as AiCheckLang;
  const t = CHECKER_COPY[lang];
  if (!t) notFound();

  const formDocument: FormStandardDocument = await getFormStandardDocumentByLang(lang);

  const translations: Translation[] = i18n.languages.map((l) => ({
    language: l.id,
    path: `/${l.id}${PATH}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: t.title,
    description: t.meta.description,
    url: `${SITE_URL}${localePrefix(lang)}${PATH}`,
    inLanguage: lang,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    isAccessibleForFree: true,
    // Polish pages always price in złoty, even a price of zero.
    offers: { "@type": "Offer", price: 0, priceCurrency: lang === "pl" ? "PLN" : "EUR" },
    provider: personRef(),
  };

  return (
    <>
      <Header params={params} translations={translations} />
      {/* Plain <script>, not next/script: see CLAUDE.md §4a. */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.page}>
        <section className="container">
          <div className={styles.intro}>
            <SectionHeading as="h1" align="left" eyebrow={t.eyebrow} title={t.title} />
            <p className={styles.lead}>{t.lead}</p>
            <ul className={styles.facts}>
              {t.facts.map((fact) => (
                <li key={fact} className={styles.fact}>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <AiVisibilityChecker lang={lang} available={aiCheckAvailable()} />

          <div className={styles.limits}>
            <h2 className={styles.limitsTitle}>{t.limits.title}</h2>
            {t.limits.paragraphs.map((p) => (
              <p key={p} className={styles.limitsText}>
                {p}
              </p>
            ))}
            <p className={styles.limitsText}>
              {t.limits.studyBefore}
              <Link href={t.links.study} className={styles.link}>
                {t.limits.studyLink}
              </Link>
              {t.limits.studyAfter}
            </p>
          </div>
        </section>
      </main>
      <Footer params={params} formDocument={formDocument} />
      <ModalFull lang={lang} formDocument={formDocument} />
    </>
  );
}
