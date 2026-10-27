// Landing page fixture: Cafe SEO (EN), group «cafe-seo». New page.
// Semantic core: ref/food-developer.md, cafe group (US): cafe seo 10, seo for
// cafe 10, seo cafe 10 (one demand — H1, metaTitle, several H2, FAQ). The
// other «cafe seo» suggestions are Korean drama titles (cafe minamdang, seo in
// guk) — ignored. Guests’ searches «coffee near me», «cafe near me» are used
// only as examples of what the map pack answers.
// Intent: ref/intent-check-food-developer.md — «cafe seo» vs «restaurant seo»
// 1 of 10 shared URLs (one Reddit thread), 2 shared domains → own page. SERP =
// cafe-marketing sites (coffeemarketingschool, thecafespecialists), restaurant
// software (restroworks), small agencies → the searcher is a cafe owner.
// ref/intent-check-food.md — «cafe website» vs «coffee shop website» 0 of 10
// shared URLs (coffee-shop SERP = guests) → coffee shop SEO is one H2 here.
// Angles: walking-radius map pack (pin, opening time, «open now»), Cafe vs
// Coffee shop category, menu items in the profile, reason-to-visit pages
// (brunch, laptop-friendly, vegan, dog-friendly), coffee shop SEO (beans,
// roaster, wholesale), events (Event markup, city calendars), reviews from
// regulars, several locations (different hours and seating, moves and
// closures), delivery apps vs own pickup ordering, AI answers, reporting.
// NOT on this page: the website build — menu layout, ordering, bean shop
// checkout, loyalty, speed (/cafe-website — sibling, linked once); restaurant
// arguments — text menu vs PDF, cuisine and dish keywords, booking portals,
// agency vs specialist, DIY tips (/restaurant-seo — linked once); map work in
// depth (/services/local-seo-services); social media management and ads.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; restaurants under NDA are
// mentioned once, positively, without detail; no guaranteed rankings.
import { p, h2, li, link, k } from "./pt";

export const cafeSeoEn = {
  lang: "en",
  group: "cafe-seo",
  slug: "cafe-seo",
  title: "Cafe SEO",
  heading: "Cafe SEO for Independent Cafes and Coffee Shops",
  excerpt:
    "I do cafe SEO for independent cafes and coffee shops: the map pack for “coffee near me” within walking distance, pages for brunch, laptop work, vegan and dog-friendly visits, coffee bean and event pages, reviews from regulars and a place in AI answers, measured in direction requests, calls and pickup orders.",
  seo: {
    metaTitle: "SEO for Cafes: Map Pack, Brunch Pages and AI | Bandziuk",
    metaDescription:
      "Cafe SEO for coffee shops and cafes: “coffee near me” on the map, brunch and laptop-friendly pages, beans and events, reviews and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Map pack, brunch, beans, events", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Coffee near me · Open 7 a.m.", "Laptop-friendly cafe", "Weekend brunch", "Directions · Order pickup"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Cafe SEO audit: Google Business Profile, website, cafes within walking distance and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off cafe SEO work: brunch, laptop, vegan, bean and event pages, profile clean-up, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a cafe or coffee shop", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with cafe SEO",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Map pack within walking distance", text: "Pin, opening time, category and first photos" },
        { _key: k("o"), iconName: "layers", title: "Pages for brunch, laptops, vegan, dogs", text: "Only for what is true at your cafe" },
        { _key: k("o"), iconName: "file-text", title: "Coffee, bean and event pages", text: "Roaster, origins, cuppings, latte art classes" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews from your regulars", text: "Specific words that match the next search" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Wi-Fi, hours and menu facts as plain text" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in directions, calls, pickups", text: "By day, hour and location" },
      ],
      prices: [
        { _key: k("r"), label: "Cafe SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a cafe or coffee shop", value: "from 800 € / month", note: "map, pages, reviews, AI, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Local SEO portfolio: small businesses people find nearby on a phone",
      subtitle:
        "What these projects share with a cafe: people find them close by, on a phone, and decide in seconds from the map and a few facts. A Warsaw auto repair shop now competes in the same kind of map pack as a cafe, after I took on its local SEO, Maps listing and service pages. A Warsaw tyre-storage business runs on one page whose SEO texts the owner edits himself, the way a cafe owner changes hours and specials. Felgilab, a wheel-renovation workshop, got clear service and price pages on a rebuilt WordPress site. A psychotherapist’s site in Milan has location pages and already appears in ChatGPT answers, and ScanM2, a 3D laser scanning company, grew its organic traffic 29-fold after its WordPress rebuild. I have built websites for restaurants whose owners asked me not to show them publicly.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your cafe",
      subtitle: "Within one business day you get what I would fix first — the map listing, specialty pages or bean pages — and a fixed price.",
      contextLabel: "Cafe name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of cafe do you run?", options: ["Specialty coffee shop", "Brunch or all-day cafe", "Cafe with a bakery counter", "Two or more locations"] },
        { _key: k("z"), question: "How do first-time guests find you today?", options: ["Google Maps", "Instagram", "Uber Eats or DoorDash", "Walking past the window"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Cafe SEO is the work that makes your cafe or coffee shop the one people find when they search for coffee near me, a quiet place to work with a laptop or weekend brunch nearby — on Google Maps, in the regular results and in AI assistants. I do it myself, from the first audit to the last fix in the code, for independent cafes, specialty coffee shops and small groups of two or three locations. A cafe lives on frequent, small visits, so the goal is to be the obvious choice on someone’s way to work."),

        h2("Cafe SEO keywords: coffee near me, brunch, laptop-friendly and specialty coffee"),
        p("Cafe searches are short and practical. When I pull search data for your street and city, they usually fall into four groups:"),
        li("right now — “coffee near me”, “cafe open now”, “coffee shop open early”, “coffee near [station or campus]”"),
        li("a reason to stay — “cafe to work with a laptop”, “quiet cafe for studying”, “dog-friendly cafe”, “cafe with a garden”"),
        li("food and diet — “brunch near me”, “vegan pastries”, “oat milk latte”, “gluten-free breakfast”"),
        li("the coffee itself — “specialty coffee [city]”, “pour over coffee”, “local coffee roaster”, “buy coffee beans near me”"),
        p("The first group is decided on the map; the others need pages on your site. A cafe with only a home page competes in the first group alone."),

        h2("“Coffee near me” and the map pack: how a cafe competes within a few blocks"),
        p("Someone looking for dinner may drive across town; someone looking for coffee usually walks. The map pack for “coffee near me” changes from one street corner to the next, so your real competitors are the four or five places within a short walk, not every cafe in the city. Small details decide more than they seem:"),
        li("the pin — a cafe inside an office building, a station or a courtyard needs the pin on the entrance and walking directions in the description"),
        li("the opening time — morning searches start before seven, and a profile that says 8:00 when you open at 7:00 drops out of the “open now” filter in your busiest hour"),
        li("the name — your real sign, without extra keywords added to it, which breaks Google’s guidelines and can get the listing suspended"),
        li("the first photos — the counter, the drinks and the seats, so a person deciding in ten seconds sees what kind of place it is"),

        h2("Google Business Profile for a cafe: Cafe or Coffee shop category, menu items and attributes"),
        p("Google offers both “Cafe” and “Coffee shop” as categories, plus narrower ones such as “Espresso bar” and “Brunch restaurant”. The primary category should match why most guests come: a place where people sit down for food and coffee is usually a cafe, a counter where most orders leave in a cup is usually a coffee shop. The rest of the profile works as a short version of your menu board:"),
        li("menu items filled in by name and price, so a search for “cortado” or “matcha latte” nearby can match your cafe"),
        li("the attributes Google offers for Wi-Fi, seating, outdoor tables, pets and accessibility, set to match what is really there"),
        li("posts for the seasonal drink, a new pastry or a change in hours, which keep the listing active between reviews"),
        p(
          "Map work in more depth — citations, Apple Maps, Yelp and other directories — is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Specialty pages for a cafe: brunch, laptop-friendly, vegan and dog-friendly"),
        p("People choose a cafe for a reason, and the reason is what they type. A page for each reason that holds for your place answers the search better than a line on the home page, and each one lives on facts a guest can check:"),
        li("brunch — the days and hours it runs, whether you take reservations, how long the weekend wait usually is, which dishes sell out first"),
        li("laptop-friendly — Wi-Fi, how many seats have outlets, whether there are laptop-free hours on weekends, where the quiet corner is"),
        li("vegan and plant-based — which milks you offer and whether they cost extra, which pastries are vegan and how they are kept apart"),
        li("dog-friendly — inside or on the terrace only, water bowls, house rules for busy hours"),
        p("Write a page only for what you want more of. A cafe that wants fewer all-day laptop guests at lunch should skip the laptop page; that is a business choice, not an SEO one."),

        h2("Coffee shop SEO: pages for beans, roasting and specialty coffee"),
        p("For a coffee shop that roasts its own beans or works with a named roaster, the coffee is a second product with its own searches: “local coffee roaster”, “buy coffee beans [city]”, “Ethiopian single origin beans”, “coffee subscription”. These buyers compare roast dates, origins and brew methods, so the pages that rank for them read the way a good barista talks:"),
        li("a page for each coffee on offer: origin, farm or cooperative, process, tasting notes, how fresh the roast is and how to brew it"),
        li("a page about the roaster or your own roasting — how often you roast and where the green coffee comes from"),
        li("a wholesale page for offices and other cafes that want to serve your beans"),
        p("Beans travel further than drinks: a guest who buys a bag takes your name home."),

        h2("Cafe events in search: latte art classes, cuppings and open mic nights"),
        p("Events give a cafe something to be found for beyond coffee: “latte art class [city]”, “coffee cupping near me”, “open mic night”, “board game evening”. Each recurring event gets its own page with the date, price, how to sign up and what happens, marked up with Event structured data so Google can show the date in results. The page keeps its address from month to month and only the dates change, so it builds history instead of starting over. City event calendars and local newsletters that list the event link back to it — some of the easiest local links a cafe can earn."),

        h2("Cafe reviews on Google: regulars, details and replies"),
        p("A cafe sees the same faces several times a week, an advantage few businesses have: regulars write the most useful reviews if someone asks them. The reviews that help are specific — the flat white, the window seat, fast Wi-Fi, a barista who remembers orders — because their words match what the next person types. Ask a regular after the tenth coffee rather than a first-time visitor at the till, with a short link or a QR code on the receipt, and never in exchange for a free drink. Reply to each review with the same specifics, including the complaint about the Saturday line."),

        h2("SEO for a cafe with several locations: hours, seating, moves and closures"),
        p("Two cafes under one name often differ more than the owner expects: the station kiosk opens at 6 and is takeaway only, the main street location has a terrace and brunch, the one in the mall follows the mall’s hours. Each location gets its own profile and its own page that says exactly that, so “[your name] near me” sends people to the one that fits, and a guest who wants a seat does not walk to a counter with no chairs. When a location moves or closes, the old profile is marked as moved or closed and its page redirects to the nearest open one, instead of a dead listing sending people to an empty shop front."),

        h2("Delivery apps vs your own cafe website: Uber Eats, DoorDash and pickup orders"),
        p("Search your cafe’s name with the word “menu” and your Uber Eats, DoorDash or Grubhub page often sits next to your own site, sometimes above it. For most cafes delivery is a small part of sales; the morning pickup order from someone on the way to work matters more. So the profile’s order button points to your own pickup ordering where you have it, your menu page is the result for your name plus “menu”, and the app listings stay an extra channel for people at home. Reports separate pickup orders started from search from app orders, so you see what each one brings."),

        h2("Cafe SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Questions such as “where can I work with a laptop in Portland on a Sunday”, “brunch near Union Square without a reservation” or “a cafe with oat milk and a quiet corner near me” now go to ChatGPT, Perplexity and Google’s AI Overviews too. The answer names a few places with a reason for each, taken from pages, listings and reviews the assistant could read. Work on those answers is called GEO (generative engine optimization) or AEO (answer engine optimization), and for a cafe it means:"),
        li("the facts guests ask about — Wi-Fi, outlets, laptop rules, brunch hours, plant milks, dogs — written as sentences on your site, not only on a photo of the menu board"),
        li("CafeOrCoffeeShop structured data with the address, hours, menu link and price range"),
        li("the same name, hours and address on Google, Apple Maps, Yelp and your site, so the assistant is not choosing between two versions"),
        li("reviews with details, because assistants quote them when they explain a choice"),
        p(
          "At the start and again a few months later I put your guests’ questions to the assistants and record which cafes they name. The method is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring cafe SEO in direction requests, calls and pickup orders"),
        p("A cafe rarely gets a form submission, so rankings alone say little. The monthly report shows direction requests and calls from the profile by day and hour, visits to the brunch, laptop and bean pages, pickup orders and bean sales that started from search, and how the morning hours compare month to month."),

        h2("How much cafe SEO costs"),
        li("Cafe SEO audit — Google Business Profile, website, cafes within walking distance and AI answers: from 250 €, one-off."),
        li("One-off work — brunch, laptop, vegan, bean or event pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a cafe or coffee shop — new pages, map work, reviews, AI visibility and reports: from 800 € per month."),
        p(
          "A single cafe in a small town often gets most of the effect from the audit and three or four pages; monthly work pays off in a dense area or with several locations. If the site itself needs rebuilding — menu, pickup ordering, a bean shop — the ",
          link("cafe website", "/cafe-website"),
          " page explains how I build one. A full-service restaurant has its own ",
          link("restaurant SEO", "/restaurant-seo"),
          " page. How ongoing work runs is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and every price is listed on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Cafe SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a cafe cost?", "An audit is from 250 €, single jobs are 250–700 €, and monthly SEO is from 800 €. Send me your address, the number of locations and what you want more of — morning regulars, brunch tables, bean sales — and I will name a fixed price."],
          ["Should my cafe be listed as “Cafe” or “Coffee shop” on Google?", "Choose the one that describes why most people come. Sit-down food and coffee usually means Cafe; mostly takeaway coffee usually means Coffee shop. The other one can be a secondary category if it is also true."],
          ["How long does it take a cafe to show up for “coffee near me”?", "Fixes to the pin, hours, category and photos can move a cafe within a few weeks, but only within walking distance — no cafe ranks across a whole city for that search. Brunch, laptop and bean pages usually need two to four months to climb."],
          ["Is a small cafe too small for SEO?", "No, but it may not need monthly work. A correct profile, a few specialty pages and the habit of asking regulars for reviews cover most of what one cafe needs. The audit shows whether more is worth paying for."],
          ["Do I need a brunch page if brunch is already on my menu?", "If people search for brunch near you, yes. A menu line does not say whether you take reservations or how long the wait is, and the page that answers those questions is the one that ranks and the one AI assistants quote."],
          ["Can ChatGPT recommend my cafe as a place to work with a laptop?", "Yes, when someone asks for one in your area and the facts are easy to read: Wi-Fi, outlets, laptop rules, hours. Nobody can promise a mention; I compare what the assistants say before the work and a few months into it."],
          ["Can you do SEO for a US cafe from Poland?", "Yes. The work is done online, in English. Between 2 and 10 p.m. in Warsaw it is 8 a.m. to 4 p.m. on the East Coast, so a call fits after your morning rush. I invoice in EUR or, by agreement, in another currency."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your cafe: what to send me"),
        p(
          "Send your cafe’s name, website and Google Maps link, the number of locations and their opening hours, what you want more of — morning regulars, brunch tables, quiet-afternoon laptop guests, bean sales — and which ordering or delivery apps you use. In reply you get the first steps I would take and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
