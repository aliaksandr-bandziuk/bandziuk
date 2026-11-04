// Landing page fixture: SEO for massage therapists (EN), group «massage-therapy-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «massage therapists seo» ~70. No
// paired website page.
//
// CANNIBALISATION CHECK — this was the densest neighbourhood yet:
// /seo-for-beauty-salons, /med-spa-seo, /spa-website-design,
// /seo-for-physiotherapists, /seo-for-chiropractors, /gym-seo,
// /website-development-for-beauty-professionals.
// I read the two closest. /seo-for-beauty-salons already runs on «filled
// appointment slots, not a ranking report», «how clients actually search» and
// «a page for every treatment instead of one services list». /med-spa-seo
// covers treatment pages, provider E-E-A-T, prices and before-after consent.
// So modality pages and slot-filling CANNOT be this page's spine — that would
// duplicate the salon page almost line for line. They are kept to one list
// item, and the audiences are separated up front with links.
//
// What this page spends its length on, none of which exists elsewhere on the
// site and none of which the neighbours face:
//   1. the intent problem — the word «massage» mixes therapeutic demand with
//      enquiries a licensed practice does not want, so the site text and the
//      map-profile category have to do the filtering. Written clinically and
//      briefly, with no description of the unwanted category.
//   2. the claims line, which for massage sits BETWEEN the clinical pages
//      (where advertising rules bite hardest) and the beauty pages (where they
//      barely apply) — demand exists for «after surgery», «prenatal», «desk
//      workers», and the wording has to capture it without claiming treatment.
//   3. one pair of hands: a capacity ceiling like the nursery page, with the
//      opposite remedy — raise the rate and fill the gaps, and a therapist
//      with a full book should not buy a retainer.
//   4. rebooking: the business is repeat custom, so search buys the FIRST
//      visit and the site's job is to make the second one happen.
//   5. mobile versus studio as two different searches.
//
// No treatment-outcome claims anywhere on the page, and the page says why.
import { p, h2, h3, li, link, k } from "./pt";

export const massageTherapySeoEn = {
  lang: "en",
  group: "massage-therapy-seo",
  slug: "seo-for-massage-therapists",
  title: "SEO for Massage Therapists and Therapeutic Practices",
  heading: "SEO for a massage therapist: how to attract the clients you want and filter out the enquiries you do not",
  excerpt:
    "No other trade has this problem: the word that describes your work also attracts enquiries a licensed practice refuses. The site text and the map profile are what filter them, and the same work brings the clients worth rebooking. Audit from €250.",
  seo: {
    metaTitle: "Massage Therapy SEO — audit from €250",
    metaDescription:
      "SEO for massage therapists: filtering the wrong enquiries, modality searches, what may be claimed, one practitioner's capacity and rebooking. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Right clients, wrong ones filtered", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Modality and purpose searches", "Qualifications stated plainly", "Rates and booking on the page", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a massage practice: site, map profile, wording and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: modality and purpose pages, profile category, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a massage practice or studio", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a massage practice actually consists of",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Wording that filters the wrong enquiries", text: "Clinical framing, stated qualifications" },
        { _key: k("o"), iconName: "search", title: "Searches by modality and by purpose", text: "Sports, deep tissue, prenatal, desk work" },
        { _key: k("o"), iconName: "file-text", title: "What may be said and what may not", text: "Describing the session, not promising an outcome" },
        { _key: k("o"), iconName: "calendar", title: "Booking that shows real availability", text: "One practitioner, a fixed number of hours" },
        { _key: k("o"), iconName: "refresh-cw", title: "Making the second appointment easy", text: "The first visit is what search buys" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Sports massage near me, evenings, qualified»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which practices this page is for, and where the neighbouring trades are covered"),
        p("This page is for therapeutic and sports massage practised as its own discipline: a single practitioner or a small studio, by appointment, selling sessions to people who come back. The neighbouring trades on this site need different work, and separating them matters more here than anywhere else, because the search terms overlap while the buyers do not."),
        p(
          "For a salon selling appearance treatments alongside massage, the structure is on ",
          link("SEO for beauty salons", "/seo-for-beauty-salons"),
          ". For a clinic doing assessment and rehabilitation it is ",
          link("SEO for physiotherapists", "/seo-for-physiotherapists"),
          ", and for aesthetic medicine ",
          link("med spa SEO", "/med-spa-seo"),
          ". If your practice genuinely spans two of these, it needs two clearly separate sections rather than one page trying to be both.",
        ),

        h2("The problem no other trade has: the word attracts the wrong enquiries"),
        p("Massage is the one service where the plain description of the work also draws enquiries that a licensed practice will not take. Every therapist knows this, most have a story about it, and almost nobody addresses it on the website — which is where it could actually be solved, because the text of a page decides who writes to you."),
        p("The work is not defensive, it is specific. A practice that names its modalities in professional terms, states its qualifications and registration, says that it works by appointment from a listed address, publishes rates per session length, and chooses the right category in its map profile reads unambiguously to both a client and a search engine. The practices that get the worst of this are usually the ones whose sites say the least — a page with a photograph, the word relaxation, and a phone number is ambiguous by omission."),
        li("modality names in professional form, not atmospheric language;"),
        li("qualifications, training and any professional registration, with the body named;"),
        li("by appointment, from a stated address, with the hours you actually work;"),
        li("rates per session length, on the page, not on request;"),
        li("the correct primary category in the map profile, which is a surprisingly common misconfiguration;"),
        li("and, if you work mobile, say what mobile means in your practice — where, when and for whom."),

        h3("Mobile and studio are two different searches, and a mobile practice needs more precision, not less"),
        p("Visiting clients at home is a legitimate and well-paid part of many practices, and it is also where ambiguity does the most damage. A mobile practice therefore benefits from being more explicit than a studio one: the area covered, the hours, what equipment is brought, what space is needed, what the client should expect on arrival, and the same qualification and registration details. Written that way, it ranks for a separate set of searches and reads as a professional service rather than an unspecified call-out."),

        h2("What a massage practice may claim, which sits between the clinics and the salons"),
        p("Much of the valuable demand is about a purpose: people search for massage after surgery, during pregnancy, for desk-bound shoulders and necks, for marathon preparation and recovery. That demand is real and specific, and capturing it requires walking a line that neither the clinics nor the salons have to walk."),
        p("The clinics are governed by rules on advertising health services, which in several markets restrict what a practice may publish at all. The salons mostly sell appearance and are barely touched by those rules. Massage sits between them: it is not a medical treatment in most jurisdictions, and a page promising to treat a condition, relieve a diagnosis or replace medical care invites exactly the regulatory attention the clinics live under — and is also simply unprovable."),
        p("The version that works describes the session rather than the result. What happens during it, how long it lasts, what the therapist will ask beforehand, what clients commonly come for in their own words, who should speak to a doctor first, and what the practice does not do. This captures the search, because the search is phrased as a purpose rather than a promise, and it keeps the page defensible. Where the line falls exactly depends on your market and your professional body, and a borderline page is worth a question to them rather than to me."),

        h2("One pair of hands: the capacity ceiling and what it does to the work"),
        p("A solo therapist has perhaps twenty-five to thirty treatable hours in a week, and that number does not move no matter how well the site performs. So the goal of this work is not more enquiries. It is a fuller book at a better rate, with fewer gaps in awkward parts of the day and fewer of the appointments you take reluctantly."),
        p("That has two consequences I would rather state before invoicing. If your book is already full and you have a waiting list, there is nothing worth buying monthly, and the useful work is an audit plus the pages that let you raise your rate. And if your book is half empty at eleven on a Tuesday but full on Saturdays, the work is not general visibility — it is making the quiet hours findable and bookable, which is a much smaller and cheaper job."),

        h3("Rebooking: search buys the first appointment, the practice keeps the client"),
        p("The economics of this trade are repeat custom. A client who comes monthly for two years is worth thirty first visits, and no amount of search traffic substitutes for that. What search can do is buy the first appointment, and what the site can do is make the second one effortless: the same therapist shown by name, availability visible rather than requested, a course of sessions priced, and a reminder that does not require anybody to remember."),
        p(
          "The map profile and local search groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ", and if you want the state of your own site established before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: practitioner and appointment-based businesses whose visibility I have run",
      subtitle:
        "The first is a psychotherapist's site in Italy, where professional rules limit what may be published — the closest case to a practice that has to be careful about wording. The rest are appointment and local businesses: a consultant's site, a car service business, a renovation and investment firm, and an education agency taken from one country to ten.",
      picks: [
        "psychotherapist-website-milan",
        "consultant-website-design-retail-analytics",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "seo-case-study-education-agency",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your massage practice",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do you work?", options: ["Own studio", "Mobile, at clients' homes", "Inside a salon or gym", "Both studio and mobile"] },
        { _key: k("z"), question: "What do you want more of?", options: ["Sports and deep tissue", "Regular monthly clients", "Quiet weekday hours filled", "A higher rate"] },
        { _key: k("z"), question: "Are your rates on the site?", options: ["No", "«From» only", "Yes, per session length", "Only courses"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a client asks ChatGPT for a massage therapist (GEO, AEO)"),
        p("«Find me a qualified sports massage therapist near me with evening appointments» is a request people now make of an assistant rather than scrolling a map, and it suits this trade well, because the client is asking about a modality, a qualification and a time — all facts. The assistant answers from text it can read, so the same things decide whether a practice is named: modalities and qualifications written as text rather than implied, rates it can quote, hours and address that are current, and the same practice name and details across the site, the map profile and any directory you are listed in."),
        p(
          "Getting a site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the practice wrongly — a modality you no longer offer, old hours, a studio you have left — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for massage therapists: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a massage practice cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. For a solo therapist the audit plus one-off work is almost always the right size, because the capacity ceiling means there is a limit to what more visibility can be worth. A studio with several therapists is the case where ongoing work pays."],
          ["Can the website really filter out the enquiries I don't want?", "To a large degree, yes, and it is the part most practices leave undone. Professional modality names, stated qualifications and registration, a listed address, published rates per session length and the correct map-profile category together make a practice unambiguous. Sites that attract the worst of it are usually the vaguest ones."],
          ["Can I say that massage helps with back pain?", "Describe the session and what clients commonly come for rather than what it will do for them. A page that promises to treat or relieve a condition is unprovable and, in several markets, pulls a non-clinical practice into rules written for clinics. Where exactly the line sits depends on your market and your professional body — that question belongs to them, not to me."],
          ["Should rates be on the site?", "Yes, per session length. Clients compare before writing, a practice without figures is skipped, and a published rate is also part of what makes the practice read as professional. It gives assistants and search engines a number to quote instead of one a directory guessed."],
          ["My book is full. Should I do this?", "Not as a monthly retainer. The work worth buying is an audit and the pages that support a higher rate, or filling specific quiet hours. I would rather say that than take a fee for traffic you have no hours to serve."],
          ["Do I need a page for every type of massage I offer?", "For the ones you want more of, and for the purposes people search by — sports, deep tissue, prenatal, desk-related. Not for twelve named modalities most clients cannot distinguish. The pages that earn their place are the ones matching a search somebody actually makes."],
          ["How long before it brings clients?", "First movement after about a month and a half, growth on a three to six month horizon. The map profile usually responds fastest. After that the limit is your diary rather than the search results, which is why the plan should be about rate and gaps rather than volume."],
          ["Who writes the pages?", "I draft and you correct. What makes these pages work is the part only the therapist knows — what you ask before a first session, what you decline, what clients actually say when they book — and that is also what makes a page read as a practitioner's rather than a marketer's."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a massage practice: what to send me"),
        p("Send the site, say whether you work from a studio, mobile or both, and tell me which hours are hardest to fill. I reply within one working day with what is holding the site back, whether the wording is doing anything to filter enquiries, and what I would do first — and if your diary is already full, I will say that the useful work is the rate rather than the traffic."),
      ],
    },
  ],
};
