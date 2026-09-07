═══════════════════════════════════════════════════════════════
PORTFOLIO: moveandinvest.com — EN
═══════════════════════════════════════════════════════════════

[SLUG]
residency-by-investment-guide-with-sourced-figures

[TITLE]
A residency-by-investment guide covering five jurisdictions

[FULL TITLE — H1]
Building a trilingual residency-by-investment guide where every figure is checked against the law

[EXCERPT] (≤200 characters)
My own project: Next.js, Sanity, three languages, and one rule — no figure goes live until the instrument that sets it has been read.

[SEO]
metaTitle: Case study: a residency-by-investment guide in Next.js
metaDescription: How I built a trilingual site on residency by investment — a sources page, a legal change log, and a calculator for what entry really costs.

[KEY FEATURES]
clientName: Own project
industry: Relocation and residency by investment
website: https://www.moveandinvest.com/ (type — link, label moveandinvest.com, must be index, follow)
services: Website Development, SEO

[PREVIEW IMAGE]
alt: "Home page of the moveandinvest.com guide with the headline about what moving actually costs"

[PROBLEM]
Almost everything written about residency by investment is written by people selling the service. So figures that left the statute years ago keep circulating: thresholds repealed in 2023, deadlines rewritten last spring, and whole routes closed by a court ruling but still advertised with prices. Read five sites in a row and you get five different answers and not one link to a provision.

I needed a lead-generation asset of my own in this niche, and entering it the usual way — with content that repeats what everyone else says — was pointless: the domain has no age, no links and no budget for either. The one thing left unoccupied in this market is accuracy. Hence the rule everything else grew out of: no figure is published until the instrument that sets it has been read, and the date it was read stands next to it.

[TASK]
- Build a guide to five jurisdictions — Portugal, Greece, Malta, the UAE and Cyprus — in three languages, where every numeric claim traces back to a primary source
- Make the accuracy rule hold technically rather than through an author's discipline
- Build pages the niche does not have at all, rather than another version of the ones it does
- Do it with no paid fonts, no stock photography and no illustration budget
- Keep enquiry qualification inside the site instead of handing it to someone else's form
- Get the front end to a state where speed and markup obstruct neither search engines nor agents

[RESULTS]
- PageSpeed on the live build: 95 performance, 97 accessibility, 100 best practices, 100 SEO
- The agentic browsing check passes in full, 2 of 2 — the page structure is readable by assistants, not only by browsers
- In the first two weeks, Search Console shows hundreds of queries the site already ranks for
- The first substantive visit came from ChatGPT, to a page Google had not yet crawled
- Two pages that none of the twenty domains I audited have: a site-wide sources page with verdicts, and a legal change log with commencement dates and instrument numbers
- The change log is published as machine-readable data at a stable address, free to use with attribution
- The market audit produced four checkable findings, each of which became the content of a page: Malta's abolished route, Portugal's requirement that is not waived, the misdated Greek route, and the provision Cypriot fast-track residence actually rests on
- The whole site runs without a single paid font, stock photograph or purchased illustration

[WORK DONE]
- Next.js on the App Router with React and TypeScript, Sanity as the CMS, deployed on Vercel
- Multilingual architecture on native URLs per language rather than prefixes bolted onto English addresses
- A sources page: every claim carries its primary source, a verdict and the date it was read; every link is marked as an official publication or as a reproduction
- A legal change log with a jurisdiction filter, an anchor on every entry and a machine-readable export
- A cost calculator that itemises what is paid on top of the threshold, with the basis and a source link on every line
- A three-question route finder in which the budget is tested against the real total, not the advertised threshold
- Diagrams generated from code and shipped as self-contained files with embedded fonts
- A design system on measured colour pairs: the contrast ratio is recorded next to the value, and no colour may change without recomputing it
- An enquiry form that qualifies inside the site: jurisdiction, budget, timeline, purpose
- Build-time checks: a broken link to a sources anchor fails publication, a separate check stops two pages targeting the same query, and a figure cannot change in an article without its verification file changing
- Russian and Polish versions written against each language's own demand rather than translated from English

[SCREENSHOTS]

1. title: "The five-jurisdiction comparison table"
   alt: "Comparison table of residency-by-investment programmes across five countries with thresholds and tax regimes"
   caption: The same four columns for all five countries. Cyprus carries dashes — the primary sources do not open, and we do not publish what we have not checked.

2. title: "The advertised threshold against the real first year"
   alt: "Bars comparing the advertised threshold with the real first-year cost across four jurisdictions"
   caption: Everybody publishes the threshold. What is paid on top of it — taxes, fees, contributions, the first renewal — almost nobody does.

3. title: "Jurisdiction cards"
   alt: "Five country cards with outlines and the key figures of each programme"
   caption: Cyprus is grey and captioned "not verified" — the status is carried by a word, not only by a colour.

4. title: "The three-question route finder"
   alt: "Route finder with three questions and the assembled summary for the matching jurisdiction"
   caption: The budget is tested against the real total rather than the advertised threshold, and nothing is sent anywhere until the reader presses the button.

5. title: "What the extra is made of, line by line"
   alt: "Line-by-line breakdown of the cost of entering the Maltese programme with the basis and a source link"
   caption: Every line carries its basis, its rate and a link to the instrument that sets it.

6. title: "The cost calculator"
   alt: "Calculator with a budget field comparing four programmes by what the sum covers"
   caption: The reader names their own figure and sees which programmes it covers, which it does not, and by how much it falls short.

7. title: "The sources page and its verdict column"
   alt: "Sources page with a verdict against every claim and official-publication labels"
   caption: The project's own two worst errors sit here alongside the market's — a page that audits others and stays quiet about itself does not work as an argument.

8. title: "The legal change log"
   alt: "Change log of legal amendments with commencement dates, instrument numbers and a jurisdiction filter"
   caption: What changed, from what date, by which instrument, and which of the site's own figures moved with it.

9. title: "A diagram of the routes that still exist"
   alt: "Diagram of Portuguese residence routes with the abolished route struck through inside the table"
   caption: The abolished route is not removed from the table but struck through — so a reader arriving from an advert for it finds it and sees that it is gone.

10. title: "The Russian version of the guide"
    alt: "The same comparison table in Russian"
    caption: What is translated is the whole guide, including the wording that describes the method — not the menu labels.

11. (used as previewImage, not shown in the slider)
    title: "The first screen of the guide"
    alt: "First screen of moveandinvest.com with the headline and the page contents"
    caption: A white page against a black plane — the entire device the site's look rests on, with not one paid image.

12. title: "PageSpeed scores and the agentic browsing check"
    alt: "PageSpeed report showing 95, 97, 100, 100 and a fully passed agentic browsing check"
    caption: Performance 95, accessibility 97, best practices 100, SEO 100, and a full pass on the agentic browsing check.

[MAIN CONTENT]

### Why a residency-by-investment guide cannot publish a figure before reading the law

The rule sounds dull: no figure goes on the site until the instrument that sets it has been read. Its practical consequence is inconvenient. Where the primary source is unavailable, nothing is published, and the site says so plainly.

That is exactly why Cyprus sits in the comparison table with dashes. The government portal refuses the request, another department's certificate has expired, and a third body's document is closed to indexing. A permanent-residence threshold published without reading the law is precisely the kind of claim that spreads across the internet and is never retracted afterwards. A dash in a table costs less than a line nobody can answer for.

What this buys: the thresholds, timings and sums on the site are the ones in force today rather than the ones circulating in the market. The Greek threshold changed in September 2024, the Maltese one in January 2025, the Portuguese time to citizenship in May 2026 — and most industry pages still carry the old values. Checking against the primary source is not editorial virtue here; it is the only way not to end up among them.

### How the guide's sources page works: a verdict, a primary source and a reading date

The sources page is not a bibliography at the end of an article. It is a page of its own where every claim stands next to its primary source, a verdict and the date the source was read. There are several verdicts: confirmed, added, withdrawn, corrected.

Every instrument has its own anchor, so an article links to a provision rather than to a page. Every link is marked as an official publication or as a reproduction — and that distinction caught a real problem: some of the Greek links pointed at a commercial legal database rather than the government gazette. They stayed, because the text really can be read there, but they are labelled as what they are.

The footer carries two dates rather than one: when the provision was last checked, and when the page's own text last changed. A single date is obliged to lie about one of the two.

The project's own errors are published on this page alongside the market's. The site said the €250,000 Greek startup route did not exist — it does, under article 100Α, added at the end of 2024. And it said the Maltese rules carry no income requirement — the figure is indeed absent, the requirement is not. A page that takes apart other people's claims while staying quiet about its own two worst ones does not work as an argument.

### The legal change log that none of the twenty audited competitors publish

The second thing the niche does not have is a site-wide change log. What changed, from what date, by which instrument, and which of the site's own figures moved with it. A jurisdiction filter, an anchor on every entry named after the substance of the change, and the whole log exported as machine-readable data at a stable address — free to use with attribution.

One column is reserved for the cases where there is no instrument at all. In February 2026 Dubai stopped requiring that half a property's value be paid before a golden-visa application — the requirement had never been in the federal annex, it was departmental practice, and removing it needed no amending act. Entries like that are marked "no published act" rather than rewritten as though an act had been found.

The claim is scoped narrowly and stated that way: no such change log exists on any of the twenty domains I audited through their sitemaps. That is not the same as "the only one in the world".

### What auditing the residency-by-investment market showed: an abolished route still being sold

Auditing twenty domains in the sector produced four findings, each verifiable against a primary source.

Malta. The Court of Justice ruling in case C-181/23 of 29 April 2025 ended citizenship by investment. Then the chain: an act of 24 July 2025 and a subsidiary instrument of 29 July that deleted a whole part of the regulations along with two schedules. Not one of the twenty cited the case number. Part of the market goes on selling the abolished route with prices, and a state agency's own page, sixteen months after the ruling, still publishes the sums of a deleted route under fresh dates.

Portugal. Article 90-A of the foreigners act waives exactly one of the general requirements for investment residence — the visa. The means-of-subsistence requirement stays. Neither of the two largest pages in the top of the results contains those words at all, and the largest site in the sector additionally omits the move from five years to ten before citizenship — sixteen months after the law.

Greece. The market attributes the €250,000 startup route to a February 2026 act. It is fourteen months older and was introduced by a different law, at the end of 2024.

Cyprus. Seven of the twenty sell or describe fast-track permanent residence. Two name the provision it rests on.

Each finding became the content of a page. That is the difference between content written from competitors and content written from sources: the second kind produces what is not in the results.

### The cost calculator counts what is paid on top of the threshold, not the threshold

Everybody publishes the entry threshold. What is paid on top of it — transfer taxes, legal and registration fees, government contributions, the first renewal — is published by almost nobody, although everyone pays it, every time.

The calculator counts precisely that second part, line by line. Every line carries a basis, a rate and a link to the instrument. Where there is no instrument and only market practice — which is the lawyer's and the agent's fee — the line says so: it is the one place where a figure is not derived from a rule, and that is stated rather than hidden.

The route finder next to it is built like any quiz in the niche, with one difference: the budget is tested against the real total rather than the advertised threshold. A €500,000 budget covers two programmes of four and falls a thousand short of the third — a conclusion an advertised table never produces.

### Three languages, not one translated three times: English, Russian and Polish demand differ

The Russian and Polish versions are not translated from English, and that is deliberate.

The English article on living in Greece leads with the cost of living, because English demand is expressed that way. The Russian one leads with moving: there is almost no Russian-language search for "cost of living in Greece", and the intent is expressed by the word for relocation. The Polish version of the income-and-expenses article is built differently from both, because Polish demand sits in living costs rather than in income thresholds.

Every such decision came from a demand export rather than from the convenience of translating. Technically it is supported by a multilingual architecture on native URLs per language: the Greek guide has its own Russian address and its own Polish one, rather than a prefix on the English one.

### Why a residency-by-investment guide looks like a data desk rather than a shop window

The visual decision here is not decoration but a consequence of what kind of site this is. The direction is called "Data desk / Oxblood" inside the project — a data desk, not a shop window.

A white page and a black plane, and not one grey background. The first version had a cold grey background, and that is what made the site look cheap: a page where half the surfaces are a slightly different shade of grey reads as a template. Grey text stayed; grey fills are banned. Contrast comes not from fills but from the black plane against the white one: the top of every page is dark, the header lives inside it, and on the home page it continues into the first screen. That is the whole device — the site reads as expensive with not one paid image, no gradients and no effects. For a project with no budget that is an engineering choice, not an aesthetic one.

One accent colour, oxblood, with a hard spending limit: about five per cent of the screen. Past that share the accent stops reading as editorial and starts reading as a warning. On white it clears AAA; on the black plane the same colour is unusable as text, so it has a separate light pair — also measured. The contrast ratio is recorded next to the value in the token system, and the project rule forbids changing a colour without recomputing it. The same discipline as with the legal figures, applied to another material.

Almost no rounded corners: rounded corners are what turn a data table back into a marketing card. The main comparison table has no container at all — it is separated from the page by hairline rules rather than a border and a shadow.

Three typefaces for three roles, not for looks. A display serif for headings, a grotesque for text, a monospace for article numbers, gazette references and dates. The monospace is not ornament: it separates a link to a provision from prose and makes a citation recognisable at a glance. One display face across all three languages, with Cyrillic in the loaded subset.

### Colour in the guide's diagrams carries status only, and every status also carries a word

The rule looks like a detail, but it came out of a test rather than a preference. A directed search over sets of hues in the OKLCH colour space showed that a five-colour set does not clear the distinguishability threshold under colour-vision deficiencies: the best result was 4.5 against a required minimum of 8, and the original set scored 1.1. That is a property of the space itself, not a poor selection.

Hence the rule for every diagram on the site: colour carries status or magnitude only, and every status additionally carries a word. Cyprus on the jurisdiction cards is not merely greyed — it is captioned "not verified". The abolished route in the diagram is not removed but struck through and labelled. A diagram that rests on colour alone falls apart in black-and-white print and for a reader who does not distinguish colours.

The diagrams themselves are generated from code rather than drawn by hand, and ship as self-contained files with embedded fonts. No emoji, no stock photography, no placeholder icons: the only illustrations on the site are its own diagrams, built from verified data.

### The guide's layout: page width, the header breakpoint, and tables that stay tables

Width is set by margins, not by a text column. The margins grow with the screen and the maximum width is only a ceiling, so a wide monitor gets a wide page rather than a 1200-pixel column lost in the middle of nothing. The text does not sprawl with it: every block of prose carries its own measure.

The header breakpoint is measured, not chosen. With six navigation items the Russian labels need 1072 pixels of content width — at the standard 1024 the row overflowed. The header switches at one width for all three languages, because navigation that appears at a different width depending on the language is navigation nobody can reason about.

On a narrow screen tables become cards without ceasing to be tables. The rows stack vertically but stay a real table in the markup: a reader moving through the columns with a screen reader gets the same columns. This cost more work than a grid of blocks, and it is exactly the case where accessibility and semantics outrank build speed.

### The checks that stop the guide's method breaking at the next publication

A method that rests on the author's discipline breaks in the third month. So it is moved into checks that run at build time.

Publishing an article fails if a link points at a sources anchor that does not exist. A separate check stops two pages targeting the same query. A figure cannot change in an article's text without its verification file changing too.

This is the boring part of the work, and it is also the difference between "we try to be accurate" and "inaccuracy does not technically pass".

### Speed, markup and a first visit from ChatGPT: what the guide showed in two weeks

On the live build PageSpeed returns 95 for performance, 97 for accessibility, 100 for best practices and 100 for SEO, and the agentic browsing check passes in full, 2 of 2. For this project the second matters more than the first: the page structure is readable by assistants, not only by browsers.

In the first two weeks Search Console shows hundreds of queries the site already ranks for. For a domain without a single external link that is an early picture rather than a result, and no conclusions about positions follow from it — but it does show that indexing is running across a broad front rather than one page.

The first substantive visit stands apart: it came from ChatGPT, to a page Google had not yet crawled. The usual order, reversed. I will not claim the method caused it — that is an observation, not a measured relationship. But what makes a page citable by a language model — a figure with the article number of the law, the date it was read, a separate sources page, a machine-readable change log — is exactly what this project was built to have.

The case in one line: machines cite what can be checked.

### What this residency-by-investment project honestly has not done yet

The list belongs in the case study, because it strengthens it rather than weakening it.

The domain has no external links, and that is the main constraint on all of the search work. Half the funnel is unbuilt: property as the paying floor is still ahead. Cyprus is deferred on purpose — the primary sources do not open, and until they open there will be no page. Change-subscription addresses are being collected, and there is nothing to send them yet. The content plan is written and executed in a small part.

The site is two weeks old. That is worth saying outright rather than working around: this case study is about what was built and by what method, not about what has had time to work.

[TECHNOLOGIES USED]
Next.js, React, TypeScript, SCSS modules, Sanity, Vercel
