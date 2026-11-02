// Landing page fixture: ecommerce web design and online store development (EN),
// group «ecommerce-web-design». NEW page — created with create-landing.cjs at
// /services/ecommerce-web-design, parent /services.
//
// Why this page exists (02.11.2026). The site had only an SEO page for stores
// (/services/ecommerce-seo-services) and the general development page. The
// owner forms were not covered at all: «ecommerce web design» 9900,
// «ecommerce website design» 9900, «ecommerce website development» 4400.
//
// Why ONE page and not three. Intent check (research/pseo/intent-check-ecommerce.md):
// «ecommerce website design» and «ecommerce website development» share one
// domain out of eight, so Google sees different intents — but the composition
// decides what a service page can win. «ecommerce web design» has agencies and
// studios in the top ten (wemakewebsites, thriveagency, shopify, elementor),
// «ecommerce website design» has galleries and UX research (baymard,
// onepagelove, siteinspire), «ecommerce website development» has platforms and
// courses (bigcommerce, mailchimp, odoo, coursera). So the H1 takes the form a
// service page can rank for, and the other two live in H2.
//
// «ecommerce seo» shares ZERO domains with development, which is why the
// existing SEO page stays separate and is linked rather than merged.
//
// Price: from €2,000, the owner's decision of 02.11.2026 — same entry as a
// regular full website, with the catalogue, integrations and languages moving
// it up.
import { p, h2, h3, li, link, k } from "./pt";

export const ecommerceWebDesignEn = {
  lang: "en",
  group: "ecommerce-web-design",
  parentPath: ["services"],
  slug: "ecommerce-web-design",
  title: "Ecommerce Web Design and Store Development",
  heading: "Ecommerce web design and online store development: a shop that sells, not just one that looks finished",
  excerpt:
    "I design and build online stores: catalogue, cart, payments, delivery and returns. The design decides whether a visitor reaches the checkout, and the build decides whether the catalogue can be found at all. This page says what goes into both, what it costs and how long it takes.",
  seo: {
    metaTitle: "Ecommerce web design and development — from €2,000",
    metaDescription:
      "Online store design and development: catalogue, cart, payments, delivery. Shopify, WooCommerce or a custom build. From €2,000, reply in a working day.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Catalogue, cart, payments, delivery", "Stores from €2,000", "Reply in 1 working day"],
  heroPhonePoints: ["Add to cart", "Size and fit", "Delivery and returns", "Secure checkout"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Online store: catalogue, cart, payments and delivery", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Single-product landing page with payment", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of an existing store, keeping its rankings", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I build",
      title: "What I build for online stores",
      items: [
        { _key: k("o"), iconName: "shopping-cart", title: "A store from scratch", text: "Catalogue, cart, payments, delivery, returns" },
        { _key: k("o"), iconName: "globe", title: "A store in several languages", text: "Languages, currencies, delivery per country" },
        { _key: k("o"), iconName: "refresh-cw", title: "Redesign of a store that already sells", text: "New design without losing the rankings" },
        { _key: k("o"), iconName: "move", title: "Migration to another platform", text: "Catalogue, addresses and redirects kept" },
        { _key: k("o"), iconName: "credit-card", title: "One product, one page", text: "A landing page with payment, no catalogue" },
        { _key: k("o"), iconName: "plug", title: "Integrations for an existing store", text: "Stock, accounting, delivery, CRM" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("What ecommerce web design decides that a template does not"),
        p("A store template gives you a grid of products and a checkout. What it does not give you is the set of decisions that determine whether someone buys: how a product with four variants is shown, what happens when a size is out of stock, where the delivery cost appears, and how many steps stand between the cart and the payment. Those decisions are the design work, and they are made per store, because they depend on what you sell."),
        p("Two examples of what this means in practice. A clothing store that hides the size chart behind a tab loses the hesitant buyer, who would rather close the page than guess; the same store that shows the size chart next to the size selector converts the same visitor. A store with free delivery above a threshold that mentions it only at the final step gets abandoned carts, because the visitor priced the order wrong at the start."),

        h2("Ecommerce website development: catalogue, cart, payments, delivery, returns"),
        p("The build is five jobs, and a store launched without any one of them comes back as a bill later."),
        li("the catalogue: categories, filters, product variants, and one address per product rather than three;"),
        li("the cart and checkout: as few steps as the payment provider allows, guest checkout kept, delivery cost shown before the last step;"),
        li("payments: card, and the local method your buyers actually use, with the provider chosen for your country rather than for the demo;"),
        li("delivery: zones, prices, pickup points, and a tracking number that reaches the buyer without you typing it;"),
        li("returns and the legal pages: terms, privacy, and the withdrawal rules your market requires, written as pages rather than as a PDF."),
        p("Stock and accounting are the sixth job when you already run them somewhere. A store that keeps its own separate stock count is a store that oversells, and overselling costs more than the integration did."),

        h2("Choosing a platform: Shopify, WooCommerce or a custom build"),
        h3("Shopify"),
        p("Hosted, fast to launch, and it handles payments and tax rules for you. The trade is monthly fees, app fees on top, and a limit on how far the catalogue logic can be bent. For a straightforward catalogue sold in one or two countries, that trade is usually worth it."),
        h3("WooCommerce development on WordPress"),
        p("Cheaper to own, and anything can be changed because the code is yours. The trade is that it is a real site to maintain: updates, backups, and speed work on the listing templates, which is where WooCommerce stores slow down. Right when you already run WordPress or need unusual catalogue rules."),
        h3("A custom build on Next.js with a headless CMS"),
        p("Right when the store is part of something bigger — accounts, several languages and currencies, a configurator, or data arriving from a system you already run. Fastest on the pages that sell, and the most expensive to start. Wrong for a first store with thirty products."),
        p(
          "I build on all three and say which fits before quoting, because the platform decides the price more than the design does. If the store is one part of a larger site, that is ",
          link("website development", "/services/website-development"),
          ", and the technical side of a custom build is ",
          link("Next.js development", "/services/nextjs-development-services"),
          ".",
        ),

        h2("What an ecommerce website costs and what moves the price"),
        p(
          "An online store with a catalogue, cart, payments and delivery starts at €2,000. A single-product landing page with payment is €700–1,400. A redesign of a store that already sells, keeping its rankings, starts at €1,000. What moves the price: how many products and variants, whether stock and accounting have to be integrated, how many payment and delivery providers, how many languages and currencies, and whether the catalogue arrives as a clean file or as a spreadsheet nobody has touched in two years. Design is included, never a separate line. The full list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long an online store takes to build"),
        p("A store with a catalogue takes four to eight weeks, a single-product landing page two to three. What stretches it is almost never the code: it is the product data. Photographs, descriptions, variants, weights for delivery, and the decisions about what happens to items you no longer stock. Stores that launch on time are the ones where somebody on your side owns the catalogue file from day one."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: catalogues, payments and multilingual builds",
      subtitle:
        "What these have in common with a store: a large catalogue that has to stay findable, payments and protected access, accounts, and several languages at once. An ecommerce landing page with payment and secured video access, a multilingual property platform, a WordPress rebuild, a multilingual site for student services, and an investment platform with paid access.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
        "investment-platform-with-ai-guided-learning",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your online store",
      subtitle: "I reply within one working day: which platform fits, what I would build and at what price.",
      contextLabel: "Store or business name",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What are you selling?", options: ["Physical products", "Digital products", "Services or bookings", "A mix"] },
        { _key: k("z"), question: "How many products?", options: ["Up to 30", "30 to 300", "More than 300", "One product"] },
        { _key: k("z"), question: "What exists today?", options: ["No store", "A store that sells badly", "Only a marketplace", "Only social media"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ecommerce website design for AI shopping answers (GEO, AEO)"),
        p("Buyers increasingly ask ChatGPT, Perplexity or Google's AI Overviews to compare before they open a store. An assistant answers from text and structured data it can read, and a store built as a picture gallery gives it nothing. What makes a catalogue readable: product name, price, availability and delivery terms as text rather than inside an image; product and offer markup that matches what the page shows; one address per product; and the same price and availability on the store, the marketplace listing and the Google Merchant feed."),
        p(
          "Getting an existing store into that state is its own job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". And if the store is built well but search brings nothing, that is ",
          link("ecommerce SEO", "/services/ecommerce-seo-services"),
          " — a separate job from the build, and the search results for the two barely overlap.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Ecommerce web design and development: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does an online store cost?", "From €2,000 for a store with a catalogue, cart, payments and delivery. €700–1,400 for a single-product landing page with payment. From €1,000 for a redesign that keeps the existing rankings. The number of products and variants, the integrations and the number of languages move the price."],
          ["Shopify, WooCommerce or a custom build — which should I pick?", "Shopify for a straightforward catalogue in one or two countries, where monthly fees are a fair price for not maintaining anything. WooCommerce when you already run WordPress or need unusual catalogue rules. A custom build when the store is part of something bigger — accounts, several languages and currencies, a configurator. I say which fits before quoting, because the platform moves the price more than the design does."],
          ["Can you move my store to another platform without losing search traffic?", "Yes, and that is the part most migrations get wrong. The catalogue keeps its addresses where it can, every changed address gets a redirect, and the product data moves as data rather than by hand. Without that, a migration costs the store its rankings for months."],
          ["Will the store connect to the stock system we already use?", "Yes, and it should. A store with its own separate stock count oversells, and one oversold weekend costs more than the integration."],
          ["Do you set up the payments yourself?", "I set up the integration; the account with the payment provider is opened in your name, because it is tied to your business and your bank. I say which provider fits your country and what it charges before we start."],
          ["How long does it take?", "Four to eight weeks for a store with a catalogue, two to three for a single-product landing page. The product data is what stretches it, not the code — photographs, descriptions, variants and delivery weights."],
          ["Does the store come with SEO?", "It comes built so that SEO is possible: one address per product, readable category pages, markup that matches the page, and speed on the templates that sell. Ongoing promotion is separate work and a separate price, on the ecommerce SEO page."],
          ["Who owns the store after launch?", "You do: the code, the domain, the catalogue, the CMS and provider logins. Prices, products and texts are edited by you without a developer, because in a store they change weekly."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an online store: what to send me"),
        p("Send what you sell, roughly how many products and variants, which countries you ship to, and which systems you already run for stock and accounting. If a store exists, send the link. I reply within one working day with which platform fits, what I would build and at what price — and if a single-product landing page would do the job for a tenth of the budget, I will say so."),
      ],
    },
  ],
};
