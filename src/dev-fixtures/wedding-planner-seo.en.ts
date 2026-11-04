// Landing page fixture: SEO for wedding planners (EN), group «wedding-planner-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «wedding planner seo» ~50. No paired
// website page. Neighbours: /catering-seo, /florist-seo (both cross-linked),
// plus the wedding section on /seo-for-photographers created earlier today.
//
// SERP (checked 04.11.2026): Sara Does SEO, Your Creative Content («makes you
// depend LESS on…»), SEO Takeoff, Lauren Taylar, AME Creatives, Planners
// Lounge («Long Tail Keywords»), LinkedIn. Not general agencies — these are
// consultants and educators serving the wedding industry specifically. So the
// page competes with people who know this trade, and has to be more concrete
// than a generic playbook.
//
// CANNIBALISATION / SELF-REPETITION CHECK. Three tactics already used on pages
// written today must NOT become this page's spine:
//   - venue pages → spine of /seo-for-photographers;
//   - a capacity ceiling with «do not buy a retainer» → /seo-for-daycares and
//     /seo-for-massage-therapists;
//   - lead platforms reselling one enquiry → /seo-for-remodeling-companies.
// Each is kept to a short passage here. The spine is the two things specific
// to this trade and unused elsewhere on the site:
//   1. the client buys ONCE IN A LIFETIME and does not know what the service
//      is. Couples cannot distinguish a full-service planner from a day-of
//      coordinator from the venue's own coordinator, and that confusion costs
//      planners enquiries directly. Definitional pages and published package
//      tiers are therefore the highest-value pages, not portfolio galleries.
//   2. destination weddings make this an INTERNATIONAL SEO problem: the couple
//      searches in their own language for a country they do not live in, which
//      is a different technical job and plays to the multilingual work.
import { p, h2, h3, li, link, k } from "./pt";

export const weddingPlannerSeoEn = {
  lang: "en",
  group: "wedding-planner-seo",
  slug: "seo-for-wedding-planners",
  title: "SEO for Wedding Planners and Destination Weddings",
  heading: "SEO for a wedding planner: how to be found by a couple who has never hired one before",
  excerpt:
    "Your client buys this service once in their life and cannot tell a full-service planner from the venue's coordinator. The pages that win the enquiry explain the service and its price, not the portfolio. Audit from €250.",
  seo: {
    metaTitle: "Wedding Planner SEO — audit from €250",
    metaDescription:
      "SEO for wedding planners: pages that explain the service, package tiers and costs, destination weddings in other languages, booking a year ahead. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Explaining the service, not the portfolio", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Full planning or day-of coordination", "Package tiers with figures", "Destination couples, in their language", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a wedding planner: site, service pages, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: service and package pages, venue and region pages, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a wedding planner, including destination markets", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a wedding planner actually consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Pages that explain what you actually do", text: "Full planning, partial, day-of coordination" },
        { _key: k("o"), iconName: "tag", title: "Package tiers with real figures", text: "Couples have no reference price at all" },
        { _key: k("o"), iconName: "languages", title: "Destination couples in their own language", text: "They search in one country for another" },
        { _key: k("o"), iconName: "calendar", title: "Published for next season, not this one", text: "Couples book twelve to eighteen months out" },
        { _key: k("o"), iconName: "map-pin", title: "Regions and venues you know", text: "Short, specific, and almost uncontested" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Planner for a 60-guest wedding abroad, English-speaking»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Your client is a first-time buyer who does not know what a planner does"),
        p("Almost every other business I work with sells to someone who has bought the thing before. A wedding planner does not. The couple is buying this service once, they have no reference price, no vocabulary for the different levels of it, and no way to judge a portfolio of twelve beautiful weddings against another portfolio of twelve beautiful weddings."),
        p("The practical consequence is counter-intuitive: the pages that win enquiries are not the gallery. They are the pages that explain the service. Couples routinely believe that the venue's coordinator will do what a planner does, that a planner is only for very large budgets, or that hiring one costs a percentage they have invented. Each of those beliefs is a page, and the planner who writes them gets the enquiry, because they are the only one in the search results who answered the question the couple was actually asking."),
        li("what full planning includes, month by month, and when you join;"),
        li("what partial planning means, since every planner defines it differently;"),
        li("what day-of coordination is and, plainly, what it is not;"),
        li("what the venue's coordinator does and does not do, stated without disparaging them;"),
        li("how many weddings you take in a year, which tells a couple whether they get you;"),
        li("and who should not hire a planner, which is the page that earns the most trust."),

        h3("Package tiers and costs, because the couple is guessing and guessing high"),
        p("The most searched question in this trade is what a wedding planner costs, and most planners answer it with a contact form. The couple then assumes a figure, and the figure they assume is usually either absurdly low or high enough that they do not write at all. Neither outcome is improved by keeping the number off the site."),
        p("Tiers with real figures fix it: what day-of coordination starts at, what partial planning runs to, what full planning costs for a wedding of a given size, and what moves a project between the bands. It filters the enquiries you cannot serve, it ranks for the question itself, and it gives search engines and assistants a number to quote rather than one a directory invented."),

        h2("Destination weddings are an international SEO problem, not a local one"),
        p("For a planner taking destination work, the search does not happen where the wedding happens. A couple in one country is searching, in their own language, for someone who can run a wedding in another — and the page that reaches them has to exist in that language, be aimed at that country, and answer the questions specific to marrying abroad: what paperwork is required, how far ahead it has to start, whether the legal ceremony has to happen elsewhere, who deals with suppliers who do not speak the couple's language."),
        p("This is a different technical job from local search. It involves which language versions exist, how they are signposted to search engines, and which country each one is meant for — and it is the part most planner websites get wrong by translating a page and stopping there."),
        p(
          "That groundwork is ",
          link("international SEO", "/services/international-seo"),
          ", and it is the strongest opportunity in this trade, because a destination wedding is both the largest project a planner takes and the one with the least competition in search.",
        ),

        h2("Why a wedding planner's pages have to be published for next season rather than this one"),
        p("Couples book a planner twelve to eighteen months ahead, which means content published in spring is not competing for this summer. It is competing for the summer after, and a page that goes live in March for a season already full has missed by a year rather than by a month."),
        p("So the schedule matters more here than the volume. Pages written in the quiet months mature in time for the enquiry season that leads to the season after. And the measurement window stretches accordingly: first movement in search within about six weeks, enquiries on the couple's planning cycle rather than the search engine's. A planner who starts this work in peak season should expect the return a year out, and I would rather set that expectation now than explain it in August."),

        h3("Venues, regions, directories and the size of your diary"),
        p("Three shorter points worth stating. If you work repeatedly at particular venues or in a particular region, those pages are specific and almost uncontested, and they are worth writing where you genuinely know the place — what the logistics are, where the guests stay, what the weather does in September."),
        p("The wedding directories bring enquiries and share them: the couple sees you alongside competitors and the lead is rarely exclusive. Search works differently, arriving with your name attached and usually without three other planners in the conversation — though it takes months to build and will not replace a directory listing in the first quarter."),
        p("And this is a capacity business: fifteen to twenty-five weddings a year is a ceiling, not a target. If your season is full, the work worth paying for is the pages that support a higher fee and the destination market, not more visibility."),
        p(
          "The map profile and local groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ". If you also want the suppliers you work with found — the people you recommend to every couple — their pages are ",
          link("SEO for florists", "/florist-seo"),
          " and ",
          link("SEO for caterers", "/catering-seo"),
          ", and if you want the state of your own site established first, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: multilingual and cross-border work, which is what destination weddings need",
      subtitle:
        "The first three are multilingual projects where the client searched in one country for a service in another — the same problem a destination wedding planner has. Then a consultant's own site and a renovation and investment firm, both judged by the site before anyone makes contact.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "consultant-website-design-retail-analytics",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your wedding planning business",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you want more of?", options: ["Full planning", "Day-of coordination", "Destination weddings", "Larger budgets"] },
        { _key: k("z"), question: "Where do couples find you now?", options: ["A wedding directory", "Venue recommendations", "Instagram", "Search already works a little"] },
        { _key: k("z"), question: "Are your prices on the site?", options: ["No", "«From» only", "Tiers with figures", "Only after a call"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a couple asks ChatGPT for a wedding planner (GEO, AEO)"),
        p("«Find me an English-speaking planner who can run a sixty-guest wedding in Europe next September, and what would it cost» is exactly the sort of question couples now put to an assistant, and this trade suits it unusually well, because a first-time buyer wants two or three names with reasons rather than a directory of ninety. The assistant answers from text it can read, so the same things decide whether a planner is named: the levels of service written out and distinguished, fees or tiers it can quote, the regions and languages you work in, and consistent details across the site, the profile and the directories you are listed in."),
        p(
          "Getting a site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the business wrongly — a region you no longer cover, a service you dropped, an old fee — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for wedding planners: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a wedding planner cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is whether destination work is part of the plan, since that means more than one language and a different technical job, and how many service levels and regions need pages."],
          ["Why would pages explaining the service beat my portfolio?", "Because the couple cannot judge portfolios and does not know what they are buying. They do not know whether the venue coordinator covers what you cover, or what partial planning means. Whoever answers that in the search results gets the enquiry, and the gallery then closes it."],
          ["Should I publish prices?", "Tiers with figures, and what moves a wedding between them. Couples guess otherwise, and they guess badly in both directions — some never write because they assume you are out of reach, others write with a budget a third of the project. A published range fixes both and ranks for the most asked question in the trade."],
          ["Is it worth paying for directory listings as well?", "Often yes, at least while search is building. Directory enquiries are rarely exclusive and arrive alongside competitors, while a search enquiry arrives with your name attached. The honest version is that search takes months and does not replace a listing in the first quarter."],
          ["Do I need pages for specific venues?", "Only where you genuinely work repeatedly, and then write what you actually know — logistics, where guests stay, what the weather does in that month. A thin page per venue scraped from the venue's own site is worse than none."],
          ["How does destination work change things?", "It turns a local problem into an international one. The couple searches in their own language for a country they do not live in, so the page has to exist in that language, be aimed at that market and answer the paperwork questions. Translating one page and stopping is the usual mistake."],
          ["How long before enquiries arrive?", "First movement after about a month and a half, growth on a three to six month horizon, and then the booking cycle on top: couples book twelve to eighteen months out, so work started now is aimed at the season after next. Anyone promising bookings for this summer is selling you a calendar they do not control."],
          ["My season is full. Should I still do this?", "Not as a retainer. The work worth buying is the pages that support a higher fee and, if it interests you, the destination market — which is where the largest projects and the least competition both are."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a wedding planning business: what to send me"),
        p("Send the site, say which levels of service you want more of, and tell me whether destination weddings are something you take or want to take. I reply within one working day with what is holding the site back, which explaining pages are missing, and what I would do first — including, if destination work is on the list, what the language versions would actually require."),
      ],
    },
  ],
};
