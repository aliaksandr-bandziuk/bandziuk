// Landing page fixture: SEO for real estate (EN), group «real-estate-seo».
// Rebuild of the existing old-template page under the same address
// /seo-for-real-estate — replace-landing.cjs.
//
// Semantic core: research/pseo/page-core/real-estate-finance.csv — «real estate
// seo» 1000, «seo for real estate» 1000, «seo real estate» 1000, «real estate
// seo service(s)» 590. The largest unworked volume in the real estate cluster.
//
// Positioning, decided 30.10.2026: this page takes the BROAD query and routes
// the two narrow audiences away, because both already have their own
// new-template pages. research/pseo/intent-check-real-estate-finance.md
// measured «seo for realtors» against «real estate seo» — 0 shared results out
// of 10, so they are separate pages and nothing is merged or redirected.
//   individual agents → /seo-for-realtors
//   developers        → /seo-for-real-estate-developers
// The old H1 promised «agencies and developers», which competed with our own
// developer page.
//
// Defects fixed from the old page (see drafts/current/en-seo-for-real-estate.md):
//   * table header said «Got a good fit if you» instead of «Not a good fit»;
//   * a service card read «Content and structure optimized AI-driven search
//     platforms (ChatGPT, Perplexity, and another)» — missing preposition and
//     a meaningless «and another»;
//   * «SEO for real estate in the AI era focuses on:» — a heading that starts a
//     sentence instead of naming the section (one of the 7 found in the heading
//     audit of 30.10.2026);
//   * FAQ promised «6–12 months», against the site standard of ~1.5 months to
//     the first results and 3–6 months of growth;
//   * ✔/❌ emoji in the comparison table.
import { p, h2, h3, li, link, k } from "./pt";

export const realEstateSeoEn = {
  lang: "en",
  group: "real-estate-seo",
  slug: "seo-for-real-estate",
  title: "SEO for Real Estate Websites",
  heading: "SEO for real estate: enquiries that reach your own site, not the portal",
  excerpt:
    "I do SEO for real estate websites — agencies, investment companies and property businesses — including GEO and AEO, the work that gets a site named in ChatGPT, Perplexity and AI Overviews. A catalogue search engines can crawl, location pages portals cannot match, and prices a buyer can see. Whoever runs the audit also writes the fixes.",
  seo: {
    metaTitle: "Real estate SEO — enquiries to your site, not the portal",
    metaDescription:
      "SEO for real estate websites: a crawlable listing catalogue, location pages, prices buyers can see, plus GEO and AEO for AI answers. Audit from €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Catalogue and location pages", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Apartments in Limassol", "Property investment guide", "New builds near me", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit of a real estate website: catalogue, locations and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: catalogue architecture, location pages, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a real estate website", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What SEO for a real estate website includes",
      items: [
        { _key: k("o"), iconName: "layers", title: "A catalogue search engines can crawl", text: "Filters and pagination that stop splitting ranking signals" },
        { _key: k("o"), iconName: "map-pin", title: "Location and neighbourhood pages", text: "The questions a portal listing never answers" },
        { _key: k("o"), iconName: "file-text", title: "Pages for each property type", text: "Written the way buyers actually search" },
        { _key: k("o"), iconName: "globe", title: "Languages and hreflang done properly", text: "Buyers research in more than one language" },
        { _key: k("o"), iconName: "zap", title: "Speed on image-heavy pages", text: "Property photography is what makes these sites slow" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in AI answers (GEO, AEO)", text: "ChatGPT, Perplexity and Google AI Overviews" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a real estate website loses to portals in Google, and what can be changed"),
        p(
          "Most real estate websites are not invisible because of their design. They are invisible because the pages that could rank do not exist, and the pages that do exist are fragmented across hundreds of filter URLs. ",
          link("A site that does not appear in Google", "/blog/website-not-showing-in-google"),
          " almost always has a structural reason, not a cosmetic one.",
        ),
        p("The second reason is the competition. Rightmove, Idealista, Zillow and their local equivalents own the head queries, and no amount of optimisation moves an agency above them on «apartments for sale in <city>». That is not where this work pays off."),
        p("Where it does pay off: the queries portals answer badly. A buyer asking which neighbourhood suits a family, what the purchase process costs a foreign buyer, what a particular development actually includes, or how rental yields differ between two districts gets a list of listings from a portal and no answer. That is the gap, and it is where your own site can win and keep the lead instead of paying for it."),

        h2("A listing catalogue search engines can crawl: filters, pagination, canonicals"),
        p("A real estate catalogue is the hardest technical object in this industry. Every filter combination can generate a URL, and a site with eight filters produces more addresses than it has listings. Search engines then spend their crawl budget on near-duplicate pages and split ranking signals between them."),
        p("The work here is unglamorous and decides everything else: which filter combinations become indexable pages and which stay out, canonical tags that point somewhere sensible, pagination that does not orphan page 14, structured data for listings, and a sitemap that reflects what actually exists. Done once, properly, it is the highest-leverage technical investment a real estate site has."),
        p("The same applies to listings that sell. A property page that disappears leaves either a dead end or a soft 404; neither is neutral, and at the volume these sites churn, it matters."),

        h2("Location and neighbourhood pages: what a portal listing cannot answer"),
        p("Location pages are the backbone of real estate SEO, and most sites either skip them or fill them with a map and a listing feed."),
        p("A location page earns its rankings when it answers what a buyer cannot get from a listing: what the area is like, who lives there, what transport and schools exist, how prices moved, what the service charges and taxes look like, what is being built nearby. This is content a portal structurally cannot produce, because a portal sells listings, not local knowledge."),
        p("Property-type pages work the same way: new builds, resale apartments, villas, commercial units, land. Each has a different buyer with different questions, and each has its own search demand."),

        h2("Prices and conditions on the site: what buyers check before they call"),
        p("Real estate buyers arrive with money questions, and a site that avoids them loses the enquiry to one that does not."),
        p("That means price ranges per area and property type, what the total cost of purchase includes beyond the price — fees, taxes, notary, agency commission — and what the process looks like step by step for a buyer who is not local. Putting this in writing filters out the enquiries you cannot serve and raises the quality of the ones you can."),

        h2("Several languages on a real estate site, and the mistakes that cost rankings"),
        p("Cross-border property buyers research in their own language and buy in another, so most real estate sites that matter are multilingual. That is also where the technical damage usually sits."),
        p("The recurring mistakes: hreflang that points at pages which do not exist, one language machine-translated from another and indexed as thin duplicate content, locations named differently in each language so none of them builds authority, and a language switcher that drops the visitor onto the home page instead of the same property. Each of these is fixable, and each one is currently costing rankings on sites that look fine from the outside."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: real estate and investment websites I have worked on",
      subtitle:
        "The first case is a multilingual real estate platform — catalogue, locations and several languages at once. After it: a renovation and property investment site, an architecture practice rebuilt with an SEO scan, and multilingual projects where structure decided the outcome.",
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
        h2("How long real estate SEO takes to show results"),
        p("First measurable movement appears in about a month and a half: pages that were not indexed get indexed, and queries the site never appeared for start showing impressions. Steady growth in enquiries builds over three to six months, as location and property-type pages accumulate authority and the catalogue fixes work through the index."),
        p("Real estate is slower than most industries on the head queries, because portals hold them, and faster than most on the long tail, because almost nobody writes proper location content. That is why the work starts with the long tail."),

        h2("What SEO for a real estate website costs and what is included"),
        p(
          "An audit of the site, the catalogue and the AI answers is €250. One-off work — catalogue architecture, location pages, structured data — runs €250–800 depending on scope. Ongoing SEO is €800 a month and includes the technical work, the content plan, new pages and the reporting. The full price list is on the ",
          link("pricing page", "/pricing"),
          ", and the audit has a page of its own: ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
        p("Whoever runs the audit also writes the fixes. You do not get a list of problems and an invitation to find a developer for them."),

        h2("Who SEO for a real estate website suits, and who it does not"),
        p("It suits you if you sell or let property through your own site, have a catalogue worth crawling, and are willing to publish content about locations and the buying process. It also suits an investment or development business where a single enquiry is worth enough that a few months of groundwork is obviously cheaper than the equivalent in advertising."),
        p("It does not suit you if the entire business runs through portal listings and the site is a formality, if nothing on the site may be changed, or if you need enquiries this week — that is an advertising budget, not SEO."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for real estate SEO",
      subtitle:
        "I reply within one working day: what I would do first, in what order and at what price.",
      contextLabel: "Website or company name",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "seo",
      quizQuestions: [
        { _key: k("z"), question: "What do you sell?", options: ["Resale property", "New builds", "Rentals", "Investment property"] },
        { _key: k("z"), question: "Where do enquiries come from now?", options: ["Portals", "Advertising", "Organic search", "Referrals"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Real estate in AI search: what GEO and AEO mean and how they are done"),
        p("Buyers increasingly start in ChatGPT, Perplexity or Google's AI Overviews rather than in a list of ten links: «which district of Limassol suits a family», «what does buying an apartment cost a foreign buyer in Spain», «which agencies work with this development». The assistant answers from text it can read and restate, and it names sources."),
        p("Two acronyms describe the work. GEO, generative engine optimization, is getting a site used and named as a source by AI assistants. AEO, answer engine optimization, is getting it quoted in the direct answer rather than the link list. Both reward the same things, and they are not the same things that classic rankings reward."),
        h3("What AI assistants actually use"),
        li("a direct answer at the top of a section, before the context and the caveats;"),
        li("facts — prices, areas, fees, timelines — instead of adjectives about the market;"),
        li("Schema.org markup that matches the visible text rather than contradicting it;"),
        li("consistent naming of locations, property types and your own brand across the whole site;"),
        li("content that is in the HTML and does not need scripts to appear."),
        p(
          "Real estate suits AI search unusually well, because the decisions run on trust and detail rather than on price alone. How this is done on an existing site is a separate job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for real estate websites: questions owners ask",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What makes real estate SEO different from general SEO?", "Three things: a large catalogue that changes constantly, direct competition with portals on every head query, and buyers who research in several languages. The work is therefore weighted towards catalogue architecture, location content and hreflang, rather than towards the generic checklist."],
          ["Should a real estate website compete with portals or complement them?", "Both, in different places. Portals bring volume but own the lead and the relationship. Your own site is the asset you control — the brand, the enquiry flow, the client data — and it wins on the depth portals cannot produce. Strong businesses rank in both and stop depending on either."],
          ["What content brings the most organic traffic to a real estate site?", "Location and neighbourhood guides, property-type pages structured around how buyers search, and buying guides covering process, financing and legal steps. All three answer what a listing cannot, which is why they hold rankings long term."],
          ["How do filters and URL parameters affect a real estate catalogue?", "They are the main technical risk. Filter combinations can generate hundreds of near-duplicate addresses that split ranking signals and burn crawl budget. Deciding which combinations become indexable pages, and setting canonicals and pagination accordingly, is where most of the technical gain is."],
          ["How long does real estate SEO take to produce results?", "About a month and a half to the first measurable movement, three to six months for steady growth in enquiries. Head queries held by portals take longer; the long tail moves first, which is why the work starts there."],
          ["How do you measure whether real estate SEO is working?", "By enquiries, not rankings. Organic enquiry volume, how many of them are qualified, what an organic enquiry costs next to a paid one, and organic's growing share of the total. Rankings are an input and I report them, but they are not the result."],
          ["We are an individual agent, not an agency. Is this the right page?", "No — an individual agent sells a name, a few neighbourhoods and a personal track record, and the work is different. That is covered on the SEO for realtors page. A developer selling its own projects has its own page too."],
          ["Do you work with sites in several languages?", "Yes, and this site itself runs in three. Multilingual real estate sites are where most of the fixable technical damage sits: broken hreflang, machine-translated duplicates, inconsistent location names."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Individual agents and developers: the two pages next to this one"),
        p(
          "An individual agent or a small team has a different task — their own name, their own neighbourhoods, their own listings: ",
          link("SEO for realtors", "/seo-for-realtors"),
          ". A developer selling its own projects has another one again, built around project pages and launch timing: ",
          link("SEO for real estate developers", "/seo-for-real-estate-developers"),
          ". If the site itself needs building rather than promoting, start from ",
          link("real estate agency website development", "/real-estate-agency-website"),
          ".",
        ),

        h2("Order SEO for a real estate website: what to send me"),
        p("Send the site, the markets you sell in, the languages it runs in, and where enquiries come from today. I will reply with what I would do first, in what order and at what price — and if the honest answer is that advertising will serve you better for the next few months, I will say that instead."),
      ],
    },
  ],
};
