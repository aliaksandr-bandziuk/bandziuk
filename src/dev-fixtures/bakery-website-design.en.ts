// Landing page fixture: Bakery website design (EN), group
// «bakery-website-design». New page.
// Semantic core: ref/food-venues.md, bakeries (US): bakery website design 170
// (H1, several H2, cost H2, FAQ) · bakery shop website design 170 (H2 on
// locations) · website for bakery 170 (guide, FAQ) · bakery website template
// 140, bakery website theme / themes 140 each (templates H2) · bakery website
// examples / example 110 each (templates H2).
// Intent: ref/intent-check-food.md — «bakery website design» vs «bakery
// website» 0 of 10 shared URLs, 0 shared domains: the design SERP is design
// studios, Envato, Pinterest, One Page Love, Hostinger, Bento (owners choosing
// how to build); «bakery website» 1,900 / «bakery shop website» 1,900 return
// bakeries themselves and cakes.com (customers) → not targeted.
// Angles: home page with today’s hours and bakes, catalog with baking days,
// custom cake order form (servings, date, flavor, photo upload, deposit),
// pre-orders with capped pickup slots (Thanksgiving, Christmas, weekend bread),
// allergens and ingredients (EU 14 allergens, US major allergens, general),
// wholesale page for cafes and grocers, several shops and a delivery area,
// photography and branding, templates / themes / custom, AI-readable build,
// cost. Portfolio: Landi Room (online payment), Felgilab (price pages),
// renovation (premium visual), tyre storage (one page the owner edits), auto
// repair (local search and maps).
// NOT on this page: ranking work — «bakery near me», «custom cakes + city»,
// Google Business Profile, seasonal searches (/bakery-seo — sibling, written by
// another author; linked once); map pack → /services/local-seo-services; table
// service and bookings → /restaurant-website-design (closest restaurant page,
// linked once, no shared arguments: no menu-as-PDF, no booking button, no
// "fewer photos" thesis).
// Owner’s rules: every page covers AI search; design is included in the
// price; never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const bakeryWebsiteDesignEn = {
  lang: "en",
  group: "bakery-website-design",
  slug: "bakery-website-design",
  title: "Bakery website design and development",
  heading: "Bakery Website Design for Bakeries and Cake Shops",
  excerpt:
    "I design and build bakery websites: a catalog of breads, pastries and cakes with the days each is baked, a custom cake order form with servings, a reference photo and an online deposit, pre-orders with pickup slots, allergens on every product and a wholesale page for cafes.",
  seo: {
    metaTitle: "Bakery Website with Cake Orders and Pre-Orders | Bandziuk",
    metaDescription:
      "Bakery website design: product catalog, custom cake orders with deposits, pickup slots, allergens on every item, wholesale page. Design included, from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Open today 7 a.m.–2 p.m.", "Order a custom cake", "Pick up Saturday 9–10", "Allergens listed"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple bakery website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Bakery website with a product catalog, custom cake orders with online deposits, pre-orders with pickup slots, allergen filters, wholesale accounts and several locations, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with bakery website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A catalog of breads, pastries and cakes", text: "Your photos, prices and the days each item is baked" },
        { _key: k("o"), iconName: "file-text", title: "A custom cake order form", text: "Servings, date, flavor, inscription, reference photo" },
        { _key: k("o"), iconName: "shield-check", title: "Deposits paid online", text: "Card, Apple Pay or Google Pay before you start baking" },
        { _key: k("o"), iconName: "layers", title: "Pre-orders with pickup slots", text: "Holiday pies and weekend bread, capped per slot" },
        { _key: k("o"), iconName: "map-pin", title: "Shops, hours and delivery area", text: "A page per location, holiday hours included" },
        { _key: k("o"), iconName: "sparkles", title: "Clear to Google and AI assistants", text: "Products, allergens and hours written as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple bakery website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Catalog, cake orders, deposits, pickup slots", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: small business websites I have built",
      subtitle:
        "What these sites share with a bakery’s: they take money or requests online, show prices plainly and are found by people nearby. Landi Room, a Warsaw beauty salon, sells an online course through Stripe Checkout with access opening right after payment — the flow a cake deposit needs. Felgilab, a Warsaw wheel-renovation workshop, got a WordPress rebuild with clear service and price pages. A Warsaw renovation and property-investment company has a premium design carried by large photos of finished work. A Warsaw tyre-storage business runs on one page whose texts the owner edits himself. A Warsaw auto repair shop got local SEO, Google Maps work and service pages.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your bakery website",
      subtitle: "I reply within one business day with a proposed page list, a note on how cake orders and pickup would work, and a fixed price.",
      contextLabel: "Bakery name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Instagram and phone orders only", "A Square, Wix or Shopify site", "A WordPress bakery theme", "An older custom site"] },
        { _key: k("z"), question: "What should the site handle first?", options: ["Custom cake orders", "Pre-orders and pickup", "Wholesale accounts", "All of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Bakery website design, as I do it, covers both the look of the site and the working parts behind it — the catalog, the cake order form, pickup slots and online deposits — designed and built by one person at a price fixed before work starts. A bakery site serves two kinds of visitors. Some want to know what is on the shelves this morning and whether you are open; others are planning a cake for a date three weeks away and want to know whether you can make it."),

        h2("Bakery website design: today’s hours, fresh bakes and the cake order button on the home page"),
        p("Most visits to a bakery’s site come from a phone, often from someone deciding whether to stop on the way to work. The first screen settles that at a glance:"),
        li("today’s hours, with a separate line on Sundays and holidays — “Open today 7 a.m.–2 p.m.”"),
        li("what came out of the oven today, or a link to the daily list"),
        li("a button for custom cakes that leads to a form, not to a phone number"),
        li("the address with a one-tap route in Google Maps or Apple Maps"),
        p("Regular breads, the bakery’s story and the wholesale page come further down. If you sell out early, a short line such as “Sourdough is usually gone by 11 a.m. — pre-order for Saturday” saves people a wasted trip and turns them into pre-orders."),

        h2("A bakery product catalog with photos, prices and baking days"),
        p("A bakery catalog works less like a web store and more like a timetable: cinnamon rolls every day, rye only on Fridays, stollen only in December. Each product page holds:"),
        li("a photo of the item as it comes out of your oven, cut open where the crumb or the layers do the selling"),
        li("the price per piece, per loaf or per dozen, and the weight where customers care about it"),
        li("the days it is baked and whether it can be ordered ahead"),
        li("ingredients and allergens as text"),
        p("Seasonal items are switched off in the CMS rather than deleted, so next year the holiday bread page returns with its photos, text and address unchanged. Categories follow the way people shop at your counter — bread, pastries, cakes, cookies, savory — not the way a theme names them."),

        h2("Custom cake order form on a bakery website: servings, date, photo upload and deposit"),
        p("A custom cake is a small project with a deadline, and phone calls about one can go back and forth for days. The order form collects the brief in one go:"),
        li("the pickup or delivery date first, with your lead time built in, so dates you cannot meet are greyed out"),
        li("size by servings, not only by inches: a guide that shows how many guests a 6-, 8- or 10-inch round or a two-tier cake feeds"),
        li("flavor, filling and frosting picked from your own lists, plus the inscription with a character limit"),
        li("a photo upload for a reference design and a note field for colors or a theme"),
        li("dietary requests — gluten-free, egg-free, nut-free — offered only where you can actually make them"),
        p("Simple cakes can be priced on the spot and paid in full. Decorated and tiered cakes end in a request: you confirm the design and the price, and the customer pays a deposit through a link. Once the deposit is in, the order is confirmed by email and the date is blocked in your cake calendar, so a busy Saturday cannot be overbooked."),

        h2("Pre-orders and pickup time slots for bread, pies and holiday baking"),
        p("Pre-orders turn the busiest days of the year into a list you can bake to. Customers choose items and a pickup slot — Saturday 8–9 a.m., 9–10 a.m. and so on — and each slot accepts only as many orders as the counter can hand out. Around Thanksgiving and Christmas the pre-order menu becomes a page of its own, with pies, rolls and holiday breads and a closing date after which it switches to “walk-in only”. Weekend bread works the same way on a smaller scale: order by Thursday, collect on Saturday. The list for each slot prints from the admin panel, so the morning shift knows what to bag before the doors open."),

        h2("Allergens and ingredients on a bakery website"),
        p("People with allergies, and parents of children with them, read a bakery website more carefully than anyone. Ingredients and allergens sit on every product page as text, not in a photo of a label, and the catalog can be filtered by gluten-free, vegan or nut-free where you offer those. In the EU a bakery has to give information on 14 allergens, unpackaged goods included; in the US customers look first for the major food allergens. Either way the site states the cross-contact risk plainly — “made in a kitchen that also handles nuts, wheat and sesame” — so nobody reads one gluten-free brownie as a gluten-free bakery. Recipes change with suppliers, so ingredients are edited in the same place as prices and update across the site at once."),

        h2("A wholesale page on a bakery website for cafes, restaurants and grocers"),
        p("Many bakeries earn steady money from cafes, restaurants and grocers that take bread and pastries every morning. Wholesale buyers need other things than walk-in customers, so they get a page of their own:"),
        li("what you supply, the minimum order, and the delivery days and times"),
        li("an application form: business name, address, contact, products and frequency"),
        li("a price list that opens for approved accounts, or one sent after the first conversation"),
        li("standing orders that a cafe manager can change until a cutoff the day before"),
        p("Walk-in visitors never see wholesale prices, and a wholesale buyer does not have to phone to change Tuesday’s order."),

        h2("Bakery shop website design for several locations and a delivery area"),
        p("A bakery with two or three shops needs a page for each, not one contact page with a list of addresses. Every location page carries its own hours and holiday hours, a map, what that shop bakes on site, parking or transit notes and its own phone number. Pickup orders ask for the shop first, so a cake never waits at the wrong counter. If you deliver, the site shows the delivery area — a ZIP code check or a map of zones, each with a fee and a minimum order. Orders through DoorDash or Uber Eats continue as they are; the site links to them where that helps and keeps your own pickup and cake orders, which carry no commission, in front."),
        p(
          "If you also run a sit-down cafe or restaurant with table bookings, that side of the business is covered on the ",
          link("restaurant website design", "/restaurant-website-design"),
          " page.",
        ),

        h2("Bakery photography and branding in the website design"),
        p("Baked goods are photographed close and in daylight. What sells on a bakery site is detail: an open crumb, laminated layers, a glossy glaze, a slice cut from a layer cake. The design takes its colors and lettering from what you already use — boxes, paper bags, the shop sign — and puts the food on a warm, plain background that does not tint it. Product pages give the photos room and keep text short. Every image is compressed and served at the size of the screen, so a page with fifty pastries still opens quickly on mobile data."),
        p("If you have no photos yet, a phone and a window are enough to begin: one background, one angle per category, the same time of day. A professional session can come later and replace the pictures without touching the layout."),

        h2("Bakery website template, theme or custom design"),
        p("Search for bakery website templates or bakery website examples and you find WordPress bakery themes, Square Online and Shopify stores, and galleries of attractive home pages. A theme is a fair start for a bakery with a short list of products and mostly walk-in trade. The gaps appear when you add what makes a bakery different: lead times on cakes, pickup slots with a cap, items baked on set days only, wholesale accounts, allergens per product. Themes patch these with plugins that do not talk to each other, and the examples in galleries rarely show an order form at all."),
        p("A custom site is designed around your products and your kitchen’s rhythm, built on WordPress with WooCommerce or on Next.js with a headless CMS, and the domain, the code and the customer list stay with you. Moving from an old site keeps your search positions when every old address gets a 301 redirect to its new page."),

        h2("A bakery website that ChatGPT and Google AI Overviews can read"),
        p("Ask ChatGPT or Google’s AI Overviews where to order a gluten-free birthday cake nearby, or which bakery opens early on Sunday, and the answer is assembled from pages the assistant can read. So hours, locations, product names, prices, cake lead times and allergen notes are plain text in the HTML, and the bakery, its shops and its products are marked up with Bakery, LocalBusiness and Product structured data. Giuseppe, a psychotherapist in Milan, has a site built on these rules, and ChatGPT already quotes pages added to it since launch."),
        p(
          "How a bakery stays in AI answers over the long run is explained on my ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Ranking for searches like custom cakes in your city is the work on the ",
          link("bakery SEO", "/bakery-seo"),
          " page, and the Google Business Profile and the map pack are covered on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("How much bakery website design costs"),
        p("Design is part of the build and is never billed on its own:"),
        li("A simple bakery website — home page, products with prices, a cake inquiry form, locations and contact: 700–1,400 €."),
        li("A bakery website with a catalog and baking days, a custom cake order form with online deposits, pre-orders with pickup slots, allergen filters, wholesale accounts and several locations: from 2,000 €."),
        p(
          "The build process, step by step, is described on my ",
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
      title: "Bakery website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a bakery website cost?", "700–1,400 € for a simple site with products, a cake inquiry form and locations; from 2,000 € for a site with a full catalog, custom cake orders with deposits, pickup slots, allergen filters and wholesale accounts. Design is included in both. I give a fixed price once I have seen your product list and how you take orders today."],
          ["How long does it take to build a bakery website with online cake orders?", "Usually four to seven weeks from the brief. Writing down your cake options, lead times and pickup rules takes longer than the build itself; a simple site without online payment can go live sooner."],
          ["Can customers pay a deposit for a custom cake online?", "Yes. Simple cakes can be paid in full at checkout. For decorated and tiered cakes you confirm the design first, the customer gets a payment link for the deposit, and the order is confirmed once it is paid."],
          ["Will the website work with our point-of-sale system?", "It depends on the system. Some let a website send orders straight into them; with others, web orders land in the site’s admin panel and your inbox, and staff see them on a tablet at the counter. I check which applies before quoting."],
          ["Do we need professional photos of our cakes and bread?", "Not to launch. Phone photos taken by a window, on one background and at one angle per category, look consistent and honest about the product. Professional photos can replace them later without any change to the design."],
          ["Can staff update products, sold-out items and holiday hours?", "Yes. Products, prices, baking days, allergens, pickup slots and holiday hours are edited in a simple admin panel, from a computer or a phone."],
          ["Can a web designer in Poland build a website for a US bakery?", "Yes. We work by video call and email, in English. Afternoons and evenings in Central European Time overlap with US mornings, so calls fit before your shop gets busy. I invoice in EUR or in another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order bakery website design: what to send me"),
        p(
          "Send me your Instagram or current site, a list of products with prices, the cakes you make to order with sizes and lead times, your shops and opening hours, whether you sell wholesale or deliver, and a few photos of your bakes. I will reply with a page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
