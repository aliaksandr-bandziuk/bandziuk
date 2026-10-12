═══════════════════════════════════════════════════════════════
PORTFOLIO: academgo.com — EN
═══════════════════════════════════════════════════════════════

[SLUG]
seo-case-study-education-agency

[TITLE]
SEO case study: an education agency site, one country to ten

[FULL TITLE — H1]
SEO case study: an education agency site repackaged from one country to ten

[EXCERPT] (≤200 characters)
The site sold one country while the agency worked with ten. Five days later it had 180 new pages, keyword research per market, schema, an llms.txt and a mobile PageSpeed score of 91 instead of 61.

[SEO]
metaTitle: SEO case study: education agency site, one country to ten
metaDescription: How an education agency's site went from one country to ten: keyword research per market, 180 new pages in Sanity, schema, llms.txt and a speed pass.

[KEY FEATURES]
clientName: AcademGo, education agency
industry: Education: university admission and student visas
website: https://academgo.com/ (type — link, label academgo.com, index, follow)
services: Web development, SEO

[PREVIEW IMAGE]
alt: "The agency home page in a browser frame: the block of ten study destinations with the tuition range for each"

[PROBLEM]
The agency places students at universities and language schools, runs their admission, and handles the student visa and residence permit. It earns on partner commissions and on paid legalisation support. I have been building the site since July 2024: 334 commits in the repository, 332 of them mine.

The problem was not the site but what it sold. The whole product section and every price was about Poland, and the university sections lived at addresses like /universities-in-poland/. The people who come to this agency ask about far more than Poland: the Russian- and English-speaking demand is spread across ten destinations, from Spain and Italy to Malaysia and the UAE. The agency could serve those destinations. The site said nothing about them.

The starting point, measured before any new page went live: 18 keywords in the top 100 in Poland and none in the top 10, 7 in Kazakhstan, 13 in Azerbaijan, 26 in India, 8 in Pakistan, 5 in Nigeria. For Uzbekistan, Kyrgyzstan, Russia and Belarus the database has no data, so I checked 24 queries by hand — not a single top-100 hit. For the 156 target keywords of the planned pages the domain did not rank at all.

[TASK]
- Turn a one-country site into a ten-country site without breaking what already worked for Poland
- Collect keyword data per market and per language instead of translating the Polish pages
- Design a page structure that a pipeline can build, not a person by hand
- Prepare the site for Google and for the answers of AI assistants
- Check what the offer may legally promise before writing the pages that promise it
- Add capture points that fit the new offer
- Keep the site fast as the page count grew
- Record the starting positions before publishing, so the result could be measured

[RESULTS]
- One country became ten: 180 new pages across nine destinations, 188 pages in a single pipeline with the shared ones
- By the client's own analytics for September 2026, traffic and enquiries grew several times over; the client did not approve publishing the figures
- PageSpeed, mobile, same page: performance 61 → 91, best practices 96 → 100, SEO 92 → 100
- Loading metrics: first contentful paint 3.0 → 1.5 s, largest element 5.6 → 3.3 s, blocking time 310 → 10 ms, layout shift 0.113 → 0.018
- Agentic browsing check after the work: 3 of 3
- 391 keywords selected into the working set out of some 11,400 English and 1,450 Russian queries
- Starting positions recorded for 156 target keywords across six markets before publication
- Ten PDF guides as lead magnets: five topics in two languages
- The repackaging sprint took five working days: 33 commits, 787 files changed

[WORK DONE]
- Audit of keyword exports for ten destinations: 88 English and 111 Russian Keyword Tool exports, 16 SEMrush exports, separate B2B pulls
- Competitor analysis in eight countries across the Russian and English databases: positions, pages, backlinks, keyword gap
- A digest per destination with the data inventory, clusters, competitors and the gaps written down rather than hidden
- A legal check of the Spanish offer: what can and cannot be promised about language courses and residence
- A data model in Sanity: country and university references, a shared quiz, country hubs and child pages with linked language versions
- A 20-page map per destination and 180 pages in two languages built by one pipeline
- A rewritten home page: destinations block, mega-menu for ten countries, new meta for the home page and the blog
- A country comparison page as the entry point for people who have not chosen a destination yet
- Cross-linking between and inside destinations by script, with a link audit
- A quiz on the new pages and a "country of study" field in every form, enquiry and analytics event
- Five lead-magnet topics in two languages, ten PDFs built from markdown by a script
- Infographics on every new page, with numbers, city coordinates and university links verified by script
- Indexing ground: sitemap, hreflang, breadcrumb markup, noindex on preview and test domains
- Organization markup, FAQPage and BreadcrumbList on the pages
- An /llms.txt file to the llmstxt.org standard, generated from the same CMS documents as the pages
- A publishing pipeline with deterministic document IDs and re-runs that create no duplicates
- A rank snapshot of 156 keywords across six markets before publication
- A speed pass: Next.js 16, React 19, Sanity 6, axios and framer-motion dropped, heavy fields and analytics deferred
- QA scripts over the whole set: link audit, page checks, year checks in the copy

[SCREENSHOTS]
Same ten images as the Russian version, in the same order. Captions below.

1. (1-hero-countries.jpg) — source for the preview, not used in the slider
   title: "The ten-destination block on the home page"
   alt: "Home page of the education agency's website with ten destination cards and the tuition range for each"
   caption: The home page no longer sells one country: ten cards, each with tuition and a link to its destination page.

2. (2-mega-menu.jpg)
   title: "Mega-menu covering ten study destinations"
   alt: "Open mega-menu listing ten destinations with their pages on visas, admission and universities"
   caption: Every destination carries its own pages: admission, cost, visa, medicine, universities. Before the repackaging the menu held one country.

3. (3-country-hub.jpg)
   title: "Destination hub: studying in Spain"
   alt: "The Spain page with its title, breadcrumbs and an opening text about costs and admission"
   caption: A hub opens with the direct answer: what it costs, who it suits, which step comes first.

4. (4-infographic.jpg)
   title: "Campus map on a destination page"
   alt: "Map of Spain with campus cities marked and the universities listed for each city"
   caption: The infographic is built from the numbers and links of its own page, and a script verifies cities, coordinates and university links before writing.

5. (5-quiz.jpg)
   title: "The quiz with its 'what you get' panel"
   alt: "A quiz question with answer options and a side panel listing what the applicant receives"
   caption: Five questions and a panel saying what comes back. The "country of study" field now sits here and in every form on the site.

6. (6-lead-magnet.jpg)
   title: "Lead magnet: nine destinations in one table"
   alt: "A block offering a downloadable comparison of nine destinations, with a name and e-mail form"
   caption: One of five guides. All ten PDFs are built from markdown by a script, so editing the text takes no layout work.

7. (7-llms-txt.jpg)
   title: "The /llms.txt file: a site map for AI assistants"
   alt: "Contents of the llms.txt file listing pages per destination with a description of each"
   caption: It is generated from the same CMS documents as the pages and refreshed daily, so it cannot drift away from the site.

8. (8-compare-table.jpg)
   title: "Ten destinations compared by cost, visa and degree recognition"
   alt: "Comparison table of ten destinations: tuition, living costs, language, entry status, work rights and degree recognition"
   caption: The comparison page is the entry point for people who have not picked a destination. Every figure carries its source: a university site, a ministry, an immigration service.

9. (9-pagespeed-before.jpg)
   title: "PageSpeed before the speed pass: 61 on mobile"
   alt: "PageSpeed Insights report before the work: performance 61, first contentful paint 3.0 s, largest element 5.6 s"
   caption: Before: 61 for performance, with the largest element arriving at 5.6 seconds.

10. (10-pagespeed-after.jpg)
   title: "PageSpeed after the speed pass: 91 on mobile"
   alt: "PageSpeed Insights report after the work: performance 91, best practices and SEO at 100, blocking time 10 ms"
   caption: After: 91, with SEO and best practices at 100 and blocking time down from 310 to 10 milliseconds.

[MAIN CONTENT]

### What the site looked like before: one country sold, ten served

The agency worked with ten destinations and the site talked about one. Prices, university sections, the whole product part — all of it was Poland, down to page addresses like /universities-in-poland/. Someone looking for a master's in Spain or a degree in the UAE found nothing here and went to a competitor who had the page.

So the brief was not a redesign. It was repackaging: the site had to sell what the agency actually does, and be findable for the questions people ask about each of the ten destinations.

### Keyword research across ten markets: 11,400 English and 1,450 Russian queries

The work started with a data inventory rather than with copy. I went through 88 English Keyword Tool exports holding roughly 11,400 queries, 111 Russian exports with roughly 1,450, 16 SEMrush Keyword Magic exports and separate pulls on the agency market. Alongside them, SEMrush packages on competitors in eight countries: organic positions, pages, backlinks and the keyword gap against this domain.

Out of that mass, 391 keywords went into the project's working set, split by destination and language. The rest were duplicates, noise, or questions meant for universities rather than for an agency.

The limits of the data are written into the digests rather than skipped: Keyword Tool exports carry no location, Keyword Tool and SEMrush volumes cannot be added together, Yandex is not covered, and part of the Russian exports had gone stale. That matters, because the structure of the site was decided on these numbers, and a year from now it should be clear which decisions rested on thin ground.

Each destination got a digest: what the data covers, what is missing, which clusters are visible, who already holds the results page.

### Checking what the offer may promise: language courses in Spain and residence rights

Spain was worked through separately: 17 exports with 215 keywords, two gap reports, 11 clusters, a map of 12 page types and five article topics. That pass turned up something that changed how the whole destination is presented.

The immigration regulation in force since May 2025, together with the matching instruction, closes the route from a language-course stay to a work residence permit. Meanwhile queries about residence "through language courses" keep growing — the demand is there and there is nothing honest to sell against it.

So the page sells the real route, a year of language followed by a master's, rather than a loophole that no longer exists. Checking what may be promised is part of search work, not a lawyer's afterthought: a page that promises the impossible brings enquiries the agency cannot close.

### New site structure: 180 pages across nine destinations in one Sanity pipeline

First the data model: country and university references, a shared quiz, destination hubs and their child pages, each with a Russian and an English version linked to one another.

Then the page map. Every one of the nine new destinations got 20 pages: the hub, the student visa, admission, master's programmes, work during studies, and five university cards, each in two languages. Nine destinations made 180 pages; with the shared ones, 188 went through the pipeline.

For Spain the map runs: hubs at /study-in-spain and /ru/ucheba-v-ispanii, under them the visa, admission, master's and work pages, plus cards for UCAM, Universidad Europea, CEU San Pablo, Complutense and the University of Barcelona.

Cross-linking between destinations and inside each one is assembled by scripts rather than by hand: cross-links, hub links, and an audit of what leads nowhere.

Agency service prices stayed on the Polish pages only, where there is a confirmed price list; they were not invented for the other destinations. Tuition and living costs are given per destination, and every figure comes from a checkable source — a university site, a ministry, an immigration service. Ageing year references were stripped out of the copy so that pages do not expire on their own.

### Home page and mega-menu after the move to ten destinations

The home page stopped being a page about Poland. It gained a destinations block and a mega-menu covering ten countries, and the meta for the home page and the blog was rewritten. A separate comparison page answers the broad "study abroad" and "master's abroad" questions and serves people who are still choosing a country rather than a university.

### Where the enquiry is captured: a quiz, a country field and ten PDF guides

A new structure is worthless if a reader finishes the page with nowhere to click.

The quiz sits inside the new pages at two thirds of the width, with a panel next to it stating what the applicant gets back. A "country of study" field was added to every form on the site, to the enquiries, to analytics and to the quiz itself: without it the sales team cannot tell which destination a person arrived for.

The lead magnets are five topics in two languages: a comparison of nine destinations, the document list, IELTS preparation, the motivation letter, and the questions worth asking an agency before paying. Ten PDFs are built from markdown by a script, so correcting a sentence costs no layout work.

### Infographics on destination pages, with every number checked by script

Each new page carries an infographic: bars, a timeline or a map of the country. What matters is not the styling but the rule: every number comes from the text of its own page, and before writing the script verifies the numbers, the city coordinates and the university links. The picture cannot drift away from the text sitting next to it.

### Technical ground for indexing: sitemap, hreflang and organization markup

The base layer without which nothing else counts: a sitemap, hreflang for the Russian and English versions, breadcrumb markup, and noindex on preview and test domains. Organization markup carries the logo, address, contacts and social profiles; the pages carry FAQPage and BreadcrumbList.

### Preparing the site for AI answers: an llms.txt generated from the same CMS

The site serves an /llms.txt file to the llmstxt.org standard — a markdown map of the site for AI assistants and agents. The idea is common; what matters here is how it is made. The file is generated from the same CMS documents as the pages and refreshed daily, so the site and the map cannot disagree. A page rewritten this morning is not described to assistants by last year's text.

Content was prepared for citation just as deliberately. Each destination has separate pages for the visa, admission, master's programmes and work, so every applicant question owns a page instead of a paragraph. Each university has a sheet of verified facts behind it. The FAQ holds the questions people actually ask, down to whether a Northern Cyprus degree is recognised in Kazakhstan.

### Publishing pipeline: deterministic document IDs and re-runs without duplicates

188 pages cannot be entered by hand, and more importantly they cannot be entered in a way that multiplies copies on the second run. Every document has a deterministic id built from destination, page and language, so a re-run overwrites the same documents. While the pages sit as drafts, the links between them resolve on a preview deployment, so mistakes surface before publication rather than after it.

On top of that: QA scripts across the whole set — a link audit, page checks and a check for ageing year references.

### How the result was measured: a rank snapshot of 156 keywords before publishing

Before publishing I recorded the starting positions, so the outcome could be measured rather than described. DataForSEO Labs plus live results across six markets; the snapshot cost 55 cents.

It came out like this: Poland 18 keywords in the top 100 and none in the top 10, Kazakhstan 7, Azerbaijan 13, India 26, Pakistan 8, Nigeria 5. For Uzbekistan, Kyrgyzstan, Russia and Belarus the database holds nothing, so I checked 24 queries by hand there: no top-100 hits. Against the 156 target keywords of the new pages the domain did not rank at all.

That is the honest zero. Any growth after publication is counted from it rather than from an impression.

### Speeding the site up: Next.js 16, dropping axios and deferring heavy fields

The site grew in volume and had to end up faster rather than slower. Next.js 16, React 19 and Sanity 6; axios replaced with the built-in fetch across every form and block and removed from the project; the mobile menu animation rewritten without framer-motion; the phone field with its heavy library loaded after the page load, with focus moved to the real field once the library arrives; ten decorative SVGs pulled out of the markup into components; analytics loaded after a user action rather than at start; images served through the Sanity loader at the right sizes; the favicon cut from 158 KB to 15 KB. A real 404 page replaced the stub, and hydration was fixed so that browser extensions no longer broke the markup.

### PageSpeed before and after: 61 to 91 on mobile

Both runs are mobile, on the same page.

Performance 61 before and 91 after. Best practices 96 and 100. SEO 92 and 100. Accessibility stayed at 97.

On loading: first contentful paint 3.0 → 1.5 s, largest element 5.6 → 3.3 s, total blocking time 310 → 10 ms, layout shift 0.113 → 0.018, speed index 4.7 → 2.9 s. The agentic browsing check after the work: 3 of 3.

### How long the repackaging took, and who did it

I have been running the site since July 2024: 334 commits, 332 of them mine. The repackaging sprint took five working days: 33 commits, 787 files changed, more than a hundred thousand lines added. The new pages went live in one go rather than in batches.

One person did the work rather than a team: keyword research, architecture, copy, development, schema, the speed pass and the measurements. This is a registered business working under a contract and invoices, and the responsibility for the outcome sits with me alone.

### The result: traffic and enquiries, by the client's own analytics

By the client's analytics for September 2026, traffic and enquiries grew several times over. The client did not approve publishing the figures, so I name the source and the period instead of the numbers.

A follow-up rank check against the same 156 keywords has been made; its figures are not published either.

### What this case does not claim: the numbers that are missing, and why

There are no traffic percentages here, no enquiry counts and no post-publication positions: that data belongs to the client and he did not agree to publish it. There are no publication or measurement dates, for the same reason.

Everything else in this text is a number from the project's own files: commits, page counts, the size of the keyword exports, the starting positions and the PageSpeed figures. Where a number is missing, it is missing because it cannot be backed up — and it is not replaced by an invented one.

[TECHNOLOGIES USED]
Next.js, React.js, TypeScript, SCSS, Sanity, SEO
