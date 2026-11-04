// Landing page fixture: SEO for driving schools (EN), group «driving-school-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «driving school seo» ~40. No paired
// website page. Only neighbour is /language-school-website — different trade,
// no conflict.
//
// SERP (checked 04.11.2026): SEOptimer, Rankixa, Artemis Marketing, Causal
// Funnel, OutreachXXL, InstructorSites, Extra Strength, SERPs Growth, SERP
// Squad. Uniformly agencies selling to driving schools. Buyer intent, no trap.
//
// SELF-REPETITION CHECK. «A page per practitioner» is the spine of
// /seo-for-tattoo-artists, so instructor pages are kept to a short passage
// here. Capacity ceilings and lead-platform economics are already spines
// elsewhere and are not reused.
//
// The spine is four things specific to this trade:
//   1. automatic versus manual — the sharpest segmentation in the industry and
//      growing with electric cars; a school with automatic cars that does not
//      say so loses every automatic search outright;
//   2. test-centre knowledge — routes, the junctions that catch people, local
//      quirks. Enormous informational demand that ONLY a local school can
//      write, and almost none do;
//   3. test waiting times, which in many markets run to months and are the
//      most urgent question a learner has;
//   4. intensive courses versus weekly lessons — a deadline-driven buyer and a
//      leisurely one, different price and different page.
// Plus a fresh second audience nobody writes for: INSTRUCTORS looking for a
// school to join. A driving school recruits as hard as it sells.
import { p, h2, h3, li, link, k } from "./pt";

export const drivingSchoolSeoEn = {
  lang: "en",
  group: "driving-school-seo",
  slug: "seo-for-driving-schools",
  title: "SEO for Driving Schools and Instructors",
  heading: "SEO for a driving school: how to be found by learners searching for a gearbox, a test centre and a date",
  excerpt:
    "Learners do not search for a driving school. They search for automatic or manual, for a test centre, and for how soon they can take the test. A school that answers those three in text wins the enrolment. Audit from €250.",
  seo: {
    metaTitle: "Driving School SEO — audit from €250",
    metaDescription:
      "SEO for driving schools: automatic versus manual searches, test-centre content, test waiting times, intensive courses and hiring instructors. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Automatic and manual separated", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Automatic lessons found properly", "Test centre pages only you can write", "Current test waiting times", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a driving school: site, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: gearbox and course pages, test-centre content, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a driving school or instructor network", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a driving school actually consists of",
      items: [
        { _key: k("o"), iconName: "settings", title: "Automatic and manual as separate pages", text: "The sharpest split in the industry" },
        { _key: k("o"), iconName: "map-pin", title: "A page per test centre you teach at", text: "Knowledge only a local school has" },
        { _key: k("o"), iconName: "calendar", title: "Current test waiting times", text: "The most urgent question a learner has" },
        { _key: k("o"), iconName: "zap", title: "Intensive courses as their own offer", text: "A deadline is a different purchase" },
        { _key: k("o"), iconName: "credit-card", title: "Hourly and block prices on the page", text: "Learners compare before calling" },
        { _key: k("o"), iconName: "users", title: "A page for instructors you want to hire", text: "Your second audience, and nobody writes for it" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Automatic or manual: the search that decides the enrolment before anything else"),
        p("Nobody searches for a driving school in the abstract. The first thing a learner settles is the gearbox, and it is now the sharpest division in the industry: automatic-only licences have gone from a niche to a large and growing share, pushed along by electric cars, and a learner who has decided on automatic will not consider a school that does not say it teaches in one."),
        p("Yet a great many school websites mention it nowhere, or bury it in a sentence on a general lessons page. If you have automatic cars, that is a page: how many, which instructors drive them, what the licence restriction means in practice, what it costs, and how the waiting time compares with manual. If you only teach manual, say so plainly, because the enquiries you lose that way are enquiries you could not serve anyway."),
        li("a page for automatic lessons and a page for manual, not one page mentioning both;"),
        li("what the automatic-only licence does and does not allow, in plain terms;"),
        li("how many cars of each type you run, since availability is the real constraint;"),
        li("prices for each, because they usually differ;"),
        li("and the waiting time for each, which usually differs more."),

        h2("Test-centre pages: the content only a local driving school can write"),
        p("There is a large, permanent search demand around test centres — the routes used, the junctions that catch people out, where to park beforehand, which centre has the shorter wait, what the examiners there are strict about. Learners search this obsessively in the weeks before a test, and it is answered today mostly by forums and national sites that have never been to the place."),
        p("A school that teaches at a centre every week knows all of it, and that knowledge is the one asset a national competitor cannot copy. A page per test centre, written from experience, will rank because nothing better exists for that query, and it reaches the learner at precisely the point they are deciding whether to buy a few more lessons before the test."),
        p("One caution: write what helps a learner drive well at that centre, not a claimed list of official routes. Routes change, publishing a supposed definitive list ages badly, and the useful version — what the roads there demand of a driver — is both more honest and more durable."),

        h3("Test waiting times, which are the most urgent thing a learner wants to know"),
        p("In many markets test slots are booked out for months, and the wait is the single most pressing question a learner has. A school that publishes the current wait at the centres it uses, explains how it books tests and says what it can and cannot do to bring a date forward answers something nobody else answers, and it builds trust in the process — this is also the question most often answered dishonestly in this trade, so being plain about it stands out."),

        h2("Intensive courses and weekly lessons are two different purchases"),
        p("A learner taking an hour a week for eight months and a learner who needs a licence in three weeks for a job are not the same customer. The second has a deadline, a reason, usually a higher budget, and a completely different set of questions: how many hours a day, whether a test is included, what happens if they are not ready, what the refund position is."),
        p("Intensive courses therefore deserve their own page with the price, the structure and the honest caveats, and they tend to be the most profitable thing a school sells. The weekly-lessons page can be calmer and should carry the things that worry a first-time learner instead: who the instructor will be, what happens in the first lesson, whether the car is dual-controlled, and how progress is tracked."),

        h3("Instructors are your second audience, and almost no school writes for them"),
        p("Driving schools are usually limited by instructors rather than by learners. Finding them is a recruitment problem, and it is also a search problem, because instructors looking for a school to join or franchise with search for exactly that — terms about joining, franchise fees, car provision, how much of the lesson fee they keep, how pupils are allocated."),
        p("A page answering those questions is rarely found on a school's website, which means the search is almost uncontested, and it addresses the constraint that actually caps the business. If you are turning learners away because you have no capacity, this is the page worth writing before any of the others."),
        p(
          "The map profile and local search groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ", and if you want the state of your own site established before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),

        h3("Prices, instructors and the phone in the learner's hand"),
        p("Three shorter points. Publish hourly and block prices: learners compare several schools in one sitting and a school without figures is skipped. Keep individual instructor information short but real — a learner wants to know who will be in the car, and a named instructor with their own gearbox and area beats a stock photograph of a smiling person with a clipboard."),
        p("And remember there are two readers on most enquiries: the learner, who is young and on a phone, and whoever is paying, who is often a parent reading the same page with different questions about safety, cost and whether the money is refundable. A page that answers both converts a conversation that is happening at a kitchen table rather than on your website."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: course and local service businesses whose visibility I have run",
      subtitle:
        "The first two are education projects where the buyer compares providers and prices before enquiring — the closest case to a driving school. Then local service businesses: a car service business, a landing page with editable SEO, and a renovation and investment firm.",
      picks: [
        "seo-case-study-education-agency",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your driving school",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "School name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What limits the business now?", options: ["Not enough learners", "Not enough instructors", "Test waiting times", "Price competition"] },
        { _key: k("z"), question: "Do you teach in automatics?", options: ["Yes, several cars", "One car", "No, manual only", "Planning to"] },
        { _key: k("z"), question: "Are prices on the site?", options: ["No", "Hourly only", "Hourly and blocks", "Only on request"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a learner asks ChatGPT for a driving school (GEO, AEO)"),
        p("«Which driving school near me teaches in an automatic, how much is a block of ten lessons, and how long is the wait for a test» is now one question put to an assistant rather than four searches, and this trade suits it well because every part of the answer is a fact a school has to have published. The assistant answers from text it can read, so the same things decide whether a school is named: the gearbox and course types written out, prices it can quote, the test centres you use, and the same school name, address and phone number across the site, the profile and the directories."),
        p(
          "Getting a site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the school wrongly — prices you changed, a centre you no longer use, an instructor who left — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for driving schools: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a driving school cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many test centres and areas you cover, whether both gearboxes need their own pages, and whether instructor recruitment is part of the job."],
          ["Why does automatic or manual matter so much?", "Because it is the first thing a learner decides and a filter they will not cross. Automatic-only licences are a large and growing share, and a school with automatic cars that does not say so on a page of its own is invisible to every one of those searches."],
          ["Are test-centre pages really worth writing?", "They are the best content this trade has, because you are the only one who can write them. A page about what the roads around a centre demand of a driver will outrank a national site that has never been there, and it reaches the learner exactly when they are considering more lessons before the test."],
          ["Should I publish official test routes?", "I would not. They change, a supposed definitive list ages badly, and it teaches the wrong thing. Write what the roads there actually demand — the junctions that catch people, the speed changes, where learners typically make mistakes. More useful and it does not go out of date."],
          ["Should prices be on the site?", "Hourly and block prices, yes. Learners compare four or five schools in one sitting, and one without figures is skipped before the phone is picked up. It also gives assistants a number to quote instead of one a directory guessed."],
          ["We can't find instructors. Can SEO help with that?", "Yes, and it is the page I would write first if instructors are your constraint. Instructors search for schools to join — about franchise terms, car provision, what share of the lesson fee they keep, how pupils are allocated — and almost no school has a page answering it. It is nearly uncontested and it addresses the thing actually capping the business."],
          ["How long before enrolments increase?", "First movement after about a month and a half, growth on a three to six month horizon. The map profile usually responds first. Test-centre pages take longer but keep working for years, because the searches behind them never stop."],
          ["Who writes the test-centre pages?", "I draft them from what you tell me and an instructor corrects them. The value is entirely in the specifics — which roundabout, which hill start, what the examiners there notice — and that cannot be researched from outside the car."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a driving school: what to send me"),
        p("Send the site, say which test centres you teach at, whether you run automatics, and whether your constraint right now is learners or instructors. I reply within one working day with what is holding the site back, which pages are missing, and what I would do first — and if the honest answer is that you need instructors rather than enquiries, I will say which page to write for that instead."),
      ],
    },
  ],
};
