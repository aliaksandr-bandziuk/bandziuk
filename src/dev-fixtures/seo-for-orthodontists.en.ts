// Landing page fixture: SEO for orthodontists (EN), group «seo-for-orthodontists».
// Semantic core: ref/medical-practices.md, group «orthodontists»: seo for
// orthodontists 170 (H1, H2), local seo for orthodontists 70 (H2 on offices),
// seo services for orthodontists 10, orthodontic marketing 260 (mentioned only:
// the owner does the SEO part, not ads or social media), orthodontic keywords 0
// (H2 on keyword research). «orthodontists» 246 000 and brand names (journey,
// dominion, bean, moody orthodontics) — patients’ searches for a practice, not
// targeted. «orthodontist website design» 90 → sibling page.
// PAA used: «What are the best SEO strategies for healthcare websites?» (FAQ).
// Intent: ref/intent-check-medical-practices.md — «seo for orthodontists» vs
// «dentist seo» 0 shared URLs, 1 shared domain (delmain.co) → separate page
// from /dentist-seo. SERP: ortho-marketing firms (orthomarketing, delmain,
// revenuewell, hip.agency, whitegloveorthodontist, tiointernational). Angles:
// parents searching for kids and teens, adults and clear aligners, referrals
// from general dentists, free consultations vs rules, cost and financing,
// multiple offices.
// NOT on this page: general dentistry SEO (/dentist-seo); designing and
// building the site (/orthodontist-website-design); dental website design
// (/dental-website-design); medical practices in general (/medical-seo).
// Owner’s rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const seoForOrthodontistsEn = {
  lang: "en",
  group: "seo-for-orthodontists",
  slug: "seo-for-orthodontists",
  title: "SEO for orthodontists",
  heading: "SEO for Orthodontists",
  excerpt:
    "I do SEO for orthodontists: pages for parents of kids and teens, adult and clear aligner pages, cost and payment plan pages, a Google profile for every office and pages for referring dentists, so families who search for braces nearby can find your practice.",
  seo: {
    metaTitle: "Orthodontist SEO: Braces, Aligners, Referrals | Bandziuk",
    metaDescription:
      "SEO for orthodontists: pages for parents and adults, aligner and cost pages, a Google profile per office, referrals and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Parents + adults + referrals", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Braces for kids near me", "Invisalign cost", "Monthly payment plans", "Orthodontist open Saturday"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Orthodontic SEO audit: practice website and Google profiles for each office", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for orthodontists: parent, aligner, cost and referral pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for an orthodontic practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What SEO for orthodontists includes",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data by age group and treatment", text: "Kids’ braces, teen aligners, adult options, cost" },
        { _key: k("o"), iconName: "layers", title: "Pages for parents, teens and adults", text: "Early treatment, braces, aligners, retainers" },
        { _key: k("o"), iconName: "file-text", title: "Cost, insurance and payment plan pages", text: "Ranges and what they include, in plain text" },
        { _key: k("o"), iconName: "map-pin", title: "A Google profile for every office", text: "Real days and hours, linked to its own page" },
        { _key: k("o"), iconName: "message-circle", title: "Pages for referring dentists and their patients", text: "How to refer, what happens next, who to call" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Office, age and cost facts ready to be quoted" },
      ],
      prices: [
        { _key: k("r"), label: "Orthodontic SEO audit: website and Google profiles", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for an orthodontic practice", value: "from 800 € / month", note: "pages, offices, reviews, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a private practice in Milan and service websites I have optimized",
      subtitle:
        "First, Giuseppe, a psychotherapist in Milan: a private practice with three consulting rooms, strict advertising rules for his profession and new pages that already appear in ChatGPT answers — the same mix an orthodontist with several offices works with. Next come projects where search was the main job: Maps and local pages for a Warsaw repair shop, a 3D scanning company whose organic traffic rose 29-fold after the rebuild, and two multilingual sites.",
      picks: [
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your orthodontic practice",
      subtitle: "In one business day I send back the three changes I would start with — on the site and in the office profiles — and a fixed price.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Who are most of your new patients?", options: ["Children and teens", "Adults", "About half and half", "Mostly aligner patients"] },
        { _key: k("z"), question: "Where do new patients come from now?", options: ["Referrals from general dentists", "Google search and Maps", "An aligner provider locator", "Word of mouth"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for orthodontists is the work that puts an orthodontic practice in front of parents looking for braces for a child, adults weighing clear aligners and families a general dentist has just referred: treatment pages, cost and financing pages, a Google Business Profile for each office and the facts AI assistants repeat. I do every step myself, from the first audit to the code changes, because I am a single consultant who also builds websites. Results are counted in consultation requests and new starts, not in rankings."),

        h2("How SEO for orthodontists differs from dentist SEO"),
        p("Search results for orthodontic practices and for general dentists barely overlap, and the reason is the patient’s path:"),
        li("the person searching is often not the patient: a parent researches treatment for a nine- or thirteen-year-old, and the decision is made at home, together"),
        li("treatment runs for one to three years and is a large planned expense, so families read and compare for weeks before they book"),
        li("many new patients arrive with a referral from their dentist and check the orthodontist online before calling"),
        li("adults compare aligners with braces and care about discretion as much as about the result"),
        p(
          "A dental office sells many short visits; an orthodontic practice sells one long treatment. SEO for orthodontists is built around that one decision. General dental practices have their own page on ",
          link("dentist SEO", "/dentist-seo"),
          ".",
        ),

        h2("Orthodontic keywords: what parents, teens and adults type into Google"),
        p("“Orthodontist” on its own has huge volume, but most of it is people looking up a practice they already know. The searches that lead to new starts are more specific:"),
        li("children: “braces for kids [city]”, “when should a child see an orthodontist”, “palate expander”, “early orthodontic treatment”"),
        li("teens: “Invisalign for teens”, “braces colors”, “aligners or braces for a teenager”"),
        li("adults: “adult braces”, “clear aligners [city]”, “ceramic braces”, “lingual braces”"),
        li("cost: “how much are braces”, “Invisalign cost [city]”, “braces payment plan”, “does insurance cover braces”"),
        li("after treatment: “lost retainer”, “retainer replacement”, “teeth moving after braces”"),
        p("Before anything is written I pull real volumes for your towns and give each phrase to one page. Headings use the words families use — “expander”, not the full appliance name — and the clinical term appears once in the text."),

        h2("Pages for parents in orthodontist SEO: braces for kids and teens"),
        p("Parents are the largest audience of most orthodontic websites and the most careful readers. They want to know when to come — orthodontic associations commonly suggest a first check around age seven — whether early treatment is needed or can wait, what the first visit costs, how long appointments last and whether they clash with school. A page for each of these questions ranks for what parents search and answers what your front desk hears every day."),
        p("Write for the parent and show the doctor: who sees young children, how a first visit with a child goes, and what happens when treatment is not needed yet and the child comes back for observation. Teen pages can address the teen too: eating with braces, mouth guards for sports, wearing aligners at school."),

        h2("Adult orthodontics and clear aligner pages: Invisalign, ceramic and lingual braces"),
        p("Adults often start with a brand — “Invisalign near me” — and then compare: aligners or braces, how visible, how long, how many visits, what it costs. One page for adult treatment, one for clear aligners and a short, plain comparison of the options cover most of that research. Adults also ask about treatment combined with other dental work, so the page explains how you coordinate with their dentist."),
        p("If an aligner brand lists you in its provider locator, the listing should point to your aligner page, not the home page, and the page should describe your provider status exactly as the brand permits. Patients arriving from a locator compare three or four nearby names; the page wins them with the orthodontist’s name, the steps at your office and the cost range."),

        h2("Treatment cost and financing pages for orthodontic practices"),
        p("“How much are braces” is one of the most searched questions in orthodontics, and many practice sites answer it with “every smile is unique”. Families then find a number on a competitor’s site or a forum. A cost page that ranks and helps includes:"),
        li("a typical range for each type of treatment, and what it covers: records, appliances, adjustment visits, retainers"),
        li("how orthodontic insurance benefits usually work, such as a lifetime maximum, and that your team checks the patient’s plan"),
        li("in-house payment plans: down payment, monthly amount, interest-free options if you have them, and HSA or FSA use"),
        li("what the first consultation includes and whether there is a fee"),
        p("Free consultations are common in US orthodontics. The wording around them is where practices get into trouble: state dental boards and consumer protection rules limit advertising claims, and some countries restrict “free” offers in healthcare entirely. Check with your board before publishing; I keep the conditions next to the offer, not in a footnote."),

        h2("Referral pages for general dentists in SEO for orthodontists"),
        p("Referrals are a search channel too. A family leaves the dentist with your name and types it into Google that evening; a dentist checks your site before adding you to their referral list. Two pages serve them:"),
        li("for referred patients: what to bring, what happens at the first visit and how you report back to their dentist"),
        li("for referring dentists: the orthodontist’s training, what you treat and what you send back, how to send records and whom to call"),
        p("A referral that carries X-rays, photos or patient details needs a secure route. In the US, HIPAA points to a referral service bound to you by a business associate agreement, not a web form that mails attachments around. That is the general picture; your compliance adviser signs off on the actual setup."),

        h2("Local SEO for orthodontists with multiple offices"),
        p("Many orthodontic practices run two or more offices, and some are open only on certain days. Each office needs its own Google Business Profile with the Orthodontist category, its real days and hours, photos of that office and a link to its own page on the site. The office page names the orthodontists who treat there and on which days, parking, and the towns and schools families come from."),
        p(
          "Satellite offices open one or two days a week lose most map positions: hours that read “closed” most of the week, no photos, no reviews. Accurate hours, regular photos and a review routine for each office fix most of it. Maps work is described in more detail on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Patient and parent reviews for orthodontic practices"),
        p("Orthodontic reviews have natural moments: the day the braces come off, the last aligner, the first retainer check. A short message with a direct link at those moments, sent to every patient or parent, builds a steady flow. Two habits common in orthodontics break the rules: contests and prizes for teens in exchange for reviews, which Google forbids and which can run against the FTC’s endorsement rules, and asking only the happy families."),
        p("Many reviewers are minors or write about their child. Replies stay general and never confirm that someone is a patient or mention treatment details, even when the review itself does."),

        h2("YMYL and orthodontist credentials: authorship and before-and-after photos"),
        p("Google holds orthodontic pages to the standard of health information. The site should show what sets an orthodontist apart from a general dentist offering aligners: the specialty residency, the university, board certification where the doctor holds it, memberships — stated exactly, without suggesting a title the doctor does not have. Each treatment page names the orthodontist who reviewed it and the date."),
        p("Before-and-after photos persuade more than any text and are the most sensitive content on the site. Publish them only with signed permission, which for a minor comes from the parent, with matching angles and lighting, no editing, and the treatment type and length stated. No page promises a result or a fixed treatment time."),

        h2("Technical SEO for orthodontic websites: speed, structured data and booking"),
        p("The technical problems I find on orthodontic sites repeat:"),
        li("smile galleries and autoplay clips that hold back the main text beyond 2.5 seconds on a phone"),
        li("a vendor template whose text appears on hundreds of other orthodontic sites"),
        li("one “Treatments” page for braces, aligners and expanders together"),
        li("no structured data linking the practice, each office and each orthodontist"),
        li("a consultation request hidden three screens deep"),
        p(
          "When the problems are deeper than a list of fixes, ",
          link("orthodontist website design", "/orthodontist-website-design"),
          " describes how I design and build one.",
        ),

        h2("SEO for orthodontists in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Parents ask ChatGPT what age a child should see an orthodontist, then which orthodontist in their town offers payment plans. Adults ask whether aligners suit them and who nearby offers both options. Earning a place in those replies is called GEO or AEO — generative or answer engine optimization. In orthodontics it comes down to:"),
        li("treatments, ages treated, offices, days open, languages and payment options written as plain facts"),
        li("cost ranges and what they include, in sentences an assistant can quote"),
        li("identical names, addresses and hours on your site, Google, the aligner locator and dental directories"),
        li("structured data that ties each orthodontist to each office"),
        p(
          "Giuseppe, a psychotherapist who sees clients in Milan, Monza, Cernusco sul Naviglio and online, found me by asking ChatGPT. His rebuilt site lists every location, therapy and condition as plain facts backed by structured data, and ChatGPT already includes pages published since launch in its answers. Details on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO for orthodontists costs"),
        li("Audit of the site and every office’s Google profile: from 250 €, paid once, with a ranked list of what to change."),
        li("Separate tasks such as a parent section, aligner and cost pages, referral pages or schema markup: 250–700 €."),
        li("Ongoing orthodontic SEO — new pages, office profiles, the review routine, AI visibility and a monthly report in consultation requests: from 800 € a month, and from 1,300 € a month in the most contested big metros."),
        p(
          "Orthodontic marketing firms usually bundle ads, social media and patient texting with a site on their platform. I do the SEO part and, when needed, the website; the site stays yours. Strategy work for any site is on ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ", other medical specialties on ",
          link("medical SEO", "/medical-seo"),
          ", all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for orthodontists: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for an orthodontic practice cost?", "The audit starts at 250 €. Individual tasks fall between 250 and 700 €. A monthly retainer begins at 800 €; in the busiest metros, at 1,300 €. Tell me how many offices you run and which treatments matter most, and I name a single fixed price."],
          ["How is SEO for orthodontists different from dental SEO?", "The searcher, the decision and the timeline differ. Parents research for their children, adults compare aligners with braces, many patients come by referral, and one treatment lasts years. The pages, keywords and reports follow that, so the work is planned separately from general dental SEO."],
          ["Can we advertise free consultations on our website?", "In many US states you can, with the conditions stated clearly next to the offer. Dental boards and consumer protection rules differ, and some countries restrict “free” offers in healthcare. Check with your board; I write the page so the offer and its conditions read together."],
          ["How long does SEO take to bring new starts?", "Corrected office profiles often move within a few weeks. Fresh pages on braces, aligners and cost need a few months to climb, and families then take weeks to decide, so measure consultations over roughly half a year."],
          ["Should every office have its own page and Google profile?", "Yes. Each office needs a profile with its own days and hours and a page on the site with the orthodontists who treat there. Offices open only a few days a week need extra care with hours and photos."],
          ["What are the best SEO strategies for healthcare websites?", "Pages that answer what patients search, written or reviewed by a named clinician; correct and consistent details on maps and directories; a steady, honest review routine; privacy-safe forms; and facts written plainly enough for AI assistants to quote. For orthodontists, add pages for parents, cost and referrals."],
          ["Can a consultant in Poland handle SEO for a US orthodontic practice?", "Yes — everything happens online. I am in Warsaw, so when your doctors start the day I am in my afternoon, and a call before the first patient is easy to fit. I invoice in euros and work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your orthodontic practice: what to send me"),
        p(
          "Write down your practice name and site, a Maps link per office, roughly how your patients split between children and adults, the treatments you would like more of and which dentists refer to you. In return you get my first three fixes and a fixed price. Send it through the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
