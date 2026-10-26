// Landing page fixture: Winery website design (EN), group
// «winery-website-design». New page.
// Semantic core: ref/creative-leisure.md, wineries group (US): best winery
// websites 140 (H2 on templates and custom design, FAQ) · winery website
// design 40 (H1, several H2, cost H2, FAQ) · best winery website design 10
// (same H2). «winery seo» 70 and «winery seo near me» 90 → sibling
// /winery-seo, linked from the AI H2.
// Intent: ref/intent-check-creative-leisure.md — «winery website design» vs
// «winery seo» 0 of 10 shared URLs, 0 shared domains → separate pages. Design
// SERP = galleries (dribbble, siteinspire, pinterest, colorlib), wine-industry
// studios (vinagency, vinboundmarketing, wineworks.co) and Wix → owners
// choosing a designer and looking at examples.
// This page = how a winery site is designed and built: first screen with
// tasting room hours, tasting reservations (Tock, Resy, Commerce7 — general),
// wine club tiers and member accounts, shop only where shipping is legal
// (general, «check local rules»), age gate design, events and wedding venue
// inquiries, language versions for international wine tourists (Cyprus case,
// Hebrew), photography and calm premium design (renovation case), AI-readable
// build (Giuseppe), templates vs custom (ScanM2), cost.
// NOT on this page: ranking work — keywords, Google Maps, reviews, event SEO,
// seasonality, AI answers as ongoing work (/winery-seo — sibling); dining and
// menus for wineries with a kitchen (/restaurant-website-design — neighbour,
// linked once).
// Owner’s rules: every page covers AI search; design is included in the
// price; never say there are no clients from the visitor’s industry; alcohol
// rules only in general terms.
import { p, h2, li, link, k } from "./pt";

export const wineryWebsiteDesignEn = {
  lang: "en",
  group: "winery-website-design",
  slug: "winery-website-design",
  title: "Winery website design and development",
  heading: "Winery Website Design and Development",
  excerpt:
    "I design and build winery websites: tasting experiences guests can compare and reserve in two taps, wine club pages with clear tiers, a shop that sells only where shipping is legal, an event and wedding section, an age check where it is required and language versions for visitors from abroad.",
  seo: {
    metaTitle: "Winery Websites: Tasting Bookings and Wine Club | Bandziuk",
    metaDescription:
      "Winery website design: tasting reservations, wine club tiers, a shop where shipping is legal, events, age gate, languages and photography. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Reserve a tasting", "Open today 11–5", "Join the wine club", "Plan a vineyard wedding"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple winery website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Winery website with experience pages, reservation integration, wine club, shop connection, events and weddings, age gate and language versions, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with winery website design",
      items: [
        { _key: k("o"), iconName: "plug", title: "Tasting reservations from your system", text: "Tock, Resy, Commerce7 or a group request form" },
        { _key: k("o"), iconName: "layers", title: "Wine club tiers side by side", text: "Join, log in, skip a shipment, pick wines" },
        { _key: k("o"), iconName: "shield-check", title: "A shop and age check that follow the rules", text: "Ship only where it is legal, pickup elsewhere" },
        { _key: k("o"), iconName: "file-text", title: "Events and wedding venue pages", text: "Calendar with tickets, inquiries with date and guests" },
        { _key: k("o"), iconName: "image", title: "Photography-led, calm design", text: "Vines, cellar and people, fast on rural connections" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Experiences, hours and policies as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple winery website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Experiences, reservations, club, shop, events, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website portfolio: multilingual and photo-led sites I designed and built",
      subtitle:
        "First, a luxury real-estate platform in Cyprus that I built from scratch: five languages including right-to-left Hebrew, a filterable catalog with a map and video presentations — the multilingual setup a winery in a tourist region needs. Next comes the site of a Warsaw renovation and property-investment firm, where large photographs and restrained type carry the brand, as they do for a wine estate. The Milan psychotherapist’s site has a calm design, 468 posts moved with 301 redirects and new pages already cited in ChatGPT answers. The education agency site serves readers in ten countries. ScanM2 left a no-code builder for WordPress and grew its organic traffic 29 times.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your winery website",
      subtitle: "Within one business day I send a page outline for your winery, the buttons your first mobile screen needs and a fixed price.",
      contextLabel: "Winery name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website yet", "A Wix or Squarespace site", "A theme from our wine platform", "An older custom site"] },
        { _key: k("z"), question: "What should the site handle?", options: ["Tasting reservations", "Wine club and online shop", "Events and weddings", "All of these"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Winery website design, as I do it, runs from the page plan to launch in one pair of hands: the visual design, tasting reservations, wine club and shop are drawn and coded by me for one agreed price. A winery site serves three visitors at once — the traveler checking whether the tasting room is open on Saturday, the club member changing a shipment and the couple looking for a venue — and each of them is usually on a phone."),

        h2("Winery website first screen: tasting room hours, location and a reservation button"),
        p("Drone footage over the vineyard looks good in a pitch and costs visitors their patience on a weak signal in the countryside. The first screen answers practical questions:"),
        li("who you are and where — “Family winery and tasting room in the Russian River Valley”"),
        li("today’s tasting room hours and whether walk-ins are welcome"),
        li("a Reserve a tasting button and a Directions button"),
        li("the next event, in one line"),
        p("On phones, Reserve and Directions stay fixed at the bottom of the screen on every page. A video, if you have one, plays further down and only when the visitor scrolls to it."),

        h2("Tasting reservations on a winery website: Tock, Resy, Commerce7 or a request form"),
        p("Most wineries already take reservations in a system — Tock, Resy, Commerce7 or the booking module of their wine platform. The website does not replace it; it presents each experience clearly and hands the guest over with the right one selected. Depending on what your system allows:"),
        li("a button per experience that opens the booking flow preset to that tasting"),
        li("an embedded widget that loads only when tapped, so the page stays fast"),
        li("a request form for large groups, limo parties and corporate tastings that need a call first"),
        p("Experience cards share one layout — wines poured, duration, price per person, food, seating, minimum age, dogs — so a guest comparing a standard flight with a library tasting sees the differences at a glance. Deposits and cancellation terms appear before booking starts, not on the last step."),

        h2("Wine club pages on a winery website: tiers, sign-up and member accounts"),
        p("A wine club is often a winery’s steadiest income, and its page should work like a product page. Tiers sit side by side in a table: bottles per release, reds only or mixed, shipping or pickup, member discounts, complimentary tastings. A Join button leads into your wine platform’s club sign-up, and existing members get a visible link to log in, change their address, skip a shipment or choose their wines. Tasting room staff often sign members up on a tablet at the bar; the same page, built to work well on that tablet, saves them a separate tool."),

        h2("Online wine shop on a winery website: selling where shipping is legal"),
        p("Selling wine online is regulated: direct-to-consumer shipping is allowed in some states and countries, restricted or banned in others, and usually needs licenses and tax registration. Check the rules for your winery and each destination before the shop goes live. The design follows what you are allowed to do:"),
        li("a shop connected to your wine platform, which checks the address, age and taxes at checkout"),
        li("the list of states or countries you ship to, shown before the visitor fills a cart"),
        li("order online and pick up at the winery, where shipping is not possible"),
        li("a where-to-buy page with stores and restaurants, if you sell only through distributors"),
        p("Wine pages share one template: label photo, varietal, vintage, vineyard, tasting notes, pairing, awards, price and the right button — buy, reserve a tasting or find a store."),

        h2("Age gate on a winery website: when it is needed and how it should work"),
        p("Some markets, platforms and payment providers expect alcohol sites to ask visitors to confirm their age; elsewhere it is your own policy. Where you use one, keep it light: one question or a date of birth, remembered for the visit, styled like the rest of the site rather than a grey pop-up. I build it as a layer over pages that already exist in the HTML, so the first visit stays quick and the content stays readable for crawlers. Age checks at checkout and at pickup belong to your shop and your staff, not to the entry screen."),

        h2("Winery events, weddings and venue inquiry pages"),
        p("An events calendar with filters — concerts, dinners, releases, harvest — shows upcoming dates and links each one to tickets in your system. Past events move to an archive with photos, which shows newcomers what an evening at your winery looks like. Weddings and private events get their own section: each space with its capacity, a gallery of real weddings at the estate, catering and vendor rules, the season and an inquiry form that asks for the date, guest count and budget range, so your events coordinator can reply with something useful the first time."),
        p(
          "Wineries with a kitchen or a restaurant will find menus and dining reservations covered on the ",
          link("restaurant website design", "/restaurant-website-design"),
          " page.",
        ),

        h2("A multilingual winery website for international wine tourists"),
        p("In regions that draw visitors from abroad, a second or third language brings guests that an English-only site loses. Each version has its own address, translated experience and wine pages, and a language switcher that opens the same page in the other language, not the home page. Prices and hours are entered once in the CMS and stay the same in every version. Tasting notes need a translator who knows wine; machine translation turns “grippy tannins” into nonsense. The Cyprus real-estate platform in my portfolio runs in five languages, including Hebrew, which is written right to left."),
        p(
          "How I plan and build language versions is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Winery photography and web design: vines, cellar and people"),
        p("A winery sells a place and a mood, so photography carries more of the site than text. Plan one shoot across a season if you can: the tasting room set and empty, guests at the bar, the winemaker in the cellar, the vines in spring and at harvest, food pairings, the event lawn at dusk. Stock vineyard photos are recognized at once and make every winery look alike."),
        p("The design around the photos stays calm: a short palette taken from your labels, a heading typeface that matches the label, plenty of space and one accent color kept for reservation buttons. The premium site I built for a Warsaw renovation and investment company works the same way — large photographs, restrained type, few colors and the contact button always in reach. Images are served in modern formats and sized for each screen, so a gallery of forty harvest photos still opens quickly."),

        h2("A winery website that ChatGPT and Google AI Overviews can read"),
        p("Ask ChatGPT or an AI Overview for a winery in the valley with picnic tastings, or one whose club holds pickup parties, and the reply is assembled from text an assistant was able to read. The build keeps experiences, prices, hours, policies, wines and club tiers in plain HTML rather than inside images, PDFs or third-party widgets, adds structured data for the winery, its events and its wines, and matches the details on your Google profile. On the site I built for Giuseppe, a Milan psychotherapist, robots.txt sets explicit rules for AI crawlers and structured data describes his practice; ChatGPT already quotes his new pages."),
        p(
          "Staying in those answers is ongoing work, explained under ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ". Getting the site found for tastings, events and wine-country trips is the subject of ",
          link("winery SEO", "/winery-seo"),
          ".",
        ),

        h2("Best winery websites: templates, wine-platform themes or a custom design"),
        p("Lists of the best winery websites mostly showcase hero videos and big type. The parts that earn reservations are less photogenic: experiences that are easy to compare, a reservation two taps away, a club page that explains itself and a shop that knows where it can ship. A Wix or Squarespace template, or a theme supplied by your wine platform, is a fair start for a small tasting room with one experience. A custom design pays off once you run several experiences, a tiered club, events and weddings, a second language, and want search traffic to grow."),
        p(
          "ScanM2, which produces 3D laser scans and BIM models, had two leadless years on a no-code builder. I moved the same design to WordPress; organic traffic is now 29 times higher and inquiries come in weekly. When a winery site moves, rankings survive if each old URL points to its new one — the process is on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("How much winery website design costs"),
        p("Design costs nothing extra: both prices below already cover it."),
        li("A simple winery website — home, tasting experiences, visit information, wines, contact and reservation buttons: 700–1,400 €."),
        li("A full winery site with experience pages, reservation integration, wine club, shop connection, events and weddings, age gate and language versions: from 2,000 €."),
        p(
          "The steps from brief to launch are laid out under ",
          link("website development", "/services/website-development"),
          "; every price I charge is listed on ",
          link("pricing", "/pricing"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Winery website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a winery website cost?", "Between 700 and 1,400 € for a compact site, from 2,000 € for one with experience pages, reservations, club, shop, events and languages. Design is included either way; the figure is fixed after I see what you offer and which platforms you use."],
          ["How long does a winery website project take?", "Four to seven weeks is typical. Writing experience descriptions, wine notes and club terms and gathering photos take longer than the code, so avoid starting in the middle of harvest, when nobody at the winery has time to review drafts."],
          ["Can you connect Tock, Resy or Commerce7?", "Yes. Each of them offers booking links or embeddable widgets; before quoting I look at what your plan includes, so the design shows a reservation path your account can actually deliver."],
          ["Does a winery website need an age gate?", "It depends on your market, your wine platform and your payment provider. Where one is expected, I build a light check that remembers the answer and keeps the pages fast and readable; your shop still checks age at checkout."],
          ["Can we sell and ship wine through the website?", "Where the law allows it, yes: the shop connects to your wine platform, which handles addresses, age and taxes. Rules differ by state and country, so check local rules first; where shipping is not possible, the site offers pickup or a where-to-buy page."],
          ["Can our staff update tastings, wines and events themselves?", "Yes. Tasting room staff edit experiences, wines, event dates and prices in WordPress or a headless CMS like Sanity, with fixed fields that keep every new entry looking like the rest."],
          ["Can you redesign our winery website without losing Google rankings?", "Yes. Before launch I map each old address to its new one with a 301 redirect and carry over page titles and markup; after launch I check Search Console until the new pages are indexed without errors."],
          ["Can a Warsaw-based designer build a website for a winery in the US?", "Yes. Everything happens online and in English. I am in Warsaw, six to nine hours ahead of the US, so a review call in my afternoon or evening lands in your morning. Invoices are issued in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order winery website design: what to send me"),
        p(
          "Share the link to your website or Instagram, your tasting experiences, club tiers, your events and wedding offer, the reservation and wine platform you use, where you can ship and a few photos of the estate. My reply includes a proposed page list for the site and one fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
