// Landing page fixture: Makeup artist website design (EN), group
// «makeup-artist-website-design». New page.
// Semantic core: ref/creative-leisure.md, makeup artists (US): makeup artist
// website 590 + website for makeup artist 590 (H2s, intro, FAQ) · makeup
// artist portfolio website 90 (metaTitle, portfolio H2) · makeup artist
// website template(s) 70 + 70 (templates H2) · makeup artist website design /
// designs 30 + 30 (H1, cost H2) · makeup artist website examples 30, portfolio
// examples 30 (portfolio H2 text) · bridal makeup artist website 20 (bridal
// H2) · makeup artist booking website 10 (booking H2) · sfx makeup artist
// website 10 (editorial and SFX H2) · makeup artist website builder 10,
// best website builder for makeup artist 10 (templates H2).
// Intent: ref/intent-check-creative-leisure.md — «website for makeup artists»
// vs «makeup artist website design» 0 shared URLs, 2 shared domains: the first
// is academies and builders (Pixpa, QC Makeup Academy, Online Makeup Academy,
// HubSpot, Reddit) → DIY owner demand; the second is galleries and studios
// (Dribbble, Behance, sitebuilderreport, nataliefaithdesign). The page answers
// when a template is enough and when a custom site pays off.
// Angles: first screen for brides and producers, portfolio by category
// (bridal, events, editorial, film/SFX), photo credits and consent, bridal
// page (trial, timeline, bridal party), prices and travel fees, booking by
// date with deposit (US artists often say retainer) and contract (HoneyBook,
// Dubsado, Square — general), editorial/SFX path, classes and recorded
// courses sold online (Landi Room case), Instagram vs site, local SEO for
// weddings, templates vs custom, AI-readable build, cost.
// Portfolio: Landi Room (online course, Stripe, expiring video link — strong
// case for selling courses), Sasha Dith (performer’s portfolio, video,
// booking form, under one second), Warsaw renovation (premium visual), Warsaw
// auto repair (local SEO, Google Maps), Giuseppe (one-name practice, calm
// custom design).
// NOT on this page: salons with chairs and staff (beauty salon page, linked
// once), hair salons (/hair-salon-website-design), models’ portfolios
// (/website-design-for-models, linked once), product shops, permanent makeup;
// ongoing SEO campaigns (local SEO page linked in the local H2).
// Owner’s rules: every page covers AI search; design is included in the
// price; never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const makeupArtistWebsiteDesignEn = {
  lang: "en",
  group: "makeup-artist-website-design",
  slug: "makeup-artist-website-design",
  title: "Makeup artist website design",
  heading: "Makeup Artist Website Design",
  excerpt:
    "Makeup artist website design, with the build done by the same person: a portfolio split into bridal, events, editorial and SFX, prices and travel fees in plain text, a booking form that checks the date and takes a deposit, and pages that sell your classes and courses.",
  seo: {
    metaTitle: "Makeup Artist Portfolio Website Design | Bandziuk",
    metaDescription:
      "Makeup artist website design: portfolio by category, bridal packages, prices and travel fees, booking with deposit, online courses. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Bridal, editorial, SFX portfolio"],
  heroPhonePoints: ["Bridal makeup and trials", "Prices and travel fees", "Check my date", "Online makeup course"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple makeup artist website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Makeup artist website with a portfolio by category, bridal and event packages, travel zones, booking with deposit, editorial and SFX pages, course pages with paid video and service-area pages, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with makeup artist website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A portfolio sorted by kind of work", text: "Bridal, events, editorial and SFX apart" },
        { _key: k("o"), iconName: "shield-check", title: "Courses sold online", text: "Paid video with a private, expiring link" },
        { _key: k("o"), iconName: "file-text", title: "Prices and travel fees as text", text: "Packages, zones and early-start fees" },
        { _key: k("o"), iconName: "plug", title: "Date check with a deposit", text: "HoneyBook, Dubsado, Square or a simple form" },
        { _key: k("o"), iconName: "map-pin", title: "Service areas for weddings", text: "The cities and regions you travel to" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Services, areas and prices on the page" },
      ],
      prices: [
        { _key: k("r"), label: "Simple makeup artist website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Categories, bridal packages, deposits, courses", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: an online beauty course, a performer’s site and other image-led work",
      subtitle:
        "First, Landi Room, a Warsaw beauty salon: a custom-designed landing page that sells an online hair-treatment course through Stripe Checkout and sends each buyer a private video link that expires after 14 days and cannot be downloaded — over 100 sales from the first Google Ads campaign, no unauthorized sharing. Next, the official site of DJ and producer Sasha Dith, a performer’s portfolio with video, a booking form and pages that load in under one second. Then a premium design built on photos of finished work, local SEO and Google Maps for a Warsaw auto repair shop, and a practice in Milan run under one name, with a calm design made only for it.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "official-website-for-dj-and-producer-sasha-dith",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your makeup artist website",
      subtitle: "Within one business day you get a page plan — portfolio categories, prices, booking, courses — and a fixed price.",
      contextLabel: "Your name, Instagram or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Only Instagram", "Pixpa, Squarespace or Wix", "A link in bio and a PDF price list", "An older WordPress site"] },
        { _key: k("z"), question: "What should the site bring you more of?", options: ["Brides and bridal parties", "Events and proms", "Editorial, film and SFX work", "Classes and courses"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Makeup artist website design is what I offer here: I design and build sites for freelance makeup artists and small bridal teams myself, from the portfolio layout to the booking form and launch. Brides, wedding planners and photo producers usually see your Instagram first; your website is where they check what you charge, whether you travel to their venue and how to secure the date."),

        h2("Makeup artist website design: what brides and producers check before they write"),
        p("A bride often starts looking six to twelve months before the wedding, on her phone, with a shortlist of three or four artists. A producer or photographer looks for someone who can handle a specific brief next week. Both decide fast, so the first screen says:"),
        li("one photo of your work on a real face in natural light, not a collage"),
        li("what you do and where — “Bridal and event makeup in San Diego, travel across Southern California”"),
        li("the kinds of work you take: bridal, events, editorial, film and SFX"),
        li("a “Check my date” button and a text button, visible without scrolling"),
        p("A line such as “Soft, long-wearing bridal makeup for all skin tones” tells a bride more than a tagline about beauty and confidence."),

        h2("Makeup artist portfolio website: bridal, events, editorial and SFX by category"),
        p("An Instagram grid mixes soft bridal looks with graphic editorial work and prosthetic wounds. A bride scrolling for a glowing, natural face gets lost; a film producer has to scroll past twenty weddings. A portfolio website splits the work into categories, each with its own page, short intro and button. Within bridal, the gallery shows a range of ages, skin tones and skin types, so each bride can find someone like her."),
        p("Close-ups are what clients study, so they open full screen and stay sharp. Each photo is resized for every screen and saved in a modern format, the first image loads at once and the rest as the visitor scrolls. Credits sit under each look — photographer, hair stylist, model — and a bride’s photos are published only with her written consent. If a photo was retouched, saying so builds more trust than hiding it."),

        h2("Bridal makeup artist website: trials, wedding-day schedule and bridal party prices"),
        p("Brides ask the same questions in every inquiry, and a bridal page answers them before the first message:"),
        li("what the bridal package includes: trial, lashes, a touch-up kit, staying for photos"),
        li("where the trial happens and how long before the wedding it is best booked"),
        li("time per person and a sample schedule counted back from the ceremony"),
        li("prices for the bridal party, mothers and flower girls, and the minimum for peak Saturdays"),
        li("whether you bring an assistant or a hair stylist for larger parties"),
        p("A short FAQ on the same page covers allergies, skin prep and what to wear on the morning, so the consultation call can be about the look itself."),

        h2("Makeup artist prices and travel fees on the website"),
        p("Many artists keep prices in a PDF or an Instagram highlight, where they are hard to find and easy to forget to update. On the site they are plain text you edit in the CMS: a “from” price for each service — bridal, bridesmaid, trial, event, lesson — and what changes it. Travel is the second question after price, so it gets its own section: the area included in the price, zones beyond it, early-start fees before a set hour, and destination weddings quoted individually with travel and lodging. Editorial and film work can show a day rate or “on request”, as you prefer."),

        h2("A makeup artist booking website: date check, deposit and contract"),
        p("Wedding bookings work by date rather than by time slot: one artist usually takes one wedding a day. The form asks for the date, the venue or city, the number of people and the time everyone must be ready. You confirm the date is free, then the client signs the agreement and pays a deposit — many US artists call it a retainer — that secures it. HoneyBook and Dubsado handle the contract and deposit in one flow; a Square or Stripe payment link works for simpler setups. Lessons and studio appointments, which do run by time slot, can go through a scheduler with a deposit, such as Acuity or GlossGenius."),
        p("The deposit amount, what happens if the wedding moves and the cancellation terms are shown before the form is sent, so nobody learns them from the invoice."),

        h2("Editorial, film and SFX makeup artist website: a separate path for producers"),
        p("Producers, photographers and agencies look for something else: tear sheets with publication names, a short reel for film and TV, set experience, kit and skills — beauty, grooming, aging, prosthetics, wounds — and an agent’s contact if you have one. That path starts from its own button on the home page and leads to pages without bridal prices, with a downloadable PDF portfolio for quick sharing. Credits and clients are listed only where the work was published and you are allowed to name them."),
        p(
          "Models building their own book need a different site, described on ",
          link("website design for models", "/website-design-for-models"),
          ".",
        ),

        h2("Makeup classes and courses on a makeup artist website: selling video lessons online"),
        p("Teaching fills the months between wedding seasons. One-to-one lessons and small group masterclasses in your studio are booked by time slot with a deposit. A recorded course — bridal skin prep, a soft glam routine, a pro course for new artists — reaches people far outside your travel area. Its page shows who the course is for, the lesson list, a short preview and the price, and Stripe Checkout takes the payment."),
        p("I built this setup for Landi Room, a Warsaw beauty salon selling an online nanoplasty course. Each buyer receives a unique viewing link by email the moment the payment clears; it works for 14 days and the lessons can be watched but not saved. Its first Google Ads campaign sold over 100 courses, and no link has been shared onward. A makeup course runs the same way, on your own site, without sending students to a separate course platform."),

        h2("Instagram or a website for a makeup artist"),
        p("Instagram is where many brides find you, so keep posting. Its limits show when someone is ready to book: the feed runs in the algorithm’s order, prices hide in highlights, inquiries arrive among spam in DMs, and a hacked account can disappear overnight. The website holds what a profile cannot — prices, travel zones, the booking form, your terms and the full portfolio by category — and your bio link points to the right page. When someone searches “makeup artist near me” on Google, the results show websites and the map, not posts."),

        h2("Local SEO for wedding makeup artists: service areas and Google Business Profile"),
        p("Brides search “bridal makeup artist” with a city or region, and planners search by the area of the venue. A page for each area you actually serve, with real weddings from there, gives Google something to match. In Google Business Profile you list the regions you cover and hide your home address, as service-area businesses do. Reviews on Google and on wedding directories such as The Knot and WeddingWire add trust, and the site links to them rather than copying them."),
        p(
          "How map rankings and reviews are built over time is described on ",
          link("local SEO services", "/services/local-seo-services"),
          ".",
        ),

        h2("Makeup artist website templates, Pixpa or a custom design"),
        p("Pixpa, Squarespace, Wix and Showit sell makeup artist website templates with galleries and contact forms. For an artist starting out, with one city and one kind of work, a template is a reasonable first site."),
        p("A custom design pays off when the portfolio needs real categories, when travel zones, bridal party pricing and deposits need their own logic, when a small team of artists works under one name, or when you serve clients in two languages. It also means the site looks like your work rather than like hundreds of others on the same theme. Whatever you choose, make sure the domain is registered in your name."),
        p(
          "A studio with several chairs and a team of stylists needs a different structure, described on ",
          link("beauty salon website design", "/website-development-for-beauty-professionals/beauty-salon-website"),
          ".",
        ),

        h2("A makeup artist website that ChatGPT and Google AI Overviews can read"),
        p("Brides and planners now ask assistants questions like “a bridal makeup artist in Napa who travels to wineries” or “an SFX makeup artist in Atlanta for a short film”. ChatGPT and Google’s AI Overviews answer from text they can read. So services, areas, prices, languages and the kinds of work you take are written on the page as text, not inside images, the pages are served as HTML from the server, structured data describes you as a local business with a service area, and robots.txt names the AI crawlers that may visit. That is how I set up Giuseppe’s psychotherapy site, and ChatGPT now quotes pages he published after launch."),
        p(
          "Getting named in those answers over time is the subject of the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much makeup artist website design costs"),
        p("You pay one amount for the design and the build together."),
        li("A simple makeup artist website — home, portfolio, bridal and event services with prices, travel fees, about and a booking form: 700–1,400 €."),
        li("A full site with a portfolio by category, bridal and event packages, travel zones, booking with deposit and contract, editorial and SFX pages, course pages with paid video and service-area pages: from 2,000 €."),
        p(
          "My general process is on the ",
          link("website development", "/services/website-development"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Makeup artist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a makeup artist website cost?", "A simple site costs 700–1,400 €; a full site with a portfolio by category, bridal packages, travel zones, booking with a deposit and course pages costs from 2,000 €. Both prices include design; I fix the amount after seeing what you offer."],
          ["Do I need a website if I already have Instagram?", "Instagram brings attention; the website turns it into bookings. Prices, travel fees, the date check and your terms sit in one place, and Google and AI assistants read a website far better than a profile."],
          ["Should I put prices on my makeup artist website?", "Most brides want at least a starting price before they write. Showing “from” prices and what changes them saves you from inquiries that do not fit your budget range; exact quotes for large parties can still come by message."],
          ["Can clients pay a deposit through the website?", "Yes. The form checks the date, and the deposit is paid through HoneyBook, Dubsado, Square or Stripe, depending on what you already use. The terms are shown before the client sends the request."],
          ["Can I sell an online makeup course on my website?", "Yes. The course page takes payment through Stripe Checkout and sends each buyer a private video link automatically; the link can expire after a set number of days and the video cannot be downloaded. That is how the Landi Room course page works."],
          ["Can I add new looks to my portfolio myself?", "Yes. A new look is a short form in the editor: category, photos, credits and a line of text. The site resizes the photos and places them in the right gallery."],
          ["Can the website show travel fees by area?", "Yes — as a list of zones with prices, or as a short note per area page. You change the amounts yourself when fuel or tolls change."],
          ["Can you build a website for a US makeup artist from Poland?", "Yes. The work is remote and in English; your morning is my afternoon or evening in CET, which leaves time for calls before your first client of the day. You pay in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order makeup artist website design: what to send me"),
        p(
          "Send your Instagram and current website if you have one, the kinds of work you take, your price list, travel zones and fees, how you take deposits now, the tools you use for contracts or scheduling, whether you teach or plan a course, and links to fifteen or twenty photos you want in the portfolio. I answer with the pages I suggest for your business and a fixed price. Reach me through the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
