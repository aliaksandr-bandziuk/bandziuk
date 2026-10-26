// Landing page fixture: SEO for home inspectors (EN), group
// «seo-for-home-inspectors». New page.
// Semantic core: ref/home-services.md, home inspectors group: seo for home
// inspectors 70 (H1, metaDescription, several H2), home inspection marketing
// 140 (one H2 + FAQ). «home inspector report software» 170 — software buyers,
// not targeted (Spectora, HomeGauge, ISN named only as tools the client uses).
// Intent: ref/intent-check-home-services.md — «seo for home inspectors» vs
// «home inspector marketing» 2 shared URLs of 10 (YouTube, WIN franchise
// tips) → one page, marketing covered in one H2; SERP = inspection software
// vendors (HomeGauge, Spectora) and small agencies → buyers’ demand.
// Angle: realtor referrals vs direct buyers, a page for agents, ancillary
// services (radon, mold, sewer scope, WDO/termite, septic, pool), sample report
// and online booking, prices by square footage and add-ons, service areas and
// housing stock, reviews, InterNACHI / ASHI and state licensing (general),
// new construction and 11-month warranty inspections, AI answers.
// NOT on this page: inspection software comparisons; website build in detail
// (/services/website-development, linked once); Google Maps in depth
// (/services/local-seo-services, linked once); builders’ own SEO
// (/seo-for-home-builders, linked once); paid ads and agent-office visits
// (mentioned as channels only). Owner’s rules: every SEO page covers AI search
// (GEO, AEO); never say there are no clients from the visitor’s segment.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForHomeInspectorsEn = {
  lang: "en",
  group: "seo-for-home-inspectors",
  slug: "seo-for-home-inspectors",
  title: "SEO for home inspectors",
  heading: "SEO for Home Inspectors",
  excerpt:
    "I do SEO for home inspectors and inspection companies: pages for buyer, pre-listing and new construction inspections, radon, mold and sewer scope add-ons, sample reports and Google Maps, so buyers and agents book you directly.",
  seo: {
    metaTitle: "Home Inspector SEO and Inspection Marketing | Bandziuk",
    metaDescription:
      "SEO for home inspectors: add-on service pages, sample reports, booking, Google Maps and AI answers, so agents and buyers book you. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Buyer, pre-listing, add-on pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Home inspector near me", "Book online", "Sample report", "Radon + sewer scope"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Home inspector SEO audit: website, Google Business Profile, competitors", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a home inspection company: service and add-on pages, sample report page, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a home inspection company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for home inspectors",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for inspections in your counties", text: "Buyer, pre-listing, new construction and add-on tests" },
        { _key: k("o"), iconName: "layers", title: "A page for each ancillary service", text: "Radon, mold, sewer scope, termite, septic, pool" },
        { _key: k("o"), iconName: "file-text", title: "Sample report and booking pages", text: "Readable on a phone, easy for agents to forward" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile and service areas", text: "The counties and towns where you actually inspect" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "License, memberships and prices assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in booked inspections", text: "Agent referrals and direct buyers counted apart" },
      ],
      prices: [
        { _key: k("r"), label: "Home inspector SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a home inspection company", value: "from 800 € / month", note: "pages, profile, reviews, AI answers", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: technical, property and local service websites",
      subtitle:
        "A Warsaw renovation and property-investment company, ScanM2 — a 3D laser scanning and BIM company whose rebuilt site grew organic traffic 29× and now brings leads every week — a Warsaw auto repair shop that lives on calls and the map, a multilingual real estate platform in Cyprus and a Milan psychotherapist whose pages appear in ChatGPT answers. What a home inspector needs from this: clear pages for technical services, trust shown in plain facts and bookings that come from search.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your home inspection business",
      subtitle: "I reply within one business day with what I would change first on your website and Google profile, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most of your inspections come from now?", options: ["Agent referrals", "Google search and Maps", "Repeat clients and investors", "Thumbtack, Angi or Yelp"] },
        { _key: k("z"), question: "What do you want to book more of?", options: ["Buyer inspections", "Pre-listing inspections", "Radon, mold and sewer scope", "New construction and 11-month"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for home inspectors and multi-inspector companies: the website, the Google Business Profile and the pages a buyer under contract finds when the inspection period has started and a date is needed this week. The same pages are read by the real estate agent who checks your name before passing it on, so a home inspector’s site has two readers with different questions — and good SEO answers both."),

        h2("Home inspector searches: who looks for an inspection and what they type"),
        p("Inspection demand is narrow but steady, and the searches split by who is asking:"),
        li("buyers with an accepted offer — “home inspector near me”, “home inspection [town]”, “how long does a home inspection take”"),
        li("sellers preparing to list — “pre-listing inspection”, “should I get an inspection before selling”"),
        li("owners of new homes — “new construction inspection”, “11-month warranty inspection”, “phase inspection before drywall”"),
        li("buyers adding tests — “radon testing”, “sewer scope inspection”, “mold inspection cost”"),
        li("agents looking for a backup when their usual inspector is booked"),
        p("Each group needs its own page. A single “Services” page with a list of bullet points does not rank for any of these searches and leaves the buyer guessing whether you even do sewer scopes."),

        h2("Realtor referrals and direct buyers in home inspector SEO"),
        p("In many markets a large share of inspections still comes through agents. That work depends on relationships, and SEO does not replace them. What SEO changes is the other share: buyers who choose their own inspector, investors, sellers, owners of new homes and people relocating from another state who do not know any local agent. Those bookings come with no middleman, and they grow as your pages rank."),
        p("Agent referrals also pass through search. The agent, or the buyer the agent names you to, types your company name into Google before calling. What they see — reviews, a sample report, the license number, a clear price — decides whether the referral turns into a booking."),
        h3("A page for real estate agents on a home inspector website"),
        p("Give agents a page of their own: how to book for a client, report turnaround, who receives the report, how you handle re-inspections, and how findings are written — clear and factual rather than alarming. Agents worry about inspectors who frighten buyers; a sample report shows your tone better than any promise."),

        h2("Home inspection marketing: where SEO fits next to agent visits and paid platforms"),
        p("Home inspection marketing usually mixes several channels: presentations at brokerage offices, continuing-education classes for agents, social media, review sites, Thumbtack or Angi listings and Google Ads. They work, and most of them need your time or money every month to keep working. SEO is the part that keeps bringing bookings between those efforts, and it makes every other channel stronger, because each of them ends with someone searching your name. My part is the search side: the website, the profile and the pages."),

        h2("Ancillary service pages for home inspectors: radon, mold, sewer scope, termite, septic"),
        p("Add-on services raise the value of each inspection, and each one is searched on its own. A buyer reading about radon levels in their county, or worried about the 1950s clay pipe under the yard, searches for that test, not for a home inspector. Give every ancillary service a page with:"),
        li("what the test finds and why it matters in your area — older sewer lines, radon-prone soils, termite pressure, homes on wells or septic"),
        li("how it is done, how long it takes and when the results arrive"),
        li("the price alone and as an add-on to a full inspection"),
        li("photos or short video from real jobs, with the town named"),
        p("Some loan types and states ask for a wood-destroying insect report; if that applies where you work, say so on the termite page. These pages also give AI assistants specific facts to repeat."),

        h2("Sample inspection report and online booking on a home inspector website"),
        p("“What will the report look like?” is the question most buyers cannot ask before booking. A sample report page answers it. Most inspection software — Spectora, HomeGauge, ISN and others — produces a web version of the report, so the sample can be a real report from a house you are allowed to show, with the address removed. Put a short summary on your own page — sections, number of photos, how defects are rated, delivery time — and link to the full sample. A PDF alone is hard to read on a phone and is rarely what ranks."),
        p("Booking is the next step. Show the price before the calendar: base price by square footage and age of the house, then add-ons with their prices. A buyer who sees the full figure and a free slot on Thursday books; a buyer who has to call for a quote often calls someone else."),

        h2("Local SEO for home inspectors: Google Business Profile and service-area pages"),
        p(
          "Most inspectors work from home and travel to the house, so the profile is set up as a service-area business: “Home inspector” as the primary category, the counties you cover, real hours and photos from inspections — attics, crawl spaces, electrical panels, roof drones. Service-area pages on the website should carry local knowledge: the age of the housing stock, common foundation types, frequent problems such as galvanized plumbing in post-war neighborhoods or expansive clay soils. A page for a town where you have never inspected is a thin page, and Google treats it that way. More on the map side on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Reviews, InterNACHI, ASHI and state licensing on a home inspector’s site"),
        p("A buyer is trusting a stranger with the largest purchase of their life, so the trust signals have to be on the page, not in a logo strip:"),
        li("the state license number, where your state licenses inspectors, written as text"),
        li("InterNACHI, ASHI or other memberships and certifications, with what they mean in one sentence"),
        li("errors and omissions and general liability insurance, if you carry them"),
        li("years in business and the kinds of homes you inspect"),
        p("For reviews, ask when the report is delivered, while the buyer is still grateful, and ask agents too. Reviews that mention the town, the house type and something you found give both Google and the next buyer something concrete."),

        h2("New construction and 11-month warranty inspection pages"),
        p(
          "Buyers of new homes often believe a new house needs no inspection. Pages for pre-drywall, final walk-through and 11-month warranty inspections reach them with that exact question. Show defects you have found in new builds and explain the timing around the builder’s warranty. Builders market these homes with their own SEO, described on the ",
          link("SEO for home builders", "/seo-for-home-builders"),
          " page; your pages meet the same buyers after they sign.",
        ),

        h2("Home inspection SEO through the year: busy spring, slower winter"),
        p("Inspections follow the housing market: busy from spring through summer, slower in the colder months and when mortgage rates rise. The slow weeks are the best time to write add-on pages, update the sample report and collect photos, because new pages take weeks to settle in search. Pre-listing and new construction pages can help keep the calendar fuller when buyer inspections drop."),

        h2("SEO for home inspectors in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("“What does a home inspection include?”, “Is a sewer scope worth it?” and “Who is a good home inspector in [town]?” are now often answered by ChatGPT, Perplexity or Google’s AI Overviews before anyone opens a website. Being part of those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For an inspector it comes down to:"),
        li("clear answers about scope, duration, price and add-ons on your own pages"),
        li("license, memberships, insurance and service area stated as plain facts"),
        li("structured data marking the business, its services and the area it covers"),
        li("the same name, phone and details on Google, Yelp, the association directories and your site"),
        p(
          "I check how assistants describe your company before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO for home inspectors costs"),
        li("SEO audit of the inspection website, Google profile and local competitors: from 250 €, one-off, with fixes ordered by effect."),
        li("One-off work — add-on and service pages, the sample report page, area pages, structured data: 250–700 €."),
        li("Monthly SEO for a home inspection company — new pages, profile and reviews, AI visibility, reports in booked inspections: from 800 € per month."),
        p(
          "A solo inspector in a mid-sized market often gets most of the result from the audit and a handful of strong pages. How I handle ongoing monthly work is explained on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and if the site itself needs replacing, see ",
          link("website development", "/services/website-development"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for home inspectors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a home inspector cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month. After a short description of your company and area I give a fixed price."],
          ["Do home inspectors need SEO if most work comes from agents?", "Yes, for two reasons. Agents and their buyers look you up before booking, so what they find decides the referral. And buyers who choose their own inspector, sellers and new-home owners book directly from search, without any referral."],
          ["How long does it take for a home inspection website to get bookings from Google?", "Profile fixes and a better sample report page can help within weeks. New add-on and service pages usually need two to four months to rank, depending on how many inspectors compete in your area."],
          ["Should a home inspector publish prices online?", "In most cases, yes. Buyers are working against a deadline and compare quickly. A base price by square footage with add-on prices listed lets them book without calling, and it gives AI assistants a figure to quote with your name next to it."],
          ["Does it matter which inspection software I use?", "Not for SEO. Spectora, HomeGauge, ISN and similar tools all offer booking and web reports. What matters is that the booking and the sample report sit on pages of your own site that search engines can read."],
          ["Can I do SEO for my home inspection business myself?", "Part of it: keep the Google profile complete, add photos after inspections and ask every client for a review. Page structure, technical fixes and structured data are where inspectors usually save time by handing the work over."],
          ["Do you work with home inspectors in the US from Poland?", "Yes. The work is remote: website, profile and search data for your counties. My afternoon and evening in Central European Time overlap with the US morning, so calls are easy to schedule, and invoices are in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your home inspection business: what to send me"),
        p(
          "Send the company name, links to the website and the Google Maps profile, the counties you cover, the add-on services you offer and which inspection software you use. Tell me roughly how many inspections come from agents and how many from search. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
