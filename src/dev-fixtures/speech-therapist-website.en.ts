// Landing page fixture: speech therapist website design (EN), group
// «speech-therapist-website». New page, create-landing.cjs.
//
// Why (07.11.2026). The measured demand for this industry is Russian-language
// (ru «сайт для логопеда» 30, 50 for the industry); the English version is
// built because every industry page is made in all three languages.
// See claude/industry-delta-2026-11-07.md.
//
// Cannibalisation check — neighbours: /website-for-psychologists-therapists
// and /pediatrician-website-design. They own the calm first screen, the path
// to a first session, privacy in forms, the clinic structure by child age,
// vaccinations and photo consents. NONE of that is repeated here.
//
// EN-specific sections the RU and PL versions do not have: the credential and
// the jurisdictions where the practice may treat, because teletherapy is sold
// across state and national lines and licensure is the real barrier; and
// evaluation reports for school, which parents search for by name.
//
// Owner's rules: no promises of outcomes or dates; design included in the
// build price; every page covers AI search.
import { p, h2, li, link, k } from "./pt";

export const speechTherapistWebsiteEn = {
  lang: "en",
  group: "speech-therapist-website",
  slug: "speech-therapist-website-design",
  title: "Speech therapist website design",
  heading:
    "Speech therapist website design: pages by the child's age, bilingual families, and the licence question answered before the booking",
  excerpt:
    "Websites for speech and language therapy practices: pages written in the parent's words rather than in clinical terms, a page for bilingual and expat families, your credential and jurisdictions stated plainly, and a clear line around what works online. Design included, from €2,000.",
  seo: {
    metaTitle: "Speech Therapy Practice Website Design from €2,000",
    metaDescription:
      "Websites for speech therapists: pages by age and concern, bilingual families, licence and teletherapy limits, school reports. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Speech and language therapy", "From €2,000", "Answer within 1 working day"],
  heroPhonePoints: ["Two and not talking yet", "Trouble with «r»", "Bilingual family", "Book an evaluation"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Speech therapy practice website: pages by age and concern, bilingual families, evaluations, design included", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for a solo therapist: evaluation, teletherapy, booking", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of a speech therapy website with rankings kept", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I build",
      title: "What a speech therapy website build covers",
      items: [
        { _key: k("o"), iconName: "message-circle", title: "Pages in the parent's words", text: "«Not talking at two», not «expressive delay»" },
        { _key: k("o"), iconName: "users", title: "A page for bilingual families", text: "The question almost nobody answers" },
        { _key: k("o"), iconName: "badge-check", title: "Credential and jurisdictions stated", text: "Where you may treat, said once and clearly" },
        { _key: k("o"), iconName: "file-text", title: "School reports, and whether you write them", text: "Parents search for the document" },
        { _key: k("o"), iconName: "video", title: "What works online and what does not", text: "A line drawn, not a promise" },
        { _key: k("o"), iconName: "heart-pulse", title: "A separate page for adults", text: "After a stroke somebody else decides" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a speech therapist's website opens with the parent's words, not the clinical terms"),
        p("I design and build websites for speech and language therapy practices, and design comes with the build rather than on a separate invoice. The biggest problem with almost every speech therapy site is not the design: the therapist writes «expressive language delay», «articulation disorder», «childhood-onset fluency disorder», and the parent types «two year old not talking», «can't say r», «stutters», «hard to understand». Those are two different languages, and a site written in the first never meets the person searching in the second."),
        p("So the structure is built out of the parent's phrasing, with the clinical term standing next to it in the same paragraph: the page gets found on the live query and stays professionally correct. There is a second gain. A parent who hears «articulation disorder» for the first time from a paediatrician lands on a page where that term is explained in their own words, and stays."),
        p(
          "For a solo therapist with no premises a landing page at €700–1,400 is usually the right size rather than a full site, and I will say so once I see what you have. If you are a psychologist or psychotherapist, the page you want is ",
          link("therapist website design", "/website-for-psychologists-therapists"),
          ".",
        ),

        h2("Pages by the child's age and by what the parent hears"),
        p("Parents do not search for a method, they search for their own situation, and a situation always has an age. Two and silent, three and syllables instead of words, five and «r», six and getting ready for school, second grade and spelling that does not match the reading — five different texts and five different booking decisions, behind which stands one therapist."),
        li("the age in the page heading, because that is the first thing a parent checks against their own child;"),
        li("the concern in their words, with the clinical name in the first paragraph rather than instead of it;"),
        li("what the evaluation will actually involve for that concern, and the span of time usually discussed;"),
        li("when this is not a speech therapist at all but an audiologist, a neurologist or an orthodontist — that directness brings more enquiries than it loses."),

        h2("Bilingual and expat families: the page almost no practice has written"),
        p("In families living outside the country of their language this is the main question and the main fear: whether the second language is holding the child back, whether mixing words is normal, whether that is why they spoke later. Parents look for the answer in their own language, find general articles, and do not find a therapist who works with exactly this."),
        p("A page for bilingual families closes a query the competition leaves open: what is expected in bilingual development and what genuinely needs attention; which language the evaluation runs in and why both have to be assessed; how sessions work when home is one language and school is another. For a practice serving expat families it is usually the most visited page on the site after the home page."),

        h2("Your credential and where you are licensed to practise, stated once and clearly"),
        p("Speech and language therapy is a licensed profession, and teletherapy sells across lines that licences do not cross. A family three states away or in another country can book a session you are not permitted to deliver, and both sides discover it late. The site solves this in one short block: the credential you hold and the body behind it, the states or countries where you are licensed, whether you hold a privilege under an interstate compact if you use one, and what you can offer a family outside those borders — parent coaching, a consultation, or a referral."),
        p("That block looks like administration and works like sales: it is the difference between a parent who books and a parent who keeps looking because they could not tell whether you are allowed to treat them."),

        h2("Evaluation reports for school, and whether you write them"),
        p("Some parents are not looking for sessions at all, they are looking for a document: a report their school or nursery needs, something to bring to a review meeting or an assessment. They search for it by name and land on sites that say nothing about it, so they start phoning down the list. One sentence saying whether you provide a written evaluation report, after how many appointments and at what cost removes half those calls and brings bookings that otherwise would not exist."),

        h2("The first evaluation and a direct answer to «how many sessions»"),
        p("Parents ask this in their first message, and an evasive answer costs the booking. You cannot give a number and you cannot promise a date, but you can describe how it works: the evaluation takes this long, after it you give a range and a frequency, after a few weeks you look at what changed and the range narrows."),
        p("The same place carries the sentence about practice at home — ten to fifteen minutes a day from the parent. Placed before the booking rather than after, it works as a filter: the families expecting the therapist to fix it alone go elsewhere, and the ones who will see progress stay. Next to it goes the price of the evaluation and of a session, because the parent is working out a monthly figure either way."),

        h2("What a speech therapist does online and what they do not"),
        p("Teletherapy made practices international, which is exactly why the site needs a line. Some work goes well over video: carryover of a sound, vocabulary and grammar, reading and writing, sessions with teenagers and adults. Some needs presence or at least caveats: eliciting certain sounds, where you have to see the articulators closely; a small child who will not hold attention at a screen; myofunctional work."),
        p("A site that separates the two gets enquiries from other countries and does not get cancellations and refunds. The same block carries the technical ask: a computer rather than a phone, and an adult sitting with the child for the first sessions."),

        h2("Adults after a stroke — a separate page read by a different person"),
        p("Aphasia and dysarthria in adults are a different service, a different urgency and a different buyer: usually it is not the person searching but their adult children, in the first weeks after the event, when starting quickly matters. They need to know whether you take these patients, whether you work at home or at the practice, what the first session involves and how it fits the rehabilitation a doctor has already prescribed."),
        p("That is its own page, not a paragraph among the children's ones: mixed together, it loses the parents and the family both."),

        h2("What a speech therapist website costs and how long it takes"),
        p(
          "A practice website starts at €2,000 with design included. A landing page for a solo therapist is €700–1,400 and for a private practice with no premises that is usually the right size. A redesign that keeps rankings starts at €1,000. A landing page takes two to three weeks, a full site four to six. The number of age and concern pages, the number of languages and whether you run a teletherapy arm move both the price and the schedule. The figures are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites where trust and the first contact decide",
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
      title: "A quote for your speech therapy website",
      subtitle: "I answer within one working day: what I would build, in which languages, and what it costs.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do you work?", options: ["A solo therapist", "A practice with several therapists", "Speech therapy inside a larger centre", "Something else"] },
        { _key: k("z"), question: "Do you offer teletherapy?", options: ["Yes, mostly", "Yes, partly", "No", "We would like to start"] },
        { _key: k("z"), question: "Do you work with bilingual children?", options: ["Yes, a large share", "Occasionally", "No", "It is a new direction"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("A speech therapy website that AI assistants can read (GEO, AEO)"),
        p("Parents now ask an assistant before they open a search box: a speech therapist who works with bilingual children, one who offers teletherapy, one who takes three-year-olds, one who is licensed where they live. The assistant answers from text it can read, and a practice whose services sit in one general paragraph, whose prices live in an image and whose age range is never written down does not appear in that answer at all."),
        p(
          "What makes a practice quotable is the same thing that makes it clear to a parent: ages and concerns as text, languages and licensed jurisdictions as data, the evaluation and session price on the page, the boundary of online work stated plainly. Bringing an existing site to that state is ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Speech therapist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a speech therapist website cost?", "From €2,000 for a practice site with design included, and €700–1,400 for a landing page for a solo therapist — for a private practice with no premises a landing page is usually enough. A redesign that keeps rankings starts at €1,000."],
          ["Should the site avoid clinical terms?", "No — it should carry them next to the parent's words rather than instead of them. Parents search «two year old not talking», not «expressive language delay», and a page written only in clinical terms never meets that query."],
          ["Do we need a page for bilingual families?", "For a practice serving expat families it is usually the most visited page after the home page. Parents fear the second language is holding the child back, look for an answer in their own language and cannot find a therapist who works with exactly that."],
          ["What should the site say about licensing?", "The credential you hold and the body behind it, the states or countries where you are licensed, whether you hold a privilege under an interstate compact if you use one, and what you can offer a family outside those borders. It reads like administration and works like sales."],
          ["Should we mention written evaluation reports?", "Yes, in one sentence: whether you provide one, after how many appointments and at what cost. Many parents are looking for that document by name and phone down the list of sites that stay silent about it."],
          ["What do we say about the number of sessions?", "Not a number and not a date, but the order of work: how long the evaluation takes, that you then give a range and a frequency, and after what period the range narrows. That paragraph removes more objections than a page about qualifications."],
          ["How should teletherapy be described?", "With a line drawn: what goes well over video — carryover of a sound, vocabulary and grammar, reading and writing, teenagers and adults — and what needs presence or caveats. That site brings enquiries from other regions and avoids cancellations and refunds."],
          ["Do we need a page for adults after a stroke?", "If you take those patients, yes, a separate one. It is read by the patient's adult children in the first weeks after the event, and they need different answers from the parents of young children."],
          ["Can you redesign our site without losing search traffic?", "Yes. Every existing address is mapped, every changed one redirected, and pages that already bring enquiries keep their text instead of being rewritten for a new look."],
          ["Who owns the site?", "You do: the code, the domain, the hosting account, the content and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ordering a speech therapy website: what to send me"),
        p("Tell me whether you work alone or as a practice, which ages and concerns you take, whether you work with bilingual children and with adults after a stroke, whether you write evaluation reports for schools, where you are licensed, whether you offer teletherapy, what the evaluation and a session cost and which languages you work in. Send the current website link if there is one. I answer within one working day with what I would build and what it costs."),
      ],
    },
  ],
};
