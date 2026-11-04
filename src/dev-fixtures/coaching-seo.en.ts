// Landing page fixture: SEO for coaches and consultants (EN), group
// «coaching-seo». NEW page — create-landing.cjs, root level like the other
// industry SEO pages (/seo-for-accounting-firms, /seo-for-law-firms). General
// service pages live under /services/, industry pages do not — checked live
// 04.11.2026: /services/life-coach-website-design is a 404.
//
// Why it exists (04.11.2026). Cluster 1 of claude/landing-queue.md. The site
// has website pages for coaches (/life-coach-website-design and the
// Polish strona-internetowa-dla-coacha) but nothing for their promotion.
// Measured forms: coaching seo 2510 · life coach seo 80 = ~2590/мес.
// The existing coach pages are about BUILDING the site, so there is no
// cannibalisation: different service, different query head, and this page
// links to them rather than repeating them.
//
// EN only, and that is measured rather than assumed. Polish has exactly one
// coach-adjacent row in the core — «strona internetowa dla trenera
// personalnego» 90, the WEBSITE form, and that page already exists. Russian
// has nothing at all around coaching SEO. A conscious incomplete language
// group, like the other EN-only pages.
//
// NOT targeted here: «coaching website» 12 820, which sits on the existing
// website page as «переформулировать». It is an «X website» form, the exact
// shape that failed the intent check nine times on 02–03.11 (doctor website
// 90 500, translator website 27 100 and the rest turned out to be consumers,
// not owners). It needs its own SERP check before anyone writes for it.
//
// What makes this page different from the other industry SEO pages: coaching
// is sold remotely by default, so local search — the backbone of the trades,
// clinic and accounting pages — matters far less here, and the competition is
// the whole language rather than the city.
import { p, h2, h3, li, link, k } from "./pt";

export const coachingSeoEn = {
  lang: "en",
  group: "coaching-seo",
  slug: "seo-for-coaches",
  title: "SEO for Coaches and Consultants",
  heading: "SEO for coaches: how a coach gets found by the person they can actually help",
  excerpt:
    "Coaching pages read the same because many were written from the same certification template. The work is not more keywords — it is naming who you coach and the situation they are in, proof a search engine can read, and a price. Audit from €250, and I say what I would not bother changing.",
  seo: {
    metaTitle: "SEO for coaches — audit from €250",
    metaDescription:
      "SEO for coaches and consultants: a page per client situation, credentials and proof, pricing, and being named in AI answers. Audit €250, ongoing €800/month.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per client situation", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Career coaching after redundancy at 50", "Business coaching for solo consultants", "A package price, not «book a call»", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a coaching practice: site, positioning and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: client-situation pages, proof, pricing, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a coaching practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a coaching practice actually consists of",
      items: [
        { _key: k("o"), iconName: "users", title: "A page per client situation", text: "Redundancy at 50, a founder stuck at one revenue number" },
        { _key: k("o"), iconName: "award", title: "Credentials made findable", text: "Credential level, training, years, written as text" },
        { _key: k("o"), iconName: "tag", title: "A price or a range on the page", text: "A package figure instead of «book a call»" },
        { _key: k("o"), iconName: "message-square", title: "Proof that survives reading", text: "Outcomes with numbers, not «life-changing»" },
        { _key: k("o"), iconName: "globe", title: "Competing by language, not by city", text: "Remote work widens the field beyond local search" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Find me a career coach for a mid-life change»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why most coaching websites are invisible in search"),
        p("Read ten coaching websites in a row and they merge into one. Unlock your potential, step into your power, transform your life, a three-month journey, a free discovery call. That is not laziness — much of it comes from certification programmes, which hand out a website structure and sample copy along with the credential. Thousands of coaches launched from the same script, so to a search engine they are interchangeable, and interchangeable pages cannot outrank each other on anything except the coach's own name."),
        p("The second reason is that the pages describe the method rather than the person in trouble. «Transformational coaching» is what you do; «I have managed people for fifteen years and I have just been made redundant» is what somebody types. A coach who writes the first competes with everyone holding the same certificate; a coach who writes the second competes with almost nobody."),

        h2("Naming who you coach is the one change that moves coaching SEO"),
        p("Coaching is bought at a moment, not as a category. Someone whose company was just sold, a founder who cannot get past the same revenue number two years running, a doctor leaving clinical practice, a new manager promoted over former peers — each arrives with a different fear and searches in their own words, and none of them searches for «coaching»."),
        p("So the structure is one page per situation you genuinely work with: the situation named in the heading, the questions it brings, how the engagement runs, and what it costs. It is also an honest filter. A coach who cannot name three situations they are better at than average has a positioning problem rather than a search problem, and publishing more pages will not fix it — it will spread the same sentence over more addresses."),
        li("name the situation in the heading, not in the third paragraph;"),
        li("use the words the client uses about themselves, not the words of your method;"),
        li("say how long the engagement runs and what it includes;"),
        li("state a price or at least a floor;"),
        li("and do not build a page for work you would rather not take."),

        h2("Search for a coach who works remotely: why local SEO matters less here"),
        p("Almost every other profession I write these pages for is bought locally: the clinic, the garage, the law firm, the accountant. Coaching mostly is not. Sessions happen on a video call, so the buyer is not filtering by city, and that changes the strategy in both directions. The good news is that a coach in a small town competes on equal terms with one in a capital. The bad news is that the field is the entire language rather than the twenty practices within driving distance, and the pages that already rank are often large publishers and directories rather than other coaches."),
        p("There are two exceptions worth being honest about. Coaching genuinely delivered in person — team workshops, on-site executive work — is local, and then the Google Business Profile and a city page do matter. And coaching sold to companies rather than to individuals is bought the way consulting is bought: through procurement and reputation, where a case study somebody can forward does more than a ranking."),
        p(
          "If you work in person as well as online, both halves are worth doing, and the local half is described on the ",
          link("local SEO page", "/services/local-seo-services"),
          ". If the site itself is the problem rather than its visibility, that is a different job: ",
          link("website design for coaches", "/life-coach-website-design"),
          ".",
        ),

        h3("Proof and credentials a search engine can actually read"),
        p("Coaching has no licence, so proof does the work a licence would do elsewhere, and most of it is published in a form that cannot be read. Testimonials inside slider images, credential badges as logos with no text, results described as «transformational» with no number or timeframe. Written as text, the same material does its job: the credential and its level spelled out, how long you have practised, how many hours, and outcomes a reader can check — a promotion, a role change, a figure, a date."),
        li("write the credential and its level as text, not as a badge image;"),
        li("give testimonials a name, a role and a situation, with permission;"),
        li("say what changed and over what period;"),
        li("and keep the same name, credential and wording on the site and on any directory that lists you."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: work where expertise is the product and credibility is checked before contact",
      subtitle:
        "What these have in common with a coaching practice: the person is the service, the buyer verifies credibility before writing, and the search growth came from structure and content rather than bought links. A retail-analytics consultant, an education agency taken from one country to ten, a digital agency site, a personal site built and optimised from scratch, and a multilingual site for student services.",
      picks: [
        "consultant-website-design-retail-analytics",
        "seo-case-study-education-agency",
        "proscore-agency-website-development",
        "develop-and-optimize-a-personal-website-with-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your coaching practice",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of coaching do you do?", options: ["Career", "Business or executive", "Life", "A mix"] },
        { _key: k("z"), question: "Who do you work with?", options: ["One clear niche", "Two or three situations", "Anyone who books", "Still deciding"] },
        { _key: k("z"), question: "How do clients find you now?", options: ["Referrals only", "Social media", "A directory", "Search already works a little"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when someone asks ChatGPT for a coach (GEO, AEO)"),
        p("«Find me a career coach for someone leaving medicine in their forties» is now a question people put to an assistant before they open a search engine, and coaching is a category where they are especially likely to ask, because the buyer has no way to judge quality and wants a shortlist rather than ten adverts. The assistant answers from text it can read and from sources that agree with each other, so three things decide whether a coach is named: the situations and the approach written as text rather than set in a designed image, a price or a range it can quote, and the same name, credential and wording on the site and on every directory that lists you."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants are saying something wrong about you — an old credential, a service you dropped — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for coaches: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a coaching practice cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many client situations you actually serve, whether the site can be edited, and whether the positioning is settled or still being worked out."],
          ["How long before anything changes?", "First movement after about a month and a half, steady growth on a three to six month horizon. Coaching has no busy season to catch, which makes the timing simpler than in seasonal professions, but the competition is a whole language rather than a city, so the early movement usually shows up on the narrow situation pages first."],
          ["I rank for my own name. Is that not enough?", "It means people who already heard of you can find you, which is what referrals produce anyway. The work here is being found by somebody who does not know you exist and is searching for their own problem instead."],
          ["Do I have to put prices on the site?", "Not to the last figure, but something. A package price for a defined number of sessions, or a floor. «Book a free discovery call» with no figure reads as «expensive and awkward to ask», and it fills your calendar with calls that end at the price question."],
          ["Is SEO worth it when I get clients from referrals and social media?", "Sometimes the honest answer is no — if referrals fill your calendar and you are not trying to change who you work with, SEO is a solution to a problem you do not have. It becomes worth it when you want a different kind of client than the one your network keeps sending, because search is where that person looks and your network is not."],
          ["My certification programme gave me a website. Can you work with it?", "Usually yes, if pages can be added and the text edited. If the structure is locked and changes go through support, SEO work on it is paying rent, and a site you own is cheaper within the year. I say which case it is before quoting."],
          ["Can you guarantee a position?", "No, and nobody honest can — the ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the pages?", "I do, and you correct them. The situations have to come from you: which clients you are genuinely better with, in their words rather than the method's words. That part cannot be researched from outside the practice."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a coaching practice: what to send me"),
        p("Send the website, name the two or three client situations you are genuinely better at than average, and say whether you can edit the site yourself. I reply within one working day with what is holding it back and what I would do first — and if the honest answer is that the positioning has to be settled before any page is worth writing, I will say that rather than sell a year of content on top of it."),
      ],
    },
  ],
};
