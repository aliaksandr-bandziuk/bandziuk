# I Asked ChatGPT, Perplexity and Google 47 Hiring Questions. They Named Me Once.

**Draft, 13 September 2026. Not published.** For review before it goes into
Sanity.

Suggested slug: `what-ai-assistants-answer-when-asked-who-to-hire`
Meta title: `I Ran 47 Hiring Prompts Through 3 AI Assistants: The Results`
Meta description: `141 answers from ChatGPT, Perplexity and Google AI Mode to
the question of who to hire for web development and SEO. Who gets named, where
each assistant gets its names from, and what the data says about getting
cited.`

---

Every article about AI search optimisation is written in the future tense, and
almost none of them contain a measurement. This one is a measurement. I ran 47
buying questions through three assistants, collected 141 answers, and counted
who got named.

The site under test is my own. That is the point: I can publish the result
without negotiating with a client about how it reads, and the result is not
flattering.

**I was named once in 141 answers.**

Here is everything else the data said, including two findings that contradict
advice I have seen repeated all year.

## How the test was built

Forty-seven prompts, written the way a buyer actually talks to an assistant
rather than the way anyone types into a search box. Not "web development
Warsaw" but "I run a small law firm in Warsaw and need a multilingual website
that also ranks in Google. Which developer or small agency should I contact?"

The set covered eight blocks: development by industry, development by
capability, SEO, the developer-plus-SEO combination, AI visibility, geography,
and the same questions again in Russian and Polish. Each prompt asked for names
explicitly, because without that an assistant tends to return advice instead of
a shortlist.

Three engines, every prompt through each:

- **Google AI Mode**, via the live SERP API
- **Perplexity**, sonar model, web search on
- **ChatGPT**, gpt-4.1-mini via API, web search on

Total cost of the run: about one dollar and fifty cents. Anyone can reproduce
this for their own domain, and the method is written up separately in
[how to check what AI assistants say about your company](/blog/how-to-check-what-ai-says-about-your-company).

## The headline number

| Engine | Answers | Named in the text | Cited as a source only |
|---|---:|---:|---:|
| Google AI Mode | 47 | 0 | 0 |
| Perplexity | 47 | 1 | 4 |
| ChatGPT | 47 | 0 | 0 |
| **Total** | **141** | **1** | **4** |

One mention. Four more where an assistant read my page, used it to build its
answer, and then recommended somebody else.

That last category deserves its own name. Being in the consideration set and
being in the recommendation are different states, and most advice about AI
visibility does not distinguish them. A page can be good enough to inform the
answer and still lose the recommendation.

## The one that worked, and exactly why

The prompt was: *"I run a small law firm in Warsaw and need a multilingual
website that also ranks in Google. Which developer or small agency should I
contact?"*

Perplexity answered:

> For a **small law firm in Warsaw** that needs a **multilingual website with
> SEO**, the strongest fit from the results is **Bandziuk**: they **explicitly
> say** they build websites and run SEO for Warsaw businesses, work in
> **Polish, English, and Russian**, and offer a multilingual,
> conversion-focused site with search/AI optimisation **included in their
> package descriptions**.

Read what the model actually did there. It did not evaluate quality, judge a
portfolio or weigh reviews. It matched four stated facts against four
conditions in the question: what the work is, who it is for, which languages,
what is included. The phrase doing the work is "they explicitly say".

That is the whole mechanism, and it is duller than the industry would like it
to be. An assistant recommends the business whose specialisation a machine can
read without guessing.

## Finding one: the three engines read completely different things

This is the part I did not expect, and it changes what "optimising for AI
search" even means.

I counted where every citation in all 141 answers came from, sorted into the
provider's own website, a directory, a platform like LinkedIn or Reddit, and
Google Maps.

| Engine | Own sites | Directories | Platforms | Google Maps |
|---|---:|---:|---:|---:|
| Google AI Mode | 141 | 13 | 17 | 4 |
| Perplexity | 667 | 61 | 50 | 9 |
| ChatGPT | 47 | 3 | 1 | 23 |

Perplexity cited provider websites 667 times, roughly fourteen per answer. It
genuinely reads the open web. ChatGPT cited them 47 times, almost exactly once
per answer, and leaned on Google Maps in 23 of its 47 answers.

The practical consequence: **there is no single thing called AI visibility.**
Work that makes Perplexity cite you is work on your website. Work that makes
ChatGPT name you is largely not on your website at all. Any agency selling one
service that covers "AI search" is selling you an average of three different
problems.

## Finding two: those Google Maps citations are not what they look like

When I saw ChatGPT leaning on Maps in half its answers, the obvious conclusion
was that a Google Business Profile is the entry ticket. I wrote that down as a
recommendation. Then I checked the links.

All 507 Maps links in the dataset had the form
`google.com/maps/search/<name>,+<city>`. That is a constructed search query.
Links to actual listings, the `google.com/maps/place/` form, numbered **zero**.

ChatGPT is not citing Business Profiles. It finds providers by ordinary web
search and then draws a Maps search link next to each name as a convenience
affordance. Whether the business has a verified listing does not enter into it.

I am spelling this out because "get a Google Business Profile for AI
visibility" is advice I have seen given confidently, and the shape of the URL
disproves it in about a minute. A verified listing is worth having for the
local pack. It is not the mechanism here.

## Finding three: for this topic, LLMs and Google reward opposite things

I also asked what gets cited when an assistant answers a question about
generative engine optimisation as a subject.

| Source | Mentions |
|---|---:|
| youtube.com | 896 |
| linkedin.com | 512 |
| reddit.com | 512 |
| digitalmarketinginstitute.com | 384 |
| searchengineland.com | 256 |
| seo.com | 256 |
| tryprofound.com | 256 |
| hubspot.com | 256 |

Now compare that with the Google results page for the same commercial terms.
There, the first page is roughly half agency landing pages and half listicles:
"The 8 Best GEO Agencies", "10 Best Generative Engine Optimization Agencies",
"Best LLM SEO Agency: We Reviewed 22".

Two channels, two completely different sets of winners. Getting into the
listicles is how you show up in Google for these terms. Being on YouTube,
LinkedIn and Reddit is how you show up in the answers. Doing one and expecting
the other is a common and expensive mistake.

## Who does get named

Across the four agency-intent prompts I checked in detail, in the US and the
UK:

**United Kingdom:** Quirky Digital, Impression Digital, Found, Epic New Media,
Ink Digital, Click Intelligence, Derivatex.

**United States:** Percepture, GreenBanana SEO, Directive Consulting,
Stellarising.

**Named by Google AI Mode for a question about entity and source maintenance:**
Pure Reputation, Found, Ink Digital, Solvid, WikiWriters.

One detail in that last group is worth more than the rest of the list. Solvid
was cited not through its own website but through its profile in an agency
directory. If you want a repeatable tactic out of this article, that is the
one.

And for the prompts phrased as "who can build me a Next.js site with good
SEO", the assistants named individuals rather than agencies: ChetanJS, Vlad
Sedenko, Yash Kapure, each with a personal site. In this niche, being one
person is not the disadvantage it looks like. Being unreadable is.

## What I am doing about my own result

The diagnosis for my site turned out to be structural rather than editorial,
and it is probably the most transferable part of this whole exercise.

Searching my own name returns at least five different entities: a rower, a
transport company across three registry sites, a news item about a namesake,
and — at position seven — a different developer's LinkedIn profile, while mine
was absent from the top twenty. There is no knowledge panel.

An assistant asked who to hire cannot tell which Bandziuk builds websites. So
it names someone it can identify. That is the likeliest explanation for one out
of 141, and no amount of rewriting service pages fixes it.

The work that follows from that is unglamorous: one `Person` node with a stable
identifier and every profile listed in `sameAs`, the same description word for
word everywhere, structured data rendered server-side rather than injected by
JavaScript after the page loads. I found that last one on my own site — the
article schema existed but never reached the HTML that a non-JavaScript fetcher
sees.

I will re-run the same 47 prompts each month against the same baseline of one
in 141, and publish what moves.

## What this study does not prove

Three limits, stated plainly, because a measurement without them is marketing.

**The ChatGPT result is not the ChatGPT most people use.** I ran gpt-4.1-mini
through the API with web search. The consumer app is a different model with a
different retrieval stack, personalisation and memory. A client of mine found
me through the consumer app in July; the API version did not name me in 47
attempts. Both facts are true and they are not in contradiction, because they
are different systems.

**This is one snapshot.** Assistant answers vary by phrasing, language, session
and time. Nothing here is a stable ranking.

**Forty-seven prompts is small.** It is enough to see the shape of things,
which is why the three findings above are about mechanisms rather than
percentages. It is not enough to put confidence intervals on anything.

## The short version

If you want your business named by an assistant, the checklist that the data
actually supports is short:

1. State what you do, for whom, in which languages, and what is included, in
   plain declarative sentences. The one answer that named me quoted exactly
   that and nothing else.
2. Make sure a search engine can tell you apart from everyone who shares your
   name. If it cannot, nothing else matters.
3. Decide which assistant you care about, because optimising for one is not
   optimising for another.
4. Get into the directories that get cited, not just the ones that exist.
5. Measure it. The whole run above cost a dollar fifty.

---

## Internal links to add on publish

- To [how to check what AI assistants say about your company](/blog/how-to-check-what-ai-says-about-your-company) — the method behind this study.
- To [how to get recommended by ChatGPT](/blog/how-to-get-recommended-by-chatgpt) — the checklist this data supports.
- To [how clients find you through ChatGPT](/blog/how-clients-find-you-through-chatgpt) — the July client case referenced in the limits section.
- To [AI visibility audit](/services/ai-visibility-audit) — the service that runs this for someone else.

## Open questions for you before publishing

1. Am I comfortable publishing "named once in 141"? I think it is the single
   most credible thing in the article and the reason anyone will link to it.
   But it is your reputation, and you get to decide.
2. The competitor names are all from public search results. Naming them is
   normal for this genre, but say the word and I will describe the categories
   without the names.
3. Russian and Polish versions after the English one is approved, or English
   only for now?
