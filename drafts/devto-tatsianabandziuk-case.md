---
title: Building a site for AI answers in Next.js 16 — what actually made a difference
published: false
tags: nextjs, seo, webdev, ai
cover_image:
---

<!--
Written for: developers on dev.to — people who build with Next.js and want their
sites to be read by search engines and AI assistants.
Paste into dev.to's editor from "title:" down; front matter is dev.to's own
format. Set published: true when ready. Cover image: tatsianabandziuk-00.png
(dev.to wants 1000×420; crop the mockup or leave it empty).
No canonical_url on purpose: this is an original piece, not a copy of the case.
-->

Before I designed a website for a retail analytics consultant, I checked what people see when they search her field. Of 40 English queries, **38 showed an AI answer at the top of the page**. In Polish it was 35 of 37, in Russian 36 of 36.

That changes the job. Ranking in a list of links is no longer the goal; being the page the answer quotes is. Most of what follows is about making a Next.js site easy to read and easy to quote for crawlers that — this is the important part — **mostly do not run JavaScript**.

The site: [tatsianabandziuk.com](https://www.tatsianabandziuk.com) — 153 pages in three languages, built on Next.js 16 (App Router, Turbopack, React 19) with Sanity as the CMS. The full case study with screenshots is [on my site](https://www.bandziuk.com/portfolio/consultant-website-design-retail-analytics?utm_source=devto&utm_medium=social&utm_campaign=tatsianabandziuk-case&utm_content=case-link).

## 1. If it needs JavaScript, AI crawlers don't see it

Google renders JavaScript. Most of the fetchers behind AI answers don't. So everything that carries meaning has to be in the server HTML:

- **FAQ answers are collapsed with CSS, not fetched on click.** The answer is in the markup from the first byte; the accordion only changes what is visible.
- **Figures, menus and the language switcher are server-rendered.** A number that animates in from zero is fine — as long as the final value is already in the HTML and the animation only rewrites it.
- **Charts are drawn on the server.** Each service card has a small chart; it is SVG in the HTML, not a canvas painted after hydration.

The quick test is `curl` against your own page and a search for the text you expect an assistant to quote. If it isn't in the output, it doesn't exist for most of them.

## 2. JSON-LD: a plain `<script>`, not `next/script`

This one cost me time on another project, so it's the first thing I check now. `next/script` — with or without `strategy="beforeInteractive"` — does not put the JSON-LD into the server HTML in the App Router. It queues it and injects it after hydration. Google will eventually see it; a fetcher that doesn't run JS never will.

```tsx
// Do this
<script
  type="application/ld+json"
  suppressHydrationWarning
  dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
/>

// Not this — the block lands in the page only after hydration
<Script id="schema" type="application/ld+json">{JSON.stringify(graph)}</Script>
```

The structured data itself is written by hand for twelve page types. At its core are three nodes — the person, her services, the website — each with a stable `@id`, and every page references them instead of restating them. A calculator page is described as a free tool, a case study and an article as publications with an author and a date, and the About page lists each diploma with its year and issuer.

## 3. Write for quoting, not just for reading

This is content work, but it has a code side:

- **The answer is the first sentence** of every article and calculator page.
- **Formulas and tables are text.** A formula in an image cannot be quoted. On the calculator pages the formula sits in its own element as text, and styled tables are still plain `<table>` underneath.
- **Headings stand alone.** Each one names its subject fully, so it still makes sense when an assistant lifts it out of the page.

## 4. Let the AI crawlers in, keep the data scrapers out

`robots.ts` allows the search engines and the AI crawlers — GPTBot, ClaudeBot, PerplexityBot and friends — and disallows the commercial SEO crawlers that collect link data for other people's tools. They add load and bring neither readers nor citations.

## 5. Caching that doesn't fight the CMS

Every Sanity query goes through one small wrapper that adds a cache lifetime and a tag:

```ts
export const client = {
  fetch<R>(query: string, params = {}, options = {}): Promise<R> {
    return sanityClient.fetch<R>(query, params, {
      ...options,
      next: { revalidate: 86400, tags: ["sanity"] },
    });
  },
};
```

Two reasons it exists. First, the Sanity client sends an `Authorization` header (translated documents are private), and without an explicit cache lifetime Next treats that fetch as dynamic — the whole route renders on every request. Second, pages can then be cached for a day and still update on publish: a Sanity webhook calls `revalidateTag("sanity")`, and the same webhook pings IndexNow for the changed URLs.

**A Next 16 gotcha worth knowing:** `revalidateTag` now takes a cache profile. On a different project I used `{ expire: 0 }`, and every route with `dynamicParams = false` started answering 404 after a publish — the cached pages were deleted and those routes can't regenerate. The `"max"` profile marks them stale instead: the first request after a publish gets the old page and triggers regeneration, the next one gets fresh data. If you have `dynamicParams = false` anywhere, test your publish webhook against a real build.

## 6. PageSpeed 100 on mobile — the unglamorous parts

Mobile PageSpeed Insights gives the site 100 for performance, accessibility, best practices and SEO, and 3 of 3 in the new agentic browsing check. What moved the needle:

- **No font preloading.** `preload: false` with `display: "swap"` on every `next/font` family. Lighthouse's simulation puts every request that starts before the largest paint on its critical path, and preloaded fonts landed there. The H1 paints in the metric-matched fallback and swaps a moment later.
- **Next's polyfill module aliased to an empty file** through `turbopack.resolveAlias` — every browser Next 16 supports already has those features.
- **Images resized by Sanity's CDN** through a custom loader rather than `/_next/image`.
- **An `/llms.txt`** built from the same content as the pages, which is what the agentic check looks for.

## 7. The site keeps building when the CMS doesn't answer

All content has a fallback copy inside the repository, so a Sanity outage during a build produces the last known pages instead of a failed deploy. And the calculators and the downloadable Excel templates are verified by scripts — the template checker recalculates the whole workbook and compares every formula with the expected result. A template that is wrong by one cell reference is worse than no template.

## What I'd take to the next project

Check the results page before the design: if an AI answer sits on top of your target searches, write and build to be quoted. Then run `curl` on your own pages and read what a crawler without JavaScript actually receives. Most of the fixes above came from that one command.

I measured AI citations on launch day — zero, as expected for a new site — and will re-run the same 74 questions in October.

*I'm Aliaksandr Bandziuk, an SEO consultant and web developer building multilingual sites on Next.js and headless CMS: [bandziuk.com](https://www.bandziuk.com/?utm_source=devto&utm_medium=social&utm_campaign=tatsianabandziuk-case&utm_content=bio).*
