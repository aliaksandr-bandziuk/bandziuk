// Landing page fixture: SEO for plumbers (EN), group «trades».
// Semantic core: ref/trades.md / trades.csv, plumbing group: plumbing seo 480,
// seo for plumbers 480, plumbers marketing 480, seo company for plumbers 320,
// plumber marketing company 170, seo services for plumbers 110, best seo for
// plumbers 70, seo agency for plumbers 10, ai seo for plumbers 10.
// PAA: How do I advertise a plumbing business on Google? How to get more
// customers as a plumber? Will AI replace plumbers? Can a beginner do SEO?
// Intent: ref/intent-check-trades.md — «seo for plumbers» vs «seo for
// contractors» 0 shared URLs, vs «seo for electricians» 0 shared → own page;
// «local seo for plumbers» 1 shared URL → own page /local-seo-for-plumbers;
// «hvac seo» vs «seo for plumbers» 0 shared → /hvac-seo.
// NOT on this page: map pack, Google Business Profile, reviews, listings,
// spam reports, call tracking in detail (/local-seo-for-plumbers — one short
// section + link here); plumbing + HVAC phrases (plumbing and hvac seo 480 ×4
// → /hvac-seo); building the site (/website-for-plumbers); design
// (/plumbing-website-design). «paul the plumber», «call the plumber» —
// navigational, not targeted.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForPlumbersEn = {
  lang: "en",
  group: "seo-for-plumbers",
  slug: "seo-for-plumbers",
  title: "SEO for plumbers",
  heading: "SEO for Plumbers",
  excerpt:
    "I do SEO for plumbers and plumbing companies: emergency and service pages, flat-rate pricing pages, technical fixes and AI answers, so a homeowner with a burst pipe or a blocked drain calls you, not a lead platform.",
  seo: {
    metaTitle: "Plumbing SEO Services for Plumbing Companies | Bandziuk",
    metaDescription:
      "SEO for plumbers: emergency and service pages, cost pages, speed fixes and AI answers, measured in booked jobs, not rankings. Plumbing SEO audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Emergency + service pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Emergency plumber near me", "Tap to call", "Licensed & insured", "Upfront prices"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Plumbing SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off plumbing SEO work: emergency and service pages, pricing pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a plumbing company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO services for plumbers",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for plumbing jobs in your towns", text: "Emergency, repair and install searches, with volumes" },
        { _key: k("o"), iconName: "layers", title: "Emergency and service pages", text: "Burst pipes, drains, water heaters, sewer lines, repiping" },
        { _key: k("o"), iconName: "file-text", title: "Pricing and cost pages", text: "Flat-rate ranges customers and AI answers can use" },
        { _key: k("o"), iconName: "gauge", title: "A fast, tap-to-call website", text: "Main content in under 2.5 seconds on a phone" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Facts and structured data assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Booked jobs from search, reported", text: "Lead source tracked in your field service software" },
      ],
      prices: [
        { _key: k("r"), label: "Plumbing SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a plumbing company", value: "from 800 € / month", note: "pages, tracking, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service websites I have optimized",
      subtitle:
        "None of these are plumbing companies. They are the closest local-service work I have: an auto repair shop and a wheel-repair workshop that get their calls from local searches, a renovation company, and two sites where the same methods brought measurable search traffic.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your plumbing company",
      subtitle: "I reply within one business day with what I would fix first on your website and Google profile, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most of your jobs come from now?", options: ["Local Services Ads", "Google search and Maps", "Lead platforms", "Referrals and repeat customers"] },
        { _key: k("z"), question: "Which work do you want more of?", options: ["Emergency calls", "Water heaters", "Drains and sewer lines", "Commercial plumbing"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for plumbers and plumbing companies: the pages, the technical fixes and the search data behind them, so that when a pipe bursts or a drain backs up, the homeowner who searches finds your number before a lead platform’s. Plumbing SEO is judged by booked jobs — emergency call-outs, water heater installs, sewer repairs — not by how many visitors a report shows."),

        h2("Plumbing SEO for emergency searches: burst pipes, blocked drains and “plumber near me”"),
        p("A large part of plumbing work starts with a search made in a hurry, often at night, on a phone, by someone standing in water. The searches are short and urgent:"),
        li("“emergency plumber near me”, “24 hour plumber”"),
        li("“burst pipe”, “water leak under sink”, “toilet overflowing”"),
        li("“blocked drain”, “sewer backup in basement”"),
        li("“water heater not working”, “no hot water”"),
        p("A person in that situation calls one of the first businesses they see and rarely compares prices. These searches show the map and Local Services Ads first, so the website has a narrow job: one emergency page per problem that loads fast, says in the first line that you come out tonight, puts the phone number in a tap-to-call button and lists the areas you reach within the hour. Longer text goes lower on the page, where Google and the more careful customer read it."),

        h2("Service pages in plumbing SEO: drain cleaning, water heaters, sewer lines and repiping"),
        p("Planned plumbing work is searched differently. The homeowner has days or weeks, compares two or three companies and reads. Each of these jobs needs its own page, because each has its own searches and its own questions."),
        h3("Drain cleaning and hydro jetting pages"),
        p("Searches range from “drain cleaning near me” to “hydro jetting cost”. The page explains when snaking is enough, when jetting or a camera inspection is needed, and what the visit costs."),
        h3("Water heater installation and repair pages"),
        p("Tank or tankless, gas or electric, repair or replace — customers search for all of them. The page covers sizing, typical lifespan, the permit and installation time, and names the brands you install."),
        h3("Sewer line repair and replacement pages"),
        p("Expensive, rare and frightening for the homeowner. Camera inspection, trenchless options, what the permit involves and how long the yard stays dug up are the questions a sewer page has to answer."),
        h3("Repiping pages"),
        p("Mostly searched by owners of older houses with galvanized or polybutylene pipes. The page explains the materials, how long the house is without water and how walls are opened and patched."),
        p(
          "Companies that also do heating and cooling compete in a separate market with its own searches, described on the ",
          link("HVAC SEO", "/hvac-seo"),
          " page.",
        ),

        h2("Flat-rate pricing pages for plumbers: publishing prices that help SEO"),
        p("“How much does it cost to unclog a drain” and “water heater replacement cost” are among the most common plumbing searches, and AI Overviews answer them readily. Many plumbers already work on flat-rate pricing, so the numbers exist. A pricing page, or a cost section on each service page, can show ranges, what moves the price — access, materials, an after-hours call-out — and whether the diagnostic fee is credited against the job. It does not need to publish your whole price book. A page that answers the cost question keeps the visitor on your site instead of sending them to a national cost guide, and it gives assistants a figure with your name next to it."),

        h2("Commercial plumbing SEO: restaurants, property managers and facilities"),
        p("Commercial customers use other words and decide differently. A restaurant owner searches for “grease trap cleaning” or “commercial drain service”; a property manager wants a company that covers several buildings, invoices properly and picks up at weekends; a facility manager looks for backflow testing and certification. Commercial pages name the building types you serve, the maintenance agreements you offer, your response time and insurance, and who to contact for a site visit. These searches are rarer, but each one can turn into a contract rather than a single call."),

        h2("Technical SEO for plumbing websites: speed, click-to-call and license details"),
        p("Most problems on plumbing websites are basic and cheap to fix:"),
        li("pages that take longer than 2.5 seconds to show their main content on a phone, usually because of large photos and booking widgets"),
        li("the phone number as an image or hidden in the menu instead of a button at the top"),
        li("one “Services” page for every kind of work, so none of it ranks"),
        li("the license number, insurance and service area missing, or only in a PDF"),
        li("no structured data telling Google this is a plumbing business, with its services and areas"),
        li("online booking from Housecall Pro, ServiceTitan or Jobber embedded in a way that slows the page"),
        p(
          "If the site needs more than fixes, the ",
          link("website for plumbers", "/website-for-plumbers"),
          " page describes how I build one, and ",
          link("plumbing website design", "/plumbing-website-design"),
          " covers the design side.",
        ),

        h2("Google Maps in SEO for plumbers: where the profile fits"),
        p(
          "For “plumber near me” the map results usually decide who gets the call, and they depend on the Google Business Profile, reviews and listings more than on the website. The map has its own rules for plumbers — a service area without your home address, 24/7 hours, fake competitors — and they are covered on the ",
          link("local SEO for plumbers", "/local-seo-for-plumbers"),
          " page. On the website side, what matters is that the site and the profile name the same services and areas, and that the profile links to the matching page rather than the home page.",
        ),

        h2("Where SEO fits in plumber marketing: Local Services Ads, Google Ads and lead platforms"),
        p("Plumbers marketing their business online usually choose from four channels, and a plumber marketing company will often sell all four in one package:"),
        li("Local Services Ads — the Google Guaranteed listings at the top, paid per lead, with background checks and license verification"),
        li("Google Ads search campaigns — paid per click, and expensive for emergency terms"),
        li("lead platforms such as Angi, HomeAdvisor or Thumbtack, where one request often goes to several plumbers"),
        li("SEO — the website and the map, paid for in time and work, not per lead"),
        p("The paid channels bring calls in the first week and stop when the budget does. SEO takes months, but the calls it brings are not shared with competitors and not billed one by one. Many plumbing companies keep Local Services Ads for emergencies and use SEO to rely on them less over time. I do the SEO; I do not run ads or manage platform accounts, but I make sure the pages your ads point to are the same pages that rank."),

        h2("AI SEO for plumbers: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Questions like “why is my water heater making noise”, “is a slab leak an emergency” or “who is a reliable plumber in [town]” are now often answered by Google’s AI Overviews, ChatGPT or Perplexity before anyone clicks a link. Getting a plumbing company into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a plumber it means:"),
        li("answers to the common “what is wrong with my pipes” questions on your own pages, written with trade knowledge"),
        li("cost ranges and what changes them, in text an assistant can quote"),
        li("license, insurance, years in business, emergency availability and service area stated as plain facts"),
        li("structured data marking the business as a plumber, with its services and areas"),
        li("the same details on Google, Yelp, BBB and other listings, which assistants cross-check"),
        p(
          "I check how assistants describe your company before the work and again after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How to choose an SEO company for plumbers: what the best SEO for plumbers looks like"),
        p("There are agencies that work only with plumbing and HVAC companies, general SEO companies that take any trade, and single specialists like me who also build websites. The best SEO for plumbers is not a brand; it is an arrangement where you can see what was done and what it brought. Questions to ask any SEO company or agency for plumbers:"),
        li("Will you report booked jobs from search, taken from my field service software, or only rankings and traffic?"),
        li("Who owns the website, the domain, the Google profile and the tracking numbers if we part ways?"),
        li("Are the service and city pages written for my real work, or the template every plumbing client gets?"),
        li("How long is the contract, and what happens if nothing moves in six months?"),

        h2("How plumbing SEO results are measured: calls, booked jobs and job value"),
        p("A ranking report does not pay for a van. The numbers that matter to a plumbing company are calls and online bookings from search and the map, how many of them turned into jobs, and what kind of jobs — a drain call and a whole-house repipe are not the same lead. Field service software such as ServiceTitan, Housecall Pro or Jobber records a lead source on each job. I set up tracking so that organic search and the map appear there as their own sources, and the monthly report is built from those numbers."),

        h2("How much SEO services for plumbers cost"),
        li("SEO audit of the website and the Google Business Profile: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off plumbing SEO work — emergency and service pages, pricing pages, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for a plumbing company — new pages, map and reviews, AI visibility and reporting on booked jobs: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "A small plumbing business in a mid-sized town often gets most of the result from the audit and a few strong pages. Other trades will find their version on the ",
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
      title: "SEO for plumbers: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for plumbers cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after a short description of your company and area."],
          ["How long does plumbing SEO take to bring calls?", "Fixes to the Google profile and to existing pages can show within weeks. New service and emergency pages usually take two to four months to rank, and longer in large metro areas, where plumbing is one of the most contested local searches."],
          ["How do I advertise a plumbing business on Google?", "There are three ways to appear: Local Services Ads with the Google Guaranteed badge, paid per lead; Google Ads search campaigns, paid per click; and the unpaid places — the map results through your Google Business Profile and the regular results through your website. SEO works on the unpaid ones; many plumbers combine them with Local Services Ads."],
          ["How to get more customers as a plumber?", "Be easy to find where people search in a hurry — the map and emergency pages — make calling easy and answer fast. Then turn each finished job into a review and, where it fits, a maintenance plan or a repeat customer. Search brings the first call; how the call is handled decides whether it becomes a job."],
          ["Can a plumber do SEO without hiring anyone?", "Some of it. Keeping the Google profile complete, adding job photos and asking every customer for a review takes minutes a week. Keyword research, page structure, structured data and tracking are where most plumbers save time by handing the work over."],
          ["Can ChatGPT do SEO for a plumbing company?", "It can draft text and suggest ideas. It cannot see search volumes in your town, your competitors’ map positions or your website’s technical errors, and generic plumbing text without your prices, areas and jobs rarely ranks."],
          ["Will AI replace plumbers?", "No. Plumbing is physical work in people’s homes and buildings, and software does not fix pipes. What AI changes is how customers find a plumber: more of them ask ChatGPT or read Google’s AI Overview first, which is why plumbing SEO now includes making your company easy for those assistants to describe."],
          ["Do you do SEO for plumbers outside Poland?", "Yes. Plumbing SEO is done remotely — the website, the profile and the search data for your towns — for companies in the US, Canada, the UK or Australia. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your plumbing company: what to send me"),
        p(
          "Send the company name, the website and Google Maps links, the work you want more of — emergency calls, water heaters, sewer lines, commercial — and the towns you cover. If you use ServiceTitan, Housecall Pro or Jobber, say which. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
