// Landing page fixture: SEO for tour operators (EN), group
// «seo-for-tour-operators». New page.
// Semantic core: ref/creative-leisure.md, tour operators group (US): seo for
// tour operators 70 (H1, metaTitle, several H2; the brief’s scan shows 170 with
// close variants — «tour operator seo», «tour company seo» used in H2s and
// FAQ). Supporting angles from BRIEF.md: «things to do in…» searches (H2),
// OTAs, booking software, languages, seasons, reviews, AI travel answers.
// No PAA for this group.
// Intent: ref/intent-check-creative-leisure.md — «seo for tour operators» vs
// «travel agency website» 0 of 10 shared URLs, 0 shared domains → separate
// page from /travel-agency-website (linked once as the neighbour for agencies
// reselling packages). SEO SERP: booking software blogs (Rezdy, Bókun,
// Resmark, Booking Terminal) and agencies (Beacon Point, SEOProfy, Codeless,
// Sierra Six) — content-led.
// Reader: the owner or marketer of a tour or activity company selling dated
// departures — food, kayak, whale-watching, jeep, walking, multi-day tours.
// Angles: how travelers search (destination + activity + format, planning
// questions, name after an OTA), one page per tour and destination / activity
// hubs, «things to do in…» and Google Things to do, Viator / GetYourGuide /
// Klook / Airbnb Experiences commissions (general) vs direct bookings, booking
// widgets (Rezdy, Bókun, FareHarbor — general) and speed, languages, seasons,
// reviews and Google Business Profile, AI answers, bookings as the metric.
// NOT on this page: travel agencies reselling packages
// (/travel-agency-website — neighbour, linked once); site design and build;
// hotels and B&Bs; ads; OTA listing management.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings; no
// commission percentages.
import { p, h2, li, link, k } from "./pt";

export const seoForTourOperatorsEn = {
  lang: "en",
  group: "seo-for-tour-operators",
  slug: "seo-for-tour-operators",
  title: "SEO for tour operators",
  heading: "SEO for Tour Operators and Activity Companies",
  excerpt:
    "I provide SEO for tour operators and activity companies: a page for every tour, destination and activity pages that rank for “things to do” searches, more direct bookings next to Viator and GetYourGuide, booking widgets that do not slow the site, languages, seasonal timing and a place in AI travel answers.",
  seo: {
    metaTitle: "Tour Operator SEO: Tours, OTAs and AI Search | Bandziuk",
    metaDescription:
      "SEO for tour operators: tour pages by destination and activity, things-to-do searches, direct bookings next to Viator, languages, seasons, AI. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Tour, destination and activity searches", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Sunset kayak tour, Key West", "2 hours · small group", "Reviews on Google and Tripadvisor", "Named in ChatGPT answers"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a tour operator: website, tour pages, booking widget, Google profile, reviews and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a tour company: tour page rewrites, destination and activity hubs, structured data, booking tracking", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a tour operator or activity company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for tour operators",
      items: [
        { _key: k("o"), iconName: "search", title: "The searches travelers make before booking", text: "Destination, activity, length and “things to do in…”" },
        { _key: k("o"), iconName: "layers", title: "Tour pages grouped by place and activity", text: "One page per tour, hubs that tie them together" },
        { _key: k("o"), iconName: "plug", title: "A booking widget that does not slow pages", text: "Rezdy, Bókun or FareHarbor checked for speed and tracking" },
        { _key: k("o"), iconName: "message-circle", title: "Tour pages in your guests’ languages", text: "Written for each market, linked with hreflang" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Tour facts an assistant can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in bookings, direct and OTA", text: "Each booking with the page that brought it" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit for a tour operator", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a tour company", value: "from 800 € / month", note: "tour pages, guides, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: multilingual and location-led sites I built and grew",
      subtitle:
        "For Cyprus VIP Estates I built a property site in five languages, Hebrew among them, with filters, a map and video, and I run its SEO every month. An education agency’s site covers ten countries, each with its own pages. After I moved ScanM2, a company doing 3D laser scanning and BIM, to WordPress with English, Polish and German versions, organic traffic grew 29× and leads arrive every week. For Giuseppe, a psychotherapist in Milan, I moved 468 posts to a new site with a 301 redirect from every old URL and added location pages; ChatGPT already quotes his new pages. For a Warsaw auto repair shop I worked on local search, its Google Maps listing and separate service pages. What carries over to a tour company is the method: a page for each search people really make, in their language and tied to a place, and results counted in enquiries.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your tour company",
      subtitle: "Within one business day you get the first three fixes I would make — tour pages, booking widget or destination pages — and a fixed price.",
      contextLabel: "Tour company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most bookings come from now?", options: ["Viator, GetYourGuide or other OTAs", "Our own website", "Hotels, concierges and partners", "Walk-ups and repeat guests"] },
        { _key: k("z"), question: "What do you run?", options: ["Day tours and activities in one destination", "Tours in several destinations", "Private and custom tours", "Multi-day trips"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for tour operators is the work that gets a tour company found when travelers search for things to do in your destination, for the activity they want or for your name after seeing you on Viator, and that turns those visits into bookings on your own site. I do it myself — audit, tour pages, code changes and reports — for small and mid-sized tour and activity companies, so the person who spots a problem is the one who fixes it."),

        h2("What SEO for tour operators covers: tour pages, destination searches and direct bookings"),
        p("A tour company sells dated seats in an experience nobody can try in advance. Search work covers the places where travelers make that decision:"),
        li("your website: tour pages, destination and activity pages, planning guides"),
        li("Google Search, Maps and the Things to do results for your destination"),
        li("reviews on Google and Tripadvisor, and your OTA listings"),
        li("answers in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "Agencies that resell other companies’ packages face a different search problem, described on the ",
          link("travel agency website", "/travel-agency-website"),
          " page.",
        ),

        h2("Tour operator keywords: how travelers search for tours and activities"),
        p("Few travelers type a company name first. A typical search names a destination and an activity, and grows more specific as the trip approaches:"),
        li("destination plus activity: “snorkeling tour Maui”, “food tour Charleston”, “helicopter tour Grand Canyon from Las Vegas”"),
        li("format and length: half-day, private, small group, sunset, with hotel pickup"),
        li("who it suits: kid-friendly, for seniors, wheelchair accessible"),
        li("planning questions: “best time to see whales in Monterey”, “is a swamp tour worth it”"),
        li("your company name, typed after an OTA listing or a hotel brochure"),
        p("Each phrase has modest volume, but each sits close to a booking. Tour company SEO maps these groups to pages before anything is written, so two of your tours never compete for the same search."),

        h2("Tour pages by destination and activity: the site structure that ranks"),
        p("Many tour sites list every tour on one page under a booking widget. Search engines need one page per tour, aimed at one search, and hub pages that group them:"),
        li("a page for each tour: what happens hour by hour, duration, meeting point with a map, what is included, group size, age limits, what to bring, cancellation terms and price from"),
        li("destination pages that gather your tours in one place with a short guide to the area"),
        li("activity pages that gather kayak, food or hiking tours across destinations, if you run several"),
        li("photos and short videos from real departures, described in words"),
        p("Original text matters more than length. Pasting the OTA description onto your own page gives Google two copies of the same text, and the platform usually wins."),

        h2("“Things to do in…” searches and Google Things to do for tour companies"),
        p("Searches like “things to do in Savannah” are broad, and lists from large travel sites hold the top of the results. A small operator reaches that demand in two ways. First, with planning articles for narrower versions — “things to do in Savannah with kids on a rainy day” — written from a guide’s experience and linked to the matching tour. Second, through Google’s Things to do listings, where tours appear with prices and booking links: your booking software or a connectivity partner sends your products there, and your own site can be one of the booking options next to the OTAs."),

        h2("Viator, GetYourGuide and direct bookings in tour operator SEO"),
        p("Viator, GetYourGuide, Klook and Airbnb Experiences sell tours to people who would never find a small company alone, and they take a commission on each booking. Most operators keep them. SEO works on the other side of that trade:"),
        li("travelers who saw you on an OTA often search your name before booking, and your site should be the first result, with the same tours and a clear booking button"),
        li("your own tour pages compete for searches where OTA pages are thin or generic"),
        li("reviews, guide profiles and photos on your site answer the doubts that send people back to the platform"),
        p("Reports put direct bookings from search next to OTA bookings, so you see the share move month by month."),

        h2("Tour booking software and SEO: Rezdy, Bókun, FareHarbor and page speed"),
        p("Booking software runs the calendar, payments and manifests, and few operators would work without it. Its widget can still hurt search: some load slowly, some keep the tour description inside a frame Google does not credit to your page, some send guests to another domain where tracking breaks. An audit checks:"),
        li("whether tour details are text on your page or exist only inside the widget"),
        li("how the widget affects load time and Core Web Vitals on a phone"),
        li("whether each booking is tracked back to the page and search that brought it"),
        li("whether availability and prices on the page match the system"),
        p("The fix is usually in how the widget is embedded, not in switching software."),

        h2("Multilingual SEO for tour companies with international guests"),
        p(
          "Travelers search in their own language: a German couple in Florida types in German, a family from Mexico in Spanish. Every language gets pages built on what that market types into Google, with its own titles and planning answers, tied together with hreflang. Start with the languages your guides speak on tours; a page selling a German-language tour without a German-speaking guide earns bad reviews. How I build sites in several languages is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Seasonality in SEO for tour operators: when to publish and update tour pages"),
        p("Tour searches rise weeks or months before the season: people plan summer whale watching in spring and fall foliage trips in August. The SEO calendar follows that:"),
        li("new tour pages and seasonal guides go live well before the season, so Google has time to find and rank them"),
        li("dates, prices and departure times are updated before travelers start comparing"),
        li("off-season and private tours get attention when the main season ends"),
        li("pages for paused tours stay live with the next season’s dates instead of being deleted"),
        p("Deleting a tour page each winter throws away the rankings it earned; keeping it with “next departures from May” keeps them."),

        h2("Google reviews, Tripadvisor and the Google Business Profile of a tour operator"),
        p(
          "Reviews often decide between two similar tours. Ask every group after the tour, by email or with a QR card, and reply on Google and Tripadvisor. The Google Business Profile marks where tours start — an office, a dock or a meeting point — so travelers find it on the map that morning, with the same name, phone and website as everywhere else. Map rankings and reviews in more depth are on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("SEO for tour operators in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("More travelers plan with an assistant: “plan three days in Charleston with a food tour”, “best small-group tour of Zion from Springdale”. ChatGPT, Perplexity and Google AI Overviews name a few companies and give reasons. Shaping those answers goes by two names, GEO (generative engine optimization) and AEO (answer engine optimization), and for a tour operator it comes down to:"),
        li("each tour’s facts — duration, meeting point, group size, season, languages, price from — as plain text"),
        li("planning articles that answer the question directly, with the guide or owner named as author"),
        li("the same facts on Google, Tripadvisor and OTA listings, plus a steady flow of new reviews"),
        li("TouristTrip and Organization structured data tied to those profiles"),
        p(
          "Before and after the work I check how assistants describe your company and which operators they name instead. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring tour company SEO in bookings and choosing who does it"),
        p(
          "My report counts bookings and revenue from organic search by tour page, the split between direct and OTA bookings, calls and messages from the Google profile, and rankings for your chosen searches beside those numbers. Before hiring anyone, ask who writes the tour pages, whether reports show bookings, and whether the content stays yours if you leave. I do the audit, pages, code changes and reports myself; the general approach is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page.",
        ),

        h2("How much SEO for tour operators costs"),
        li("SEO audit — website, tour pages, booking widget, Google profile, reviews and AI answers: from 250 €, one-off."),
        li("One-off work — tour page rewrites, destination and activity hubs, structured data, booking tracking: 250–700 €."),
        li("Monthly SEO for a tour company — new tour pages and seasonal guides, language versions, reviews, AI visibility and reports: from 800 € per month."),
        p(
          "A company running three tours in one town usually needs the audit and a set of well-written tour pages before any retainer. The audit is described on the ",
          link("SEO audit", "/services/seo-audit"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for tour operators: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a tour operator?", "From 250 € for a one-off audit, 250–700 € for a single piece of work such as tour page rewrites, and from 800 € a month for ongoing SEO. Tell me your destination and tours, and I will name a fixed price."],
          ["How long does tour company SEO take?", "Name searches and the Google profile can improve within weeks. Fresh tour and destination pages tend to take three to six months before bookings from them become regular, so the work starts well before the season rather than during it."],
          ["Should I stop selling on Viator and GetYourGuide?", "No. OTAs reach travelers you cannot reach alone. SEO grows the bookings you get without commission: people searching your name after seeing you on a platform, and searches where your own tour pages rank."],
          ["Does my booking software hurt my SEO?", "It can, if tour details exist only inside the widget, if it slows the page on a phone, or if bookings finish on another domain without tracking. Most of this is fixed in how the widget is embedded, without changing software."],
          ["What keywords should a tour operator target?", "A destination plus an activity — “kayak tour [town]”, “food tour [city]” — with formats like private, small group or sunset, planning questions about your area, and your own company name. Each group gets its own pages."],
          ["Do my tour pages need other languages?", "If many guests come from abroad, yes — written for each market’s searches, not machine-translated, and only for languages your guides really speak on tours."],
          ["Will ChatGPT recommend my tours?", "Nobody can promise a mention, but the odds improve when each tour’s facts are written plainly on your site, planning articles answer real questions, and the same details and fresh reviews appear on Google, Tripadvisor and OTAs. I check what assistants say about you before and after the work."],
          ["Can an SEO consultant in Poland work for a US tour operator?", "Yes. Everything happens online and in English. Central European afternoons and evenings overlap with US mornings, so a call fits before your first departure of the day. I invoice in EUR under a written contract."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for tour operators: what to send me"),
        p(
          "Send your website, links to your Google profile, Tripadvisor and OTA listings, the booking software you use, your tours and seasons, the languages your guides speak and roughly how bookings split between your site and OTAs today. My reply lists what to fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
