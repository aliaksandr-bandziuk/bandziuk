// Landing page fixture: Optometrist website design (EN), group
// «optometrist-website-design».
// Semantic core: ref/medical-practices.md, group «optometrists / opticians»:
// optometrist website design 90 (H1, H2), best optometry websites 20 (H2),
// best optometrist website design 10, website design for optometrist 10.
// «optometrist marketing» 170 and «optometry seo» 140 → /optometry-seo.
// Branded phrases (blink optometry, johnson optometrist, dr gertz) are
// patients’ searches — not targeted.
// Intent: ref/intent-check-medical-practices.md — «optometrist website design»
// vs «optometry seo»: 0 shared URLs, 1 shared domain → separate pages.
// «optometrist website design» top 10: idoc.net, imatrix, optometrymarketing,
// eyecarepro, marketing4ecps, muup, dribbble, pinterest → eye care website
// vendors, design studios and galleries; the buyer is the practice owner.
// Angles: low-vision accessibility, exam booking, frame catalog, contact lens
// reorders, insurance display, doctor profiles, privacy-safe forms, vendor
// template vs custom site, moving off a vendor platform without losing URLs.
// NOT on this page: SEO work — office profiles, reviews routine, insurance and
// brand pages as search targets (/optometry-seo); general clinics and doctors
// (/medical-website-design); online stores selling prescription glasses.
// Owner’s rule: design pages carry the H2 «… website that ChatGPT and Google AI
// Overviews can read»; Giuseppe’s case on every page; NDA medical system
// mentioned once.
import { p, h2, li, ol, link, k } from "./pt";

export const optometristWebsiteDesignEn = {
  lang: "en",
  group: "optometrist-website-design",
  slug: "optometrist-website-design",
  title: "Optometrist website design",
  heading: "Optometrist Website Design for Eye Care Practices",
  excerpt:
    "I design and build optometrist websites for eye care practices and optical shops: exam booking in a few taps, a frame catalog from your own shelves, contact lens reorders, insurance details people can find, and type that stays readable for visitors who came because they cannot see well.",
  seo: {
    metaTitle: "Eye Care Website Design for Optometrists | Bandziuk",
    metaDescription:
      "Optometrist website design: low-vision friendly layout, exam booking, frame catalog, contact lens reorders, insurance info, HIPAA-aware forms. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Book an eye exam", "Browse our frames", "Reorder contacts", "Insurance we accept"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple website for an optometrist or optical shop, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Eye care practice website with office and doctor pages, exam booking, frame catalog, contact lens reorders and accessibility testing, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with optometrist website design",
      items: [
        { _key: k("o"), iconName: "gauge", title: "Readable without glasses", text: "Large type, strong contrast, works at 200% zoom" },
        { _key: k("o"), iconName: "plug", title: "Exam booking in three steps", text: "Office, type of visit, time — from your scheduler" },
        { _key: k("o"), iconName: "image", title: "A frame catalog from your shelves", text: "Brands, shapes and prices, reserve to try in store" },
        { _key: k("o"), iconName: "phone", title: "Contact lens reorders without a call", text: "A short form for existing patients" },
        { _key: k("o"), iconName: "shield-check", title: "Booking forms without health details", text: "Name, phone, office and time — records stay in your system" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Offices, doctors, plans and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple optometrist or optical shop website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Offices, doctors, booking, frame catalog, reorders", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: a private practice site and catalogs I have built",
      subtitle:
        "First, the site of a private psychotherapy practice in Milan: a calm design for anxious visitors, a map of three consulting rooms, 468 posts moved without losing a URL. Then a real estate catalog with filters and a map — the pattern a frame catalog needs — a premium-design site for a Warsaw renovation company, a rebuilt site for a Warsaw workshop and a multilingual site covering ten countries.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your optometrist website",
      subtitle: "I reply within one business day with a proposed layout for the home page, the exam booking path and an office page, and a fixed price.",
      contextLabel: "Practice name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is your current website built on?", options: ["An eye care vendor platform", "A website builder", "WordPress", "No website yet"] },
        { _key: k("z"), question: "What should the new site do first?", options: ["Book more eye exams", "Show our frames", "Handle contact lens reorders", "Present several offices"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do optometrist website design for eye care practices and optical shops, and I build the sites myself, so the layout, the code and the booking setup come from one person at one price. Visitors to an eye care website are often reading without their glasses, on a phone, sometimes right after an exam with dilated pupils. That one fact shapes most of the decisions below."),

        h2("The first screen of an optometrist website: exam booking, offices and frames"),
        p("Someone opening your site wants one of four things, and the first screen points to each of them without scrolling:"),
        li("book an eye exam — the main button, in the one accent color the site uses"),
        li("find the nearest office, with today’s hours and a tap-to-call number"),
        li("see which frames and brands you carry"),
        li("reorder contact lenses or pick up glasses that are ready"),
        p("The headline says what you are and where: “Eye exams, glasses and contact lenses in [your town]”, not “See the world clearly”. A rotating slider with brand campaign images looks good in a vendor demo and hides all four actions on a phone."),

        h2("Accessible optometrist website design for visitors with low vision"),
        p("An eye care practice has more visitors with poor eyesight than almost any other business, so accessibility here is the brief itself. I design to the WCAG guidelines and test the result:"),
        li("body text of at least 18 pixels on phones, line spacing that keeps lines apart, no light gray text on white"),
        li("contrast at WCAG level AA or better, including buttons and form fields"),
        li("layouts that still work when the browser zooms to 200% or the phone uses large system text"),
        li("no text inside images, so screen readers and zoom both work"),
        li("clear focus outlines and full keyboard navigation"),
        p("Low-vision patients notice when a practice that treats eyes has a site they cannot read. The opposite is a quiet sign of care."),

        h2("Eye exam booking on an optometry website: three steps from any page"),
        p("Booking follows the order people think in: choose the office, choose the type of visit — routine exam, contact lens fitting, child’s exam, dry eye or an urgent problem — then a time. The scheduling itself comes from the system you already run — its embedded calendar or booking link — and where patients cannot pick slots themselves, a three-field request your front desk answers. On a phone, “Book” and “Call” stay pinned to the bottom edge of every page."),
        p("The confirmation page tells people what to bring: current glasses, contact lens boxes, the insurance card and a list of medications. It also says whether the exam includes dilation, so nobody arrives planning to drive straight back to work."),

        h2("A frame catalog on an optical shop website: brands, real photos and reservations"),
        p("Frames are what people browse for fun, and a catalog gives them a reason to visit the shop. It works as a catalog, not an online store: filters by brand, shape, material, size and price; real photos taken on your shelves; and a “reserve to try in store” button that sends the frame and the office to your staff. I built the same pattern — filters, a map, structured listings — for a real estate catalog in Cyprus."),
        p("Your staff update frames in a simple editor, one entry per model with several photos. Virtual try-on tools exist and can be embedded, but they are heavy on phones; I add one only if your patients ask for it."),

        h2("Contact lens reorders and insurance details on an eye care website"),
        p("Existing patients who wear contacts need one short path: name, contact details and the office, sent to your staff, who look up the prescription on file and reply with the price and pickup date. No prescription details typed into the form, no uploads through plain email. This keeps reorders with you instead of with an online seller."),
        p("Insurance is shown as text in a short table: vision plans and medical plans accepted, per office if they differ, plus a line on what happens with plans you do not take. Logos alone fail twice — screen readers skip them and nobody can search the page for a plan name."),

        h2("Calm design for an eye care practice: doctor profiles and real photos"),
        p("Trust comes from seeing the people and the place. Each optometrist gets a profile with a real photo taken in your own exam room, the OD degree, license, fellowships, languages and the days they work at each office. Photos of the frame wall, the waiting area and the equipment replace stock models in white coats."),
        p("For Giuseppe, a psychotherapist in Milan, I designed a calm site for anxious visitors: a dark theme with light sections, a serif with a true italic, a map of his three consulting rooms. An eye care site needs a lighter palette, but the same restraint — one accent color, generous spacing, nothing that moves while someone is reading."),

        h2("Privacy-safe forms on an optometry website: HIPAA and patient data"),
        p("Patients will type anything into an empty message box, including a diagnosis or their last prescription. For a US practice that information is likely protected under HIPAA, and any outside service that stores it may need a business associate agreement with you. Three design choices avoid most of the risk:"),
        li("general forms ask for a name, contact details, office and preferred time, and say plainly not to describe symptoms"),
        li("intake forms and prescription questions go through your practice management system or a form provider that signs a business associate agreement"),
        li("analytics and advertising scripts never run on booking and reorder pages"),
        p("Years ago I worked on a medical system that processed patient records; it is under NDA and stays unnamed. The habit it left me: a practice website should hold the least health data its job needs. Whether a setup meets your obligations is confirmed by your compliance adviser."),

        h2("An optometrist website that ChatGPT and Google AI Overviews can read"),
        p("Questions like “which eye doctor near me fits contacts for astigmatism” or “who sees kids and takes my vision plan” now go to ChatGPT, Perplexity and Google’s AI Overviews as often as to the search box. An assistant can only repeat facts it finds as text. So offices, doctors and their credentials, services, hours, languages and plans live in HTML and structured data, word for word the same as on your Google profiles."),
        p(
          "Giuseppe found me by asking ChatGPT, and the new pages of his site already appear in ChatGPT answers. Earning a place in those answers takes steady work after launch — see the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; ranking in Google for exams and frames in your town is covered on the ",
          link("optometry SEO", "/optometry-seo"),
          " page.",
        ),

        h2("Eye care website templates from vendors vs a custom optometrist website"),
        p("Eye care vendors such as iDoc, EyeCarePro and iMatrix sell websites on their own platforms, often with marketing services attached. For a single office that needs an address, hours and a booking link, that can be enough. The limits appear later: shared template text, a frame section that is a row of brand logos, little control over speed, and a site you cannot take with you if you leave."),
        p("A custom site belongs to you — code, content and domain. Leaving a vendor platform does not have to cost rankings: I list every old URL and point it at its new home with a 301 redirect before launch. Giuseppe’s practice kept all 468 blog posts this way, each old address redirected."),

        h2("Best optometry websites: what the good ones have in common"),
        p("Galleries of the best optometry websites mix national chains and small practices. What the good ones share fits a two-office practice too:"),
        li("exam booking visible on every page, with the type of visit chosen before the time"),
        li("an office page for each location, with doctors, hours and plans"),
        li("frames shown from the real shelves, by brand"),
        li("text that stays readable at large zoom"),
        li("a reorder path for contact lens wearers"),

        h2("How optometrist website design works, step by step"),
        ol("Brief. You send your offices, doctors, services, plans, brands you carry and the questions your front desk hears most."),
        ol("Paths. I map booking an exam, browsing frames and reordering lenses, and we agree them on a phone screen."),
        ol("Design. The home page, the booking path, an office page and the frame catalog are drawn completely first; every other page reuses their parts."),
        ol("Build and handover. Booking is connected, forms and accessibility are tested, and your staff get a manual for editing frames, hours and doctors."),
        p(
          "Giuseppe’s site went from first code to handover in 44 working days, and he received a written manual and video walkthroughs. How I build sites in general is on the ",
          link("website development", "/services/website-development"),
          " page; doctors and clinics outside eye care have their own page on ",
          link("medical website design", "/medical-website-design"),
          ".",
        ),

        h2("How much optometrist website design costs"),
        li("A simple site for an optometrist or optical shop — home, services, frames by brand, insurance, contact and booking link: 700–1,400 €."),
        li("An eye care practice website with office and doctor pages, exam booking, a frame catalog with filters, contact lens reorders and accessibility testing: from 2,000 €."),
        p(
          "Design is included in both. Full ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Optometrist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does an optometrist website cost?", "700–1,400 € for a simple site for an optometrist or optical shop, from 2,000 € for a practice site with office and doctor pages, exam booking, a frame catalog and contact lens reorders. Design is included. A short description of your offices is enough for a fixed quote."],
          ["How long does it take to design and build an eye care website?", "You see the phone layouts of the home page, booking and an office page within about two weeks. A finished site usually needs four to seven weeks; photos of the shop and approved clinical texts are what most often sets the pace."],
          ["Can you connect the online scheduler from our practice management system?", "Yes, if it offers an embeddable scheduler or a booking link — most do. If not, a short request form sends the office, type of visit and preferred time to your staff."],
          ["Do we need an online store to show our frames?", "No. A catalog with filters and a “reserve to try in store” button brings people to the shop, where fitting and lenses are handled properly. An online store for prescription glasses is a separate project."],
          ["Can we leave our eye care vendor without losing Google rankings?", "Yes. Before launch each old vendor URL gets a 301 redirect to its new page and the structured data moves with it — the same method kept 468 blog posts of a Milan psychotherapy practice in place."],
          ["Is the contact form on an optometry website HIPAA compliant?", "The general form has no field for symptoms or prescriptions, so no health information reaches the website. Intake and prescription forms run through a provider that signs a business associate agreement. Your compliance adviser confirms the setup."],
          ["Can you build a site for a US practice from Poland?", "Yes. Everything runs remotely in English, and review calls fit into your morning, which is my afternoon or evening in Poland. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order optometrist website design: what to send me"),
        p(
          "Send the practice name, a link to the current website or Google profile, your offices and doctors, the frame brands you carry, the vision plans you accept and the scheduling system you use. Add a few phone photos of the frame wall and the exam lane, and the first draft will already show your own shop. You get a layout sketch and one fixed price back. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
