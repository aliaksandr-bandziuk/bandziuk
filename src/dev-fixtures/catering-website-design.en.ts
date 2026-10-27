// Landing page fixture: Catering website design (EN), group
// «catering-website-design». New page.
// Semantic core: ref/food-venues.md, catering group (US): catering website
// template / templates / catering service website template 110 each
// (templates H2, FAQ) · best catering website 50 (templates H2) · catering
// website design 40, catering website designs 40 (H1, several H2, cost H2,
// FAQ) · website for catering business 40 (metaTitle, intro).
// Intent: ref/intent-check-food.md — «catering website design» vs «catering
// website» 0 of 10 shared URLs (design SERP: Behance, Nicepage, Canva,
// Dribbble, Wix, small agencies → owners choosing a template or a designer;
// «catering website» SERP = ezCater and caterers = customers’ demand, not
// targeted); «catering seo» vs «catering website» 0 of 10 → SEO lives on the
// sibling /catering-seo.
// Angles: first screen with two paths (event quote / office order), menus by
// event type, price per person and minimums, quote form (date, guests, venue,
// budget, dietary needs), office lunch ordering with cutoff and company
// accounts, deposits online (Landi Room: Stripe Checkout), real event photos
// with fast galleries (DJ site under one second), service area, templates vs
// custom, AI-readable build, cost. Restaurants under NDA: one positive
// sentence, no details.
// NOT on this page: ranking work — event-type pages as SEO, venue pages,
// marketplaces in search, Google Maps, seasonal calendar (/catering-seo —
// sibling; map → /services/local-seo-services); dining-room restaurant sites
// (/restaurant-website — linked once).
// Owner’s rules: every page covers AI search; design is included in the
// price; never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const cateringWebsiteDesignEn = {
  lang: "en",
  group: "catering-website-design",
  slug: "catering-website-design",
  title: "Catering website design",
  heading: "Catering Website Design and Development",
  excerpt:
    "I design and build catering websites: menus by event type, price per person and minimums, a quote form that collects the date, guest count, venue and dietary needs, online ordering for office lunches and deposits paid by card, in one design that works on a phone.",
  seo: {
    metaTitle: "Website for a Catering Business with Quotes | Bandziuk",
    metaDescription:
      "Catering website design: menus by event type, price per person, a quote form with date and guest count, office lunch ordering and online deposits. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Request a catering quote", "Menus by event type", "Order lunch for the office", "Pay the deposit online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple catering website with menus and a quote form, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Catering website with event menus, multi-step quote form, office lunch ordering, deposits and company accounts, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with catering website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "Menus by event type", text: "Corporate, wedding, office lunch, private party" },
        { _key: k("o"), iconName: "file-text", title: "A quote form planners finish", text: "Date, guests, venue, budget and dietary needs" },
        { _key: k("o"), iconName: "shield-check", title: "Deposits and payments online", text: "A payment link after you accept the quote" },
        { _key: k("o"), iconName: "plug", title: "Office lunch ordering", text: "Cutoff times, minimums, repeat orders, invoices" },
        { _key: k("o"), iconName: "image", title: "Photos of your real events", text: "Galleries by event type that load fast on a phone" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Area, headcounts, menus and prices as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple catering website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Quote form, office ordering, deposits, accounts", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have built",
      subtitle:
        "Each of these sites does part of the job a catering website does. Landi Room, a beauty salon in Warsaw, runs a Next.js and Sanity landing page that sells an online course with Stripe Checkout; its first Google Ads campaign brought more than 100 sales — the same pay-online flow a catering deposit needs. The site of a DJ and producer has a video gallery and a booking form for events and still loads in under one second, which is what a gallery of catered events needs on a phone. Felgilab, a wheel-renovation workshop in Warsaw, moved to a rebuilt WordPress site with plain service and price pages, which is how packages and per-person prices should read. For a renovation and property-investment company in Warsaw I made a premium design in which big photos of completed projects carry the sale. Giuseppe, a psychotherapist in Milan, has a calm, custom-made Next.js and Sanity design, and ChatGPT already cites his newer pages.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "official-website-for-dj-and-producer-sasha-dith",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your catering website",
      subtitle: "I reply within one business day with a proposed page list for your catering site, a short note on how quotes and payments would work, and a fixed price.",
      contextLabel: "Catering company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website, inquiries by phone and email", "A template on Wix, Squarespace or another builder", "An older WordPress site", "Only marketplace listings"] },
        { _key: k("z"), question: "What should the site do first?", options: ["Bring event quote requests", "Take office lunch orders", "Collect deposits online", "All of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Catering website design is the service I offer catering companies that want their site to bring quote requests and orders, not only to show nice photos. I design and build the whole site myself — the look, the menus, the quote form and the payments — so you deal with one person for both the design and the way the site works, at a price fixed before the start. A catering site has two kinds of visitors: a planner preparing an event weeks ahead who needs enough detail to send a request, and an office assistant who needs lunch for twelve people tomorrow and wants to order in a few minutes."),

        h2("What the first screen of a catering website shows"),
        p("The visitor decides within seconds whether to keep reading, so the first screen on a phone answers four things without scrolling:"),
        li("what you cater and where — “Corporate and wedding catering in Denver and the Front Range”, with your own words and area"),
        li("two clear paths: Request a quote for events, and Order lunch for offices if you sell drop-off"),
        li("one photo from a real event of yours, not a stock buffet"),
        li("a call and a text button for planners who would rather talk"),
        p("On phones the quote button sits pinned to the lower edge. The story of the company, the chef and the awards comes further down, where the people who are already interested will read it."),

        h2("Catering menus by event type on the website"),
        p("A caterer’s menu is not one list. The same kitchen sells boxed lunches, a plated wedding dinner and a canapé reception, and each buyer wants to see only their part. The site organizes menus by event type — corporate, wedding, office lunch, private party — and each menu page shows:"),
        li("packages or sample menus as text, with dish names and portions"),
        li("dietary marks — vegetarian, vegan, gluten-free, halal or kosher where you offer them — and a note on allergen information"),
        li("the service styles each menu comes in: drop-off, buffet, family style, plated, stations"),
        li("a “start a quote with this menu” button that opens the form with the menu already selected"),
        p("Menus are edited in the CMS. A seasonal menu replaces the old one in a few minutes, and the layout stays the same whatever you add."),

        h2("Price per person and minimum orders on a catering website"),
        p("Planners want to know whether you fit their budget before they write. A pricing block on each menu page shows a “from” price per person for each service style, the smallest guest count or order total you accept, and the extras: staff hours, rentals, travel outside your area, service charge. If you would rather not publish exact figures, ranges do the job. Clear numbers filter out requests you would decline anyway and make the rest more serious."),
        p("For buffets and drop-off menus a small estimator helps: the visitor chooses a package and enters the guest count, sees a ballpark figure and continues to the form with both values carried over. The final quote is still yours to make."),

        h2("A catering quote form: event date, guest count, venue, budget and dietary needs"),
        p("The quote form is where a catering website earns its money. It asks for what you need to send a real quote, and nothing more:"),
        li("event type and date, with fully booked dates marked so nobody asks for a day you cannot take"),
        li("guest count and the venue or address, with a question about kitchen access on site"),
        li("service style and a budget per person chosen from ranges"),
        li("dietary needs: how many vegetarian, vegan, gluten-free or allergy meals"),
        li("contact details and whether the client prefers a call, an email or a text"),
        p("The form is split into three short steps, so on a phone it does not feel like paperwork. Each request reaches your inbox or CRM in the same format, and the client gets an automatic reply saying when to expect your quote."),

        h2("Online ordering for office lunches and drop-off catering"),
        p("Drop-off catering works more like a web store. The site shows a menu of boxed lunches, platters and breakfasts with prices, an order cutoff such as 2 p.m. the day before, delivery windows and the minimum order. Clients pay by card, Apple Pay or Google Pay, upload a list of names if each box should be labeled, and repeat last week’s order in two clicks."),
        p("Companies that order every week get an account with saved addresses, several people allowed to order, and a monthly invoice instead of card payments. Purchase order numbers and billing contacts are stored with the account, so accounting gets what it needs without a round of emails."),

        h2("Deposits and online payments for catering events"),
        p("An event is confirmed by a deposit. After you accept a request and send the quote, the client receives a payment link, pays the deposit by card through Stripe or another payment provider, and the date is marked as booked; a second link for the balance goes out closer to the event. Nobody has to read a card number over the phone, and you see at a glance which events are paid."),
        p("I built the same pay-then-confirm flow for Landi Room, a Warsaw beauty salon whose landing page sells an online course through Stripe Checkout: the buyer pays and gets access automatically, with no manual step on the salon’s side."),

        h2("Photos of real events in catering website design"),
        p("Stock photos of buffets look the same on every catering site, and planners recognize them. The design is built around your own pictures: the set-up before guests arrive, plated dishes, boxed lunches lined up for delivery, your team serving. Galleries are sorted by event type, so a couple sees weddings and an office manager sees lunches and conferences."),
        p("A catering gallery can grow to hundreds of photos, so images are resized for each screen and loaded as the visitor scrolls. The DJ and producer site I built has a video gallery and still loads in under one second; a catering gallery uses the same technique. If you have few photos yet, I give your photographer a shot list for the next events."),

        h2("Service area and delivery details on a catering website"),
        p("Planners need to know early whether you come to their venue. A service-area block shows the cities and suburbs you cover on a simple map, the delivery fee or travel minimum for each zone, and how much notice you need for each kind of event. The quote form checks the address against those zones and tells the visitor right away if the venue is outside your area. All zones and fees are settings you change yourself."),

        h2("Catering website templates, builders or a custom design"),
        p("Search for catering website templates and you get builder galleries and theme stores, and lists of the best catering websites mix sites built every possible way. A template is a fair start for a new caterer with one menu: it is live in days. The limits show as the business grows. The quote form is a generic contact form, deposits and office ordering need several plugins that do not talk to each other, menus by event type become one long page, and the site looks like the competitor down the road who bought the same theme."),
        p(
          "A custom catering site is built around your event types, your quote process and your own photos, on WordPress or on Next.js with a headless CMS, and the code, the domain and the client data stay yours. I have built websites for restaurants whose owners asked me not to show them publicly. If you also run a restaurant with a dining room, the ",
          link("restaurant website", "/restaurant-website"),
          " page covers that kind of site.",
        ),

        h2("A catering website that ChatGPT and Google AI Overviews can read"),
        p("A planner may ask ChatGPT or Google’s AI Overviews which caterers in their city can serve eighty guests with vegan options, the assistant answers from text it can parse. So the service area, headcounts you handle, menus, dietary options, lead times and price ranges sit in the page HTML as plain text — not locked in a PDF menu or an image — and the business and its services get structured data. Giuseppe’s site in Milan is built this way, and ChatGPT already quotes his newer pages."),
        p(
          "Ongoing work on AI answers is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; rankings for corporate, wedding and office lunch searches are covered on the ",
          link("catering SEO", "/catering-seo"),
          " page.",
        ),

        h2("How much a catering website costs"),
        p("There is no separate design invoice: the price includes the visual design, every page template and the finished, working site."),
        li("A simple catering website — home, menus by event type, gallery, service area and a quote form: 700–1,400 €."),
        li("A catering website with a multi-step quote form, price estimator, office lunch ordering, deposits, company accounts and invoices: from 2,000 €."),
        p(
          "The steps from brief to launch are described on the ",
          link("website development", "/services/website-development"),
          " page; the full price list is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Catering website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for a catering business cost?", "700–1,400 € for a simple site with menus and a quote form, from 2,000 € for a site with office lunch ordering, deposits and company accounts. The design is in both prices; the fixed figure comes once I have seen your menus and how you handle quotes today."],
          ["How long does it take to build a catering website?", "Most catering sites take five to eight weeks from brief to launch. Menus, prices and photos take the longest; a simple site with a quote form can go live sooner."],
          ["Can clients pay a deposit on the website?", "Yes. After you accept a request, the client gets a payment link for the deposit and later one for the balance. Payments go through Stripe or another provider available in your country, and the event is marked as paid."],
          ["Can the site take office lunch orders with a cutoff time?", "Yes. The cutoff, delivery windows, minimum order and dates you do not deliver are settings in the admin panel. Regular clients repeat orders and receive a monthly invoice."],
          ["Is a catering website template enough?", "For a new caterer with one menu and simple quotes, often yes. A custom site pays off when you sell several event types, take deposits, run office ordering or want a quote form that collects everything you need."],
          ["Will the quote form work with my CRM or catering software?", "Before the quote I check what your software accepts. Many tools take requests by email or through an integration; if yours does not, requests arrive by email and in the site’s admin panel in one format."],
          ["Can my team update menus, prices and photos?", "Yes. Your team changes menus, packages, prices, service zones, booked dates and galleries in the admin panel, and anything new takes on the existing layout automatically."],
          ["Can you build a website for a US caterer from Poland?", "Yes. We talk by video call and email, in English. Afternoons in Warsaw are mornings in the US, so we can review designs before your day gets busy. I invoice in EUR or, by agreement, in another currency."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a catering website: what to send me"),
        p(
          "Send your current site or social profile, your menus with prices per person and minimums, the events you cater, the area you serve, how you handle quotes and deposits today, the payment and catering software you use and a few photos from recent events. I will reply with a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
