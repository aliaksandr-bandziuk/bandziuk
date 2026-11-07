// Landing page fixture: pediatrician website design (EN), group
// «pediatrician-website». New page, create-landing.cjs.
//
// Why (07.11.2026). Measured in the 102-industry delta: «pediatrician website
// design» 90, «pediatrician web design» 90 — owner forms. The bare
// «pediatrician website» 480 is NOT targeted: by precedent that form belongs
// to parents looking for a clinic. See claude/industry-delta-2026-11-07.md.
//
// Cannibalisation check (rule from claude/landing-queue.md). Neighbours and
// what they already own, so none of it is repeated here:
//   /medical-website-design — trust layout, doctor profiles, condition pages,
//     booking and portals, WCAG, multilingual, HIPAA forms, templates vs
//     custom, process, price;
//   /website-for-psychologists-therapists — calm design for anxious visitors,
//     privacy, CMS guard rails.
// This page spends its length on what is only true of paediatrics.
//
// Spine: the visitor is a frightened parent at 2 a.m. holding a child in one
// arm and a phone in the other. Everything follows — what the first screen
// has to answer, age-based navigation instead of specialty navigation, the
// vaccination section as the most searched and most contested content, which
// doctor the child will actually see, out-of-hours and home visits, written
// consent before a child's photograph is published.
//
// Owner's rules: no medical promises; design is included in the build price;
// every page covers AI search; never say there are no clients from the
// visitor's industry.
import { p, h2, li, link, k } from "./pt";

export const pediatricianWebsiteEn = {
  lang: "en",
  group: "pediatrician-website",
  slug: "pediatrician-website-design",
  title: "Pediatrician website design",
  heading: "Pediatrician website design: built for a parent holding a sick child in one arm",
  excerpt:
    "Websites for pediatric practices and children's clinics: a first screen that answers a worried parent in seconds, pages arranged by the child's age, a vaccination section that informs without arguing, and clear rules for children's photographs. Design included, from €2,000.",
  seo: {
    metaTitle: "Pediatrician Website Design and Development, from €2,000",
    metaDescription:
      "Websites for pediatric practices: a first screen for a worried parent, pages by the child's age, a vaccination section, consent for photos. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Pediatric practices and clinics", "From €2,000", "Answer within 1 working day"],
  heroPhonePoints: ["Open until 21:00 today", "Home visits", "Vaccination schedule", "Call now"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Website for a pediatric practice: age-based structure, doctors, vaccination section, design included", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one pediatric service or an annual observation plan", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of a children's clinic website with rankings kept", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I build",
      title: "What a pediatrician website build covers",
      items: [
        { _key: k("o"), iconName: "phone", title: "A first screen for a worried parent", text: "Hours today, phone, what to do now" },
        { _key: k("o"), iconName: "users", title: "Navigation by the child's age", text: "Newborn, infant, toddler, school age" },
        { _key: k("o"), iconName: "shield-check", title: "A vaccination section", text: "Schedule and your position, stated once" },
        { _key: k("o"), iconName: "calendar", title: "Observation plans and prices", text: "What a year of care actually includes" },
        { _key: k("o"), iconName: "camera", title: "Photo rules that hold", text: "Written consent before a child is shown" },
        { _key: k("o"), iconName: "map-pin", title: "Out-of-hours and home visits", text: "The two facts parents look for first" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Who opens a pediatrician website, and in what state"),
        p("I design and build websites for pediatric practices and children's clinics, and design comes with the build rather than on a separate invoice. The design brief here is unusual and it is worth stating plainly: a large share of your visitors arrive at night, one-handed, with a child who is crying, and they are frightened. They are not browsing. They want three things in the first five seconds — whether you are open now, what the phone number is, and whether this can wait until morning."),
        p("Almost every pediatric site fails that moment in the same way: the first screen carries a photograph of a smiling family and a slogan about care, the hours are three clicks away inside a page called Contact, and the phone number is an image. The fix costs nothing in design quality and everything in outcomes: today's hours as text that changes itself, a phone number that dials on one tap, and a short block about what to do outside working hours."),

        h2("Pages arranged by the child's age, not by medical specialty"),
        p("A general clinic site is organised by specialty, because that is how a clinic is organised. Parents do not search that way. They search by age and by what they are seeing: a newborn's jaundice, a two-month vaccination, a toddler's fever at night, a school medical certificate, a teenager's check-up before sport."),
        p("So the structure follows the child's age, and inside each age the two or three questions parents actually bring. This is also the part that earns traffic, because an age-and-situation page matches a real query, while a page called Pediatrics matches nothing anyone types."),

        h2("The vaccination section: your most-read page and your most contested one"),
        p("Whatever your clinic's approach, vaccination pages draw more reading time than anything else on a pediatric site, and they are also where parents arrive already argued-at from elsewhere. Two decisions make this section work. First, publish the schedule as information a parent can follow — ages, intervals, what happens if a date is missed — rather than as persuasion. Second, state your practice's position once, plainly, in your own words, and link to it from every related page instead of re-arguing it each time."),
        p("What the page must not do is promise outcomes or diagnose. That is both a professional rule and a practical one: a parent who feels sold to leaves, and a page that makes claims is the one a regulator reads first."),

        h2("Which doctor will actually see the child"),
        p("Continuity matters more in paediatrics than almost anywhere else in medicine. Parents want to know the name of the doctor who will see their child, whether it will be the same person next time, and what happens when that person is away. A site that lists Our team with six faces and no answer to that question is answering a different question."),
        li("each doctor gets a page with their own schedule, languages spoken, and the ages they work with;"),
        li("booking says who the appointment is with, not only when it is;"),
        li("the page says plainly what happens if your doctor is unavailable, because that is the fear behind the question."),

        h2("Out-of-hours, home visits and the facts parents hunt for"),
        p("Two practical facts decide more pediatric enquiries than any design decision: whether you see children in the evening and at weekends, and whether a doctor comes to the home. If either is true for your practice, it belongs on the first screen and on its own page, with the area you cover and the cost. If neither is true, say what a parent should do instead at 2 a.m., and that honesty earns the daytime appointment."),

        h2("Photographs of children: consent before design"),
        p("A pediatric site is tempting to fill with photographs of children, and that is exactly where practices get into trouble. Every identifiable child needs documented permission from a parent, given for this use, and withdrawable. The build assumes that: the layout works with photographs of the premises, the team and the equipment, and children's images are an addition that can be swapped or removed without redrawing a page."),

        h2("Prices and annual observation plans stated in full"),
        p("Paediatrics sells two different things — a single visit and a year of care — and the second one is where parents compare hardest. An observation plan priced as a single number with no list underneath invites a phone call that your receptionist has to answer thirty times a day. A page that lists what a year includes, how many visits, which tests, what is extra and what happens if the family moves away answers it once."),

        h2("What a pediatrician website costs and how long it takes"),
        p(
          "A website for a practice starts at €2,000 with design included. A landing page for one service or one observation plan is €700–1,400. A redesign that keeps existing rankings starts at €1,000. A landing page takes two to three weeks, a full site four to six. What moves both the price and the schedule is how many doctors have pages, how many languages you need, and whether someone on your side can approve medical wording quickly. The figures are on the ",
          link("pricing", "/pricing"),
          " page, and the broader clinic version of this work is ",
          link("medical website design", "/medical-website-design"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites where trust and booking decide the outcome",
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
      title: "A quote for your pediatric practice website",
      subtitle: "I answer within one working day: what I would build, in which languages, and what it costs.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice?", options: ["A single pediatrician", "A children's clinic", "A clinic with a pediatric department", "Something else"] },
        { _key: k("z"), question: "Do you see children outside working hours?", options: ["Evenings and weekends", "Home visits too", "Daytime only", "Not decided yet"] },
        { _key: k("z"), question: "Do you sell annual observation plans?", options: ["Yes", "No", "We are planning to", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("A pediatric website that ChatGPT and AI overviews can read (GEO, AEO)"),
        p("Parents increasingly ask an assistant before they ask anyone else: a pediatrician who sees children in the evening, one who speaks their language, one who takes newborns. The assistant answers from text it can read. A practice whose hours live in an image, whose prices sit in a PDF and whose doctors are listed only as photographs is invisible to that question, and the assistant recommends the clinic down the road that wrote it all out."),
        p(
          "So hours, languages, ages, services and prices stay as text, structured data matches what is visible, and the practice name and address are identical on the site, in the maps profile and in the directories. Bringing an existing site to that state is ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Pediatrician website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a pediatrician website cost?", "From €2,000 with design included, €700–1,400 for a landing page covering one service or observation plan, from €1,000 for a redesign that keeps rankings. The number of doctors with their own pages, the number of languages and how fast medical wording gets approved move the figure."],
          ["Can I buy only the design?", "No. Design comes with the build and sits inside its price, because a layout nobody is committed to building is where the practical parts — hours as live text, one-tap dialling, accessible forms — quietly get cut."],
          ["What should be on the first screen of a pediatric website?", "Whether you are open now, the phone number as a tap target, and a short line about what to do outside working hours. A parent at 2 a.m. decides on those three and nothing else."],
          ["Should we publish a vaccination schedule?", "It is usually the most-read page on a pediatric site, so yes, as information a parent can follow — ages, intervals, what happens after a missed date — with your practice's position stated once in your own words rather than argued on every page."],
          ["Can we use photographs of our patients?", "Only with documented permission from a parent, given for that use and withdrawable. The build is designed to work without them: premises, team and equipment carry the page, and children's images can be added or removed without redrawing anything."],
          ["We do home visits. Where does that go?", "On the first screen and on its own page, with the area covered and the cost. Together with evening hours it decides more enquiries than any design choice on the site."],
          ["Do you work with medical practices?", "Yes, and the method accounts for it: wording that avoids promises, a review step before publishing, and forms that handle health data carefully rather than as an afterthought."],
          ["Will parents be able to book online?", "Yes, and the booking says who the appointment is with, not only when. In paediatrics the doctor's name is often the reason the appointment happens at all."],
          ["Can you redesign our site without losing search traffic?", "Yes. Every existing address is mapped, every changed one redirected, and the pages that already bring parents keep their text rather than being rewritten for the sake of a new look."],
          ["Who owns the site?", "You do: the code, the domain, the hosting account, the content and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ordering a pediatric practice website: what to send me"),
        p("Tell me how many doctors will have pages, whether you see children in the evening or at home, whether you sell annual observation plans, which languages your families speak and who approves medical wording on your side. Send the current website link if there is one. I answer within one working day with what I would build and what it costs."),
      ],
    },
  ],
};
