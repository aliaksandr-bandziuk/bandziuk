# DRAFT — EN only, for approval before PL/RU
# Тема свободна: в статье website-not-showing-in-google слово lastmod не встречается ни разу,
# changefreq и priority — тоже. Общая статья про индексацию есть, этот механизм не разобран.
# Обезличено: случай описан без указания владельца сайта. Цифры и даты настоящие.
# Заявления про поведение Google сверены с developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

Title: Sitemap lastmod: why Google stops re-reading your sitemap and how to fix it
Slug: google-stopped-reading-sitemap-lastmod
Meta title: Sitemap lastmod: why Google stops re-reading it
Meta description: A sitemap without lastmod gets re-read less and less, so new URLs stay undiscovered. How to check the Last read date in Search Console and fix it.

---

> Quick answer: Google ignores `changefreq` and `priority` entirely, and uses `lastmod` only when it is consistently accurate. A sitemap with no `lastmod` gives Google no reason to come back, so it gradually stops re-reading the file — and any URL added after the last read stays undiscovered. Check the "Last read" date in the Sitemaps report: if it is months old while you have been publishing, that is the problem. Fixing it moves pages from invisible to discovered. It does not make them rank.

There is a failure mode in technical SEO that produces no error anywhere. The sitemap validates. Search Console reports it as successful. The pages exist, load correctly and return 200. And Google has never seen most of them.

## 415 URLs in the sitemap, 27 discovered pages in Search Console

A site had 415 URLs in its sitemap. The Sitemaps report in Search Console showed the file as read successfully, no errors, no warnings. The number next to "Discovered pages" was 27.

Not 27 indexed — 27 *discovered*. Google had never fetched the other 388 URLs to make any judgement about them at all. They were not rejected, not deprioritised, not competing badly. They were unknown.

The date next to "Last read" was almost a year old. Everything published after that date had never entered Google's queue, and the sitemap that was supposed to announce it was being ignored.

## What lastmod does in a sitemap, and why changefreq and priority do nothing

The sitemap protocol defines three optional elements per URL: `lastmod`, `changefreq` and `priority`. Their real-world status is not equal, and this is where most sitemap generators go wrong.

Google's own documentation states plainly that it ignores `<priority>` and `<changefreq>` values. Both have been ignored for years. A generator that carefully computes `changefreq: weekly` and `priority: 0.8` for every URL is producing decoration.

`lastmod` is different: Google uses it, but conditionally. The documentation says the value is used only if it is "consistently and verifiably accurate" — verifiable, for example, by comparing it against when the page actually changed. It should reflect the last *significant* change: main content, structured data, links. Bumping it on a copyright-year edit is not significant, and a site that bumps it on everything teaches Google to distrust the field.

So there is a spectrum, and both ends fail. A sitemap with no `lastmod` at all gives Google nothing to work with. A sitemap where every URL claims to have changed today gives Google a reason to stop believing the field.

## Why Google stops re-reading a sitemap without lastmod

Crawling budget is finite and re-reading a sitemap costs something. If the file never carries a signal that anything inside it changed, the reasonable behaviour is to check it less and less often.

That is fine for a static site. It is quietly catastrophic for a site that publishes: every new URL is announced in a file nobody is opening. The pages are not blocked, not `noindex`, not orphaned in any way a crawler diagnostic would catch. They are simply never mentioned to Google in a way that prompts a visit.

And nothing in Search Console flags this as a problem, because from the sitemap's point of view nothing is wrong. The report says "Success". It just also says the file was last read eleven months ago, and almost nobody reads that line.

## How to check your sitemap lastmod in Search Console in five minutes

Three checks, in order.

Open the Sitemaps report in Search Console and look at the **Last read** date, not the status. Compare it to when you last published something. A gap of months on a site that publishes regularly is the finding.

Compare **discovered pages** against the number of URLs in your sitemap file. If the sitemap lists 400 URLs and Search Console has discovered 30, the gap is not a ranking problem and no amount of content work will close it.

Open the sitemap file itself in a browser and look at a URL entry. If there is no `<lastmod>` line, you have found the cause. If there is one and every URL carries the same timestamp, you have found a different version of the same problem.

## How to fix a sitemap with no lastmod

The change is small and lives in whatever generates the sitemap.

Emit a real `lastmod` per URL, taken from the moment that page's content actually changed — in a headless CMS, the document's own updated timestamp; in a file-based site, the file's modification time. It has to be per URL. A single site-wide timestamp copied onto 400 entries is the "everything changed today" failure.

Drop `changefreq` and `priority`. They do nothing, and removing them makes it obvious to the next person that the sitemap is not relying on decoration.

Check what your CDN is doing with the file. A sitemap served from a cache with a long TTL can go stale on the edge while the origin is producing correct dates. A short `s-maxage` with `stale-while-revalidate` keeps it cheap and current.

Then resubmit the sitemap in Search Console. Resubmission alone does nothing if the file has not changed — it is the combination of a file that now carries change signals and a request to re-read it.

## What changed after fixing lastmod: discovered pages went from 27 to 415

On the site above, the sitemap was redeployed with per-URL `lastmod` derived from each document's real update time, and resubmitted. Discovered pages went from 27 to 415 — the entire sitemap.

That is the honest extent of it, and the distinction matters more than the number. Discovery is Google agreeing to look. Indexing is Google deciding the page is worth storing, and ranking is a further question again. A page that moves from "unknown" to "discovered" has become eligible to be judged; it has not been judged favourably.

In practice a share of those pages will be crawled and declined — "Crawled – currently not indexed" — and that outcome has nothing to do with sitemaps. It is about whether the page earns its place: whether anything links to it, whether it says something the index does not already contain, whether the site has the standing to have thin pages tolerated.

## Problems that fixing the sitemap does not solve

It does not fix a page nobody links to. It does not fix a page that duplicates another page on the same site. It does not fix a site with no external references, which is the constraint under most small sites' indexing problems and the one no technical change reaches.

What it does fix is a specific, invisible, entirely mechanical failure: pages that were never in the running because the file announcing them had stopped being read. That is worth ten minutes of checking, because unlike most SEO work its outcome is binary and immediate — either Google has your URLs or it does not, and the Sitemaps report will tell you which within days.

If your discovered-pages number is far below the number of URLs you submitted, start there before writing anything new. There is no point adding to a list nobody opens.
