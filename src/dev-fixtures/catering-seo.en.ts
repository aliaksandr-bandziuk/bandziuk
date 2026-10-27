// Landing page fixture: Catering SEO (EN), group «catering-seo». New page.
// Semantic core: ref/food-venues.md, catering group (US): catering seo 70,
// seo for catering 70 (one demand — H1, metaTitle, several H2, FAQ). Customer
// phrases used as examples inside H2s and lists: corporate catering [city],
// office lunch catering, wedding catering, catering price per person.
// Intent: ref/intent-check-food-developer.md — «catering seo» vs «restaurant
// seo» 0 of 10 shared URLs, 0 shared domains → own page, not a section of
// restaurant SEO. ref/intent-check-food.md — «catering seo» vs «catering
// website» 0 of 10 (the «catering website» SERP is ezCater and caterers
// themselves = customers’ demand) → website work lives on the sibling
// /catering-website-design. SEO SERP: SEO agencies and catering-marketing
// sites (seo.ai, thedigitalcaterers.com, artemis.marketing) → the searcher is
// a caterer.
// Angles: search groups by buyer (corporate, office lunch, weddings, private
// parties, diet, cost), event-type pages, service-area and venue pages, menus
// and price per person as text (Cyprus lesson: factual copy +16%), B2B buyers,
// ezCater and marketplaces vs own inquiries, Google Business Profile for a
// service-area business, seasonal calendar (holiday parties, weddings,
// graduations), AI answers, reports in booked events, cost.
// NOT on this page: quote form, menus layout, deposits, office ordering,
// photos, templates (/catering-website-design — sibling); map work in depth
// (/services/local-seo-services); restaurant guests and dining-room search
// (/restaurant-seo — linked once); ads and social media.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings.
import { p, h2, li, link, k } from "./pt";

export const cateringSeoEn = {
  lang: "en",
  group: "catering-seo",
  slug: "catering-seo",
  title: "Catering SEO",
  heading: "SEO for Catering Companies",
  excerpt:
    "I do SEO for catering companies: event-type pages for corporate, wedding and office lunch catering, service-area and venue pages, menus and price-per-person ranges search engines can read, Google Maps and reviews, so planners send quote requests to you and not only to a marketplace.",
  seo: {
    metaTitle: "Catering SEO for Event and Office Caterers | Bandziuk",
    metaDescription:
      "Catering SEO: event-type and service-area pages, price per person, Google Maps, holiday parties and AI answers, measured in booked events. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Event-type and service-area pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Corporate catering near me", "Wedding catering menus", "Price per person shown", "Request a quote"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Catering SEO audit: website, Google Business Profile and local competitors", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off catering SEO work: event-type, service-area and menu pages, profile clean-up, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a catering company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for catering companies",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data by event type and area", text: "Corporate, office lunch, weddings — in your towns" },
        { _key: k("o"), iconName: "layers", title: "A page for each kind of event", text: "Conferences, office lunches, weddings, private parties" },
        { _key: k("o"), iconName: "map-pin", title: "Service-area and venue pages", text: "Only the towns and halls where you really cater" },
        { _key: k("o"), iconName: "file-text", title: "Menus and price-per-person ranges", text: "Written as text that search and AI can quote" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Headcounts, area and lead times as checkable facts" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in quote requests and booked events", text: "Direct inquiries next to marketplace orders" },
      ],
      prices: [
        { _key: k("r"), label: "Catering SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a catering company", value: "from 800 € / month", note: "event pages, areas, map, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: sites I have optimized for Google and AI search",
      subtitle:
        "What these projects share with a catering company is search from people who compare several providers before they send a request. The property platform in Cyprus that I built from scratch in early 2025 and still run has about 330 landing pages by city, type and budget — the same logic as catering pages by event type and area — and grew from zero to about 2,500 organic visits a month without a single bought link, with about 10% of organic visits coming from AI assistants. ScanM2, a 3D laser scanning and BIM company, sells to businesses the way a corporate caterer does; since its move to a rebuilt WordPress site its organic traffic is 29 times higher and new leads come in weekly. Giuseppe, a psychotherapist in Milan, has separate pages for Milan and Monza, and ChatGPT already cites his newer pages. A Warsaw auto repair shop got local SEO work, a cleaned-up Google Maps listing and a page for each service, and Felgilab, a Warsaw wheel-renovation workshop, got service and price pages that name its prices plainly.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your catering company",
      subtitle: "I reply within one business day with the first fixes I would make on your catering site and map listing, and a fixed price.",
      contextLabel: "Catering company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which events should search bring you?", options: ["Corporate events and conferences", "Office lunches and drop-off orders", "Weddings", "Private parties"] },
        { _key: k("z"), question: "Where do most inquiries come from now?", options: ["Referrals and repeat clients", "ezCater or another marketplace", "Google Maps and the website", "Wedding directories and social media"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for catering companies: the work that puts your business in front of the office manager who searches for corporate catering in your city, the couple comparing wedding caterers a year before the date and the planner who needs lunch for two hundred at a conference venue. People shortlist three or four caterers and send several quote requests, so search decides who makes that shortlist. Because I build websites too, whatever the audit finds I change in the code myself, without an account manager in between."),

        h2("Catering SEO keywords: how planners, couples and office managers search for a caterer"),
        p("Catering searches split by who is buying and what for, and each group needs its own page:"),
        li("corporate and office — “corporate catering [city]”, “office lunch catering”, “boxed lunches for a meeting”, “breakfast catering for 50 people”"),
        li("weddings and private events — “wedding catering [city]”, “rehearsal dinner catering”, “graduation party catering”, “BBQ catering for a backyard party”"),
        li("format and diet — “drop-off catering”, “buffet catering”, “food stations”, “halal catering”, “vegan catering for an event”"),
        li("cost — “catering price per person”, “how much is catering for 100 guests”"),
        p("My first step is the search data for your city and the towns around it. Corporate searches are usually fewer than wedding searches, but they bring repeat orders; wedding searches often rise after the winter holidays, when newly engaged couples start booking. The data shows which group to start with in your market."),

        h2("Event-type pages for caterers: corporate, wedding, office lunch and private party catering"),
        p("A single “Services” page that lists weddings, conferences and birthdays in one paragraph ranks poorly for each of them. Each event type gets a page written for the person who books it:"),
        li("corporate events — conferences, product launches, holiday parties: the headcounts you handle, service styles, staff and equipment, how far ahead to book"),
        li("office lunch — daily or weekly drop-off, individually labeled boxes, the order cutoff the day before and how a company sets up a standing order"),
        li("weddings — sample menus, tastings, whether you cook on site or bring food from your kitchen, what the price per guest includes"),
        li("private parties — birthdays, graduations and anniversaries at home or in a rented hall, with the smallest order you accept"),
        p("Each page carries photos from real events of that type, a sample menu and the questions people ask before booking, so the planner who reads it writes with a date and a headcount already decided."),

        h2("Service-area and venue pages for a catering company"),
        p("A caterer has no dining room, so people search by where the event will happen: “catering in [suburb]”, “caterers near [venue name]”. Service-area pages answer those searches when they describe places you really serve and say something specific about each one:"),
        li("the delivery fee or travel minimum for that area, and how much notice you need"),
        li("venues there where you have catered — event halls, wineries, office parks, community centers — with what you know about their kitchens, load-in times and house rules"),
        li("photos from events in that area, published with the client’s permission"),
        p("Venue pages tend to work especially well. A couple that has just booked a venue searches for “caterers at [venue]”, and few caterers have a page that answers it. A new town or venue gets its own page once you have events and photos to show there; until then a single list of the areas you serve is enough."),

        h2("Catering menus and price per person: pages that answer the cost question"),
        p("“How much does catering cost per person” is one of the most common questions in the business, and many caterers leave it unanswered on their site. A page that gives real ranges attracts the visitor who is building a budget, and that visitor is close to booking. The menu and pricing pages I write for caterers show sample menus as text for each event type, a price-per-person range for each service style — drop-off, buffet, family style, plated, stations — the minimum headcount or order value, and what moves the total: staff hours, rentals, travel and service charges."),
        p("Menus are written as facts, not mood. On the property platform in Cyprus that I built and run, project descriptions were once rewritten as lifestyle copy and commercial pages lost traffic; returning to factual descriptions with price, area and location brought clicks back by 16%. Catering pages behave the same way: dish names, portions, dietary marks and the price range are what searchers and AI assistants pick up."),

        h2("B2B catering SEO: reaching office managers and corporate event planners"),
        p("Corporate buyers search differently from couples. An office manager has a budget, a headcount and a meeting tomorrow at noon; an event planner has a brief and three caterers to compare. Both look for signs that you can serve a business without surprises:"),
        li("a page for recurring office catering — weekly lunches, breakfast meetings, how standing orders and monthly invoicing work"),
        li("clear labeling of each meal and allergen information on request, which HR and facility teams ask about"),
        li("case pages or client names only where the client agreed to be named"),
        li("short answers to procurement questions: insurance, food safety certificates, payment terms, the paperwork you send"),
        p("The volume of these searches is small, but a company that likes your Tuesday lunches rarely switches caterers, so each of these pages is worth more than its traffic suggests."),

        h2("ezCater and catering marketplaces vs quote requests from your own website"),
        p("Search for office catering in a large US city and the top results often belong to marketplaces: ezCater, the catering sections of delivery apps and local ordering platforms. They bring orders from companies that already buy there, and many caterers keep their menus listed. The price is a commission on each order, a listing next to dozens of competitors sorted by price and rating, and a client relationship that stays with the platform: the office manager remembers the marketplace, not your company."),
        p("SEO builds a second channel next to it — pages that rank for your event types and areas, and a Google listing under your real name, so repeat clients come to you directly. My reports keep direct inquiries and marketplace orders in separate columns, so you can watch the share change and decide later which listings are worth keeping."),

        h2("Google Business Profile for a catering company: service area, category and reviews"),
        p("Many caterers work from a commercial kitchen that clients never visit. Google lets such businesses hide the street address and show a service area instead, and the profile can still appear for “caterer near me”. For a catering profile the work is concrete:"),
        li("“Caterer” as the primary category, and the event types you serve listed as services"),
        li("a service area that matches where you really go, not the whole state"),
        li("photos from real events — the buffet before guests arrive, boxed lunches packed for delivery, your team at work — added after each larger job"),
        li("a review request sent the day after the event to the person who booked, asking them to mention the type of event and the venue"),
        p(
          "The rest of the map work — citations in other directories, duplicate listings, service areas — is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Seasonal catering SEO: holiday parties, wedding season and graduations"),
        p("Catering demand follows the calendar, and a page needs weeks to be crawled and to climb, so the work runs ahead of the bookings:"),
        li("late summer and early fall — holiday party pages refreshed with this year’s menus, because companies book December events early"),
        li("winter — wedding pages updated with new menus and tasting dates while couples plan the next season"),
        li("early spring — graduation parties, corporate picnics and summer events"),
        li("January and September — office lunch pages, when companies return to routines and set new budgets"),
        p("During its season a page is linked from the home page; afterwards it stays live, so the photos and reviews from this year’s holiday parties help sell next year’s."),

        h2("Catering SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Planners increasingly type their questions into ChatGPT, Perplexity or Google’s AI Overviews: “who does corporate catering in [city] for 150 people”, “which caterers near [venue] offer halal menus” or “how much should I budget for wedding catering for 120 guests”. The answers are put together from pages the assistant can read and compare with other sources; the work of getting into them is called GEO (generative engine optimization) or AEO (answer engine optimization). For a caterer it rests on four things:"),
        li("headcounts, service area, lead time and price-per-person ranges written as plain sentences"),
        li("event-type pages that answer planning questions directly, signed by the owner or the chef"),
        li("structured data that describes the business, its services and the area it serves"),
        li("the same name, phone number and service area on the site, on Google, in wedding directories and on marketplaces"),
        p(
          "I record what assistants say about your company and which caterers they suggest instead, at the start and again a few months later. The service itself has its own page: the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring catering SEO in quote requests and booked events"),
        p("A good month in catering is counted in booked events, not in positions. Reports show quote requests that came from search, calls and messages from the map listing, which event-type and area pages brought them, the date and headcount of each inquiry, and how many of them became booked events. The booking figures come from your inbox, CRM or catering software, so they match your calendar."),

        h2("How much catering SEO costs"),
        li("An audit of the catering website, the Google Business Profile and the caterers you compete with locally: from 250 €, paid once, with a list of fixes in order of impact."),
        li("One-off work — event-type and service-area pages, menu and pricing pages, structured data and a profile clean-up: 250–700 €."),
        li("Monthly SEO for a catering company — pages prepared before each season, the map listing, review requests, AI visibility and a report in booked events: from 800 € per month."),
        p(
          "If the website itself needs a quote form, deposits or online ordering for office lunches, the ",
          link("catering website design", "/catering-website-design"),
          " page explains how I build it. A restaurant with a dining room is searched for differently, by guests looking for a table tonight; that work is on the ",
          link("restaurant SEO", "/restaurant-seo"),
          " page. The monthly process is explained on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; all prices are listed on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Catering SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a catering company cost?", "The audit starts at 250 €, separate tasks cost 250–700 €, and monthly SEO starts at 800 €. Tell me your city, the events you want more of and where inquiries come from today; the fixed price follows in my reply."],
          ["How long does catering SEO take to bring inquiries?", "Profile fixes and a steady flow of reviews can move the map listing within a few weeks. New event-type and venue pages usually need several months to climb, longer in large cities, so wedding and holiday party pages are best prepared well before their season."],
          ["Should a caterer leave ezCater to invest in SEO?", "There is no need to. Marketplace orders can fill weekdays, and SEO grows the inquiries that come to you without a commission. Reports show both channels, so any decision about listings can wait until you have numbers."],
          ["Should a catering website show prices?", "Ranges or “from” prices per person are enough for most caterers. They answer the most common question, bring in visitors who are building a budget and filter out requests you would decline anyway."],
          ["Can a caterer without a storefront rank on Google Maps?", "Yes. A catering company can hide its street address in the Google Business Profile and show a service area instead. The profile then competes for searches such as “caterer near me” within that area."],
          ["Can ChatGPT recommend a catering company?", "Yes, when someone asks for one. It names caterers whose area, capacity and reviews can be checked across several sources and whose pages give plain answers to planning questions. Nobody can promise a mention; clear facts make one more likely, and I compare what the assistants say before and after the work."],
          ["Can you do SEO for a US catering company from Poland?", "Yes. All the work is done online and in English. Afternoons and evenings in Warsaw overlap with mornings and middays across the US, so calls fit before your lunch deliveries go out. Invoices are in EUR, or in another currency if we agree on it."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order catering SEO: what to send me"),
        p(
          "Send your company name, the links to your website and Google Maps listing, the cities and venues you serve, the events you want more of — corporate, office lunches, weddings, private parties — and whether you take orders through ezCater or another marketplace. I reply with what I would do first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
