// Landing page fixture: Florist website design (EN), group
// «florist-website-design». New page.
// Semantic core: ref/creative-leisure.md, florists group (US): florist website
// design 170 (H1, several H2, cost H2, FAQ) · florist website template 90
// (templates H2, FAQ) · best florist websites 50, best florist website design
// 10 (templates H2) · florist website builder 20 (templates H2).
// Intent: ref/intent-check-creative-leisure.md — «florist website design» vs
// «florist seo» 0 of 10 shared URLs, 0 shared domains → separate pages
// (sibling linked). Design SERP: Behance, Siteinspire, ThemeForest, Pinterest,
// florist platforms (QuickFlora) and studios (Hawthorn Creative, Queenie
// Creative, florist-webdesign.com) → owners choosing a designer or a template.
// «website for florists» = flower shops themselves (customers’ demand) — not
// targeted.
// Angles: first screen with today’s cutoff, online shop built around delivery
// areas, fees, cutoffs, time windows and holiday capacity, own product photos
// with sizes and a substitution note, gift checkout (recipient, card message,
// anonymous sender, guest checkout), subscriptions for homes and businesses,
// wedding inquiry form with budget ranges and inspiration upload, calm design
// that lets flowers lead (renovation case), templates / wire-service sites /
// custom build, AI-readable build, cost. Portfolio: renovation (premium visual,
// named in the brief for florists), Landi Room (Stripe payment + automatic
// confirmation), Cyprus VIP Estates (catalog with filters), Felgilab, Giuseppe.
// NOT on this page: ranking work — delivery area pages as SEO, occasion pages,
// wire services in search, Google Maps, seasonal calendar (/florist-seo —
// sibling; map work → /services/local-seo-services). The brief names no
// neighbour page for florists; the occasion type the owner excludes is not
// mentioned in any form.
// Owner’s rules: every page covers AI search; design is included in the
// price; never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const floristWebsiteDesignEn = {
  lang: "en",
  group: "florist-website-design",
  slug: "florist-website-design",
  title: "Florist website design and development",
  heading: "Florist Website Design and Development",
  excerpt:
    "I design and build florist websites: an online flower shop with delivery areas and time slots, real photos of your arrangements, a gift checkout with card messages that works on a phone, flower subscriptions and a wedding inquiry form that brings couples with a date and a budget.",
  seo: {
    metaTitle: "Flower Shop Website Design with Online Orders | Bandziuk",
    metaDescription:
      "Florist website design: online flower shop with delivery areas and time slots, real product photos, gift checkout, subscriptions, wedding inquiries. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Deliver today", "Choose a delivery window", "Add a card message", "Wedding inquiry"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple florist website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Online flower shop with delivery areas and time slots, product pages, gift checkout, subscriptions and wedding inquiries, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with florist website design",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "An online shop built around delivery", text: "Areas, fees, cutoff times and delivery windows" },
        { _key: k("o"), iconName: "image", title: "Product photos of your own work", text: "One shooting style, sizes shown, no network photos" },
        { _key: k("o"), iconName: "shield-check", title: "A checkout made for gifts", text: "Recipient, card message and date — on a phone" },
        { _key: k("o"), iconName: "layers", title: "Flower subscriptions", text: "Weekly or monthly, paused and skipped online" },
        { _key: k("o"), iconName: "message-circle", title: "Wedding and event inquiries", text: "Date, venue, budget range and inspiration photos" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Delivery rules, products and prices as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple florist website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Online shop, delivery slots, subscriptions, weddings", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have built",
      subtitle:
        "Each of these sites does a part of what a flower shop site does. A Warsaw renovation and property-investment company got a premium design where large photos of finished work carry the sale, as arrangements do for a florist. Landi Room, a Warsaw beauty salon, sells an online course through Stripe Checkout, and the buyer gets access automatically after paying — the same pay-and-confirm flow a flower order needs. Cyprus VIP Estates, built from scratch in five languages, has a catalog with filters and a map, with inquiries going straight to the CRM. Felgilab, a Warsaw wheel-renovation workshop, got a WordPress rebuild with clear service and price pages. A psychotherapist in Milan got a calm custom design on Next.js and Sanity, and its new pages already appear in ChatGPT answers.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "e-commerce-landing-page-with-secured-video-access",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your florist website",
      subtitle: "I reply within one business day with a page list for your shop, a short note on how delivery and checkout would work, and a fixed price.",
      contextLabel: "Flower shop name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website, orders by phone and Instagram", "A site from a wire service or florist platform", "Shopify, Wix or Squarespace", "An older custom site"] },
        { _key: k("z"), question: "What should the site sell first?", options: ["Same-day delivery orders", "Weddings and events", "Subscriptions and office flowers", "All of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Florist website design is the service I offer flower shops that want to take orders on their own site: I design and build the whole shop myself — the look, the product pages, the delivery rules and the checkout — so one person answers for how it looks and how it sells, at a price fixed in advance. A flower shop site has an unusual job. It sells something perishable and handmade, delivered at a set time to someone who is not the buyer, usually to a customer on a phone who decided a few minutes ago."),

        h2("Florist website design: what the first screen of a flower shop shows"),
        p("A visitor to a florist’s site rarely wants a brand story first. The first screen answers four questions:"),
        li("whether you deliver today and until when — “Same-day delivery in Austin and nearby towns, order by 1 p.m.”, with your own cutoff"),
        li("where to start — best sellers, shopping by occasion or by price"),
        li("a call and a text button for people who would rather talk to the shop"),
        li("the address and hours for those who want to pick up"),
        p("On phones a fixed bar holds the cart and the call button. The cutoff line changes by itself once the day’s same-day orders close, so nobody orders a “today” bouquet in the evening that cannot be made."),

        h2("An online flower shop with delivery areas, time windows and cutoff times"),
        p("Delivery rules are what separates a flower shop from any other web store, and they are where generic templates break. The shop I build knows:"),
        li("your delivery areas — an address or ZIP code check before checkout, with the fee for each zone"),
        li("the same-day cutoff, which can differ on weekends, and the dates you do not deliver"),
        li("the delivery windows you can promise — morning, afternoon or none — and how many orders each window takes"),
        li("holiday capacity: on Valentine’s Day and Mother’s Day a window closes when it is full, instead of taking orders your drivers cannot carry"),
        p("Pickup in store is an option of its own, with its own hours. All of these rules sit in the CMS, so you change a fee or block a date without calling a developer."),

        h2("Product photos on a florist website: your arrangements, sizes and substitutions"),
        p("Catalog photos from a wire service show bouquets your shop may never make, and customers notice when the delivered flowers look different. Product pages sell better with photos of your own arrangements, shot in one consistent way:"),
        li("the same background, light and angle for every product, so the catalog looks like one shop"),
        li("each arrangement in two or three sizes, with the size made visible — a vase, a hand, a measurement"),
        li("a second photo from the side or in its wrapping, because gift buyers care how it arrives"),
        p("Flowers change with the season, so each product page carries a short substitution note: the florist may replace a stem with one of equal value in the same color palette. Saying this before checkout heads off the calls that begin with “this is not what I ordered”. Images are compressed and served in modern formats, so a catalog of a hundred bouquets still opens quickly on a phone."),

        h2("A checkout for flower orders: recipient, card message and delivery date"),
        p("A flower checkout serves two people: the sender who pays and the recipient who opens the door. What the shop needs is collected in a few short steps:"),
        li("the delivery date first, because it decides what is available and what delivery costs"),
        li("the recipient’s name, address and phone, with a note field for a front desk, a hospital room or a gate code"),
        li("the card message with a character limit and a few ready lines for people who cannot find the words"),
        li("the sender’s details, payment by card, Apple Pay or Google Pay, and an option to stay anonymous"),
        p("Guest checkout is the default: asking someone to create an account before buying a birthday bouquet loses the order. A confirmation by email or text, and a second message when the flowers are delivered, save the shop a round of “did they arrive?” calls."),

        h2("Flower subscriptions on a florist website: homes, offices and restaurants"),
        p("Subscriptions bring steady revenue between holidays. On the site they are a product of their own: weekly, every two weeks or monthly, with a size and a delivery day. Customers pause, skip or cancel online, and payments recur through Stripe or your shop platform, so nobody chases invoices. Offices, hotels and restaurants get a business form for the number of arrangements, the delivery day and the billing contact, and you agree terms before the first delivery."),

        h2("Wedding and event inquiries on a florist website"),
        p("Nobody adds a wedding to a cart. The site shows real weddings — venue, season and flowers, published with the couple’s permission — and leads to an inquiry form that asks what you need before the first call:"),
        li("the date and the venue, so you can check availability at once"),
        li("the guest and table count, and the pieces they want — bouquets, boutonnieres, centerpieces, arches"),
        li("a budget range chosen from options rather than typed"),
        li("an upload for inspiration photos or a link to a Pinterest board"),
        p("Inquiries reach your inbox in one format, or your CRM if you use one, and a consultation can be booked through a calendar link. Dates you are fully booked can be marked on the form, so couples do not wait for an answer you cannot give."),

        h2("Florist branding on the website: a calm design that lets the flowers lead"),
        p("A flower shop site should look like the shop: its palette, its wrapping paper, the lettering on its window. The flowers bring all the color, so the design keeps to a few neutral tones, one accent color for order buttons and type that reads well on a small screen. Large photos lead, text stays short, and seasonal banners never cover the products."),
        p("I took the same approach for a Warsaw renovation and property-investment company: a premium site where large photos of finished interiors do the selling and the design stays out of their way. On a florist’s site the arrangements take that place."),

        h2("Florist website templates, wire-service sites or a custom design"),
        p("Many florists start with a site from their wire service or a florist platform, or with a Shopify or Squarespace template, and lists of the best florist websites include shops built every way. A template or a florist website builder is a fair start: it takes orders on day one. Its limits appear as the shop grows. The catalog fills with network photos, the delivery settings cannot express your zones and windows, the shop looks like every other one on the platform, and the domain or the customer list may stay with the vendor if you leave. A custom site is built around your delivery rules and your own photos, on WordPress with WooCommerce or on the shop platform you already use, and the code, the domain and the customer data remain yours."),
        p(
          "If you already have a site, its rankings survive the move as long as each old product and category URL gets a 301 redirect to its new page; that is how all 468 of Giuseppe’s blog posts moved without a single lost URL. The process is on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("A florist website that ChatGPT and Google AI Overviews can read"),
        p("When someone asks ChatGPT or Google’s AI Overviews which florist nearby delivers on Sunday or has wedding packages within a budget, the assistant answers from what it can parse on your pages. So delivery areas, fees, cutoff times, hours, product names and prices are written into the HTML as text — not baked into banners or hidden in the cart script — and the shop and its products get Florist and Product structured data. Giuseppe’s site in Milan is built on the same rules, and ChatGPT already cites its new pages."),
        p(
          "How I keep a business in those answers over time is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; getting found for delivery and occasion searches is on the ",
          link("florist SEO", "/florist-seo"),
          " page, and work on the Google Maps listing is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("How much florist website design costs"),
        p("Design is part of the build, not a separate invoice: one price covers the look, the page templates and the working shop."),
        li("A simple florist website — home, best sellers with an order or inquiry button, weddings, about and contact: 700–1,400 €."),
        li("An online flower shop with delivery areas and time windows, product pages, gift checkout, subscriptions and a wedding inquiry form: from 2,000 €."),
        p(
          "How a build runs from brief to launch is on the ",
          link("website development", "/services/website-development"),
          " page; every price I charge is listed on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Florist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a florist website cost?", "700–1,400 € for a simple site, from 2,000 € for an online flower shop with delivery areas and windows, product pages, gift checkout, subscriptions and wedding inquiries. Design is included either way; I fix the price after seeing your catalog and delivery rules."],
          ["How long does it take to build an online flower shop?", "Usually five to eight weeks from the brief. Product photos and delivery rules take the most time; the build itself follows a clear template. A simple site without a shop can be ready sooner."],
          ["Can the website handle same-day cutoffs and delivery zones?", "Yes. Zones with their fees, the daily cutoff, weekend rules, blocked dates and the number of orders per delivery window are settings you change yourself in the CMS."],
          ["Can I keep my wire service and point-of-sale system?", "Yes. The website takes your direct orders; network orders keep arriving the way they do now. Before the quote I check what your point-of-sale system allows, and if it has no connection, web orders arrive by email and in the shop’s admin panel."],
          ["Is a florist website template enough?", "For a new shop with a short catalog and simple delivery, often yes. A custom design pays off when you have several delivery zones and windows, subscriptions, weddings and a catalog you want to photograph yourself."],
          ["Can my staff update products, prices and holiday dates?", "Yes. Products, prices, sizes, delivery fees and blocked dates are edited in a simple admin panel, and new products follow the same layout as the rest of the catalog."],
          ["Can a web designer in Poland build a site for a US flower shop?", "Yes. We work by video call and email, in English. Warsaw afternoons line up with US mornings, so we can review designs before your first deliveries go out. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order florist website design: what to send me"),
        p(
          "Send your current site or Instagram, your best sellers with prices, your delivery areas and fees, the same-day cutoff, whether you sell subscriptions and wedding flowers, the payment and point-of-sale tools you use and a few photos of your arrangements. I will reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
