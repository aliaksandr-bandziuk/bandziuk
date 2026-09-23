# X thread: the tatsianabandziuk.com case

Written for: people on X who follow SEO, AI search and web development.
Post as a thread. The link is in the first tweet (owner's rule: link in the post itself; replies in a thread count as comments). Attach tatsianabandziuk-00.png to tweet 1.
Each tweet is under 280 characters (a link counts as 23).

---

**1/7**
38 of 40 searches in one niche now end with an AI answer on top.

I found that out before building a website for a retail analytics consultant, and it changed how the whole site was made.

The case study: https://www.bandziuk.com/portfolio/consultant-website-design-retail-analytics?utm_source=x&utm_medium=social&utm_campaign=tatsianabandziuk-case&utm_content=thread

🧵

**2/7**
What the research showed before any design:

→ Demand for the consultant's service: single and double figures a month
→ Demand for "how to calculate margin / sell-through": far higher
→ Top results: agencies and software vendors, not people who do the work

**3/7**
So the site became a tool, not a brochure:

• 153 pages in EN, PL and RU, each written for its own searches
• 5 retail calculators, each a full page
• Excel templates with every formula checked by a script
• 572 questions answered in plain text

**4/7**
The design speaks the clients' language — Excel and Power BI.

The contact form is a spreadsheet. Select numbers in a table and the sum appears at the bottom. The case studies filter like a dashboard instead of hiding results.

**5/7**
Built to be quoted by AI:

• The answer is the first sentence
• Formulas as text, never images
• Headings that make sense on their own
• FAQ answers in the HTML, not loaded on click — most AI crawlers don't run JavaScript

**6/7**
PageSpeed Insights on mobile: 100 / 100 / 100 / 100, and 3 of 3 for AI agent readiness.

Next.js 16 + Sanity. No font preloading, JSON-LD as a plain script tag, images resized by the CMS's CDN.

**7/7**
On launch day I asked ChatGPT, Perplexity and Google 74 questions from this field. The new site was cited zero times — expected.

I'll run the same 74 in October and post the before and after.

The site itself: https://www.tatsianabandziuk.com
