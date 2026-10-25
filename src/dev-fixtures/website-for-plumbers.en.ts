// Landing page fixture: Website for plumbers — development (EN), group «trades».
// Semantic core: ref/trades.csv + trades.md, plumbing group: plumbing websites
// 590, website for plumbers 590, best plumbing websites 140; long tail:
// plumbing website builder 30, best website for plumbers 0, website
// development for plumbers 10.
// Intent: ref/intent-check-trades.md — «plumber website» top-10 is agencies,
// builders and field-service platforms (owners’ demand); «website for
// plumbers» is mixed (4 of 9 results are plumbing companies’ own sites), so the
// excerpt and the first sentence say plainly that this is building a website
// for a plumbing business. 0 shared URLs with «plumbing website design».
// Not here: design, layout, trust signals, photos, templates
// (/plumbing-website-design); SEO (/seo-for-plumbers, /local-seo-for-plumbers);
// contractors in general (/website-for-contractors).
// Owner’s rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const websiteForPlumbersEn = {
  lang: "en",
  group: "website-for-plumbers",
  slug: "website-for-plumbers",
  title: "Website for plumbers",
  heading: "Websites for Plumbers",
  excerpt:
    "I build websites for plumbers and plumbing companies — your own business site, not a directory listing: a 24/7 emergency path to your phone, a page for each service and town, booking through ServiceTitan, Housecall Pro or Jobber, and code you own.",
  seo: {
    metaTitle: "Plumbing Websites Built for Calls and Bookings | Bandziuk",
    metaDescription:
      "Websites for plumbing companies: 24/7 emergency pages, a page per service and town, booking via ServiceTitan, Housecall Pro or Jobber. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Burst pipe? Call now", "Services and towns", "Book via your software", "Yours, no lock-in"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple plumbing website", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Plumbing website with emergency, service and area pages, booking linked to your field-service software and local SEO", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a website for your plumbing business",
      items: [
        { _key: k("o"), iconName: "phone", title: "An emergency path to your phone", text: "Burst pipe and no-hot-water pages that end in a call" },
        { _key: k("o"), iconName: "layers", title: "A page for each plumbing service", text: "Drains, water heaters, sewer lines, repiping, leaks" },
        { _key: k("o"), iconName: "map-pin", title: "Pages for the towns your vans reach", text: "Built from one template, a new town in minutes" },
        { _key: k("o"), iconName: "plug", title: "Booking that lands on the dispatch board", text: "ServiceTitan, Housecall Pro, Jobber or email" },
        { _key: k("o"), iconName: "gauge", title: "Loads fast on one bar of signal", text: "Phone number first, widgets after, under 2.5 s" },
        { _key: k("o"), iconName: "shield-check", title: "The site belongs to you", text: "Code, content and domain; no platform fee" },
      ],
      prices: [
        { _key: k("r"), label: "Simple plumbing website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Emergency, service and area pages, booking, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: sites I have built for local businesses",
      subtitle:
        "Websites I have built for service businesses whose customers call, book or send a request — the same structure a plumbing company needs: pages for each service and area, a request form linked to your tools, fast pages on a phone.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your plumbing website",
      subtitle: "I reply within one business day with a list of pages for your services and towns, and a fixed price.",
      contextLabel: "Business name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder or platform site", "An old website"] },
        { _key: k("z"), question: "Which software runs your jobs?", options: ["ServiceTitan", "Housecall Pro", "Jobber", "Other or none"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p(
          "I build websites for plumbers and plumbing companies: a site for your own business that rings your phone when a pipe bursts and fills the rest of the week with water heater swaps, drain jobs and repipes. I plan, design, build and launch it, connected to the software you dispatch from, and the site is yours when it is done. This page is about how the site is built; how it looks to a customer standing in water is on the ",
          link("plumbing website design", "/plumbing-website-design"),
          " page.",
        ),

        h2("What a website for plumbers has to handle: emergencies today, planned jobs next month"),
        p("A plumbing business gets two kinds of work through its website, and they behave differently. Emergency calls — a burst pipe, a backed-up toilet, no hot water before work — come from someone who will phone the first plumber who looks available and close. Planned jobs — a new water heater, a whole-house repipe, a sewer line replacement — come from someone who reads, compares two or three companies and wants an idea of the price before calling."),
        p("A website for plumbers is built for both at once:"),
        li("a short, fast path from any page to a phone call for emergencies"),
        li("a page for every service you sell, with enough detail for the person who is comparing"),
        li("a page for every town or suburb you send vans to"),
        li("online booking for jobs that can wait a day, linked to the software your office already uses"),

        h2("The emergency path on plumbing websites: burst pipe and no-hot-water pages"),
        p("Emergency searches are short: “emergency plumber”, “burst pipe”, “water heater leaking”, “sewer backup”. Each of these gets its own page that tells the visitor what to do in the next five minutes — where the main shut-off valve usually is, when to turn off the water heater, what not to flush — and then gives the number. Someone who has just stopped the water with your page’s help is very likely to call you."),
        p("Behind those pages the build takes care of the details that decide whether the call reaches a person:"),
        li("the phone number is a tap-to-call link on every page, written the same way as in your Google Business Profile"),
        li("after-hours calls go to the on-call plumber or an answering service, and the site says plainly which hours are covered"),
        li("opening hours, including 24/7 if you offer it, are in structured data, so Google shows them correctly"),
        li("website visitors see a tracking number, so you know how many emergency calls the site brings, while Google keeps seeing your main number"),

        h2("Plumbing service pages: drain cleaning, water heaters, sewer lines, repiping, leak detection"),
        p("A single “Services” page with fifteen bullet points cannot be found for any of them. On plumbing websites that bring steady work, each service you want more of has its own page:"),
        li("Drain cleaning — clogs, hydro jetting, camera inspection"),
        li("Water heaters — repair, replacement, tankless installation, the brands you service and how fast you can swap a failed unit"),
        li("Sewer line — camera inspection, repair, trenchless replacement where you offer it"),
        li("Repiping — galvanised or polybutylene pipes, how long a whole-house repipe takes, whether the family can stay at home"),
        li("Leak detection — slab leaks and hidden leaks behind walls, found without opening the whole floor"),
        p("Each page answers the questions your dispatcher hears every day, shows jobs of that type and ends in the same two actions: call or book. Commercial work — restaurants, property managers, backflow testing — gets its own section, so a homeowner with a dripping tap does not land on a grease trap page."),

        h2("Service-area pages for plumbers: one page for each town your vans reach"),
        p("People search “plumber” plus a town or suburb, and Google prefers a page about that place. A service-area page is not the same text with the town name swapped — that gets ignored. Each one carries something real about the area: the typical housing and its pipes (older homes with cast-iron drains, new builds with PEX), jobs done there, how quickly a van usually gets there, hard water if it shapes your water heater work, and the permits or inspections the city or county asks for."),
        p("Area pages are generated from one template and a short entry per town, so when you hire another plumber and start covering a new suburb, adding it takes minutes, not a new project."),

        h2("Online booking on a plumbing website through ServiceTitan, Housecall Pro or Jobber"),
        p("Most plumbing companies already run their jobs in field-service software. ServiceTitan, Housecall Pro and Jobber each offer an online booking tool or request form that can sit on your website, so a booked job lands on the dispatch board rather than in someone’s inbox. The build connects it properly:"),
        li("the booking widget loads only on the pages that need it, so it does not slow the whole site"),
        li("where the tool allows it, the service the visitor came from is passed into the booking, so the dispatcher sees “water heater replacement” rather than “general enquiry”"),
        li("each completed booking is recorded as a conversion in analytics and Google Ads"),
        li("without any of these tools, requests arrive by email or in a shared Google Sheet"),
        p("Emergencies are kept out of online booking. A burst pipe should never be offered a slot two days away, so emergency pages lead to the phone only."),

        h2("Flat-rate prices, price ranges and financing on a plumbing website"),
        p("Customers want to know whether a job costs a hundred or a few thousand before they call. Plumbers who work on flat-rate pricing can show a starting price per job; others can show ranges — drain clearing, water heater replacement, whole-house repipe — with what pushes the price up. Even a range filters out calls that would never turn into jobs."),
        p("For larger jobs, a financing page explains the monthly payment option you offer through your financing partner and links to its application. Maintenance plans — a yearly water heater flush, a drain check, priority service — get a page of their own: they bring repeat work."),

        h2("Speed of a plumbing website on a phone and mobile data"),
        p("Emergency visitors open your site on a phone, sometimes in a basement with one bar of signal. Pages are built to appear in under 2.5 seconds — the threshold Google uses for a good page load — and the phone number and call link are in the first part of the page to load, before photos and scripts. Chat, review and booking widgets are loaded only when the visitor scrolls or taps."),
        p("Hosting includes SSL, daily backups and spam filtering on forms. There is no monthly retainer; changes after launch are paid as work done."),

        h2("Plumbing website builders and platform sites or a website you own"),
        p("Plumbing website builders — general ones, and the sites bundled with marketing platforms and field-service software — put a page online in a day for a monthly fee. For a solo plumber in one town who gets most work by word of mouth, that is often enough."),
        p("The problems appear when the business grows:"),
        li("the template has one services page and no real way to add a page per service and per town"),
        li("the content sits inside someone else’s account, and leaving the platform usually means starting again"),
        li("pages slow down as the platform adds its own scripts"),
        li("the monthly fee continues for as long as the site exists"),
        p("A website you own is paid for once, grows with the business and moves with you to any host."),

        h2("How a plumbing website is built, and how an old one is moved without losing Google positions"),
        ol("Brief. You send the services you want more of, the towns you cover, your hours, your software and the questions your dispatcher answers most."),
        ol("Structure. I propose the list of pages — emergency, services, areas, prices, financing — and the path from each one to a call or a booking."),
        ol("Design and build. Pages are designed on a phone first, then built and filled with your content."),
        ol("Connections. Booking, forms, call tracking, analytics and your Google Business Profile are connected and tested with real calls and bookings."),
        ol("Launch and hand-over. You get access to everything and a short guide to adding jobs and changing prices."),
        p(
          "If you already have a website, every old address is mapped to its new page and redirected before launch, and the titles and structured data that already rank are carried over. The process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("What the best plumbing websites have in common"),
        p("Lists of the best plumbing websites usually pick sites by looks. Seen from the build side, the ones that bring steady work share a few plain decisions:"),
        li("a separate page for each emergency, each service and each area, not one long list"),
        li("a phone link that works on every page and loads first"),
        li("booking connected to the dispatch software, not to an inbox nobody checks at weekends"),
        li("prices or price ranges wherever the business can give them"),
        li("a site the owner controls, so it can change when the business changes"),

        h2("A plumbing website that ChatGPT and Google AI Overviews can read"),
        p("People now ask ChatGPT, Perplexity or Google’s AI Overviews things like “who can fix a slab leak near me” or “how much does a tankless water heater cost to install”. An assistant can only recommend or quote what it can read and check, so the site is built to hand it clear facts:"),
        li("services, service areas, hours, license number and insurance written as text, not only inside images or badges"),
        li("structured data for the plumbing business, each service and the areas it serves"),
        li("answers to cost and how-to questions on the service pages, in plain sentences"),
        li("the same name, address and phone as in your Google Business Profile and the directories you are listed in"),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),
        p(
          "Ranking in Google search and the map results is covered on the ",
          link("SEO for plumbers", "/seo-for-plumbers"),
          " and ",
          link("local SEO for plumbers", "/local-seo-for-plumbers"),
          " pages.",
        ),

        h2("How much a website for plumbers costs"),
        li("A simple plumbing website — home, emergency page, main services, areas, call and request form: 700–1,400 €."),
        li("A plumbing website with a page for each service and area, emergency pages, price and financing pages, booking through your field-service software and local search optimization: from 2,000 €."),
        p(
          "Design is included in both. If you run a business that does more than plumbing, see the ",
          link("websites for contractors", "/website-for-contractors"),
          " and ",
          link("contractor website design", "/contractor-website-design"),
          " pages. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Websites for plumbers: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for plumbers cost?", "700–1,400 € for a simple plumbing website, from 2,000 € for a site with emergency, service and area pages, price and financing pages, booking through your field-service software and local search optimization. Design is included. After a short description of the business I give a fixed price."],
          ["How long does it take to build a plumbing website?", "Usually three to five weeks from the brief. The number of services and towns matters, and so does how quickly your photos, prices and license details are ready."],
          ["Can customers book a plumber online through ServiceTitan, Housecall Pro or Jobber from the website?", "Yes. All three offer a booking tool or request form that can be placed on your site, and bookings go straight to your dispatch board. Emergency pages stay phone-only, so urgent jobs are not pushed into a booking slot."],
          ["Should a plumbing company show prices on its website?", "Where you can, yes: flat-rate starting prices or ranges for common jobs, with what changes the price. It saves your dispatcher calls from people who were never going to book, and customers trust a company that does not hide prices."],
          ["Is a plumbing website builder enough for a small plumbing business?", "For one plumber in one town, a builder can be a fine start. Once you want a page for each service and town, booking linked to your software and a fast site you can take with you, a custom-built site is usually cheaper over a few years than the monthly fee."],
          ["Do I still need a website if I get jobs from Local Services Ads, Angi or Thumbtack?", "Yes. Customers who see you on Google Local Services Ads or a lead platform often check your own site before they call, and your site brings jobs you do not pay per lead for. The lead platforms keep working alongside it."],
          ["Will customers find my plumbing company through ChatGPT?", "Assistants recommend businesses whose facts they can read and confirm. The site is built with services, areas, hours, license and insurance as text and structured data. Getting recommended is ongoing work beyond the build."],
          ["Do you build websites for plumbers outside Poland?", "Yes. The work is done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website for your plumbing business: what to send me"),
        p(
          "Send the business name, a link to your current website or Google profile, the services you want more of, the towns you cover, your hours and the software you use for dispatch. Your prices, if you work flat-rate, help me plan the price pages. I will reply with a list of pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
