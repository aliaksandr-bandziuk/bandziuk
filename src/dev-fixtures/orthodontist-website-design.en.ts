// Landing page fixture: Orthodontist website design (EN), group
// «orthodontist-website-design».
// Semantic core: ref/medical-practices.md, group «orthodontists»: orthodontist
// website design 90 (H1, H2). «seo for orthodontists» 170 and «local seo for
// orthodontists» 70 → sibling /seo-for-orthodontists. «orthodontists» 246 000
// and practice brand names — patients’ searches, not targeted.
// Intent: ref/intent-check-medical-practices.md — «orthodontist website
// design» vs «dental website design» 1 shared URL (lassomd best dental
// websites list), 2 shared domains → separate page from /dental-website-design.
// SERP: orthodontic and dental site vendors and studios (neoncanvas,
// hip.agency, dentalfone, delmain, mysocialpractice), galleries (dribbble,
// colorlib). Angles: two audiences (parents for kids and teens, adults and
// clear aligners), before-and-after galleries with consent, cost and payment
// plans, consultation offers vs rules, virtual consultations and photo
// uploads (HIPAA, general), multiple offices, referring dentists, current
// patients, vendor templates vs custom, migration without losing URLs.
// NOT on this page: SEO, keyword research, Google profiles and reviews
// (/seo-for-orthodontists — sibling); general dental sites
// (/dental-website-design); medical sites in general (/medical-website-design).
// Owner’s rules: AI-readable site H2; Giuseppe as the main case; NDA medical
// system mentioned once without detail.
import { p, h2, li, link, k } from "./pt";

export const orthodontistWebsiteDesignEn = {
  lang: "en",
  group: "orthodontist-website-design",
  slug: "orthodontist-website-design",
  title: "Orthodontist website design",
  heading: "Orthodontist Website Design",
  excerpt:
    "I design and build orthodontist websites: a first screen for parents and one for adults, braces and clear aligner pages, smile galleries with consent, cost and payment plan pages, an office finder and a referral form for general dentists — design and build from one person at one price.",
  seo: {
    metaTitle: "Orthodontic Practice Websites: Design + Build | Bandziuk",
    metaDescription:
      "Orthodontist website design: paths for parents and adults, braces and aligner pages, smile galleries with consent, payment plans, office finder. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Parents and adults in one design", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Book a consultation", "Braces or aligners?", "Monthly payment plans", "Find an office"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple orthodontic practice website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Orthodontist website with parent, adult and aligner pages, smile gallery, cost and payment plan pages, office pages and a referral form, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with orthodontist website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "Two front doors: parents and adults", text: "Kids and teens on one path, adult options on another" },
        { _key: k("o"), iconName: "image", title: "Smile galleries with consent on file", text: "Same angles and light, no retouching, case details" },
        { _key: k("o"), iconName: "file-text", title: "Cost and payment plan pages", text: "Ranges, what is included, monthly plans as text" },
        { _key: k("o"), iconName: "map-pin", title: "An office finder for every location", text: "Days open, doctors, parking and directions" },
        { _key: k("o"), iconName: "plug", title: "Referral form for general dentists", text: "Records through a provider built for health data" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Treatments, offices and ages treated as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple orthodontic practice website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Parents, adults, gallery, offices, referrals", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Design portfolio: a Milan private practice first, then four more builds",
      subtitle:
        "Giuseppe, a psychotherapist in Milan, comes first: a private medical practice with three consulting rooms on one map, a calm design for anxious visitors and 468 old posts moved without losing an address. The other sites show parts an orthodontic site reuses: a catalog with filters and a map, premium photo-led design, a rebuild that kept its design, and a multilingual structure.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your orthodontist website design",
      subtitle: "Within one business day: what the home screen should say to parents and to adults, a list of pages and one fixed price.",
      contextLabel: "Practice name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How many offices do you have?", options: ["One", "Two or three", "Four or more"] },
        { _key: k("z"), question: "What do you need most?", options: ["A new site from scratch", "A redesign of our current site", "Leaving a dental marketing platform", "Not sure yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design orthodontist websites and write their code myself; there is no hand-off between a designer and a developer, and the quote is a single figure. An orthodontic site serves two very different visitors — a parent deciding about a child’s treatment and an adult who wants straighter teeth without anyone at work noticing — and both have to reach a consultation request without hunting for it."),

        h2("Orthodontist website design for parents and adult patients: the first screen"),
        p("The home page gives each visitor a door. One block for “Braces and early treatment for children and teens”, one for “Clear aligners and discreet braces for adults”, a single consultation button and the phone number under both. Below that, one line each: the orthodontist’s name and specialty, the offices, and how payment works."),
        p("Stock photos of grinning teenagers and moving sliders do not belong here. A photo of your own treatment room and team, in natural light, tells a parent more about the practice than any slogan, and a calm layout with one accent color for the booking button keeps attention where it should be."),

        h2("Pages for parents on an orthodontist website: age, first visit and treatment timeline"),
        p("Parents read on phones, often in the car outside school. A child’s treatment is easier to follow as a timeline than as paragraphs: first check, observation visits if it is too early, a first phase if needed, braces or aligners, then retainers. I design it as a row of short steps, each with the usual age range and how often the family comes in, written and dated by your orthodontist."),
        p("The first-visit page shows what happens in the chair, how long it takes, whether a parent can stay and which records are taken. These are the details that decide whether the parent of a nervous ten-year-old calls."),

        h2("Braces vs clear aligners: comparison pages for adult orthodontic patients"),
        p("Adults compare options side by side, so a comparison table does more than three separate sales pages: visibility, typical length range, visit frequency, eating and cleaning, what the patient has to do every day. Each column links to the full page for that option, with the orthodontist who provides it."),
        p("The adult section uses photos of adult patients, shared with consent, not teenagers, and offers a way to ask a question in writing for people who cannot call during work hours. Discretion is part of the design, not only of the treatment."),

        h2("Before-and-after smile galleries on an orthodontist website: consent and honest photos"),
        p("The gallery is the most visited page on many orthodontic sites, and its design keeps it honest:"),
        li("written consent for every case, signed by a parent or guardian for minors, kept in the practice records"),
        li("the same views — front, both sides, bite — and the same lighting before and after"),
        li("no retouching, whitening or cropping that hides crowding"),
        li("the treatment and its length next to each case, and a plain note that results vary"),
        li("filters by treatment and age group, so an adult does not scroll through teenagers"),
        li("image descriptions that name the case type for screen readers, never the patient"),

        h2("Treatment cost and payment plan pages on an orthodontic website"),
        p("Cost works best as a set of cards: one per treatment, each with a price range, what it includes and a sample monthly plan. A payment calculator can help if it shows ranges and states its assumptions; it must never look like a quote. Insurance and flexible spending accounts get a short, plain paragraph rather than a wall of logos."),
        p("If your consultation has no fee, the card says what it includes, right beside the button. How such offers may be worded depends on your state board, so check before launch. Giuseppe, a psychotherapist in Milan, works under article 40 of the Italian psychologists’ code of conduct, so his editor flags any draft that promises an outcome, quotes a patient, mentions a discount or offers a “free consultation”. A similar check can flag the phrases your own board restricts."),

        h2("Online booking and virtual smile assessments on an orthodontist website"),
        p("Every page leads to the consultation request. On a phone it stays within thumb reach in a bar pinned to the bottom of the screen, next to the phone number. Tapping it opens your scheduling system’s online booking, or a short request form asking for a name, contact details, the patient’s age group and the preferred office — nothing clinical."),
        p("Virtual consultations, where a patient uploads photos of their teeth, suit adults and families far from an office. Those photos are health information, often of a child’s face, so they go through a service that has signed a HIPAA business associate agreement with the practice, never through email or an ordinary form. I design the flow around the provider you choose, and your compliance adviser approves it. Five years ago I helped build a system for patient records, under an NDA that keeps its name private; it taught me to let a public website store nothing clinical it can do without."),

        h2("Multi-office orthodontic websites: an office finder with days, doctors and directions"),
        p("Practices with several offices need an office finder: a map and a list, each office with its own page showing the days it is open, the orthodontists who treat there, parking, the entrance and a photo of the front door. Families choose by the school run, so the list can show nearby towns, and the request form asks which office suits them."),
        p("Giuseppe’s site follows the same pattern on a smaller scale: one map showing where he sees clients — Milan, Monza, Cernusco sul Naviglio — a page for each place and a separate page for online sessions with Italians abroad."),

        h2("Orthodontist profile pages and a section for referring dentists"),
        p("Parents and dentists both read the doctor page. It shows the dental degree, the specialty residency, board certification where it applies, years in practice and the offices where the orthodontist sees patients, with a real portrait. Assistants and coordinators get a photo and a line each; families meet them more often than the doctor."),
        p("Referring dentists get a small section of their own: how to refer, a form that sends records through a secure provider, what you report back after the first visit and a direct number. Two pages save a busy dental office a phone call for every referral."),

        h2("Pages for current orthodontic patients: emergencies, appliance care and aligners"),
        p("Patients in treatment visit the site more often than new ones. A section for them keeps the home page clear and reduces calls: what to do about a poking wire or a loose bracket, which problems need a call the same day, cleaning around braces, how long to wear aligners and how to clean them, retainer care, and the link to the patient portal or payments. Short videos recorded by your own team work better here than stock footage."),

        h2("An orthodontist website that ChatGPT and Google AI Overviews can read"),
        p("Parents ask AI assistants which orthodontist nearby treats young children, has evening hours or offers monthly plans. The replies are assembled from page text the assistant can parse and compare with your Google profiles. The design keeps those facts in the page itself, not inside images: offices with days and hours, ages treated, treatments, languages, payment options, and structured data that connects each orthodontist to each office. Giuseppe’s site follows the same rule, and ChatGPT is already quoting pages he published after launch."),
        p(
          "Keeping the practice in those answers month after month is a separate service: see the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. For Google rankings on braces and aligners in your area, see ",
          link("SEO for orthodontists", "/seo-for-orthodontists"),
          ".",
        ),

        h2("Orthodontic website templates from dental platforms vs a custom design"),
        p("Dental marketing platforms sell orthodontic templates with stock content, hosting and a few tools in one subscription. For a single new office that mostly needs hours and a phone number, that is a reasonable start. The limits appear later: text shared with many other practices, galleries without filters, no real office pages, and a contract under which the site stays with the vendor."),
        p(
          "Leaving is where practices fear losing their rankings. Giuseppe’s site went from WordPress to Next.js with all 468 blog posts carried over and a 301 redirect for each old URL; galleries and office pages of an orthodontic site can be carried over the same way. The ",
          link("website redesign", "/services/website-redesign-services"),
          " page describes the process.",
        ),

        h2("How much orthodontist website design costs"),
        p("There is no separate design fee: one figure covers the layout and the build."),
        li("A compact site for one office — home, treatments, the orthodontist, cost cards and online booking: 700–1,400 €."),
        li("An orthodontist website with parent and adult paths, aligner and braces pages, a filtered gallery, cost and payment plan pages, office pages and a referral form: from 2,000 €."),
        p(
          "Giuseppe’s project took 44 working days between the start of coding and handing the site over, with written manuals in two languages and recorded walkthroughs. My general build process is on ",
          link("website development", "/services/website-development"),
          "; for general dentistry see ",
          link("dental website design", "/dental-website-design"),
          ", for other specialties ",
          link("medical website design", "/medical-website-design"),
          ", and every price list is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Orthodontist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does an orthodontist website cost?", "A compact one-office site costs 700–1,400 €; a site with parent and adult paths, a filtered gallery, cost cards, office pages and a referral form starts at 2,000 €. Design is in both prices, and you get one fixed figure once I know your offices and treatments."],
          ["When will our new orthodontic website be live?", "Count on a month to a month and a half after the brief; more offices, more gallery cases or slow approval of texts and photos stretch it. You see the mobile home screen and one treatment page in the first week or two."],
          ["Can we leave our dental marketing platform without losing rankings?", "Yes. Before launch each existing URL gets a matching new page and a permanent redirect, and the markup moves across too. Ask the platform for an export of texts and gallery images as early as you can."],
          ["Can patients upload smile photos for a virtual consultation?", "Yes, through a provider built for health data that signs a HIPAA business associate agreement with your practice. Photos never travel by email or a plain contact form. Your compliance adviser approves the final setup."],
          ["Can we show before-and-after photos of teenage patients?", "With written consent from a parent or guardian, matching angles and lighting, and no editing. The gallery shows the treatment and its length and never names the patient."],
          ["Can our team update offices, hours and the gallery?", "Yes. Offices, hours, team members, gallery cases and cost cards are edited in a simple CMS, also from a phone, while the layout stays consistent. You get a written manual and short video walkthroughs."],
          ["Is it a problem that you are based in Poland and we are in the US?", "No. The project runs online, and design reviews fit into your morning because that is my afternoon in Warsaw. You pay euro invoices, and we talk in English."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order orthodontist website design: what to send me"),
        p(
          "Tell me your practice name and current site, each office with its open days, what you treat in children and in adults, your booking software, and attach a few photos of the team and treatment rooms. I answer with a home-screen sketch and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
