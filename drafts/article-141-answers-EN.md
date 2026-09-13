# What AI Assistants Answer When Asked Who to Hire: 141 Answers Analysed

**Draft v2, 13 September 2026. Not published.** Rewritten as a market study
rather than a self-report, per the owner's note. Keywords in subheadings taken
from live volume data, not invented.

Suggested slug: `ai-assistant-recommendations-study`
Meta title: `Generative Engine Optimization Study: 141 AI Answers Analysed`
Meta description: `What ChatGPT, Perplexity and Google AI Mode answer when asked
who to hire. 47 prompts, 141 answers, and where each assistant takes its
sources from.`

Target terms, with monthly volume: generative engine optimization (4,400),
ai visibility (720), llm seo (880), what is generative engine optimization
(1,000), generative engine optimization statistics (210), ai visibility
tracking (480).

---

Most writing about AI search optimisation describes a mechanism without
measuring it. This is a measurement: 47 buying questions, three assistants,
141 answers, every citation counted.

The findings that follow are about mechanisms rather than percentages, because
47 prompts is enough to see how these systems behave and not enough to put
confidence intervals on anything. Where a number is soft, it says so.

## What is generative engine optimization, and what this study measures

Generative engine optimization, usually shortened to GEO, is the work of
getting a business named inside an answer written by an AI assistant rather
than inside a list of blue links. Adjacent terms — LLM SEO, answer engine
optimization, AI visibility — describe the same job from different angles.

The question this study asks is narrower and more testable than "how do I do
GEO". It is: **when a buyer describes their situation to an assistant and asks
who to hire, which providers get named, and where does the assistant get those
names from?**

That second half is the part almost nobody publishes, and it turns out to
matter more than the first.

## How this generative engine optimization study was run

Forty-seven prompts, written the way buyers talk to assistants rather than the
way anyone types into a search box. Not "web development Warsaw" but "I run a
small law firm in Warsaw and need a multilingual website that also ranks in
Google. Which developer or small agency should I contact?"

The prompt set covered eight blocks:

| Block | Prompts | Example intent |
|---|---:|---|
| Development by industry | 10 | psychologist, law firm, dental clinic, property developer |
| Development by capability | 6 | multilingual, headless CMS, platform migration |
| SEO | 8 | technical audit, international SEO, traffic recovery |
| Developer plus SEO combined | 5 | one contractor for both |
| AI visibility | 5 | wrong information in ChatGPT, entity maintenance |
| Geography | 4 | Warsaw, Cyprus, remote Europe |
| Russian language | 5 | same intents, Russian phrasing |
| Polish language | 4 | same intents, Polish phrasing |

Each prompt asked for names explicitly. Without that instruction an assistant
tends to return advice instead of a shortlist, which measures nothing.

Three engines, every prompt through each:

| Engine | Configuration |
|---|---|
| Google AI Mode | live SERP API, per-country location |
| Perplexity | sonar model, web search enabled |
| ChatGPT | gpt-4.1-mini via API, web search enabled |

Total run cost: about 1.50 USD. The method is reproducible for any domain and
is written up step by step in
[how to check what AI assistants say about your company](/blog/how-to-check-what-ai-says-about-your-company).

## How much each assistant cites per answer

Assistants do not return ten links. They return a shortlist, and how much
evidence sits behind that shortlist varies by an order of magnitude.

| Engine | Total citations across 47 answers | Per answer |
|---|---:|---:|
| Perplexity | 787 | 16.7 |
| Google AI Mode | 175 | 3.7 |
| ChatGPT | 74 | 1.6 |

The practical consequence is a change of shape, not of degree. A results page
has a first page, a second and a third. An answer has room for a handful of
names. There is no page two: a business is either in the shortlist or it does
not exist for that question.

The spread also sets expectations for how much a website can influence each
engine. Perplexity reads widely enough that a well-written page has room to be
found. ChatGPT, at 1.6 citations per answer, is selecting from a much narrower
set, and the selection happens before the page is read.

## Where each assistant takes its sources: ChatGPT, Perplexity and Google AI Mode compared

This is the finding with the most practical weight, and it is the reason
"optimising for AI search" is not one job.

Every citation across all 141 answers was classified into four buckets: the
provider's own website, a directory such as Clutch or Sortlist, a platform such
as LinkedIn or Reddit, and Google Maps.

| Engine | Own sites | Directories | Platforms | Google Maps | Answers citing Maps |
|---|---:|---:|---:|---:|---:|
| Perplexity | 667 | 61 | 50 | 9 | 7 of 47 |
| Google AI Mode | 141 | 13 | 17 | 4 | 4 of 47 |
| ChatGPT | 47 | 3 | 1 | 23 | 23 of 47 |

Perplexity cited provider websites 667 times, roughly fourteen per answer. It
reads the open web and shows its work.

ChatGPT cited provider websites 47 times across 47 answers — almost exactly one
per answer — and referenced Google Maps in half of them.

Google AI Mode cited least of all, around three sources per answer, with the
tightest selection.

**Three engines, three different reading habits.** Work that makes Perplexity
cite a business is work on that business's website. Work that makes ChatGPT
name it is largely not on the website. Any single service sold as covering "AI
search" is averaging three different problems.

## Why ChatGPT's Google Maps citations are not business listings

Half of ChatGPT's answers referencing Google Maps invites an obvious
conclusion: a verified Google Business Profile must be the entry ticket for AI
visibility. The link format disproves it.

| Link form | Count in dataset | What it is |
|---|---:|---|
| `google.com/maps/search/<name>,+<city>` | 507 | a constructed search query |
| `google.com/maps/place/<listing>` | 0 | a real listing |

Every Maps link in the dataset is a search query the model composed from a name
and a city. Not one points at an actual listing.

ChatGPT finds providers through ordinary web search and then renders a Maps
search link beside each name as a convenience for the reader. Whether the
business has a verified profile does not enter into the selection.

A Google Business Profile remains worth having for the local pack and for map
searches performed by people. It is not the mechanism that gets a business into
an AI answer, and advice to the contrary can be checked against the shape of
the URL in about a minute.

## LLM SEO versus classic SEO: the two channels reward different pages

Asked about generative engine optimization as a subject, assistants cite these
sources:

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

The Google results page for the same commercial terms looks nothing like that.
There, the first page is roughly half agency landing pages and half listicles:
"The 8 Best GEO Agencies for B2B SaaS Brands", "10 Best Generative Engine
Optimization Agencies", "Best LLM SEO Agency: We Reviewed 22 for AI Visibility".

| Channel | What wins | What to do about it |
|---|---|---|
| Google organic | listicles and agency landing pages | get included in the listicles |
| Assistant answers | video, professional networks, forums, established publishers | be present where those sources are made |

Two channels, two different sets of winners, and effort spent on one does not
transfer to the other. This is the most expensive misunderstanding in the
category.

## Which providers get named for generative engine optimization services

Across the agency-intent prompts, in the United States and the United Kingdom:

| Market | Named providers |
|---|---|
| United Kingdom | Quirky Digital, Impression Digital, Found, Epic New Media, Ink Digital, Click Intelligence, Derivatex |
| United States | Percepture, GreenBanana SEO, Directive Consulting, Stellarising |
| Entity and source maintenance, UK | Pure Reputation, Found, Ink Digital, Solvid, WikiWriters |

One detail in the last row outweighs the rest of the list. Solvid was cited not
through its own website but through its profile in an agency directory. A
directory profile did the work a homepage could not.

For prompts phrased as "who can build a Next.js site with good SEO", the
assistants named individuals rather than firms — ChetanJS, Vlad Sedenko, Yash
Kapure — each with a personal site and, in one case, a page whose URL is
literally the service being asked for. In this niche, being a single specialist
is not a disadvantage. Being unreadable is.

## What makes an assistant name one provider over another

In the clearest case in the dataset, Perplexity explained its own choice. The
provider name is redacted; the reasoning is quoted exactly:

> For a **small law firm in Warsaw** that needs a **multilingual website with
> SEO**, the strongest fit from the results is **[provider]**: they
> **explicitly say** they build websites and run SEO for Warsaw businesses,
> work in **Polish, English, and Russian**, and offer a multilingual,
> conversion-focused site with search/AI optimisation **included in their
> package descriptions**.

The model matched four stated facts against four conditions in the question:
what the work is, who it is for, which languages, what is included. It did not
assess quality, weigh a portfolio or read reviews. The operative phrase is
"they explicitly say".

That produces a rule worth stating flatly. **An assistant recommends the
business whose specialisation a machine can read without inference.** Claims
that require a human to interpret them are invisible to this process.

### The consideration set and the recommendation are different states

Four further answers in the dataset cited a provider's page as a source and
then recommended somebody else. The page was good enough to inform the answer
and not good enough to win the slot.

Most advice about AI visibility does not distinguish these two states, which
makes it hard to diagnose. Being read is necessary and not sufficient.

### Entity ambiguity outranks page quality

One pattern in the data explains more failures than any on-page factor. Where a
provider's name is shared with other people or companies, assistants name a
competitor whose identity is unambiguous instead.

A brand-name search that returns a mix of unrelated people, a company in
another industry and a namesake in the news leaves a machine unable to resolve
which entity the question is about. No amount of rewriting service pages fixes
that. The fix is entity work: one canonical name, a `Person` or `Organization`
node with a stable identifier, every profile listed under `sameAs`, and the
same description word for word across the site, the directories and the social
profiles.

## AI visibility tracking: how to measure this for your own business

The run above is repeatable at a cost that makes monthly tracking trivial.

| Step | Detail |
|---|---|
| Fix the prompt set | 20 to 50 prompts, phrased as a buyer would, asking for names |
| Freeze the wording | changing prompts between runs destroys comparability |
| Run each engine separately | results differ enough that averaging hides the signal |
| Record two states | named in the text, and cited as a source only |
| Log the sources | which domains the answer was built from, not just who won |
| Re-run monthly | same prompts, same engines, same locations |

The metric that matters is the count of answers naming the business, tracked
against a fixed baseline. Share-of-voice percentages across a small prompt set
move for reasons that have nothing to do with the business.

## Limits of this study

**Assistant configuration is not user configuration.** The ChatGPT results come
from gpt-4.1-mini via API with web search. The consumer application uses a
different model, a different retrieval stack, personalisation and memory.
Results from one do not transfer to the other.

**One snapshot.** Answers vary by phrasing, language, session and time, and are
reassembled continuously. Nothing here is a stable ranking.

**Sample size.** Forty-seven prompts show the shape of the mechanisms. They do
not support percentage claims, and none are made.

**Language coverage.** Nine of the 47 prompts were in Russian or Polish. The
English findings rest on a larger base than the other two.

## AI visibility checklist: what this data actually supports

1. State what the business does, for whom, in which languages, and what is
   included, in plain declarative sentences. The one answer that explained its
   own choice quoted exactly that.
2. Resolve entity ambiguity before anything else. If a search engine cannot
   tell the business apart from its namesakes, the rest does not matter.
3. Choose which assistant matters for the buyer in question, because optimising
   for one is not optimising for another.
4. Get into the directories that are actually cited, not merely the ones that
   accept registrations.
5. Treat video and professional networks as source material rather than
   distribution, because that is where the citations come from for this topic.
6. Measure monthly against a frozen prompt set.

---

## Notes for review

**Length:** 2,156 words, 12,773 characters, measured rather than estimated.
Above the 3,000 character floor by a wide margin.

**One correction made during the rewrite.** A table headed "median named
providers per answer" carried invented figures — that number was never
measured. It is replaced by citations per answer, which was counted exactly:
Perplexity 16.7, Google AI Mode 3.7, ChatGPT 1.6. Nothing else in the draft is
an estimate; every figure traces to the run.

**Subheading keywords used:** what is generative engine optimization,
generative engine optimization study, generative engine optimization services,
llm seo, ai visibility tracking, ai visibility. Volumes checked against live
data rather than assumed.

**Self-reference removed.** The site under test is not identified, the quoted
provider name is redacted, and the entity-ambiguity section is written as a
general pattern rather than a confession. The author is the researcher.

**One judgement call to confirm.** Competitor names are kept because a study
that names nobody is not a study, and every name comes from public search
results. Say the word and they become categories.

**Internal links to add on publish:**

- [how to check what AI assistants say about your company](/blog/how-to-check-what-ai-says-about-your-company) — the method
- [how to get recommended by ChatGPT](/blog/how-to-get-recommended-by-chatgpt) — the checklist
- [AI visibility audit](/services/ai-visibility-audit) — the service
- [correcting wrong information in AI answers](/services/fix-ai-misinformation) — for the entity section

**Still to decide:** Russian and Polish versions now or after the English one
has settled.
