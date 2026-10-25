// Landing page fixture: HVAC websites — development (EN), group «trades».
// Semantic core: ref/trades-sites.csv + trades-sites.md, hvac group: hvac
// websites 480, best hvac websites 70, hvac company website 40, hvac company
// websites 40, hvac contractor websites 20, websites for hvac contractors 20,
// top hvac websites 10; long tail: websites for hvac companies 10, best hvac
// company websites 10, websites for hvac 10.
// Ignored: nrg heating & air conditioning 90 (brand), hvac bidding websites 20
// and free hvac bidding websites 10 (bid boards, another intent), hvac learning
// websites 10 (training). hvac marketing websites 10 → /hvac-seo.
// Intent: ref/intent-check-trades-sites.md — «hvac websites» top-10:
// housecallpro, fieldpromax, invoiceowl and HVAC web agencies → owners’ demand.
// «hvac company website» is mixed (agencies plus HVAC companies’ own sites), so
// the excerpt and first sentence say plainly this is building a site for an
// HVAC business. 0 shared URLs with «hvac website design» → separate page.
// This page = how the site is built: sitemap, emergency pages, service pages,
// booking and membership sign-up via field software, financing and rebate data,
// seasonal switching, area pages, builders vs ownership, speed, migration.
// Not here: seasonal hero layout, repair/replacement paths, plan tables,
// financing display, trust signals, photos, templates, agencies
// (/hvac-website-design); SEO (/hvac-seo); plumbing (/website-for-plumbers);
// contractors in general (/website-for-contractors).
// Owner’s rule: new pages weave in AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const hvacWebsitesEn = {
  lang: "en",
  group: "hvac-websites",
  slug: "hvac-websites",
  title: "HVAC websites",
  heading: "HVAC Websites for Heating and Cooling Companies",
  excerpt:
    "I build websites for HVAC companies and HVAC contractors — your own heating and cooling business site: no-heat and no-AC pages that end in a call, maintenance plans sold online, booking through ServiceTitan, Housecall Pro or FieldEdge, and code you own.",
  seo: {
    metaTitle: "HVAC Websites with Booking and Maintenance Plans | Bandziuk",
    metaDescription:
      "HVAC websites for heating and cooling companies: no-heat and no-AC pages, online booking, maintenance plan sign-up, financing and rebate pages. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["No heat? Call now", "Book a tune-up online", "Join the maintenance plan", "Yours, no lock-in"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple HVAC website", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "HVAC company website with emergency, service and area pages, maintenance plan sign-up, booking linked to your field-service software and local SEO", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a website for your HVAC company",
      items: [
        { _key: k("o"), iconName: "phone", title: "No-heat and no-AC pages that end in a call", text: "Safety line, quick checks, then your number" },
        { _key: k("o"), iconName: "layers", title: "A page for each heating and cooling service", text: "Repair, replacement, heat pumps, ductless, air quality" },
        { _key: k("o"), iconName: "plug", title: "Bookings that reach your dispatch board", text: "ServiceTitan, Housecall Pro, FieldEdge or email" },
        { _key: k("o"), iconName: "trending-up", title: "Maintenance plans sold on the website", text: "Sign-up and payment; new members land in your software" },
        { _key: k("o"), iconName: "file-text", title: "Rebates with end dates", text: "An expired rebate disappears from every page by itself" },
        { _key: k("o"), iconName: "shield-check", title: "Code, content and domain are yours", text: "No platform fee; you switch the seasons yourself" },
      ],
      prices: [
        { _key: k("r"), label: "Simple HVAC website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Emergency, service and area pages, plan sign-up, booking, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: sites I have built for service businesses",
      subtitle:
        "Websites I have built for service businesses whose customers call, book or send a request — the same structure a heating and cooling company needs: pages for each service and area, a request form linked to your tools, fast pages on a phone.",
      picks: [
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your HVAC website",
      subtitle: "I reply within one business day with a sitemap for your services, plans and towns, and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A builder or platform site", "An old website"] },
        { _key: k("z"), question: "Where do you dispatch jobs from?", options: ["ServiceTitan", "Housecall Pro", "FieldEdge", "Other or none"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p(
          "I build websites for HVAC companies and HVAC contractors: a site for your own heating and cooling business that takes the no-heat call at 6 a.m. in January, books tune-ups in April, signs up maintenance members all year and explains financing for a new system. I plan, design, build and launch it, connect it to the software your dispatchers use, and hand over a site you own. This page is about how an HVAC website is built; how it looks and leads a visitor to a call is on the ",
          link("HVAC website design", "/hvac-website-design"),
          " page.",
        ),

        h2("HVAC company websites: the pages a heating and cooling business needs"),
        p("Many HVAC company websites are a home page, an “About us”, one list of services and a contact form. The sitemap of an HVAC company website that brings booked jobs is longer:"),
        li("emergency pages for “no heat” and “AC not cooling”, one per problem"),
        li("a page for each service you sell, from AC repair to heat pump installation"),
        li("a maintenance plan page with online sign-up"),
        li("financing, rebates and current promotions"),
        li("a page for each town or county your trucks cover"),
        li("reviews, about and careers — good technicians are hard to hire, and a careers page with photos of your shop helps"),
        p("Commercial work — rooftop units, restaurants, service agreements for property managers — gets its own section and request form, because a facility manager asks for response times and contract terms, not for a tune-up."),

        h2("No-heat and no-AC emergency pages on HVAC websites"),
        p("When the house is 55 degrees on a winter morning or 88 at midnight in July, the visitor wants one of two things: something to try right now, or a technician today. The emergency pages give both, in that order:"),
        li("a safety line first: if a carbon monoxide alarm sounds or you smell gas, leave the house and call the gas utility or 911"),
        li("a short list of checks: thermostat batteries and mode, the breaker, a clogged filter, a tripped condensate switch, an outdoor unit covered in ice"),
        li("your number, the hours someone answers and how soon a technician usually arrives"),
        p("Hours and after-hours coverage are stored once in the site and shown on every page and in structured data, so Google displays them correctly. After-hours calls are routed to the on-call technician or your answering service, and a tracking number shown only to website visitors tells you how many no-heat calls the site brought."),

        h2("HVAC service pages: repair, replacement, heat pumps, ductless, furnaces and indoor air quality"),
        p("Each service is a page built from the same set of fields — what the job is, the equipment and brands you work on, how long it takes, a price or range where you give one, photos of real installs and the questions your customer service reps hear — so a new service can be added without a developer:"),
        li("AC repair and furnace repair — symptoms, common causes, same-day availability"),
        li("AC and furnace replacement — sizing by load calculation, what the in-home estimate includes, removal of the old equipment"),
        li("heat pumps — cold-climate models, dual-fuel set-ups that keep the existing furnace"),
        li("ductless mini-splits — additions, garages, older homes without ductwork"),
        li("indoor air quality — filtration, humidifiers, dehumidifiers, UV lights, duct cleaning if you offer it"),
        p(
          "Dealer brands are fields on each page, so a change of manufacturer is one edit. How these pages are found in Google is covered on the ",
          link("HVAC SEO", "/hvac-seo"),
          " page.",
        ),

        h2("Online booking and maintenance plan sign-up through ServiceTitan, Housecall Pro or FieldEdge"),
        p("Most HVAC companies dispatch from field-service software, and the website should feed it directly instead of an inbox that nobody checks on Saturday."),
        h3("Booking repair visits, tune-ups and replacement estimates online"),
        p("ServiceTitan, Housecall Pro and FieldEdge each offer a way to take requests or bookings from a website — a booking widget, a request form or an integration. The build places the right one on each page and, where the tool allows, passes the job type, so a spring tune-up arrives as a tune-up and a replacement inquiry as an estimate visit. Widgets load only on the pages that use them. No-heat and no-AC pages stay phone-first: a family without heat should not be offered a slot next Thursday."),
        h3("Selling maintenance memberships on the website"),
        p("A maintenance plan sells better when it can be bought on the spot. The sign-up form asks what the plan needs — number of systems, equipment type, address, preferred visit months — and takes payment or sets up recurring billing, through the membership features of your field-service software or a payment provider such as Stripe. The new member appears in your software with the first tune-up ready to schedule, and receives an email listing what the plan includes."),

        h2("Financing and rebate pages on an HVAC company website"),
        p("A new system is a large purchase, and many buyers decide on the monthly payment. The financing page explains the plans you offer through your financing partner, in the partner’s own terms, and links to its online application, so a customer can apply before the estimate visit."),
        p("Rebates change more often than anything else on an HVAC site: utility programs open and close, federal and state incentives are revised. Each rebate is stored as one entry — amount, conditions, the utility or program, a link to the official source and an end date. When the end date passes, the rebate disappears from every page that showed it, so the site never promises money that is no longer available."),

        h2("Seasonal content switching on HVAC websites: heating in winter, cooling in summer"),
        p("An HVAC home page that talks about air conditioning in January looks abandoned. The site holds seasonal content sets — the lead block of the home page, featured services, promotions and the top banner — that switch on a date you choose, or with one switch in the admin panel when the weather turns early. During a heat wave or a cold snap, a notice about wait times or extended hours goes live in seconds and comes down when the rush ends."),
        p("Service pages stay published all year; only what is featured changes, so nothing that ranks in Google disappears between seasons."),

        h2("Service-area pages on websites for HVAC contractors"),
        p("Homeowners search “AC repair” or “furnace replacement” with their town, and Google prefers a page about that place. On websites for HVAC contractors, an area page carries what really differs from town to town:"),
        li("the utility that serves the area, because rebates depend on it"),
        li("typical homes and systems — older houses with boilers and radiators, newer subdivisions with heat pumps, air handlers in attics"),
        li("permit and inspection rules for equipment replacement in that city or county"),
        li("installs done there and the usual arrival time"),
        p("Area pages are generated from one template and a short entry per town, so when a new technician lets you cover another suburb, adding it takes minutes."),

        h2("HVAC website builders or a fast HVAC website you own"),
        p("HVAC website builders — general builders and the sites bundled with marketing platforms or field-service software — put a site online quickly for a monthly fee. For a one-truck HVAC contractor working mostly from referrals, that can be a fine start."),
        p("The limits appear as the company grows: no clean way to add a page per service and town, rebates typed by hand and forgotten, platform scripts that slow every page, and content you cannot take with you when you leave. A site you own is paid for once and moves to any host."),
        p("Speed is part of the build. Pages load in under 2.5 seconds on mobile data — the threshold Google uses for a good page load — with the phone number among the first things to appear and install photos compressed on upload. Hosting includes SSL, backups and spam filtering on forms; there is no monthly retainer."),

        h2("How an HVAC website is built, and how an old one moves without losing Google positions"),
        ol("Brief: services, towns, hours, dispatch software, financing partner and the terms of your maintenance plan."),
        ol("Sitemap: I propose the pages and the route from each one to a call, a booking or a plan sign-up."),
        ol("Design and build: layouts on a phone first, then the build and your content."),
        ol("Connections: booking, plan sign-up, call tracking, analytics and your Google Business Profile, tested with real bookings."),
        ol("Hand-over: every login and a short guide to switching seasons, adding rebates and changing prices."),
        p(
          "If you already have a website, every old address is mapped to its new page and redirected before launch, and titles and structured data that rank are carried over. The process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("Best HVAC websites and top HVAC websites: what they have in common"),
        p("Lists of top HVAC websites are mostly judged by looks. From the build side, the best HVAC websites share decisions any company can copy:"),
        li("a separate page for each no-heat and no-AC problem, each service and each town"),
        li("a maintenance plan that can be bought online, not only described"),
        li("financing and rebates kept current, with dates"),
        li("bookings that go straight into the dispatch software"),
        li("a home page that matches the season outside"),
        li("a site the owner controls and can change without asking a platform"),

        h2("An HVAC website that ChatGPT and Google AI Overviews can read"),
        p("Homeowners now ask ChatGPT, Perplexity or Google’s AI Overviews things like “who installs heat pumps near me” or “is an AC maintenance plan worth it”. Assistants answer from what they can read and check, so the build gives them clear facts:"),
        li("services, brands installed, areas, hours, license and insurance written as text"),
        li("structured data for the HVAC business, each service, the service area and the maintenance plan as an offer with its price"),
        li("plain answers on service pages: repair or replace, what a tune-up includes, how financing works"),
        li("the same name, address and phone as in your Google Business Profile and manufacturer dealer listings"),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much an HVAC website costs"),
        li("A simple HVAC website — home, emergency pages, main services, areas, call and request form: 700–1,400 €."),
        li("An HVAC company website with a page for each service and area, emergency pages, maintenance plan sign-up, financing and rebate pages, booking through your field-service software and local search optimization: from 2,000 €."),
        p(
          "Design is included in both. If you also run a plumbing division, its pages are built the way described on the ",
          link("websites for plumbers", "/website-for-plumbers"),
          " page; companies with more trades will find more on the ",
          link("websites for contractors", "/website-for-contractors"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "HVAC websites: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does an HVAC company website cost?", "700–1,400 € for a simple HVAC website, from 2,000 € for a site with emergency, service and area pages, maintenance plan sign-up, financing and rebate pages, booking through your field-service software and local search optimization. Design is included. After a short description of the company I give a fixed price."],
          ["How long does it take to build an HVAC website?", "Usually three to five weeks from the brief. The number of services and towns matters, and so does how quickly your plan terms, financing details and install photos are ready. It is best started in a shoulder season, not in the middle of a heat wave."],
          ["Can customers book jobs into ServiceTitan, Housecall Pro or FieldEdge from the website?", "Yes, through the booking widget, request form or integration your software offers. Repairs, tune-ups and replacement estimates arrive as separate job types where the tool allows it. No-heat and no-AC pages stay phone-first."],
          ["Can customers buy our maintenance plan online?", "Yes. The sign-up form collects the systems and address, takes payment or sets up recurring billing, and creates the member in your field-service software or sends you the details. The customer gets a confirmation with what the plan includes."],
          ["Are HVAC contractor websites from a builder or platform enough?", "For a one-truck business working from referrals, often yes. Once you want a page per service and town, plans sold online, rebates that expire on time and a fast site you can take with you, a custom-built site usually costs less over a few years than the monthly fee."],
          ["We get most calls from Google Local Services Ads. Do we still need our own website?", "Yes. Many homeowners who see you in Local Services Ads, on Angi or on Thumbtack open your website before calling, and the site brings jobs and plan members you do not pay per lead for. The ads keep working alongside it."],
          ["Will ChatGPT recommend our HVAC company?", "Assistants recommend companies whose facts they can read and confirm. The site is built with services, brands, areas, hours, license and the maintenance plan as text and structured data. Being named in their answers takes ongoing work after launch."],
          ["Do you build HVAC websites for companies outside Poland?", "Yes. The work is done remotely, in English, Polish or Russian, for HVAC companies in the US, Canada, the UK or Australia. The site is set up for your country: phone formats, temperature units, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website for your HVAC company: what to send me"),
        p(
          "Send the company name, a link to your current website or Google profile, the services you want more of, the towns you cover, the software you dispatch from and the terms of your maintenance plan. Your financing partner and the rebates you currently promote help me plan those pages. I will reply with a sitemap and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
