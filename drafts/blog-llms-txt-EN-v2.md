# DRAFT EN — расширение существующей статьи /blog/does-your-site-need-llms-txt
#
# Это НЕ переписывание. Весь нынешний текст и все его данные сохранены: 97 %
# файлов никто не скачивал, 408 обращений на 500 млн визитов, позиция Google,
# сравнение Мюллера, Lighthouse. Добавлены разделы под намерения, которые
# статья не закрывала и из-за которых стоит 23-й: формат и пример (1 310
# запросов/мес), как создать и генератор (650), Next.js (40), WordPress (30),
# FAQ из блока «люди также спрашивают».
#
# Ключи в H2: llms txt file, llms txt format, llms txt example, llms txt vs
# robots txt, how to create llms txt, llms txt generator, nextjs llms txt,
# llms txt wordpress, does llms txt work, is llms txt still used.
# Слаг не меняем: у адреса есть история, переезд сейчас не нужен.
# Новое: ссылка на /tools/llms-txt-generator.

Title: llms.txt: what it is, how to write one, and whether it does anything
Slug: does-your-site-need-llms-txt
Meta title: llms.txt: What It Is, How to Write One, and Whether It Works
Meta description: What an llms.txt file is, its format with a working example, how to create one by hand or from a CMS, and what the measurements say about whether it changes anything.

---

> Quick answer: if you're adding it hoping to be cited more often by ChatGPT or Google's AI answers, the evidence says no. Google states plainly that its Search systems don't use the file at all, most llms.txt files are never fetched by anything, and studies looking for a citation effect haven't found one. But the file isn't useless — it serves a different job entirely, and a few major AI companies genuinely do use it for that job. Below: the format, how to generate one, and which of the two jobs you were actually hoping for.

The question arrives in a predictable form: someone read that llms.txt is "the new robots.txt", that AI systems use it to understand your site, and that adding it improves your chances of being recommended. Each part of that is either wrong or describes something other than what it sounds like.

Here's what the file is, how to write one, what the measurements show, and the one case where it's worth shipping.

## What an llms.txt file is, and what goes in it

A markdown file at the root of your domain containing a curated map of your site — the pages that matter, with short descriptions, organised so a machine can see the structure without crawling everything.

The proposal dates from September 2024. The idea is reasonable: a large documentation site has thousands of pages, and a system reading it without guidance may index outdated material, miss what matters and misread the structure. A curated index gives it a better starting point.

Note what that describes. It's a navigation aid, not an access control and not a ranking signal. It cannot block any crawler, and it doesn't tell a system anything it couldn't otherwise find — it just makes finding it cheaper.

## The llms.txt format, with a working example

The format is plain markdown with a fixed shape: one H1 with the site name, an optional one-line summary as a blockquote, then H2 sections holding lists of links. Each link may carry a short description after a colon.

```markdown
# Acme Analytics

> Retail analytics consulting: assortment planning, pricing and reporting.

## Services

- [Assortment planning](https://example.com/services/assortment): how we build and review a range
- [Pricing strategy](https://example.com/services/pricing): markdown planning and margin control

## Guides

- [How to calculate sell-through](https://example.com/guides/sell-through): formula, worked example, common mistakes

## Optional

- [Press kit](https://example.com/press)
```

Three things decide whether the file is any good. The H1 names the site, not the page. Every entry is a real, canonical URL — not a redirect and not a parameterised copy. And the descriptions say what the page answers, because that sentence is the only thing a reader has to go on when choosing which link to open.

The section named `## Optional` has a defined meaning in the specification: material that can be skipped when the reader is short of context. Everything else is treated as core.

## llms.txt vs robots.txt: they solve different problems

The two files get conflated constantly, and only one of them has real support.

robots.txt is the file with genuine, deliberate backing from every major AI crawler operator. OpenAI, Anthropic, Google, Perplexity and the rest publish user-agent strings and honour the directives in practice. If you want to control whether AI systems read your site at all, that's where it happens.

llms.txt cannot block anything. It's a suggestion about what to read once reading is already permitted.

The practical consequence: if AI visibility matters to you, the thing worth checking isn't whether you have an llms.txt file. It's whether your robots.txt is accidentally blocking the crawlers you want. That takes two minutes and it's the one of the two that can actually cost you.

## How to create an llms.txt file: by hand, with a generator, or from your CMS

For a site of twenty pages, by hand is correct. Open a text file, write the H1, group the pages into three or four sections, describe each one in a sentence. Fifteen minutes, and every description is yours.

For a larger site, start from the sitemap so nothing is forgotten, then cut. I built a [free llms.txt generator](/tools/llms-txt-generator) that reads a sitemap, groups the pages by their first path segment and writes a valid file you can edit and download. It derives titles from the URLs, which makes them a starting point rather than an answer — a file whose titles are slugs with the hyphens removed is worse than no file, because it tells a reader nothing they couldn't have guessed.

Whichever route you take, the editing pass is the work. The generator saves you the typing, not the thinking.

## Generating llms.txt in Next.js from a headless CMS

If the site is already driven by a CMS, the file should be too. A static file goes stale the first time someone publishes a page, and a stale map is worse than none.

In the Next.js App Router, a route handler at `app/llms.txt/route.ts` does it. The one on this site reads the same Sanity content the pages read, so the two cannot drift:

```ts
// app/llms.txt/route.ts
import groq from "groq";
import { client } from "@/sanity/sanity.client";

export const revalidate = 86400;

export async function GET() {
  const pages = await client.fetch(groq`
    *[_type == "singlepage" && language == "en" && defined(slug.en.current)]{
      "slug": slug.en.current,
      "title": coalesce(seo.metaTitle, title),
      "description": coalesce(seo.metaDescription, excerpt)
    }`);

  const body = [
    "# Example site",
    "",
    "> One sentence about what this site is.",
    "",
    "## Services",
    "",
    ...pages.map(
      (p: { slug: string; title: string; description?: string }) =>
        `- [${p.title}](https://example.com/${p.slug})` +
        (p.description ? `: ${p.description}` : ""),
    ),
  ].join("\n");

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
```

Two details that are easy to get wrong. A path containing a dot bypasses middleware in most i18n setups, so `/llms.txt` reaches the route directly and does not need a locale prefix. And the handler should use the same cache lifetime as the rest of the site, or you will serve a map that disagrees with the pages it maps.

## llms.txt in WordPress and other stacks

WordPress has plugins that generate the file from the post list. They work, with the same caveat as any generator: the output is a draft, and the descriptions are usually the excerpt, which was written for humans skimming an archive rather than for a machine choosing what to open.

On a static site — Astro, Hugo, Eleventy — the file belongs in the build, generated from the same content collection as the pages. On anything else, a scheduled job that regenerates it after a publish is enough. The rule is the same everywhere: generated from the content, not maintained beside it.

## Does llms.txt actually work? What the measurements show

This is the question people actually mean, and the answer is no, as far as anything measurable shows.

Google's Search Central documentation states it directly: Google Search does not use llms.txt — not for rankings, not for AI Overviews, not at all. That position has been consistent since Gary Illyes confirmed it in July 2025.

Independent measurement points the same way. Across hundreds of thousands of domains, 97% of llms.txt files were never fetched by anything, and statistical models looking for a citation effect found none. One monitoring exercise covering more than 500 million AI bot visits over a ninety-day window recorded 408 requests targeting llms.txt directly — a rounding error.

Adoption reflects that. A study of 300,000 domains put the implementation rate at just over 10%, eighteen months into an industry conversation that has been anything but quiet.

### Why the file has this problem structurally

John Mueller compared llms.txt to the keywords meta tag, and the comparison is worth taking seriously rather than as dismissal.

The keywords tag failed for a specific reason: it was a self-declaration that nobody could verify. A site said what it was about, and there was nothing stopping it from saying whatever was most convenient. Search engines eventually stopped reading it entirely.

llms.txt has the same shape. It's a file in which a site describes its own importance, with no verification anywhere in the loop. That doesn't make it dishonest, but it does explain why systems that have to judge credibility at scale treat it cautiously — and it's the same reason the rest of AI visibility work rewards what can be corroborated rather than what's asserted.

## Is llms.txt still used, and who reads it

Here's where the "useless" verdict overshoots, because several major AI companies do use the file — just not for the thing most people are asking about.

Anthropic recommends it in its guidance on writing for agents. OpenAI maintains llms.txt files for its Agents SDK. Perplexity has said it retrieves the file to help prioritise which pages to read. And in May 2026 Chrome's Lighthouse moved its llms.txt audit out of experimental status into a default agentic browsing category — putting the Chrome team and the Search team on visibly opposite sides.

The reconciliation is that the file serves agentic retrieval, not conversational answering.

When a developer asks a coding assistant to work against someone's documentation, the assistant can fetch that site's llms.txt as a table of contents and traverse only the pages it needs, rather than scraping the whole site. That's a real workflow, it happens constantly, and it's invisible to studies that measure crawler behaviour or citation rates — because it isn't crawling and it isn't citation.

Which explains the adoption pattern precisely. The companies shipping llms.txt are documentation-heavy: developer platforms, infrastructure providers, API companies. Marketing sites, blogs and B2B service sites mostly haven't, and the reason isn't neglect — their audience isn't coding agents.

## Should your site have an llms.txt file

Three questions settle it, and they're worth answering honestly rather than optimistically.

Do agents work against your content? If you publish documentation, an API reference or technical material that developers point tools at, yes — ship one. The benefit is real and immediate for those users, whatever the citation studies say.

Are you adding it to improve AI visibility? Then no, and the effort belongs somewhere with evidence behind it: facts stated so a machine can repeat them, structured data that matches your copy, corroboration outside your own site, and content that survives being summarised. Those move the needle; this doesn't. I measured what assistants actually cite across 141 answers, and nothing in that data points at this file.

Do you have spare capacity and a taste for optionality? Then it's defensible. The file takes an hour, breaks nothing, and if agentic browsing grows as a traffic source, having it costs you nothing to have had. Just don't count it as work done on visibility.

For most businesses the honest answer is the second one.

## The implementation mistake that actually causes damage

If you do ship one, avoid the version that turns a harmless file into a real problem.

A popular approach involves generating a markdown copy of every page on the site alongside the index. If those copies are indexable, you've created duplicate content at scale — every page now exists twice, competing with itself, diluting crawl budget across a set of files that serve no reader.

The file is supposed to be a curated index: your important pages, described briefly, linked. Not a second copy of the site. A small site can list twenty entries; a large one should list the twenty that matter rather than all nine hundred.

## Common questions about llms.txt

**Is llms.txt mandatory?**
No. It is a proposal, not a standard, and no search engine or assistant requires it. Nothing breaks if the file is absent.

**Is llms.txt still used?**
Yes, but narrowly. Documentation platforms and agent tooling read it; Google Search does not. Adoption sat just above 10% of surveyed domains eighteen months after the proposal appeared.

**Is llms.txt useful?**
It is useful if coding agents and documentation readers work against your content. It is not useful as a way to get cited more often in AI answers — that part has been measured and the effect is not there.

**What is the difference between llms.txt and robots.txt?**
robots.txt controls whether a crawler may read your site and is honoured by every major AI company. llms.txt suggests what to read once reading is allowed, and cannot block anything.

**Where does the file go?**
At the root of the domain, answering at `/llms.txt`, served as `text/plain`.

## Where to start if you're wondering about llms.txt

Check robots.txt first — that is the file that can cost you traffic today. Then, if your content is the kind agents work against, [generate a draft](/tools/llms-txt-generator), spend twenty minutes writing real descriptions, and ship it.

If you were hoping it would make assistants recommend you more often, spend that hour on something the evidence supports instead.
