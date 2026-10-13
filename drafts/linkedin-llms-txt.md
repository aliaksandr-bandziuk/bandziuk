# LinkedIn: llms.txt

Written for: LinkedIn — business owners, marketers and developers who keep being
told to add the file. Short, one claim, the link in the post itself (not in the
first comment — standing rule).
Two options below: post A leads with the number, post B leads with the tool.
Pick one; posting both is a repeat.

---

## Option A — the finding

97% of llms.txt files have never been fetched by anything.

The file keeps being recommended as "the new robots.txt" — the one that makes ChatGPT recommend you. So I went looking for the evidence behind that.

Google's own documentation says Google Search does not use llms.txt. Not for rankings, not for AI Overviews. One monitoring exercise covering more than 500 million AI bot visits over ninety days found 408 requests that targeted the file. Statistical models looking for an effect on citations found none.

But "useless" overshoots, and this is the part that gets lost.

Anthropic recommends the file for writing for agents. OpenAI maintains one for its Agents SDK. Perplexity uses it to decide what to read. Chrome's Lighthouse moved its llms.txt audit into a default category this May.

The reconciliation: the file serves agentic retrieval, not conversational answering. When a coding assistant works against your documentation, a table of contents beats scraping the whole site.

Which tells you whether it is for you:

→ You publish documentation or an API reference that developers point tools at — ship it.
→ You run a marketing site and hoped it would improve AI visibility — spend that hour where there is evidence.

I wrote the long version with the measurements, the format and the one implementation mistake that genuinely causes damage: https://www.bandziuk.com/blog/does-your-site-need-llms-txt?utm_source=linkedin&utm_medium=social&utm_campaign=llms-txt&utm_content=post

And if you just want the file, there is a free generator that builds one from your sitemap: https://www.bandziuk.com/tools/llms-txt-generator?utm_source=linkedin&utm_medium=social&utm_campaign=llms-txt&utm_content=tool

---

## Option B — the tool

I built a free llms.txt generator. It reads your sitemap, groups the pages into sections and writes a valid file you can edit and download. No sign-up, nothing stored:
https://www.bandziuk.com/tools/llms-txt-generator?utm_source=linkedin&utm_medium=social&utm_campaign=llms-txt&utm_content=tool

Two things it deliberately does not do.

It does not crawl your pages. It reads the sitemap and nothing else, so the titles come from your URLs — which makes them a starting point, not an answer. A file whose titles are slugs with the hyphens taken out tells a reader nothing they could not have guessed. The editing pass is the actual work.

And it will not tell you the file will change anything, because the measurements say otherwise: Google states plainly that Search does not use llms.txt, and across hundreds of thousands of domains 97% of these files have never been fetched by anything.

Where it does earn its place is agentic retrieval — Anthropic, OpenAI and Perplexity all use it so an assistant can read a table of contents instead of scraping a documentation site.

So: if developers point tools at your content, generate one. If you were hoping it would make ChatGPT recommend you, the honest answer is here:
https://www.bandziuk.com/blog/does-your-site-need-llms-txt?utm_source=linkedin&utm_medium=social&utm_campaign=llms-txt&utm_content=article
