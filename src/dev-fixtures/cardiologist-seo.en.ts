// Landing page fixture: SEO for cardiologists (EN), group «cardiologist-seo».
// New page, create-landing.cjs. This is an SEO-type page, not a website page:
// the measured owner demand for this industry is in the SEO form.
//
// Why (07.11.2026). Measured in the 102-industry delta: «seo for
// cardiologists» 70 — the only one of the five medical industries whose
// demand sits on the SEO side rather than the website side.
// See claude/industry-delta-2026-11-07.md.
//
// Cannibalisation check — neighbours: /seo-for-doctors and /medical-seo
// (general medical SEO: service pages, doctor profiles, maps, reviews,
// multilingual sites) and /healthcare-seo. They own the generic medical
// playbook. NONE of it is repeated here.
//
// What carries this page: a cardiologist cannot win symptom queries, which
// health publishers own and which do not convert anyway, and does not need
// them — the money sits in the names of the tests a patient has just been
// sent for, with a price and a city. Then the waiting time, the map listing
// written as a list of tests, second opinions on existing results, and the
// author-and-review discipline that medical pages need.
//
// Owner's rules: no promises of positions or outcomes; audit €250, one-off
// €250–800, ongoing €800/month; first movement ~1.5 months, growth 3–6.
import { p, h2, h3, li, link, k } from "./pt";

export const cardiologistSeoEn = {
  lang: "en",
  group: "cardiologist-seo",
  slug: "seo-for-cardiologists",
  title: "SEO for cardiologists",
  heading:
    "SEO for cardiologists: winning the test and city queries instead of the symptom queries you cannot win",
  excerpt:
    "Search work for cardiology practices — SEO together with GEO and AEO: a page for every test a patient is sent for, prices and waiting times where the query actually is, a map listing written as a list of tests, and visibility in AI answers. Audit from €250.",
  seo: {
    metaTitle: "SEO for a Cardiology Practice and AI Visibility",
    metaDescription:
      "SEO for cardiologists: pages for echo, Holter and stress tests with prices, local search, second opinions, AI answers. Audit from €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Tests, prices, local search", "Audit from €250", "Answer within 1 working day"],
  heroPhonePoints: ["Echocardiogram — €90", "Holter, next day", "Second opinion online", "Book a test"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit of a cardiology practice site: test pages, prices, local listing, AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a cardiology practice: test pages, structure, markup, local listing", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a cardiology practice together with AI visibility", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I do",
      title: "What SEO for a cardiology practice covers",
      items: [
        { _key: k("o"), iconName: "activity", title: "A page for every test", text: "Echo, Holter, stress test, ABPM" },
        { _key: k("o"), iconName: "tag", title: "Prices and waiting times on the page", text: "Because that is the whole query" },
        { _key: k("o"), iconName: "map-pin", title: "A map listing written as tests", text: "Not one line saying «cardiology»" },
        { _key: k("o"), iconName: "file-search", title: "Second opinions on existing results", text: "A service with its own demand" },
        { _key: k("o"), iconName: "badge-check", title: "Author, credentials, review date", text: "What medical pages are judged on" },
        { _key: k("o"), iconName: "gauge", title: "Speed and booking that works", text: "The technical side that moves things" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a cardiologist cannot win the symptom queries, and does not need them"),
        p("Almost every cardiology site I am asked to look at is trying to rank for symptoms: chest pain, high blood pressure, palpitations, shortness of breath. Those queries belong to health publishers and large hospital systems with hundreds of reviewed articles, and a single practice will not take them. The harder truth is that it would not help much if it did: somebody typing «chest pain» at midnight is looking for reassurance, not for a private appointment three weeks out."),
        p("The queries that bring patients are not about the illness, they are about the thing the patient has just been told to get. A GP says get an echo. The patient walks out, opens their phone and types the name of the test, their city and the word price. That query is short, commercial, under-served and winnable — and it is the one almost no cardiology site is built around."),
        p(
          "If you want the general medical playbook — service pages, doctor profiles, reviews, aggregators — that is ",
          link("SEO for doctors", "/seo-for-doctors"),
          ". This page is only about what differs for cardiology.",
        ),

        h2("Pages for the tests patients are sent for: echo, Holter, stress test, ABPM"),
        p("Each test is its own page, because each one is its own query and its own decision. A page that bundles them into a list of services competes for nothing."),
        h3("An echocardiography page names the type of echo, who performs it and when the report comes"),
        p("The most searched test in cardiology and the easiest to lose on vagueness. The page names the type precisely — resting echo, stress echo, transoesophageal — says who performs it and on what equipment, how long it takes, whether a report is issued the same day, and what it costs."),
        h3("Holter and blood pressure monitoring pages sell on how soon a device is free"),
        p("These sell on logistics, not on medicine: how soon a device is free, whether you fit it the same day, how many hours, whether it can be posted, how the result comes back. A page that answers those five things outranks a page that explains what a Holter monitor is."),
        h3("Stress test and calcium score pages explain who the test suits and what follows"),
        p("Here the patient is often searching without a referral, usually on a worry about family history or a check-up, so the page says who the test is appropriate for, what it does not cover, and what the next step is after the result."),

        h2("Prices and waiting times on the page, because that is the whole query"),
        p("Cardiology is unusual in that the price and the wait are the question, not a detail at the end. A page with the test name and no number loses to a page that says «echocardiogram, €90, next free slot Thursday», even if the second practice is less distinguished. One maintained line per test, and one sentence on how fast a report is issued, is worth more than any amount of text about the practice's approach."),

        h2("Local search for a cardiology practice: the map listing as a list of tests"),
        p(
          "A cardiologist's map listing usually says one thing: cardiology. That is a category, not a search. The listing should carry each test as a named service, each with its price where the platform allows it, so that the practice can appear for «Holter near me» rather than only for the practice's own name. Opening hours that are accurate, photographs of the actual rooms and equipment, and replies to reviews do the rest. The full method is on the ",
          link("local SEO", "/services/local-seo-services"),
          " page.",
        ),

        h2("Second opinions and remote consultations on existing results"),
        p("A large share of cardiology search is people who already have results and do not understand them, or do not trust what they were told. They search for a second opinion, often from another country, and they are willing to pay for an appointment that consists of reading what they already have."),
        p("It is a service with its own demand, its own page and no local limit — and it needs the licensing question answered on the page: which countries you can consult patients in, and what you will and will not do without examining somebody in person."),

        h2("Writing cardiology pages that hold up: author, credentials, review date"),
        p("Medical pages are assessed on who stands behind them. Every test and condition page carries the cardiologist's name, their specialisation and registration, and the date the text was last reviewed — a real date that changes when the text does. No claim about treatment outcomes, no comparison that implies better survival, and no brand names of prescription medicines: across the EU, advertising prescription-only medicines to the public is prohibited, which quietly rules out a whole genre of «how we treat» copy."),
        p("That discipline is not a restriction here, it is the ranking strategy: the pages that survive in medical search are the ones that look like they were written by a named doctor rather than by a marketing department."),

        h2("The technical work that actually moves a cardiology site"),
        p("Three things, in order of how often they are broken: a booking flow that works on a phone with one hand, because that is where the patient is standing when they read the price; speed on a mobile connection, since test pages are usually opened outside the home; and structured data for the practice, the physicians and the services, so that the test names and prices can be read as data rather than as decoration."),

        h2("What SEO for a cardiologist costs"),
        p(
          "An audit is €250 and tells you which test pages are missing, where the prices and waits should sit, and what the map listing is losing. One-off work is €250–800 and covers building out the test pages and the structure. Ongoing work is €800 a month. The figures are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How long results take, and what I do not promise"),
        p("First movement usually shows at about a month and a half, growth over three to six months. I do not promise positions, and in cardiology I would distrust anyone who does: the symptom queries are not available at any budget, and the test queries move faster than anybody's forecast because they depend on how many practices in your city publish a price at all."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: multilingual platforms and work in regulated fields",
      subtitle:
        "A multilingual real estate platform whose search visibility was built without bought links, an education agency site that grew from one country to ten, a renovation and investment company site with a premium look, a multilingual student services site, and a consultant site built around a single expertise.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An audit of your cardiology practice site",
      subtitle: "I answer within one working day: what is missing, what I would do first, and what it costs.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get an audit quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you run?", options: ["A single cardiologist", "A cardiology practice with several doctors", "Cardiology inside a larger clinic", "A diagnostic centre"] },
        { _key: k("z"), question: "Are your prices published?", options: ["Yes, per test", "Only on request", "One general price", "We are deciding"] },
        { _key: k("z"), question: "Do you offer second opinions remotely?", options: ["Yes", "Occasionally", "No", "We would like to"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Getting a cardiology practice quoted by AI assistants (GEO, AEO)"),
        p("The question «where can I get a Holter fitted this week» is now asked of an assistant as often as of a search box, and the assistant answers from text it can read. A practice whose tests are named only inside a photograph of a price list, whose waiting time is known only by phone and whose doctors' registrations appear nowhere in text is absent from that answer — not ranked low, absent."),
        p(
          "What makes a practice quotable is the same thing that makes it useful: every test named in text with its price, the wait in a maintained sentence, each physician with their specialisation and registration, the languages you consult in as data. The work itself is ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ", and if you only want to know where you stand today, that is an ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for cardiologists: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a cardiologist cost?", "An audit is €250, one-off work €250–800, ongoing work €800 a month. The audit is the sensible first step: it says which test pages are missing, where prices and waiting times belong and what the map listing is losing."],
          ["Why should we not target symptom queries?", "Because health publishers and hospital systems own them and a single practice will not take them — and because that traffic converts badly. Somebody searching «chest pain» wants reassurance; somebody searching «echocardiogram price Warsaw» wants an appointment."],
          ["Do we really have to publish prices?", "In cardiology the price and the wait are the query itself. A test page without a number loses to one that has it, even when the other practice is less distinguished. One maintained line per test is enough."],
          ["Which pages should we build first?", "One page per test, starting with the ones patients are sent for: echocardiography, Holter and ambulatory blood pressure monitoring, stress testing. Each with price, duration, who performs it and how fast the report comes."],
          ["What should the map listing say?", "Each test as a named service rather than the single word «cardiology», with prices where the platform allows, accurate hours, photographs of the real rooms, and replies to reviews. That is what makes «Holter near me» findable."],
          ["Can the site describe how you treat patients?", "It can describe conditions, tests and approaches, but not outcomes, and not by brand name: advertising prescription-only medicines to the public is prohibited across the EU. Pages also carry the doctor's name, registration and a real review date, because that is what medical search is assessed on."],
          ["Is a second-opinion service worth a page?", "Often it is the most profitable page on a cardiology site: the patient already has results, there is no local limit on who can book, and the page has to state which countries you can consult in and what you will not do remotely."],
          ["How long before we see results?", "First movement at about a month and a half, growth over three to six months. I do not promise positions, and in cardiology that promise would be worth even less than usual."],
          ["Do you work with medical practices?", "Yes, and the method accounts for it: wording without outcome claims, a review step before publishing, author and review data on every clinical page, and careful handling of patient data in booking forms."],
          ["What do you need from us to start?", "The site address, your price list as it stands, the list of tests you actually perform and on what equipment, your waiting times, the doctors' names and registrations, and the languages you consult in."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Starting search work with a cardiology practice: what to send me"),
        p("Send the site address, the tests you perform and on what equipment, your current prices and waiting times, whether you offer second opinions remotely and in which countries, the doctors' names and registrations, and the languages you consult in. I answer within one working day with what is missing and what I would do first."),
      ],
    },
  ],
};
