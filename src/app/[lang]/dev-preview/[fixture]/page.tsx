// DEV ONLY: renders a landing-page fixture with the real components, so a new
// layout can be checked on localhost before anything is written to Sanity.
// Writing a test page to Sanity is not an option: the site's client has no
// `perspective`, so with apiVersion 2023-10-16 it reads drafts too, and a test
// draft would surface on the live site and in the sitemap.
//
// Answers 404 in any production build (Vercel included).
//
//   http://localhost:3000/dev-preview/restaurant-website-design
//   ...?form=quiz | ?form=short   pins the A/B form variant
import React from "react";
import groq from "groq";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import styles from "../../[...slug]/page.module.scss";
import { client } from "@/sanity/sanity.client";
import { getFormStandardDocumentByLang } from "@/sanity/sanity.utils";
import Header from "@/app/components/layout/Header/Header";
import Footer from "@/app/components/layout/Footer/Footer";
import ModalFull from "@/app/components/modals/ModalFull/ModalFull";
import LandingHero from "@/app/components/blocks/LandingHero/LandingHero";
import TextContentComponent from "@/app/components/blocks/TextContentComponent/TextContentComponent";
import GuideTextContent from "@/app/components/blocks/GuideTextContent/GuideTextContent";
import OfferListBlock from "@/app/components/blocks/OfferListBlock/OfferListBlock";
import PortfolioPickBlock from "@/app/components/blocks/PortfolioPickBlock/PortfolioPickBlock";
import QuoteFormBlock from "@/app/components/blocks/QuoteFormBlock/QuoteFormBlock";
import FaqHomepage from "@/app/components/sections/FaqHomepage/FaqHomepage";
import StickyCtaBar from "@/app/components/ui/StickyCtaBar/StickyCtaBar";
import { restaurantWebsiteDesignEn } from "@/dev-fixtures/restaurant-website-design.en";

const FIXTURES: Record<string, any> = {
  "restaurant-website-design": { en: restaurantWebsiteDesignEn },
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = { robots: { index: false, follow: false } };

type Props = {
  params: Promise<{ lang: string; fixture: string }>;
  searchParams: Promise<{ form?: string }>;
};

export default async function DevPreview({ params, searchParams }: Props) {
  if (process.env.NODE_ENV === "production") notFound();
  const { lang, fixture } = await params;
  const page = FIXTURES[fixture]?.[lang];
  if (!page) notFound();

  const formDocument = await getFormStandardDocumentByLang(lang);

  // portfolio picks: slugs → the same shape the GROQ projection returns
  const pickSlugs: string[] = page.contentBlocks
    .filter((b: any) => b._type === "portfolioPickBlock")
    .flatMap((b: any) => b.picks);
  const projects: any[] = pickSlugs.length
    ? await client.fetch(
        groq`*[_type == "portfolio" && language == $lang && slug[$lang].current in $slugs]{
          _id, title, slug, language, previewImage, cardTags,
          keyFeatures{ industry, services[]->{ _id, title, slug } },
          "s": slug[$lang].current
        }`,
        { lang, slugs: pickSlugs },
      )
    : [];

  const pinned = (await searchParams).form;
  const blocks = page.contentBlocks.map((b: any) => {
    if (b._type === "portfolioPickBlock") {
      return {
        ...b,
        items: b.picks.map((s: string) => projects.find((pr) => pr.s === s) ?? null),
      };
    }
    if (b._type === "quoteFormBlock") {
      return { ...b, form: formDocument, ...(pinned === "quiz" || pinned === "short" ? { formVariant: pinned } : {}) };
    }
    return b;
  });

  const render = (block: any) => {
    switch (block._type) {
      case "offerListBlock":
        return <OfferListBlock block={block} />;
      case "portfolioPickBlock":
        return <PortfolioPickBlock block={block} lang={lang} />;
      case "quoteFormBlock":
        return <QuoteFormBlock block={block} lang={lang} pageKey={`preview-${fixture}-${lang}`} />;
      case "textContent":
        return block.layout === "guide" ? <GuideTextContent block={block} lang={lang} /> : <TextContentComponent block={block} />;
      case "faqBlock":
        return (
          <FaqHomepage
            faqSection={{ _key: block._key, _type: "faqSection", title: block.title ?? "", pretitle: "", subtitle: "", faq: block.faq } as any}
            noOuterMargin
          />
        );
      default:
        return <p>Unsupported in preview: {block._type}</p>;
    }
  };

  const banded = new Set(["offerListBlock"]);

  return (
    <>
      <Header params={{ lang }} />
      <main className="singlepage">
        <LandingHero
          title={page.title}
          heading={page.heading}
          excerpt={page.excerpt}
          lang={lang}
          segments={[page.slug]}
          chips={page.heroChips}
          phonePoints={page.heroPhonePoints}
        />
        {blocks.map((block: any) => (
          <div
            key={block._key}
            className={[styles.sectionRhythm, banded.has(block._type) ? styles.sectionBanded : ""].filter(Boolean).join(" ")}
          >
            {render(block)}
          </div>
        ))}
      </main>
      <Footer params={{ lang }} formDocument={formDocument} />
      <ModalFull lang={lang} formDocument={formDocument} />
      {page.stickyCta && <StickyCtaBar lang={lang} />}
    </>
  );
}
