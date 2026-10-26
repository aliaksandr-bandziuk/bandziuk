// Landing page fixture: Hair salon website design (EN), group
// «hair-salon-website-design». New page. Reader: owners of hair salons and
// barbershops, from one chair to several locations — not people looking for
// a haircut.
// Semantic core: ref/creative-leisure.md (US): hair salon website template /
// hair salon website templates 590 each, hair salon website template free
// download 170 (templates H2) · hair salon website 260, website for hair salon
// 260, website hair salon 70 (H1, excerpt, FAQ) · best hair salon website 210
// (H2 on the best sites) · hair salon booking website 140 (booking H2) ·
// hair salon seo 70, seo for hair salon 70 → one H2 that links
// /seo-for-beauty-salons once.
// Intent: ref/intent-check-creative-leisure.md — «website for hair salons»
// returns Vagaro (5×), Booksy, Acuity and salons → booking platforms, hence
// the H2 «Do I need a hair salon website if I already have Booksy or Vagaro?».
// «website for hair salons» vs «beauty salon website»: 0 shared URLs →
// separate page from the beauty salon page (linked once, for full-service
// salons). «hair salon seo» vs «seo for beauty salons»: 2 shared URLs →
// hair salon SEO belongs to /seo-for-beauty-salons.
// Direct case: Landi Room, a Warsaw beauty salon — nanoplasty course landing
// page (e-commerce-landing-page-with-secured-video-access).
// NOT on this page: nails, lashes, brows and skin care (beauty salon website
// page); ranking work in detail (/seo-for-beauty-salons); day spas and
// massage (/spa-website-design); makeup artists (/makeup-artist-website-design).
import { p, h2, li, link, k } from "./pt";

export const hairSalonWebsiteDesignEn = {
  lang: "en",
  group: "hair-salon-website-design",
  slug: "hair-salon-website-design",
  title: "Hair salon website design for salons and barbershops",
  heading: "Hair Salon Website Design for Salons and Barbershops",
  excerpt:
    "Hair salon website design for salons and barbershops: a price list by service and hair length, a page and gallery for every stylist, booking through the app you already use, and room to sell courses and products — designed and built by one person at a fixed price.",
  seo: {
    metaTitle: "Websites for Hair Salons and Barbershops | Bandziuk",
    metaDescription:
      "Hair salon website design: prices by service and hair length, stylist pages, color gallery, Booksy or Vagaro booking, barbershop walk-ins. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Works with Booksy and Vagaro"],
  heroPhonePoints: ["Book your stylist", "Cut · Color · Blonding", "Prices by hair length", "Walk-ins until 6 pm"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple hair salon or barbershop website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Hair salon website with stylist pages and galleries, price tables by length and level, booking integration, course or product pages and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a hair salon website",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Price list by service and length", text: "Short, medium and long hair, stylist level where it differs" },
        { _key: k("o"), iconName: "image", title: "Stylist pages and a color gallery", text: "Work filtered by service and by stylist" },
        { _key: k("o"), iconName: "plug", title: "Booking from your current app", text: "Booksy, Vagaro, Fresha, Square or GlossGenius" },
        { _key: k("o"), iconName: "map-pin", title: "Barbershop walk-ins and hours", text: "Queue or wait time, today’s hours, directions" },
        { _key: k("o"), iconName: "layers", title: "Courses and products", text: "Paid video access and a small product section" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and ChatGPT", text: "Services, prices and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple hair salon or barbershop website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Stylists, galleries, price tables, booking, courses", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: a Warsaw beauty salon and other local service websites I built",
      subtitle:
        "All five are Warsaw businesses whose customers book, call or pay online. For Landi Room, a beauty salon, I built the page that sells its nanoplasty course with automatic video access after payment. The renovation firm’s site shows the premium look an upscale salon wants; the auto repair shop and Felgilab show local search, Google Maps and price pages by service; the tyre-storage landing page is the one-page format a barbershop owner can run and edit himself.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your hair salon website",
      subtitle: "I answer within one business day: the pages your salon or barbershop needs and one fixed price for all of them.",
      contextLabel: "Salon name, website or Instagram",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you use today?", options: ["Instagram and a booking app", "A booking-app profile as the website", "A Wix or Squarespace template", "An older custom website"] },
        { _key: k("z"), question: "What kind of business is it?", options: ["Hair salon", "Barbershop", "Salon with booth renters", "Several locations"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Hair salon website design is the work I do for salon and barbershop owners who want new clients to see the stylists, understand the price list and book a chair without sending three DMs first. I plan, design and build the site myself, connect it to the booking software you already pay for and hand it over with an editor your front desk can use. The goal is that a client who finds you on a phone ends up in your calendar, not in a list of competitors."),

        h2("Do I need a hair salon website if I already have Booksy or Vagaro?"),
        p("It is the first question most owners ask, and the answer depends on where your new clients come from. Booking apps such as Booksy, Vagaro and Fresha are very good at taking appointments, sending reminders and holding deposits. Their public profile, though, is a page inside someone else’s marketplace: the layout is fixed, the text fields are short, and the same screen often suggests other salons nearby."),
        p("If your book is full of regulars and referrals, the app profile plus Instagram can be enough for now. A website starts to pay off when you want to:"),
        li("be found in Google for services, not only for the salon’s name — “curly haircut Denver”, “blonde specialist”, “skin fade near me”"),
        li("explain prices and policies in more words than an app field allows"),
        li("show each stylist’s work under their own name"),
        li("sell something beyond appointments: courses, products, gift cards"),
        p("The site does not replace the app. Every Book button opens your existing calendar, so the front desk keeps one schedule."),

        h2("Hair salon price list on the website: by service, hair length and stylist level"),
        p("A price that only says “from” makes a new client guess, and a guess often ends with them choosing a salon that shows a number. Hair pricing is complicated for real reasons — length, density, the color already in the hair and who holds the scissors — so the price list shows that structure instead of hiding it:"),
        li("services grouped the way clients think: cuts, color, blonding, treatments, styling, extensions"),
        li("a small table per service with columns for short, medium and long hair"),
        li("a second axis for stylist level where your prices differ — junior, senior, creative director"),
        li("the appointment length next to the price, so a client knows full highlights take an afternoon"),
        li("one line on what changes the final price, and a consultation button for color corrections and big changes"),
        p("The table lives in the CMS as text. When you raise prices in January, you change the numbers in one place and every page that shows them updates; search engines and AI assistants read the same numbers your clients see."),

        h2("Stylist and barber pages on a hair salon website"),
        p("Many clients follow a person, not a brand. A page for each stylist or barber keeps that loyalty inside your salon’s site: a real photo, years behind the chair, what they love doing (lived-in blondes, textured hair, precision bobs, beard work), the days they work, the languages they speak and a Book with… button that opens the app with that stylist already chosen, where the app allows it."),
        p("Stylists can get their own login, limited to their page and gallery, so updating a portfolio does not have to go through the owner. When someone leaves, their page is taken down and its address redirected to the team page instead of showing an error."),

        h2("Hair salon booking website: connecting Booksy, Fresha or Vagaro"),
        p("A hair salon booking website works when the jump from reading to booking is one tap. How that tap is built depends on your software: most systems give you a public booking link, and many also offer a button script or an embeddable widget. Before quoting, I look at your account and choose what fits:"),
        li("a direct link per service and per stylist, so the client lands on the right step"),
        li("a widget that loads only after a tap, so it does not slow the page down"),
        li("a Book button fixed to the bottom of every phone screen"),
        li("a short line under the button on deposits and cancellations, so the policy is read before card details are asked for"),
        p("Marketplace fees and new-client rules differ between apps and change over time, so we check your current terms together. The aim is that clients who arrive through your own site book with you directly."),

        h2("Hair color gallery and before-and-after photos on a salon website"),
        p("Color work sells itself in pictures, yet a gallery of two hundred random shots helps nobody. On the site, the gallery is filtered by service — balayage, copper, gray blending, curly cuts, men’s cuts — and by stylist, so a client who wants a soft blonde sees soft blondes and who made them. Before-and-after pairs are shot in the same light and at the same angle where possible, and published with the client’s agreement."),
        p("Photos arrive from phones in large sizes. The CMS crops and compresses them on upload and loads them as the client scrolls, so a gallery page with sixty images still opens quickly on mobile data. Your Instagram feed can sit at the bottom of the page, but the main gallery stays on your site, where it is tagged and does not depend on a feed algorithm."),

        h2("Barbershop website design: walk-ins, wait times and a men’s grooming menu"),
        p("A barbershop runs on a different rhythm: shorter services, fewer price lines, regulars every three weeks and plenty of people who just walk in. The website follows that rhythm:"),
        li("“walk-ins welcome” or “appointments only” on the first screen, next to today’s hours"),
        li("a live queue or wait-time widget, where your barbershop software offers one"),
        li("a short menu: haircut, skin fade, beard trim, hot towel shave, kids’ cut, combo"),
        li("each barber’s style in four or five photos, not forty"),
        li("a direct, plain look for a mostly male audience that wants the price and the next free slot"),
        p("Many shops are best served by one fast page the owner edits himself. A second location or a growing team adds pages later, without a rebuild."),

        h2("Selling hair courses and products from a hair salon website"),
        p("Some salons earn as much from teaching as from the chair. Landi Room, a beauty salon in Warsaw, sells an online course in nanoplasty, a hair-smoothing treatment. I designed and built its landing page on Next.js with Sanity: payment through Stripe Checkout, then a unique video link sent automatically, valid for 14 days and not downloadable. Its first Google Ads campaign sold more than 100 places on the course, and no access link has been passed on without permission."),
        p("The same setup works for a balayage class for other stylists, a home-care lesson for clients or a short list of the shampoos and treatments you use at the station, sold for pickup at the salon. A course or product page becomes a section of your site rather than a separate platform with its own monthly fee."),

        h2("Hair salon website templates vs a custom hair salon website"),
        p("“Hair salon website template” is searched more than any other phrase in this niche, and for a good reason: a template is cheap and fast. A one-chair studio with a booking link and a steady Instagram following can start on one and be fine — and if that describes your salon, my reply will say so."),
        p("Templates start to cost you as the salon grows. Stylist pages, price tables by length and level, filtered galleries and course sales each become a plugin or a paid upgrade, and the result looks like hundreds of other salons on the same theme. A custom site is built around your price list and your team from day one, belongs to you, and keeps working if you switch booking software."),

        h2("What the best hair salon websites do on a phone"),
        p("Lists of the best hair salon websites tend to praise big videos and unusual fonts. Opened on a phone, the sites that actually fill chairs share plainer habits:"),
        li("the salon’s specialty and neighborhood in one line at the top"),
        li("a Book button that never leaves the screen"),
        li("prices a client can read without zooming"),
        li("real photos of the team and the space"),
        li("an address that opens straight in maps"),
        li("pages that load before the client gives up on a bus"),

        h2("Hair salon SEO: Google Maps, “hair salon near me” and service pages"),
        p("Most new clients type “hair salon near me” or a service plus a neighborhood and pick from the map. The site supports that from launch: the same name, address, phone and hours as your Google Business Profile, a page for each service you want more of, a page per location and structured data describing the salon, its services and its opening hours."),
        p(
          "The ongoing ranking work — the Google profile, reviews, local links and keyword research — is described on my ",
          link("SEO for beauty salons", "/seo-for-beauty-salons"),
          " page, which covers hair salons and barbershops too. Local search for any business with an address is on ",
          link("local SEO services", "/services/local-seo-services"),
          ".",
        ),

        h2("A hair salon website that ChatGPT and Google AI Overviews can read"),
        p("Clients now ask ChatGPT or read Google’s AI Overviews with questions like “a salon in Austin that is good with curly hair” or “a barber open on Sunday in Queens”. An assistant can only recommend a salon whose facts it can read. So services, stylists and their specialties, prices, hours and walk-in rules are written as text in the page code, delivered by the server rather than drawn by scripts after loading, and repeated in structured data that matches your Google listing."),
        p(
          "Being named in those answers over time is a separate job, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much a hair salon website costs"),
        p("Design is included in both prices:"),
        li("A simple hair salon or barbershop website — home, services and price list, team, policies, booking buttons and contact, or one strong page for a barbershop: 700–1,400 €."),
        li("A full hair salon website with stylist pages and galleries, price tables by length and level, booking integration, course or product pages and local SEO setup: from 2,000 €."),
        p(
          "Salons that also do nails, lashes, brows and skin care will find more on the ",
          link("beauty salon website", "/website-development-for-beauty-professionals/beauty-salon-website"),
          " page. How I build sites in general is under ",
          link("website development", "/services/website-development"),
          ", and every price range is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Hair salon website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a hair salon website cost?", "A simple salon or barbershop site costs 700–1,400 €; a full site with stylist pages, galleries, price tables, booking integration and course pages starts at 2,000 €. Design is included, and you get a fixed price once I have seen your service list."],
          ["Do I still need a website if clients book through Booksy or Vagaro?", "If your chairs are full of regulars, maybe not yet. A site earns its place when you want new clients from Google, longer explanations of prices and policies, stylist portfolios under your own name, or sales of courses and products."],
          ["Will the website replace my booking software?", "No. The site sends every booking into the calendar you already use, through a link, a button or a widget, so reminders, deposits and the front-desk schedule stay where they are."],
          ["Can stylists update their own photos and prices?", "Photos, yes: each stylist can have a login limited to their own page and gallery. Prices are usually kept with the owner or manager, so one person decides what clients see."],
          ["Is one page enough for a barbershop?", "Often it is: hours, walk-in rules, a short menu, the barbers, a booking link and a map fit on one fast page. More pages come when the team grows or a second location opens."],
          ["Can I sell a hair course or products through the website?", "Yes. For Landi Room I built a course page with Stripe payment and a private video link sent automatically after purchase; the same approach works for classes, gift cards or products for pickup."],
          ["How do we work together if my salon is in the US?", "Online, in English. My afternoon and evening in Warsaw overlap your morning, so calls happen before your first appointments, and the rest moves through comments on the design. Invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order hair salon website design: what to send me"),
        p(
          "Send your salon or barbershop name and Instagram, your current price list, the stylists or barbers and what each one does best, the booking app you use, your deposit and cancellation rules, and whether you take walk-ins. If you teach or sell products, mention that too. I reply with a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
