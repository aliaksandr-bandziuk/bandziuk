// Landing page fixture: HVAC SEO (EN), group «trades».
// Semantic core: ref/trades.csv, hvac / heating group: hvac seo services 720,
// hvac seo 590, hvac seo service 590, plumbing and hvac seo 480, plumber hvac
// seo 480, plumbing hvac seo 480, plumbing & hvac seo 480, seo for hvac company
// 390, hvac contractor seo 320, seo for hvac companies 320, hvac seo company
// 260, hvac seo companies 260, hvac digital marketing 260, seo for hvac
// contractors 210, hvac seo agency 210, seo hvac 210, seo for hvac 210, local
// seo for hvac 170, local seo for hvac contractors 110, local seo for hvac
// companies 110.
// Mention only: hvac marketing 480 (broader than SEO). Ignored: hvac
// webmasters 50 (brand).
// Intent: ref/intent-check-trades.md — «hvac seo» vs «seo for plumbers» 0
// shared URLs → own page; companies doing both get one H2 here with a link to
// /seo-for-plumbers.
// NOT on this page: plumbing-only SEO (/seo-for-plumbers, /local-seo-for-plumbers),
// general contractor SEO (/seo-for-contractors), map-only local SEO in depth
// (/local-seo-for-contractors), website builds and design (/hvac-websites,
// /hvac-website-design).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const hvacSeoEn = {
  lang: "en",
  group: "hvac-seo",
  slug: "hvac-seo",
  title: "HVAC SEO services",
  heading: "HVAC SEO Services",
  excerpt:
    "I do SEO for HVAC companies and HVAC contractors: pages for AC repair, furnace repair, replacements, heat pumps and maintenance plans, plus Google Maps and reviews, so heating and cooling calls come to you.",
  seo: {
    metaTitle: "SEO for HVAC Companies and Contractors | Bandziuk",
    metaDescription:
      "HVAC SEO services: AC and furnace repair pages, heat pumps, maintenance plans, Google Maps and AI answers, measured in booked jobs. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Heating + cooling + maps", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["AC repair near me", "Open now · same day", "Maintenance plan", "Book a technician"],
  offers: [
    { _key: "offer1", _type: "offer", name: "HVAC SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off HVAC SEO work: repair, replacement and maintenance pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an HVAC company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with HVAC SEO services",
      items: [
        { _key: k("o"), iconName: "gauge", title: "Emergency repair pages that load fast", text: "“No heat” and “AC not cooling” answered on a phone" },
        { _key: k("o"), iconName: "trending-up", title: "Content timed to heating and cooling peaks", text: "Ready weeks before the first heat wave or cold snap" },
        { _key: k("o"), iconName: "file-text", title: "Replacement, heat pump and rebate pages", text: "For the high-ticket jobs, not only repairs" },
        { _key: k("o"), iconName: "shield-check", title: "Maintenance plan and membership pages", text: "Recurring customers instead of one-off calls" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps and service areas", text: "Categories for heating and cooling, real towns" },
        { _key: k("o"), iconName: "plug", title: "Reports tied to your field software", text: "Booked jobs from search, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "HVAC SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an HVAC company", value: "from 800 € / month", note: "pages, maps, reviews", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service businesses I have worked with",
      subtitle:
        "SEO work for service businesses that win customers from local search, maps and reviews — the same work a heating and cooling company needs: pages for each service and area, a strong Google profile and reports in calls and bookings.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your HVAC company",
      subtitle: "I reply within one business day with what I would fix first in your website and Google profile, and a fixed price.",
      contextLabel: "HVAC company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which jobs matter most to you?", options: ["Emergency repairs", "System replacements", "Maintenance plans", "Plumbing too"] },
        { _key: k("z"), question: "What do you use to book jobs?", options: ["ServiceTitan", "Housecall Pro", "Jobber or other", "Phone and paper"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for HVAC companies: the website, the Google Business Profile and the pages that come up when a house is too hot, too cold or the system is twenty years old. HVAC SEO services have an unusual mix to serve — urgent repair calls that must be answered today, expensive replacements that are researched for weeks, and maintenance plans that turn one call into a customer for years."),

        h2("What HVAC SEO services cover for heating and cooling companies"),
        p("An HVAC company sells at least three different things, and search treats them differently:"),
        li("repairs — urgent, local, decided in minutes, mostly from the map and the first few results"),
        li("replacements and new installs — furnaces, central air, heat pumps, ductless mini-splits; compared by price, efficiency and financing"),
        li("maintenance — tune-ups and memberships, searched before each season"),
        p("HVAC SEO builds pages and profile content for each of these, measured in booked calls, not in rankings."),

        h2("HVAC SEO keywords: emergency repair, replacement and maintenance searches"),
        p("People rarely search for “HVAC”. They describe the symptom: “AC not cooling”, “furnace not working”, “heat pump blowing cold air”, “AC repair near me”, often at night or on a weekend. Before writing anything I pull the search data for your towns and group it:"),
        li("symptom searches that need a short, fast page with the phone number at the top"),
        li("service searches like “furnace repair” or “ductless AC installation”"),
        li("cost and comparison searches: “heat pump vs furnace”, “AC replacement cost”"),
        li("maintenance searches: “AC tune-up”, “furnace maintenance before winter”"),

        h3("Pages for 24/7 emergency HVAC calls"),
        p("An emergency page is read on a phone by someone who is cold or overheated. It has to load in under 2.5 seconds, show whether you are open now, say how fast a technician can come and offer a call button before anything else. Long texts go lower on the page, for search engines and for the visitor who wants to check you first."),

        h2("Heating and cooling season peaks in SEO for HVAC companies"),
        p("HVAC demand swings twice a year. The first heat wave sends “AC repair” searches up within a day; the first cold night does the same for furnaces. Pages need weeks to rank, so SEO for HVAC companies works one season ahead: cooling pages are updated in late winter, heating pages in late summer. The quiet shoulder months are when replacement and heat pump content is written, because homeowners plan those purchases when nothing is broken."),
        p("The profile follows the same calendar: posts about AC tune-ups in spring, furnace checks in late summer, extended hours during a heat wave or a cold snap, and photos of the season’s installs. In mild climates, where cooling runs most of the year, the plan leans on air conditioning and heat pumps instead."),

        h2("Maintenance plans and memberships in HVAC contractor SEO"),
        p("A maintenance membership is worth more to an HVAC business than a single repair: it brings visits twice a year, priority for members in a heat wave and the first call when the system needs replacing. HVAC contractor SEO gives the plan its own page with what each visit includes, the price, the member benefits and an online sign-up. Searches like “AC tune-up near me” in spring and “furnace inspection” in the fall lead to this page, not to the generic home page."),

        h2("Replacement installs, heat pumps and rebates: SEO for HVAC contractors who sell systems"),
        p("System replacements are where most HVAC revenue sits, and the buyers research before they call. SEO for HVAC contractors who sell systems means pages that answer their questions:"),
        li("repair or replace: age of the system, repair costs, efficiency"),
        li("heat pumps: how they work in your climate, cold-climate models, dual-fuel set-ups"),
        li("efficiency ratings, utility rebates and tax incentives available in your area, kept up to date"),
        li("financing options and what an in-home estimate includes"),
        p("Rebate and incentive programs change often, so these pages carry a date and a link to the official source rather than promises."),

        h2("Manufacturer dealer pages as part of an HVAC SEO service"),
        p("Many HVAC companies are dealers for Carrier, Trane, Lennox, Rheem or other brands, and homeowners search for the brand with the town: “Trane dealer near me”, “Carrier furnace installation”. A page for each brand you install — with the dealer status, the models you fit, warranty terms and your installations — catches those searches. It also helps when a manufacturer’s “find a dealer” page links to you."),

        h2("Local SEO for HVAC contractors: Google Business Profile, service areas and reviews"),
        p(
          "Most HVAC repair calls come from the map. Local SEO for HVAC contractors sets the profile up properly: “HVAC contractor” or “Air conditioning contractor” and “Heating contractor” as categories, every service listed, the real service area, real hours with emergency availability, photos of installs and the technicians’ vans. Reviews are asked for by text after every visit and answered within days; reviews that mention the technician and the job help the most. The full map side is described on the ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          " page.",
        ),

        h2("Plumbing and HVAC SEO for companies that do both"),
        p(
          "Many home service companies run plumbing and HVAC under one name. Plumbing and HVAC SEO keeps the two apart where search does: separate service pages, separate profile categories and separate seasonal plans, because water heater and drain searches do not peak with heat waves. The site still shows one company, which helps when a customer needs both. The plumbing side is covered on the ",
          link("SEO for plumbers", "/seo-for-plumbers"),
          " page.",
        ),

        h2("Measuring SEO for an HVAC company in ServiceTitan or Housecall Pro"),
        p("HVAC companies usually book jobs in field service software such as ServiceTitan, Housecall Pro or Jobber. SEO for an HVAC company should be measured there: calls and online bookings from organic search and the map tagged as their own source, so you see booked jobs and revenue from SEO next to ads and referrals. I set up call tracking and booking-form tracking that keeps your main number consistent on the profile and listings."),

        h2("AI SEO for HVAC companies: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Questions like “should I replace my furnace or repair it”, “are heat pumps worth it” or “best HVAC company near me” now get an answer from ChatGPT, Perplexity or Google’s AI Overviews before any website is opened. Generative engine optimization (GEO) and answer engine optimization (AEO) work on what those answers are built from:"),
        li("clear, dated answers to repair-or-replace, heat pump and efficiency questions on your pages"),
        li("license, insurance, dealer status and emergency hours written as plain facts"),
        li("structured data for the business, its services and service area"),
        li("consistent details across the profile, listings and manufacturer dealer pages"),
        p(
          "I check how assistants describe your company before and after. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Choosing an HVAC SEO company or agency, and where HVAC digital marketing fits"),
        p("HVAC marketing covers a lot: paid search, Local Services Ads, mailers, email to members, social media. An HVAC digital marketing agency often bundles all of it, and SEO becomes one line in a monthly retainer. An HVAC SEO company focuses on organic search and the map, but often runs the same templates for many HVAC clients. I do the SEO part only, as a single specialist who also builds websites. Whoever you talk to, ask:"),
        li("Will reports show booked jobs and revenue from search, or only rankings and traffic?"),
        li("Who owns the website, the Google profile and the call tracking numbers if we stop?"),
        li("Are seasonal pages planned months ahead, or written when the phones are already ringing?"),
        li("Do you also work for another HVAC company in my service area?"),
        li("Is there a long minimum contract, and what happens if results do not come?"),

        h2("How much HVAC SEO services cost"),
        li("HVAC SEO audit of the website and Google Business Profile: from 250 €, one-off, with a list of fixes ordered by impact."),
        li("One-off work — emergency, replacement and maintenance pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for an HVAC company — seasonal pages, maps, reviews and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "If the website needs rebuilding, see ",
          link("HVAC websites", "/hvac-websites"),
          " and ",
          link("HVAC website design", "/hvac-website-design"),
          "; other trades are on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "HVAC SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much do HVAC SEO services cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. After a short description of the company I give a fixed price."],
          ["When should an HVAC company start SEO before the season?", "Two to three months before the peak. Cooling pages should be ready by late spring, heating pages by early fall; pages written during a heat wave usually rank after it ends."],
          ["Is SEO worth it if we already run Local Services Ads?", "Yes, they work together. Local Services Ads charge per lead and show only a few companies; SEO brings calls from the map and the regular results without a per-lead fee. Many HVAC companies use both and see which brings cheaper booked jobs."],
          ["Can SEO help us sell more maintenance plans?", "Yes. A clear membership page with the price, visit schedule and benefits ranks for tune-up searches before each season and gives customers a reason to sign up instead of calling only when something breaks."],
          ["Can I do SEO for my HVAC business myself?", "Part of it: keeping the profile current, adding install photos and asking every customer for a review. Keyword research, seasonal planning and technical fixes usually cost less when done by someone who does them daily."],
          ["Can ChatGPT do SEO for an HVAC company?", "It can help draft texts. It cannot see search data for your towns, your competitors on the map or your site’s speed problems, and generic HVAC texts without your services and areas rarely rank."],
          ["Do you do HVAC SEO for companies outside Poland?", "Yes. HVAC SEO is done remotely for companies in the US, Canada, the UK or Australia: the website, the profile and the search data for your towns. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your HVAC company: what to send me"),
        p(
          "Send the company name, links to the website and Google Maps profile, the jobs you want more of — repairs, replacements, heat pumps, memberships — the towns you cover and the software you book jobs in. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
