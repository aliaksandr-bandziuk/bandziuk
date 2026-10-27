// Landing page fixture: Jewelry Store SEO (EN), group «jewelry-store-seo». New page.
// Semantic core: ref/batch-h2.md, jewelry store SEO group (US, 21 phrases, sum
// 440): seo for jewelry 110 (H1, metaTitle, several H2) · jewelry store local
// seo service 90 (local H2) · seo for jewelry stores 30, seo for jewelry store
// 20, jewelry store seo 10 (H1 wording, cost H2, FAQ) · seo for jewelry
// websites 20 (catalog and product H2s) · seo for jewelry business(es) 10 ·
// seo for jewelry brands 10, seo for handmade jewelry 10 (handmade brands H2) ·
// etsy seo for jewelry 10, top jewelry keywords on etsy 20 (one paragraph
// only: Etsy is a marketplace, this page is the store’s own site) · seo
// keywords for jewelry 10, jewelry keywords list 20, best seo keywords for
// jewelry 10, keywords for jewelry descriptions 10, most searched jewelry 10
// (answered as an H3 on how jewelry is searched, not as a list).
// Intent: ref/intent-check-batch-h.md — «jewelry seo» vs «ecommerce seo
// services» 0 of 10 shared URLs, 0 shared domains → own page; the ecommerce
// SEO service is linked once. SERP = SEO agencies and jewelry trade bodies
// (LinkGraph, Jewelers Mutual/Plumb Club, Salt Agency) → the searcher is a
// store owner. No PAA for this group.
// Angles: search by type, metal, stone, occasion, price and style; faceted
// navigation (what to index); product pages with metal, weight, stone,
// certificate, sizes, returns; factual copy vs lifestyle copy (Cyprus platform
// lesson, +16%); image SEO, Product/Offer structured data, merchant listings,
// Merchant Center free listings; engagement rings and bridal; gift and
// occasion pages tied to the buying calendar; showroom local SEO (repairs,
// resizing, engraving, appointments); handmade brands vs Etsy; AI answers;
// measuring sales and bookings; cost (large stores from 1,300 €).
// NOT on this page: building or redesigning the shop, checkout, payments
// (no sibling website page for jewelers yet); general ecommerce SEO for
// multi-category shops (/services/ecommerce-seo-services — linked once);
// maps work in depth (/services/local-seo-services); ads and Shopping ads
// (not offered). Neighbour: /florist-seo (another occasion-driven shop) —
// linked once, none of its paragraphs, theses or FAQ wording reused.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings; the
// Cyprus platform client is never named.
import { p, h2, h3, li, link, k } from "./pt";

export const jewelryStoreSeoEn = {
  lang: "en",
  group: "jewelry-store-seo",
  slug: "jewelry-store-seo",
  title: "Jewelry store SEO",
  heading: "SEO for Jewelry Stores and Jewelry Brands",
  excerpt:
    "I do SEO for jewelry stores and jewelry brands: category and filter pages that match how people search for rings, earrings and chains, product pages with metal, stone and certificate details, an engagement ring section, Google Maps for your showroom and a place in AI answers, measured in sales and appointments.",
  seo: {
    metaTitle: "Jewelry Store SEO: Catalog, Local and AI Search | Bandziuk",
    metaDescription:
      "SEO for jewelry stores: category and filter pages, product data, engagement rings, Google Maps for the showroom, AI answers, sales reports. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Catalog, showroom and AI search", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Lab-grown engagement rings", "14k gold hoop earrings", "Ring resizing near me", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Jewelry store SEO audit: catalog, product pages, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a jewelry store: category and filter pages, product data, engagement ring section, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a jewelry store or jewelry brand", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for a jewelry store",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data by type, metal and stone", text: "How your buyers really phrase rings, chains and earrings" },
        { _key: k("o"), iconName: "layers", title: "Category and filter pages that can rank", text: "Combinations with demand indexed, the rest kept out" },
        { _key: k("o"), iconName: "file-text", title: "Product pages with the facts buyers check", text: "Metal, weight, stone, size, certificate, returns" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for your showroom", text: "Repairs, resizing, engraving and appointments" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Materials and policies written so assistants can quote them" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in sales and bookings", text: "Revenue and consultation requests by page" },
      ],
      prices: [
        { _key: k("r"), label: "Jewelry store SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a jewelry store", value: "from 800 € / month", note: "catalog, product data, maps, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: catalogs and sales pages I have built and optimized",
      subtitle:
        "What these projects share with a jewelry store is a catalog people search by attributes and buyers who check every detail before they pay. For a property platform in Cyprus I built a catalog of about 375 developments with filters and a map and run its SEO; when its descriptions were once rewritten as lifestyle copy, commercial pages lost traffic, and going back to factual descriptions brought clicks back up 16%. Landi Room, a Warsaw beauty salon, got a sales page with Stripe Checkout that sold over 100 courses from its first Google Ads campaign. ScanM2, a 3D laser scanning company, left a no-code builder for a rebuilt WordPress site and its organic traffic grew 29×. A retail analytics consultant’s site has 153 pages in three languages built to be quoted by AI assistants, and a psychotherapist’s site in Milan already shows up in ChatGPT answers.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your jewelry store",
      subtitle: "I reply within one business day with the first changes I would make to your catalog and Google listing, and a fixed price.",
      contextLabel: "Store name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of jewelry business do you run?", options: ["Local jeweler with a showroom", "Online jewelry store", "Handmade or designer brand", "Engagement and bridal specialist"] },
        { _key: k("z"), question: "What should search bring you more of?", options: ["Online orders", "Showroom appointments", "Custom and engagement ring inquiries", "Repairs and resizing"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for jewelry stores: the work that puts your rings, earrings and necklaces in front of people searching for exactly that piece, and your showroom in front of people who want to see it in person before they buy. Jewelry is bought slowly and checked carefully. Buyers compare metal, stone, price and return terms across several shops, and the store whose pages answer those questions plainly gets the sale. I work alone and do the whole chain myself — keyword research, page structure, product data, code changes and reports — for local jewelers, online jewelry shops and designer brands."),

        h2("How people search for jewelry: SEO keywords by type, metal, stone and occasion"),
        p("A jewelry search is usually built from a few attributes, and every combination that people really type deserves an answer somewhere on your site:"),
        li("type and metal — “gold hoop earrings”, “sterling silver chain for men”, “platinum wedding band”"),
        li("stone and origin — “lab grown diamond engagement ring”, “sapphire stud earrings”, “moissanite vs diamond”"),
        li("recipient, occasion and budget — “silver bracelet for women”, “anniversary gift for wife under $500”"),
        li("style — “vintage engagement rings”, “dainty gold necklace”, “art deco ring”"),
        li("service and place — “jeweler near me”, “ring resizing [town]”, “custom engagement ring [city]”"),
        h3("SEO keywords for jewelry: why a keyword list is not a plan"),
        p("Lists of “top jewelry keywords” go around the internet, and every store that copies one ends up chasing the same phrases. What matters for your store is narrower: which attribute combinations you really stock, how many people search for each in your market, and which single page answers each one. I map every search to one URL, so two of your own pages never compete for the same query."),

        h2("Category and filter pages for a jewelry website: what to index and what to keep out"),
        p("A jewelry catalog multiplies fast. Metal × stone × type × size × price produces thousands of filter URLs, and only a small share of them match real searches — “white gold engagement rings” or “pearl drop earrings” do, “size 6.5, under $300, sorted by newest” does not. Faceted navigation needs clear rules:"),
        li("an indexable page for each combination with real demand and enough products, with its own title, heading and a short paragraph of text"),
        li("filters without demand stay usable for shoppers but are kept out of the index with canonical tags or noindex"),
        li("sorting and price-range parameters do not create new URLs for Google to crawl"),
        li("menus and category pages link to the combinations chosen to rank, and empty or single-product combinations never become pages"),
        p("On most shop platforms, WooCommerce included, this is set in the theme and filter plugin, sometimes with a small code change. I make those changes myself."),

        h2("Jewelry product page SEO: metal, stone, size, certificate and returns"),
        p("A buyer about to spend several hundred dollars on a ring reads the product page line by line. So does Google, and so does an AI assistant asked to compare two rings. A product page that ranks and sells states:"),
        li("metal and purity — 14k, 18k, 925 sterling silver, platinum — the weight in grams and any plating"),
        li("the stone: type, natural or lab-grown, carat weight, cut, color and clarity where they apply, and the grading report if there is one, for example from GIA or IGI, with its number"),
        li("sizes and how to find yours, chain lengths, and whether the piece can be resized later and for how much"),
        li("care, warranty, returns and delivery time, including for engraved and made-to-order pieces"),
        p("Lab-grown and simulated stones need to be named exactly as your market’s rules require — in the US, the FTC’s Jewelry Guides — on the product page, in the title and in the feed. If you sell pieces that other retailers also carry, the supplier’s text sits on dozens of sites already; your own description with the facts above is the one that can rank."),

        h2("Jewelry product descriptions that rank: facts first, lifestyle copy second"),
        p("On the property platform in Cyprus that I run, descriptions were once rewritten as lifestyle copy — mood, dreams, the feeling of living there. Commercial pages lost traffic. When factual descriptions came back, clicks rose by 16%. Jewelry copy is tempted in the same way: “a symbol of eternal love” gives a buyer, a search engine and an assistant nothing to work with, while “18k yellow gold, 2.1 g, 0.5 ct lab-grown round diamond, IGI report” answers three questions at once. A line of feeling is welcome after the facts, not instead of them."),

        h2("Image SEO for jewelry: photos, video and Product structured data"),
        p("Jewelry is chosen by eye, and Google Images and the Shopping tab show pictures before text. What I check and fix:"),
        li("file names and alt text that describe the piece — “18k yellow gold hoop earrings 20 mm on ear”, not IMG_0042"),
        li("several angles, a photo on the hand or ear for scale, and a short video for stones that need light to show"),
        li("images compressed and sized, so a category page with forty photos still loads fast on a phone"),
        li("Product structured data with Offer — price, currency, availability, priceValidUntil on sale prices — plus shipping and return details for merchant listings"),
        p("The same data feeds Google Merchant Center, where free listings can put your products in the Shopping tab without paying for ads. Feed errors such as mismatched prices or missing identifiers are fixed at the source."),

        h2("Engagement ring and wedding band SEO: a separate section for the biggest purchase"),
        p("An engagement ring is researched for weeks, often in secret, and the questions are specific. This section deserves its own structure:"),
        li("pages by shape and setting — oval, emerald cut, solitaire, halo, three-stone — only for what you stock or make"),
        li("guides that answer what buyers worry about: lab-grown vs natural diamonds explained without running down either, how to find out her ring size discreetly, what moves the price"),
        li("the custom ring process written step by step — consultation, design, approval, making, timeline — with a form to book a consultation"),
        li("wedding bands as the next step, linked from every engagement ring page"),
        p("These pages bring the most valuable visits, so I track them separately."),

        h2("Gift and occasion pages for jewelry: Valentine’s Day, Mother’s Day, Christmas and anniversaries"),
        p("Gift buyers search by person and budget — “gift for wife”, “jewelry for mom under $200”, “anniversary gift by year” — rarely by metal or stone. Gift pages group your pieces that way and state what a giver needs to know: the last day to order with engraving, gift wrapping, delivery cutoffs and exchange terms for the recipient."),
        p(
          "I plan them with your buying calendar: when you order stock for a season, the page for that season gets written, so it is crawled and indexed before searches rise. Flower shops work to a similar calendar with a far shorter buying window, described on the ",
          link("florist SEO", "/florist-seo"),
          " page.",
        ),

        h2("Jewelry store local SEO: Google Business Profile, repairs, resizing and engraving"),
        p("For a store with a showroom, many searches end on the map: “jeweler near me”, “jewelry repair [town]”, “ring resizing near me”, “watch battery replacement”. A local jeweler wins these with:"),
        li("a page for each service — repair, resizing, cleaning, engraving, custom work, appraisals if you offer them — with typical turnaround and a starting price"),
        li("“Jewelry store” as the primary category in your Google Business Profile, plus secondary categories that match your real services"),
        li("showroom photos, opening hours that stay correct, and a booking link for consultations"),
        li("reviews that mention the piece or the service, answered by you"),
        p(
          "The wider map work — categories, citations, service areas — is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("SEO for handmade jewelry brands: your own website next to Etsy and Instagram"),
        p("Many designer and handmade jewelry brands start on Etsy, and Etsy SEO — titles, tags, attributes inside the marketplace — is its own discipline that stays inside Etsy. A brand’s own site works differently: it can rank for your brand name, for the collections you make and for the materials you work with, and every sale there is yours without a marketplace fee. Its pages are built around the maker’s name, techniques, collections and custom work, with the same facts on the site, Etsy and Instagram so search engines and assistants connect them."),

        h2("Jewelry store SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Questions like “where to buy a lab-grown engagement ring in Austin”, “best jewelry store for custom rings in Chicago” or “is 14k or 18k gold better for an everyday ring” now go to ChatGPT, Perplexity and Google’s AI Overviews as well as to search. The assistant recommends shops whose facts it can read and confirm elsewhere. Generative and answer engine optimization (GEO, AEO) for a jewelry store means:"),
        li("materials, certificates, return windows and the custom process written in text on your pages, not only inside images or PDFs"),
        li("buying guides that answer the question in the first lines, signed by the jeweler"),
        li("Product, Offer and JewelryStore structured data that tie the catalog to the business"),
        li("the same name, address, hours and policies on your site, your Google profile and any marketplace where you sell"),
        p(
          "Before the work starts I save what the assistants say about your store and which competitors they name, and I compare it again a few months later. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring SEO for jewelry stores in sales, appointments and inquiries"),
        p("A jewelry store report shows money and conversations: online revenue from organic search by category, average order value, consultation bookings and custom ring inquiries, calls and direction requests from the map, and repair requests by service page. The figures come from your shop platform, booking tool and analytics, so they match what you see in your own back office."),

        h2("How much jewelry store SEO costs"),
        li("An audit of the catalog, product pages, structured data, Google Business Profile and AI answers: from 250 €, one-off, ending with fixes ranked by impact."),
        li("One-off work — category and filter rules, product page templates, the engagement ring section, structured data and feed fixes: 250–700 €."),
        li("Monthly SEO for a jewelry store or brand — new category and gift pages, product data, local search, AI visibility and reports: from 800 € per month; for large jewelry stores with big catalogs in competitive markets from 1,300 € per month."),
        p(
          "First results usually show after about a month and a half, and steady growth takes three to six months. If jewelry is one category among many in a larger online shop, the ",
          link("ecommerce SEO services", "/services/ecommerce-seo-services"),
          " page fits better. How monthly work runs is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Jewelry store SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a jewelry store cost?", "An audit costs from 250 €. Single tasks, such as the filter rules or the engagement ring section, cost 250–700 €. Ongoing work starts at 800 € a month, or at 1,300 € for large jewelry stores with big catalogs in competitive markets. The first call takes 15–30 minutes and is free; after it you get a fixed price."],
          ["How long does jewelry SEO take to show results?", "First results usually appear after about a month and a half, and steady growth takes three to six months. Engagement and gift pages should go live well before their season, so they have time to be indexed."],
          ["Should every filter combination in my jewelry catalog be indexed?", "No. Only combinations that people search for and that have enough products, such as white gold engagement rings, get their own indexable page. The rest stay available to shoppers and out of the index, so Google spends its time on the pages that matter."],
          ["Can I use the manufacturer’s product descriptions?", "As a source of facts, yes. As the whole text, it rarely ranks, because the same description already sits on many other stores. A short description of your own with metal, weight, stone and certificate details usually does better."],
          ["Is SEO worth it if I sell mostly on Etsy?", "Etsy brings buyers inside Etsy. Your own site can rank for your brand, your collections and custom work, and sales there carry no marketplace fee. Many makers keep both and grow the site step by step."],
          ["Can ChatGPT recommend my jewelry store?", "It can, when someone asks where to buy a ring or who makes custom pieces in their city. No one can promise a mention. Clear facts about materials, certificates, returns and location, repeated the same way across your listings, make it more likely, and I record what assistants say before and after the work."],
          ["Can you do SEO for a US jewelry store from Poland?", "Yes. I work remotely and in English. Warsaw afternoons and evenings fall on US mornings and early afternoons: a call at 4 pm my time is 10 am in New York and 9 am in Chicago, before most stores get busy. Invoices are in EUR or another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your jewelry store: what to send me"),
        p(
          "Send your store’s website and Google Maps link, the shop platform you use, what you sell — types, metals, natural or lab-grown stones, custom work — whether you have a showroom, which sales you want more of and where orders come from now. My reply names the first steps for your store and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
