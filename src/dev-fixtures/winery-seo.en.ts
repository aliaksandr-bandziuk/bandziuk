// Landing page fixture: Winery SEO (EN), group «winery-seo». New page.
// Semantic core: ref/creative-leisure.md, wineries group (US): winery seo 70
// (H1, metaTitle, several H2, cost H2, FAQ) · winery seo near me 90 (mixed
// SERP — Google Maps H2 and FAQ on «wineries near me») · best winery websites
// 140, winery website design 40, best winery website design 10 → sibling
// /winery-website-design, linked from the cost H2.
// Intent: ref/intent-check-creative-leisure.md — «winery seo» vs «winery
// website design» 0 of 10 shared URLs, 0 shared domains, AI Overview on both →
// separate pages. SEO SERP = winery marketing agencies (slamdot, hwy29creative,
// lunabeanmedia, autusdigital, amwebinsights), Corksy (winery software),
// revenuebase.ai → the searcher is a winery owner or marketing manager.
// Angles: how wine tourists search (region, experience, events, the wine),
// tasting room experience pages, wine tourism and itinerary pages, Google Maps
// with tasting room hours and reviews, event and wedding venue pages, wine
// club pages as landing pages for comparison searches, wine and vintage pages
// (sold-out vintages kept), alcohol advertising, shipping and age gate only in
// general terms, seasonality, reservation platforms (Tock, Resy, Commerce7 —
// general) and agencies, AI answers.
// NOT on this page: design and build — reservation flow, club sign-up, shop,
// age gate design, photography, language versions (/winery-website-design —
// sibling); map work in depth (/services/local-seo-services); lodging SEO for
// estates with rooms (/hotel-seo — neighbour, linked once); ads.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings; alcohol
// rules only in general terms («check local rules»).
import { p, h2, li, link, k } from "./pt";

export const winerySeoEn = {
  lang: "en",
  group: "winery-seo",
  slug: "winery-seo",
  title: "Winery SEO",
  heading: "Winery SEO for Tasting Rooms and Wine Tourism",
  excerpt:
    "I do winery SEO: experience pages that rank for tasting-room and wine-tourism searches, a Google Maps listing with correct hours and fresh reviews, event, wedding and wine club pages, and a place in ChatGPT and AI Overview answers, measured in reservations rather than rankings.",
  seo: {
    metaTitle: "SEO for Wineries: Tasting Room Searches | Bandziuk",
    metaDescription:
      "Winery SEO: tasting-room and wine-tourism searches, Google Maps, event and wine club pages, AI answers, reported in reservations. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Tastings, events, wine club", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Wineries near me open now", "Private tasting for 6", "Harvest party tickets", "Directions · Reserve"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Winery SEO audit: website, Google Business Profile and competing wineries in your region", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off winery SEO work: tasting experience, event, wine club and wine pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a winery", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with winery SEO",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for your wine region", text: "Day trips, tastings, venues and your labels" },
        { _key: k("o"), iconName: "layers", title: "A page for each tasting experience", text: "Wines poured, price, group size, dogs, kids" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps listing that sends visits", text: "Seasonal hours, reservation link, reviews" },
        { _key: k("o"), iconName: "file-text", title: "Event, wedding and wine club pages", text: "Permanent URLs that gain strength every season" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Experiences and policies written as plain text" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in reservations and sign-ups", text: "Tastings, club members and event inquiries" },
      ],
      prices: [
        { _key: k("r"), label: "Audit of the winery site and map listing", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a winery", value: "from 800 € / month", note: "experience pages, map, events, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites I have built and optimized for search",
      subtitle:
        "Two of these sites speak to visitors from abroad: Cyprus VIP Estates, a five-language property platform I built and still optimize every month, and an education agency site covering ten countries. A Warsaw auto repair shop depends on Google Maps and phone calls, as a tasting room depends on the map and the reservation button. ScanM2, which does 3D laser scanning and BIM, moved off a no-code builder that had brought no leads in two years and now sees 29 times the organic traffic. Pages on the Milan psychotherapist’s site are quoted in ChatGPT answers. For a winery the same parts add up: pages that answer pre-trip searches, a listing travelers trust on the map, and a mention when someone asks an assistant.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your winery",
      subtitle: "Within one business day you get the first three things I would change on your site and map listing, plus a fixed price.",
      contextLabel: "Winery name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What should search bring you more of?", options: ["Tasting room visits", "Wine club members", "Weddings and private events", "Online wine orders"] },
        { _key: k("z"), question: "How do guests book tastings now?", options: ["Tock, Resy or Commerce7", "Our own form or phone", "Mostly walk-ins", "Through tour companies"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do winery SEO: the work that puts your tasting room, events and wines in front of people planning a day in wine country — in Google results, on Maps and in AI answers. A winery visit is usually planned ahead: a weekend away, a birthday, a bachelorette party, a client outing. The search starts days or weeks before anyone parks by your tasting room. I work alone and build websites myself, so whoever spots a slow page or broken markup on your site is also the one who repairs it."),

        h2("Winery SEO keywords: how wine tourists search before a trip"),
        p("Few people search for a winery by name until someone has told them about it. Before I write anything I collect search data for your region and your experiences, and the phrases fall into four groups:"),
        li("region — “wineries in Paso Robles”, “best Finger Lakes wineries for groups”, “wine tasting day trip from Austin”"),
        li("experience — “winery with food”, “dog-friendly winery”, “private tasting”, “vineyard tour and tasting”"),
        li("events and venues — “vineyard wedding venue”, “winery live music this weekend”, “harvest festival”"),
        li("the wine itself — “[your winery] pinot noir”, “where to buy [label]”, “[region] wines to try”"),
        p("Region searches bring people who have not chosen a winery yet; experience and event searches bring people close to booking; wine searches bring people who already know you. The data shows where competition in your region is weakest, and that is where the work starts."),

        h2("Tasting room SEO: experience pages that turn searches into reservations"),
        p("Many winery sites put every tasting on one “Visit” page with a reservation widget. That page cannot rank for a private cave tour and a picnic tasting at the same time, and the widget alone tells search engines almost nothing. Each experience you sell gets its own page that states:"),
        li("what is poured and how many wines, how long it lasts and the price per person"),
        li("food, seating — indoors, on the terrace, among the vines — and group size limits"),
        li("reservation policy, walk-ins, cancellation and minimum age"),
        li("kids, dogs, accessibility and the walk from parking to the tasting room"),
        p("These are the details people check before they book. A page that answers them gets the reservation; a page that leaves visitors guessing sends them to the next winery on the list. Group and corporate tastings deserve a page of their own: planners search with other words and book larger tables."),

        h2("Wine tourism SEO: region, itinerary and getting-here pages"),
        p("Wine tourists plan by region first. They search how to spend a day in a valley, where to stay and how to get between wineries without driving. A winery that answers those questions on its own site meets them before they have a shortlist. Useful pages: a one-day itinerary that includes your tasting room and the neighbors you are happy to recommend, directions from the nearest city and airport, ride and shuttle options, and the best months to visit. The aim is a page a visitor bookmarks, not a block of keywords around your name."),
        p(
          "Estates with guest rooms or a cottage also compete in lodging searches, which follow their own rules; that side is covered on the ",
          link("hotel SEO", "/hotel-seo"),
          " page.",
        ),

        h2("Google Maps for wineries: Business Profile, tasting room hours and reviews"),
        p("For “wineries near me” and “wine tasting near me” the map decides most visits, and travelers often check it from the car. A winery profile needs:"),
        li("“Winery” as the primary category, with secondary categories only for what you really run — a wine bar, a restaurant, an event venue"),
        li("tasting room hours including seasonal and holiday changes, so nobody drives out to a closed gate"),
        li("a reservation link that opens your booking page, and attributes such as outdoor seating or dogs allowed"),
        li("new photos every few weeks: the tasting room, the vines through the seasons, events — not only bottles"),
        li("a review request after each visit that asks guests to mention the experience they booked"),
        p(
          "If your tasting room is in town and the vineyard is elsewhere, each place that receives visitors needs its own accurate listing. The full routine for map listings is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Winery event SEO: weddings, concerts, harvest and release parties"),
        p("Events bring people who would never search for a tasting. Each recurring event gets a permanent page — harvest party, summer concert series, release weekend — updated with new dates every year instead of a new page each time. A page that has gathered links and visits over several seasons ranks far better than one created three weeks before the date. Event structured data gives Google the date, place and ticket link."),
        p("Weddings and private events are a separate market with long research. Couples and planners search “vineyard wedding venue” with your region and compare capacity, season, rain plans, catering rules, nearby lodging and price ranges. A venue page that answers those questions and shows real weddings at your estate brings inquiries far larger than any tasting reservation."),

        h2("Wine club pages in winery SEO: reaching people ready to join"),
        p("Many people join a wine club at the tasting bar, but many go home and search first: “[winery] wine club”, “best wine clubs in [region]”, “is a wine club worth it”. If your club page is a sign-up form without text, review sites and comparison articles answer those questions instead of you. A club page that ranks states the tiers, bottles per shipment and how often, member discounts and tasting privileges, pickup parties and how to pause or cancel. Member-only pages stay out of search; the public page carries the facts."),

        h2("Wine and vintage pages in winery SEO: your labels and where to buy them"),
        p("After a glass at a restaurant or a bottle at a friend’s house, people search the wine’s name. A page for each current wine — varietal, vintage, vineyard, tasting notes, food pairing, awards with year and competition, price — catches that search. When a vintage sells out, its page stays up, marked sold out with a link to the next release, instead of turning into a 404 that throws away what it had earned. Where you cannot ship, the page names the stores and restaurants that pour the wine."),

        h2("Alcohol advertising rules, shipping limits and age checks in winery SEO"),
        p("Wine content follows rules that most local businesses never face. Advertising standards, health wording, direct shipping and age requirements differ by state and by country, and they change. SEO pages describe wines, places and experiences rather than drinking, avoid health claims and say plainly where you ship. If the site uses an age gate, search engines and AI assistants still have to reach the text behind it. Check the rules that apply to you with your compliance adviser; this is general information, not legal advice."),

        h2("Seasonal winery SEO: harvest, holidays and the quiet months"),
        p("Visits follow a calendar: spring openings, summer weekends, harvest in late summer and fall, holiday gift buying and a quiet winter in most regions. A page needs weeks to rank, so harvest and holiday pages go live a couple of months ahead. The quiet months are for rewriting experience pages, adding new photos and reworking the club page before the spring rush."),

        h2("Winery SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Travelers now ask ChatGPT, Perplexity or Google’s AI Overviews questions such as “which wineries near Napa take groups of twelve”, “dog-friendly wineries in the Willamette Valley” or “where can I do a cave tour with food pairing”. Assistants build those answers from pages they can read and check against other sources. The industry calls this work GEO, generative engine optimization, or AEO, answer engine optimization. On a winery site the work is concrete:"),
        li("experiences, prices, group limits and policies on dogs and kids written as plain sentences, not only inside a booking widget"),
        li("structured data for the winery, its tasting room, events and wines"),
        li("the same name, address and hours on Google, Yelp, TripAdvisor, your reservation platform and regional wine trail sites"),
        li("answers to common visitor questions on your own pages, signed by the winemaker or the owner"),
        p(
          "I save what assistants say about your winery at the start and compare it later with what they say after the changes, including which neighbors they suggest. More on the method: ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Reservation platforms, wine trails and winery marketing agencies: where SEO fits"),
        p("Reservation platforms such as Tock, Resy or Commerce7 have discovery pages of their own, regional wine associations list member wineries, and tour companies sell your tasting as part of a day trip. They all bring visitors, and they all keep part of the relationship. Your own site and profile are where a guest comes straight to you and can join your list. Winery marketing agencies often bundle SEO with social media, email and ads. Whoever you hire, ask whether reports show reservations, club sign-ups and event inquiries rather than rankings alone, and keep the website, domain and Google profile in your name."),

        h2("How much winery SEO costs"),
        li("Audit of your winery site, map listing and the wineries that outrank you: from 250 €, paid once, with a ranked list of fixes."),
        li("Single projects such as experience, event, wine club or wine pages, a profile overhaul or structured data: 250–700 €."),
        li("Ongoing winery SEO with new pages, map and review work, event updates, AI checks and a monthly report in reservations: from 800 € per month."),
        p(
          "When the site is too old to fix, start with ",
          link("winery website design", "/winery-website-design"),
          ". How a monthly SEO engagement runs is explained under ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ", and the full price list is on ",
          link("pricing", "/pricing"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Winery SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a winery cost?", "An audit is from 250 €, single projects run 250–700 €, and monthly work starts at 800 €. Once I know your region, what you offer guests and where they find you today, you get one fixed figure."],
          ["How long does winery SEO take to bring more visitors?", "A cleaned-up listing and steady reviews often move you on the map in a few weeks. New experience and event pages tend to take three to five months to reach page one, more in crowded regions such as Napa or Sonoma, so harvest and holiday pages go live well before their dates."],
          ["How do I get my winery to show up for “wineries near me”?", "Those results come mostly from the map. Use “Winery” as the primary category, keep tasting room hours accurate, add a reservation link and fresh photos, and ask every guest for a review. Pages on your site that name your town and region support the listing."],
          ["Should a winery publish tasting prices on its website?", "Yes. Price per person, what is poured and whether the fee is waived with a purchase are among the first things visitors check. A winery that hides them loses the comparison to one that shows them, and assistants have no figure to quote."],
          ["Can ChatGPT recommend my winery to travelers?", "Yes, when someone asks for wineries in your area. It names the ones it can find clear facts about: experiences, prices, policies, hours and reviews. Nobody can promise a mention; clear facts raise the odds, and I record the answers before the changes and again afterwards."],
          ["Should old event pages and sold-out wine pages be deleted?", "Usually not. A recurring event keeps one page and gets new dates each year; a sold-out vintage keeps its page with a link to the current release. Deleting them throws away links and search history built over seasons."],
          ["Can you handle SEO for a winery in California or Oregon from Warsaw?", "Yes. We work online, in English. When it is mid-afternoon or evening here, it is morning in California and midday in New York, so we can talk before the tasting room fills up. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your winery: what to send me"),
        p(
          "Send your winery name, website and Google Maps links, the experiences you sell, your events and club, the reservation system you use and what you want more of — tastings, club members, weddings or online orders. You get back a short list of first fixes and one fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
