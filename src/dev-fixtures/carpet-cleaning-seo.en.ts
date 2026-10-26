// Landing page fixture: Carpet cleaning SEO (EN), group «carpet-cleaning-seo».
// Semantic core: ref/home-services.md, cleaning group: carpet cleaning seo 170,
// seo for carpet cleaning 170 (one demand — H1, metaTitle, H2), carpet
// cleaning seo services 50 (offer and cost H2), carpet cleaning seo company 10,
// carpet cleaning website seo 10, carpet cleaning local seo 10 (local H2).
// carpet cleaning advertising 170 — one H2 comparing advertising with SEO.
// Ignored: carpet cleaning downers grove 70, eco / echo carpet cleaning near me
// (consumer and brand searches), danny seo carpet cleaning (navigational).
// Intent: ref/intent-check-home-services.md — «carpet cleaning seo» vs
// «cleaning company seo» 0 of 10 shared URLs (carpet SERP: seobrothers,
// mainstreetroi, servgrow, webfx; cleaning SERP: zenmaid, youraspire) → own
// page; /cleaning-company-website linked once as the page for general
// cleaning companies.
// Angles: carpet, upholstery, area rugs, tile and grout, pet odor, price per
// room, before/after, service area, seasons and repeat bookings, franchises
// (Chem-Dry, Stanley Steemer, Zerorez) as competitors.
// NOT on this page: house cleaning, maid and janitorial services
// (/cleaning-company-website); flood water extraction and drying
// (/restoration-seo, linked once); website builds; paid ads management.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const carpetCleaningSeoEn = {
  lang: "en",
  group: "carpet-cleaning-seo",
  slug: "carpet-cleaning-seo",
  title: "Carpet cleaning SEO",
  heading: "Carpet Cleaning SEO",
  excerpt:
    "I do carpet cleaning SEO for owner-operators and small carpet cleaning companies: pages for carpet, upholstery, area rugs, tile and grout and pet odor jobs, clear price pages, before-and-after galleries and a Google profile that brings bookings.",
  seo: {
    metaTitle: "SEO for Carpet and Upholstery Cleaners | Bandziuk",
    metaDescription:
      "SEO for carpet cleaning companies: carpet, rug, upholstery and pet odor pages, price per room, Google Maps and AI answers, measured in bookings. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Carpet, rugs, upholstery", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Carpet cleaning near me", "Pet odor treatment", "Price per room", "Book a time"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Carpet cleaning SEO audit: website, Google Business Profile and competitors", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off carpet cleaning SEO work: service, price and gallery pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a carpet cleaning company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with carpet cleaning SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for carpet, rug and upholstery jobs", text: "By town, with what each search is worth to you" },
        { _key: k("o"), iconName: "layers", title: "A page for each cleaning service", text: "Carpet, upholstery, area rugs, tile and grout, pet odor" },
        { _key: k("o"), iconName: "file-text", title: "Price pages customers trust", text: "Per room, per seat, per square foot, add-ons named" },
        { _key: k("o"), iconName: "image", title: "Before-and-after galleries with text", text: "Stain, fabric and town written next to each job" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for a service-area business", text: "Categories, towns, job photos and reviews" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Methods, drying times and prices assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Carpet cleaning SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a carpet cleaning company", value: "from 800 € / month", note: "pages, galleries, map, reviews", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service businesses that live on calls and the map",
      subtitle:
        "Three Warsaw service businesses that get their work from phone calls, Google Maps and service pages — an auto repair shop, a wheel-renovation workshop and a tyre-storage business — plus a Warsaw renovation company and a psychotherapy practice in Milan whose new pages already appear in ChatGPT answers. A carpet cleaner needs the same base: a page per service, a strong map listing and bookings you can trace to search.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your carpet cleaning business",
      subtitle: "Within one business day I send what I would change first on your site and map listing, with a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which work do you want more of?", options: ["Carpet cleaning", "Upholstery and mattresses", "Area rugs", "Tile, grout and commercial"] },
        { _key: k("z"), question: "Where do most bookings come from now?", options: ["Repeat customers and referrals", "Mailers and coupon deals", "Local Services Ads or Angi", "Google search and Maps"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do carpet cleaning SEO for owner-operators and small carpet cleaning companies: pages for each kind of job, a Google profile that wins the map, and prices and photos that make a homeowner book. Carpet cleaning is a small-ticket service that people buy again, so search has two jobs here. It has to bring the first booking at a fair price, and it has to make sure the same customer finds you again next year instead of a coupon from someone else."),

        h2("Carpet cleaning SEO is a different search from house cleaning SEO"),
        p("Someone who types “carpet cleaning near me” or “couch cleaning” wants a van with a wand and a specific stain gone, not a weekly maid. Google treats these as separate markets: the results for carpet cleaning SEO and for cleaning company SEO share almost no pages. The competitors are different too — Chem-Dry, Stanley Steemer and Zerorez franchises, local truck-mount operators and lead platforms — and so are the words customers use: hot water extraction, low-moisture, drying time, pet urine, rug pickup."),
        p(
          "That is why a carpet cleaning business needs its own page structure and its own keywords. Maid services and janitorial firms have different needs, described on the ",
          link("cleaning company website", "/cleaning-company-website"),
          " page.",
        ),

        h2("Carpet cleaning SEO keywords: how homeowners search for each job"),
        p("Before anything is written I pull search data for your services and towns. In carpet cleaning, searches split by what is dirty and why:"),
        li("carpet — “carpet cleaning near me”, “steam carpet cleaning”, “carpet cleaning cost per room”"),
        li("upholstery — “couch cleaning”, “sectional cleaning”, “mattress cleaning”"),
        li("rugs — “area rug cleaning”, “oriental rug cleaning”, “wool rug cleaning near me”"),
        li("hard surfaces — “tile and grout cleaning”, “grout sealing”"),
        li("problems — “pet urine smell in carpet”, “red wine stain on carpet”, “carpet smells after cleaning”"),
        li("commercial — “office carpet cleaning”, “carpet cleaning for rental properties”"),
        p("The data shows which of these bring up the map, which bring up franchise sites and which already get an AI Overview. That decides what gets built first: usually the service that earns you the most per visit where local competition is weakest."),

        h2("Service pages for carpet, upholstery, area rug and tile and grout cleaning"),
        p("A single “Services” page that lists everything loses each of these searches to a more specific page. Each service gets its own page that answers what that customer worries about:"),
        li("carpet cleaning — your method (truck-mount hot water extraction or low-moisture), drying time, whether furniture is moved, protector"),
        li("upholstery cleaning — fabric codes, microfiber and leather, sectionals, dining chairs, mattresses"),
        li("area rug cleaning — in-plant washing for wool, silk and hand-knotted rugs, pickup and delivery, fringe repair"),
        li("tile and grout cleaning — kitchens, bathrooms, showers, color sealing"),
        p("Rug cleaning deserves extra attention if you run a rug plant. Rug owners search further from home, accept pickup and pay more per item than wall-to-wall customers, so one well-built rug page can reach well beyond your van routes. Commercial work — offices, short-term rentals, property managers between tenants — gets its own page too, because those buyers ask about scheduling, invoicing and insurance rather than stains."),

        h2("Pet odor and stain removal pages in SEO for carpet cleaning"),
        p("Pet urine is one of the most searched carpet problems and one of the better-paid jobs, because it needs more than a standard clean: finding spots with a UV light, treating the pad, sometimes replacing a section. Homeowners search in their own words — “dog pee smell won’t go away”, “cat urine in carpet” — and want to know whether it can be fixed before they pay for a visit."),
        p("A pet odor page says what you can remove and what you cannot, when the pad or subfloor is involved, and what the treatment adds to the bill. The same goes for stains: coffee, wine, rust, and bleach spots, which are color loss rather than a stain. Pages that are clear about limits bring fewer disappointed customers and rank for the long questions people type."),

        h2("Carpet cleaning prices per room: price pages that rank and build trust"),
        p("“Carpet cleaning cost per room” and “how much to clean a couch” are common searches, and AI Overviews answer them with national averages when your site gives nothing better. Customers have also learned to distrust low per-room offers that grow at the door with pre-treatment, deodorizer and heavy-soil fees."),
        p("A clear price page works against both problems: what counts as a room, the minimum charge, the price per sectional seat, per square foot for rugs, and which add-ons cost extra and when. Exact numbers are optional if your prices change; ranges and the rules behind them are enough for search, for assistants and for the customer."),

        h2("Before-and-after photos and Google reviews for carpet cleaning companies"),
        p("Carpet cleaning is one of the few services where the result fits in one photo. A gallery that ranks has pairs taken from the same angle, each with a line on what it was — “pet stains on a beige berber carpet in [town]”, “red wine on a cream sofa”. Untitled photos in a slider give Google nothing to read."),
        p("Reviews matter as much, since customers let a stranger into their living room. Ask the day after the job, when the carpet is dry and looks its best, with a direct link to your Google profile. Reviews that name the service and the problem — a rug, a sofa, pet odor — help on the map more than “great job”."),

        h2("Local SEO for carpet cleaning: Google Business Profile and service-area pages"),
        p("Most carpet cleaners work from a van and do not receive customers, so the profile is set up as a service-area business: address hidden, real towns listed, “Carpet cleaning service” as the primary category and upholstery or rug cleaning as secondary ones where Google offers them. A rug plant where customers drop off rugs can be shown with its own address. Weekly job photos and answers to common questions keep the profile active."),
        p(
          "Town pages make sense where you have jobs and reviews to show; a page per suburb with only the name changed is filtered out. The map side of the work is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Seasonal demand and repeat bookings in carpet cleaning SEO"),
        p("Searches rise in spring, before Thanksgiving and the winter holidays, and around move-out dates, when tenants need a receipt for the deposit. Pages for those moments — move-out carpet cleaning, holiday booking, spring cleaning — go live a couple of months ahead, because new pages need time to rank."),
        p("The larger opportunity is the second booking. Families with pets and children clean carpets regularly, and some carpet warranties ask for professional cleaning at set intervals. A maintenance plan page, booking reminders and a profile that is easy to find by name keep last year’s customers from searching again and choosing someone else."),

        h2("Carpet cleaning advertising vs SEO: mailers, coupon deals, Local Services Ads and lead platforms"),
        p("Carpet cleaning advertising usually means some mix of these:"),
        li("door hangers, postcards and coupon mailers in the neighborhoods you serve"),
        li("deal sites, where a low price brings volume but rarely loyal customers"),
        li("Google Local Services Ads, paid per lead, with the Google Guaranteed badge"),
        li("Angi, Thumbtack and similar platforms, where one request reaches several companies"),
        p("Each of them brings bookings while you keep paying. SEO costs work up front and then brings people who chose you by your pages, photos and reviews, without a fee per job. My part is the search side: the site, the profile and the pages your ads point to, so paid and unpaid visitors land on the same strong pages."),

        h2("AI SEO for carpet cleaners: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Homeowners now type questions into ChatGPT, Perplexity or Google’s AI Overviews: “is steam cleaning or dry cleaning better for carpet”, “can pet urine be removed from carpet” or “who cleans area rugs near me”. Assistants build those answers from pages they can read and listings they can cross-check. Work on being named in those answers goes by two labels, generative engine optimization (GEO) and answer engine optimization (AEO). For a carpet cleaner it comes down to:"),
        li("your method, drying time and the products you use written as plain sentences"),
        li("price rules and add-ons stated in text, not only in an image or a PDF"),
        li("structured data naming the business, each cleaning service and the towns you cover"),
        li("the same name, phone number and service area on Google, Yelp, Nextdoor and your site"),
        p(
          "Before I start and once the pages are live, I ask the assistants about your business and compare the answers. The method is explained on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much carpet cleaning SEO services cost"),
        li("Carpet cleaning SEO audit of the website, the Google Business Profile and local competitors: from 250 €, one-off, with fixes ordered by impact."),
        li("Single tasks — a rug or pet odor page, a price page, a gallery, fixing the Google profile, structured data: 250–700 € each."),
        li("Monthly carpet cleaning SEO — new pages and galleries every month, the map and reviews, AI answers and a booking report: from 800 € per month, and from 1,300 € per month where franchises and big-city competitors crowd the results."),
        p(
          "For a one- or two-van business the audit and a set of service pages often cover most of what is needed; monthly work pays off when you compete with franchises in a large city or want to grow rug or commercial work. How I run ongoing work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page. If your company also dries out flooded homes, that is a separate market covered on the ",
          link("restoration SEO", "/restoration-seo"),
          " page. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Carpet cleaning SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a carpet cleaning business?", "The audit of your website and Google profile is from 250 € one-off, single pieces of work cost 250–700 €, and monthly SEO starts at 800 € per month, or 1,300 € in very competitive cities. Tell me your services and towns and I will name a fixed price."],
          ["How long before carpet cleaning SEO brings bookings?", "Fixes to the Google profile and existing pages can show in a few weeks. New service and town pages usually need two to four months, so seasonal pages should be started well before spring or the holidays."],
          ["Is SEO better than coupon mailers or Local Services Ads for carpet cleaners?", "They work differently. Mailers and Local Services Ads bring bookings as long as you pay for each round or each lead. SEO takes months to build and then brings customers without a fee per job. Many carpet cleaners keep one paid channel and use SEO to need it less."],
          ["Should a carpet cleaner publish prices online?", "Yes, at least ranges and the rules: what counts as a room, the minimum charge, which add-ons cost extra. People search for prices, AI answers quote them, and a clear price page avoids arguments at the door."],
          ["Can a local carpet cleaner compete with Chem-Dry or Stanley Steemer in search?", "On the map, yes: each franchise location competes like any local business, on reviews, distance and how complete the profile is. On the website, specific pages about rugs, pet odor or your towns often beat a franchise’s general pages for those searches."],
          ["Can ChatGPT write the content for my carpet cleaning website?", "It can help with drafts. It does not know your method, your equipment, your prices or the jobs you have done, and pages without those details rarely rank or convince anyone to book."],
          ["Can you do carpet cleaning SEO for a US company from Poland?", "Yes. All of it is done online and in English. I work in Central European Time, so my afternoon and evening fall on your morning and midday — a call fits between the first jobs of the day. Invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order carpet cleaning SEO: what to send me"),
        p(
          "Tell me the business name, paste the website and Google Maps links, and list the jobs you want more of — carpets, upholstery, rugs, tile and grout, pet treatments or commercial jobs — the towns you cover and whether you run a rug plant. Add how you take bookings now: phone, online booking or software such as Jobber or Housecall Pro. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
