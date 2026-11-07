// Landing page fixture: psychiatrist website design (EN), group
// «psychiatrist-website». New page, create-landing.cjs.
//
// Why (07.11.2026). Measured in the 102-industry delta: «web design for
// psychiatrists» 30, «psychiatrist website design» 30, owner forms, 110 for
// the industry. The bare «psychiatrist website» 260 is NOT targeted — that
// form belongs to patients looking for a doctor.
// See claude/industry-delta-2026-11-07.md.
//
// Cannibalisation check — the closest neighbour on the whole site is
// /website-for-psychologists-therapists, which already owns: calm design for
// anxious visitors, the first screen, the path to a first session, privacy and
// HIPAA forms, templates vs custom, about/specialties/fees/FAQ pages, online
// therapy and time zones, migration with the blog, CMS guard rails, price and
// ordering. NONE of that is repeated here.
//
// What only a psychiatrist's site has, and what this page is therefore built
// on: prescriptions and the rule against advertising prescription medicines;
// two audiences, because referring GPs and therapists read the site too;
// intake criteria and a waiting list, since most practices have closed books;
// an emergency block, because some visitors are in crisis and the site must
// point them somewhere real; licensing limits on telepsychiatry across
// borders; what the first appointment involves and what to bring.
//
// Owner's rules: no medical promises, no outcome claims; design included in
// the build price; every page covers AI search; never say there are no
// clients from the visitor's industry.
import { p, h2, li, link, k } from "./pt";

export const psychiatristWebsiteEn = {
  lang: "en",
  group: "psychiatrist-website",
  slug: "psychiatrist-website-design",
  title: "Psychiatrist website design",
  heading: "Psychiatrist website design: a site for patients, referrers and a closed appointment book",
  excerpt:
    "Websites for psychiatric practices: intake criteria and the current wait stated plainly, a page referring doctors can use, an emergency block that points somewhere real, and wording that stays within the rules on prescription medicines. Design included, from €2,000.",
  seo: {
    metaTitle: "Psychiatrist Website Design and Development from €2,000",
    metaDescription:
      "Websites for psychiatric practices: intake criteria, waiting list, a page for referrers, emergency signposting, careful wording. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Psychiatric practices", "From €2,000", "Answer within 1 working day"],
  heroPhonePoints: ["Who I see", "Current wait: 3 weeks", "In an emergency", "Request an appointment"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Website for a psychiatric practice: intake, referrers, emergency block, design included", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one assessment or service", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of a psychiatric practice website with rankings kept", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I build",
      title: "What a psychiatrist website build covers",
      items: [
        { _key: k("o"), iconName: "list-checks", title: "Intake criteria, stated plainly", text: "Who you see and who you do not" },
        { _key: k("o"), iconName: "calendar", title: "The current wait, kept current", text: "One editable line, not a phone call" },
        { _key: k("o"), iconName: "users", title: "A page for referring colleagues", text: "What to send and how to reach you" },
        { _key: k("o"), iconName: "shield-check", title: "An emergency block", text: "Where to go when it cannot wait" },
        { _key: k("o"), iconName: "file-lock", title: "Wording within the rules", text: "Conditions and methods, not drug brands" },
        { _key: k("o"), iconName: "globe", title: "Where you may treat remotely", text: "Licensing stated, not implied" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a psychiatrist's website has a different job from a therapist's"),
        p("I design and build websites for psychiatric practices, and design comes with the build rather than on a separate invoice. The reason this is its own page rather than a line on the therapy one: a psychiatrist prescribes, usually has a closed or nearly closed appointment book, and is read by colleagues as well as patients. Those three facts change almost every decision on the site."),
        p(
          "If you are a psychologist or psychotherapist, the page you want is ",
          link("therapist website design", "/website-for-psychologists-therapists"),
          " — it covers the calm first screen, the path to a first session and privacy in forms, and none of that is repeated here.",
        ),

        h2("Intake criteria and the waiting list belong on the first screen"),
        p("Most psychiatric practices cannot take everyone, and the site that hides this spends the practice's time rather than saving it. Every unsuitable enquiry costs a reply, and every person who waits three weeks for an answer that was never going to be yes has had a bad experience with your name on it."),
        li("who you see: ages, conditions, whether you take assessments only or ongoing treatment, whether you work with a therapist alongside;"),
        li("who you do not see, said kindly and specifically, with a sentence about where those people should look instead;"),
        li("the current wait as one editable line that a receptionist can change in ten seconds — the single most useful sentence on the whole site;"),
        li("whether the book is open at all today, because that is the question behind the visit."),

        h2("A page written for referring doctors, not for patients"),
        p("A psychiatric practice gets a large share of its patients through other professionals: GPs, therapists, paediatricians, occupational health. They need different things from the same site and they look for them quickly between appointments — what you accept, what to put in a referral letter, how urgent cases are handled, a direct line that is not the general phone number, and whether you write back to the referrer afterwards."),
        p("One page answers all of it, and it is usually the cheapest page on the site to build and the most profitable to have."),

        h2("What the site may say about medication"),
        p("Prescribing is what distinguishes the practice, and it is also the area where the website has to be careful. Across the EU, advertising prescription-only medicines to the public is prohibited, which in practice means the site describes conditions, assessment and treatment approaches without naming brands or promising what a medicine will do."),
        p("That constraint is easier to live with than it sounds, and it usually improves the page: patients searching are not looking for a drug name, they are looking for someone who will take their situation seriously and explain what the first appointment involves."),

        h2("An emergency block that points somewhere real"),
        p("Some people reach a psychiatry website in crisis, at night, through a search that had nothing to do with your practice. The site owes them a short, calm, permanently visible block that says what to do when it cannot wait and gives the local emergency number and crisis line, with a plain statement that the practice does not provide urgent care out of hours. It takes one component and it belongs in the header area rather than buried in a footer."),

        h2("Telepsychiatry and where you are actually allowed to treat"),
        p("Remote appointments made psychiatric practices international overnight, and licensing did not follow. A patient in another country can book a video call they cannot legally have, and the practice finds out afterwards. The fix is on the website: state which jurisdictions you are licensed in, which patients you can see remotely, and make the booking form ask the question before the slot is taken rather than after."),

        h2("The first appointment, described before anybody asks"),
        p("Psychiatric first appointments are longer, more expensive and more intimidating than most medical visits, and the fear of the unknown is what stops the booking. A page that says how long it lasts, what happens in it, what to bring, whether a family member can come, what it costs and what happens after converts better than any reassurance about the practice's philosophy."),

        h2("What a psychiatrist website costs and how long it takes"),
        p(
          "A practice website starts at €2,000 with design included. A landing page for one assessment or service is €700–1,400. A redesign that keeps rankings starts at €1,000. A landing page takes two to three weeks, a full site four to six. The number of clinicians with their own pages, the number of languages and how quickly clinical wording gets approved move both the price and the schedule. The figures are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: practices where trust and the first contact decide everything",
      subtitle:
        "A psychotherapist's bilingual practice site in Milan, a consultant site built around a single expertise, a multilingual real estate platform with a catalogue and filters, an education agency site that grew from one country to ten, and a renovation company site with a premium look.",
      picks: [
        "psychotherapist-website-milan",
        "consultant-website-design-retail-analytics",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your psychiatric practice website",
      subtitle: "I answer within one working day: what I would build, in which languages, and what it costs.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice?", options: ["A single psychiatrist", "A practice with several clinicians", "Psychiatry inside a larger clinic", "Something else"] },
        { _key: k("z"), question: "Is your appointment book open?", options: ["Open", "Waiting list", "Closed, assessments only", "It varies"] },
        { _key: k("z"), question: "Do you take referrals from colleagues?", options: ["Yes, a large share", "Occasionally", "No", "We would like to"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("A psychiatric practice website that AI assistants can read (GEO, AEO)"),
        p("Patients and referrers now ask assistants first: a psychiatrist who takes adolescents, one who speaks a particular language, one whose book is open. An assistant answers from text it can read, and a practice whose criteria live in a paragraph of prose, whose wait is only known by phone and whose fees sit in a PDF does not appear in that answer at all."),
        p(
          "What makes a practice quotable is the same thing that makes it easy for a human: criteria as a list, ages and languages as text, fees on the page, the wait in a sentence that is kept current. Bringing an existing site to that state is ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Psychiatrist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a psychiatrist website cost?", "From €2,000 with design included, €700–1,400 for a landing page covering one assessment or service, from €1,000 for a redesign that keeps rankings. The number of clinicians, the number of languages and the speed of clinical approval move the figure."],
          ["How is this different from a therapist website?", "Three things only a psychiatric practice has: prescribing, which limits what the site may say; a closed or nearly closed book, which makes intake criteria and the current wait the most important text on the page; and referring colleagues, who need their own page. The therapist page covers the rest."],
          ["Should we publish our waiting time?", "Yes, as one line a receptionist can edit in seconds. It is the single most useful sentence on a psychiatric practice site: it stops unsuitable enquiries, sets expectations and saves your team the same phone call many times a day."],
          ["Can the site mention the medicines we prescribe?", "It can describe conditions, assessment and treatment approaches, but across the EU advertising prescription-only medicines to the public is prohibited, so brand names and promises about what a medicine will do stay off the page."],
          ["What about people who arrive in crisis?", "The site carries a short, calm block, visible on every page, that says what to do when it cannot wait, gives the local emergency and crisis numbers, and states plainly that the practice does not provide urgent care out of hours."],
          ["We see patients abroad by video. Does that change the site?", "Yes. The site states which jurisdictions you are licensed in and which patients you can see remotely, and the booking form asks before the slot is taken rather than after."],
          ["Do you work with medical practices?", "Yes, and the method accounts for it: wording that avoids promises, a review step before publishing, and forms that handle health data carefully rather than as an afterthought."],
          ["Will patients be able to book online?", "Where it suits the practice. Many psychiatric practices prefer a request form that your team triages against intake criteria rather than an open calendar, and the site is built for whichever of the two you actually want."],
          ["Can you redesign our site without losing search traffic?", "Yes. Every existing address is mapped, every changed one redirected, and pages that already bring patients keep their text instead of being rewritten for a new look."],
          ["Who owns the site?", "You do: the code, the domain, the hosting account, the content and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ordering a psychiatric practice website: what to send me"),
        p("Tell me how many clinicians need pages, whether your book is open or has a waiting list, what your intake criteria are, whether colleagues refer to you, which languages your patients speak and where you are licensed to treat remotely. Send the current website link if there is one. I answer within one working day with what I would build and what it costs."),
      ],
    },
  ],
};
