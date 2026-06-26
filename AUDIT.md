# SEO & UX Audit — bandziuk.com

> Conducted 2026-06-26. All findings are labelled **(code)** (verified from source) or **(needs live check)** (requires browser / Lighthouse / Search Console).
>
> "Direct fix" = safe to apply without further approval per audit scope.  
> "Needs approval" = architectural or significant enough to discuss first.

---

## SEO

| # | Severity | Finding | Source |
|---|----------|---------|--------|
| S1 | **High** | No `hreflang` alternates on any page. `generateMetadata` never sets `alternates.languages`. Google has no signal that EN/PL/RU versions are related. | code |
| S2 | **High** | Sitemap (`/api/sitemap/route.ts`) emits plain `<url>` entries with no `<xhtml:link rel="alternate">`. Per Google guidance the sitemap should cross-reference all language variants for each URL. | code |
| S3 | **High** | `blog/[slug]/page.tsx:83` — when `!blog`, renders `<p>Страница не найдена</p>` and returns HTTP 200. Should be `notFound()`. | code |
| S4 | **High** | `portfolio/[slug]/page.tsx:64` — when `!portfolio`, returns `null` (empty HTML, 200). Should be `notFound()`. | code |
| S5 | **Medium** | `[lang]/page.tsx` — homepage `generateMetadata` returns only `title` and `description`. All other pages also set `openGraph`, `twitter`, and `alternates.canonical`. Homepage is missing all three. | code |
| S6 | **Medium** | `SchemaBlogPost.tsx:45` — publisher logo URL is an empty string `""`. This is invalid JSON-LD; Google Search Console will surface a structured-data error. | code |
| S7 | **Medium** | `SchemaBlogPost.tsx:12` — `const siteUrl = "https://bandziuk.com"` (no www). Every other absolute URL in the codebase uses `https://www.bandziuk.com`. The canonical and JSON-LD URL for blog posts resolve to a different origin than the rest of the site, causing a canonical mismatch. | code |
| S8 | **Low** | `SchemaBlogPost.tsx:53` — `<Script strategy="beforeInteractive">` uses JSX children to pass the JSON string. Next.js requires inline scripts with `beforeInteractive` to use `dangerouslySetInnerHTML`; children are silently ignored, meaning the JSON-LD is not emitted. | code |
| S9 | **Low** | All pages use relative canonical paths (`/blog`, `/pl/blog`). This is compensated by `metadataBase` in `layout.tsx`, so Next.js resolves them to absolute URLs. Not a bug — just worth knowing if `metadataBase` is ever removed. | code |
| S10 | **Low** | Sitemap assigns `changefreq: "weekly"` to every URL including static service pages. Accuracy signal is low. Not blocking. | code |

### Direct fixes (S3, S4, S6, S7, S8)
### Needs approval (S1, S2, S5)

---

## Accessibility / UX

| # | Severity | Finding | Source |
|---|----------|---------|--------|
| U1 | **High** | No `error.tsx` file anywhere in the app. A React render error in any route shows the generic Next.js crash page with no graceful recovery. | code |
| U2 | **High** | `BurgerMenu.tsx` — the clickable icon is a `<div onClick>`. No `role="button"`, no `aria-label`, no `aria-expanded`, not reachable by keyboard Tab. Screen readers can't discover or operate it. | code |
| U3 | **High** | `LocaleSwitcher.tsx` — the trigger is a `<div onClick>`. No `role="button"`, no `aria-label`, no `aria-haspopup`, no `aria-expanded`. The dropdown list has no `role="listbox"`. | code |
| U4 | **Medium** | `FormStandard.tsx:50-58` — `setInterval` autofill polling queries `document.getElementById("name")` etc., but the actual input IDs are `${uid}-name` (from `useId()`). `getElementById` always returns `null`. The floating-label autofill detection is silently broken. Regular typing still works via `handleBlur`. | code |
| U5 | **Medium** | `FormStandard.tsx:146` — `console.log("Button clicked")` left in production code on the form submit button's `onClick`. | code |
| U6 | **Medium** | `BurgerMenu.tsx` — click target is the inner `.burgerIcon` div, not the outer `.burgerMenu` container. On mobile the tap area may be smaller than the 44×44px minimum recommended by WCAG 2.5.5. | needs live check |
| U7 | **Low** | No focus-trap in the burger nav overlay. Tab key exits the open menu and hits content behind it. | needs live check |
| U8 | **Low** | No focus-trap in `ModalFull`. Keyboard users can Tab out of the modal into page content behind. (Lightbox has focus management — see ScreenshotLightbox.tsx — but ModalFull does not.) | needs live check |
| U9 | **Low** | Blog post page has no `generateStaticParams` — posts are server-rendered on demand but `dynamicParams` is not set, so behaviour depends on the route segment's defaults. `[...slug]` has `dynamicParams = false` but blog does not. | code |
| U10 | **Low** | `FormStandard.tsx:49` — polling interval at 100 ms runs for the lifetime of the component (it always resolves to null — see U4). 10 `getElementById` calls per second per mounted form instance, all wasted. | code |

### Direct fixes (U2, U3, U5)
### Needs approval (U1, U4, U7, U8)

---

## Prioritised action plan

### Tier 1 — Fix now (high impact, low risk, already approved)

1. **S3 + S4** — Replace `<p>` / `null` with `notFound()` in blog and portfolio slug pages.
2. **S7 + S8** — Fix `SchemaBlogPost`: non-www URL and broken `<Script>` inline JSON-LD.
3. **S6** — Remove empty publisher logo from `SchemaBlogPost` JSON-LD.
4. **U2** — Add `role="button"`, `aria-label`, `aria-expanded`, `tabIndex`, keyboard handler to BurgerMenu.
5. **U3** — Add `role="button"`, `aria-label`, `aria-haspopup`, `aria-expanded` to LocaleSwitcher trigger; add `role="listbox"` to the `<ul>`.
6. **U5** — Remove `console.log` from FormStandard.

### Tier 2 — Discuss first (architectural or significant scope)

7. **S1 + S2** — Add hreflang: set `alternates.languages` in `generateMetadata` for all pages and add `<xhtml:link>` entries to the sitemap.
8. **S5** — Add OG, Twitter, and canonical to homepage `generateMetadata`.
9. **U1** — Add `error.tsx` to `[lang]/`, `[lang]/blog/`, `[lang]/portfolio/`, and `[lang]/[...slug]/`.
10. **U4 + U10** — Fix the autofill polling in `FormStandard`: change IDs to match the `useId()` prefix or drop the polling.
11. **U7 + U8** — Add focus-trap to burger nav overlay and `ModalFull`.

---

*Files referenced: `src/app/[lang]/page.tsx`, `src/app/[lang]/blog/[slug]/page.tsx`, `src/app/[lang]/portfolio/[slug]/page.tsx`, `src/app/components/seo/SchemaBlogPost/SchemaBlogPost.tsx`, `src/app/components/shared/BurgerMenu/BurgerMenu.tsx`, `src/app/components/shared/LocaleSwitcher/LocaleSwitcher.tsx`, `src/app/components/forms/FormStandard/FormStandard.tsx`, `src/app/api/sitemap/route.ts`.*
