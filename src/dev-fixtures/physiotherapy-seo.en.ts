// Landing page fixture: SEO for physiotherapists (EN), group «physiotherapy-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages
// (/seo-for-chiropractors, /medical-seo, /gym-seo).
//
// Why it exists (04.11.2026). Measured: «seo for physiotherapists» 400, and
// the live top ten is the one case in this batch that is actually made of
// service providers rather than DIY guides: practicepromotions.net,
// arcanemarketing.com, patientpartners.co, clinicalmarketer.com, jesscreatives
// — agencies selling SEO to physical therapy practices — plus practice-software
// vendors publishing content (WebPT-style: pteverywhere, raintreeinc, getweave,
// medbridge). Owner intent AND service format, which four other candidates in
// the same batch failed.
//
// EN only, measured. Polish already has both pages —
// /pl/oferty/pozycjonowanie-strony-gabinetu-fizjoterapii and
// strona-internetowa-dla-fizjoterapeuty. Russian shows 0 for every physio form.
//
// Terminology: the head query says «physiotherapist» (UK, Ireland, Australia,
// Poland) while most of the ranking US pages say «physical therapy». Both are
// used on the page on purpose — the professions are the same work under two
// names, and a page that uses only one loses half the language.
//
// Separation from the neighbours: /seo-for-chiropractors is a different
// profession with a different buyer argument; /seo-for-therapists is mental
// health and must not be blurred into this; /medical-seo is the general
// practice page. This page links to them instead of repeating them.
//
// Mis-assignment noticed while building this (not fixed here): «physical
// therapy web design» 180 sits on /website-for-psychologists-therapists in the
// core. Physical therapy is not psychotherapy — that row needs reassigning, and
// there is no EN physiotherapy WEBSITE page yet.
import { p, h2, h3, li, link, k } from "./pt";

export const physiotherapySeoEn = {
  lang: "en",
  group: "physiotherapy-seo",
  slug: "seo-for-physiotherapists",
  title: "SEO for Physiotherapists and Physical Therapy Clinics",
  heading: "SEO for physiotherapists: how a clinic gets found by the patient with that specific injury",
  excerpt:
    "Patients do not search for «physiotherapy». They search for the knee, the shoulder, the post-op week six, and the district they live in. The work is a page per condition and area, a profile that matches, and claims you can stand behind. Audit from €250.",
  seo: {
    metaTitle: "Physiotherapy SEO — audit from €250",
    metaDescription:
      "SEO for physiotherapy and physical therapy clinics: a page per condition and area, local profile, reviews, and AI answers. Audit €250, ongoing €800/month.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per condition and area", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Sciatica physio in your district", "Post-op knee rehab, week six", "Direct access, no referral", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a physiotherapy clinic: site, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: condition pages, local profile, structured data, reviews", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a physiotherapy clinic", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a physiotherapy clinic actually consists of",
      items: [
        { _key: k("o"), iconName: "activity", title: "A page per condition you treat", text: "Sciatica, frozen shoulder, ACL rehab, plantar fasciitis" },
        { _key: k("o"), iconName: "map-pin", title: "Local search for each location", text: "Profile, districts, parking, opening hours" },
        { _key: k("o"), iconName: "users", title: "Pages for how patients arrive", text: "Self-referral, insurer, post-op, sports club" },
        { _key: k("o"), iconName: "message-square", title: "Reviews and outcomes written carefully", text: "What may be claimed, and what may not" },
        { _key: k("o"), iconName: "calendar", title: "Booking that survives a phone screen", text: "The slot, not a contact form" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Find me a physio for post-op knee nearby»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why physiotherapy websites lose in search to software vendors"),
        p("Search for almost any physiotherapy question and the first page is not clinics. It is practice-management software companies and billing vendors, who publish long guides about conditions and rehabilitation because content is how they sell subscriptions to clinics. They have budgets a four-therapist practice does not, and they are not going anywhere."),
        p("That sounds discouraging and is actually the opposite. Those vendors cannot treat anybody. They rank for «what is physical therapy» and «exercises for rotator cuff», which bring readers from everywhere and patients from nowhere. The queries that produce an appointment have a place attached — a condition and a district, a condition and a city — and on those the vendors do not compete at all."),

        h2("A page per condition and area is what moves physiotherapy SEO"),
        p("Nobody searches for «physiotherapy». They search for what hurts and where they live: sciatica that has lasted three weeks, a shoulder that will not lift above the head, week six after a knee replacement, a running injury before a race. Each of those is a different page, and each of those pages is the one a search engine can match to a person."),
        p("The structure that follows is a page per condition you actually treat, each one naming the condition in the heading, describing how the first session goes, how many sessions this usually takes, what it costs, and which of your therapists handles it. If you have more than one location, each location gets its own page with its own address, team and opening hours rather than one page listing both."),
        li("name the condition in the heading, in the words patients use, not only the clinical term;"),
        li("say what the first appointment involves — the fear of the first visit stops more bookings than price does;"),
        li("give a typical number of sessions and a price per session;"),
        li("name the therapist who handles that condition and their qualification;"),
        li("and skip conditions you would rather refer out — a page you do not want to fulfil is worse than no page."),

        h3("Terminology: physiotherapy, physical therapy, and why the page needs both"),
        p("The same profession is called physiotherapy in the UK, Ireland, Australia and most of Europe, and physical therapy in the United States. Patients search in the word their country uses, and clinics serving mixed populations — an expat district, a border city, a practice taking international patients — get searched in both. A page that only uses one of the two is invisible to half of them, so both appear here and both should appear on a real clinic's pages, in headings rather than hidden in body text."),

        h2("Local search for a physiotherapy practice: profile, districts and reviews"),
        p("Physiotherapy is bought within travelling distance of a painful body, which makes the Google Business Profile as important as the website: the categories, the services list, the hours, photos of the actual practice, and reviews with replies. The practice name, address and phone number have to match exactly across the site, the profile and every health directory that lists the clinic, because mismatched listings are the most common reason a clinic with good reviews still does not appear on the map."),
        p(
          "The detail of that work is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ". Neighbouring professions have their own pages: ",
          link("SEO for chiropractors", "/seo-for-chiropractors"),
          " and the broader ",
          link("medical SEO page", "/medical-seo"),
          " for general practices and clinics.",
        ),

        h3("What a physiotherapy website may and may not claim"),
        p("Health advertising is regulated, and the rules differ by country — in Poland and much of the EU a clinic may inform but not advertise in the way a shop may, and patient testimonials are restricted or forbidden outright depending on the jurisdiction. This matters for SEO because the usual conversion advice — before-and-after photos, outcome promises, patient stories — can be the exact thing that is not allowed. The safe and effective version is describing the method, the qualification, the equipment and the process precisely, which happens also to be what a search engine can read and what a cautious patient is actually looking for. I write to the rules of the country the clinic operates in and flag anything I am unsure about rather than guessing."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: practices and services where the visit is booked after the website is checked",
      subtitle:
        "What these have in common with a physiotherapy clinic: a local or expert service, a visitor who verifies before contacting, and growth that came from structure and content rather than bought links. A clinic site aimed at patients from another country, an education agency taken from one country to ten, a retail-analytics consultant, a personal site built and optimised from scratch, and a multilingual site for student services.",
      picks: [
        "seo-case-study-education-agency",
        "consultant-website-design-retail-analytics",
        "develop-and-optimize-a-personal-website-with-seo",
        "proscore-agency-website-development",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your physiotherapy clinic",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Clinic name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice is it?", options: ["Solo physiotherapist", "A clinic with several therapists", "Sports rehabilitation", "Post-operative rehabilitation"] },
        { _key: k("z"), question: "How many locations?", options: ["One", "Two or three", "More than three", "Home visits only"] },
        { _key: k("z"), question: "How do patients arrive now?", options: ["Referrals from doctors", "Word of mouth", "Insurer or public funding", "They find us online"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a patient asks ChatGPT for a physiotherapist (GEO, AEO)"),
        p("«My knee replacement was six weeks ago and I need rehab near me» is a question people now put to an assistant before they open a search engine, and in healthcare they are especially likely to, because they want to be told what kind of specialist they need before they choose one. The assistant answers from text it can read and from sources that agree with each other, so three things decide whether a clinic is named: the conditions and methods written as text rather than set inside a designed image, the practical facts it can quote — location, hours, whether a referral is needed, what a session costs — and the same clinic name, address and service wording on the site, the profile and every directory listing."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants are describing the clinic wrongly — an old address, a therapist who left, a service dropped years ago — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for physiotherapy clinics: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a physiotherapy clinic cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many conditions you want pages for, how many locations you have, and whether the site can be edited without going through a vendor."],
          ["How long before new patients arrive from search?", "First movement after about a month and a half, steady growth on a three to six month horizon. Condition pages tend to move before the clinic's main page does, because they are specific and the competition on them is other clinics rather than software companies."],
          ["Is this different from SEO for a chiropractor or a massage practice?", "The local work is the same; the content is not. Physiotherapy buyers often arrive through a referral, an insurer or a surgery, which means pages about pathways rather than only about treatments. Chiropractic has its own page here, and so does mental health — those are separate professions with separate buyers and should not share a page."],
          ["We take insurance or public funding. Does that change anything?", "It changes what the pages have to answer. Whether a referral is needed, whether you are in network, what the patient pays out of pocket and what the waiting time is are among the most-read lines on any clinic site, and leaving them out sends people to call a competitor who stated them."],
          ["Can we publish patient testimonials and before-and-after photos?", "It depends on the country, and in several it is restricted or not allowed for health services. I write to the rules of the jurisdiction the clinic operates in. Where testimonials are out, process, qualification and method descriptions do the same job for the reader and are read just as well by a search engine."],
          ["Our site is from a practice-software vendor. Can you work with it?", "Usually yes, if pages can be added and headings edited. If the structure is locked and changes go through a support ticket, SEO work on it is paying rent, and a site you own is cheaper within the year. I say which case it is before quoting."],
          ["Can you guarantee a position?", "No, and nobody honest can — the ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the clinical parts?", "I write and a therapist corrects. Text about conditions and rehabilitation without a practitioner's review is how a clinic site ends up with something confidently wrong on it, and in healthcare that costs more than a ranking."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a physiotherapy clinic: what to send me"),
        p("Send the website, name the three or four conditions you treat most and would like more of, say how many locations you have and how patients reach you today — referral, insurer or search. I reply within one working day with what is holding the site back and what I would do first, including which of the conditions is not worth a page because nobody in your area searches for it."),
      ],
    },
  ],
};
