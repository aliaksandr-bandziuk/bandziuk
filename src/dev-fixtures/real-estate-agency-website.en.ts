// Landing page fixture: real estate agency website development (EN), group
// «real-estate-agency-website». Rebuild of the existing old-template page under
// the same address /real-estate-agency-website — replace-landing.cjs.
//
// Measured demand is small: core.csv has «website for real estate agencies» at
// 10 (en), «разработка сайта для агентства недвижимости» 90 (ru), «strona dla
// agencji nieruchomości» 40 (pl). The page is rewritten for structure and for
// the cluster's coherence, not for traffic — the old page had ONE H2.
//
// Price tiers are not invented here: /blog/real-estate-agency-website-cost
// states €2000 / €3500 / €5500 as three tiers, and the PL article states
// 8500 / 15 000 / 23 000 zł. Checked live 30.10.2026.
//
// Dropped from the old page: a benefitsBlock headlining «+1500 organic
// visitors» and «99% qualified leads» under the title «Why most real estate
// agency websites don't sell». The 1500 is real — it is the Cyprus VIP Estates
// case — but was presented as a general promise; the 99% is not measurable by
// anything. The 1500 is kept only where it is attributed to the case.
// Also dropped: the reviewsFullBlock (owner's decision of 25.10.2026) and the
// old template's hardcoded stepsBlock / gridBlock / landingCtaBlock.
//
// Kept in substance from the old textContent block, which was already written
// in the current voice: why an agency loses to portals, what a buyer checks
// before making contact, why several languages matter more here than elsewhere.
//
// Разведение within the cluster: this page is the agency; one agent is
// /realtor-website-design; a developer selling its own projects is
// /property-developer-website; promoting an existing site is
// /seo-for-real-estate. intent-check-real-estate-finance.md measured «realtor
// website design» against «real estate agency website design» — 0 shared
// results out of 10, so these stay separate pages.
import { p, h2, h3, li, link, k } from "./pt";

export const realEstateAgencyWebsiteEn = {
  lang: "en",
  group: "real-estate-agency-website",
  slug: "real-estate-agency-website",
  title: "Real Estate Agency Website Development",
  heading: "Real estate agency website development: a catalogue that brings enquiries, not just listings",
  excerpt:
    "I build websites for real estate agencies: a property catalogue with filters that work, listing import that does not break, CRM integration so no enquiry is lost, and the second and third language done as separate work rather than as translation. I do it myself, from structure to code.",
  seo: {
    metaTitle: "Real estate agency website — scope, cost and timeline",
    metaDescription:
      "Real estate agency website development: catalogue with filters, listing import, CRM integration, several languages, structure AI can read. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Catalogue with working filters", "Websites from €2,000", "Reply in 1 working day"],
  heroPhonePoints: ["3 bedrooms, sea view", "Add to shortlist", "Book a viewing", "Price on request"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Basic catalogue website for an agency: listings, filters, enquiry forms", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Agency website with CRM integration, listing import and advanced search", price: 3500, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Large property portal with extended functionality, scoped individually", price: 5500, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What a real estate agency website build includes",
      items: [
        { _key: k("o"), iconName: "database", title: "A property catalogue with filters that work", text: "Price, location, type, rooms, and nothing nobody filters by" },
        { _key: k("o"), iconName: "refresh-cw", title: "Listing import and updates", text: "From your feed, your CRM or by hand — whichever you actually have" },
        { _key: k("o"), iconName: "plug", title: "CRM integration for enquiries", text: "Every enquiry lands where somebody sees it" },
        { _key: k("o"), iconName: "globe", title: "Second and third language", text: "Separate keyword work per language, not a translation pass" },
        { _key: k("o"), iconName: "zap", title: "Speed on image-heavy pages", text: "Property photography is what makes these sites slow" },
        { _key: k("o"), iconName: "sparkles", title: "Structure AI assistants can read", text: "Direct answers and markup that matches the text" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why an agency website loses to the portals it competes with"),
        p("An agency website almost always starts as a catalogue. Listings go up, filters get added, and the site is considered done. The problem is that a catalogue is the one thing an agency will never win on: portals hold more inventory, more traffic and larger search budgets, and a buyer looking only for listings goes there first. A site that competes on inventory competes on the single axis where it is guaranteed to lose."),
        p("What the agency does own is everything a portal cannot show: which districts you actually work in, which segment you know, which language your buyers speak, and what happens after the first enquiry. That is the material the site should be built from."),

        h2("What a buyer checks on an agency website before making contact"),
        p("By the time someone reaches your site they have usually seen the property somewhere else. The visit is not a search, it is a check: they are deciding whether to send the enquiry to you or to the agency open in the next tab."),
        p("They look for how long you have worked this market, whether the listings are current, whether a named person answers, and whether terms are stated or withheld until a call. None of that is decoration — it is the content that decides between an enquiry and a closed tab, and it is exactly what a catalogue with a contact form at the bottom leaves out."),

        h2("A property catalogue and its filters: what to filter by and what to drop"),
        p("Filters are where agency sites are over-built and under-used. Eight filters look thorough and produce a page nobody can operate on a phone, plus a crawl problem the site then carries for years."),
        p("Four or five decide almost every search: price, location, property type, rooms, and whichever one matters in your segment — plot size, floor, yield, completion date. The rest belong in the listing, not in the filter bar. What does matter is that a filtered result can be sent to someone as a link and still show the same properties, and that the combinations worth ranking become real pages instead of parameters."),
        p(
          "How a catalogue with filters is built is covered separately: ",
          link("catalogue website with filters", "/catalog-website-with-filters"),
          ".",
        ),

        h2("Listing import and updates: where the data comes from and what breaks"),
        p("The question that decides the build is where listings live today. A feed from a portal or an MLS, an export from your CRM, a spreadsheet, or three agents each keeping their own — each answer produces a different site."),
        h3("What breaks in practice"),
        li("a listing sells and its page disappears, leaving a dead end or a soft 404;"),
        li("the same property arrives twice from two sources under two addresses;"),
        li("photographs come in at full camera resolution and the catalogue slows to a crawl;"),
        li("prices update in the feed but not in the text somebody wrote by hand."),
        p("All four are solvable, and all four need deciding before the first page is designed rather than after launch."),

        h2("CRM integration: where an enquiry lands and who sees it"),
        p("An enquiry that arrives in a shared inbox is an enquiry somebody will eventually answer. One that arrives in the CRM with the property, the source and the time attached is a lead with an owner."),
        p("I connect the forms to whatever you already run, over its API, so enquiries are distributed by the rules you already use. Where there is no CRM, the forms still carry the property and the source into the notification, because knowing which listing produced the call changes what you say when you make it."),

        h2("Several languages: why it matters more for an agency than for most businesses"),
        p("Property is one of the few categories where the buyer routinely sits in a different country from the asset. A single-language site quietly filters out everyone searching in another language, and the agency never finds out — those buyers simply never appear in the statistics."),
        p(
          "Building the second and third language properly is not translation. It means separate keyword research per language, content adapted to how that market reads, and a URL structure search engines can tell apart. ",
          link("Build and optimize a multilingual real estate platform", "/portfolio/build-and-optimize-a-multilingual-real-estate-platform"),
          " is the case study for exactly that work.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: real estate and investment websites I have built",
      subtitle:
        "The first case is a multilingual real estate platform — catalogue, locations and several languages at once. After it: a renovation and property investment site, an architecture practice rebuilt with an SEO scan, and projects where structure decided the outcome.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("What a real estate agency website costs and what is included"),
        p(
          "A basic catalogue site with listings, filters and enquiry forms starts at €2,000. A site with CRM integration, listing import and advanced search starts at €3,500. A large portal with extended functionality starts at €5,500 and is scoped individually. Design is included, never a separate line. The full breakdown by tier is in ",
          link("how much a real estate agency website costs", "/blog/real-estate-agency-website-cost"),
          ", and the general price list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long building an agency website takes"),
        p("A basic catalogue site takes three to six weeks. CRM integration, listing import and each additional language extend that, and I give the figure before we start rather than during. A portal is scoped with its own timeline because the functionality decides it."),
        p("What usually stretches a build is not the code but the data: where listings come from, in what shape, and who keeps them current. The sooner that is settled, the shorter the rest."),

        h2("What stays with you after launch"),
        li("the code, the domain, the content and the CMS logins are yours from day one;"),
        li("the site does not live on my hosting account and exports are not blocked;"),
        li("the listing data stays in a form you can move elsewhere;"),
        li("the project can be handed to another developer at any point;"),
        li("the work runs on a contract with a fixed scope, timeline and stages."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your agency website",
      subtitle:
        "I reply within one working day: what I would build, in what scope and at what price.",
      contextLabel: "Agency name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How many listings?", options: ["Up to 50", "50–500", "More than 500", "Varies a lot"] },
        { _key: k("z"), question: "Where do listings live now?", options: ["In a CRM", "A portal feed", "A spreadsheet", "Nowhere yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("An agency website that AI assistants can read"),
        p("Buyers increasingly ask ChatGPT, Perplexity or Google's AI Overviews which agencies work a particular area or development, what buying costs a foreign buyer, and which district suits them. The assistant answers from text it can read and restate, and it names sources — so the structure of the site decides whether your agency appears in that answer at all."),
        p("In practice: a direct answer at the top of each section, facts about areas, segments and terms rather than adjectives, Schema.org markup for listings and the agency that matches the visible text, and content available without running scripts. This is built in during development, because adding it afterwards costs more than doing it at the start."),
        p(
          "How it is done on a site that already exists is a separate job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Real estate agency website development: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for a real estate agency cost?", "A basic catalogue site from €2,000, a site with CRM and advanced search from €3,500, a large portal from €5,500 and scoped individually. The price depends on the number of listings, where they come from, the integrations and the number of languages."],
          ["Can the site integrate with our CRM?", "Yes, over its API, so enquiries land in your system automatically and are distributed by the rules you already use. If there is no CRM, the forms still carry the property and the source into the notification."],
          ["Can listings be imported rather than entered by hand?", "Yes, from a portal or MLS feed, a CRM export or a spreadsheet. The import is where most of the long-term maintenance is decided, so it is worth settling before the design, not after."],
          ["Will the site bring clients from search?", "It is built so that it can: crawlable catalogue, pages for the combinations worth ranking, speed on image-heavy pages. The Cyprus VIP Estates case reached over 1,500 organic visitors a month — that figure is from that project, not a promise for every site. Ongoing promotion is separate work."],
          ["Do you work with agencies outside your own country?", "Yes. Multilingual property sites are most of what this kind of work is, and this site itself runs in three languages."],
          ["We only need two languages now, a third later. Is that a problem?", "No, as long as the structure is built for it from the start. Retrofitting a second language onto a site built for one is the expensive version of the same job."],
          ["Do you build on website builders?", "No. A catalogue with filters, import and CRM is exactly where builders run out, and moving off one later costs more than building on Next.js or WordPress in the first place."],
          ["Who owns the site after launch?", "You do: the code, the domain, the content, the CMS logins and the listing data in a movable form. The site does not live on my hosting, exports are not blocked, and it can be handed to another developer at any time."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("One agent, a developer, or promoting an existing site: the pages next to this one"),
        p(
          "A site for one agent rather than an agency — personal brand, neighbourhood pages, IDX listings — is covered on ",
          link("realtor website design", "/realtor-website-design"),
          ". A developer selling its own projects has its own page: ",
          link("property developer website", "/property-developer-website"),
          ". If the site exists and the problem is enquiries from search, that is a different job: ",
          link("SEO for real estate", "/seo-for-real-estate"),
          ".",
        ),

        h2("Order an agency website: what to send me"),
        p("Send roughly how many listings you carry, where they live today, which markets and languages you work in, and which CRM you use. I will reply with what I would build, in what scope and at what price."),
      ],
    },
  ],
};
