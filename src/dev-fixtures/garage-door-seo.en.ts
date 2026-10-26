// Landing page fixture: Garage Door SEO (EN), group «garage-door-seo». New page.
// Semantic core: ref/home-services.md, garage doors group (US): seo for garage
// door companies 110 (H1, several H2) · garage door seo 70 (metaTitle, H2) ·
// garage door repair seo company 30 (repair H2, choosing H2) · garage door seo
// experts 10, garage door company seo 10 · garage door marketing 110 (one H2 on
// where SEO fits among LSA, ads and lead platforms). Not targeted: garage door
// repair 246,000, garage door repair near me 165,000, garage door sales near
// me 2,900, best garage doors 1,300 — consumer searches the client’s pages aim
// at (used as examples of what homeowners type). No PAA for garage doors.
// Intent: ref/intent-check-home-services.md — «garage door seo» vs «seo for
// contractors» 0 shared URLs, 0 shared domains → own page, separate from
// /seo-for-contractors (linked once). SERP: relentless-digital, Blue Corona,
// Housecall Pro, ServiceTitan, doordomination, niche agencies.
// Angle: repair vs installation vs openers as three searches, broken springs and
// off-track doors (safety stated plainly), new door styles/materials/wind
// rating, opener brands and drive types, manufacturer dealer pages and dealer
// locator links, commercial doors and service contracts, service area and
// Google Business Profile with reviews, LSA for repairs vs pages for door
// sales, AI answers.
// NOT on this page: website build or design (no H2); locksmith topics
// (/locksmith-seo — fake listings, lockouts, key programming); general
// contractor SEO (/seo-for-contractors); roofing / plumbing / landscaping theses;
// running ads (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there are
// no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const garageDoorSeoEn = {
  lang: "en",
  group: "garage-door-seo",
  slug: "garage-door-seo",
  title: "Garage door SEO",
  heading: "SEO for Garage Door Companies",
  excerpt:
    "I do SEO for garage door companies: separate pages for repair, new door installation and openers, broken spring and off-track emergencies, the brands you are a dealer for, Google Maps across your service area and visibility in AI answers, measured in booked jobs and door sales.",
  seo: {
    metaTitle: "Garage Door SEO: Repair, Openers, New Doors | Bandziuk",
    metaDescription:
      "SEO for garage door companies: repair, spring, opener and new door pages, dealer brand pages, Google Maps and AI answers, reported in booked jobs. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Repair, install, openers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Broken spring? Same day", "New insulated doors", "Opener installation", "Book a free quote"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Garage door SEO audit: website, Google Business Profile, competitors and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off garage door SEO work: repair, opener, new door and brand pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a garage door company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for garage door companies",
      items: [
        { _key: k("o"), iconName: "layers", title: "Repair, installation and opener pages", text: "Three kinds of buyer, three sets of pages" },
        { _key: k("o"), iconName: "gauge", title: "Broken spring and off-track door pages", text: "Same-day repair searches, safety stated plainly" },
        { _key: k("o"), iconName: "image", title: "Door style and brand pages", text: "Your installed doors, not only catalog renders" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps across your service area", text: "Profile, town pages and reviews that name the job" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Repair-or-replace answers assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in booked repairs and door sales", text: "From your field service software, not rankings alone" },
      ],
      prices: [
        { _key: k("r"), label: "Garage door SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a garage door company", value: "from 800 € / month", note: "pages, map, reviews, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: service and project websites I have built and optimized",
      subtitle:
        "A Warsaw auto repair shop whose customers come from calls and the map pack — for it I handled local SEO, the Google Maps profile, UX and service pages; Felgilab, a Warsaw wheel workshop whose WordPress rebuild gave every service and its prices a page of their own; a Warsaw renovation and property-investment company whose premium site shows finished projects; and ScanM2, a 3D laser scanning and BIM company whose organic traffic grew 29× after a WordPress rebuild. The fifth, a psychotherapist’s site in Milan, shows new pages appearing in ChatGPT answers. A garage door company needs both halves of that work: repair pages that make the phone ring and project pages that sell the bigger job.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your garage door company",
      subtitle: "I reply within one business day with the pages and profile fixes I would start with, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you want more of?", options: ["Repairs and spring replacements", "New door sales and installs", "Opener installs", "Commercial doors"] },
        { _key: k("z"), question: "Where do your jobs come from now?", options: ["Local Services Ads", "Lead platforms", "Builders and referrals", "Google search and Maps"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for garage door companies: separate pages for repair, new door installation and openers, a Google Business Profile that covers your service area, and the brand and project pages that sell a new door. Garage door SEO serves two very different customers — the homeowner whose door will not open this morning and the one choosing a door that will face the street for years — and a site that treats them as one customer loses both."),

        h2("Garage door SEO: repair, installation and openers are three different searches"),
        p("Search data for garage door companies splits cleanly into three groups:"),
        li("repair — “garage door won’t close”, “broken garage door spring”, “garage door off track”: urgent, local, decided by phone"),
        li("installation and replacement — “new garage door cost”, “insulated garage doors”, “carriage house garage doors”: researched for weeks and decided after a quote"),
        li("openers — “garage door opener installation”, “opener light blinking”, “quiet belt drive opener”: somewhere between the two"),
        p("“Garage door repair” alone is searched hundreds of thousands of times a month in the US, which is why national franchises and lead platforms fight over it. A local company wins the longer, more specific searches in its own towns: a page per problem, a page per door type, a page per opener brand you service."),

        h2("Broken spring and off-track door pages: garage door repair SEO"),
        p("A broken torsion spring is the classic urgent call: the door will not lift and the car is stuck inside. Searches are specific — “garage door spring broke”, “spring replacement near me”, “garage door came off track”, “cable snapped” — and each deserves its own page, written for someone reading on a phone in the garage."),
        p("The page says in its first lines whether you replace springs the same day and which areas you reach, then explains what the price depends on: spring type, one spring or a pair, whether rollers and cables are replaced too. It also says plainly that torsion springs are under high tension and should not be adjusted by the homeowner. That warning helps the reader, and it is the kind of direct answer search engines and AI assistants pick up."),

        h2("New garage door installation pages: styles, materials and wind ratings"),
        p("A new door changes how the house looks from the street, so buyers browse before they ask for a price. They search by style (modern, carriage house, traditional raised panel), by material (steel, wood, aluminum and glass, composite), by insulation and, on the coast, by wind rating. Pages that help them choose include:"),
        li("one page per style or material, with photos of doors you installed on real houses next to the catalog images"),
        li("what moves the price — size, insulation, windows, hardware, a new opener — with a range if you are willing to give one"),
        li("how the job runs: measuring visit, ordering time, removal of the old door, install day"),
        li("a quote request that asks for the opening size and a photo of the house"),
        p("In hurricane regions such as Florida and the Gulf Coast, wind-load rated doors and local code approvals deserve a page of their own."),

        h2("Garage door opener SEO: brands, drive types and smart openers"),
        p("Opener searches mix repair and sales. Homeowners type the brand printed on the unit — LiftMaster, Chamberlain, Genie — plus the symptom: “remote not working”, “opener makes grinding noise”. Others compare chain, belt and wall-mount openers, or want app control and battery backup; some states, California among them, require battery backup on newly installed residential openers. A page per brand you service and per drive type catches both groups, and each opener repair page links to replacement for units too old to fix."),

        h2("Manufacturer brand and dealer pages in SEO for garage door companies"),
        p("Most garage door companies sell doors from a few manufacturers — Clopay, Amarr, Wayne Dalton, C.H.I., Raynor and others — and many appear in those manufacturers’ dealer locators. Two things follow for SEO. A page for each brand you carry, with your own installs, ranks for “[brand] garage door dealer [city]” searches that national sites cover poorly. And the link from a manufacturer’s dealer locator is one of the strongest local links a garage door company can have, so it should point to the right page and use your current business name. Manufacturer specifications can be quoted; descriptions copied whole from the brand’s site rank for nobody."),

        h2("Commercial garage door SEO: rolling steel doors, dock equipment and service contracts"),
        p("Warehouses, fire stations, car dealers and storage facilities buy differently. They need rolling steel and commercial sectional doors, high-speed doors, dock levelers and fire doors that require regular inspection. Their searches are few, but each can turn into a maintenance contract that lasts for years. A commercial page lists the door types and equipment you service, planned maintenance and emergency response, insurance, and how a site visit is booked."),

        h2("Local SEO for garage door companies: Google Business Profile, town pages and reviews"),
        p("Repair searches end on the map. A garage door company’s profile needs:"),
        li("the garage door category that matches your main work as primary, and services listed one by one: spring replacement, opener installation, new doors, commercial"),
        li("the towns you really cover as the service area; a showroom shows its address, a van-only business hides it"),
        li("photos of installed doors and finished repairs every week or two, named by job and town"),
        li("a review request sent on the day of the job, asking the customer to mention the door or the repair"),
        p(
          "Town pages on the site follow the profile: a town gets a page when you have installs and reviews there to show, with the door styles common in its neighborhoods. Map work in more depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Garage door marketing: Local Services Ads, lead platforms and where SEO fits"),
        p("“Garage door marketing” usually means a mix of Google Local Services Ads, search ads, lead platforms and SEO, and for garage doors the split between them is fairly clear. Paid leads suit repair calls: urgent, short, won by whoever answers first. New door sales are researched for weeks and compared on photos, reviews and quotes, and that is where pages and galleries on your own site do the selling. Local Services Ads also weigh your reviews when ranking, so the review routine built for SEO helps the ads too. I do the SEO and leave ad accounts to whoever runs them now."),

        h2("Garage door SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Homeowners ask assistants “how long do garage door springs last”, “belt or chain opener” or “is an insulated garage door worth it”, and AI Overviews answer before anyone clicks. Work on being one of the sources behind those answers is called generative engine optimization (GEO), or answer engine optimization (AEO). For a garage door company it needs:"),
        li("clear answers to repair-or-replace and cost questions on its own pages, with what changes the price"),
        li("the brands it is a dealer for, its service area, warranty terms and insurance written as plain sentences"),
        li("structured data for the business, its services and areas"),
        li("the same company details on Google, Yelp, BBB, Houzz and the manufacturers’ dealer locators"),
        p(
          "Before the work starts and again after it, I ask the main assistants about your company and compare what they say. Details are on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Choosing a garage door SEO company: questions to ask"),
        p("Specialist garage door agencies, field service software vendors that bundle websites, and general marketing firms all sell SEO for garage door companies. Questions worth asking any of them:"),
        li("Will reports show booked repairs and signed door sales from my field service software, or only rankings?"),
        li("Do you work for another garage door company in my towns?"),
        li("Will the style and brand pages use my installed doors or stock photos?"),
        li("Who owns the website, the content and the profile if we stop?"),
        p(
          "I work alone and also build websites, so the audit and the changes are done by one person. Other trades will find their version on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page.",
        ),

        h2("How much SEO for garage door companies costs"),
        li("Garage door SEO audit of the website, the Google Business Profile, competitors and AI answers: from 250 €, one-off; you get a list of fixes ranked by what they bring."),
        li("One-off work — repair, spring, opener, style and brand pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a garage door company — new pages, map and reviews, AI visibility, reporting: from 800 € per month; in big US metros, where franchises and lead platforms crowd the results, from 1,300 € per month."),
        p(
          "How monthly work runs is described on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; the full price list is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for garage door companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a garage door company cost?", "With me, a garage door SEO audit is from 250 € one-off; separate jobs such as spring and opener pages cost 250–700 €; monthly work starts at 800 €, or at 1,300 € in big US metros. Tell me your towns and the work you want more of, and I will name a fixed price."],
          ["How long does garage door SEO take?", "Profile and page fixes can show on the map within weeks. New repair, opener and door pages usually need two to four months to rank, longer where franchises and lead platforms hold the first page."],
          ["Should repairs and new doors be on separate pages?", "Yes. A homeowner with a broken spring and one choosing a new door search with different words and need different answers. One shared page usually ranks for neither."],
          ["Is SEO worth it if I already run Local Services Ads?", "Often yes. Local Services Ads bring repair calls at a price per lead; SEO pages and galleries win the researched door sales and make your reviews and profile stronger, which the ads use as well."],
          ["Do manufacturer dealer listings help my SEO?", "They do. A dealer locator link is a strong local link, and brand pages on your own site rank for brand-and-city searches. Make sure the listing uses your current name and links to the right page."],
          ["Can ChatGPT write my garage door pages?", "It can draft them. It does not know your towns, your installs, the brands you carry or your prices, and pages without those details rarely rank or win quotes."],
          ["Can a consultant in Poland do SEO for a US garage door company?", "Yes. Everything is done remotely, in English. I am based in Warsaw, and my afternoons and evenings in Central European Time fall in the US morning — the best slot for calls with East Coast and Central companies. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your garage door company: what to send me"),
        p(
          "Send your company name, a link to the website and to the Google Maps listing, the work you want more of — repairs, new doors, openers, commercial — the brands you are a dealer for, the towns you cover and the field service software you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
