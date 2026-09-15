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
| Styling | SCSS modules + CSS custom properties (Tailwind was removed in July 2026) |
| Animation | Lenis 1.3.4 (smooth scroll), Framer Motion 11, GSAP 3, AOS 2 |
| Forms | Formik + Yup validation |
| Path alias | `@/` → `src/` |
| Domain | `https://www.bandziuk.com` |

**next.config.mjs** — custom image loader (Sanity CDN, not Vercel; §12) and remote patterns for `cdn.sanity.io`, GitHub, Google CDN; `/sitemap.xml` rewritten to `/api/sitemap`.

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
│       ├── revalidate = 86400 (refreshed on publish, see §13)
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

`client` is a thin wrapper around `createClient`: its only method, `fetch`,
adds an explicit cache lifetime and the `sanity` tag to every query. See §13
before changing anything here.

`SANITY_API_TOKEN` is a private env var (server-only) and is **required**:
documents whose `_id` contains a dot — every translation, e.g. `blog-foo.pl` —
are private in Sanity. Without the token roughly half the site disappears
(checked 2026-09-15: 128 blog posts with it, 54 without). `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are public (used in Studio config too).

### Queries (`src/sanity/sanity.utils.ts` — ~1,300 lines)

All GROQ queries live in one file. Data fetching pattern:

```ts
const data = await client.fetch(groqQuery, { lang });
// the wrapper adds { next: { revalidate: 86400, tags: ["sanity"] } }
```

Pages are cached for a day and refreshed on publish: the Sanity webhook at
`/api/indexnow/webhook` calls `revalidateTag("sanity")` before its IndexNow
work (§8, §13). Many calls still pass `{ next: { revalidate: 60 } }`; the
wrapper overrides that value on purpose.

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
| Content blocks | `textContent`, `doubleTextBlock`, `imageFullBlock`, `gridBlock`, `tableBlock`, `accordionBlock`, `faqBlock`, `serviceFeaturesBlock`, `animationBulletsBlock`, `benefitsBlock`, `landingCtaBlock`, `workProcessBlock`, `portfolioBlock`, `formMinimalBlock`, `formFullBlock`, `contactMethodsBlock`, `locationBlock`, `reviewsFullBlock` |
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
| `NavLinks`, `NavWrapper` | active link detection |
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

None currently known.

**Correction, 2026-09-12.** This table used to claim `SchemaBlogPost` carried a
`"use client"` directive that should be removed to get JSON-LD into the initial
HTML. **That was wrong on the facts** — the file never had the directive, and
anyone acting on the note would have gone looking for a line that does not
exist. The symptom was real, the cause was not: see §10.

---

## 4a. JSON-LD must use a plain `<script>`, never `next/script`

Verified 2026-09-12 against the dev server. `next/script` — with or without
`strategy="beforeInteractive"` — does not put JSON-LD in the server HTML. It
queues the content into `self.__next_s` and injects it after hydration. The
proof was visible on a single page: `Accordion` emitted its `FAQPage` through a
plain `<script>` and appeared in `curl` output, while `SchemaBlogPost` emitted
`BlogPosting` through `next/script` on the same page and did not.

Google executes JavaScript and would eventually see either. Most of the fetchers
behind LLM answers do not, so anything rendered through `next/script` is
invisible to them.

**Rule: every `application/ld+json` block in this project uses a plain
`<script>` tag with `suppressHydrationWarning`.** Do not "modernise" these back
to `next/script`.

---

## 5. Identified Issues

### A — Dead code / orphaned vertical — RESOLVED

The real-estate queries, types and schemas were already gone when checked on
2026-09-15 (zero documents of those types in the dataset). The same sweep
removed six more modules nothing imported: `FeaturesBlock`, `SchemaFaq`,
`NavLink`, `src/lib/consent.ts`, and the unregistered `howWeWorkBlock` and
`projectsSectionBlock` schemas (zero documents each). `PropertyIntro` is still
used by the catch-all route and stays.

### B — Duplicate portfolio query functions — partly resolved

The dead `getAllPortfoliosByLang` is gone. Two remain, both in use:
`getAllPortfolioByLang` (sitemap) and `getPortfolioItemsByLang` (portfolio
page). Merging them is optional tidying, not a bug.

### C — Missing revalidation on header and footer queries — RESOLVED

Header and footer already carry `{ next: { revalidate: 60 } }`. The last
per-page query without it, `getFormStandardDocumentByLang`, got the same option
on 2026-09-14.

### D — `urlFor(source: any)` — weak typing

The image URL builder accepts `any`. Should be typed as `SanityImageSource` from `@sanity/image-url/lib/types/types`.

### E — Images bypassing optimisation — RESOLVED 2026-09-15, see §12

Every `next/image` now goes through a Sanity loader; the remaining raw `<img>`
tags are deliberate (§12).

### F — Dead import in homepage page — RESOLVED

The unused `homepage` schema import is no longer in `src/app/[lang]/page.tsx`.

### G — Dependencies — RESOLVED 2026-09-15

Removed because nothing imports them: `negotiator`,
`@formatjs/intl-localematcher`, `@types/negotiator`, `react-select`,
`react-use`, `swr`. (`locomotive-scroll`, `node-fetch`, `@studio-freight/lenis`,
`node-cron`, `xml2js` were already gone.)

**Keep, despite looking unused in `src/`:**
- `styled-components` — a peer dependency of Sanity Studio and its plugins.
  Removing it breaks `/admin`.
- `dotenv`, `csv-parse` — used by the one-off scripts in `scripts/`.
- `react-is`, `sass`, `postcss`, `eslint-config-next`, all `@types/*` — peers,
  build tooling or type packages, never imported directly.

**Trap found doing this:** `react-use` was silently supplying `@types/js-cookie`.
Removing it made `tsc` fail, which on Vercel means a failed build. The types
and `@sanity/image-url` (imported directly, previously only arriving through
`next-sanity`) are now declared in `package.json`. After removing any package,
run `npx tsc --noEmit` before pushing.

`react-tsparticles` + `tsparticles` + `tsparticles-engine` are still v2; an
upgrade to v3 changes the API and is its own task.

### H — `Math.random()` shuffle in a cached server function

`getThreeProjectsBySameCity` (dead code, see A) shuffles results with `Math.random()` after fetching. Because this runs inside `client.fetch()` with ISR, the order is fixed per cache entry, not actually random. Even if the function were alive, this pattern defeats deterministic page output.

### I — Russian-language code comments

Comments in `sanity.utils.ts`, `sanity.client.ts`, and several components are in Russian (e.g., `// строим дерево`, `// Экспорт настроек для Node.js`). Not a bug, but creates friction for non-Russian collaborators.

### J — Non-standard 404 for unknown single pages — RESOLVED

`[...slug]/page.tsx` calls `notFound()` and unknown single pages return a real
404 (verified 2026-09-14). Unknown **blog** and **portfolio** slugs still return
200: those routes have a `loading.tsx` Suspense boundary, so the response is
already streaming when `notFound()` runs. That is deliberate and mitigated —
`generateMetadata` emits `noindex, nofollow` with no canonical for a missing
post. Do not "fix" it by removing the check; the status can only change if the
loading boundary goes.

### K — `api/email` accepted any request body — RESOLVED 2026-09-15

The route only ever mailed the owner, so it could not spam third parties; the
risk was flooding the inbox and tripping Hostinger's sending limits, which
would stop real enquiries. `src/lib/formGuard/server.ts` now checks, in order:

1. `Origin` must match the request host (keeps localhost and Vercel previews working).
2. Body under 20 KB, valid JSON.
3. Honeypot field `fax_extension_2` filled → **200 with no mail** (a bot learns nothing).
4. `fillMs` (time since the form mounted) at least 1.5 s → otherwise 400.
5. Rate limit: 5 per IP and 40 per instance per 10 minutes.
6. Field lengths, email shape, consent `true`.

The three forms (`FormFull`, `FormMinimalBlockComponent`,
`FormFullBlockComponent`) add the fields through `useFormGuard()`. Any new form
posting to `/api/email` must use the hook too, or every submission is rejected.

- **A missing `fillMs` is a 400, never a silent 200.** A visitor on a page
  bundle from before a deploy must see the error with the email fallback, not a
  false "sent".
- **Do not rename the honeypot to anything autofill recognises** (`website`,
  `url`, `company`…): browsers would fill it and real leads would vanish silently.
- The rate limit is per serverless instance, not global. If a distributed flood
  ever gets through, add Cloudflare Turnstile (needs keys from the owner).
- SMTP errors are logged, not returned.

### L — `scripts/capture-portfolio-screenshots.cjs` silently skips text-only website fields

The script only captures a portfolio case whose `keyFeatures.website.type === "link"`. Several real cases (confirmed: Felgilab, Cyprus VIP Estates) store their site as `type: "text"` (a plain label like `"felgilab.pl"`, not a clickable URL) — the script has no way to derive a fetchable URL from that, so it drops straight into the "skipped, no URL" bucket with no warning that a real, working website was right there as text. Found while using the script for portfolio-cover verification (2026-08-25): only 2 of 12 EN portfolio cases have `type: "link"`, so in practice this script currently captures a sixth of the archive and silently no-ops on the rest. Not fixed — reported for the owner to decide (e.g. treat `text` as a URL when it looks like a bare domain, or require a real link field before capture).

A second, nastier failure in the same script: `dismissCookieBanner`'s generic selector list (`text=Accept`, `text=OK`, `text=Got it`, etc.) is tried blind against the whole page, with no check that a cookie banner is even present. On a site with no consent banner, one of those generic selectors can coincidentally match unrelated page text — a button, a nav item, anything — and click it, changing page state before the screenshot is taken. Caught this by accident building the Orzeł Realty portfolio cover (2026-08-26): a capture of `orzel-realty.pl`'s homepage using this selector list landed on a different hero state entirely (a single-CTA living-room image) than the page's actual default (a two-button "renovation vs. investment" split) — the misclick almost certainly hit some unrelated text matching one of the generic patterns. The capture itself succeeded, the screenshot looked completely normal, and nothing in the script's output flagged anything wrong. Unlike the `type: "text"` skip above (which is at least visible as a "skipped" line), this failure is silent — the only way to catch it is to look at the actual output image and know what the page is supposed to show. Worth a real fix (check for a specific known consent-banner selector, or verify page state is unchanged after the click) before trusting this script's captures unattended.

### M — Homepage's "4 latest" portfolio cases are selected by `_id`, not recency — RESOLVED 2026-09-14

The sort now uses `publishedAt`; the homepage shows the four most recent cases.
The history below explains why `_publishedAt` must not come back.

`getLastFourPortfolioByLang` (`src/sanity/sanity.utils.ts`, feeds both the homepage's Portfolio section and `/about`'s `portfolioBlock`) sorts on `order(_publishedAt desc)` — Sanity's own system field, set only when a document goes through Studio's Publish action. Every portfolio document in this dataset was created directly via the API (same pattern this whole project uses), so `_publishedAt` is `null` on all of them. With the sort key null everywhere, GROQ falls back to a stable secondary order that — confirmed empirically against the live homepage on 2026-08-26 — is ascending `_id`. The result: the "4 latest" cases shown to every visitor are actually just the 4 with the lowest document IDs, which has no relationship to when the work was actually done or published. Publishing a new case doesn't reliably rotate the block either — a new doc's `_id` can sort anywhere in that ordering, so it may never surface there no matter how recent or good the work is (confirmed: the new Orzeł Realty case, `_id` starting with `p`, sorts after all 12 existing UUID-style ids and would not appear).

The archive page (`getPortfolioItemsByLang`) does **not** have this problem — it already sorts on the document's own `publishedAt` field, which every case has populated with a real, sensible value (verified across all 13 cases, none null). The fix for the homepage/`/about` block is a one-line query change (`_publishedAt` → `publishedAt` in that one `order()` clause) with no data cleanup needed. Not fixed as part of this task — reported for the owner to decide, along with whether curated selection (reviving `portfolioBlock.portfolioItems`, an already-built same-locale reference array that's fetched and silently ignored by `PortfolioBlockComponent.tsx`) would serve better than any automatic ordering for a homepage block that's really a sales decision. Note `portfolioBlock.portfolioItems` only covers `/about`'s block — the homepage's own `portfolioSection` (`homepage.ts`) has no equivalent field at all (just `pretitle`/`title`/`subtitle`); giving the homepage the same curation would mean adding a new field there, not just wiring up an existing one.

---

## 6. What NOT to Touch

These are deliberate, working solutions that look unusual but must stay:

### The `[...slug]` static path tree-builder
`generateStaticParams` in `src/app/[lang]/[...slug]/page.tsx` (lines 81–122) iterates parent-child documents in multiple passes to build correct nested slug arrays. The `while(added)` loop is intentional BFS. Do not replace it with a simpler flat approach — it breaks nested service routes (e.g., `services/web/frontend`).

### `dynamicParams = false` + `revalidate` on `[...slug]`
These work together: pages are generated at build time and ISR-refreshed. Removing `dynamicParams = false` would allow Next.js to attempt server-rendering unknown slugs, bypassing the content check. Removing `revalidate` would freeze pages at build-time permanently.

**The value is 86400, not 60, since 2026-09-15.** Sixty seconds, together with
uncached authenticated fetches, exceeded Vercel's free ISR-write and CPU limits
with almost no human traffic. Do not lower it to make edits appear faster:
edits already appear on publish through the webhook. Full story in §13.

### Sanity API CDN is off in production
It used to be on (`useCdn = NODE_ENV === "production"`). Now Next's data cache
sits in front of every query, so Sanity is only called when a page regenerates,
and regeneration happens right after a publish, which is exactly when the API
CDN can still return the old version and freeze it into the cache for a day.
Keep `useCdn: false` in the site client.

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

### Hardcoded content in `landingCtaBlock`, `benefitsBlock`, `workProcessBlock`, and `portfolioBlock`'s auto-fetch

Four singlepage builder blocks look editable in Sanity Studio but aren't, and this is **intentional**, not a bug:

- `landingCtaBlock` (44 uses) — the component only takes `lang`; all copy (title, description, button label) and the panel photo are hardcoded per-language inside `LandingCtaBlock.tsx`. The schema's `title` field is never read.
- `benefitsBlock` (44 uses) — the schema has a real `benefits[]` array (counting number/sign/title/description), but `BenefitsBlock.tsx` ignores it entirely and renders a hardcoded 4-stat array per language instead.
- `workProcessBlock` (38 uses) — the schema only has `title` (no field for steps at all); the 6 timeline steps and their copy are hardcoded per language in `WorkProcessBlockComponent.tsx`.
- `portfolioBlock` (3 uses, /about only) — the schema's `portfolioItems[]` reference array is fetched but never read; the component always shows the 4 most recent portfolio docs via `getLastFourPortfolioByLang`, same as the homepage's `Portfolio.tsx`.

**Why:** single source of truth across ~44 pages per block, without needing to keep dozens of documents in sync. **Do not** wire these Sanity fields through to "fix" this without an explicit request from the owner — editing their copy today means editing the component, not Studio. (Full block-by-block audit: `drafts/singlepage-block-audit.md`.)

### `reviewsFullBlock` with empty fields = homepage reviews, single source of truth

Unlike the four blocks above, `reviewsFullBlock`'s own Sanity fields (`pretitle`, `title`, `subtitle`, `reviews[]`) ARE read and rendered when present — this is a genuine content-optional fallback, not hardcoding. `getSinglePageByLang` (`src/sanity/sanity.utils.ts`) checks each `reviewsFullBlock` instance after fetching: if `reviews` is empty, it fetches the current locale's `homepage` `reviewsSection` and substitutes its `pretitle`/`title`/`subtitle`/`reviews` wholesale (mapping `reviewText` → the block's own `text` field). A block with its own reviews (e.g. the `/seo-for-law-firms` etalon) is never touched by the fallback. This means most landing pages can insert an empty `reviewsFullBlock` and automatically show the same real testimonials as the homepage, kept in sync from one place, while pages that need different testimonials can still fill in their own.

---

## 7. Summary & Improvement Priorities

**Overall health:** The codebase is production-quality for its primary purpose — a multilingual portfolio+blog site with Sanity CMS. The App Router usage is correct, ISR is in place, SEO metadata is thorough, and the server/client component split is well-considered. The main liabilities are accumulated dead code from a past real-estate phase and a few low-effort consistency gaps.

### Improvement list — status 2026-09-15

All five original items and both bonus items are done (see §5 C, A, B, E, G,
J, F). What remains open: typing `urlFor` (#D), merging the two portfolio
queries (#B, optional), the `tsparticles` v3 upgrade (#G), and the screenshot
script bugs (#L).

## 8. IndexNow Integration

Added 2026. Notifies Bing, Yandex, and other IndexNow participants that a
`singlepage`, `blog`, or `portfolio` document was published or changed — the
part of the index that feeds AI-assistant answers, since Google does not
participate in IndexNow. **It notifies; it does not guarantee indexation and
has no effect on rankings.** Don't let any future doc, comment, or copy near
this feature imply otherwise.

### Pieces

| Piece | Location |
|---|---|
| Key file | `src/app/indexnow-key.txt/route.ts` — serves `INDEXNOW_KEY` as plain text from an env var, nothing else |
| URL resolver | `src/lib/indexnow/resolveUrls.ts` — reuses `getAllPathsForLang` (the same nested-path resolver as the sitemap, `generateStaticParams`, and the page's own canonical URL) rather than a new URL builder |
| Submission helper | `src/lib/indexnow/submit.ts` — dedupes, batches at 10,000 URLs/request, logs the documented response code (200/202/400/403/422/429) |
| Webhook endpoint | `src/app/api/indexnow/webhook/route.ts` — validates a shared secret, **calls `revalidateTag("sanity")` for any document type** (§13), then resolves affected URLs and submits |
| One-off bulk script | `scripts/indexnow-bulk-submit.cjs` — sources its URL list from the live `/sitemap.xml`, not a reimplementation; run once by hand, not scheduled |

### Env vars

`INDEXNOW_KEY` and `INDEXNOW_WEBHOOK_SECRET` live in `.env.local` (gitignored)
and must be mirrored into Vercel's project env vars for production. Neither
value should ever appear in a report, log line, or commit message — treat
both like any other credential.

### Why the key file is a route handler, not a static file — and why it's at the root

The IndexNow standard is a static `<key>.txt` at the site root. This project
put it behind a route handler instead, for two reasons: (1)
`public/images/landing-cta-photo.jpg` was deleted wholesale by an unrelated
"cleanup" commit in August 2026 and had to be manually restored — `public/`
has already lost a file it needed once; (2) the standard naming convention
puts the raw key into a committed filename permanently, in git history, which
a route reading from an env var avoids entirely. Every submission includes
`keyLocation` pointing at it, per the IndexNow spec's "Option 2" verification.

**It must be at the site root, not nested under `/api/`.** The first version
of this route lived at `/api/indexnow/key.txt` and every real submission
came back 422. That wasn't a caching fluke — IndexNow's Option 2 scopes
validation to the key file's own path prefix ("a key file at `/catalog/`
can only validate URLs under `/catalog/`"). A key nested under
`/api/indexnow/` can never vouch for `/services/...`, `/blog/...`,
`/pl/...`, or any other real page. It has to sit at a path that's a prefix
of everything being submitted — for a whole-site claim, that's only the
root. The filename itself (`indexnow-key.txt`, not the key value) is still
free to be anything; only the location was ever the constraint.

### The noindex substitute — deliberate, not a gap

There is no per-document `noindex` field anywhere in this schema. Rather than
add one or skip the check, `resolveDocumentUrls` treats "does this locale
resolve to a real path via `getAllPathsForLang`" as the reachability guard: a
document that's unpublished, orphaned, or has a broken parent chain
structurally cannot produce a URL, so nothing unreachable can ever be
submitted. This is stronger than a flag, because it can't drift out of sync
with what's actually live. **If a real `noindex` field is ever added to the
schema, that's where the check belongs** — inside `resolveDocumentUrls`,
before a URL is added to the result set.

### Webhook configuration (done outside this repo, in manage.sanity.io)

- Trigger on `singlepage`, `blog`, `portfolio`; filter:
  `!(_id in path("drafts.**"))`. Without this filter every autosave fires a
  submission and the account looks like a spammer within a day.
- Projection sent as the payload body: `{ _id, _type, language, slug }`.
- Custom header: `Authorization: Bearer <INDEXNOW_WEBHOOK_SECRET>`.

This is also the first authenticated API route in the codebase — the
header-plus-env-var shared-secret pattern in `isAuthorized()`
(`src/app/api/indexnow/webhook/route.ts`) is written to be reusable by future
webhooks. It does not fix `api/email`'s lack of auth (#K) — that's a separate,
pre-existing gap this change happened to surface, not touch.

### Verifying a submission actually worked — check two layers, not one

`POST /api/indexnow/webhook` returning 200 means our own route accepted the
request, resolved URLs, and forwarded them. **It says nothing about whether
IndexNow accepted them.** That's a general pattern, not just an IndexNow
quirk: a success code from your own layer only confirms your own layer;
whatever's beyond it needs its own check. The two are separate here on
purpose — our 200 body carries a `results` array with IndexNow's *own*
response code inside it:

```json
{"submittedUrls": [...], "results": [{"status": 202, "urlCount": 2}]}
```

Read `results[].status`, not the HTTP status of the call to our endpoint.
This is exactly the gap that produced a false "it's working" earlier: the
webhook returned 200 while IndexNow itself was rejecting every URL with 422
(see the path-prefix bug above) — the 200 was real, it just wasn't the
check that mattered. Confirming the mechanism works means confirming the
*inner* status is 200/202, and separately, in Bing Webmaster Tools after a
day or two, that submitted URLs aren't coming back rejected.

## 9. Portfolio Cover Mockup Generator

`scripts/build-portfolio-cover.py` composites site screenshots into the
device mockup (desktop/laptop/tablet/phone) used on portfolio covers, using
the two prepared layers in `scripts/images/` (`mockup_back.png`,
`mockup_front.png`) and a per-case JSON config in `scripts/cover-configs/`.

**This is the only Python in the project — everything else here is
Node/Next.js.** It needs a real Python install (not the Windows Store stub
that ships on PATH by default) and Pillow, tracked in
`scripts/requirements.txt` (`python -m pip install -r
scripts/requirements.txt`). If the script errors on `import PIL` or `python`
isn't found at all, that's an environment gap, not a broken script — install
Python and the requirements file before assuming something's wrong with the
code itself.

## Build policy

- **NEVER run `npm run build` locally. No exceptions.** Vercel builds
  on every push; a local build buys nothing and actively breaks things.
  Owner's instruction, 2026-09-12.
- Why it breaks things: `next build` and `next dev` share the `.next`
  directory. Running a build while the dev server is up overwrites the
  chunks the dev server is serving, and every route then 500s with
  `MODULE_NOT_FOUND` from `webpack-runtime.js`. Happened 2026-09-12.
  Recovery is to stop the dev server, delete `.next`, and restart it.
- This supersedes an earlier rule that allowed a local build when the
  session touched schemas, types, or component structure. It does not.
- Use `next dev` for all in-session checks, including Playwright 
  screenshots.
- For type safety without a build, run `npx tsc --noEmit`. It is safe
  to run at any time and does not touch `.next`.
- Never leave orphaned node processes on port 3000 — always kill 
  the server you started.
- Verify against localhost, NOT against www.bandziuk.com. Every 
  request to the live site burns Vercel quota, so status-code, 
  canonical, hreflang and redirect checks are run against the dev 
  server on port 3000. Hitting production is the owner's call, and 
  only when the question genuinely cannot be answered locally 
  (e.g. confirming a deploy actually shipped) — then it is a 
  handful of requests, not a sweep. Owner's instruction, 
  2026-09-06.

## Git & deploy policy

- Do NOT commit and do NOT push unless the owner explicitly asks 
  in the current session. Leave all changes uncommitted in the 
  working tree.
- When the owner asks to commit: one commit for the session with a 
  descriptive message (or the structure the owner specifies).
- Pushing deploys to production via Vercel — deploy timing is 
  always the owner's call. Never push as a side effect of 
  "finishing" a task.
- At the end of each session, include a short summary of the 
  uncommitted changes (files touched, one line what/why) so the 
  owner can decide when to commit and push.
- Reading repo state: ALWAYS use `git --no-optional-locks` for 
  inspection (`status`, `diff`, `log`). Plain `git status` and 
  `git diff` refresh the index and take `.git/index.lock` — and an 
  agent shell that cannot delete files (the Cowork device shell 
  can't) leaves that lock behind, after which every git command 
  the owner runs on Windows dies with "Unable to create 
  .git/index.lock: File exists". Happened 2026-09-06; the fix was 
  renaming the stale lock, since it couldn't be deleted.
- Never run mutating git commands (`add`, `commit`, `checkout`, 
  `stash`, `restore`) from an agent shell that lacks delete 
  permission: they all take the same lock and can strand it.

## Content policy

- Before proposing a NEW page for a query, check whether existing 
  pages already cover that topic — read their headings and body, 
  don't just check whether a URL with that slug exists. Absence of 
  a URL is not absence of coverage. Two pages answering one query 
  is the cannibalisation this site already suffers from 
  (`/pricing` vs the RU cost article: 9 697 impressions, 1 click).
  Happened 2026-09-06: a PL article on audit pricing was proposed 
  and dropped after finding the topic already covered by an H2 on 
  the service page AND a full H2 section in the SEO-cost article.
- When a page's headings promise an answer, the answer must be on 
  the page. Found the same day: the PL audit service page carries 
  the heading "Ile kosztuje audyt SEO?" and contains no price at 
  all — the figure lives only on /pl/cennik. That loses enquiries, 
  not rankings.

- Keywords belong in subheadings, not only in body text. H2 and H3
  are the strongest on-page signal after the title, and they are
  what assistants quote when summarising a page. Generic headings
  ("The fix", "What changed", "Что дальше") waste that slot — each
  one should carry the term the section is about. Stated by the
  owner 2026-09-08 after a draft came back with 5 of 7 H2s carrying
  no target term.

## 10. Entity identity graph (`src/lib/schema/identity.ts`)

Added 2026-09-12. **One file defines who this site is about, and everything
else references it by `@id`.** Do not declare an inline `Person` or
`Organization` anywhere else — that is the exact bug this replaced.

### Why it exists

A SERP check on `"Aliaksandr Bandziuk"` (Poland, depth 30) returned at least
five different entities sharing the surname: a rower (`worldrowing.com`), a
transport company (`DP-TRANS.PL`, three separate registry domains), a news item
about a namesake's detention, `Tatiana Bandziuk`, and — at position 7 — a
**different** developer's LinkedIn, while the site owner's own LinkedIn was
absent from the top 20. There is no knowledge panel for the name.

With the entity that ambiguous, an assistant asked "who should I hire" cannot
tell which Bandziuk builds websites, so it names someone whose entity is clean.
This is the best available explanation for the measured result: **named in 1 of
141 AI answers** (Google AI Mode 0/47, ChatGPT 0/47, Perplexity 1/47, plus 4
source-only citations). Full method and data: `drafts/ai-visibility-results-2026-09.md`.

### Shape

| Node | `@id` | Notes |
|---|---|---|
| `Person` | `/#person` | `jobTitle`, `knowsAbout`, `knowsLanguage`, `sameAs` |
| `ProfessionalService` | `/#organization` | `areaServed`, `logo`, `founder` → Person |
| `WebSite` | `/#website` | `publisher` → org |

Emitted once per page by `SchemaIdentity` from `[lang]/layout.tsx`.

### Rules

- **`SAME_AS` is the entity-merge signal.** Every new directory or social
  profile goes in that array and nowhere else. An incomplete list is the most
  common reason disambiguation fails.
- `provider`, `author`, `publisher`, `mainEntity` reference `personRef()` /
  `orgRef()`. Never restate the object.
- A blog post by a guest author (name ≠ `PERSON_NAME`) still gets its own
  inline `Person`. Only the owner's posts reference the shared node.
- **Never emit a second node under an `@id` the identity graph owns.**
  `SchemaPortfolio` used to declare its own `WebSite` at `/#website` with
  different content, putting two conflicting definitions of one entity on the
  same page.
- `FAQPage` comes from `Accordion`, co-located with the visible questions.
  `SchemaBlogPost` must not also emit one — that produced two `FAQPage` blocks
  per article.

### Google Business Profile: a secondary source, not zero

This section went through two wrong versions, and both mistakes are worth
remembering.

1. The first AI-visibility draft claimed ChatGPT cites GBP listings, because it
   linked to Google Maps in 23 of 47 answers.
2. Checking the link shapes seemed to kill that: all 507 Maps links are
   `maps/search/<name>,+<city>`, constructed queries, and real listing links
   (`maps/place/`) number **zero**. The conclusion drawn — "a listing plays no
   part" — was published in the study.
3. **Corrected 2026-09-14.** The answer *text* tells a different story. In 3 of
   47 ChatGPT answers, all to location-bound questions (law-firm SEO in Warsaw,
   a developer in Cyprus, clinics targeting German patients), ChatGPT quoted
   listing data: `Open now · Marketing agency · 4.8 (28 reviews)`. The first
   run of the AI checker showed the same for a Warsaw query. The study was
   corrected in all three locales with a visible note.

What holds: a listing is not the main route into an answer (3 in 47), but for
city-bound questions it is read, and ratings and review counts are what gets
quoted. The owner's GBP verification was rejected (home address); re-applying
as a service-area business is worth doing, not optional.

**Lesson:** a link's shape shows what a model links to, not everything it
reads. Check the text before concluding a source is unused.

## 11. Free AI visibility checker (`/tools/ai-visibility-checker`)

Added 2026-09-14. A visitor enters a company, website, what they sell and an
email; the server asks ChatGPT and Perplexity three questions each through
DataForSEO and returns a report: named when a buyer asks who to hire, recognised
when asked about the company, own site cited.

### Pieces

| Piece | Location |
|---|---|
| Page (EN/PL/RU, same slug) | `src/app/[lang]/tools/ai-visibility-checker/page.tsx` |
| Form and report (client) | `src/app/components/tools/AiVisibilityChecker/` — all copy in `copy.ts` |
| API | `src/app/api/ai-check/route.ts` |
| Logic | `src/lib/aiCheck/` — `config`, `prompts`, `engines`, `analyze`, `store`, `notify` |
| Studio record | `aiVisibilityCheck` schema, read-only, hidden from "create new" |

### It is off by default, and that is the safety mechanism

Every check spends real money. The API returns 503 and the form renders
disabled unless **all** of these are set: `AI_CHECK_ENABLED=true`,
`DATAFORSEO_API_LOGIN`, `DATAFORSEO_API_PASSWORD`. While off, the page is
`noindex`. On Vercel, env changes need a redeploy; the page is static and reads
the flag at build time.

Optional: `AI_CHECK_DAILY_LIMIT` (default 20 reports / 24 h, all visitors),
`AI_CHECK_PER_EMAIL_LIMIT` (2), `AI_CHECK_PER_IP_LIMIT` (3), `AI_CHECK_IP_SALT`
(falls back to the Sanity token). Owner notification reuses `EMAIL_USER` /
`EMAIL_PASSWORD`.

**Putting DataForSEO credentials into Vercel is the owner's decision.** They
asked on 2026-09-11 not to mirror them. A sub-account or a key with a hard
budget cap is the safer way to reverse that.

### Cost, measured

One report = 6 live answers, **$0.107** in the end-to-end test (ChatGPT live
≈ $0.03 per answer, Perplexity ≈ $0.006). The default daily limit caps spend at
about $2.14 a day. ChatGPT's `task_post` is a third of the price but
asynchronous, unusable for a visitor waiting on the page.

### Rules

- Limits are counted from `aiVisibilityCheck` documents in the last 24 h, read
  through a **non-CDN** client. The record is created before any engine call,
  so parallel requests see each other. Do not edit or duplicate these
  documents in Studio; that changes who gets blocked.
- "Named" counts **only** on the recommendation question. The other two prompts
  contain the company name and assistants repeat it even when they found
  nothing, so counting them reports visibility that does not exist.
- IPs are stored only as a salted SHA-256 hash.
- Protection today is a honeypot, consent, validation and the limits. A captcha
  (e.g. Cloudflare Turnstile) is recommended before promoting the page; it
  needs keys from the owner.

## 12. Images are resized by Sanity, not Vercel

Added 2026-09-15 at the owner's request, to stop spending Vercel's image
optimisation quota. `next.config.mjs` sets `images.loader: 'custom'` with
`src/lib/images/sanityLoader.ts`, so **no image goes through `/_next/image`**.

### How it works

- `cdn.sanity.io/images/...` URLs get `w`, `q`, `auto=format` (WebP or AVIF by
  browser support) and `fit=max` (never upscales). Crop and hotspot params that
  `urlFor()` added are kept; a baked-in `.width()` is overridden by the srcset.
- Everything else is returned untouched: Sanity `files/` URLs (not
  transformable), local `/public` paths (`?w=` appended only so srcset entries
  differ), other hosts.
- SVGs pass through unchanged: Sanity serves an SVG as SVG even with params.

Measured on the dev server, five pages at two widths: image weight
**7.9 MB → 3.7 MB**; the homepage on mobile **1.56 MB → 0.28 MB**. The single
biggest cause was three homepage icons marked `unoptimized` (up to 357 KB each,
shown at ~70 px; 11 KB now).

### Rules

- **Do not add `unoptimized` to a Sanity raster image.** It skips the loader and
  ships the original file. The one remaining use is a 2 KB `files/` PNG.
- **`fill` images need a real `sizes`**, or the browser picks a
  viewport-wide candidate for a small card.
- **Do not switch back to the default loader** without the owner: that returns
  every image to Vercel's quota.
- A picture uploaded to Sanity as a *file* cannot be resized. Re-upload it as an
  *image* asset if it needs optimising (done for the review avatar placeholder).
- Deliberate raw `<img>` tags: the footer world map in `Contacts.tsx` (indexed
  PNG; WebP is larger, 99 KB vs 73 KB, so it stays the original, lazy-loaded
  with dimensions) and `files/[slug]/page.tsx` (arbitrary uploaded files).
- Sanity's own CDN bandwidth now carries the image traffic instead. It is a
  different, larger allowance than Vercel's transformation count, but it is not
  unlimited.

## 13. Caching: a day by default, refreshed on publish

Changed 2026-09-15 after Vercel's free limits were exceeded with almost no
human traffic: **ISR Writes 254K / 200K** and **Fluid Active CPU 4h33m / 4h**.

### What was wrong

Production response headers showed two separate problems:

| Route | Header before | Meaning |
|---|---|---|
| `/`, `/[lang]`, blog posts, `/portfolio` | `private, no-store`, `X-Vercel-Cache: MISS` on every request | rendered from scratch for every visitor and every bot |
| `[...slug]` service pages | `STALE` / `HIT` | cached, but regenerated for any request more than 60 s after the last one |

The cause of the first: the Sanity client sends an `Authorization` header (the
token is required, §3), and **Next.js 14 does not cache a fetch with an
Authorization header unless the fetch or the segment sets an explicit cache
lifetime**. One such fetch makes the whole route dynamic. `[...slug]` escaped
only because it exported `revalidate = 60` at segment level. The second was
that 60-second lifetime itself: every bot pass over ~500 pages rewrote them.

### What it is now

- `src/sanity/sanity.client.ts` wraps `fetch`: every query gets
  `next: { revalidate: 86400, tags: ["sanity"] }`. `{ cache: "no-store" }` is
  passed through untouched, for the webhook's own URL lookup.
- `[lang]/layout.tsx` and `[...slug]/page.tsx` export `revalidate = 86400`.
  These must be literals; keep them equal to `SANITY_REVALIDATE_SECONDS`.
- `/api/indexnow/webhook` calls `revalidateTag("sanity")` for **every** document
  type, before the IndexNow logic. A publish refreshes the whole site; pages then
  regenerate lazily, only when someone requests them.
- `useCdn: false` (§6).
- `robots.ts` disallows SEO-tool crawlers (Ahrefs, Semrush, MJ12, DotBot,
  DataForSeoBot and others). Search engines, AI crawlers and link-preview bots
  (`facebookexternalhit`, LinkedInBot, WhatsApp) stay allowed on purpose.

Verified on the dev server: fetch-cache entries carry the tag and the 86400
lifetime, a repeat request leaves them untouched, and a webhook call makes the
next request refetch from Sanity.

### Rules

- **Never call Sanity with the raw `createClient` result from a page or
  component.** Always go through `client` from `sanity.client.ts`, or the route
  goes dynamic again. The only exceptions are scripts and `src/lib/aiCheck`,
  which need uncached writes.
- **Content edited through the API or Studio appears on publish.** If it does
  not, the webhook did not fire. Refresh by hand:
  `POST /api/indexnow/webhook`, header `Authorization: Bearer <INDEXNOW_WEBHOOK_SECRET>`,
  body `{"_id":"manual","_type":"manual"}`.
- The webhook in manage.sanity.io triggers on `singlepage`, `blog`, `portfolio`
  only. Edits to `homepage`, `header`, `footer`, `formStandardDocument`,
  `blogPage` or `portfolioPage` wait up to a day, or need the manual call above.
  Widening the webhook filter fixes that (keep excluding drafts and
  `aiVisibilityCheck`).
- After a deploy, confirm with a handful of requests that `/`, a blog post and
  `/portfolio` answer `X-Vercel-Cache: HIT` or `STALE` on a repeat request, not
  `MISS` with `no-store`.
