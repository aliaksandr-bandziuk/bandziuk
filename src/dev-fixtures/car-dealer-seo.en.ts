// Landing page fixture: Car dealer SEO (EN), group «car-dealer-seo». New page.
// Semantic core: ref/creative-leisure.md, auto detailing / dealers / rental
// group (US volumes): car dealer seo 480 (H1, metaTitle, several H2) · seo for
// car dealer 70 (H2, intro). «car dealer websites» 170, «car dealer website
// design» 170, templates 170×2, builder 90, «best car dealership websites» 90,
// providers 70+40 belong to /car-dealer-website-design (sibling, linked) and
// are not targeted here.
// Intent: ref/intent-check-creative-leisure.md — «car dealer seo» vs «car
// dealer website design» 0 of 10 shared URLs, 0 shared domains → separate
// pages. SEO SERP: dealer SEO vendors (Dealer eProcess, Dealer.com, KGI Dealer
// Solutions, DealersUnited), Reddit, fatjoe, seoprofy — the searcher is a
// dealer or dealer group owner / GM. «website for car dealers» returns dealers
// themselves (shoppers’ demand) — not ours.
// Angle: vehicle detail pages indexed (rendering, URLs, titles, sitemap from
// the feed), sold-vehicle pages, make/model/price pages vs filter crawl,
// Car/Offer/AutoDealer structured data and US vehicle listings, a Google
// Business Profile per lot (departments, brands — general), reviews (Google,
// DealerRater, Cars.com, CarGurus; FTC fake-review rule — general),
// marketplaces vs own site, buyer-question pages (financing ads — Regulation Z,
// general), independent vs franchise (OEM programs — general), AI answers.
// NOT on this page: the site itself — inventory feed integration, VDP layout,
// financing and trade-in forms, photo speed, website vendors
// (/car-dealer-website-design — sibling); map work in depth
// (/services/local-seo-services); service department SEO
// (/seo-for-auto-repair-shop — neighbour, linked once); running ads and
// marketplace listing management (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings; monthly
// from 1,300 € allowed here for big metros.
import { p, h2, h3, li, link, k } from "./pt";

export const carDealerSeoEn = {
  lang: "en",
  group: "car-dealer-seo",
  slug: "car-dealer-seo",
  title: "Car dealer SEO",
  heading: "SEO for Car Dealers",
  excerpt:
    "I do car dealer SEO for independent lots and small dealer groups: vehicle pages that Google indexes while the car is still on the lot, make and model pages, structured data, a Google profile and reviews for each location, and a place in AI answers — reported in calls and test drives.",
  seo: {
    metaTitle: "Car Dealer SEO: Inventory, Maps and AI | Bandziuk",
    metaDescription:
      "SEO for car dealers: indexed vehicle pages, make and model pages, structured data, a Google profile per lot, reviews and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Inventory, lots and AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Used trucks in Tulsa", "2021 F-150 XLT · 38k miles", "4.8★ · Open until 8 pm", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Car dealer SEO audit: inventory indexing, vehicle and model pages, structured data, Google profiles, reviews and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a dealership: vehicle page templates, sold-car rules, model pages, markup, lead tracking", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a car dealer or small dealer group", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for car dealers",
      items: [
        { _key: k("o"), iconName: "search", title: "Vehicle pages Google can index", text: "Stable addresses, real titles, a sitemap fresh from the feed" },
        { _key: k("o"), iconName: "layers", title: "Make, model and price pages", text: "Built from your stock, endless filters kept out of the index" },
        { _key: k("o"), iconName: "file-text", title: "Car and AutoDealer structured data", text: "Generated from the feed, so it always matches the page" },
        { _key: k("o"), iconName: "map-pin", title: "A Google profile for each lot", text: "Location pages, hours by department, photos of the real lot" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Plain facts and reviews that assistants can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in calls and test drives", text: "Leads by lot and by page, with rankings beside them" },
      ],
      prices: [
        { _key: k("r"), label: "Car dealer SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a dealership", value: "from 800 € / month", note: "inventory, local, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: catalog sites and automotive businesses I have built and optimized",
      subtitle:
        "Cyprus VIP Estates is the catalog case: I built the site from scratch — listings with filters and a map, five languages including Hebrew, enquiries sent into the CRM — and I run its SEO every month, which is the same kind of work as keeping a car inventory indexed and current. Three are Warsaw businesses that live from car owners: an auto repair shop where I worked on local SEO, Google Maps and service pages, the Felgilab wheel-renovation workshop rebuilt on WordPress with service and price pages, and a tyre-storage business with a landing page whose SEO texts the owner edits himself. The fifth, ScanM2, a 3D laser scanning company, was rebuilt on WordPress with its design kept, and its organic traffic grew 29×. A dealer takes from this work a catalog search engines can read, a lot people find on the map, and leads you can count.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your dealership",
      subtitle: "Within one business day you get my reply: the first fix I would make — vehicle pages, model pages or your Google profiles — and a fixed price.",
      contextLabel: "Dealership name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of dealership do you run?", options: ["Independent used car lot", "Buy here pay here", "Franchise dealer", "A group with several lots"] },
        { _key: k("z"), question: "Where do most online leads come from now?", options: ["Cars.com, AutoTrader or CarGurus", "Facebook Marketplace", "Google Maps and calls", "Our own website"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Car dealer SEO is the work that puts your inventory, your lot and your dealership name in front of people searching for a car in your area, and turns those searches into calls, test drives and credit applications. I do it myself, as a single SEO consultant and web developer, for independent used car dealers and small dealer groups: the person who audits your vehicle pages is the person who fixes the templates and writes the model pages."),

        h2("What SEO for car dealers covers: inventory, the lot and the dealership name"),
        p("A car shopper searches in stages: first a model and a budget (“used Honda CR-V Columbus”), then a type of dealer (“buy here pay here near me”, “Subaru dealer Plano”), and finally your name, typed by someone who already saw one of your cars on a marketplace. SEO for a car dealer works on:"),
        li("vehicle detail pages and inventory lists that Google indexes and keeps current"),
        li("make, model, body type and price pages built from the stock you actually carry"),
        li("a Google Business Profile for each lot, with reviews"),
        li("your name in search and the places where buyers check you: Google, DealerRater, Cars.com, CarGurus"),
        li("answers in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "The site itself — how the inventory feed is wired, how a vehicle page looks, the financing and trade-in forms — is covered on the ",
          link("car dealer website design", "/car-dealer-website-design"),
          " page.",
        ),

        h2("Vehicle detail pages in Google: inventory SEO for a car dealer"),
        p("Every car on the lot has a vehicle detail page (VDP), where people land when they search for a specific car. Dealer sites share the same problems with them:"),
        li("the inventory loads with JavaScript after the page opens, so Google sees an empty grid or a spinner"),
        li("addresses carry session IDs and filter parameters instead of one stable address per stock number"),
        li("every title reads “Vehicle Details” instead of year, make, model, trim and town"),
        li("descriptions are the same feed boilerplate on hundreds of pages and on every marketplace"),
        li("the XML sitemap updates once a week while cars sell every day"),
        p("These are fixed in the templates, once: vehicle pages rendered on the server, a stable address per stock number, titles built from the feed fields plus your location, a sitemap regenerated with each import, and a few lines per car from your staff — condition, options, who it suits — that no other site carries."),
        h3("What to do with a vehicle page when the car is sold"),
        p("Deleting a page the moment the car sells throws away the visits and links it had; leaving it live with a “buy now” button annoys people. What works for most dealers: keep the page for a short period marked as sold, with similar vehicles in stock and a link to the model page, then let it return 410 or redirect it to that model page."),

        h2("Make, model and price pages: which inventory filters to index in car dealer SEO"),
        p("Pages such as “used SUVs”, “Ford F-150 for sale” or “cars under $15,000” outrank single cars because they stay live while vehicles come and go. Meanwhile inventory filters can produce thousands of address combinations — color, mileage, year, sort order — and Google spends its crawl on them instead of on your stock. The structure I set up:"),
        li("indexable pages for the makes and models you regularly stock, body types and price bands, each with a short text written for that page above the current cars"),
        li("filter combinations beyond that kept out of the index with canonical tags or noindex"),
        li("a model page that stays live when the model is temporarily out of stock, offering an alert sign-up instead of an empty grid"),
        li("links from the home page and from vehicle pages to the model pages that matter for your lot"),
        p("The list of pages comes from your sales history: a lot selling work vans needs different pages from one selling compact sedans."),

        h2("Vehicle structured data for car dealers: Car, Offer and AutoDealer markup"),
        p("For a dealer, structured data covers:"),
        li("each vehicle page: schema.org Car with VIN, make, model, year, mileage, color, fuel type and transmission, plus an Offer with price, currency and availability"),
        li("each lot: AutoDealer with name, address, phone, opening hours per department and links to your profiles"),
        p("In the US, Google can show dealer inventory in its vehicle listings, which read Car markup or a vehicle feed in Merchant Center. Markup helps only when it matches the visible page: a price in the code that differs from the one shown, or a sold car still marked in stock, gives Google a reason to ignore it. I generate the markup from the same feed as the page, so the two cannot drift apart."),

        h2("Local SEO for car dealers: a Google Business Profile for each lot"),
        p("Most buyers shop within driving distance, and searches like “car dealership near me” or “used cars Fort Wayne” are answered from the map. Each physical lot gets its own profile with its real address and hours. Google’s guidelines also allow dealerships to list departments such as sales and service separately, and franchise dealers can list each brand they are authorized to sell; read the current guidelines before splitting anything, because a suspended profile is slow to get back. For every lot:"),
        li("a primary category that matches the business — “Used car dealer”, or the brand dealer category for a franchise"),
        li("a location page on the site with the address, hours, staff, directions and the cars parked there"),
        li("photos of the real lot and building"),
        li("the same name, address and phone on the site, the profile, marketplaces and directories"),
        p(
          "Map work in more depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Car dealer reviews on Google, DealerRater, Cars.com and CarGurus"),
        p("Dealer reviews are often about the finance office and the call after the sale rather than the car. A steady flow counts for more than a burst:"),
        li("a review request after delivery, sent by the salesperson who sold the car, with a direct link"),
        li("a reply to every review, including the angry ones, with no details of the deal or the customer’s credit"),
        li("DealerRater, Cars.com and CarGurus reviews followed too, because those pages rank for your name"),
        li("no reviews written by staff or bought: Google’s policies and the FTC rule on fake reviews forbid both"),

        h2("Cars.com, AutoTrader, CarGurus or your own site: where SEO fits for a dealer"),
        p("Marketplaces bring most of a typical dealer’s online leads: a shopper comparing twenty CR-Vs starts on CarGurus or AutoTrader, not on one lot’s website. But you pay for every listing package or lead, the buyer sees competitors next to your car, and the price badge often decides who gets the click. SEO works on the searches marketplaces do not own:"),
        li("your dealership name, typed by people who saw your car on a marketplace and want to reach you directly"),
        li("local and dealer-type searches: “buy here pay here Dayton”, “used work trucks Polk County”, “Subaru dealer near me”"),
        li("buyer questions a dealer can answer better than a listing site"),
        p("A lead from your own site comes with no fee and no competing cars beside it. The aim is a mix in which the site carries a growing share, with the marketplaces still running."),

        h2("Buyer-question pages in SEO for car dealers: credit, trade-ins and model comparisons"),
        p("People search a lot before they search for a specific car: “can I buy a car with bad credit”, “how is trade-in value calculated”, “Tacoma or Tundra for towing”, “best used cars under $10,000”. A dealer can answer these from daily experience, using cars on the lot as examples:"),
        li("guides for first-time buyers, low credit and self-employed buyers, checked by your finance manager"),
        li("trade-in explainers: what changes the offer, the paperwork, what happens if you still owe on the car"),
        li("model comparisons and “best for” pages for the vehicles you sell most"),
        p(
          "Credit pages are advertising: in the US, terms such as a monthly payment or down payment trigger Truth in Lending disclosures, and states have their own rules on advertised prices and fees. I write within the rules your compliance contact gives me; this is not legal advice. If you run a service department, its search work is described on the ",
          link("SEO for auto repair shops", "/seo-for-auto-repair-shop"),
          " page.",
        ),

        h2("Used car dealer SEO vs franchise dealer SEO: OEM programs and what you can change"),
        p("An independent lot controls its website — and often runs a cheap template with no inventory SEO at all. A franchise dealer usually works inside the manufacturer’s digital program: a website from a certified provider, required brand pages and incentives, co-op rules on what is reimbursed. SEO for a franchise dealer starts with what the platform lets you edit — titles, page text, custom pages, redirects, tracking — and puts the effort where the brand does not set the content:"),
        li("used and certified pre-owned inventory"),
        li("location pages and the towns you sell into"),
        li("your staff, your delivery and trade-in process, your service department"),

        h2("Car dealer SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Car shoppers now put questions to ChatGPT, Perplexity and Google’s AI Overviews — “which dealers in Tulsa have good reviews for used trucks” or “is this dealership legit”. The reply names a handful of dealers and says why. Shaping these replies is what GEO (generative engine optimization) and AEO (answer engine optimization) refer to. On a dealer’s side it takes:"),
        li("what you sell, where, your hours, financing options and warranty terms written as plain sentences on the site"),
        li("the same name, address and phone on the site, Google, marketplaces and directories"),
        li("a steady flow of reviews that mention the car and the experience"),
        li("AutoDealer and vehicle markup that matches the pages"),
        p(
          "I record how assistants describe your dealership, and which competitors they name, at the start and again a few months in. What that service includes is listed under ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ".",
        ),

        h2("How much car dealer SEO costs"),
        li("Car dealer SEO audit — inventory indexing, vehicle and model page templates, structured data, Google profiles, reviews and AI answers: one-off, from 250 €."),
        li("One-off work — vehicle page templates, sold-car rules, model pages, markup, call and form tracking: 250–700 €."),
        li("Monthly SEO for a dealership — new model and buyer-question pages, local profiles, reviews, AI visibility and reports: from 800 € per month; for dealers in big metros, where franchise groups compete for the same searches, from 1,300 € per month."),
        p(
          "Reports count calls, form leads and test-drive requests from search for each lot and page, with rankings beside them. How I run SEO in general is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, the audit on the ",
          link("SEO audit", "/services/seo-audit"),
          " page and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Car dealer SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a car dealer cost?", "A one-off audit starts at 250 €, separate fixes cost 250–700 €, and ongoing monthly SEO starts at 800 €; for dealers in big metros it starts at 1,300 € a month. Tell me about your lots and stock and I quote a fixed price."],
          ["How long does car dealer SEO take to bring leads?", "Fixes to vehicle page templates and Google profiles can show within weeks, because new cars are indexed faster. Model pages and buyer-question pages tend to take three to six months before leads become steady, longer in metros with many franchise groups."],
          ["Do I still need Cars.com, AutoTrader or CarGurus if I invest in SEO?", "For most dealers, yes. Marketplaces are where shoppers compare many cars at once. SEO grows the share of leads that come to your own site with no fee and no competing listings, so you can decide later how much marketplace spend you need."],
          ["Should sold cars be removed from my website?", "Not the moment they sell. Keep the page for a short period marked as sold, with similar cars and a link to the model page, then let it return 410 or redirect it to the model page. The rule runs automatically in the feed import."],
          ["Can you do SEO on a Dealer.com, DealerOn or Dealer Inspire website?", "Usually in part. These platforms let you edit titles, page text and custom pages, and some allow redirects and tracking. I audit what your platform allows, work within it, and tell you plainly which fixes need the provider’s support."],
          ["Does each dealership location need its own Google Business Profile?", "Each physical lot with its own address, staff and hours, yes. Departments such as service and franchise brands can have separate profiles within Google’s guidelines; check the current rules before splitting."],
          ["Will ChatGPT recommend my dealership?", "Nobody can guarantee it, but the chances grow when the site states plainly what you sell, where and on what terms, when your details match across the web and when reviews keep coming. Before the work and again a few months later, I record what assistants say about your lots."],
          ["Can you run SEO for a US dealership from Warsaw?", "Yes. I work remotely, in English, from Warsaw. By my afternoon your US working day has started, so a call fits your morning on the East Coast or in Central time. I sign contracts and send invoices in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order car dealer SEO: what to send me"),
        p(
          "Send your website, the addresses of your lots, roughly how many cars you have in stock, which DMS or inventory tool feeds the site, whether you are independent or franchise, which marketplaces you list on, and whether you want more retail buyers, more credit applications or more trade-ins. You get back the first fixes I would make and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
