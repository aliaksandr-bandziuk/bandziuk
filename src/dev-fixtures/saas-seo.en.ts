// Landing page fixture: SaaS SEO (EN), group «saas-seo». New page.
// Semantic core: ref/batch-h1.md, SaaS SEO group (US) and BRIEF.md: saas seo
// agency / saas seo agencies 1,000 each (agency vs consultant H2, FAQ) · saas
// content marketing 590 (content H2) · saas seo 480, seo for saas 480 (grid
// 1,600; H1, metaTitle, several H2) · best saas seo agency 320 (agency H2
// text) · saas seo consultant / consulting 260 each (metaTitle, agency H2) ·
// saas seo services 260 (grid 880; cost H2) · seo agency for saas 210 · saas
// seo strategy 210 (funnel H2) · b2b saas seo agency 170, b2b saas seo 140
// (H3 under measuring) · seo for saas companies (grid 260; first H2).
// «saas seo tools» 140–170 and «seo saas» (= SEO software) are a different
// demand — not targeted.
// Intent: ref/intent-check-batch-h.md — «saas seo» vs «seo for it companies»
// 0 of 10 shared URLs, 0 shared domains → own page; SERP = SaaS SEO agencies
// and their guides (First Page Sage, Directive, Omnius, theblogsmith) → the
// searcher is a SaaS marketer or founder choosing a provider; the page sells.
// Audience: SaaS companies past first traction — live product, paying
// customers, a site with some traffic — who need organic pipeline.
// Angle: funnel-first strategy, content judged by trials, product-led tools
// (consultant case), programmatic quality control, international SEO and
// localized pricing (Cyprus case, education agency), technical SEO of the
// marketing site vs app and migrations (Giuseppe, ScanM2), links without
// buying (Cyprus case), measurement in signups/trials/demos, AI shortlists
// (owner’s study: 47 buying questions, 141 answers), agency vs consultant, cost.
// NOT on this page: stage/runway planning, basics of use-case, integration and
// comparison pages, docs/changelog as content, the first three months
// (/seo-for-startups — linked once for pre-traction products); buying
// committees in general (/b2b-seo); IT service firms (/seo-for-it-companies);
// marketing site design and build (/saas-website-design — sibling); paid
// acquisition (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; the Cyprus client is not named.
import { p, h2, h3, li, link, k } from "./pt";

export const saasSeoEn = {
  lang: "en",
  group: "saas-seo",
  slug: "saas-seo",
  title: "SaaS SEO",
  heading: "SaaS SEO Services",
  excerpt:
    "I provide SaaS SEO for software companies that already have paying customers: a strategy that starts at the bottom of the funnel, content judged by trials and demos, free tools built from the product, localized pages for EU markets, a clean technical setup and a place on the “best software” shortlists ChatGPT gives buyers.",
  seo: {
    metaTitle: "SaaS SEO Consultant: Trials, Demos, AI Search | Bandziuk",
    metaDescription:
      "SEO for SaaS companies: funnel-first strategy, content that brings trials, international pages, technical fixes, AI shortlists, reports in demos. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pipeline from search and AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Best CRM for small agencies", "Free invoice template", "Start your 14-day trial", "Shortlisted by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SaaS SEO audit: funnel coverage, technical setup, international versions, analytics and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SaaS SEO work: solution and alternatives pages, free tools, hreflang, migration redirects, signup tracking", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a SaaS company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SaaS SEO services",
      items: [
        { _key: k("o"), iconName: "layers", title: "Bottom-of-funnel pages first", text: "Solution, alternatives and pricing searches before blog topics" },
        { _key: k("o"), iconName: "file-text", title: "Content judged by trials", text: "Every article has a path into the product" },
        { _key: k("o"), iconName: "plug", title: "Free tools and templates from the product", text: "Calculators and generators people search for" },
        { _key: k("o"), iconName: "languages", title: "Localized pages for EU markets", text: "Local keywords, prices and hreflang, not a translation" },
        { _key: k("o"), iconName: "sparkles", title: "On “best software” shortlists in AI", text: "ChatGPT, Perplexity and Google AI Overviews" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in signups, trials and demos", text: "From GA4 to your CRM, by landing page" },
      ],
      prices: [
        { _key: k("r"), label: "SaaS SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a SaaS company", value: "from 800 € / month", note: "strategy, pages, technical, AI, pipeline reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: data-driven, multilingual and migrated websites I have built and optimized",
      subtitle:
        "Each of these projects had to turn search into business across markets, which is what a SaaS company needs from SEO. A property platform in Cyprus that I built in 2025 and run every month: five languages, about 375 developments imported daily from developers’ feeds, growth from zero to about 2,500 organic visits a month without a single bought link, and about 10% of organic visits coming from AI assistants. ScanM2, a 3D laser scanning and BIM company, moved off a no-code builder and grew organic traffic 29×. An education agency’s site went from one country to ten on one structure. A retail analytics consultant’s site carries calculators and templates in three languages, written to be quoted by AI. A psychotherapist in Milan moved to Next.js with 468 posts redirected and found me through ChatGPT.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your SaaS product",
      subtitle: "Within one business day I reply with the searches and pages I would start with and a fixed price.",
      contextLabel: "Product name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do new customers start?", options: ["Self-serve free trial or freemium", "Demo request and a sales call", "Both, depending on the plan"] },
        { _key: k("z"), question: "What does organic search bring today?", options: ["Blog traffic, few signups", "Signups, but growth has stalled", "Very little traffic", "We just migrated or redesigned the site"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SaaS SEO is the work of turning organic search and AI answers into a steady source of trials, demos and paid accounts for a software product that already sells. I do it as one consultant who also builds sites in Next.js and React, so the research, the page plan, the fixes in your marketing site’s code and the reports in signups come from the same person. This page is for SaaS companies past first traction: a live product, paying customers and a site with some traffic that should become a pipeline channel."),

        h2("SEO for SaaS companies after first traction: from blog traffic to pipeline"),
        p("By the time a SaaS company has its first few hundred customers, the site usually has a blog written for traffic, a features page, pricing and a login link. Visits grow; signups from search do not. The reasons repeat from company to company:"),
        li("articles answer questions from people who will never buy — students, job seekers, competitors’ users looking for a tutorial"),
        li("product pages target only the category term, where review sites and the category leaders hold the first page"),
        li("nobody has linked organic signups to trial-to-paid, so the team cannot tell which pages earn money"),
        p(
          "If your product is still before product-market fit, the stage-by-stage plan on the ",
          link("SEO for startups", "/seo-for-startups"),
          " page fits better. This page starts where that one ends.",
        ),

        h2("SaaS SEO strategy by funnel stage: bottom of the funnel first"),
        p("Searches around a software product fall into four levels of intent:"),
        li("product — “[your brand] pricing”, “[competitor] alternative”, “[tool A] vs [tool B]”"),
        li("solution — “invoicing software for contractors”, “time tracking app for agencies”"),
        li("problem — “how to reduce failed payments”, “client onboarding checklist”"),
        li("category education — “what is a customer data platform”"),
        p("A SaaS SEO strategy starts with the first two. Their volumes are small, but the people typing them are choosing a tool this month. Problem content comes next, each article linked to the solution page it leads to; broad education comes last, only where it is a natural road to the product. Beyond search data, I build the plan from sales call notes, support tickets and lost deals: the reasons buyers give for choosing a competitor are the pages you are missing."),

        h2("SaaS content marketing that brings trials, not just visits"),
        p("SaaS content marketing pays when an article does a job in the funnel. In practice:"),
        li("each article solves the reader’s task and shows the product doing that task, with real screenshots"),
        li("the call to action matches the article: a template that opens in the product, a trial with the right settings preloaded, a demo for a team-sized problem"),
        li("articles that bring traffic and no signups are merged, rewritten for a buyer’s question or removed"),
        p("Plain facts beat slogans in search. On the property platform I run, descriptions rewritten once as lifestyle copy lost traffic on commercial pages, and factual descriptions brought clicks back (+16%). Software pages behave the same way: features, plan limits, integrations and prices stated plainly outrank and outsell taglines."),

        h2("Product-led SEO: templates, calculators and free tools built from your product"),
        p("Searches such as “invoice template”, “SLA calculator”, “UTM builder” or “meeting agenda template” have steady volume and sit next to what a SaaS product does. A free tool that solves a small part of the job, with a clear step into the full product, is often the strongest page a SaaS site has. What makes one work:"),
        li("it works without a signup, and the result can be copied, downloaded or shared"),
        li("the page explains the method in text, so search engines and AI assistants can read it"),
        li("templates come from what your users actually build, with permission"),
        li("it is rendered on the server, not assembled in the browser"),
        p("For a retail analytics consultant I built calculators and templates as part of a 153-page site in three languages; demand for each was researched before design, and the pages were written to be quoted by AI assistants."),

        h2("Programmatic SEO for SaaS: pages from product data and when they become thin"),
        p("Programmatic pages can come from data the product already holds: integration pairs, templates by industry, public directories, exchange or tax rates, benchmarks by country. They work when every page carries data a person needs that is not on the next page. Google’s spam policies call pages made mainly for ranking “scaled content abuse”, whether a person, a script or an AI wrote them. My test: would you link this page from inside your product? I launch in batches, watch “Crawled – currently not indexed” in Search Console, and merge or remove the pages that do not earn their place."),

        h2("International SEO for SaaS: hreflang, localized landing pages and pricing for EU markets"),
        p("A SaaS product can sell everywhere from day one, but search is local. A German buyer types “Zeiterfassung Software”, a French one “logiciel de facturation”, and neither reads an English page with a translated headline. A localized version needs:"),
        li("keyword research per market, with your features named in local terms"),
        li("prices in local currency, with VAT shown the way local buyers expect, and local payment methods named"),
        li("customer stories and trust details from that market, including where EU data is stored"),
        li("hreflang with x-default, one folder per language, and no automatic redirects by IP"),
        p(
          "The Cyprus platform I run has five languages and top positions for many German (DACH) queries; the education agency’s site grew from one country to ten on one structure. I write English, Polish and Russian myself; for German, French or Spanish I plan the pages and keywords, and a native speaker on your side or a translator you choose writes or checks the texts. More on ",
          link("multilingual website development", "/services/multilingual-website-development"),
          ".",
        ),

        h2("Technical SEO for SaaS websites: marketing site, app, blog subdomain and migrations"),
        p("SaaS sites have their own technical problems, and I fix them in the code:"),
        li("the app and login pages kept out of the index, the marketing pages kept out from behind authentication"),
        li("a blog on a subdomain moved to a subfolder, or served there through a reverse proxy, so its links strengthen the main domain"),
        li("marketing pages built as a single-page React app moved to server rendering, because many AI crawlers do not run JavaScript"),
        li("versioned docs and help-center search pages that duplicate each other, cleaned up with canonicals and noindex"),
        li("migrations from Webflow or WordPress with a 301 redirect for every old URL"),
        p(
          "Giuseppe, a psychotherapist in Milan, moved to Next.js with 468 posts redirected and kept his search traffic; ScanM2 left a no-code builder and grew 29×. If the marketing site itself needs a rebuild, see ",
          link("SaaS website design", "/saas-website-design"),
          ".",
        ),

        h2("SaaS link building without buying links: integrations, G2 and Capterra, data-led content"),
        p("Links that a SaaS company can earn without paying for them:"),
        li("listings in your integration partners’ marketplaces and app directories, each linking back to the matching integration page"),
        li("G2, Capterra and GetApp profiles in the right categories, with reviews requested after a customer reaches an onboarding milestone"),
        li("studies built on anonymized, aggregated product data, with the method stated — journalists and bloggers cite numbers"),
        li("customer stories that customers publish or share on their own sites"),
        p("The Cyprus platform grew from zero to about 2,500 organic visits a month without a single bought link. A domain that carries your signups is not worth risking on a link-building package."),

        h2("Measuring SaaS SEO in signups, trials and demos"),
        li("GA4 key events for signup, trial start and demo request, with the landing page attached"),
        li("the first landing page saved in hidden form fields and passed to your CRM and product analytics"),
        li("trial-to-paid and pipeline grouped by page type: solution, alternatives, content, free tools"),
        li("conversion paths for people who read an article first and return later through a brand search"),
        li("a free-text “How did you hear about us?” field, which catches ChatGPT and Perplexity referrals that analytics often counts as direct"),
        h3("B2B SaaS SEO: when the conversion is a demo request"),
        p(
          "In sales-led B2B SaaS, a form fill is only the start. Reports follow organic leads into sales-qualified opportunities and pipeline in HubSpot or Salesforce. The general side of long cycles and buying committees is on the ",
          link("B2B SEO", "/b2b-seo"),
          " page; companies selling development and IT services rather than a product are covered on ",
          link("SEO for IT companies", "/seo-for-it-companies"),
          ".",
        ),

        h2("SaaS SEO in ChatGPT and Google AI Overviews: getting on “best software” shortlists (GEO, AEO)"),
        p("A software buyer today often types into ChatGPT, Perplexity or Google’s AI Mode a request for “the best CRM for a 10-person agency” or “alternatives to [tool] with EU data hosting”. The assistant names a handful of products with a reason for each. I studied this directly: 47 buying questions put to ChatGPT, Perplexity and Google AI Mode, 141 answers analyzed. On a SaaS site, the GEO and AEO work (generative and answer engine optimization) that follows from it covers:"),
        li("who the product is for, plan limits, prices and integrations written as text on your own pages"),
        li("a presence in the comparison articles and review profiles the assistants cite for your category"),
        li("the same facts on your site, G2, Capterra and partner directories"),
        li("a fixed set of category prompts checked before the work and after it"),
        p(
          "About 10% of organic visits to the Cyprus platform come from AI assistants. Details on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SaaS SEO agency or one SaaS SEO consultant: who does the work"),
        p(
          "A SaaS SEO agency brings a team of strategists, writers and link builders, which suits a company that needs fifteen articles a month. With me, one person does the research and the plan, changes the code, writes or edits the key pages with your product people and reads GA4 and the CRM. That fits a company with an in-house marketer or writers that needs strategy and technical depth. Whoever you choose, ask who writes, how links are earned, whether reports show trials and pipeline, and who owns the content. How I work as an ",
          link("SEO consultant", "/services/seo-consultant"),
          ".",
        ),

        h2("How much SaaS SEO services cost"),
        li("SaaS SEO audit — funnel coverage, technical setup, international versions, analytics and AI answers: from 250 €, one-off."),
        li("One-off work — solution and alternatives pages, a free tool, hreflang, a migration redirect map, signup tracking: 250–700 €."),
        li("Monthly SaaS SEO: from 800 € per month; in competitive categories such as CRM, project management, HR or marketing software, from 1,300 € per month."),
        p(
          "First results usually come after about 1.5 months, with steady growth in 3–6 months. The ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page describes the monthly process; the ",
          link("pricing", "/pricing"),
          " page lists every service with its price.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SaaS SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SaaS SEO cost?", "Monthly SaaS SEO begins at 800 €, or 1,300 € in crowded categories such as CRM or HR software. An audit is from 250 € and a single task 250–700 €. A short call about your product, markets and current numbers is enough for me to fix the price."],
          ["How long does SEO take for a SaaS company?", "First results usually come after about 1.5 months, with steady growth in 3–6 months. Demos and paid accounts follow at the pace of your trial length and sales cycle."],
          ["Is SEO worth it if we already grow with paid ads and outbound?", "Usually yes, because paid channels get more expensive as you scale and stop when the budget does. Search pages keep bringing trials without a cost per click, and prospects who look you up after an ad or a cold email find their questions answered there."],
          ["Should our blog live on a subdomain or in a subfolder?", "A subfolder is usually the better choice, because links and authority stay on the main domain. If the blog runs on a separate platform, it can still be served under /blog through a reverse proxy, with redirects from the old addresses."],
          ["Do you write the content yourself?", "I write the pages that sit next to revenue — solution, alternatives, pricing explanations, tool pages — in English, Polish or Russian. For volume, I brief and edit your writers or freelancers, and your product people check every claim."],
          ["Can you guarantee our product appears in ChatGPT answers?", "Nobody can. I make your product’s facts easy to find and verify, strengthen the sources assistants cite for your category, and show you the same set of prompts before and after the work."],
          ["Can a consultant in Poland work with a US SaaS company?", "Yes. SaaS teams already work across time zones, and most of this work runs in shared documents and tickets. A 4 p.m. call in Warsaw is 10 a.m. in New York; invoices are in EUR or another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SaaS SEO: what to send me"),
        p(
          "Send your website, a one-line description of who the product is for, how new customers get started (self-serve trial or sales demo), the markets and languages you sell in, the competitors you lose deals to, and rough numbers of organic signups today. Access to Search Console and GA4 helps if you can share it. I will reply with the pages I would start with and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
