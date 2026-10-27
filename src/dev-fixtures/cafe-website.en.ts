// Landing page fixture: Cafe website (EN), group «cafe-website». New page.
// Development page (what the site does); the look lives on
// /cafe-website-design (EN only, sibling).
// Semantic core: ref/food-venues.md (US): cafe website 2,400, website for cafe
// 2,400, website cafe 2,400 (H1, intro, several H2, cost H2, FAQ) · coffee shop
// website 880, website for coffee shop 880, coffee cafe website 880, cafe shop
// website 880 (one H2 «Coffee shop website …», metaTitle).
// Intent: ref/intent-check-food.md — «cafe website» vs «coffee shop website»
// 0 of 10 shared URLs: the coffee-shop SERP is coffee shops’ own sites
// (guests) → one H2 here, not a page. «cafe website» vs «cafe website design»
// 1 shared URL → two pages. «cafe website» vs «restaurant website» 1 shared
// URL → own page, restaurant page linked once. SERP for «cafe website»: AI
// builders (wegic, blink.new, goatbuild), templates, Pinterest, Smashing
// Magazine → owners who want a site and weigh a builder → builder vs custom H2.
// Angles: menu as text with sizes and add-ons, regular vs holiday hours,
// directions and seating facts, order-ahead pickup vs Uber Eats / DoorDash,
// POS online ordering, beans / subscriptions / wholesale (coffee shop H2),
// events and private hire, Instagram / loyalty / email list, speed on mobile
// data, builder vs custom, AI-readable facts, cost.
// NOT on this page: brand, photography, menu layout, first-screen crop,
// seasonal looks, templates as design (/cafe-website-design — sibling); map
// pack, Google Business Profile work, «coffee near me» (/cafe-seo — sibling,
// linked once; /services/local-seo-services); table bookings and full-service
// venues (/restaurant-website, linked once).
// Portfolio: Landi Room (online payment), tyre storage (one page the owner
// edits), Felgilab (price pages), auto repair (local search, maps), Giuseppe
// (AI answers). Restaurants under NDA mentioned once, positively.
// Owner’s rules: every page covers AI search; design included in the price;
// never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const cafeWebsiteEn = {
  lang: "en",
  group: "cafe-website",
  slug: "cafe-website",
  title: "Cafe website development",
  heading: "Cafe Website Development",
  excerpt:
    "I build cafe websites: a menu written as text with sizes and milk options, today’s hours and holiday hours, directions, order-ahead pickup on your own site next to Uber Eats and DoorDash, a shop for beans and gift cards, and event sign-ups you manage from a phone.",
  seo: {
    metaTitle: "Website for Cafes and Coffee Shops, from 700 € | Bandziuk",
    metaDescription:
      "Cafe website: menu as text, holiday hours, directions, pickup ordering next to Uber Eats and DoorDash, bean shop, events. Design included, from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Open now · until 6 p.m.", "Menu with sizes", "Order ahead for pickup", "Directions"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple cafe website with menu, hours and directions, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Cafe website with order-ahead pickup and payments, bean shop or subscriptions, events and private hire inquiries, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a cafe website",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A menu written as text", text: "Sizes, milk options and prices, edited from a phone" },
        { _key: k("o"), iconName: "map-pin", title: "Hours, holiday hours and directions", text: "Open-now line, map link, entrance and parking" },
        { _key: k("o"), iconName: "phone", title: "Order ahead for pickup", text: "Your own orders next to the delivery apps" },
        { _key: k("o"), iconName: "layers", title: "Beans, subscriptions and gift cards", text: "A small shop that ships or waits at the counter" },
        { _key: k("o"), iconName: "message-circle", title: "Events and private hire", text: "Cuppings, classes, seat limits, booking inquiries" },
        { _key: k("o"), iconName: "sparkles", title: "Facts AI assistants can quote", text: "Menu, hours, Wi-Fi and seating as plain text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple cafe website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Pickup ordering, shop, events, private hire", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web development portfolio: websites I have built",
      subtitle:
        "These sites do the jobs a cafe site does: take payment online, keep prices clear, bring people in from the map and stay easy for the owner to edit. Landi Room, a Warsaw beauty salon, sells an online course through Stripe Checkout — the same pay-online flow a pickup order or a gift card needs. A Warsaw tyre-storage business has a one-page site whose texts the owner edits himself, a good model for a small cafe. Felgilab, a wheel-renovation workshop in Warsaw, now has a rebuilt WordPress site where every service shows its price. For a Warsaw auto repair shop I work on local search, Google Maps and service pages. A psychotherapist in Milan has a site on Next.js and Sanity whose new pages already appear in ChatGPT answers. I have built websites for restaurants whose owners asked me not to show them publicly.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your cafe website",
      subtitle: "I reply within one business day with a proposed page list for your cafe, a short note on how ordering would work and a fixed price.",
      contextLabel: "Cafe name, Instagram or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Instagram and a Google listing only", "A Square Online, Wix or Squarespace site", "An older WordPress or custom site", "A second location is opening"] },
        { _key: k("z"), question: "What should the site do first?", options: ["Show the menu and hours", "Take pickup orders", "Sell beans, merch or gift cards", "Fill events and private hire"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I build cafe websites for owners of cafes and coffee shops: I design and develop the site myself, connect ordering and payments, and hand over an editor your team can use from behind the counter, at a price fixed before work starts. Guests open a cafe site to check a few facts — what you serve and for how much, whether you are open right now, where to pick up an order — and leave within a minute. The site does its job when those facts are correct and quick to find."),

        h2("What a cafe website does that Instagram and a Google listing cannot"),
        p("Many cafes run on an Instagram account and a Google Business Profile, and both are worth keeping. Instagram shows the mood of the week; the Google listing puts you on the map. Neither is a good home for facts that change and must be right:"),
        li("the full drink menu with sizes, milk options and current prices — highlights go stale and captions cannot be searched"),
        li("this week’s hours, including a holiday or a private event that closes the room early"),
        li("a pickup order that goes straight to the bar without a platform commission"),
        li("the gift cards, beans and event tickets you sell"),
        p("The website is also the only one of the three you own. Platforms change their feeds and rules; your domain and your menu page stay where you put them. Your Google listing links to the site, and the site carries the same name, address and hours."),

        h2("A cafe menu on the website: written as text, not a photo of the board"),
        p("The most common cafe menu online is a photo of the chalkboard above the counter, taken at an angle, or a PDF made two price changes ago. A cafe menu has a structure a photo cannot carry: one drink in two or three sizes, a choice of milk, an extra shot, syrups, decaf. On the site I set it up as data:"),
        li("drinks grouped the way guests order — espresso drinks, filter and pour-over, tea, cold drinks, non-coffee"),
        li("each drink with its sizes and a price per size, and add-ons stored as options with their surcharge, so a new price for oat milk is one edit in the admin panel"),
        li("food marked as baked in house or brought in, with vegan, gluten-free and allergen notes"),
        li("a “today” line for the filter coffee of the day or a pastry that has sold out, changed in seconds"),
        p("Written as text, the menu can be searched on the page and read by Google and AI assistants. The order-ahead page takes its items and prices from the same list, so the two never disagree."),

        h2("Opening hours, holiday hours and directions on a cafe website"),
        p("Cafe hours change more often than a restaurant’s: earlier openings in summer, a shorter Sunday, a 2 p.m. close on a holiday, a day off for a private booking. On the site the regular hours and the exceptions are separate fields, so a guest sees “Open today 7 a.m.–2 p.m. (holiday hours)” instead of a weekly table that is wrong for today. A line at the top of every page says whether you are open now and until when."),
        p("Under the hours come the things people check before they walk over:"),
        li("the address with a link that opens directions in their own maps app"),
        li("the nearest parking, bike racks or transit stop, and where the entrance is if it is easy to miss"),
        li("seating facts guests ask about: Wi-Fi, outlets, whether laptops are welcome at busy hours, stroller access, dogs on the patio"),
        p("Change the hours in your Google Business Profile at the same moment; a guest who sees two different closing times trusts neither."),

        h2("Online ordering on a cafe website: pickup orders and delivery apps"),
        p("Uber Eats and DoorDash bring delivery orders from people who would not have found you, and they take a commission on each one. A pickup order comes from someone who already knows the way, so there is little reason to pay a platform for it. A cafe website can take order-ahead orders itself:"),
        li("the guest picks drinks with sizes and options, chooses a pickup time and pays by card, Apple Pay or Google Pay"),
        li("the order reaches the bar as a tablet notification or an email, whichever your team already watches"),
        li("each pickup slot has a limit, so the morning rush does not get more orders than the bar can make"),
        li("a text or email tells the guest when the order is ready"),
        p("If your point-of-sale system has its own online ordering — Square, Toast and Clover do — the site connects to it instead of keeping a second menu in sync. Delivery stays on the apps, with clear buttons from the site, and pickup goes through your own page. Gift cards sell the same way, with a code sent by email."),

        h2("Coffee shop website: beans, subscriptions and wholesale for a roaster cafe"),
        p("A coffee shop that roasts or sells specialty beans needs more than a menu. Its website is also a small shop:"),
        li("a page for each coffee with origin, process, roast level, tasting notes and how fresh the roast is"),
        li("bag sizes and grind options, shipping rates and local pickup at the counter"),
        li("a coffee subscription every two or four weeks that guests pause and skip online"),
        li("a wholesale form for offices, restaurants and other cafes: volume per week, brewing equipment, delivery address"),
        p("Brewing guides for each method fit naturally on a coffee shop site and answer questions guests otherwise ask at the bar. The shop runs on WooCommerce or Shopify, depending on your volume, and follows the look of the rest of the site."),

        h2("Events, workshops and private hire on a cafe website"),
        p("Cuppings, latte art classes, book clubs, live music and board-game nights fill quiet evenings, and each needs a page with a date, a price and a way to sign up. A short calendar on the site lists what is coming; each event has its own address you can share on Instagram, and seats are paid online or reserved with a short form that closes when the room is full. Private hire — a baby shower, a team breakfast, a photo shoot — gets an inquiry form that asks for the date, time, number of guests, food and drinks and a budget range, so you answer with a price instead of a round of questions."),

        h2("Instagram, loyalty programs and newsletter sign-up on a cafe website"),
        p("Instagram stays the place for daily photos, and the site does not need to copy it. An embedded Instagram feed looks lively but slows the page and shows whatever you posted last, including a closed-for-the-holidays notice from months ago; one clear link to your profile does the job. Loyalty works the same way: if your POS runs a points program or you use stamp cards, the site explains it in two lines. What the site adds is an email list: a short sign-up for new seasonal drinks, events and holiday hours, sent from a tool such as Mailchimp. People who asked for your emails are guests you can reach without paying to boost a post."),

        h2("A fast cafe website on a phone and on mobile data"),
        p("Most visits to a cafe site come from a phone, often on the street with a weak signal. The site stays fast because it is built that way: pages are generated in advance and served from a CDN, photos are compressed and sized for each screen, fonts are few, and nothing heavy loads before the menu and the hours. Third-party widgets — a feed, a review carousel, a chat bubble — each bring their own scripts, so I keep only the ones that earn their place. A guest standing outside will not wait for a slow menu page."),

        h2("Cafe website builder or a custom-built cafe website"),
        p("AI website builders and templates on Squarespace, Wix or Square Online promise a cafe site in minutes, and the first page often looks fine. The real work starts after that: entering a menu with sizes and add-ons, setting holiday hours, connecting ordering and payments, keeping it current. A builder is a sensible start for a new cafe with one location and a short menu. Its limits show when you want pickup slots, a bean shop with subscriptions, events with seat limits or control over page addresses and structured data, and when the monthly plan grows with every feature. AI-written text also describes a cafe in general, not yours."),
        p(
          "A custom site is built on WordPress or Next.js around your menu and your ordering, and the domain, the code and your email list stay with you. Moving from a builder, every old page address gets a 301 redirect to its new one. How the site looks — your colors, the drink photos, the menu layout — is covered on the ",
          link("cafe website design", "/cafe-website-design"),
          " page.",
        ),

        h2("A cafe website that ChatGPT and Google AI Overviews can read"),
        p("Guests now ask ChatGPT or Google’s AI Overviews things like “a quiet cafe near Union Square where I can work on a laptop” or “a coffee shop open before 7 a.m. with oat milk”. The assistant answers from what it can read on your pages and in your Google listing. So the facts go into the HTML as text: hours and holiday hours, the menu with prices, milk options and dietary notes, Wi-Fi and seating, the neighborhood. The cafe gets CafeOrCoffeeShop structured data with its hours and a link to the menu. I built a psychotherapist’s site in Milan this way, and its new pages already show up in ChatGPT answers."),
        p(
          "Staying in those answers month after month is the subject of the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Getting found for “coffee near me” and in the map pack is covered on the ",
          link("cafe SEO", "/cafe-seo"),
          " and ",
          link("local SEO services", "/services/local-seo-services"),
          " pages; a full-service venue with table bookings will find more on the ",
          link("restaurant website", "/restaurant-website"),
          " page.",
        ),

        h2("How much a cafe website costs"),
        li("A simple cafe website — home, menu as text, hours and holiday hours, location and contact, links to delivery apps: 700–1,400 €."),
        li("A cafe website with order-ahead pickup and payments, a bean shop or subscriptions, events with sign-up and private hire inquiries: from 2,000 €."),
        p(
          "Design is part of the price in both cases. After launch you pay the hosting provider and the domain registrar, with no monthly fee to me. The steps of a build are described on the ",
          link("website development", "/services/website-development"),
          " page, and all my prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Cafe website: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a cafe website cost?", "700–1,400 € for a simple site with the menu, hours, location and links to delivery apps; from 2,000 € with pickup ordering and payments, a bean shop or subscriptions and events. Design is included. I fix the price after seeing your menu and what you want to sell online."],
          ["Can guests order ahead for pickup on my own cafe website?", "Yes. Guests choose drinks with sizes and options, pick a time slot and pay online, and the order reaches the bar in the way your team already works. If your POS has its own online ordering, the site connects to it instead."],
          ["Should my cafe leave Uber Eats and DoorDash once it has its own ordering?", "Usually not. The apps bring delivery orders from people who do not know you yet. Your site handles pickup and regulars, where a commission makes little sense. Both run side by side."],
          ["Can my staff change the menu, prices and holiday hours?", "Yes. Drinks, sizes, add-ons, prices, seasonal items, regular hours and exceptions are edited in a simple admin panel, from a phone too, and the layout stays the same."],
          ["Does a small cafe need a website if it has Instagram and a Google listing?", "A one-page site is often enough: the menu, the hours, the address and links to ordering. It holds the facts that posts bury, and it is the one channel the cafe owns."],
          ["How long does it take to build a cafe website?", "A simple cafe site usually takes two to four weeks from the brief. With ordering, a shop and events, plan on five to seven weeks; entering the menu data and preparing product photos take the most time."],
          ["Do you build websites for cafes in the US?", "Yes. I work from Warsaw by video call and email, in English. My afternoons and evenings overlap with US mornings, so calls fit before your morning rush or after it. I invoice in EUR, or in another currency if we agree on it."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a cafe website: what to send me"),
        p(
          "Send a link to your Instagram, Google listing or current site, your menu with prices and add-ons, your regular and holiday hours, the delivery apps and POS you use, and whether you want pickup ordering, a bean shop or events on the site. I will reply with a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
