// Landing page fixture: Car dealer website design (EN), group
// «car-dealer-website-design». New page.
// Semantic core: ref/creative-leisure.md, auto detailing / dealers / rental
// group (US volumes): car dealer website design 170 (H1, metaTitle, H2s) · car
// dealer websites 170 (intro, H2) · car dealer website template 170 + car
// dealership website template 170, car dealership website template free 40
// (templates H2, FAQ) · car dealer website builder 90 (vendors H2) · best car
// dealership websites 90 (patterns H3, no sites named) · dealership website
// providers 70 + car dealer website providers 40 (vendors H2, FAQ).
// Intent: ref/intent-check-creative-leisure.md — «website for car dealers» vs
// «car dealer website design» 0 of 10 shared URLs, 0 shared domains: the first
// returns dealers themselves and Edmunds (shoppers), only the second is ours —
// SERP: dealerwebs, vehiso, wix, clickdealer, fireart.studio, pinterest,
// quora, spyne → dealer site vendors, builders, studios. «car dealer seo» vs
// «car dealer website design» 0 shared → SEO is the sibling /car-dealer-seo.
// This page = the site itself: inventory feed (DMS, inventory tools, CSV),
// VDP design, price and payment display, inventory search on a phone,
// financing forms (soft-pull pre-qualification, credit applications via lender
// platforms, FTC Safeguards Rule — general), trade-in forms, photo speed,
// calls/texts tied to a stock number, dealer site vendors and templates vs own
// site, patterns of the best dealership websites, AI-readable design.
// NOT on this page: indexing and sold-page rules, model pages, structured data
// strategy, Google profiles per lot, reviews, marketplaces vs own site
// (/car-dealer-seo — sibling, linked); service department SEO
// (/seo-for-auto-repair-shop — not linked here, linked from the SEO page).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const carDealerWebsiteDesignEn = {
  lang: "en",
  group: "car-dealer-website-design",
  slug: "car-dealer-website-design",
  title: "Car dealer website design",
  heading: "Car Dealer Website Design",
  excerpt:
    "Car dealer website design and build from one person: an inventory that updates itself from your feed, vehicle pages that show the car and the price clearly, financing and trade-in forms that reach your team, and dozens of photos per car that still load fast on a phone.",
  seo: {
    metaTitle: "Car Dealership Website Design and Build | Bandziuk",
    metaDescription:
      "Car dealer website design: inventory synced from your feed, clear vehicle pages, financing and trade-in forms, fast photos. Design included, from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Independent lots and small groups"],
  heroPhonePoints: ["2019 RAV4 XLE · 41k miles", "Get pre-qualified", "Value your trade", "Text us about this car"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple car dealer website with inventory list and vehicle pages, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Car dealer website with inventory feed, vehicle pages, search filters, financing and trade-in forms and location pages, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with car dealer website design",
      items: [
        { _key: k("o"), iconName: "plug", title: "Inventory synced from your feed", text: "DMS, inventory tool or spreadsheet — no double entry" },
        { _key: k("o"), iconName: "image", title: "Vehicle pages built around photos", text: "Gallery, price, key specs and a history report link" },
        { _key: k("o"), iconName: "search", title: "Inventory search that works on a phone", text: "Make, model, price and mileage in two taps" },
        { _key: k("o"), iconName: "shield-check", title: "Financing and trade-in forms", text: "Short, secure, sent straight to the right person" },
        { _key: k("o"), iconName: "gauge", title: "Fast with dozens of photos per car", text: "Resized at import, loaded as the buyer scrolls" },
        { _key: k("o"), iconName: "sparkles", title: "Vehicles and terms ChatGPT can read", text: "Plain text and structured data, not images" },
      ],
      prices: [
        { _key: k("r"), label: "Simple car dealer website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Inventory feed, vehicle pages, forms, locations", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Catalog websites and automotive service sites I have designed and built",
      subtitle:
        "The Cyprus VIP Estates site is a catalog I designed and built from scratch: listings with filters and a map, video presentations, five languages including Hebrew and enquiries that go into the CRM — the same build problem as a dealer inventory. Three are Warsaw businesses around cars: Felgilab, whose wheel-renovation business moved to a new WordPress site with separate service and price pages; a repair shop for which I reworked UX, service pages and its Google Maps presence; and a tyre-storage business whose landing page the owner edits himself. The fifth is ScanM2, a 3D laser scanning company: I moved its site to WordPress without changing the design, organic traffic grew 29× and leads now arrive every week. For a dealer that means a catalog that stays current, pages made for phones and a site you control.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your car dealer website design",
      subtitle: "Within one business day you get my answer: a proposed page structure for your inventory and vehicle pages, how the feed would connect, and a fixed price.",
      contextLabel: "Dealership name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do you manage inventory now?", options: ["A DMS or inventory tool with a feed", "Marketplace listings only", "A spreadsheet", "A dealer website platform"] },
        { _key: k("z"), question: "What should the new site do better first?", options: ["Show the inventory", "Bring credit applications", "Bring trade-ins", "Cost less than our platform"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Car dealer website design is what I do for independent used car lots and small dealer groups: I plan, design and build the site on my own, connected to the system where your inventory already lives, so one person answers for the whole thing at one price. Car dealer websites are catalogs that change every day. Cars arrive and sell, prices drop, photos come in after detailing, and the site has to follow all of it without anyone typing a car in twice."),

        h2("Car dealer website design around three pages: inventory, vehicle, contact"),
        p("Most visits to a dealership website follow the same path. The buyer opens the inventory, narrows it down, opens one or two cars, and then calls, texts or sends a form. Everything else — about us, hours, directions, financing — supports that path. So the design work goes where the decisions happen:"),
        li("the inventory list, which has to be scannable on a phone held in one hand"),
        li("the vehicle page, which answers “is this the car, what does it cost, is it still here”"),
        li("the contact step, which should take one tap and tell your team which car the person means"),
        p("The first screen of the home page shows a search box or the main body types, your location and phone, and a few current arrivals — not a slider of stock photos of cars you do not have."),

        h2("Inventory feed on a car dealer website: cars imported from your DMS or spreadsheet"),
        p("The site reads your inventory from where you already keep it. Common sources:"),
        li("a dealer management system — DealerCenter or Frazer at many independent lots, CDK or Reynolds and Reynolds at franchise stores — through its export"),
        li("an inventory tool such as vAuto or HomeNet that already sends feeds to marketplaces"),
        li("a CSV file or Google Sheet for small lots that keep stock in a spreadsheet"),
        p(
          "I map the fields once — stock number, VIN, year, make, model, trim, mileage, price, colors, options, photo links — and the import runs on a schedule, several times a day if your stock moves fast. New cars appear with their photos, price changes go through, and sold cars leave the list automatically. What happens to a sold car’s page afterwards is a search question, covered on the ",
          link("car dealer SEO", "/car-dealer-seo"),
          " page. Staff can still add a note or a highlight to any car in the site’s admin, and the next import keeps it.",
        ),

        h2("Vehicle detail page design: what a VDP shows on the first screen"),
        p("The vehicle detail page decides whether the buyer contacts you or goes back to the marketplace. On a phone, the first screen holds:"),
        li("the photo gallery, swipeable, starting with a front three-quarter shot"),
        li("year, make, model and trim in plain words, then price and mileage in large type"),
        li("three or four key facts: drivetrain, engine, MPG, number of owners"),
        li("buttons to call, text and check availability, plus a test-drive request"),
        p("Below that: the full options list, the history report link (Carfax or AutoCheck, if you provide one), the window sticker for new cars, a short walkaround video and similar cars in stock."),
        h3("Price, fees and monthly payments on a vehicle page"),
        p("Buyers distrust prices that change at the desk. The page says what the price includes and lists any dealer fees next to it, in the same type size. If you show an estimated monthly payment, its assumptions — term, rate, down payment — sit directly under it, readable without zooming. Rules on advertised prices and fees vary by state, so the wording follows what applies to you."),

        h2("Inventory search and filters on a dealership website"),
        p("On a desktop, filters can sit in a sidebar. On a phone they open from one button and close with the result count visible, so the buyer never filters down to zero cars without noticing. Each car in the list shows a photo, price, mileage and one line of key facts. Sorting by price, mileage, year and newest arrivals covers almost every need; a saved search with an email alert keeps buyers who are not ready yet."),

        h2("Financing forms on a car dealer website: pre-qualification and credit applications"),
        p("Credit is where many dealer sites lose people, either with a long form on the first visit or with a form that is not safe. The design separates two steps:"),
        ol("Pre-qualification: a short form, often a soft credit check through a provider, that gives the buyer an idea of their terms without affecting their credit score."),
        ol("The full credit application: sent through your lender platform, such as RouteOne or Dealertrack, or through a secure form that never sends Social Security numbers by plain email."),
        p("Dealers who take customer financial information fall under the FTC Safeguards Rule, which asks for protection of that data. The form, its storage and who can see it are built with that in mind; your compliance contact confirms the details."),

        h2("Trade-in forms on a car dealer website: “value your trade” with VIN lookup and photos"),
        p("A trade-in form only helps if it collects what an appraiser needs. The buyer enters a VIN or license plate, the form fills in year, make and model, and then asks for mileage, condition, accidents, payoff and a few phone photos. You can show an instant estimate from a valuation tool such as Kelley Blue Book Instant Cash Offer, or ask for an appraisal from your team. Either way, the lead arrives with the car they want to trade and, if they came from a vehicle page, the car they want to buy."),

        h2("Photo speed on a dealership website: dozens of photos per car without slow pages"),
        p("A lot with eighty cars and thirty photos each serves thousands of images, and that is the main reason dealer sites are slow. The build handles it at import, not in the browser:"),
        li("photos resized into several widths and converted to WebP or AVIF when they are imported"),
        li("only the first photo loaded with the page; the rest load as the buyer swipes"),
        li("inventory lists showing small thumbnails, never the full-size originals"),
        li("walkaround videos embedded from YouTube and loaded only when tapped"),
        p("The result is a vehicle page that opens fast on mobile data at the lot next door, which is where many buyers compare prices."),

        h2("Calls, texts and chat on a car dealer website: every lead tied to a car"),
        p("Many buyers would rather text than call. A “Text us about this car” button opens a message that already contains the year, model and stock number, so your salesperson knows which car it is without asking. Calls from a vehicle page can be tracked the same way. Forms and texts go to your CRM or lead inbox with the car attached, and the site shows business hours next to the phone, so nobody calls a closed lot at 9 pm expecting an answer."),

        h2("Car dealer website providers and templates vs your own website"),
        p("Dealer website providers bundle a site with the inventory feed and a monthly fee: Dealer.com, DealerOn and Dealer Inspire mostly serve franchise stores, while DMS and marketplace vendors sell website packages to independents. Builders like Wix offer car dealership website templates, some of them free. For a new lot, a template or a vendor package is a fair start. The limits show later:"),
        li("the same layout as hundreds of other dealers, with little room for your own design"),
        li("a monthly fee that never ends, and a site that disappears when you cancel"),
        li("little control over page speed, forms and what goes into the page code"),
        p("Franchise dealers often have to use a provider certified by the manufacturer, so an own site fits independents and groups with their own used-car brand best. Your feed, lender platform and CRM connect to it the same way they connect to a vendor site."),
        h3("What the best car dealership websites have in common"),
        p("The best car dealership websites share habits rather than a look: real photos of every car taken in the same spot, prices with fees shown openly, one tap to call or text from any vehicle, and inventory that matches the lot to the hour."),

        h2("A car dealer website that ChatGPT and Google AI Overviews can read"),
        p("Some buyers now ask ChatGPT, Perplexity or Google’s AI Overviews which dealers nearby have a certain model or offer financing for first-time buyers. These assistants can only use what they can read. A site that shows inventory, hours and financing terms as images, or loads everything inside a third-party widget, gives them nothing. The same facts as text, with Car and AutoDealer structured data generated from the feed, can be read and quoted."),
        p(
          "Being recommended there is separate, ongoing work; see ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ".",
        ),

        h2("How a car dealer website design project runs and what it costs"),
        ol("Brief. You send your current site, feed source, lots, fees, financing partners and a few vehicle pages you like elsewhere."),
        ol("Phone layouts. I design the inventory list, the vehicle page and the forms on a phone and agree them with you."),
        ol("Build and feed. The import is connected and tested on your real stock before launch."),
        ol("Launch. Forms, texts, call tracking and analytics are connected; you get a short guide."),
        li("A simple car dealer website — home, inventory list, vehicle pages, about, contact: 700–1,400 €."),
        li("A car dealer website with an automatic inventory feed, search filters, financing and trade-in forms and location pages: from 2,000 €."),
        p(
          "Design is part of both prices. Once the site is live, your running costs are hosting and the domain; I bill only for changes you request. My general approach to building sites is on the ",
          link("website development", "/services/website-development"),
          " page; full ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Car dealer website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does car dealer website design cost?", "A simple car dealer website costs 700–1,400 €. A site with an automatic inventory feed, search filters, financing and trade-in forms and location pages starts at 2,000 €. Both prices include design; after a short description of your dealership you get a fixed quote."],
          ["Can the website pull inventory from my DMS or inventory tool?", "Usually yes. Most systems export a feed, often the same one they send to marketplaces. If you keep stock in a spreadsheet, the site can read that instead. I check your export before quoting."],
          ["Are car dealership website templates good enough?", "For a new lot, often yes, including the free ones. Templates struggle with a live inventory feed, fast photo galleries and forms tied to a specific car, and moving off one later usually means starting again."],
          ["Is it safe to take credit applications on my website?", "It can be, if the application goes through your lender platform or a secure form and never through plain email. Dealers fall under the FTC Safeguards Rule for customer financial data; the build follows it, and your compliance contact confirms the details."],
          ["Will a site with thousands of photos be slow?", "Not if the photos are resized and converted when they are imported and loaded only when the buyer swipes to them. That is part of every dealer site I build."],
          ["Can I edit cars, specials and fees myself?", "Yes. Cars come from the feed, and you can add notes, highlights, specials and fee text in a simple admin, also from a phone."],
          ["Do you work with car dealers in the US from Poland?", "Yes. The project runs remotely and in English. I am in Warsaw, and my working afternoon falls in your morning, so we can talk before your lot gets busy. You receive invoices in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order car dealer website design: what to send me"),
        p(
          "Send your dealership name and current website, the addresses of your lots, where your inventory lives now (DMS, inventory tool or spreadsheet), your typical stock size, the lender platform and CRM you use, and your dealer fees. A few links to vehicle pages you like on other sites tell me what you expect from yours. I will reply with a proposed list of pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
