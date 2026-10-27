// Landing page fixture: SEO for Real Estate Developers (EN), group
// «seo-for-real-estate-developers». New page.
// Semantic core: ref/food-developer.md (US) and BRIEF.md: real estate developer
// marketing 20 (H2, metaDescription), real estate developer marketing strategy
// 0 (same H2) · real estate developer seo — no measured volume, carried with
// «seo for real estate developers» in H1, metaTitle and several H2. Buyer-side
// phrases used as examples, not targets: «pre-construction condos [city]»,
// «new construction homes [city]», «off-plan apartments [city]». PAA for the
// set (developer economics, «big 4 in real estate») is off-topic — not used.
// Intent: ref/intent-check-food-developer.md — «real estate developer seo» vs
// «real estate seo» 1 of 10 shared URLs (luxurypresence.com/seo-geo); SERP =
// real-estate marketing agencies and platforms (Real Estate Webmasters,
// Placester, Luxury Presence) → the searcher is a developer’s marketing team,
// not an agent → own page, separate from /seo-for-realtors. «real estate
// developer seo» vs «real estate developer website» 0 shared → SEO and website
// are separate pages; /property-developer-website is linked once.
// Angle: development pages by city and stage, unit prices and availability
// from feeds, location + type + stage + budget searches, portals as
// competitors, foreign buyers and languages, crawl control for a big catalog,
// links without buying, AI answers on developer reliability. Main proof: the
// property platform in Cyprus (facts exactly as in the brief, client not named).
// NOT on this page: site design, build, CRM forms, sales-office booking
// (/property-developer-website); an individual agent’s name searches and
// neighborhood pages (/seo-for-realtors — linked once); Google Ads and portal
// promotions (not offered); Cyprus market detail (/seo-for-real-estate-in-cyprus).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForRealEstateDevelopersEn = {
  lang: "en",
  group: "seo-for-real-estate-developers",
  slug: "seo-for-real-estate-developers",
  title: "SEO for real estate developers",
  heading: "SEO for Real Estate Developers",
  excerpt:
    "I do SEO for real estate developers: a page for every development that ranks for its city and stage, unit prices and availability kept current from your feed, landing pages by location, type and budget, versions for foreign buyers, links earned without buying them and a place in AI answers.",
  seo: {
    metaTitle: "Real Estate Developer SEO for New Projects | Bandziuk",
    metaDescription:
      "SEO for real estate developers: development pages, live unit prices, city and budget pages, foreign buyers, AI answers, no bought links. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Developments, units and buyers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Pre-construction condos", "2-bed units, completion 2027", "Floor plans and prices", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a real estate developer: development pages, catalog, feeds, crawling, portals and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off developer SEO work: development page template, city and budget landing pages, structured data, redirects", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a real estate developer", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for real estate developers",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page that ranks for each development", text: "Prices, floor plans, completion date, location" },
        { _key: k("o"), iconName: "plug", title: "Unit prices and availability from your feed", text: "Sold units marked, not left on sale" },
        { _key: k("o"), iconName: "map-pin", title: "Pages for cities, unit types and price bands", text: "Built from the searches buyers really make" },
        { _key: k("o"), iconName: "search", title: "Versions for buyers from abroad", text: "Written for each market, linked with hreflang" },
        { _key: k("o"), iconName: "shield-check", title: "Links earned, never bought", text: "Developer, press and directory mentions" },
        { _key: k("o"), iconName: "sparkles", title: "Recommended by AI assistants", text: "Completed projects and company facts they can verify" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit for a real estate developer", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a developer", value: "from 800 € / month", note: "from 1,300 € in big, competitive markets", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Real estate developer SEO portfolio: property, B2B and multilingual sites",
      subtitle:
        "The first project is the one a developer will recognize: a property platform in Cyprus with about 375 new developments from licensed developers, which I have built and run since early 2025, when no site existed. Organic traffic climbed from zero to roughly 2,500 visits a month, 96% of its traffic comes from search, roughly one organic visit in ten comes from AI assistants, and it has never had a bought link or a Google Ads campaign. Next to it: a premium site for a Warsaw renovation and property-investment company, a technical B2B site in three languages for ScanM2, a 3D laser scanning and BIM company, where search traffic rose 29×, an education agency site for ten countries, and a psychotherapist’s site in Milan whose newest pages ChatGPT already cites. What they share with a developer: large or multilingual catalogs, buyers who compare for months, and facts search engines and assistants can verify.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your developments",
      subtitle: "Within one business day you get my first three priorities — development pages, the catalog or the feed — with a fixed price.",
      contextLabel: "Developer name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you build and sell?", options: ["Condos and apartments", "Single-family homes and townhomes", "Villas and resort property", "Mixed-use or commercial"] },
        { _key: k("z"), question: "How many developments are on sale now?", options: ["One, with more planned", "Two to five", "More than five", "None yet — first launch ahead"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for real estate developers is the work that puts your developments, and the units still for sale in them, in front of buyers who are searching by city, property type, construction stage and budget — months before they walk into a sales office. All of it is done by me personally: I also build and run property catalogs, so whoever spots a crawling problem in your listings is the same person who rewrites the template."),

        h2("What SEO for real estate developers covers"),
        p("A developer’s site is not a brochure with a contact form. It is a catalog that changes every week: units sell, prices move, a new phase launches, a completed building leaves the market. Search engines rank it like any large catalog, and buyers judge it like a sales office. The work covers five areas:"),
        li("search demand for your cities and products, from “pre-construction condos Miami” to “new construction townhomes Raleigh”"),
        li("one strong page per development, plus pages for areas, unit types and price bands"),
        li("unit data — prices, floor plans, availability — kept current and readable"),
        li("the technical side of a big catalog: filters, maps, sold units, redirects"),
        li("trust signals: links, mentions, reviews and answers in AI assistants"),

        h2("Real estate developer marketing: where SEO sits next to brokers, portals and ads"),
        p("A real estate developer marketing strategy usually leans on channels that stop when the money stops: paid portal placements, brokers on commission, launch campaigns. Search works on a different clock. Buyers of new homes research for a long time, and many of them type the development’s name, your company name or the neighborhood dozens of times before they sign a reservation. If those searches land on a portal or a broker’s copy of your listing, you pay for a buyer who was already looking for you."),
        p(
          "SEO keeps those searches on your own site and adds the ones you would not reach otherwise. The sales office still needs its own Google Business Profile with hours and directions; that map work is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Real estate developer keywords: location, property type, stage and budget"),
        p("Buyers of new builds combine four things in one query, and the mix tells you where they are in the decision:"),
        li("location — city, neighborhood, school district, “near the beach” or “near downtown”"),
        li("property type and size — condo, townhome, villa, “3 bedroom”, “with a yard”"),
        li("stage — pre-construction, pre-sale, off-plan, move-in ready, a completion year"),
        li("budget — “under $500k”, “starting from”, payment plan"),
        p("Before writing anything I pull the search data for every city where you build and for each combination with enough demand. Your own development name and brand searches are checked too, because they show where portals already take your traffic."),
        h3("Landing pages by city, property type and budget for new developments"),
        p("A page for “new condos in Tampa under $400k” only works if it lists real developments that match and says something a buyer cannot get from a filter: how the areas differ, what completion dates look like, what fees to expect. Pages generated for every possible combination with nothing behind them are thin content, and Google treats them that way."),

        h2("Development pages that rank: prices, floor plans, completion date and location"),
        p("Most searches that end in a reservation land on a development page, so it carries the most weight. It should answer the questions a buyer would ask the sales agent, as text:"),
        li("price range and price per square foot, with the date of the last update"),
        li("unit types, sizes and floor plans, each plan as a separate image with a text label"),
        li("construction stage, expected completion and what is already built, with dated photos"),
        li("location facts: distances to the beach, center, schools, airport or highway"),
        li("fees, deposits and payment schedule in plain terms"),
        p("Write it as facts, not mood. The Cyprus platform described below learned this the hard way: someone once replaced its project texts with lifestyle prose, and traffic to the commercial pages fell. Once the facts — price, area, location — were back, clicks recovered by 16%."),

        h2("Unit availability and prices from a feed: keeping a developer catalog current"),
        p("A price list that is three months old costs more than it earns: buyers call about units that are gone, and assistants quote the wrong numbers. The fix is a single source of truth. Most developers already keep prices and availability in a spreadsheet, a CRM or a sales system; that data can feed the website automatically, daily or more often, so each unit shows its current status without anyone editing pages by hand."),
        h3("What to do with sold-out units and completed developments"),
        li("a sold unit stays on its page marked as sold, linking to similar units still available"),
        li("a sold-out development keeps its URL as a reference project: photos, completion date, what was built"),
        li("removed pages get a 301 redirect to the closest live page, never a dead end"),
        p("Completed projects are your track record. Buyers and AI assistants both use them to decide whether a developer finishes what it starts."),

        h2("New-build searches: competing with Zillow, Realtor.com and other property portals"),
        p("For broad searches such as “new homes in Phoenix” the first page is often portals: Zillow, Realtor.com, NewHomeSource in the US, Rightmove in the UK. A developer with three projects will not outrank them for the widest phrase. Where a developer wins is narrower and closer to a sale: the development’s own name, the neighborhood plus “new construction”, the specific unit type, the questions about your construction quality and payment terms."),
        p("Keep your listings on portals — they are a source of leads and citations — but make your site the version with more detail: full floor plans, live availability, construction updates. Then a buyer who sees you on a portal and searches your name finds you, not another copy."),

        h2("Multilingual SEO for developers selling to foreign buyers"),
        p("Resort and second-home developments sell to buyers from other countries, and each of them searches in their own language with their own words. A German buyer does not type a translation of the English query; the phrasing, the units of measure and the questions about taxes and financing are different. Each language version needs its own keyword research, its own landing pages and correct hreflang links between versions."),
        p(
          "I start with the markets your sales team already serves and expand from there. How I build multilingual sites is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page; developers selling on the island will find market detail on the ",
          link("SEO for real estate in Cyprus", "/seo-for-real-estate-in-cyprus"),
          " page.",
        ),

        h2("Technical SEO for a large new-build catalog: filters, maps and crawling"),
        p("Hundreds of units, dozens of filters and an interactive map can produce millions of URLs that Google tries to crawl. Technical SEO keeps the useful ones indexable and the rest out of the way:"),
        li("filter combinations that have search demand become real landing pages; the rest are not indexed"),
        li("the map and the unit list render as HTML links, not only inside a script"),
        li("images of renders and floor plans are compressed, with descriptive file names and alt text"),
        li("structured data describes each development and its units, with prices and availability"),
        li("every URL change after a redesign or a platform move gets a 301 redirect"),

        h2("Link building for real estate developers without buying links"),
        p("Bought links are the fastest way to a manual penalty and the slowest way to trust. A developer has better sources than most businesses: architects, contractors and suppliers who list the project, local news about a groundbreaking or a completion, city planning pages, partner banks, brokers who sell your units, and business directories where your company should appear anyway. My job is to make each of those mentions link to the right page — the development, not only the home page — and to publish the facts that journalists and partners can quote."),

        h2("Developer SEO case: a property platform in Cyprus from zero to about 2,500 organic visits a month"),
        p("This platform sells new-build apartments and villas from licensed developers to buyers from abroad. No site existed before I started it in early 2025; since then I have done all of it — code, content, technical SEO and AI search. Inside:"),
        li("about 375 developments and 28 developer pages, plus roughly 330 landing pages for cities, property types and budgets"),
        li("five languages: English, German, Polish, Russian and Hebrew"),
        li("a catalog with filters and a map; project pages with price, areas, completion and distances"),
        li("daily import from developers’ feeds since a June 2026 move to a VPS with a custom admin, with a 301 redirect for every old URL"),
        p("The numbers: organic traffic went from nothing to about 2,500 visits a month; search brings 96% of all traffic; AI assistants account for about 10% of organic visits; and many German-language queries from the DACH countries show the site in top positions. Not a single bought link, no Google Ads."),

        h2("SEO for real estate developers in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("“Which developers in Austin deliver on time?”, “Is this off-plan project reliable?”, “Best new condo developments near the beach in Sarasota?” — buyers type these into ChatGPT and Perplexity and read Google’s AI Overviews before they call anyone. The assistant shortlists a few companies and says why. Getting onto that shortlist is what GEO (generative engine optimization) and AEO (answer engine optimization) mean. For a developer the groundwork is:"),
        li("company facts as plain text: years active, completed projects, licenses, warranties"),
        li("completed developments kept online with dates and photos"),
        li("the same company name, addresses and figures on your site, portals and directories"),
        li("Organization and residence structured data linked to those profiles"),
        p(
          "Before the work starts I save the assistants’ answers about you and your projects and compare them a few months later. The service itself is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO for real estate developers costs"),
        li("SEO audit for a developer — development pages, catalog, feed, crawling, portals, AI visibility: a one-off from 250 €, ending in a list of fixes ordered by impact."),
        li("One-off work — a development page template, city and budget landing pages, structured data, a redirect map: 250–700 €."),
        li("Monthly SEO for a real estate developer — new landing pages, feed and catalog checks, links, AI visibility and reports in leads by development: from 800 € per month; for big metros and other markets where competition is fiercest, from 1,300 € per month."),
        p(
          "If the site itself needs rebuilding first, see the ",
          link("property developer website", "/property-developer-website"),
          " page. Individual agents selling resale homes have their own page, ",
          link("SEO for realtors", "/seo-for-realtors"),
          ". The monthly process is explained on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, the audit on the ",
          link("SEO audit", "/services/seo-audit"),
          " page, and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for real estate developers: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a real estate developer cost?", "The audit starts at 250 €, single tasks are 250–700 €, ongoing work starts at 800 € a month — 1,300 € a month in the largest and most contested markets. With your site, cities and number of developments on sale I can quote a fixed figure."],
          ["When should a developer start SEO for a new project?", "Before the sales launch, ideally when the development has a name and a location. A page published early collects searches for the name, the area and “pre-construction” months before the first reservation, and it has time to climb before the paid campaigns end."],
          ["One website for all developments or a separate site per project?", "For search, one domain with a section per development is usually stronger: links and trust add up instead of being split across short-lived sites. A separate site can make sense for a large, long-running project with its own brand; then it needs its own SEO plan."],
          ["Can a developer’s website outrank property portals?", "For the broadest phrases, rarely. For the development’s name, the neighborhood plus “new construction”, specific unit types and questions about your projects, yes — and those searches are closer to a reservation."],
          ["How do you get links to a developer website without buying them?", "From people who already have a reason to mention your projects: architects, contractors, partner banks, brokers, local press and business directories. I make sure each mention points to the right development page. The Cyprus platform in my portfolio reached roughly 2,500 search visits a month this way, without a single bought link."],
          ["What happens to pages of sold-out developments?", "They stay online as completed projects, with photos and the completion date, and link to developments still on sale. Removing them throws away links and the track record buyers and AI assistants look for."],
          ["Will ChatGPT recommend our developments?", "Nobody can promise it. Assistants name developers whose facts they can verify across several sources: completed projects, dates, licenses, consistent data on portals. I check what they say about you before the work and a few months later."],
          ["Can a consultant in Poland do SEO for a US developer?", "Yes — nothing in developer SEO needs me on site, and we work in English. Warsaw afternoons line up with US East Coast and Central mornings, so calls fit into your working day. Invoices are in EUR or another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for real estate developers: what to send me"),
        p(
          "I need a link to your website, the developments on sale and planned with their cities, where unit prices and availability live today — spreadsheet, CRM or sales system — which countries your buyers come from and which portals you list on. My reply lists where I would start, with a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
