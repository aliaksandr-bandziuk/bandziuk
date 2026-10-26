// Landing page fixture: Optometry SEO for eye care practices and optical shops
// (EN), group «optometry-seo».
// Semantic core: ref/medical-practices.md, group «optometrists / opticians»:
// optometrist marketing 170 (H2 on SEO vs optometrist marketing), optometry
// seo 140 (H1, H2), optometrist advertising ideas 20 (FAQ), best optometry
// websites 20 (left to the design page). Branded phrases (blink optometry 1300,
// johnson optometrist 210, dr gertz optometrist 20) are patients’ searches —
// not targeted. Design phrases (optometrist website design 90, best
// optometrist website design 10, website design for optometrist 10) →
// /optometrist-website-design.
// PAA used (general medical set): «What are the best SEO strategies for
// healthcare websites?» — answered in the guide structure and the FAQ.
// Intent: ref/intent-check-medical-practices.md — «optometrist website design»
// vs «optometry seo»: 0 shared URLs, 1 shared domain (eyecarepro.com) →
// separate pages. «optometry seo» top 10: eyecarepro, optometrymarketingservices,
// askotter.ai, seodesignchicago, iboosthealthcare, pinnaclepursuitseo,
// fuelonline → eye care marketing vendors and agencies; the buyer is the
// practice owner. Angles from the brief: exams vs optical shop vs contact
// lenses, vision insurance (VSP, EyeMed — general), frame brands, myopia
// management, dry eye, local SEO per office, booking.
// NOT on this page: designing and building the site
// (/optometrist-website-design); ophthalmology surgery and LASIK centers
// (general /medical-seo); paid ads, social media, recall campaigns.
// Owner’s rule: every SEO page covers AI search (GEO, AEO); Giuseppe’s case on
// every page of this batch.
import { p, h2, h3, li, link, k } from "./pt";

export const optometrySeoEn = {
  lang: "en",
  group: "optometry-seo",
  slug: "optometry-seo",
  title: "Optometry SEO for eye care practices and optical shops",
  heading: "Optometry SEO for Eye Care Practices and Optical Shops",
  excerpt:
    "I do optometry SEO for independent eye care practices and optical shops: pages for eye exams, contact lenses and myopia management, a Google Business Profile for every office, vision insurance and frame brand pages, and facts AI assistants can quote — so people nearby book their exam with you, not with a chain.",
  seo: {
    metaTitle: "SEO for Optometrists and Optical Shops | Bandziuk",
    metaDescription:
      "Optometry SEO: exam and contact lens pages, a Google profile per office, VSP and EyeMed pages, frame brands, AI answers and reports in booked exams. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Exams + optical + contacts", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Eye exam near me", "Takes VSP and EyeMed", "Book an eye exam", "Ray-Ban frames in stock"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Optometry SEO audit: website and Google Business Profile of each office", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off optometry SEO work: exam, insurance and frame brand pages, office profiles, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an eye care practice or optical shop", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What optometry SEO includes",
      items: [
        { _key: k("o"), iconName: "layers", title: "Pages for exams, contacts and myopia care", text: "Each service searched on its own, with its own booking link" },
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile for every office", text: "Optometrist category, hours, photos, the matching page" },
        { _key: k("o"), iconName: "file-text", title: "Vision insurance pages patients search for", text: "Plans accepted per office, self-pay exam prices" },
        { _key: k("o"), iconName: "image", title: "Frame brand pages from your own shelves", text: "Brands you carry, real photos, price ranges" },
        { _key: k("o"), iconName: "message-circle", title: "A review routine with privacy-safe replies", text: "Asked after each exam, never confirming a patient" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Facts about your practice that assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Optometry SEO audit: website and office profiles", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an eye care practice", value: "from 800 € / month", note: "pages, maps, reviews, AI answers", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a private practice and local businesses I have optimized",
      subtitle:
        "First, a private psychotherapy practice in Milan with strict advertising rules, consulting rooms in three towns and new pages already quoted by ChatGPT — the same mix an eye care practice has: clinical pages, several locations, AI answers. Then a Warsaw auto repair shop found on Google Maps, a 3D scanning company whose organic traffic grew 29×, a real estate catalog I run SEO for monthly, and a one-page local service site.",
      picks: [
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for optometry SEO",
      subtitle: "I reply within one business day with what I would fix first on your website and office profiles, and a fixed price.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does your practice offer?", options: ["Eye exams and an optical shop", "Mostly medical eye care", "An optical shop with a visiting optometrist", "Several offices"] },
        { _key: k("z"), question: "Where do new patients come from now?", options: ["Vision plan provider lists", "Google search and Maps", "Referrals and word of mouth", "Walk-ins to the shop"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do optometry SEO for independent eye care practices and optical shops: a page for each service people search for — eye exams, contact lens fittings, myopia management, dry eye — a Google Business Profile for every office, insurance and frame brand pages, and facts AI assistants can quote. I work alone, from the audit to the code, and I measure the result in booked exams and calls, not in traffic."),

        h2("What optometry SEO covers: eye exams, the optical shop and contact lenses"),
        p("An eye care practice is three businesses under one roof, and people search for each one differently:"),
        li("eye exams — “eye doctor near me”, “eye exam that takes VSP”, “kids eye exam” — searched by people who want a time slot this week"),
        li("the optical shop — “Ray-Ban glasses near me”, “progressive lenses”, “glasses in one day” — where people compare frames, lenses and prices"),
        li("contact lenses — fittings and reorders, where the real competitors are online sellers and warehouse clubs, not the practice down the street"),
        p("Many practice websites put all three on one “Services” page. Search engines then have nothing specific to show, and national chains such as LensCrafters, Warby Parker or Costco Optical take the clicks. Optometry SEO gives each part of the practice its own pages, tied to the right office and the right booking link."),

        h2("Local SEO for optometrists: a Google Business Profile and a page for each office"),
        p("For “optometrist near me” or “eye exam open Saturday” the map results decide most of the calls. Each office needs its own profile: Optometrist as the primary category, Optician or Eye care center as secondary where it fits, the services list, hours including evenings, real photos of the exam lane and the frame wall, and a link to that office’s page rather than the home page."),
        p("The office page carries what a profile cannot: which doctors see patients there and on which days, parking, whether walk-ins are welcome for adjustments and repairs, the plans accepted at that location. Practices that bought a second office often still have its old name and phone number in directories; I clean these up so Google sees one consistent practice."),
        p(
          "The same structure worked for Giuseppe, a psychotherapist in Milan: his new site has separate pages for his consulting rooms in Milan and Monza and for online sessions, plus a map of the rooms, so each location answers its own searches. More on maps and profiles on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Eye exam pages in optometry SEO: routine, pediatric and medical eye care"),
        p("A person searching for an exam wants to know what happens, how long it takes, what it costs without insurance and whether there is a slot soon. One page per type of visit answers that better than a list."),
        h3("Routine and pediatric eye exams"),
        p("Parents search for a child’s first eye exam and for back-to-school vision checks. The page says what is checked at each age, how long the visit lasts, whether pupils are dilated and what to bring."),
        h3("Medical eye care: dry eye, red eyes and diabetic eye exams"),
        p("Visits billed to medical insurance rather than a vision plan — dry eye evaluation, eye infections, diabetic eye exams, glaucoma monitoring — bring people who search for a symptom. Each page describes the visit and the options in general terms and leads to booking. No page promises a result."),
        h3("Myopia management for children"),
        p("Parents of nearsighted children search for myopia control lenses, orthokeratology and atropine drops. These pages explain the options, who they suit and that results differ from child to child, and they name the optometrist who reviewed them."),

        h2("Vision insurance pages for eye care practices: VSP, EyeMed and medical plans"),
        p("Many patients start from their benefits: “eye doctor that takes EyeMed”, “VSP provider near me”, “does Medicare cover eye exams”. A page that lists the vision and medical plans you accept, per office if they differ, explains why a dry eye visit is billed differently from a routine exam, and shows self-pay prices for an exam and a contact lens fitting ranks for those searches and takes pressure off the phones. Someone has to own that list: a plan you dropped last spring, still listed, turns into an angry one-star review."),

        h2("Frame brand and lens pages: optical shop SEO that brings buyers"),
        p("People search for frames by brand — “Oakley frames near me”, “Tom Ford eyeglasses” plus a city, “Lindberg dealer” — and by lens type: progressives, blue-light filters, sports and safety glasses. A page for each brand you carry, with photos from your own shelves, a price range and a line on fittings, catches searches that a row of logos never will. Brands with selective distribution deserve their own page: being an authorized dealer is a fact buyers look for."),
        p("Contact lens pages work the same way: fittings for astigmatism and multifocal lenses, specialty and scleral lenses, and a clear reorder path for existing patients, so they do not drift to online sellers."),

        h2("Patient reviews in optometry SEO: Google, Yelp and privacy-safe replies"),
        p("Reviews move a practice up the map and decide between two nearby offices. A routine works better than a campaign: a text after every exam or glasses pickup with a direct link, sent to every patient. Rewarding reviews or asking only satisfied patients breaks Google’s rules and the FTC rules on reviews and endorsements."),
        p("Replies need one extra care in healthcare: never confirm that the reviewer is a patient and never mention a prescription or a visit. Thank the person, keep it general and offer a phone number for the office manager; readers see a practice that listens, and nothing private is said. A complaint about a late order or a broken frame can be answered more concretely, as long as no health detail appears."),

        h2("E-E-A-T and HIPAA on an optometry website: reviewer, credentials and safe forms"),
        p("Google holds eye health pages to the same standard as other “Your Money or Your Life” topics. Each clinical page names the optometrist who wrote or reviewed it, with the OD degree, state license and any fellowship, and shows a “last reviewed” date. I prepare the structure, search data and drafts; your doctors check clinical content before it goes live."),
        p("Booking and contact forms collect as little as possible: name, contact details, office and preferred time. If a form must collect health details, it runs through a provider that signs a business associate agreement under HIPAA, and tracking pixels stay off booking pages. This is general guidance; your state board and compliance adviser have the final word on advertising and privacy."),

        h2("Technical SEO for eye care practices: speed, booking widgets and structured data"),
        p("Most eye care websites lose positions on the same basics:"),
        li("booking widgets, chat pop-ups and large frame galleries that slow pages on a phone"),
        li("vendor template sites that share their text with hundreds of other practices"),
        li("an office address spelled one way on the site, another way on Google and a third way on the plan provider lists"),
        li("no structured data naming the practice, its offices, hours, doctors and services"),
        p(
          "If the site needs more than fixes, the ",
          link("optometrist website design", "/optometrist-website-design"),
          " page describes how I design and build eye care websites.",
        ),

        h2("Optometry SEO for ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People now ask an assistant which eye doctor nearby takes their vision plan, who fits contacts for astigmatism or whether a child needs myopia management. Assistants build those answers from sources they can read and compare — your pages, your profiles, reviews and plan provider lists. The work has two names, generative engine optimization (GEO) and answer engine optimization (AEO); for an eye care practice it comes down to:"),
        li("services, doctors, offices, hours, languages and accepted plans written as plain facts"),
        li("short answers to common patient questions on each service page, reviewed by an optometrist"),
        li("the same details on the site, the Google profiles and the plan provider lists"),
        li("structured data that connects the practice, its doctors and its offices"),
        p(
          "Giuseppe, the psychotherapist in Milan, found me by asking ChatGPT. After the rebuild — location pages, 150 FAQ answers reused across pages, structured data for the practice, conditions and services — his new pages already appear in ChatGPT answers. A small private practice can be the source an assistant quotes. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Optometry SEO and optometrist marketing: what an SEO specialist does"),
        p("Optometrist marketing usually comes as a package from an eye care vendor: a website on their platform, recall emails, social posts and paid ads. My part is narrower: I work alone on search and on the website itself. Ads and social media are outside it. What you get are pages, office profiles and plain facts that Google and AI assistants pick up, on a site you own. Recall reminders stay in your practice management system, where they already work."),
        p(
          "Practices that also offer eye surgery or work with ophthalmologists will find the wider picture on the ",
          link("medical SEO", "/medical-seo"),
          " page.",
        ),

        h2("How much optometry SEO costs"),
        li("SEO audit of the website and each office’s Google profile: from 250 €, one-off, with fixes ranked by impact."),
        li("One-off work — exam, insurance and frame brand pages, office profiles, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO — new pages, maps, review routine, AI visibility and reports in booked exams: from 800 € per month."),
        p(
          "One office in a smaller town rarely needs monthly work: the audit plus exam, insurance and brand pages often do most of the job. How I plan longer work is on the ",
          link("SEO strategy", "/services/seo-optimization-and-strategy"),
          " page; all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Optometry SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for an optometry practice cost?", "An audit of the website and office profiles costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month. Tell me the offices and the services you want to grow, and the quote comes back as one fixed number."],
          ["How long does optometry SEO take to bring new patients?", "Profile fixes and better office pages can show within weeks. New exam, myopia or brand pages need a season — roughly two to four months — and longer where chain stores crowd the map."],
          ["What are good optometrist advertising ideas that do not cost per click?", "Pages people already search for: a back-to-school eye exam page each summer, a page for each frame brand and trunk show, a myopia management page for parents, and a vision insurance page. Add a review request after every exam and pickup. They keep working without paying for each visit."],
          ["Should each office have its own Google profile and page?", "Yes. Each real office with its own address and staff gets its own profile and a page with its doctors, hours, parking and accepted plans. A profile that links to the home page wastes the visitor’s first click."],
          ["Can an independent optical shop compete with online contact lens sellers?", "On price alone, rarely. In search, yes: fittings for astigmatism, multifocal and specialty lenses, a quick reorder path and same-week appointments are things an online seller cannot offer, and pages about them rank locally."],
          ["Do you write the clinical content?", "I prepare the outline, the search data and first drafts. An optometrist from your practice signs off the clinical parts, and that name and date appear on the page. Medical advice stays with your doctors."],
          ["Can you work with a US practice from Poland?", "Yes. The work is remote: the website, the profiles and search data for your area. My afternoon and evening in Central European Time overlap with the US morning, so calls are easy to schedule. Invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order optometry SEO: what to send me"),
        p(
          "Send the practice name, the website and the Google Maps link of each office, the services you want more patients for — exams, contact lenses, myopia management, dry eye, frames — the vision plans you accept and the booking system you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
