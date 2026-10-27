// Landing page fixture: Carpentry website design (EN), group
// «carpentry-website-design». New page.
// Semantic core: ref/batch-h1.md, carpentry / joinery group (US volumes):
// carpentry website 170 (grid 590) and website for carpenters 170 (grid 590)
// — excerpt, intro, first H2, metaTitle · carpentry website design 30 (grid
// 110), carpentry web design (grid 110) — H1, H2s, cost H2, FAQ · carpentry
// website template(s) 20 + 20, ideas 20, examples 10, free templates 10 —
// templates H2 and FAQ · carpentry services website 10 — intro · finish
// carpentry websites 10 — first H2, gallery H2. Not targeted: «carpenters
// union» 27,100, United Brotherhood of Carpenters — union members, not
// business owners; «woodworking website», woodworking plans, «how to learn
// carpentry» — hobbyists; PAA «Can a carpenter make $100,000 a year?» —
// careers.
// Intent: ref/intent-check-batch-h.md — «carpentry website» vs «handyman
// website design» 0 of 10 shared URLs (4 shared domains: comradeweb,
// dribbble, reddit, weblium) → own page. SERP: contractor-marketing agencies
// (Comrade), trade software (Tradify, InvoiceFly), builders (Weblium),
// Dribbble, Reddit → owners choosing a designer or a template.
// This page = carpenters, cabinet makers, joinery workshops, custom furniture
// makers, finish carpentry, stairs, decks: project gallery by type of work,
// wood species and finishes, quote request with measurements and drawings,
// starting prices per unit (linear foot, step, square foot), process from
// measuring to installation with the current lead time, trade page for
// builders, architects and interior designers, licensing and insurance (US,
// general), local search and Google Business Profile (one H2), templates vs
// custom, AI-readable build, cost.
// NOT on this page: small repair jobs and ZIP checks (/handyman-website-design
// — linked once); general contractors, new builds and renovations as a whole
// (/construction-company-website — linked once); ongoing map and search work
// (/services/local-seo-services — linked). Portfolio: renovation (interiors,
// premium design), Felgilab (workshop, service and price pages), ScanM2 (B2B
// service for architects and builders), auto repair (local SEO, Maps), tyre
// storage (owner edits texts himself).
// Owner’s rules: never say there are no clients from the visitor’s industry;
// every page covers AI search; design is included in the price.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const carpentryWebsiteDesignEn = {
  lang: "en",
  group: "carpentry-website-design",
  slug: "carpentry-website-design",
  title: "Carpentry website design",
  heading: "Carpentry Website Design",
  excerpt:
    "Carpentry website design and build for carpenters, cabinet makers and joinery workshops: a project gallery sorted by type of work, a quote request that takes measurements, photos and drawings, starting prices per job, and a page for the builders and designers who send you repeat work.",
  seo: {
    metaTitle: "Website for Carpenters and Cabinet Makers | Bandziuk",
    metaDescription:
      "Carpentry website design: project gallery by type of work, quote requests with photos and drawings, prices per job, a trade page for builders. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "For carpenters and joinery shops"],
  heroPhonePoints: ["Kitchens · Stairs · Built-ins", "Send photos and sizes", "Prices from, per job", "Booking installs for March"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple carpentry website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Carpentry website with a project gallery by type of work, quote request with measurements and drawings, trade page for builders and designers, and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with carpentry website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A project gallery sorted by type of work", text: "Kitchens, built-ins, stairs, doors, decks, furniture" },
        { _key: k("o"), iconName: "file-text", title: "A quote request with sizes and drawings", text: "Measurements, room photos and PDFs in one request" },
        { _key: k("o"), iconName: "layers", title: "Wood species and finishes explained", text: "Solid wood, veneer, plywood, MDF — and what each costs" },
        { _key: k("o"), iconName: "users", title: "A trade page for builders and designers", text: "Shop drawings, lead times, how you work with GCs" },
        { _key: k("o"), iconName: "map-pin", title: "Workshop address and install area", text: "Where you build, where you install, how to visit" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Services, prices and area written as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple carpentry website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Gallery by job type, quotes with drawings, trade page, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites for craft workshops and service businesses I have built",
      subtitle:
        "On the premium site of a Warsaw renovation and property-investment company, big photos of finished kitchens, built-ins and staircases carry the sale — the job your gallery does. Felgilab, a wheel-renovation workshop in Warsaw, moved to a rebuilt WordPress site where every service has its own page and price, the same structure a shop needs for kitchens, stairs and doors. ScanM2 sells 3D laser scanning and BIM to architects and builders; after a rebuild in three languages it gets leads every week, and those are the same buyers a trade page for joinery speaks to. A Warsaw auto repair shop got local SEO, Google Maps work and service pages. A tyre-storage business runs a one-page WordPress site whose texts the owner edits himself, as you will edit prices and lead times.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your carpentry website",
      subtitle: "Within one business day you get the pages I would build for your shop, the fields your quote request would ask for, and a fixed price.",
      contextLabel: "Shop name, Instagram or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which work brings most of your revenue?", options: ["Kitchens and built-in cabinets", "Stairs, doors and finish carpentry", "Custom furniture", "Decks and outdoor structures", "Work for builders and designers"] },
        { _key: k("z"), question: "What do you have now?", options: ["Instagram and referrals only", "A Wix or Squarespace template", "A Houzz or lead-platform profile", "An older custom site"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Carpentry website design is the service I offer carpenters, cabinet makers and joinery workshops: I plan, design and build the whole site myself, so there is no hand-off between a designer and a developer, and the price is agreed before the start. A carpentry services website sells something hard to sell online — a custom job worth thousands, made to measure, which the client cannot see until it is installed. The site has to replace the showroom, the first conversation and part of the estimate."),

        h2("Carpentry website design for carpenters, cabinet makers and joinery workshops"),
        p("A website for carpenters covers businesses that sell very different things. A finish carpenter working alone sells trim, crown molding and doors to homeowners and remodelers. A cabinet shop with a CNC router sells kitchens and closets. A joinery workshop builds windows, doors and stairs. A deck builder works outdoors from spring to fall. What they share is a buyer who compares two or three shops over weeks, looks at past work many times and wants to know the price range before inviting anyone to measure."),
        p(
          "So the site is built around proof of work and a request that carries real data. If most of your jobs are small repairs, the ",
          link("handyman website design", "/handyman-website-design"),
          " page fits better; if you build or renovate whole houses as a general contractor, see the ",
          link("construction company website", "/construction-company-website"),
          " page.",
        ),

        h2("A carpentry project gallery sorted by type of work"),
        p("The gallery is the page clients return to most, and a single wall of photos does not help them. Projects are grouped the way people shop:"),
        li("kitchens and kitchen islands"),
        li("built-in wardrobes, closets, media walls and bookcases"),
        li("stairs, railings and landings"),
        li("interior doors, trim and wainscoting"),
        li("decks, pergolas and outdoor structures"),
        li("custom furniture: tables, beds, desks"),
        li("commercial fit-outs for restaurants, offices and shops"),
        p("Each project has its own page: the room, the wood and finish, the hardware, how long it took and a short note on the problem it solved, such as a closet under a sloped ceiling. Photos from the workshop — joints, glue-ups, a finish being sprayed — show the craft that a finished kitchen hides. You add a project from your phone in a few minutes, and the photos are compressed on upload so the gallery stays fast."),

        h2("Wood species, materials and finishes explained on a carpentry website"),
        p("Clients ask the same questions before every custom job: solid oak or veneer, plywood or MDF boxes, oil or lacquer, painted or stained. A short materials page answers them once and explains why your quote differs from a flat-pack kitchen. It covers:"),
        li("the species you work with, each with a photo of a real piece, not a stock sample"),
        li("solid wood, veneer, plywood and MDF — where you use each and why"),
        li("finishes and how they age, with care instructions"),
        li("hardware: hinges, drawer runners and soft-close options"),
        p("Every project page links back to the materials it used, so a client who likes a walnut vanity can see what walnut costs relative to maple."),

        h2("A carpentry quote request with photos, measurements and drawings"),
        p("A good request saves a wasted measuring visit. The form asks what you would ask on the phone, in short steps:"),
        ol("Type of work, chosen from your list."),
        ol("Rough dimensions — with a small diagram showing which walls or openings to measure."),
        ol("Photos of the room or the old staircase, taken on a phone."),
        ol("Drawings or plans from an architect or designer as PDF or image files, plus inspiration photos."),
        ol("Wood or finish preferences, a budget range picked from options, and the date the job must be done by."),
        p("The request reaches your email with every file attached, or a shared folder if files are large. You can reply with a ballpark figure, ask for one more measurement or book a measuring visit — and decline politely when the budget and the job do not match."),

        h2("Starting prices and price ranges for carpentry work on the website"),
        p("Custom work has no fixed price, but clients still need a range to decide whether to call. Each type of work gets a starting price in the unit you already quote in: cabinets per linear foot, stairs per step or per flight, decks per square foot, doors per unit. Next to it is a short line on what moves the number — species, finish, hardware, site access, installation height."),
        p("If you charge for measuring and drawings, or credit that fee against the order, the page says so. A starting price filters out the client who expected flat-pack prices and gives the rest a reason to send a request."),

        h2("The carpentry process from measuring to installation, shown step by step"),
        p("Clients hiring a carpenter for the first time do not know what happens between the first call and the finished room. A process section shows it:"),
        ol("Measuring visit and a conversation about use, style and budget."),
        ol("Drawings or a 3D view, revised until approved."),
        ol("Deposit and material order."),
        ol("Building and finishing in the workshop."),
        ol("Installation, adjustment and cleanup."),
        p("Above the steps sits one line you edit yourself in the CMS: your current lead time, for example “Booking installs from March”. It answers the question asked in almost every call and sets expectations before the deposit."),

        h2("A trade page on a carpentry website for builders, architects and interior designers"),
        p("For many shops, repeat work from the trade matters more than single homeowners. Builders, architects and interior designers look for something different: whether you work from their drawings, produce shop drawings, meet a schedule and send an insurance certificate without being asked twice. A separate trade page answers that:"),
        li("the work you take for the trade — millwork, built-ins, stairs, commercial fit-outs"),
        li("drawing formats you accept and how you handle revisions"),
        li("capacity, typical lead times and the area you install in"),
        li("a trade enquiry form with a drawing upload and the project schedule"),
        p("ScanM2, a 3D laser scanning and BIM company, sells to the same architects and builders; after I moved its site off a no-code builder, it gets leads every week."),

        h2("Reviews, licensing and insurance on a carpenter’s website"),
        p("Rules differ across the US: in many states and cities, cabinet installation or deck building counts as contractor work and needs a license above a certain job value. The site states the license number where one applies, general liability and workers’ comp if you carry them, and your warranty on workmanship — as text, so it can be checked. Reviews from Google sit next to the request button and name the job: “walk-in closet in white oak”, not just five stars."),

        h2("Local search for carpenters: “carpenter near me”, the workshop and Google Business Profile"),
        p("Homeowners search for “carpenter near me”, “custom cabinets” plus the town, or “stair builder” and choose from the map. If clients may visit, the Google Business Profile shows the workshop address and opening hours; if you only install on site, it is set up as a service-area business with the towns listed. The website supports the profile with a page for each main type of work and the same name, phone and address everywhere."),
        p(
          "The basic setup comes with the full site; ongoing work on the map and reviews is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Carpentry website templates and examples versus a custom carpentry website"),
        p("Searches for carpentry website templates, ideas and examples bring up galleries of handsome screens, and a template is a fair start for a new shop: online in a weekend, a few photos, a phone number. The limits show when the portfolio grows. Templates have one gallery for everything, a three-field contact form with no file upload, no place for prices per unit or a trade page, and the site disappears if you stop paying the builder."),
        p(
          "A custom site is built around your types of work and your request form, usually on WordPress, and the domain, code and content stay yours. How I build on it is on the ",
          link("WordPress development", "/services/wordpress-development-services"),
          " page.",
        ),
        h3("What the best carpentry websites have in common"),
        p("They show real projects sorted by type, say where the shop works, give a price range and make sending measurements easy. Fonts and colors matter less than whether a client finds a staircase like theirs in two taps."),

        h2("A carpentry website that ChatGPT and Google AI Overviews can read"),
        p("People now ask ChatGPT or Google’s AI Overviews who builds custom kitchens or oak stairs nearby and what that costs. The assistant answers from text it can parse. Types of work, wood species, starting prices, lead time, install area and license details sit in the page code as plain text rather than inside photos or a gallery script, and the business and its services get structured data."),
        p(
          "Being named in those answers over time is a separate job; I describe it on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much carpentry website design costs"),
        p("Design is part of the build price, not a separate invoice."),
        li("A simple carpentry website — home, types of work with starting prices, a gallery, about, a request form: 700–1,400 €."),
        li("A carpentry website with project pages by type of work, a materials page, a quote request with measurements and drawings, a trade page and local SEO setup: from 2,000 €."),
        p(
          "The work runs from brief and page list, through phone-first design, to build and launch; details are on the ",
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
      title: "Carpentry website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a carpentry website cost?", "A simple carpentry site is 700–1,400 €; from 2,000 € you get project pages by type of work, a materials page, a quote request with drawings, a trade page and local SEO setup. Design is included. I fix the price after seeing your types of work and current photos."],
          ["How long does it take to build a website for a carpentry business?", "Usually four to six weeks from the brief. Sorting project photos and writing starting prices take the most time; a simple site with a short gallery can go live sooner."],
          ["My photos are mostly from my phone. Is that enough?", "Yes, if they are taken in daylight from the same few angles. I send a short shot list — full room, close-up of joints and finish, one photo during installation — and projects can be added later as you finish them."],
          ["Can clients send architects’ drawings and large files?", "Yes. The form accepts PDF and image files, and large sets of drawings go to a shared folder linked to the request, so nothing bounces from your inbox."],
          ["Should a custom furniture maker show prices?", "Starting prices or ranges work well even for one-off pieces: a dining table from a stated amount in oak, with a note on what changes it. They cut calls from people expecting store prices."],
          ["Can I add new projects and change my lead time myself?", "Yes. You open the admin panel on your phone or laptop, change the lead-time line or prices, or upload a finished job; each new project takes the same layout as the others."],
          ["Do you build websites for carpenters in the US?", "Yes. All the work is remote, in English, from Poland. Central European afternoons and evenings fall on US mornings, so a call fits before you head into the shop. I invoice in EUR or another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order carpentry website design: what to send me"),
        p(
          "Send your shop name, a link to your Instagram, Google profile or current site, the types of work you take with rough starting prices, the area you install in, whether clients visit the workshop and whether you work for builders or designers. Ten photos of finished jobs help me plan the gallery. I will reply with a page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
