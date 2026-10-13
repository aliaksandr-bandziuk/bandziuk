# Medium: llms.txt

Written for: Medium readers who run or market a website and keep seeing llms.txt
recommended. Non-technical — the implementation piece is the dev.to one.
Paste from the title down. Subtitle goes in Medium's subtitle field.
Tags (five): SEO, Artificial Intelligence, Marketing, Web Development, Content Strategy.
No canonical to bandziuk.com on purpose: this is its own piece, and Medium
ranks on the first page for "llms txt" by itself — that is the point of posting
it here.

---

## Title

97% of llms.txt files have never been fetched by anything

## Subtitle

The file keeps being recommended as "the new robots.txt". Here is what the measurements say, and the one case where it genuinely earns its place.

---

Somewhere in the last year you were probably told to add an `llms.txt` file to your site. The pitch is consistent: AI systems use it to understand your pages, it is the new robots.txt, and adding it improves your chances of being recommended by ChatGPT.

Each part of that is either wrong or describes something other than what it sounds like. The file is real and some serious companies use it — just not for the thing you were sold.

## What llms.txt actually is

A plain text file at the root of a domain, written in markdown, holding a curated map of the site: the pages that matter, with a short description each, grouped into sections.

The proposal dates from September 2024, and the idea behind it is sound. A documentation site with thousands of pages is hard for a machine to read efficiently. A short, curated index gives it a better starting point than crawling everything.

Note what that describes, though. It is a navigation aid. It cannot block anything, it is not a ranking signal, and it tells a system nothing it could not have found on its own — it just makes finding it cheaper.

## Does llms.txt work? What the measurements show

This is where the marketing and the evidence part company.

Google's own Search Central documentation states that Google Search does not use llms.txt. Not for rankings, not for AI Overviews, not at all. That position has been consistent since July 2025.

Independent measurement points the same way. Across hundreds of thousands of domains, **97% of llms.txt files were never fetched by anything**. One monitoring exercise covering more than 500 million AI bot visits across ninety days found **408 requests** that targeted the file — a rounding error. Statistical models looking for an effect on citations found none.

Adoption reflects it: a study of 300,000 domains put implementation at just over 10%, eighteen months into a conversation that has been anything but quiet.

## Why the file has the keywords meta tag problem

John Mueller compared llms.txt to the old keywords meta tag, and the comparison deserves more than a laugh.

The keywords tag failed for a specific reason. It was a self-declaration nobody could verify: a site said what it was about, nothing stopped it saying whatever was convenient, and eventually search engines stopped reading it.

llms.txt has the same shape. It is a file in which a site describes its own importance, with no verification anywhere in the loop. That does not make it dishonest. It does explain why systems that have to judge credibility at scale treat it cautiously — and it is the same reason everything else in AI visibility rewards what can be corroborated rather than what is asserted.

## Where llms.txt genuinely earns its place: agentic retrieval

Here the "useless" verdict overshoots, because several major AI companies do use the file — for a job most people are not asking about.

Anthropic recommends it in its guidance on writing for agents. OpenAI maintains llms.txt files for its Agents SDK. Perplexity says it retrieves the file to prioritise which pages to read. And in May 2026 Chrome's Lighthouse moved its llms.txt audit out of experimental status into a default category — putting the Chrome team and the Search team on visibly opposite sides.

The reconciliation: the file serves **agentic retrieval**, not conversational answering.

When a developer points a coding assistant at someone's documentation, that assistant can fetch the site's llms.txt as a table of contents and read only the pages it needs instead of scraping everything. That workflow is real, it happens constantly, and it is invisible to any study measuring crawler behaviour or citation rates — because it is neither crawling nor citation.

Which explains the adoption pattern precisely. The companies shipping llms.txt are documentation-heavy: developer platforms, infrastructure providers, API companies. Marketing sites and B2B service sites mostly have not, and that is not neglect. Their audience is not coding agents.

## Should you add an llms.txt file to your site?

Three questions settle it.

**Do agents work against your content?** If you publish documentation, an API reference or technical material that developers point tools at — yes. The benefit is immediate for those users, whatever the citation studies say.

**Are you adding it to improve AI visibility?** Then no. That hour belongs where there is evidence: facts stated so a machine can repeat them, structured data that matches your copy, corroboration outside your own site, content that survives being summarised.

**Do you have spare capacity and a taste for optionality?** Then it is defensible. The file takes an hour, breaks nothing, and if agentic browsing grows as a traffic source you will be glad it exists. Just do not count it as visibility work.

For most businesses the honest answer is the second one.

## The one llms.txt mistake that causes real damage

A popular variant generates a markdown copy of every page on the site alongside the index. If those copies are indexable, you have created duplicate content at scale: every page now exists twice, competing with itself, spreading crawl budget across files no reader will ever open.

The file is a curated index. A small site lists twenty entries. A large one lists the twenty that matter — not all nine hundred.

## llms.txt vs robots.txt: which one actually controls AI access

Worth separating, because the two get conflated constantly and only one has real backing.

robots.txt is honoured in practice by every major AI crawler operator — OpenAI, Anthropic, Google, Perplexity. If you want to control whether AI systems read your site, that is where it happens. llms.txt cannot block anything; it is a suggestion about what to read once reading is already allowed.

So the thing worth checking today is not whether you have an llms.txt. It is whether your robots.txt is accidentally blocking crawlers you wanted. That takes two minutes, and it is the one of the two that can cost you.

---

The full version — the format with a working example, how to generate the file from a CMS, and the mistakes worth avoiding — is here: [llms.txt: what it is, how to write one, and whether it does anything](https://www.bandziuk.com/blog/does-your-site-need-llms-txt?utm_source=medium&utm_medium=social&utm_campaign=llms-txt&utm_content=article). If you just want the file, I built a [free generator](https://www.bandziuk.com/tools/llms-txt-generator?utm_source=medium&utm_medium=social&utm_campaign=llms-txt&utm_content=tool) that builds one from your sitemap.

*Aliaksandr Bandziuk builds multilingual websites and works on search and AI visibility for businesses in Europe — [bandziuk.com](https://www.bandziuk.com/?utm_source=medium&utm_medium=social&utm_campaign=llms-txt&utm_content=bio).*
