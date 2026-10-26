// Landing page fixture: Spa website design (EN), group «spa-website-design».
// New page. Reader: owners and managers of day spas, wellness centers, massage
// studios and hotel spas — not guests looking for a massage.
// Semantic core: ref/creative-leisure.md (US): web design for spas 260 (brief;
// metaTitle, H2) · spa website design (H1, FAQ). «spa seo» 320, «seo for spa»
// 320, «spa and seo» 320 and similar are NOT targeted: their SERP is about
// single-page applications. Med spa phrases (med spa seo 210, medical spa seo
// 260…) belong to the med spa pages.
// Intent: ref/intent-check-creative-leisure.md — «spa website design» top 10:
// dribbble, bethanyworks, websitevice, pinterest, mangomint, colorlib,
// behance, webflow, etsy → designers, templates and spa software; 0 shared
// URLs with «spa seo» (reddit, medium, moz… about SPAs) and with «med spa
// seo» → no SEO page for spas; medical aesthetics stays on
// /med-spa-website-design (linked once).
// Angles: treatment menu with durations and prices, gift vouchers sold online,
// couples and day packages, booking, massage studios, hotel and day spas,
// calm premium design, local search, AI-readable build, cost.
// NOT on this page: injectables, lasers and medical aesthetics
// (/med-spa-website-design); hair salons (/hair-salon-website-design);
// any «spa SEO» topic.
import { p, h2, li, link, k } from "./pt";

export const spaWebsiteDesignEn = {
  lang: "en",
  group: "spa-website-design",
  slug: "spa-website-design",
  title: "Spa website design for day spas and massage studios",
  heading: "Spa Website Design for Day Spas and Massage Studios",
  excerpt:
    "Spa website design for day spas, wellness centers and massage studios: a treatment menu with durations and prices, packages for two, gift vouchers that guests buy and receive online, and booking connected to the spa software you already use.",
  seo: {
    metaTitle: "Web Design for Spas and Wellness Centers | Bandziuk",
    metaDescription:
      "Web design for spas, wellness centers and massage studios: treatment menu with durations and prices, couples packages, gift vouchers online. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Gift vouchers sold online"],
  heroPhonePoints: ["Massage · 60 or 90 min", "Spa day for two", "Buy a gift voucher", "Book a treatment"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple spa or massage studio website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Spa website with a full treatment menu, packages, online gift vouchers, booking integration, hotel or multilingual pages and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with spa website design",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A treatment menu guests can scan", text: "Duration, price and what happens, for every treatment" },
        { _key: k("o"), iconName: "shield-check", title: "Gift vouchers paid and sent online", text: "Card payment, unique code, delivery by email" },
        { _key: k("o"), iconName: "layers", title: "Packages and treatments for two", text: "Half-day, full-day and couples rituals" },
        { _key: k("o"), iconName: "plug", title: "Booking from your spa software", text: "Mangomint, Vagaro, Fresha or a hotel spa system" },
        { _key: k("o"), iconName: "image", title: "A calm design that loads fast", text: "Your own rooms in photos, quiet type, light pages" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and ChatGPT", text: "Treatments, prices and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple spa or massage studio website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Menu, packages, vouchers, booking, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: online sales for a beauty salon, calm design and multilingual sites",
      subtitle:
        "Each of these covers one part of a spa website. Landi Room, a Warsaw beauty salon, sells a course through a page I built where payment and delivery happen automatically — the same mechanics a gift voucher needs. The renovation firm’s premium design and Giuseppe’s calm psychotherapy site show the quiet visual style guests expect. The Cyprus real-estate platform works in five languages for buyers from abroad, like a resort spa’s visitors, and the Warsaw auto repair shop shows the local search and Google Maps work every spa with an address relies on.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your spa website",
      subtitle: "I reply within one business day with the pages I would build for your spa — menu, packages, vouchers, booking — and one fixed price.",
      contextLabel: "Spa name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of spa is it?", options: ["Day spa", "Massage studio", "Hotel or resort spa", "Wellness center with pools or sauna"] },
        { _key: k("z"), question: "How do guests buy gift vouchers today?", options: ["Only at the front desk", "Through our booking software", "By phone or email", "We do not sell them yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Spa website design is a quieter job than most web work: the site has to feel like your treatment rooms, yet answer practical questions fast — what a treatment includes, how long it lasts, what it costs, and how to book it or give it as a gift. I design and build websites for day spas, wellness centers, massage studios and hotel spas myself, from the page list to launch, and connect them to the booking and payment tools you already use."),

        h2("Web design for spas: who opens the site and what they look for"),
        p("A spa website has at least four kinds of visitors, and each needs a different first step:"),
        li("someone booking time for themselves, who wants the menu and a free slot this week"),
        li("a gift buyer, often in a hurry before a birthday or holiday, who wants a voucher in the inbox within minutes"),
        li("a couple planning a day together, who compare packages"),
        li("a hotel guest or tourist, who checks opening hours, day passes and what to bring"),
        p("The home page gives each of them a clear door: Book a treatment, Buy a gift voucher, Packages for two, Visiting us. Everything else — your story, the products you use, the team — sits one tap deeper."),

        h2("Spa treatment menu on the website: durations, prices and what each treatment includes"),
        p("The menu is the page guests open most, and the one most spas publish as a scanned PDF. On the site it becomes a set of short, readable entries grouped the way guests think — massage, facials, body treatments, rituals, add-ons — each with:"),
        li("the duration options side by side, for example 60 and 90 minutes, with a price for each"),
        li("two or three sentences on what happens, in plain words rather than a list of oils"),
        li("who it suits and when it is not recommended, such as pregnancy or recent sunburn"),
        li("a Book button that opens that exact treatment in your system"),
        p("Each larger treatment can have its own page with more detail, so a search for “hot stone massage” lands on hot stone massage. Prices and durations are edited in one place in the CMS and stay the same everywhere."),

        h2("Selling spa gift vouchers online: payment, delivery and redemption"),
        p("For many spas, vouchers are a large share of December and February revenue, and most of them are still sold over the phone or at the desk. Online, the purchase takes a minute:"),
        li("the guest picks a value or a specific treatment or package"),
        li("pays by card or wallet on a secure checkout"),
        li("receives a designed voucher with a unique code by email, or has it sent to the recipient on a chosen date"),
        li("your front desk checks the code at the visit, and it is marked as used"),
        p("Some spa software includes gift cards; if yours does, the site uses it. If not, I build the voucher flow on Stripe Checkout. The page I built for Landi Room, a Warsaw beauty salon, sells its online course this way: a Stripe Checkout payment triggers automatic delivery of a unique video link, valid for 14 days. Its first Google Ads campaign brought more than 100 sales. A voucher uses the same mechanics with a code instead of a link. Expiry and refund rules for gift cards differ between states and countries, so the terms on the voucher follow the rules where you operate."),

        h2("Spa packages and couples treatments: half-day, full-day and rituals for two"),
        p("Packages are how a spa raises the average visit, and they need more explanation than a single massage. Each package page shows the full timeline — arrival, sauna or pool time, treatments in order, lunch or tea, departure — with the total time and price, and whether both guests are treated in the same room. Couples packages also answer the questions that stop a booking: can we stay together the whole time, what if one of us wants a different treatment, is there a private suite. A package can be booked directly or bought as a voucher from the same page."),

        h2("Online booking on a spa website: linking your spa software"),
        p("Most spas already run Mangomint, Vagaro, Fresha, Booker, or a hotel system such as Book4Time. The site does not replace it; it sends guests into it at the right place. Depending on what your system allows, Book buttons open the specific treatment, a widget loads after a tap without slowing the page, and package bookings go to a request form when they need a call to arrange. Deposits and cancellation rules appear in one line above the button, so guests read them before they pay."),

        h2("Massage studio website design: techniques, therapists and the first visit"),
        p("A massage studio is usually smaller than a day spa, and its guests choose by technique and by therapist. The site lists techniques — Swedish, deep tissue, sports, Thai, prenatal — with a clear description of pressure and purpose, introduces each therapist with a photo, training and the techniques they do, and explains the first visit: arriving early, the intake questions, what to wear, how to say the pressure is too much. A one- or two-person studio often needs five or six pages at most."),

        h2("Hotel spa and day spa websites: day passes, facilities and outside guests"),
        p("Hotel and resort spas sell to two audiences: hotel guests, who already have a room, and locals, who need to know whether they can come at all. A dedicated page answers that: day passes and what they include, pool and sauna hours, age limits, what to bring, parking and the entrance to use. For spas that welcome visitors from abroad, the menu and booking pages are translated with their own addresses, so a guest searching in German or Spanish finds a page in that language."),

        h2("Calm, premium spa website design that still loads fast"),
        p("Spa sites often look calm and load slowly: full-screen video, huge photos, three fonts. The design I build keeps the mood and drops the weight — your own rooms and treatment details photographed in natural light, two typefaces, a soft palette with one color kept for the Book button, generous spacing, and images compressed and loaded as the guest scrolls. On a phone, the menu, the voucher button and directions are reachable with the thumb."),

        h2("Day spa or med spa website: wellness treatments without medical claims"),
        p(
          "A day spa sells relaxation and care; a med spa sells medical aesthetic treatments under a medical director, with consent forms, provider credentials and before-and-after rules. Mixing the two on one site confuses guests and invites claims a wellness business should not make. If you offer injectables or laser treatments, those belong on a separate site or section built for that purpose, described on my ",
          link("med spa website design", "/med-spa-website-design"),
          " page.",
        ),

        h2("Local search for a spa website: Google Business Profile and “massage near me”"),
        p(
          "Many new guests find a spa through “day spa near me” or “massage near me” and choose from the map. The site supports that with the same name, address, hours and phone as your Google Business Profile, a page per location, structured data for the business and its treatments, and links to your reviews. Ongoing local search work is described on ",
          link("local SEO services", "/services/local-seo-services"),
          ".",
        ),

        h2("A spa website that ChatGPT and Google AI Overviews can read"),
        p("Guests now ask assistants for “a day spa in Scottsdale with a couples suite” or “where to buy a massage gift card in Portland”. ChatGPT and Google AI Overviews can only recommend a spa whose facts they can read. So treatments, durations, prices, packages, voucher options and hours are written as text delivered by the server, not locked in a PDF or image, and described again in structured data."),
        p(
          "Getting named in those answers over time is ongoing work; see ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ".",
        ),

        h2("How much spa web design costs"),
        p("Design is part of the price, not an extra:"),
        li("A simple spa or massage studio website — home, treatment menu, team, booking buttons, policies and contact: 700–1,400 €."),
        li("A full spa website with treatment pages, packages, online gift vouchers, booking integration, hotel or language versions and local SEO setup: from 2,000 €."),
        p(
          "How I build sites in general is described under ",
          link("website development", "/services/website-development"),
          "; every price range is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Spa website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a spa website cost?", "A simple spa or massage studio site costs 700–1,400 €. A full site with treatment pages, packages, online vouchers, booking integration and language versions starts at 2,000 €. Design is included, and the price is fixed once I have seen your menu."],
          ["Can guests buy gift vouchers on the website?", "Yes. Guests choose a value or a treatment, pay by card and receive a voucher with a unique code by email, or schedule it for the recipient. It runs through your spa software’s gift cards or through Stripe Checkout."],
          ["Can you connect Mangomint, Vagaro, Fresha or Book4Time?", "Yes, through whatever your system offers: booking links per treatment, buttons or an embedded widget. I check your account before quoting, so every Book button in the design leads somewhere real."],
          ["Can our front desk update treatments and prices?", "Yes. Treatments, durations, prices and packages are edited in a simple CMS, and each change appears on every page that shows that treatment."],
          ["Should a massage studio have a separate website from a day spa?", "If it is a separate business, yes: guests look for techniques and therapists rather than packages and facilities. If massage is one service inside your spa, it gets its own section and pages on the spa site."],
          ["How long does building a spa website take?", "Most simple spa sites are ready in a few weeks; the main factor is how fast the menu, photos and texts arrive. Sites with vouchers, several languages or a hotel integration take longer; the timeline is agreed with the quote."],
          ["Can a US spa work with a web designer in Poland?", "Yes, and the time difference helps: your morning in the US is my afternoon or evening in Warsaw, so calls happen before your first treatments. We talk in English over video, you leave comments directly on the design, and invoices are in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order spa website design: what to send me"),
        p(
          "Send your spa’s name and current website or Instagram, your treatment menu with durations and prices, your packages, how you sell gift vouchers today, the booking software you use and the languages your guests speak. A few photos of your rooms help me plan the design. I reply with a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
