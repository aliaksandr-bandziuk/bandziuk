// Landing page fixture: SEO for electricians (EN), group «trades».
// Semantic core: ref/trades.csv, group «electrical»: seo for electricians 590,
// local seo for electricians 210 (own H2 — the map results), seo services for
// electricians 70, seo keywords for electricians 30 (H2 on keyword research),
// seo rates for electricians 10 and best seo for electricians 10 (cost H2,
// choosing H2, FAQ).
// Intent: ref/intent-check-trades.md — «seo for plumbers» vs «seo for
// electricians» 0 shared URLs, 0 shared domains → separate trade pages.
// There is no separate local SEO page for electricians: the map results are an
// H2 here, with a link to /local-seo-for-contractors for the general mechanics.
// Not here: building the website (/website-for-electricians), how it looks
// (/electrician-website-design), other trades (/seo-for-contractors).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const seoForElectriciansEn = {
  lang: "en",
  group: "seo-for-electricians",
  slug: "seo-for-electricians",
  title: "SEO for electricians",
  heading: "SEO for Electricians",
  excerpt:
    "I do SEO for electricians and electrical contractors: pages for panel upgrades, EV chargers, generators and emergency calls, the Google map results and AI answers, so the people who need an electrician nearby call you.",
  seo: {
    metaTitle: "SEO for Electricians and Electrical Contractors | Bandziuk",
    metaDescription:
      "SEO services for electricians: pages for panel upgrades, EV chargers and emergency calls, Google Maps, reviews and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Website, map and AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Electrician near me", "Top 3 on the map", "EV charger install", "Licensed · Insured"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Electrician SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for electricians: service pages, profile, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an electrical contractor", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for electricians",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for electrical work in your towns", text: "Panel upgrades, EV chargers, rewiring — what people really type" },
        { _key: k("o"), iconName: "layers", title: "A page for each kind of electrical job", text: "Emergency, residential, commercial, EV, generators" },
        { _key: k("o"), iconName: "map-pin", title: "Map results for “electrician near me”", text: "Categories, service area, photos with the job named" },
        { _key: k("o"), iconName: "shield-check", title: "License and insurance as searchable facts", text: "License number on the site and the profile, in text" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Facts about your work that assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in calls and booked jobs", text: "Emergency calls and estimate requests counted apart" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an electrician", value: "from 800 € / month", note: "pages, map, reviews", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local search work on websites I have optimized",
      subtitle:
        "None of these are electricians. Closest in how the work arrives: a car repair garage and a wheel workshop that depend on local searches and calls. The other three show local SEO bringing measurable search traffic to service businesses.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your electrical business",
      subtitle: "I reply within one business day with the first fixes I would make to your website and Google profile, and a fixed price.",
      contextLabel: "Business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do your jobs come from now?", options: ["Referrals and builders", "Google", "Lead platforms or LSA", "Not sure"] },
        { _key: k("z"), question: "What work do you want more of?", options: ["Residential service", "Commercial work", "EV chargers and panels", "Emergency calls"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for electricians and electrical contractors: the website pages, the Google Business Profile and the answers AI assistants give, so that when someone nearby needs an electrician, your number is the one they see. I am a single specialist, not an agency, and I measure the work in calls and booked jobs, not in a list of positions."),

        h2("SEO for electricians: emergency, upgrade and project searches"),
        p("People look for an electrician in three very different situations, and each one needs its own page:"),
        li("an emergency — half the house has no power, a breaker trips every few minutes, an outlet smells of burning. The search is short, on a phone, often at night: “emergency electrician”, “electrician near me open now”"),
        li("a planned upgrade — a new electric car, a heat pump, a hot tub or an insurance letter about an old panel. The search names the job: “EV charger installation”, “200 amp panel upgrade cost”, “whole house generator installer”"),
        li("a project — a renovation, an addition, a shop fit-out or a lighting retrofit in an office. Here the buyer is often a general contractor or a property manager, not a homeowner"),
        p("A site that answers all three with one “Services” page loses each of them to a competitor who answers one well. Electrician SEO starts by deciding which of these you want more of, and building for that first."),

        h2("Local SEO for electricians: getting into the Google map results"),
        p("For “electrician near me” and most emergency searches, Google shows three businesses on a map above everything else. Getting there depends mostly on the Google Business Profile, and electricians lose positions in it in predictable ways:"),
        li("“Electrician” as the primary category, with secondary categories only for work you actually do, such as lighting or electrical installation"),
        li("each service listed in the profile — panel upgrades, EV chargers, generators, rewiring, inspections — with a short description"),
        li("a service area drawn around the towns your vans really reach, not the whole state"),
        li("hours that match reality: “open 24 hours” only if someone answers the phone at 2 a.m."),
        li("photos of finished work every week or two — a labeled panel, a mounted charger, a generator pad — with the job and the town named"),
        p(
          "Electricians who go to the customer are service-area businesses, and the rules on addresses and business names apply to them strictly. The general mechanics of the map results are described on the ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          " page.",
        ),

        h2("SEO keywords for electricians: how homeowners and property managers search"),
        p("Keyword research for an electrician shows a split that most sites ignore: homeowners search for the job or the symptom, while commercial buyers search for the type of contractor. Before any page is written I collect the real numbers for your area:"),
        li("job searches: “panel upgrade”, “Level 2 charger installation”, “knob and tube rewiring”, “recessed lighting installation”"),
        li("symptom searches: “lights flickering in the whole house”, “breaker keeps tripping”, “outlet not working”"),
        li("cost searches: “cost to rewire a house”, “generator installation cost”"),
        li("commercial searches: “commercial electrician” plus a city, “tenant improvement electrical contractor”"),
        p("For each phrase I check whether Google shows the map, Local Services Ads, AI Overviews or lead platforms. That tells us which page can rank and which searches are better left to the profile."),

        h2("Service pages for panel upgrades, EV chargers, generators and rewiring"),
        p("Each job worth having gets its own page, written around the questions customers ask on the phone. An EV charger page covers charger types, the distance from the panel, whether the panel has room, the permit and the inspection. A panel upgrade page explains why it is needed — more load, an old fuse box, an insurer’s request — what the utility has to do and how long the power is off. A generator page covers sizing, fuel, the transfer switch and maintenance."),
        p("Rewiring, lighting, smart home installs, surge protection and electrical inspections for home buyers each follow the same pattern. Where your utility or state offers a rebate for chargers or panel work, the page says so, with a link to the program."),

        h2("Emergency electrician searches: pages and calls that work at night"),
        p("An emergency visitor does not read. The emergency page puts the phone number first, says which towns you reach and how fast, explains what to do before you arrive — switch off the breaker if it is safe, keep away from a downed line and call the utility — and states any after-hours fee plainly. Calls from that page are tracked on their own number, so you can see what emergency searches bring and whether the night line pays for itself."),

        h2("Residential, commercial and industrial electrical work: separate pages in electrician SEO"),
        p("Commercial and industrial buyers use search to build a shortlist, then check capabilities. A facility manager looking for a lighting retrofit or a GC looking for an electrical subcontractor wants to see project types, crew size, the license classes you hold, safety practices and the sectors you work in. Those pages are kept apart from residential service, so a homeowner with a dead outlet is not sent to a warehouse project, and a building manager is not shown smart thermostats."),
        p("Industrial work rarely starts from a search box, but a clear capabilities page is what a buyer checks after hearing your name from someone else."),

        h2("License, permits and reviews: trust signals in electrician SEO"),
        p("Electrical work is bought on safety. People want to know that a licensed master electrician is responsible for the job and that the work will pass inspection. On the website and in the profile, the license number, license class, insurance, permits pulled and inspections passed are written as text — not hidden in a logo — so customers, Google and AI assistants can all read them."),
        p("Reviews do the rest. The best moment to ask is when the inspection has passed or the power is back on: a text with a direct link, and an answer to every review within days. Reviews that mention “panel upgrade” or “EV charger” and the town help the profile rank for those jobs. Bought reviews break Google’s rules and are not used."),

        h2("SEO versus Local Services Ads, Angi and Thumbtack for electricians"),
        p("Google Local Services Ads put a few electricians with the Google Guaranteed badge above the map and charge per lead. Angi, HomeAdvisor and Thumbtack sell leads that several electricians often receive at once. Both bring calls from the first week and stop when the budget stops, and emergency leads in a busy city get expensive."),
        p("SEO takes longer — usually two to four months for new pages — but the calls it brings are yours alone. A common setup is to keep Local Services Ads for emergencies while SEO builds the planned-work pages that bring larger jobs. My work covers search; running ads or lead-platform accounts stays with you or your ad agency."),

        h2("AI SEO for electricians: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Electrical questions are a natural fit for AI answers: “do I need a permit to install an EV charger”, “why do my lights flicker when the AC starts”, “how much is a panel upgrade”. Google’s AI Overviews and ChatGPT answer them directly, and when the question ends in “who can do this near me”, they name local electricians. This work goes by two names, generative engine optimization (GEO) and answer engine optimization (AEO), and for an electrician it means:"),
        li("service pages that answer the cost, permit and safety questions in a few clear sentences"),
        li("license, insurance, service area and years in business written as plain facts"),
        li("structured data that names the business, each service and the areas you cover"),
        li("one business name, address and phone number across the site, the profile and every directory"),
        p(
          "I check how assistants describe your business before the work starts and again later. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Choosing the best SEO for electricians: questions to ask"),
        p("Some agencies sell SEO to hundreds of electricians from the same templates, and some field-service software includes a marketing add-on. Before you sign with anyone, including me, ask:"),
        li("Will reports show calls and booked jobs, or only rankings?"),
        li("If we part ways, do the site, the Google profile and the texts stay with me?"),
        li("Are service-area pages written with real jobs from those towns?"),
        li("How will residential and commercial work be kept apart?"),
        p(
          "If the website itself is slow or outdated, SEO will not fix it. How I build sites for electricians is described on the ",
          link("websites for electricians", "/website-for-electricians"),
          " page, and how they look and lead to a call on the ",
          link("electrician website design", "/electrician-website-design"),
          " page.",
        ),

        h2("SEO rates for electricians: how much the work costs"),
        li("SEO audit of the website and the Google Business Profile: from 250 €, one-off. You get a list of fixes in order of impact."),
        li("One-off work — service pages for your main jobs, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for an electrician — new pages, the map, reviews and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "For a small shop, a clean profile and four or five solid job pages may be all that is needed; the audit tells you whether monthly work is worth paying for. SEO for other trades is on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page; all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for electricians: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What are typical SEO rates for electricians?", "An audit of the website and Google profile costs from 250 € one-off, one-off pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. After a short description of your business I give a fixed price."],
          ["How long does SEO take for an electrical contractor?", "Fixes to the Google profile often move the map position within weeks. New service pages usually need two to four months to rank, and longer for competitive searches such as “emergency electrician” in a large city."],
          ["Which SEO keywords should an electrician target first?", "Usually the jobs with the best margin that people search for in your area: panel upgrades, EV charger installation, generators or rewiring, plus “electrician” with your towns. The research shows which of them you can realistically win."],
          ["Should an electrician use Local Services Ads or SEO?", "Ads pay off the same day and cost money for every lead; SEO needs a few months, after which calls from search carry no per-lead charge. Many electricians keep ads for emergencies and build SEO for planned work."],
          ["Do I need separate pages for residential and commercial electrical work?", "Yes, if you do both. Homeowners and commercial buyers search with different words and look for different proof, so one mixed page usually ranks for neither."],
          ["Can I do local SEO for my electrical business myself?", "Part of it: updating hours and services in the Google profile, posting photos from each job and sending a review link when the work is signed off. Keyword research, page structure and technical fixes take less of your time and money when someone who does them daily handles them."],
          ["Can ChatGPT do SEO for an electrician?", "It can draft texts and ideas. It cannot see your search data, your competitors in the map or the technical problems of your site, and generic texts without facts about your work rarely rank."],
          ["Do you do SEO for electricians outside Poland?", "Yes. I work remotely with businesses in the US, Canada, the UK and Australia, in English, Polish or Russian. The search data, profile and pages are set up for your country and towns."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your electrical business: what to send me"),
        p(
          "Send the business name, links to the website and the Google Maps profile, the jobs you want more of — emergency, panels, EV chargers, commercial — and the towns you cover. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
