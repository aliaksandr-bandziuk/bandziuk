// Landing page fixture: Daycare and preschool website design (EN), group
// «daycare-website-design». New page, batch H wave 2.
// Semantic core: ref/batch-h2.md, group «daycare / preschool» (US): daycare
// website templates 110 (templates H2, FAQ) · daycare website design 70, grid
// 110 (H1, metaTitle, several H2, cost H2, FAQ) · daycare web design (grid 110)
// · best daycare websites 20, best daycare website design 10 (templates H2) ·
// preschool website design 20, website design for preschool 10, best preschool
// website design 10 (H1, program H2) · daycare website design ideas 10,
// preschool website examples 10, preschool website design templates 10,
// preschool website templates free download 10, kindergarten website templates
// 10 (templates H2) · daycare seo 50 (BRIEF.md) → one H2 on local search.
// Intent: ref/intent-check-batch-h.md — «daycare website design» vs «preschool
// website design» 1 of 10 shared URLs (parenta.com), 2 shared domains → one
// page for daycare, preschool, nursery and early learning center.
// ref/intent-check-delta.md — «daycare website» vs «daycare website design» 0
// shared URLs: «daycare website» = parents (KinderCare, state childcare
// finders) → not targeted. Design SERP: niche studios (daycarewebsitedesign.net,
// websitesfordaycares.com, brightvessel, webcitz), childcare software
// (brightwheel, Playground), templates (dribbble, squarestash) → owners.
// Angles: what parents check first (ages, hours, location, tuition from,
// openings); program pages per age group; tuition table and openings block;
// tour booking and waitlist form with minimal child data, online fee payment
// (Landi Room); staff pages; licensing, policies, meals and allergies as text
// (general); photos of children with parents’ consent, rooms and materials
// first, EXIF stripped; parent app (brightwheel, Procare, Playground — general)
// linked, not copied; bilingual programs; local search and Google Business
// Profile; AI-readable build (ChildCare / Preschool schema); templates vs
// custom, design for adult readers; cost.
// NOT on this page: parents looking for a daycare; ongoing local SEO and map
// work (/services/local-seo-services); language schools
// (/language-school-website — neighbour); very small sites for any business
// (/small-business-website-design — neighbour). Senior living (another care
// business for families) is the published neighbour: no tour-on-every-page,
// two-readers, WCAG, residents’ consent or license-lookup theses reused.
// Owner’s rules: every page covers AI search; design is included in the price;
// never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const daycareWebsiteDesignEn = {
  lang: "en",
  group: "daycare-website-design",
  slug: "daycare-website-design",
  title: "Daycare and preschool website design",
  heading: "Daycare and Preschool Website Design",
  excerpt:
    "Daycare website design and build for private childcare centers, preschools and nurseries: a page for each age group, tuition and current openings stated plainly, tour booking and a waitlist form, staff and licensing pages, and photos of rooms, materials and play yards chosen with parents’ consent in mind.",
  seo: {
    metaTitle: "Daycare Website Design for Childcare Centers | Bandziuk",
    metaDescription:
      "Daycare and preschool website design: age-group pages, tuition and openings, tour and waitlist forms, staff and licensing pages. Design and build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Book a tour", "Infants · Toddlers · Pre-K", "Openings this fall", "Join the waitlist"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple daycare or preschool website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Daycare website with age-group and location pages, tuition and openings, tour booking, a waitlist with online fee payment, policies, a second language and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with daycare website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each age group", text: "Infants, toddlers, preschool and pre-K" },
        { _key: k("o"), iconName: "file-text", title: "Tuition and openings kept current", text: "Prices from, fees and places by age" },
        { _key: k("o"), iconName: "phone", title: "Tour booking and a waitlist form", text: "Time slots, start date, days per week" },
        { _key: k("o"), iconName: "users", title: "Teacher and staff profiles", text: "Credentials, rooms and years with you" },
        { _key: k("o"), iconName: "shield-check", title: "License and policies in plain text", text: "Pickup, sick days, meals and allergies" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Ages, hours, license and tuition as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple daycare or preschool website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Programs, openings, tours, waitlist, policies, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: calm, trust-first websites I have designed and built",
      subtitle:
        "Each of these projects covers a piece of what a childcare site has to do. For Giuseppe, a psychotherapist in Milan, I moved a WordPress site to Next.js and Sanity with a calm design for a service people choose on trust. An education agency’s multilingual site, reworked from one country to ten, answers families who have many questions before they commit. A Warsaw tyre-storage business got a one-page site whose texts the owner edits himself, the way your director will update openings and menus. Landi Room, a Warsaw beauty salon, takes payments through Stripe Checkout with instant confirmation, the flow a registration fee needs. And my own site, bandziuk.com, runs in three languages with full technical SEO.",
      picks: [
        "psychotherapist-website-milan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your daycare website",
      subtitle: "I reply within one business day with a proposed page list for your programs, tours and waitlist and a fixed price.",
      contextLabel: "Center name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of program do you run?", options: ["A daycare or childcare center", "A preschool or pre-K", "A home daycare", "Two or more locations"] },
        { _key: k("z"), question: "What do you have now?", options: ["Only a Facebook page", "A template or builder site", "A site from our childcare software", "An older custom site"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Daycare website design is the service I offer owners of private daycares, preschools, nurseries and early learning centers: I plan the pages, draw the design and build the site myself, so the person who sketches the tour form is the one who makes it work. Parents choosing childcare are matching a child’s age, a start date and a commute against the places that might have room, and they leave a site the moment it makes them hunt for an answer."),

        h2("Daycare and preschool website design: what parents look for first"),
        p("Ask a center director what parents want to know on the first call, and the list is short. The home page answers it before anyone picks up the phone:"),
        li("the ages you take, in one line such as “Infant care, toddlers and pre-K in [neighborhood]”"),
        li("your opening and closing hours, and whether you follow the school calendar or stay open all year"),
        li("the address with drop-off notes: parking, the entrance families use, the nearest bus stop or main road"),
        li("tuition from a weekly or monthly amount, and whether a place is free right now"),
        p("Two buttons follow these facts: book a tour and join the waitlist. Your philosophy, history and curriculum sit further down, for parents who are already interested."),

        h2("Program pages on a preschool website: age groups, daily rhythm and curriculum"),
        p("Each age group gets its own page built from the same parts, so the parent of a toddler reads about toddlers instead of a general “Programs” overview. The page covers the age range, the group size and staff-to-child ratio you keep, a typical day from drop-off to pickup, what children learn and how you report progress, and what to pack on the first morning. Ratios and group sizes are numbers parents compare between centers, so the page shows the figures you can stand behind and changes when they do."),
        p(
          "Programs built on a named approach — Montessori, Reggio Emilia, play-based or faith-based — explain it in plain words with an example from your own classroom rather than a quote from a textbook. Bilingual and immersion programs get the same treatment, and the site itself can run in both languages; how that is built is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page, and schools that teach languages to older children and adults have their own page on ",
          link("language school website", "/language-school-website"),
          " design.",
        ),

        h2("Tuition and openings on a daycare website: starting prices and a waitlist by age group"),
        p("Many centers keep tuition off the site and give it on the phone. The result is predictable: the director spends afternoons on calls that end at the price. A short table does that work instead — weekly or monthly tuition from a stated amount for each program, full-time and part-time, the registration fee, what tuition covers (meals, diapers, field trips, whatever is true for you) and whether you accept state child care assistance. The table names the school year it applies to, so last year’s rates never mislead a family."),
        p("Openings change every month, so they live in one small block that the director edits in the CMS: for each age group, “full, waitlist open”, “two places from March” or “enrolling now”. Shown on the home page and on each program page, that one line saves more calls than anything else on the site."),

        h2("Tour booking and waitlist forms on a childcare center website"),
        p("A visit is where most enrollments start, and centers run it in one of two ways. Some hold group tours at fixed times; then the form lists the next dates and closes each one when it is full. Others show families around one at a time; then a parent picks a few slots that suit them and the director confirms one. The confirmation repeats the address, the door to use and how long the visit takes."),
        p("The waitlist form asks only what you need to hold a place in line: the parent’s name and contacts, the child’s birth month or due date, the wanted start date, the program and the days per week. Medical details, allergies and custody papers belong to the enrollment packet, which comes later and lives in your childcare software, not on a public website. If you charge a waitlist or registration fee, parents can pay it by card on the spot through Stripe Checkout — the same flow I built for Landi Room, where payment and confirmation happen in one step."),

        h2("Teacher and staff pages on a daycare website"),
        p("After tuition, the staff page is often the next one parents open. Each lead teacher gets a portrait, the room they teach, their early childhood education or credential, years in the field and a sentence or two in their own voice. Below the team, a short paragraph states what every new hire goes through — background checks, CPR and first aid training, ongoing professional development — in general terms that match your state rules and your handbook, and never more than you actually do."),
        p("Turnover is a real question in childcare, so if your teachers have stayed for years, the page can say how long each one has been with you. Profiles are edited in the CMS by your staff."),

        h2("Licensing, safety, meals and allergy policies on a daycare website"),
        p("Your license is stated as text rather than as a badge image: the license type, its number, the agency that issued it and, if your state runs a quality rating system, your current rating. A single policies page then answers what parents worry about without turning the site into a handbook:"),
        li("how drop-off and pickup work, and who may collect a child"),
        li("how the building is secured and how visitors are let in, described in general terms"),
        li("the sick-child policy and when a child should stay home"),
        li("meals and snacks: this month’s menu, who prepares it, and how you handle food allergies and special diets"),
        li("the full parent handbook as a PDF for families who want every detail"),
        p("Requirements differ from state to state, so you confirm the wording against your licensing rules; the site gives each item a fixed place, which makes it easy to keep current."),

        h2("Photos of children on a daycare website: parent consent and safer choices"),
        p("Parents scroll past stock photos of smiling toddlers, and photos of your own children are the most sensitive content a childcare business publishes. The approach I follow:"),
        li("a photo release in the enrollment packet, and a simple list of which children may appear online"),
        li("rooms, materials, art on the walls, the play yard and the kitchen as the main subjects"),
        li("children shown from behind, at a distance or as hands at work, when a child appears at all"),
        li("no names next to faces and no captions that tie a child to a room or a schedule"),
        li("location data removed from every image file before upload"),
        p("Everyday photos for parents belong in your childcare app, where only the families of that room can see them."),

        h2("A parent portal through brightwheel or your childcare app, linked from the website"),
        p("Most centers already use childcare software — brightwheel, Procare, Playground or similar — for check-in, daily reports, messages and billing. The website does not copy any of it. A parent login link sits in the header, a short page shows new families how to install the app, and child records stay in the system built to protect them. Beyond a waitlist entry, the public site keeps nothing about children."),

        h2("Daycare SEO: local search, Google Business Profile and reviews"),
        p("Parents search close to home: “daycare near me”, “preschool in [neighborhood]”, “infant care [town]”. The build prepares for those searches with a location page for each center carrying its own address, hours and openings, a business name and address written exactly as on your Google Business Profile, and pages that open fast on a phone. A review from a parent carries more weight than anything you write about yourself, so the site links to your profile and asking for a review takes families two taps."),
        p(
          "The ongoing work on the map listing and local rankings is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("A daycare website that ChatGPT and Google AI Overviews can read"),
        p("Parents now ask assistants things like “which preschools near [neighborhood] have a place for a two-year-old” or “a bilingual daycare with extended hours in [town]”. ChatGPT and Google’s AI Overviews answer from what they can read on your pages. So ages, programs, hours, tuition from, license details, languages spoken and the address are written as plain text, kept identical to your Google profile, and marked up with schema.org ChildCare or Preschool data. Giuseppe’s practice site in Milan follows the same rules: he found me through ChatGPT, and his new pages already appear in its answers."),
        p(
          "Staying in those answers takes continuing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Daycare website templates, best daycare websites and custom design"),
        p("More people search for daycare website templates than for daycare website design, and for a new home daycare a template, or the builder your childcare software includes, is a sensible start. Lists of the best daycare websites and preschool website examples help too: look past the colors at what the good ones share — ages and hours at the top, real rooms, tuition stated, a tour form that works on a phone."),
        p("A template starts to cost more than it saves once you run programs with different schedules, keep a waitlist per age group, need a second language or want the parent login, the payment and the tour form to feel like one site. A custom design is built around those routines on WordPress or Next.js, with an editor your director can use, and the domain and content stay in your name. Rainbow letters and cartoon fonts look cheerful and read badly on a phone; the people deciding are adults weighing money and safety, so the design keeps one or two brand colors, clear type and room for photos of your spaces."),
        p(
          "For a home daycare that needs only a few pages, the ",
          link("small business website", "/small-business-website-design"),
          " page describes that lighter build.",
        ),

        h2("How much daycare website design costs"),
        p("Design is part of the build price, not a separate invoice."),
        li("A simple daycare or preschool website — home, programs, tuition and openings, staff, contact and a tour form: 700–1,400 €."),
        li("A full site with a page per program and per location, a waitlist form with online fee payment, policies, a parent-app link, two languages and local SEO setup: from 2,000 €."),
        p(
          "Hosting and the domain are paid to their providers, on your account. Every price I charge is on the ",
          link("pricing", "/pricing"),
          " page, and the steps of a build are on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Daycare website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a daycare website cost?", "From 700 to 1,400 € for a simple site, and from 2,000 € for a site with program and location pages, a waitlist with online payment, a second language and local SEO setup. Design is part of both prices. I give a fixed figure once I know your programs and locations."],
          ["Should a daycare website show tuition?", "A starting weekly or monthly rate per program, with the registration fee and what tuition covers, answers the first question most parents have. Your final rate can still depend on days per week, and the table says so."],
          ["Can parents join the waitlist and pay a registration fee online?", "Yes. The waitlist form records the age group, start date and days per week, and a card payment through Stripe can follow in the same step, with an automatic confirmation email."],
          ["Will the website work with brightwheel or our childcare software?", "Yes, side by side. The site links to your app’s parent login and explains how to install it; check-in, daily reports and billing stay in the software you already use."],
          ["Can we post photos of the children in our care?", "Only with a signed release from the parents. Even then, rooms, materials, outdoor space and children seen from behind make safer main photos, and no names appear next to faces."],
          ["Can our director update openings, menus and staff without a developer?", "Yes. Openings per age group, the monthly menu, staff profiles and tuition are edited in a simple admin panel, from a computer or a phone."],
          ["Is a daycare website template enough for a home daycare?", "Often, at the start. A custom design pays off when you run several programs or locations, keep a waitlist by age group, teach in two languages or want tours, payments and the parent login in one place."],
          ["Can a web designer in Poland work with a US daycare?", "Yes. I work in English over video calls and shared design links. My afternoon and evening in Warsaw overlap with the US morning and early afternoon, so calls fit around nap time. Invoices are in EUR or another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order daycare website design: what to send me"),
        p(
          "Send the name of your center or your current site, the ages and programs you run, your hours, tuition and fees, how tours and the waitlist work today, the childcare software you use and a few phone photos of a classroom and the play yard. My reply is a page list for your center and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
