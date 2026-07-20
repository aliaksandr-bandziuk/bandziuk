# Singlepage Block System Audit

> Research only — nothing in the codebase or Sanity was changed.
> Screenshots: `audit-shots/blocks/*.png` and `audit-shots/about-*.png` in this session's scratchpad.

---

## 0. How the builder works (context for everything below)

- `singlepage` (schema: `src/sanity/schemaTypes/singlepage.ts`) is a generic document type: `title`, `slug`, `seo`, `excerpt`, `previewImage`, `allowIntroBlock` (toggles the hero), `contentBlocks` (array of 24 possible block types), `parentPage` (self-reference, builds nested URLs), `pageType` (`page` / `service` / `servicesIndex`).
- Rendered by `src/app/[lang]/[...slug]/page.tsx`. The hero (`PropertyIntro`) renders only if `previewImage && allowIntroBlock`. `pageType === "servicesIndex"` additionally renders `ServiceList`. Everything else comes from `contentBlocks.map(renderContentBlock)`, a big `switch` on `block._type`.
- **Not every schema-listed block type has a working `case` in that switch.** `accordionBlock`, `contactFullBlock`, `buttonBlock`, `imageBulletsBlock` are explicitly commented out; `teamBlock` and `bulletsBlock` aren't mentioned at all. If an editor ever added one of these six in Studio, the page would render literally `<p>Unsupported block type</p>` in that slot — a visibly broken page section, 200 status, no error. None currently do (see §2), but Studio's schema doesn't stop an editor from adding one.
- The blog post builder (`[lang]/blog/[slug]/page.tsx`) is a **separate, smaller** switch with its own subset (7 types) — it does handle `accordionBlock` (via `AccordionContainer`), which singlepage does not.

---

## 1. Block inventory

| # | Schema name | Title | Key fields | Localized? | Component(s) | Renders in singlepage switch? | One-line description |
|---|---|---|---|---|---|---|---|
| 1 | `textContent` | Text Content Block | `content` (portable text via `contentBlock`), bg/padding/margin/align/textColor strings | content is per-doc (doc = 1 locale) | `TextContentComponent` → `RichText` | ✅ | Freeform rich-text with optional bg color and alignment; the workhorse block (199 uses) |
| 2 | `doubleTextBlock` | Double Text Block | `doubleTextBlockTitle`, `leftContent`/`rightContent` (each: type text/image, blockContent or image), `isDivider`, margins/paddings, `verticalAlign` | per-doc | `DoubleTextBlockComponent` | ✅ | Two-column text/image layout with optional vertical divider |
| 3 | `accordionBlock` | Accordion Block | `items[]` (question string, answer portable text) | per-doc | `AccordionBlockComponent` (→ `Accordion`/`AccordionItem`) | ❌ commented out | Plain accordion (no "FAQ" framing) — dead in singlepage, live in blog |
| 4 | `contactFullBlock` | Contact Full Block | `title`, `description`, `contacts[]` (icon/title/label/type), `form` (ref) | per-doc | *(no component exists)* | ❌ commented out | Never built — schema-only |
| 5 | `faqBlock` | FAQ Block | `title`, `faq` (nested `accordionBlock`), margins | per-doc | `FaqHomepage` (wraps `AccordionContainer`) | ✅ | The accordion, with a heading — reuses the homepage FAQ component |
| 6 | `teamBlock` | Team Block | `title`, `members[]` (image, name, position, description) | per-doc | *(no component exists)* | ❌ not in switch | Never built — schema-only |
| 7 | `locationBlock` | Location Block | `title`, `location` (geopoint, required), `countryAndCity`, `timezone`, `workingHours`, margins | per-doc | `LocationBlockComponent` (+ `MapContact`, `CurrentTime`) | ✅ | Map + 3 info cards + live clock — used only on /contacts |
| 8 | `imageFullBlock` | Image Full Block | `title`, `imageMain` (picture, aspectRatio: 10:5/10:4/1:1), *description overlay fields fully commented out* | per-doc | `ImageFullBlockComponent` | ✅ | Full-width image divider; the caption-overlay feature is dead code (never uncommented) |
| 9 | `buttonBlock` | Button Block | `title`, `buttonText`, `justifyContent`, `alignItems`, margins | per-doc | *(no component; `ButtonBlockComponent` import is commented out)* | ❌ commented out | Never built — schema-only |
| 10 | `imageBulletsBlock` | Image Bullets Block | `title`, `image`, `bullets[]` (title, description) | per-doc | *(no component exists)* | ❌ commented out | Never built — schema-only |
| 11 | `benefitsBlock` | Benefits Block | `title`, `benefits[]` (counting.conuntNumber, counting.sign, title, description) | per-doc | `BenefitsBlock` | ✅ | 4-stat counter row — **but see §5: the component ignores all Sanity fields and hardcodes copy per language** |
| 12 | `reviewsFullBlock` | Reviews Full Block | `title`, `reviews[]` (name, text portable text, image) | per-doc | `ReviewsFullBlockComponent` | ✅ (case exists) | Testimonial list — component works, just never used in any document (0/80) |
| 13 | `formMinimalBlock` | Form Minimal Block | `title`, `form` (ref to `formStandardDocument`), `buttonText`, margins | per-doc | `FormMinimalBlockComponent` | ✅ | Compact lead form (name + email) |
| 14 | `formFullBlock` | Form Full Block | `title`, `form` (ref), `buttonText`, margins | per-doc | `FormFullBlockComponent` | ✅ | Full lead form (name + phone + email + message) — near-duplicate of #13 |
| 15 | `bulletsBlock` | Bullets Block | `title`, margins only (**no content field at all**) | per-doc | *(no component exists)* | ❌ not in switch | Schema literally cannot hold content — a title-only stub |
| 16 | `gridBlock` | Grid Block | `title`, `items[]` (icon image, `iconName`, title, description; `linkLabel`/`linkDestination` commented out), margins | per-doc | `GridBlockComponent` | ✅ | Icon-card grid (2nd-most-used block, 47×) — e.g. "My expertise" |
| 17 | `landingCtaBlock` | Landing CTA Block | `title`, margins | per-doc | `LandingCtaBlock` | ✅ | "Let's discuss your project goals" panel — **component takes no props but `lang`; `title` field is dead, all copy + the photo are hardcoded in the component** (see §4c) |
| 18 | `animationBulletsBlock` | Animation Bullets Block | `title`, `bullets[]` (number, sign, text), margins | per-doc | `AnimationBulletsBlockComponent` (→ `CountNumber`) | ✅ | Count-up stat row (e.g. "Key Facts About Me") — genuinely Sanity-driven, unlike #11 |
| 19 | `tableBlock` | Table | `columns[]` (strings), `rows[]` (cells: strings), margins | per-doc | `TableBlockComponent` | ✅ | Generic N-column data table — this is what renders the "Ideal For / Not Suitable For" comparisons (2 columns) |
| 20 | `serviceFeaturesBlock` | Service Features Block | `title`, `features[]` (feature: ref to `serviceFeature`, title, description), margins | per-doc, feature icon is a shared reference doc | `ServiceFeaturesBlockComponent` | ✅ | 3–5 column icon-feature grid |
| 21 | `workProcessBlock` | Work Process Block | `title`, margins only (**no steps field**) | per-doc | `WorkProcessBlockComponent` | ✅ | Numbered timeline ("What Working With Me Looks Like") — **6 steps + all copy are hardcoded per language in the component**; schema literally has nowhere to put them |
| 22 | `stepsBlock` | Steps Block | `title`, `steps[]` (stepNumber, title, description, icon, iconName), margins | per-doc | `StepsBlockComponent` | ✅ | Genuinely Sanity-driven numbered step list (used 9×, e.g. property-developer-website) |
| 23 | `relatedServicesBlock` | Related Services Block | `title`, `items[]` (ref to `singlepage`, locale-filtered), margins | per-doc | `RelatedServicesBlockComponent` | ✅ | Cross-link cards to other service pages — used once (services/website-development) |
| 24 | `portfolioBlock` | Portfolio Block | `title`, `portfolioItems[]` (ref to `portfolio`), margins | per-doc | `PortfolioBlockComponent` | ✅ | "Selected Projects" — **also ignores its own `portfolioItems` field**, always fetches the latest 4 portfolio docs via `getLastFourPortfolioByLang` instead |
| 25 | `contactMethodsBlock` | Contact Methods Block | `title`, `contacts[]` (icon, iconName, title, label, type: Email/Phone/Link), margins | per-doc | `ContactMethodsBlockComponent` | ✅ | Icon-grid of contact links (mailto/tel/wa.me auto-detected) — used only on /contacts |

Plus the **hero**, which isn't a `contentBlocks` entry at all: `PropertyIntro` (title, excerpt, previewImage — all straight off the `singlepage` document, gated by `allowIntroBlock`).

---

## 2. Usage map

**80 `singlepage` documents total** (27 EN, 26 PL, 27 RU — one PL doc presumably missing a translation link somewhere, not investigated further as out of scope).

EN docs by `pageType`:
- **`service` (7):** the `/services/*` leaf pages — seo-audit, website-performance-and-code-audit, seo-optimization-and-strategy, ai-ready-seo-and-geo-optimization, website-development, cms-integration-and-api-work, landing-page-development
- **`servicesIndex` (1):** `/services`
- **`page` (18):** everything else — 13 SEO/niche landing pages (seo-for-real-estate-in-cyprus, seo-for-beauty-salons, seo-for-law-firms, seo-for-auto-repair-shop, business-website-development, web-development-cyprus, garage-and-auto-repair-website, website-design-for-models, lawyer-website-development, property-developer-website, real-estate-agency-website, website-for-psychologists-therapists, website-development-for-beauty-professionals + its child beauty-salon-website), plus `pricing`, `about`, `contacts`, and `real estate`-focused `seo-for-real-estate`
- **`(none)` (1):** `privacy-policy`

**Block usage counts (all 80 docs, all locales):**

| Block | Uses | Tier |
|---|---:|---|
| `textContent` | 199 | Core |
| `doubleTextBlock` | 81 | Core |
| `faqBlock` | 77 | Core |
| `tableBlock` | 60 | Core |
| `serviceFeaturesBlock` | 56 | Core |
| `gridBlock` | 47 | Core |
| `benefitsBlock` | 44 | Core |
| `landingCtaBlock` | 44 | Core |
| `workProcessBlock` | 38 | Core |
| `imageFullBlock` | 22 | Common |
| `formMinimalBlock` | 15 | Common |
| `stepsBlock` | 9 | Occasional |
| `formFullBlock` | 5 | Rare (contacts + seo-audit only) |
| `animationBulletsBlock` | 3 | Rare (about only, ×3 locales) |
| `portfolioBlock` | 3 | Rare (about only, ×3 locales) |
| `contactMethodsBlock` | 3 | Rare (contacts only, ×3 locales) |
| `locationBlock` | 3 | Rare (contacts only, ×3 locales) |
| `relatedServicesBlock` | 1×3 locales | Rare (website-development only) |
| `reviewsFullBlock` | **0** | Dead-in-practice (component works, unused) |
| `accordionBlock` | **0** | Dead (also unwired) |
| `contactFullBlock` | **0** | Dead (also unbuilt) |
| `teamBlock` | **0** | Dead (also unbuilt) |
| `buttonBlock` | **0** | Dead (also unbuilt/unwired) |
| `imageBulletsBlock` | **0** | Dead (also unbuilt) |
| `bulletsBlock` | **0** | Dead (also unbuilt, and schema has no content field) |

So: **9 core blocks** carry the vast majority of content, **5 blocks are single-page specialists** (locationBlock/contactMethodsBlock/formFullBlock only really live on /contacts; portfolioBlock/animationBulletsBlock only on /about), and **7 of 24 schema-listed block types have literally never been used**, 6 of which also have no rendering path at all.

---

## 3. Styling classification

| Component | Classification | Specifics |
|---|---|---|
| `TextContentComponent` | **TOKENIZED** | No hardcoded colors; inherits page color, only inline `backgroundColor`/`textColor` are editor-supplied |
| `DoubleTextBlockComponent` | **TOKENIZED** | Divider uses `var(--accent)`; no hardcoded colors |
| `RichText` (shared, used by #1/#2/#5 etc.) | **TOKENIZED** (blog-scoped fixes don't reach here) | Already reviewed/fixed for the blog article page; singlepage still uses the *unscoped* base styles — fine, no raw colors found |
| `FaqHomepage` / `Accordion` / `AccordionItem` | **TOKENIZED** | Fixed in the earlier FAQ restyle pass; used correctly here too |
| `AccordionBlockComponent` | **TOKENIZED, but dead CSS** | `.module.scss` has `color:#fff; background-color:#fff` (×4) but the `.tsx` doesn't import/use that stylesheet at all — it just wraps the already-tokenized `Accordion`/`AccordionItem`. The file is an orphan; also, block itself is unwired in singlepage |
| `LocationBlockComponent` | **LEGACY** | `.locationItem { background-color: rgba(255,255,255,1); border: 1px solid var(--corp-color); }`, `.locationItemTitle`/`.locationItemText { color: #000; }` — solid white cards with black text, zero design-token usage |
| `ImageFullBlockComponent` | **LEGACY** | `.contentParent { background-color: #fff }`, `.content { color: white }` (desktop overrides to `var(--accent)`) — but this is all in the commented-out caption-overlay path, so it's inert; the *live* code path (just an image) has no color issues |
| `ButtonBlockComponent` | N/A | Never built |
| `BenefitsBlock` | **TOKENIZED (visuals) / hardcoded (content)** | Icons via `react-icons/fi` colored through CSS (not checked deeply, low risk); the real issue is content, not color — see §5 |
| `ReviewsFullBlockComponent` | not deeply reviewed | Live component, zero usage, low audit priority |
| `FormMinimalBlockComponent` / `FormFullBlockComponent` | **LEGACY** | `background-color: rgba(255,255,255,0.05)` glass card, `color:#fff` labels, `-webkit-text-fill-color:#fff` autofill hack, `box-shadow` loader animation with raw `#091728`/`rgba(9,23,40,…)` (a hardcoded dark-navy loader spinner, doesn't match the current dark palette conceptually even though it's dark-on-dark) |
| `bulletsBlock` | N/A | Never built, no content field |
| `GridBlockComponent` | **LEGACY** | Textbook "glass card": `.serviceItem { background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.05) }`, `.serviceItemTitle { color: rgba(255,255,255,1) }`, `.serviceItemDescription { color: rgba(199,196,196,0.8) }`, `.pretitle` same glass pattern, link color `var(--corp-color)`. **Also: root `<section>` uses `className={styles.gridBlock}` but `.gridBlock` is never defined in the SCSS file — dead className reference, renders with no class attribute at all** (harmless today only because no rule was lost, but real debt) |
| `LandingCtaBlock` | **LEGACY** | `background-color: #f5f5f5` (section), `background-color: #fff` (content card), text `rgb(26,26,26)` — an inverted **light** panel on an otherwise all-dark site, zero tokens |
| `AnimationBulletsBlockComponent` | not deeply reviewed (styles) | Uses `CountNumber`; title/number styling not audited for raw colors, lower priority given only 3 uses |
| `TableBlockComponent` | **MIXED** | `.th { background-color:#f3f4f6; color:#000 }` (intentional light header), `.td` has no explicit color (inherits `var(--text-primary)` — fine); borders are raw `#e5e7eb` hex, not tokens |
| `ServiceFeaturesBlockComponent` | **MIXED** | Card chrome itself has no bg/border (relies on `IconBadge`, tokenized); but `.subtitle { color:#fff }` and `.desc { color: rgba(255,255,255,0.5) }` are raw |
| `WorkProcessBlockComponent` | not deeply reviewed (styles) | Content is 100% hardcoded (see §5); `var(--corp-color)` present ×2, plus one `rgba(255,255,255,0.6)` gradient stop |
| `StepsBlockComponent` | **MIXED** | `border-top/bottom: rgba(255,255,255,0.08)` dividers, `color: var(--corp-color)` (step number), `color: #ffffff` (title) |
| `RelatedServicesBlockComponent` | **MIXED** | `background-color: rgba(255,255,255,0.05)` card overlay, `color: var(--corp-color)` link, `color: #ffffff` title |
| `PortfolioBlockComponent` | **TOKENIZED** | Only `var(--corp-color)` (harmless alias, see below); the actual cards are the already-redesigned shared `PortfolioItem` — no gradient anywhere. Root `<section>` also has the same dead-className pattern as GridBlockComponent for one nested class, not investigated further |
| `ContactMethodsBlockComponent` | **TOKENIZED (mostly)** | Uses `IconBadge`/`Icon` for the icon-name path; no raw colors found in the live classes. Root `.contactFull` and ancestor `.wrapper`/`.contactsBlock` classes are also **dead className references** (not defined in the SCSS — same pattern as GridBlockComponent/LocationBlockComponent/ServiceList) |
| `PropertyIntro` (hero) | **LEGACY** | `.overlayFull { background: rgba(0,0,0,0.7) }`, `.content { color: white }`, and a fully dead `.link` class with old-gold `#bd8948` background/border — real-estate-era leftover, unused in current JSX |

**`var(--corp-color)` note:** this legacy custom property is still defined in `globals.css` as `--corp-color: var(--accent)` — a deliberate alias, so it is *not* a visual bug (same computed color as `--accent`), just a naming inconsistency. It appears in 11 block files (15 occurrences) and should be migrated to `var(--accent)` directly for clarity during any redesign, but isn't urgent.

**Grep summary — raw color literals across `src/app/components/blocks/`:** 19 of 21 block-component `.module.scss`/`.tsx` files contain at least one raw `#fff`/`rgba(255,255,255,…)`/`var(--corp-color)` literal. Only `TextContentComponent`, `DoubleTextBlockComponent`, and the (dead) `AccordionBlockComponent` are clean.

---

## 4. Specific anomalies

### a) /about "Selected Projects" rainbow-gradient cards

**Not reproducible in the current codebase.** `portfolioBlock` → `PortfolioBlockComponent` → the same shared `PortfolioItem` component used on the homepage and `/portfolio` — already redesigned in the earlier "Portfolio card stage" (plain elevated card, `object-fit: cover`, no gradient). Grepped every block component for `gradient`; the only hits are an unrelated bottom-scrim overlay (`RelatedServicesBlockComponent`'s `.cardGradient`, a text-readability gradient, not rainbow) and unrelated form-loader/carousel files.

Confirmed live via Playwright against the dev server: computed `background-image` on every card on `/about` is `none`, and a direct screenshot (`audit-shots/about-immediate-fullpage.png`) shows plain dark cards, matching the redesigned style exactly.

**Likely explanation:** the "earlier gradient grep" didn't miss anything in the code — the screenshot the owner saw is stale (browser cache, or taken before the Portfolio-card-stage commit was deployed to production). Worth a hard-refresh / production re-check rather than a code fix. `PortfolioBlockComponent` does duplicate `Portfolio.tsx`'s (homepage) fetch logic (both independently call `getLastFourPortfolioByLang` and ignore their own Sanity list field — see §5), but the *markup/styling* is not duplicated; both correctly delegate to the one shared card.

### b) /about "My expertise" and similar grids render half-invisible in static captures

**Confirmed real, and reproducible right now** — but it is a different bug than the one already fixed, not a regression of it.

`GridBlockComponent`, `StepsBlockComponent`, `WorkProcessBlockComponent`, and `RelatedServicesBlockComponent` all wrap their items in `FadeInOnScroll` (`src/app/components/animations/FadeInOnScroll/FadeInOnScroll.tsx`). That component is correctly built: before hydration it renders plain (no inline opacity baked into SSR HTML), and after hydration it uses `react-intersection-observer`'s `useInView({ triggerOnce: true, threshold: 0.2 })` to animate `opacity: 0 → 1`. The earlier `once:true` fix stops it from *re-hiding* after being scrolled past — that part works.

**What's not fixed:** any item that has never actually intersected the viewport (i.e., anything below the fold at the moment of capture) starts at `opacity: 0` and *stays there* until a real scroll event fires — because `IntersectionObserver` only fires on genuine viewport intersection. A `page.screenshot({ fullPage: true })`-style capture that doesn't scroll step-by-step (or a tool that resizes/renders beyond-viewport content via CDP without dispatching scroll/intersection events) will permanently capture those items at `opacity: 0`.

Verified directly: on a fresh `/about` load with **no scroll**, `getComputedStyle` on the "My expertise" grid items returned `['1','0','1','1','1','1']` — one item literally invisible. The full-page screenshot taken at that moment (`audit-shots/about-immediate-fullpage.png`) shows the entire "My expertise" grid and the entire "What Working With Me Looks Like" timeline as blank space under their headings. A second capture after a scripted slow-scroll pass (`audit-shots/about-after-slow-scroll-fullpage.png`) shows both sections fully rendered.

**A closely related second bug, same root cause, not previously flagged:** `CountNumber` (`src/app/components/animations/CountNumber/CountNumber.tsx`) — used by `AnimationBulletsBlockComponent` ("Key Facts About Me": Years of Experience / Projects / Countries / Traffic Growth) and by `BenefitsBlock` — starts its counter at `0` and only counts up once a *separate*, custom `useIntersectionObserver` hook (`src/hooks/useIntersectionObserver.ts`, plain native `IntersectionObserver`, no `threshold` specified, no relation to `FadeInOnScroll`/`react-intersection-observer`) reports visibility. In the same no-scroll capture, "Key Facts About Me" showed **0+ / 0+ / 0+ / 0%** for all four stats; after scrolling, correctly showed 4+ / 15+ / 3 / 12%.

**Full list of animation wrappers used by singlepage blocks and their initial-state behavior:**

| Wrapper | Used by | Trigger mechanism | Initial state (pre-intersection) |
|---|---|---|---|
| `FadeInOnScroll` | GridBlockComponent, StepsBlockComponent, WorkProcessBlockComponent, RelatedServicesBlockComponent | `react-intersection-observer` `useInView({triggerOnce:true, threshold:0.2})`; SSR-safe (no inline opacity before hydration) | `opacity:0, y:+40px` until intersected — **invisible if never scrolled to** |
| `CountNumber` | AnimationBulletsBlockComponent, BenefitsBlock | custom `useIntersectionObserver` hook, native API, default threshold (any pixel) | Displays literal `0` until intersected — **stuck at zero if never scrolled to** |
| *(none)* | TextContentComponent, DoubleTextBlockComponent, ImageFullBlockComponent, TableBlockComponent, ServiceFeaturesBlockComponent, FormMinimalBlockComponent, FormFullBlockComponent, ContactMethodsBlockComponent, LocationBlockComponent, LandingCtaBlock, PortfolioBlockComponent, PropertyIntro | — | Always fully visible immediately — no capture risk |

No AOS usage anywhere in `src/` (confirmed via grep) despite it still being a `package.json` dependency — consistent with CLAUDE.md's existing note that it's dead weight.

### c) LandingCtaBlock ("LET'S DISCUSS YOUR PROJECT GOALS")

- **Photo:** hardcoded. `<Image src="https://cdn.sanity.io/files/x6jc462y/production/a1bcd2f54c75f3d58141c81aa81e6abc8699668c.jpg" .../>` — a raw CDN file URL baked directly into the component, not a Sanity image field, not editable in Studio at all.
- **All copy** (title start/highlight, description, button label) is a hardcoded `translations` object keyed by `lang`, inside the component.
- **The schema's `title` field is completely dead** — the component signature is `{ lang }`, the block invocation in `[...slug]/page.tsx` is `<LandingCtaBlock key={block._key} lang={lang} />`, `block.title` is never read or passed.
- **Background is intentional-but-legacy:** `background-color: #f5f5f5` on the section, `#fff` on the inner card, `rgb(26,26,26)` text — a deliberate light panel (visual contrast beat against the dark site), not driven by any schema field, not tokenized.
- Net effect: in Studio, this block is really just an on/off placement toggle — adding it to `contentBlocks` inserts a fixed, non-editable panel. Given it's used 44× (as often as `benefitsBlock`/`workProcessBlock`), this is a significant "the CMS lies about what's editable" gap.

### d) /contacts white info cards (Country/City, Working Hours, Current Time) + Leaflet map

- **Block:** `locationBlock` → `LocationBlockComponent`. Used only on `/contacts` (3 docs = 1 per locale).
- **Styles live in** `LocationBlockComponent.module.scss`: `.locationItem { background-color: rgba(255,255,255,1); border: 1px solid var(--corp-color); border-radius:12px; }`, `.locationItemTitle`/`.locationItemText { color: #000; }`. Fully hardcoded light cards, no design tokens.
- **Current-time widget:** yes, fully client-side. `CurrentTime.tsx` (`"use client"`) starts with an empty string, computes the formatted time via `Intl.DateTimeFormat` against the block's `timezone` field inside a `useEffect`, and re-renders every second via `setInterval`. No SSR value at all — the "Current Time" card is blank until hydration.
- The map itself (`MapContact`, Leaflet) is loaded via `next/dynamic(..., { ssr:false })` — also fully client-only, consistent with Leaflet needing `window`.

### e) "Ideal For / Not Suitable For" comparison table

This is the generic **`tableBlock`** (schema: `columns[]` + `rows[].cells[]`, no special "comparison" semantics) rendered by `TableBlockComponent`. The two-column look comes purely from the editor entering exactly 2 column headers (e.g. "Yes, if:" / "Not a good fit if:") and N rows of 2 cells each — there is no dedicated comparison-table block type or schema. `tableBlock` is used 60× across the site (3rd-most-used block), so most of that usage is likely this same pattern reused for pricing tables, feature comparisons, etc. — worth checking row/column counts per instance before any redesign, since a generic table and a 2-column pro/con comparison have different ideal layouts (the current one styles both identically: light-gray header row, dark body rows, `#e5e7eb` borders).

---

## 5. Cross-cutting observations

**A. Three blocks are "placement toggles," not real CMS fields** — `landingCtaBlock` (44 uses), `benefitsBlock` (44 uses, ignores its own `benefits[]` array and `title`, hardcodes 4 stats per language), and `workProcessBlock` (38 uses, schema has *no* field for the 6 steps it renders — title only). Combined, that's **126 block instances** across the site where "adding the block" is the only editorial action possible; the actual content is baked into React per-language. Any redesign should explicitly decide whether to (1) keep this pattern (fine, but should be documented so the owner doesn't go hunting for these fields in Studio), or (2) wire the existing-but-unused schema fields (`benefitsBlock.benefits`, `landingCtaBlock.title`) through, or (3) add a steps field to `workProcessBlock`.

**B. `portfolioBlock` also ignores its own data** — `portfolioItems[]` (a reference array editors can curate) is fetched but never read; the component always shows `getLastFourPortfolioByLang` (the 4 newest portfolio docs) instead, identical to what the homepage's `Portfolio.tsx` does independently. Same duplication as (A) in spirit: a Sanity field that looks editable but isn't.

**C. `SectionHeading` (shared, tokenized, used by homepage sections) is not adopted by a single singlepage block component.** Every block that has a "title" (`GridBlockComponent`, `BenefitsBlock`, `WorkProcessBlockComponent`, `ServiceFeaturesBlockComponent`, `StepsBlockComponent`, `RelatedServicesBlockComponent`, `AnimationBulletsBlockComponent`, `ContactMethodsBlockComponent`, `LocationBlockComponent`) reimplements its own `<div className={styles.text}><h2 className={styles.title}>` pattern instead. This is the main "duplicates markup that already exists as a shared component" finding. By contrast, `Icon`/`IconBadge` (from the Icons stage) **are** already well-adopted — `GridBlockComponent`, `ContactMethodsBlockComponent`, `ServiceFeaturesBlockComponent`, and `StepsBlockComponent` all correctly do the `iconName ? <IconBadge><Icon/></IconBadge> : <Image/>` fallback pattern (copy-pasted identically in all four rather than factored into a shared helper, but at least visually consistent/tokenized). `Button`/`ModalButton` are also already adopted (`PortfolioBlockComponent`, `LandingCtaBlock`).

**D. Dead `className` references (real, harmless-today bug pattern) found in at least 4 components** — the root element's class doesn't match anything actually defined in that component's own `.module.scss`, so React renders no class attribute there at all: `GridBlockComponent` (`styles.gridBlock` — file only defines `.servicesSection`, `.text`, `.items`, etc.), `ContactMethodsBlockComponent` (`styles.contactFull`, and its `.wrapper`/`.contactsBlock` ancestors), `LocationBlockComponent` (`styles.locationBlock`), `ServiceList` (`styles.serviceList`). Confirmed by diffing rendered HTML class names against each `.tsx`'s `styles.X` references. No visual regression today (no rule was ever attached to those class names to begin with), but it means those root-level margin/structure hooks a future dev might expect to exist don't — worth a cleanup pass alongside any redesign touching these files.

**E. `FormFullBlockComponent`'s root className is a copy-paste artifact of `FormMinimalBlockComponent`** — its outer wrapper is literally `<div className={styles.formMinimalBlock}>` inside `FormFullBlockComponent.tsx`, not `styles.formFullBlock`. (This one *does* resolve to a real class, since `FormFullBlockComponent.module.scss` also defines `.formMinimalBlock`, presumably copied from the other file — cosmetically works, but confirms the two form blocks were built by literal copy/paste and have near-identical, independently-drifting stylesheets, e.g. only `FormFullBlockComponent` includes a raw `#ccc` checkbox border and a hardcoded-navy `#091728` loader-spinner shadow.)

**F. Hero block (`PropertyIntro`)** does **not** share code with `BlogIntro` (blog article hero) — fully separate component, fully separate stylesheet. Its name and one dead CSS class (`.link { background:#bd8948 }`, old gold, unused in JSX) are the last visible trace of the real-estate-vertical origin CLAUDE.md already flagged as dead code elsewhere; the component itself is very much alive (used by every page with `allowIntroBlock` + `previewImage`, ~26 of 27 EN pages by eyeball).

**G. Two structurally different "stat block" implementations exist** and look almost identical on screen: `animationBulletsBlock` (genuinely Sanity-driven: `number`/`sign`/`text` per bullet, used on /about's "Key Facts About Me") vs. `benefitsBlock` (schema *has* the same shape — `counting.conuntNumber`/`sign`/`title`/`description` — but the component ignores it entirely and hardcodes 4 different stats per language, used elsewhere e.g. seo-for-real-estate-in-cyprus). A redesign touching "stat rows" needs to treat these as two separate components with two different content-ownership models, not one.

**H. Raw-color inventory (already itemized in §3):** 19 of 21 live block-component files contain at least one un-tokenized color; the dominant patterns are the "glass card" (`rgba(255,255,255,0.05)` bg + border, seen in `GridBlockComponent`, `FormMinimalBlockComponent`, `FormFullBlockComponent`, `RelatedServicesBlockComponent`), raw white text at various opacities (`GridBlockComponent`, `ServiceFeaturesBlockComponent`, `StepsBlockComponent`, `RelatedServicesBlockComponent`, `AccordionBlockComponent`-dead), the `var(--corp-color)` legacy-but-harmless alias (11 files), and two genuinely hardcoded **light** panels breaking the otherwise all-dark site (`LandingCtaBlock`, `LocationBlockComponent`).

---

## 6. Screenshots

One representative instance per live block type, captured at 1440px against the dev server (scroll-settled so `FadeInOnScroll`/`CountNumber` had fired), saved to `audit-shots/blocks/`:

```
01-hero-PropertyIntro.png            (about)
02-textContent-TextContentComponent.png  (about)
03-animationBulletsBlock.png         (about — "Key Facts About Me")
04-doubleTextBlock.png               (seo-for-real-estate-in-cyprus)
05-gridBlock.png                     (about — "My expertise")
06-formMinimalBlock.png              (services/seo-audit)
07-workProcessBlock.png              (about — "What Working With Me Looks Like")
08-portfolioBlock.png                (about — "Selected Projects")
09-faqBlock.png                      (services/seo-audit)
10-benefitsBlock.png                 (seo-for-real-estate-in-cyprus)
11-landingCtaBlock.png               (seo-for-real-estate-in-cyprus)
12-tableBlock.png                    (services/seo-audit)
13-serviceFeaturesBlock.png          (services/website-performance-and-code-audit)
14-imageFullBlock.png                (services/website-performance-and-code-audit)
15-stepsBlock.png                    (property-developer-website)
16-formFullBlock.png                 (contacts)
17-contactMethodsBlock.png           (contacts)
18-locationBlock.png                 (contacts)
19-relatedServicesBlock.png          (services/website-development)
20-serviceList-servicesIndex.png     (services)
```

No screenshot exists (nor could one) for `accordionBlock`, `contactFullBlock`, `teamBlock`, `buttonBlock`, `imageBulletsBlock`, `bulletsBlock`, `reviewsFullBlock` — zero live usage across all 80 documents.

Also captured for the animation investigation: `about-immediate-fullpage.png` (no-scroll capture — shows the "My expertise" and "What Working With Me Looks Like" sections blank) vs `about-after-slow-scroll-fullpage.png` (same page after a scripted scroll pass — everything visible).

---

## 7. Top 10 blocks ranked by redesign impact (usage × how legacy)

1. **`gridBlock`** (47 uses) — heaviest "glass card" legacy pattern of any block, plus the dead-className bug, plus the FadeInOnScroll invisibility risk. Highest combined impact.
2. **`landingCtaBlock`** (44 uses) — 100% legacy light panel on a dark site, 100% hardcoded content including a raw hotlinked photo URL. Very high visual footprint per instance (full-width section).
3. **`benefitsBlock`** (44 uses) — not a styling problem so much as a content-ownership problem: the block appears editable in Studio but isn't at all.
4. **`workProcessBlock`** (38 uses) — same content-ownership problem as benefits, plus it's one of the four blocks that goes invisible pre-scroll.
5. **`formMinimalBlock` + `formFullBlock`** (15 + 5 = 20 uses) — glass-card legacy styling, near-duplicated stylesheets, raw hardcoded loader-spinner colors.
6. **`serviceFeaturesBlock`** (56 uses — highest raw count after the top tier, but the legacy surface is narrow: two raw-white text rules only) — high usage makes even a small fix high-leverage.
7. **`stepsBlock`** (9 uses) — moderate legacy (dividers/title/number raw colors) plus the invisibility risk; lower usage than the above but same bug class.
8. **`tableBlock`** (60 uses — highest raw count of all, but MIXED not LEGACY: only border hex + one intentional light header) — worth a pass given sheer volume, including clarifying the ad-hoc "comparison" usage (anomaly e).
9. **`locationBlock`** (3 uses, but 100% legacy — solid white cards, `color:#000`) — low frequency, but it's the single most conspicuously off-brand block on the site's highest-intent page (/contacts).
10. **`relatedServicesBlock`** (1 use) — fully legacy glass-card styling; lowest priority by frequency, included because it's an easy, contained fix and matches the pattern above it.

*(Not ranked, but flagged for a decision before any visual redesign work starts: the 6 truly dead block types should either be wired up or removed from the schema's `contentBlocks.of[]` list so Studio stops offering them.)*
