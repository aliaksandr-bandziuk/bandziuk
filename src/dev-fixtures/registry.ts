// DEV ONLY: landing pages that are written but not yet in Sanity.
//
// On `npm run dev`, [lang]/[...slug] falls back to these fixtures when Sanity
// has no page for the slug, so a new page is reviewed on its real address
// (http://localhost:3000/restaurant-seo) with the real components, metadata and
// JSON-LD. A page that exists in Sanity always wins over its fixture.
//
// Why not a test document in Sanity: the site's client has no `perspective`,
// so with apiVersion 2023-10-16 it reads drafts too, and a test draft would
// surface on the live site and in the sitemap.
//
// In a production build (Vercel included) both functions return nothing, so
// no fixture can ever be rendered or listed there.
//
// To add a page: create src/dev-fixtures/<slug>.<lang>.ts and list it below.
import groq from "groq";
import { client } from "@/sanity/sanity.client";
import { getFormStandardDocumentByLang } from "@/sanity/sanity.utils";
import { restaurantWebsiteDesignEn } from "./restaurant-website-design.en";
import { restaurantWebsiteDesignRu } from "./restaurant-website-design.ru";
import { restaurantSeoEn } from "./restaurant-seo.en";
import { restaurantSeoPl } from "./restaurant-seo.pl";
import { restaurantSeoRu } from "./restaurant-seo.ru";
import { constructionWebsiteDesignEn } from "./construction-website-design.en";
import { constructionWebsiteDesignRu } from "./construction-website-design.ru";
import { constructionSeoEn } from "./construction-seo.en";
import { constructionSeoRu } from "./construction-seo.ru";
import { constructionSeoPl } from "./construction-seo.pl";
import { constructionCompanyWebsiteEn } from "./construction-company-website.en";
import { constructionCompanyWebsitePl } from "./construction-company-website.pl";
import { constructionCompanyWebsiteRu } from "./construction-company-website.ru";
import { contractorWebsiteDesignEn } from "./contractor-website-design.en";
import { websiteForContractorsEn } from "./website-for-contractors.en";
import { websiteForContractorsRu } from "./website-for-contractors.ru";
import { seoForContractorsEn } from "./seo-for-contractors.en";
import { localSeoForContractorsEn } from "./local-seo-for-contractors.en";
import { aiSeoServicesEn } from "./ai-seo-services.en";
import { aiSeoServicesPl } from "./ai-seo-services.pl";
import { aiSeoServicesRu } from "./ai-seo-services.ru";
import { aiSeoConsultantEn } from "./ai-seo-consultant.en";
import { aiSeoConsultantPl } from "./ai-seo-consultant.pl";
import { aiSeoConsultantRu } from "./ai-seo-consultant.ru";
import { chatgptSeoServicesEn } from "./chatgpt-seo-services.en";
import { chatgptSeoServicesPl } from "./chatgpt-seo-services.pl";
import { chatgptSeoServicesRu } from "./chatgpt-seo-services.ru";
import { llmSeoServicesEn } from "./llm-seo-services.en";
import { llmSeoServicesPl } from "./llm-seo-services.pl";
import { llmSeoServicesRu } from "./llm-seo-services.ru";

const FIXTURES: any[] = [restaurantWebsiteDesignEn, restaurantWebsiteDesignRu, restaurantSeoEn, restaurantSeoPl, restaurantSeoRu, constructionWebsiteDesignEn, constructionWebsiteDesignRu, constructionSeoEn, constructionSeoRu, constructionSeoPl, constructionCompanyWebsiteEn, constructionCompanyWebsitePl, constructionCompanyWebsiteRu, contractorWebsiteDesignEn, websiteForContractorsEn, websiteForContractorsRu, seoForContractorsEn, localSeoForContractorsEn, aiSeoServicesEn, aiSeoServicesPl, aiSeoServicesRu, aiSeoConsultantEn, aiSeoConsultantPl, aiSeoConsultantRu, chatgptSeoServicesEn, chatgptSeoServicesPl, chatgptSeoServicesRu, llmSeoServicesEn, llmSeoServicesPl, llmSeoServicesRu];

const isDev = process.env.NODE_ENV !== "production";

/** Same id the create script will give the document, so the A/B form arm on
 *  localhost is the arm the live page will get. */
export const fixtureDocId = (fx: any) => {
  const base = `singlepage-${fx.group ?? fx.slug}`;
  return fx.lang === "en" ? base : `${base}.${fx.lang}`;
};

export function devFixtureParams(): { lang: string; slug: string[] }[] {
  if (!isDev) return [];
  return FIXTURES.map((fx) => ({ lang: fx.lang, slug: [...(fx.parentPath ?? []), fx.slug] }));
}

/** Real path of a fixture page: a nested one (fx.parentPath, e.g. ["services"])
 *  lives under its parent, like the service pages in Sanity. */
export function devFixturePath(lang: string, slug: string): string[] | null {
  if (!isDev) return null;
  const fx = FIXTURES.find((f) => f.lang === lang && f.slug === slug);
  return fx ? [...(fx.parentPath ?? []), fx.slug] : null;
}

/** The fixture shaped exactly like getSinglePageByLang's GROQ result. */
export async function getDevFixturePage(lang: string, slug: string) {
  if (!isDev) return null;
  const fx = FIXTURES.find((f) => f.lang === lang && f.slug === slug);
  if (!fx) return null;

  // Picks are always the EN slugs of portfolio cases; the PL/RU card is the
  // EN case's translation (translation.metadata), not a guessed slug.
  const pickSlugs: string[] = fx.contentBlocks
    .filter((b: any) => b._type === "portfolioPickBlock")
    .flatMap((b: any) => b.picks);
  let projects: any[] = [];
  if (pickSlugs.length) {
    const ids: { s: string; id: string | null }[] = await client.fetch(
      groq`*[_type == "portfolio" && language == "en" && !(_id in path("drafts.**")) && slug.en.current in $slugs]{
        "s": slug.en.current,
        "id": select(
          $lang == "en" => _id,
          *[_type == "translation.metadata" && references(^._id)][0].translations[_key == $lang][0].value._ref
        )
      }`,
      { lang, slugs: pickSlugs },
    );
    const docs: any[] = await client.fetch(
      groq`*[_id in $ids]{
        _id, title, slug, language, previewImage, cardTags,
        keyFeatures{ industry, services[]->{ _id, title, slug } }
      }`,
      { ids: ids.map((x) => x.id).filter(Boolean) },
    );
    projects = ids.map((x) => ({ ...(docs.find((d) => d._id === x.id) ?? {}), s: x.s })).filter((p) => p._id);
  }
  const formDocument = await getFormStandardDocumentByLang(lang);
  const parentPage = fx.parentPath
    ? await client.fetch(
        groq`*[_type == "singlepage" && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{ title, slug }`,
        { lang, s: fx.parentPath[fx.parentPath.length - 1] },
      )
    : null;

  const contentBlocks = fx.contentBlocks.map((b: any) => {
    if (b._type === "portfolioPickBlock") {
      const { picks, ...rest } = b;
      return { ...rest, items: picks.map((s: string) => projects.find((pr) => pr.s === s) ?? null).filter(Boolean) };
    }
    if (b._type === "quoteFormBlock") return { ...b, form: formDocument };
    return b;
  });

  return {
    _id: fixtureDocId(fx),
    title: fx.title,
    heading: fx.heading,
    slug: { _type: "localizedSlug", [lang]: { _type: "slug", current: fx.slug } },
    seo: fx.seo,
    excerpt: fx.excerpt,
    stickyCta: fx.stickyCta,
    heroLayout: fx.heroLayout,
    heroChips: fx.heroChips,
    heroPhonePoints: fx.heroPhonePoints,
    heroVisual: fx.heroVisual,
    heroPhoto: fx.heroPhoto,
    pageType: fx.pageType ?? "page",
    ...(parentPage ? { parentPage } : {}),
    offers: fx.offers ?? [],
    contentBlocks,
    _translations: [],
    childrenServices: [],
  };
}
