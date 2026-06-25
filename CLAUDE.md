# Bandziuk — Codebase Map & Analysis

> Generated 2026-06-25. Analysis only — nothing was changed.

---

## 1. Stack & Configuration

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14.2.5, App Router |
| Language | TypeScript 5.8 (strict) |
| CMS | Sanity v3 (3.99.0) + next-sanity 9.12.3 |
| i18n | next-intl 3.19.1 — EN (no prefix, default), PL, RU |
| Styling | Tailwind CSS 3.4.1 + SCSS modules + CSS custom properties |
| Animation | Lenis 1.3.4 (smooth scroll), Framer Motion 11, GSAP 3, AOS 2 |
| Forms | Formik + Yup validation |
| Path alias | `@/` → `src/` |
| Domain | `https://www.bandziuk.com` |

**next.config.mjs** — image remote patterns for `cdn.sanity.io`, GitHub, Google CDN; `/sitemap.xml` rewritten to `/api/sitemap`.

---

## 2. App Router Structure

```
src/app/
├── layout.tsx                  root — null (no UI)
├── page.tsx                    root — null (redirect only)
├── robots.ts                   Next.js Metadata Route
├── globals.css
├── context/
│   └── ModalContext.tsx        "use client" — global modal state
│
├── [lang]/                     dynamic locale segment (en | pl | ru)
│   ├── layout.tsx              fonts, LenisProvider, ModalProvider, analytics (GDPR-gated), CookieConsent
│   ├── page.tsx                homepage — server component, async
│   │
│   ├── blog/
│   │   ├── page.tsx            blog listing — server component
│   │   ├── loading.tsx
│   │   └── [slug]/page.tsx     blog post — server component, generateMetadata
│   │
│   ├── portfolio/
│   │   ├── page.tsx            portfolio listing — server component
│   │   ├── loading.tsx
│   │   └── [slug]/page.tsx     portfolio item — server component, JSON-LD
│   │
│   ├── files/[slug]/page.tsx   file download handler (redirects to Sanity asset URL)
│   │
│   └── [...slug]/page.tsx      catch-all for all single/service pages
│       ├── dynamicParams = false
│       ├── revalidate = 60
│       └── generateStaticParams() — builds nested slug arrays from parent-child tree
│
├── admin/
│   ├── layout.tsx              bare wrapper (no i18n, no LenisProvider)
│   └── [[...index]]/page.tsx   "use client" — Sanity Studio (NextStudio)
│
└── api/
    ├── email/route.ts          POST — Nodemailer via Hostinger SMTP
    ├── sitemap/route.ts        GET — generates full XML sitemap for all languages
    ├── getMorePosts/route.ts   GET — paginated blog posts
    ├── monday/route.ts         POST — Monday.com CRM integration
    └── monday-newsletter/route.ts  newsletter subscription
```

**Middleware** (`src/middleware.ts`): next-intl `createIntlMiddleware` with `localeDetection: false`, `localePrefix: "as-needed"`. Matcher excludes `/api`, `/admin`, `/robots`, `/sitemap`, `/favicon.ico`.

---

## 3. Sanity Integration

### Client (`src/sanity/sanity.client.ts`)

```ts
export const client = createClient({ projectId, dataset, apiVersion: "2023-10-16", useCdn, token });
// useCdn = (NODE_ENV === "production") — intentional: CDN off in dev to avoid stale data
export function urlFor(source: any) { return builder.image(source); }
```

`SANITY_API_TOKEN` is a private env var (server-only). `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are public (used in Studio config too).

### Queries (`src/sanity/sanity.utils.ts` — ~1,300 lines)

All GROQ queries live in one file. Data fetching pattern:

```ts
const data = await client.fetch(groqQuery, { lang }, { next: { revalidate: 60 } });
```

**No cache tags (`revalidateTag`) are used — only time-based ISR (60 s).**
No webhook endpoint for on-demand revalidation.

### Translation pattern (Sanity Document Internationalization v3)

Every translatable document query includes:
```groq
"_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{ slug }
```
Do not change this shape — it is what the plugin produces.

Slug field structure: `slug: { en: { current: "..." }, pl: { current: "..." }, ru: { current: "..." } }`.

### Schema types (`src/sanity/schemaTypes/` — 44 files)

| Group | Types |
|-------|-------|
| Core pages | `homepage`, `singlepage`, `blog`, `portfolio`, `blogPage`, `portfolioPage`, `header`, `footer` |
| Content blocks | `textContent`, `doubleTextBlock`, `imageFullBlock`, `gridBlock`, `tableBlock`, `bulletsBlock`, `imageBulletsBlock`, `accordionBlock`, `faqBlock`, `serviceFeaturesBlock`, `animationBulletsBlock`, `benefitsBlock`, `landingCtaBlock`, `workProcessBlock`, `portfolioBlock`, `formMinimalBlock`, `formFullBlock`, `contactFullBlock`, `contactMethodsBlock`, `locationBlock`, `reviewsFullBlock`, `teamBlock`, `buttonBlock`, `howWeWorkBlock`, `projectsSectionBlock` |
| Reference types | `category`, `projectCategory`, `service`, `technology`, `serviceFeature` |
| Utilities | `localizedSlug`, `blockContentWithStyle`, `docFile`, `formStandard`, `formStandardDocument` |

Studio is at `/admin`, configured in `src/sanity.config.ts` (plugins: Structure Tool, Vision, Document Internationalization).

---

## 4. Server vs Client Components

### Correctly server-side (no `"use client"`)
All `page.tsx` files, `layout.tsx` files, Header, Footer, Hero, About, Services, Portfolio, WorkProcess, Reviews, Contacts, FaqHomepage, and all content block components that only render props.

### "use client" — justified

| Component | Reason |
|-----------|--------|
| `LenisProvider` | calls `useLenis()` hook (DOM scroll API) |
| `ModalContext` | `useState` for modal open/close |
| `ModalFull` | consumes `ModalContext` |
| `FormStandard`, `FormFull`, `FormStatic` | Formik, `onChange`, `onSubmit` |
| `FormMinimalBlockComponent`, `FormFullBlockComponent` | wraps forms |
| `BurgerMenu` | toggle state |
| `LocaleSwitcher` | reads `usePathname` + `useRouter` |
| `NavLinks`, `NavLink`, `NavWrapper` | active link detection |
| `SliderReviews`, `SliderScreenshots` | Swiper (needs DOM) |
| `BlogPostsRenderer` | "load more" pagination |
| `AccordionContainer` | open/close state |
| `StickyStack` | GSAP scroll pin |
| `FadeInOnScroll`, `Floating`, `CountNumber` | Framer Motion / intersection |
| `ParticlesBackground` | tsParticles (canvas) |
| `Problems` | Framer Motion + `ButtonModal` |
| `ClientAnimationLayer`, `AnimatedMarker`, `FillSegment` | GSAP scroll |
| `MapContact` | Leaflet (browser-only) |
| `VideoPreview` | `useState` for play |
| `ResponsiveMedia` | `useEffect` / resize |
| `CurrentTime` | `setInterval` |
| `GoogleAnalyticsWrapper`, `MicrosoftClarity`, `GoogleAdsScript` | `<Script>` injection |
| `CustomCookieConsent` | `js-cookie` reads |
| `ButtonModal` | calls `openModal()` from context |
| `PortfolioIntroClient` | animation on mount |
| `WorkProcess > ClientAnimationLayer` | GSAP timeline |
| `SliderScreenshots` | Swiper |
| `HeaderWrapper` | wraps NavWrapper which is client |

### "use client" — questionable / unnecessary

| Component | Issue |
|-----------|-------|
| `SchemaBlogPost` | Only builds a JSON-LD object and renders `<Script strategy="beforeInteractive">`. Has no hooks, no state, no event handlers. Can be a server component — removing `"use client"` would push JSON-LD into the initial HTML, which is better for SEO. |

---

## 5. Identified Issues

### A — Dead code / orphaned vertical

`sanity.utils.ts` contains ~400 lines of GROQ queries for a **real-estate vertical** that has no routes: `getPropertyByLang`, `getProjectByLang`, `getProjectsPageByLang`, `getDeveloperByLang`, `getThreeProjectsBySameCity`, `getFilteredProjects`, `getFilteredProjectsCount`, `getAllProperties`, `getAllProjectsByLang`, `getProjectsByDeveloper`.

Matching dead artefacts: type files (`property.ts`, `project.ts`, `developer.ts`, `propertiesPage.ts`, `projectsPage.ts`) and Sanity schemas for those types. None of these are referenced by any page or route.

**Risk if removed:** Zero — no route serves them. But remove sanity schemas carefully to avoid Sanity Studio errors on existing documents.

### B — Three duplicate portfolio query functions

`sanity.utils.ts` exports three functions that fetch essentially the same portfolio list with minor field differences:
- `getAllPortfolioByLang` (line 134) — used by sitemap
- `getAllPortfoliosByLang` (line 528) — used nowhere (dead)
- `getPortfolioItemsByLang` (line 809) — used by portfolio page

Should be consolidated into one.

### C — Missing revalidation on header and footer queries

```ts
// getHeaderByLang and getFooterByLang — no fetch options passed:
const header = await client.fetch(headerQuery, { lang });
const footer = await client.fetch(footerQuery, { lang });
```

In Next.js 14 App Router, `fetch()` without options in a dynamic request defaults to `no-store` (not cached). Header and footer are fetched on every page, so they should at minimum get `{ next: { revalidate: 60 } }`.

### D — `urlFor(source: any)` — weak typing

The image URL builder accepts `any`. Should be typed as `SanityImageSource` from `@sanity/image-url/lib/types/types`.

### E — `urlFor().url()` in components bypasses Next.js Image

Several components use raw `<img src={urlFor(x).url()}>` instead of `<Image>` from `next/image`. Examples:
- `Header.tsx` — logo
- `Footer.tsx` — logo
- `Services.tsx` — service icons
- `WorkProcess.tsx` — step icons
- `Contacts.tsx` — contact icons
- `LogosCarousel.tsx` — client logos
- `ServiceFeaturesBlockComponent.tsx` — feature images
- `About.tsx` — images
- `SliderReviews.tsx` — reviewer photo

These miss: lazy loading, WebP auto-conversion, layout shift prevention, responsive srcset.

### F — Dead import in homepage page

`src/app/[lang]/page.tsx` line 14:
```ts
import homepage from "@/sanity/schemaTypes/homepage"; // never used
```

### G — Bloated / duplicate dependencies

| Package | Issue |
|---------|-------|
| `@studio-freight/lenis` v1.0.42 | Duplicate of `lenis` v1.3.4 — the hook uses one, check which |
| `locomotive-scroll` v5.0.0-beta.9 | Not imported anywhere in `src/` |
| `node-fetch` v3 | Redundant — Node 18+ has native fetch |
| `react-tsparticles` + `tsparticles` + `tsparticles-engine` | All v2 (outdated); `tsparticles` v3 changed API significantly |
| `csv-parse`, `node-cron`, `xml2js` | No imports found in `src/` |
| `dotenv` | Loaded at runtime in Next.js env automatically |
| `styled-components` v6 | No `.styled.ts` files found; likely unused |

### H — `Math.random()` shuffle in a cached server function

`getThreeProjectsBySameCity` (dead code, see A) shuffles results with `Math.random()` after fetching. Because this runs inside `client.fetch()` with ISR, the order is fixed per cache entry, not actually random. Even if the function were alive, this pattern defeats deterministic page output.

### I — Russian-language code comments

Comments in `sanity.utils.ts`, `sanity.client.ts`, and several components are in Russian (e.g., `// строим дерево`, `// Экспорт настроек для Node.js`). Not a bug, but creates friction for non-Russian collaborators.

### J — Non-standard 404 for unknown single pages

In `[...slug]/page.tsx` line 163:
```ts
if (!page) { return <p>Страница не найдена</p>; }
```
Should call `notFound()` to render the proper 404 page and set the HTTP 404 status. The current code returns a 200 with Russian placeholder text.

---

## 6. What NOT to Touch

These are deliberate, working solutions that look unusual but must stay:

### The `[...slug]` static path tree-builder
`generateStaticParams` in `src/app/[lang]/[...slug]/page.tsx` (lines 81–122) iterates parent-child documents in multiple passes to build correct nested slug arrays. The `while(added)` loop is intentional BFS. Do not replace it with a simpler flat approach — it breaks nested service routes (e.g., `services/web/frontend`).

### `dynamicParams = false` + `revalidate = 60` on `[...slug]`
These work together: pages are generated at build time and ISR-refreshed every 60 s. Removing `dynamicParams = false` would allow Next.js to attempt server-rendering unknown slugs, bypassing the content check. Removing `revalidate` would freeze pages at build-time permanently.

### `useCdn = (NODE_ENV === "production")`
Deliberate: CDN in production for performance; CDN disabled in dev to avoid serving stale Sanity data during content editing sessions.

### Translation metadata GROQ pattern
```groq
"_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{ slug }
```
This is the correct query shape for `@sanity/document-internationalization` v3. Do not "simplify" it.

### Admin route excluded from i18n middleware
The middleware `matcher` omits `/admin`. If you add it back, Sanity Studio redirects break.

### Cookie-consent-gated analytics in layout
`[lang]/layout.tsx` reads `cookies()` to gate `GoogleAnalyticsWrapper` and `MicrosoftClarity`. This is the GDPR consent implementation. Do not move analytics scripts outside this conditional.

### The `formDocument` prop pattern
`formDocument` (a `FormStandardDocument`) is fetched on every page that renders a modal or form, then passed down to `ModalFull` and footer forms. This is how multi-language form validation strings reach client components without a separate API call. Don't refactor this into a context/store without confirming SSR implications.

---

## 7. Summary & Improvement Priorities

**Overall health:** The codebase is production-quality for its primary purpose — a multilingual portfolio+blog site with Sanity CMS. The App Router usage is correct, ISR is in place, SEO metadata is thorough, and the server/client component split is well-considered. The main liabilities are accumulated dead code from a past real-estate phase and a few low-effort consistency gaps.

### Top 5 improvements (impact ÷ effort)

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 1 | **Add `revalidation: 60` to `getHeaderByLang` and `getFooterByLang`** | Medium — these are fetched on every page; caching them properly reduces Sanity API calls | Very low — 2 lines |
| 2 | **Remove real-estate dead code** (queries, types, schemas) | Medium — reduces codebase noise by ~400 lines of queries + 5 type files | Low — delete only; verify no Sanity documents exist first |
| 3 | **Consolidate the 3 portfolio query functions into 1** | Low-Medium — eliminates confusion about which to use | Low — update 2 callers |
| 4 | **Replace `<img src={urlFor(x).url()}>` with `<Image>`** in server components | High — lazy loading, WebP, layout shift prevention for every page | Medium — each site needs explicit width/height or fill layout |
| 5 | **Remove unused packages** (`locomotive-scroll`, `styled-components`, `node-fetch`, `@studio-freight/lenis`, `csv-parse`, `node-cron`, `xml2js`, `dotenv`) | Low-Medium — smaller bundle, fewer security surface | Low — `npm remove` + verify build |

Bonus (trivial): fix the `notFound()` call (#J) and remove the dead import (#F).
