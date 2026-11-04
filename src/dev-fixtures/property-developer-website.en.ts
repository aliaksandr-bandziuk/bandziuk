// Landing page fixture: property developer website development (EN), group
// «property-developer-website». Rebuild of the existing old-template page under
// the same address /property-developer-website — replace-landing.cjs.
//
// Last of the nine pages in the real estate cluster (claude/real-estate-
// cluster.md). Measured demand is small — core.csv has «разработка сайта для
// застройщика» 10 (ru) and «strona dla dewelopera» 170 (pl) — so this is
// rewritten for structure and for the cluster's coherence, not for traffic.
//
// Price tiers are not invented: /blog/property-developer-website-cost states
// €2500 / €4000 / €7000, the PL article 10 000 / 17 000 / 30 000 zł. Checked
// live 02.11.2026. Note these are HIGHER than the agency tiers (€2000 / €3500 /
// €5500) — a developer site carries projects, units and an availability board.
//
// Dropped from the old page: the benefitsBlock headlining «+1500 organic
// visitors» and «99% qualified leads». The 1500 comes from the Cyprus VIP
// Estates case and is kept only where attributed to it; the 99% is not
// measurable by anything. Also dropped: reviewsFullBlock (owner's decision of
// 25.10.2026) and the old template's hardcoded blocks.
//
// Kept in substance from the old textContent block, which was already written
// in the current voice and is the best of the three developer pages: selling a
// building that does not exist, what an off-plan buyer checks, why traffic has
// to exist before the sales window opens, and the «developer website examples»
// section. That last section is EN-only — it answers English queries about
// examples and templates that have no RU or PL counterpart, and it is not
// invented for the other two languages.
//
// Added, from the cost articles where it already existed but was missing on the
// landing: the unit availability board (шахматка) — the one object an agency
// site never needs and a developer site is judged by.
//
// Разведение within the cluster: a developer selling its own projects is this
// page; an agency reselling is /real-estate-agency-website; a contractor
// building for clients is /construction-company-website; getting the projects
// found is /seo-for-real-estate-developers.
import { p, h2, h3, li, link, k } from "./pt";

export const propertyDeveloperWebsiteEn = {
  lang: "en",
  group: "property-developer-website",
  slug: "property-developer-website",
  title: "Property Developer Website Development",
  heading: "Property developer website development: selling a building the buyer cannot walk through yet",
  excerpt:
    "I build websites for property developers: a page for every development, an availability board that stays current, floor plans that open on a phone, dated construction progress, CRM integration per development, and the languages your foreign buyers search in. I do it myself, from structure to code.",
  seo: {
    metaTitle: "Property developer website — scope, cost and timeline",
    metaDescription:
      "Property developer website development: project and unit catalogue, availability board, floor plans, construction progress, CRM and languages. From €2,500.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Availability board per development", "Websites from €2,500", "Reply in 1 working day"],
  heroPhonePoints: ["Building B, floor 7", "Completion Q3 2027", "Payment schedule", "Reserve this unit"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Basic catalogue website for a developer: developments, units, enquiry forms", price: 2500, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Developer website with CRM integration and advanced functionality", price: 4000, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Full developer platform, scoped individually", price: 7000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What a property developer website build includes",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for every development", text: "Location, completion date, unit types, prices or ranges" },
        { _key: k("o"), iconName: "grid", title: "An availability board per building", text: "Sold units marked sold, not quietly removed" },
        { _key: k("o"), iconName: "file-text", title: "Floor plans that open on a phone", text: "Areas in square metres, readable without pinching" },
        { _key: k("o"), iconName: "camera", title: "Dated construction progress", text: "Documented rather than promised" },
        { _key: k("o"), iconName: "plug", title: "CRM integration per development", text: "Each enquiry reaches the people selling that project" },
        { _key: k("o"), iconName: "globe", title: "Languages your buyers search in", text: "Separate keyword work per language, not a translation pass" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a developer website has to sell something the buyer cannot see yet"),
        p("A developer sells a building that does not exist. There is nothing to walk through, nothing to touch, and often nothing on site but a fence and a board. Everything the buyer uses to decide has to be carried by the website, which makes it a different instrument from an agency site: not a catalogue of what is available, but the substitute for a physical object."),
        p("That changes what belongs on it. Floor plans and renders are the easy part. What decides the enquiry is the material that makes an unbuilt property feel real and safe — construction progress with dates, the permits and the legal structure of the purchase, the payment schedule, and who exactly is behind the company."),

        h2("What a buyer of an off-plan unit checks on a developer website"),
        p("Someone buying before completion is managing risk, not choosing a kitchen layout. They look for what has already been delivered, whether the previous projects were finished on time, whether progress is documented rather than promised, and whether the terms of the deal are written down before a call."),
        p("A site that answers those questions loses fewer buyers at the point where they hesitate. A site that shows only renders leaves the question open, and an open question at that price point usually ends the visit."),

        h2("The availability board: the object a developer site is judged by"),
        p("An agency site never needs one; a developer site is judged by it. The board shows every unit in a building with its floor, area, layout, price or price range, and status — available, reserved, sold."),
        p("Two rules decide whether it works. Sold units stay visible and marked sold, because a board that quietly loses rows reads as a board nobody maintains, and because sold-out floors are the strongest evidence a project is selling. And the status has to be editable by the sales team in minutes, not by a developer on a ticket — a board that goes stale is worse than no board at all."),
        p(
          "How a catalogue with filters is built underneath it is covered separately: ",
          link("catalogue website with filters", "/catalog-website-with-filters"),
          ".",
        ),

        h2("Floor plans, renders and construction progress: what belongs where"),
        p("Renders sell the idea, floor plans sell the unit, and progress photographs sell the company. Mixing them into one gallery wastes all three."),
        h3("What each one has to do"),
        li("floor plans: open full-size on a phone, areas in square metres per room, orientation marked, downloadable;"),
        li("renders: labelled as renders, with the view and the floor they are taken from;"),
        li("progress: dated, in order, from the same angles each time, so a buyer can see movement rather than a mood board;"),
        li("the finished previous project: the strongest page on the site, and usually the one nobody builds."),
        p("This is also the material that ages, so it needs to be editable by whoever is on site, not by whoever built the website."),

        h2("Why a developer website needs traffic before the launch, not after"),
        p("Search visibility takes months to build. A developer's selling window is fixed by the construction schedule, so a site that starts earning organic traffic at launch has already missed the part of the cycle where enquiries matter most."),
        p(
          "The work has to begin while the project is still in permits — the pages, the structure and the search visibility built ahead of the sales phase, not alongside it. ",
          link("Renovation and investment website with a premium feel and 96/98/100/100 performance", "/portfolio/renovation-and-investment-website-with-premium-design"),
          " is a case study from the same market, where speed and trust signals were treated as part of the sales instrument rather than as a finishing touch.",
        ),

        h2("CRM integration: one enquiry path per development"),
        p("A developer selling three projects through one shared inbox loses enquiries to sorting. Each development has its own sales people, its own stage and often its own agency partner."),
        p("I connect the forms over your CRM's API so an enquiry arrives tagged with the development, the unit and the source, and is routed by the rules you already use. Where a project is sold through a partner agency, the routing reflects that instead of fighting it."),

        h2("Languages for cross-border buyers"),
        p("Off-plan property is bought across borders more often than finished property, because the price advantage is the reason for buying early. A single-language site filters those buyers out silently — they never appear in the statistics."),
        p("The second and third language are separate work, not translation: their own keyword research, text adapted to how that market reads, and a URL structure search engines can tell apart. Built into the structure from the start, each extra language is cheap; retrofitted later, it is the expensive version of the same job."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: property, investment and construction websites I have built",
      subtitle:
        "The first case is a renovation and property investment company — premium feel with 96/98/100/100 performance. After it: a multilingual real estate platform with catalogue and locations, an architecture practice rebuilt with an SEO scan, and projects where structure decided the outcome.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Real estate developer website examples: what the best ones show"),
        p("Lists of the best real estate developer websites are dominated by 3D tours and video headers. The parts that actually help a buyer decide are simpler, and they work for a developer of any size:"),
        li("a page for every development with the location, completion date, unit types and prices or price ranges;"),
        li("an availability board that is kept current — sold units marked as sold, not removed;"),
        li("floor plans that open properly on a phone, with areas in square metres;"),
        li("construction progress updates with dated photos;"),
        li("one enquiry path per development, sent to the people selling it."),
        p("A real estate developer website template can present one project well. It rarely copes with several developments, each with its own units and sales status, without turning into pages nobody keeps up to date."),

        h2("What a property developer website costs and what is included"),
        p(
          "A basic catalogue site with developments, units and enquiry forms starts at €2,500. A site with CRM integration and advanced functionality starts at €4,000. A full platform starts at €7,000 and is scoped individually. Design is included, never a separate line. The breakdown by tier is in ",
          link("how much a property developer website costs", "/blog/property-developer-website-cost"),
          ", and the general price list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long building a developer website takes"),
        p("A basic catalogue site takes three to six weeks. The availability board, CRM integration and each additional language extend that, and I give the figure before we start rather than during. A full platform is scoped with its own timeline because the functionality decides it."),
        p("What stretches a build here is material rather than code: floor plans in a usable format, the unit list with current statuses, progress photographs, and who on your side will keep them current after launch."),

        h2("What stays with you after launch"),
        li("the code, the domain, the content and the CMS logins are yours from day one;"),
        li("the availability board is editable by your sales team, not only by a developer;"),
        li("the site does not live on my hosting account and exports are not blocked;"),
        li("the project can be handed to another developer at any point;"),
        li("the work runs on a contract with a fixed scope, timeline and stages."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your developer website",
      subtitle:
        "I reply within one working day: what I would build, in what scope and at what price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How many developments?", options: ["One", "Two or three", "More than three", "First one coming"] },
        { _key: k("z"), question: "What stage is it at?", options: ["Permits", "Under construction", "Selling now", "Completed"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("A developer website that AI assistants can read"),
        p("Buyers and investors increasingly ask ChatGPT, Perplexity or Google's AI Overviews which developments are being built in an area, who the developer behind one is, what a completion date and payment schedule look like, and whether previous projects were delivered on time. The assistant answers from text it can read and restate, and it names sources — so the structure of the site decides whether your company appears in that answer at all."),
        p("In practice: a direct answer at the top of each section, facts about locations, dates, areas and terms rather than adjectives, Schema.org markup for the organisation and the developments that matches the visible text, and content available without running scripts. A render carousel with the facts inside the images is invisible to all of it."),
        p(
          "How this is done on a site that already exists is a separate job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Property developer website development: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a property developer website cost?", "A basic catalogue site from €2,500, a site with CRM and advanced functionality from €4,000, a full platform from €7,000 and scoped individually. The price depends on the number of developments and units, the availability board, the integrations and the number of languages."],
          ["Can the site handle a large portfolio of projects?", "Yes. It is built as a catalogue that scales — many developments, many units, filters that keep it navigable, and an availability board per building rather than one list for everything."],
          ["Can the sales team update unit statuses themselves?", "Yes, and it is the point. A board only a developer can edit goes stale within weeks, and a stale board is worse than none. Status changes are made in the CMS in minutes."],
          ["Can you integrate the site with our CRM?", "Yes, over its API, so an enquiry arrives tagged with the development, the unit and the source, and is routed by the rules you already use — including to a partner agency where a project is sold through one."],
          ["We are still in permits. Is it too early for a website?", "It is the right time. Search visibility takes months, and the selling window is fixed by the construction schedule, so a site that launches with the sales phase has already missed the part of the cycle where enquiries matter most."],
          ["Do you work with developers outside your own country?", "Yes. Off-plan property is bought across borders more often than finished property, and multilingual sites are most of this kind of work — this site itself runs in three languages."],
          ["We build for clients rather than selling our own units. Is this the right page?", "No — that is a contractor rather than a developer, and the work is different. See the construction company website page."],
          ["Who owns the site after launch?", "You do: the code, the domain, the content, the CMS logins and the unit data in a movable form. The site does not live on my hosting, exports are not blocked, and it can be handed to another developer at any time."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Contractor, agency, or getting the projects found: the pages next to this one"),
        p(
          "If you build for clients rather than sell units in your own developments, that is a contractor: ",
          link("construction company website", "/construction-company-website"),
          ". If you resell other people's property rather than build it, that is an agency: ",
          link("real estate agency website", "/real-estate-agency-website"),
          ". And how a developer's projects get found in Google and in AI answers is covered on ",
          link("SEO for real estate developers", "/seo-for-real-estate-developers"),
          ".",
        ),

        h2("Order a developer website: what to send me"),
        p("Send how many developments you have and at what stage, where the unit list and statuses live today, which markets and languages you sell in, and which CRM you use. I will reply with what I would build, in what scope and at what price."),
      ],
    },
  ],
};
