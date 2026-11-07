// Landing page fixture: SEO for banks (EN), group «bank-seo». New page.
//
// Why this page exists (07.11.2026). The industry was excluded on 03.11 by
// reasoning rather than by measurement — «a bank will not hire a sole
// contractor» — and the owner insisted on checking. Measurement:
// «seo for banks» 320, «banks seo» 320, «bank website design» 170 (EN),
// «продвижение сайта банка» 170 (RU). Intent check: «seo for banks» top 10 is
// iQuanti, WebFX, Drive Research, Forbin, Americaneagle, SEOProfy — agencies
// selling SEO to banks, i.e. the searcher is the bank. Confirmed owner intent.
// See claude/industry-delta-2026-11-07.md.
//
// Who the buyer realistically is: a small or regional bank, a cooperative bank,
// a credit union. A tier-one bank runs a tender and hires an agency; that is a
// fact about the buyer, not about the demand, and the page is written for the
// smaller institution without saying any of this out loud.
//
// Spine, and what makes this page different from every other SEO page on the
// site: a bank cannot rewrite its own text freely. Rates, fees and product
// conditions pass compliance, and the mandatory disclosures are not optional.
// SEO advice that assumes free rewriting simply does not survive contact with
// a regulated institution — so the method is built around what can be changed
// and how long approval takes.
//
// NOT on this page: building a bank website from scratch (separate demand,
// «bank website design» 170, its own page later); local SEO in depth
// (/services/local-seo-services); fintech and payment providers.
//
// Owner's rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor's industry; no guaranteed positions.
import { p, h2, li, link, k } from "./pt";

export const bankSeoEn = {
  lang: "en",
  group: "bank-seo",
  slug: "seo-for-banks",
  title: "SEO for banks",
  heading: "SEO for banks: winning the searches that happen before the branded one",
  excerpt:
    "SEO for banks and cooperative banks: product pages that rank against comparison sites, a page per branch, text that survives compliance, and visibility in AI search — GEO and AEO included. Audit from €250.",
  seo: {
    metaTitle: "SEO for Banks: Product Pages, Branches, AI Search",
    metaDescription:
      "SEO for banks: product pages that beat comparison sites in the long tail, a page per branch, text that passes compliance, visibility in AI search. From €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Product and branch pages", "Audit from €250", "Answer within 1 working day"],
  heroPhonePoints: ["Mortgage calculator", "Find a branch", "Business account", "Call us"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a bank: product pages, branches, compliance constraints, AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a bank: product page structure, branch pages, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO and AI-search work for a bank", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What SEO for a bank actually covers",
      items: [
        { _key: k("o"), iconName: "credit-card", title: "Product pages that rank", text: "One page per product and condition" },
        { _key: k("o"), iconName: "map-pin", title: "A page for every branch", text: "Hours, services, people, structured data" },
        { _key: k("o"), iconName: "file-lock", title: "Text that passes compliance", text: "Written to be approved, not rewritten" },
        { _key: k("o"), iconName: "gauge", title: "Calculators that load fast", text: "The slowest page is usually the one that sells" },
        { _key: k("o"), iconName: "shield-check", title: "One domain, no look-alikes", text: "Campaign microsites cost trust and rankings" },
        { _key: k("o"), iconName: "bot", title: "Answers in AI assistants", text: "Conditions readable as text, not as images" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a bank's SEO report looks healthy and still brings no applications"),
        p("I do SEO for banks and cooperative banks, and that includes being found in AI answers rather than only in Google. The first thing an analytics report hides is that almost all of a bank's organic traffic is branded: people typing the bank's own name plus login, hours, swift code or contact. That traffic would arrive with or without SEO, and it makes the chart look fine while the searches that decide where someone opens an account go to somebody else."),
        p("The searches that matter happen earlier and without your name in them: a mortgage with a given down payment, a business account for a one-person company, a deposit for a specific term, a card without a monthly fee, a branch in a particular district. Those are the ones to win, and they are won on pages that most bank sites do not have."),

        h2("Why comparison sites outrank banks, and what to do instead"),
        p("For a query like best mortgage or cheapest business account, the first page belongs to comparison and aggregator sites almost everywhere. They have more pages, more links and no compliance department. A bank that tries to beat them head-on spends a year and loses."),
        p("What works is the layer underneath: the long tail where the query already contains a condition, a situation or a place. A page about a mortgage for a plot of land, about an account for a freelancer registering for VAT, about a deposit that allows early withdrawal, about what happens to the rate after the first year. Comparison sites cover these thinly because their format is a table; a bank can answer them properly, and that is where the enquiries sit."),

        h2("A page for every branch: the local search a bank already deserves"),
        p("A bank with offices has a local search asset it rarely uses. One page per branch, each with its own address, hours, the services available there, parking and accessibility, structured data and a matching maps profile, wins the searches that end in a visit. For cooperative and regional banks this is usually the single largest unclaimed source of traffic, because the national banks treat branches as a list in a finder tool and publish no page at all."),
        p(
          "The maps side of this is a job in itself — see ",
          link("local SEO", "/services/local-seo-services"),
          ".",
        ),

        h2("Writing for search when every line goes through compliance"),
        p("This is where ordinary SEO advice breaks. In a bank, a sentence about a rate, a fee or a condition is not a copywriting decision: it carries mandatory disclosures, it is reviewed, and it cannot be edited on a whim to chase a keyword. Any plan that assumes free rewriting will stall at the first review."),
        li("the parts of a page that can change without review are separated from the parts that cannot, so optimisation happens where it is allowed;"),
        li("headings and explanatory text carry the search terms, while the regulated figures stay exactly as approved;"),
        li("changes are prepared in batches that match the review cycle rather than arriving one line at a time;"),
        li("the disclosures stay as crawlable text on the page — not inside an image or a PDF, where they protect you legally and disappear from search."),

        h2("The technical work that actually moves a bank site"),
        li("calculators and application forms that load quickly on a phone, because they are the pages that convert and usually the heaviest;"),
        li("one domain for everything: campaign microsites on separate domains split the authority you already paid for and teach customers to trust look-alike addresses, which is the last habit a bank wants;"),
        li("accessibility treated as a requirement rather than a nice-to-have — for banking services in the EU it is now law, and the semantic structure it demands is the same structure search engines read;"),
        li("indexing control over the thousands of near-identical pages banks generate: archived rate tables, branch finders with parameters, old campaign pages."),

        h2("What SEO for a bank costs"),
        p(
          "An audit is from €250: product pages, branches, the compliance constraints as they actually are in your institution, and what AI assistants currently say about you. One-off work is €250–800. Ongoing work is from €800 a month. What moves the price is the number of products, the number of branches and how long an approval round takes at your institution — that last one more than anything else. The figures are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How long results take at a bank, honestly stated"),
        p("First movement is usually visible after about a month and a half, steady growth over three to six months. In a regulated institution the arithmetic has an extra term: if a text change waits three weeks for approval, the whole schedule stretches by three weeks. I plan around that rather than pretend it does not exist, and I do not promise positions — nobody can."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: multilingual platforms and work in regulated fields",
      subtitle:
        "A multilingual real estate platform with a catalogue, filters and search visibility built without bought links; an education agency site that grew from one country to ten; a renovation and investment company site with a premium look; a multilingual student services site; and a consultant site built around a single expertise.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An audit of your bank's search visibility",
      subtitle: "I answer within one working day: what is losing you traffic now, what to fix first, and what it costs.",
      contextLabel: "Institution name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get an answer",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of institution?", options: ["Regional or cooperative bank", "Online-only bank", "Bank-adjacent financial company", "Something else"] },
        { _key: k("z"), question: "How many branches?", options: ["None, online only", "Up to 10", "10 to 50", "More than 50"] },
        { _key: k("z"), question: "How long does text approval take?", options: ["Days", "Weeks", "Longer than that", "Not sure yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Getting a bank's products quoted by AI assistants (GEO, AEO)"),
        p("People increasingly ask ChatGPT, Perplexity or Google's AI overviews which bank does what: an account with no monthly fee for a small company, a mortgage for a self-employed borrower, a deposit that allows early withdrawal. An assistant answers from text it can read and from sources that agree with each other, and a bank is unusually exposed here — if the conditions live in a PDF or a table image, the assistant quotes a comparison site instead, and the comparison site may be out of date."),
        p(
          "What this requires is ordinary and precise: conditions as text on the page, structured data matching what is visible, the same product names everywhere, and a review cycle that updates the page when the rate changes rather than a month later. Bringing an existing site to that state is its own job — ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ". Checking what assistants say about your institution today is an ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for banks: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a bank cost?", "An audit is from €250, one-off work €250–800, ongoing SEO from €800 a month. The number of products, the number of branches and the length of your approval cycle move the price more than anything else."],
          ["Our marketing text has to pass compliance. Does that make SEO impossible?", "No, it makes it a different job. The work separates what can be changed freely from what cannot, puts the search terms into headings and explanatory text, and prepares changes in batches that fit your review cycle rather than one line at a time."],
          ["Can we outrank comparison sites for product queries?", "Not for the head terms, and anyone promising that is selling you a year. The layer underneath is winnable: queries that already contain a condition, a situation or a place, where a comparison table answers thinly and a bank can answer properly."],
          ["We are a cooperative bank with branches. Where is the biggest gain?", "Usually the branches. One page per branch with its own address, hours, available services and structured data is the largest unclaimed source of traffic for regional institutions, because the national banks publish a finder tool instead of pages."],
          ["Do you work with regulated clients?", "Yes. Regulated work means text under review, mandatory disclosures and a publishing process with more than one person in it — and planning around that is part of the method rather than an obstacle to it."],
          ["Can you guarantee positions?", "No, and nobody can. I can commit to the work, to the measurements before and after, and to telling you when something is not moving and why."],
          ["How do you measure results at a bank?", "By non-branded traffic and what it does next: product page visits, calculator use, application starts, branch page views and calls. Branded traffic is reported separately, because it would arrive anyway and mixing the two flatters everybody."],
          ["Does AI search matter for a bank?", "Increasingly, and the risk runs the other way for you: if your conditions are not readable as text, the assistant quotes a comparison site that may be out of date. The fix is on your own pages."],
          ["Who writes the texts?", "I can, your people can, or we split it: your product owners supply the substance, I put it into a form that gets read and found, and your reviewers see wording built to be approved rather than argued about."],
          ["Will we own everything?", "Yes: the pages, the data, the analytics and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Starting search work with a bank: what to send me"),
        p("Tell me what kind of institution you are, how many branches you have, which products matter most this year and how long a text approval usually takes. Send the website link and, if you have it, access to Search Console. I answer within one working day: what is losing you traffic now, what to fix first, and what it costs."),
      ],
    },
  ],
};
