// Landing page fixture: SEO for courier companies (EN), group «courier-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «courier seo» ~20. Built under the
// owner's floor rule.
//
// SERP (checked 04.11.2026): Thrive, SERPs Growth, Thatware, Breakline
// («capture local deliveries»), BrandLeap, seo.ink, Beeps Digital, f5-out
// («Logistics SEO Guide: how freight and 3PL sites rank»). All agencies
// selling to courier and logistics firms. Clean buyer intent.
//
// CANNIBALISATION: neighbours are /seo-for-moving-companies (household
// relocation — a different purchase entirely) and /logistics-company-website
// (a website page). Both are separated and linked in the first section.
//
// SELF-REPETITION: «two buyers in one industry» is already the spine of
// /seo-for-security-companies and /seo-for-carpenters, so it is kept to one
// short passage. The spine here is what no other page on the site has:
//   1. LANE pages — origin-to-destination pairs («same-day from this city to
//      that one»). The highest-intent search in transport, nearly uncontested,
//      and structurally different from the venue pages used for photographers
//      because the query names two places and a deadline.
//   2. cargo type and constraint as the real segmentation: pallets, documents,
//      temperature-controlled, fragile, oversized, time-critical.
//   3. cut-off times — «booked before two, it goes today» is the fact that
//      decides the order and is almost never published.
//   4. pricing that genuinely cannot be a price list, so worked examples or a
//      calculator instead of a «request a quote» form.
import { p, h2, h3, li, link, k } from "./pt";

export const courierSeoEn = {
  lang: "en",
  group: "courier-seo",
  slug: "seo-for-courier-companies",
  title: "SEO for Courier and Same-Day Delivery Companies",
  heading: "SEO for a courier company: how to be found for a route, a deadline and a kind of cargo",
  excerpt:
    "Courier searches name two places and a time. Pages built around the routes you actually run, the cargo you actually carry and your cut-off times win work that no general «delivery services» page can reach. Audit from €250.",
  seo: {
    metaTitle: "Courier SEO — audit from €250",
    metaDescription:
      "SEO for courier and same-day delivery companies: route pages, cargo types, cut-off times, worked price examples instead of a quote form. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pages per route you run", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Route and deadline searches", "Cargo types you actually carry", "Cut-off times published", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a courier company: site, route and service pages, AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: route and cargo pages, cut-off times, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a courier or same-day delivery company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a courier company actually consists of",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A page per route you genuinely run", text: "From this city to that one, same day" },
        { _key: k("o"), iconName: "layers", title: "Cargo types as separate pages", text: "Pallets, documents, fragile, oversized" },
        { _key: k("o"), iconName: "calendar", title: "Cut-off times stated plainly", text: "Book before two and it goes today" },
        { _key: k("o"), iconName: "credit-card", title: "Worked price examples", text: "Because a price list is impossible" },
        { _key: k("o"), iconName: "shield-check", title: "Tracking, insurance, proof of delivery", text: "What a first-time sender checks" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Same-day courier for a pallet, booked this morning»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which delivery businesses this page is for, and where the neighbours are covered"),
        p("This page is about courier work: parcels, documents, pallets and time-critical consignments, moved same day or next day, for businesses and for people who need something somewhere by a deadline."),
        p(
          "If you move households and offices, the purchase is entirely different — it is planned, priced per volume and sold on trust rather than speed — and that is ",
          link("SEO for moving companies", "/seo-for-moving-companies"),
          ". What a transport or logistics site itself should contain is on the ",
          link("logistics company website page", "/logistics-company-website"),
          ".",
        ),
        p("One structural note before the rest: most courier firms are two businesses sharing a van fleet. There is contract work, sold to a procurement or operations manager on rates, service levels and reliability over months, and there is ad-hoc work, sold in ten minutes to somebody who has a problem today. Search mainly reaches the second, and the second is where the margin usually is, so the pages below are built for it."),

        h2("Route pages: the highest-intent search in transport, and almost nobody has them"),
        p("Courier searches name two places and a time. Somebody needs a parcel from one city to another today, a pallet across a border by Thursday, documents to an office two hundred kilometres away this afternoon. They do not search for a courier company and then work out whether it covers their route — they search the route."),
        p("A page per route you genuinely run is therefore the strongest asset a courier firm can build, and the competition for those searches is almost nil, because every competitor publishes one page saying «nationwide and international delivery». Each route page says how long that run takes, what time you have to collect by for it to arrive the same day, what it costs for a typical consignment, what you will and will not carry on it, and how often you run it."),
        li("one page per route you actually run regularly, named by both places;"),
        li("the transit time and the collection cut-off for that route, not a general promise;"),
        li("a worked price for a typical consignment on it;"),
        li("whether it is a dedicated van or a consolidated run, because senders care;"),
        li("and the border or document requirements where the route crosses one."),
        p("Write only the routes you run. A page for every city pair in the country, generated from a list, is the oldest mistake in this industry and it produces exactly the thin pages search engines discount and senders distrust."),

        h2("Cargo type and constraint, which is how senders really describe the job"),
        p("The second half of the search is what is being moved. A pallet, a document, something fragile, something oversized, something that must stay cold, something that must not be left with a neighbour. Each of those is a different operation with a different price and a different set of worries, and a sender searching for one of them wants to see it named."),
        p("This is also where a courier firm can decline work gracefully and profitably. Saying plainly what you do not carry — and there is always a list — saves the phone calls and makes the rest of the site more credible, because a company that carries everything for everyone describes no actual service."),

        h3("Cut-off times: the single fact that decides the order"),
        p("For same-day work the question is not whether you can do it, it is whether you can still do it today. «Booked before two o'clock, collected by three, delivered this evening» is the sentence that wins the order, and it is missing from most courier websites, which prefer «fast and reliable delivery» — a phrase that commits to nothing and therefore answers nothing."),
        p("Publish the cut-off per route and per service, and keep it true. It converts, it ranks for the urgent searches, and it also stops the enquiries that arrive at half past four for something that needed collecting at two."),

        h3("Pricing when a price list is genuinely impossible"),
        p("Courier pricing depends on weight, distance, deadline and vehicle, so a simple price list is not dishonest to omit — it is actually impossible. But «request a quote» loses the sender who is comparing three firms in five minutes, and that is most of them."),
        p("The workable answer is worked examples: a named weight, a named route, a named service level, and the price. Three or four of those per route tell a sender what to expect, give them a reason to call rather than click away, and provide search engines and AI assistants with figures to quote. A calculator does the same job better where the business can support one."),
        p(
          "Where you want to be found by city and across a service area, the groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ", and if the routes cross borders and you want to be found in the other country's language, that is ",
          link("international SEO", "/services/international-seo"),
          ". If you want the state of your own site established before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: logistics-adjacent and multilingual work whose visibility I have run",
      subtitle:
        "What these share with a courier business: a service bought quickly on specifics, often across borders and languages, with growth from structure rather than bought links. A wheel and tyre storage business, a car service business, a WordPress rebuild, a multilingual property platform, and a multilingual site for student services.",
      picks: [
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your courier company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What work do you want more of?", options: ["Same-day ad-hoc jobs", "Regular contract runs", "International routes", "Pallet and freight work"] },
        { _key: k("z"), question: "Do you publish cut-off times?", options: ["No", "A general promise", "Yes, per service", "Per route"] },
        { _key: k("z"), question: "Any prices on the site?", options: ["Quote form only", "A «from» price", "Worked examples", "A calculator"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a sender asks ChatGPT for a courier (GEO, AEO)"),
        p("«Who can collect a pallet this morning and get it to another city today, and what would that cost» is now one question put to an assistant rather than three phone calls, and courier work suits it unusually well because every part of the answer is a fact: the route, the cut-off, the vehicle, the price for a typical consignment. The assistant answers from text it can read, so the same things decide whether a firm is named: routes and cargo types written out rather than hidden behind «nationwide delivery», cut-off times stated, worked prices it can quote, and consistent company details everywhere."),
        p(
          "Getting a site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the service wrongly — a route you dropped, an old cut-off, cargo you no longer carry — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for courier companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a courier company cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many routes are worth their own pages and whether any of them need a second language because they cross a border."],
          ["Should I make a page for every city pair?", "No, and this is the mistake that defines the industry. Pages generated from a list of city pairs you do not actually serve are thin, they get discounted, and a sender who reads one can tell. Write the routes you genuinely run, with the real transit time and cut-off."],
          ["Why do cut-off times matter so much?", "Because for same-day work that is the whole question. «Booked before two, delivered this evening» wins the order; «fast and reliable» commits to nothing. Publishing it also stops the enquiries that arrive two hours after the van had to leave."],
          ["How can I publish prices when every job is different?", "With worked examples rather than a price list: a named weight, a named route, a named service level, and the figure. Three or four per route. A sender comparing three firms in five minutes needs something to compare, and a quote form gives them nothing."],
          ["Is the Google profile important for courier work?", "For local and same-day work, yes, and especially the phone number and hours — a sender in a hurry calls from the map result without visiting the site. For contract work it matters less, but an inconsistent profile is noticed by anyone checking you."],
          ["We mostly want contract work. Will this help?", "Partly, and I would rather be plain about it. Contract work is awarded by operations and procurement people who run a process, and search reaches them mainly when they are checking a firm they already heard about. The ad-hoc and route searches are where search produces actual enquiries, and they also tend to be the better-margin work."],
          ["How long before it brings jobs?", "First movement after about a month and a half, growth on a three to six month horizon. Route pages tend to start producing enquiries before they rank well, because the few people searching that route have nothing else to read."],
          ["Who writes the route pages?", "I draft them and your operations people correct them. The value is in the specifics — the real transit time, the real cut-off, what goes wrong at a particular border — and a sender can tell within a sentence whether somebody who dispatches vans wrote it."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a courier company: what to send me"),
        p("Send the site, list the routes you run regularly, and say what you will not carry. I reply within one working day with what is holding the site back, which route and cargo pages are missing, and what I would do first — including which routes are not worth a page because nobody searches them."),
      ],
    },
  ],
};
