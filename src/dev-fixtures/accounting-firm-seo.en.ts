// Landing page fixture: SEO for accounting firms (EN), group
// «accounting-firm-seo». NEW page — create-landing.cjs, root level like the
// other industry SEO pages (/seo-for-beauty-salons, /seo-for-law-firms).
//
// Why it exists (03.11.2026). The site had a website page for accounting
// firms (/accounting-firm-website, three languages) but nothing for their
// promotion, and the coverage audit flagged it: «seo for accounting firms»
// 320 → mismatch, «подходит: ничего». Measured forms around it:
//   seo for accounting firms 320 · seo services for accounting firms 40 ·
//   accounting firm seo 30 · accounting firm seo services 10 = 400/мес
//
// Intent confirmed by the SERP (research/pseo/intent-check-accounting.md):
// the top ten for «seo for accounting firms» is agencies and providers
// selling exactly this — financial-cents, cpasitesolutions, artemis.marketing,
// zerogravitymarketing, credfino, digitallytop, thinklittlebig. Owner intent,
// and a place where a service page can rank.
//
// Bookkeepers are a SECTION here, not a page. «seo for bookkeepers» 20 and
// «bookkeeper seo» 10 are too small for their own page, and the SERPs of the
// two queries share one domain out of seven, so this page will not own that
// query — it is a mention, not a target. The 320-volume «website for
// bookkeepers» was REJECTED outright: its top ten is bookkeeping services
// and listicles (forbes, pilot, getfriday, belaysolutions, collective), so
// that searcher wants bookkeeping done, not a website built.
//
// EN only. Russian has 40/мес and Polish 70/мес around this topic, both on
// the WEBSITE form, which the existing trilingual page already holds; there
// is no measured SEO demand in either. A conscious incomplete language group,
// like the 42 other EN-only pages.
//
// The strongest factual point on the page came out of the SERP itself:
// accountingwebsites.org and cpasitesolutions.com rank for «website for
// accounting firms» because they ARE the template vendors the industry sits
// on. That is why so many firms look interchangeable to a search engine.
import { p, h2, h3, li, link, k } from "./pt";

export const accountingFirmSeoEn = {
  lang: "en",
  group: "accounting-firm-seo",
  slug: "seo-for-accounting-firms",
  title: "SEO for Accounting Firms",
  heading: "SEO for accounting firms: how a practice gets found by the clients it actually wants",
  excerpt:
    "Most accounting firms rank for their own name and nothing else. The work is not «more keywords» — it is a page per client type you serve, prices as far as you will go, and a Google profile that matches. Audit from €250, and I say what I would not bother changing.",
  seo: {
    metaTitle: "SEO for accounting firms — audit from €250",
    metaDescription:
      "SEO for accounting firms and bookkeepers: a page per client type, local search, pricing that answers the question, AI answers. Audit €250, ongoing €800/month.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per client type", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["CPA for ecommerce sellers", "Bookkeeping for restaurants", "Fixed monthly fee", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an accounting firm: site, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: client-type pages, pricing, structured data, local profile", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for an accounting firm", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for an accounting firm actually consists of",
      items: [
        { _key: k("o"), iconName: "users", title: "A page per client type", text: "Ecommerce sellers, contractors, clinics, startups" },
        { _key: k("o"), iconName: "map-pin", title: "Local search for one or several offices", text: "Google profile, service areas, reviews" },
        { _key: k("o"), iconName: "tag", title: "Pricing that answers the question", text: "A fixed fee or a range, not «contact us»" },
        { _key: k("o"), iconName: "award", title: "Credentials made findable", text: "Licences, memberships, who signs the return" },
        { _key: k("o"), iconName: "calendar", title: "Content ready before the busy season", text: "Published months early, not in March" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Find me an accountant for an LLC»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why most accounting firm websites are invisible in search"),
        p("Open the search results for «website for accounting firms» and the top of the page is held by two template vendors who build sites for the profession by the hundred. That is the whole explanation. A large part of the industry sits on near-identical templates: the same page structure, the same service list, the same «we provide tax, audit and advisory services to businesses of all sizes». To a search engine those firms are interchangeable, so none of them can outrank another on anything except its own name."),
        p("The second reason is that the pages describe the service and not the client. «Tax planning» is what you do; «tax planning for an S-corp owner paying himself a salary» is what somebody searches. A firm that keeps the first wording competes with every other firm in the country, and a firm that writes the second competes with almost nobody."),

        h2("A page per client type is the one change that moves accounting firm SEO"),
        p("Accounting is bought by segment, not by service. An e-commerce seller with inventory in three states, a construction company with retainage and progress billing, a dental practice with equipment leases, a freelancer who just crossed a VAT threshold — these people have different questions, different software, and different fears, and they search in those terms."),
        p("So the structure is one page per segment you actually serve, each naming the segment, the specific problems it brings, the software you work in, and what the engagement costs. That is also the honest filter: a firm that cannot name three segments it is better at than average has a positioning problem rather than an SEO problem, and more content will not fix it."),
        li("name the segment in the heading, not in the third paragraph;"),
        li("say which software you work in — the segment searches by it;"),
        li("state what the engagement includes and what it costs, or at least a floor;"),
        li("show who on the team actually handles that segment;"),
        li("and do not create a segment page for work you would rather not take."),

        h2("Local search for an accounting firm with one office or several"),
        p("Most accounting work is bought locally even when it could be done remotely, because people want someone they can reach. That makes the Google Business Profile as important as the site: the categories, the service list, the hours, and the reviews, with the same firm name and address everywhere they appear. A firm with two offices needs a real page per office with its own address and team, not one page listing both."),
        p(
          "What this covers in detail is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ". Where the firm serves clients across a country rather than a city, the local side matters less and the segment pages carry the weight.",
        ),

        h2("Publishing prices: how far to go and what it changes"),
        p("The single most common complaint from accounting-firm visitors is that no price is shown anywhere. Buyers read «contact us for a quote» as «this will be expensive and awkward to ask about», and the ones who are price-sensitive leave without contacting you — which is also the point: a stated floor filters them out before they take an hour of your time."),
        p("Going as far as you are willing is enough. A monthly fee for a defined scope, a fixed price for an annual return at a stated revenue level, or a range with what moves it. The firms that refuse any figure are usually the ones whose enquiries are hardest to qualify."),

        h2("Publishing content before the busy season, not during it"),
        p("Search demand in this profession is seasonal and the content calendar has to run ahead of it. A page written during the filing rush is indexed and starts gathering positions after the rush has ended; the same page published a few months earlier collects the season it was written for. The practical rule is that anything tied to a deadline is written in the quiet months, and the quiet months are exactly when nobody feels like writing it."),

        h2("SEO for bookkeepers: a smaller market with a different buyer"),
        p("A bookkeeping practice is not a smaller accounting firm — it sells a recurring operational service, usually to owners who do not want to touch their own books, and the buyer compares on monthly price, software and responsiveness rather than on credentials. Measured demand here is small: «seo for bookkeepers» and «bookkeeper seo» together run about thirty searches a month in English, which is why this is a section rather than a page of its own."),
        p("What differs in the work: the software is the keyword, because owners search «QuickBooks bookkeeper» or «Xero bookkeeper» and not «bookkeeping services»; the monthly price belongs on the page because that is the comparison being made; and a clear statement of what is and is not included prevents most of the bad-fit enquiries."),

        h2("What SEO for accounting firms costs and when it shows results"),
        p(
          "An audit is €250 and covers the site, the Google Business Profile and what AI assistants currently say about the firm. One-off work — segment pages, pricing, structured data, the local profile — runs €250–800 depending on scope. Ongoing work is €800 a month. First movements are usually visible after about a month and a half; steady growth sits on a three to six month horizon, and anyone promising a position by a date is selling a date rather than a result. The full list is on the ",
          link("pricing page", "/pricing"),
          ", and what an audit contains is on the ",
          link("SEO audit page", "/services/seo-audit"),
          ".",
        ),

        h2("When the site has to be rebuilt instead of promoted"),
        p(
          "If the firm sits on a vendor template where pages cannot be added, text cannot be edited without a support ticket and the address structure is fixed, SEO work on it is paying rent. In that case the cheaper route is a site you own: ",
          link("website development for an accounting firm", "/accounting-firm-website"),
          ". I say which of the two applies before quoting, and a template that merely looks dated is not a reason to rebuild.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: professional services, where credibility is checked before contact",
      subtitle:
        "What these have in common with an accounting practice: expertise is the product, the buyer verifies credibility before writing, and the search growth came from structure and content rather than bought links. An education agency taken from one country to ten, a retail-analytics consultant, a digital agency site, a personal site built and optimised from scratch, and a multilingual site for student services.",
      picks: [
        "seo-case-study-education-agency",
        "consultant-website-design-retail-analytics",
        "proscore-agency-website-development",
        "develop-and-optimize-a-personal-website-with-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your accounting firm",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Firm name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is the practice?", options: ["Accounting firm", "Bookkeeping practice", "Tax advisory", "A mix of all three"] },
        { _key: k("z"), question: "Who are the clients?", options: ["Local small business", "One or two niches", "Anyone who comes", "Mostly remote"] },
        { _key: k("z"), question: "What is the site on?", options: ["An industry template", "WordPress", "Something custom", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a client asks ChatGPT for an accountant (GEO, AEO)"),
        p("«Find me an accountant for a one-person LLC with Stripe income» is now a question people type into an assistant before they open a search engine. The assistant answers from text it can read and from sources that agree with each other, which makes three things decide whether a firm is named: the segments and services written as text rather than shown in a brochure image, a price or a range the assistant can quote, and the same firm name, address and service wording on the site, the Google Business Profile and any professional directory that lists the firm."),
        p(
          "A firm on a vendor template usually fails the third one, because the directory listing and the site were filled in years apart by different people. Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if the problem is that assistants say something wrong about the firm, that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for accounting firms: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for an accounting firm cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. The number of client segments, the number of offices and whether the site can be edited at all are what move it."],
          ["How long before we see anything?", "First movements after about a month and a half, steady growth on a three to six month horizon. In this profession the season matters too: work done in the quiet months collects the following busy season, work started during the rush collects the one after."],
          ["We rank for our firm name already. Is that not enough?", "It means you are findable by people who already know you exist, which is most of what a template site delivers. The work here is being found by somebody who does not know your name and is searching for their own problem instead."],
          ["Do we have to publish prices?", "Not to the last figure, but something. A monthly fee for a defined scope, or a fixed price for an annual return at a stated revenue level. «Contact us for a quote» reads as «expensive and awkward to ask», and it also means every unqualified enquiry reaches you by phone."],
          ["Our site is on an industry template. Can you work with it?", "Sometimes. If pages can be added and text edited, yes. If the structure is fixed and changes go through a support ticket, SEO work on it is paying rent, and a site you own is cheaper within the year. I say which case it is before quoting."],
          ["Do you work with bookkeeping practices as well as accounting firms?", "Yes, and the work differs. A bookkeeping buyer compares monthly price, software and responsiveness, so the software is the keyword and the monthly fee belongs on the page. The measured search volume is much smaller, which changes what the work is worth rather than whether it is possible."],
          ["Can you guarantee a position?", "No, and nobody honest can — the ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we will measure a month and three months in."],
          ["Who writes the content?", "I do, and you correct it on the professional facts. Writing about tax and accounting without a practitioner's review is how a site ends up with something confidently wrong on it, and in this field that costs more than a ranking."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for an accounting firm: what to send me"),
        p("Send the website, say which client segments you are actually better at than average, how many offices you have, and whether you can edit the site yourself. I reply within one working day with what is holding it back and what I would do first — and if the honest answer is that the template has to go before anything else is worth doing, I will say that rather than sell a year of work on top of it."),
      ],
    },
  ],
};
