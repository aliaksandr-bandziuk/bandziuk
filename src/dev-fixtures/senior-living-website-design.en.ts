// Landing page fixture: Senior living and assisted living website design (EN),
// group «senior-living-website-design». New page, batch B (medical practices).
// Semantic core: ref/medical-practices.md, group «senior living»: assisted
// living website design 90 (metaTitle, H2s, FAQ) · senior living website
// design (no own volume in the core; same page by intent — H1, H2s). Both
// terms are used in headings, as the brief requires.
// Intent: ref/intent-check-medical-practices.md — «assisted living website
// design» vs «senior living website design» 1 of 10 shared URLs
// (craftandcommunicate.com, designing functional websites for seniors), 2
// shared domains → one design page for both. SERP: dribbble, sixthcitymarketing,
// anytimedigitalmarketing, bildandco, cyberoptik, illuminage, seniorlivingsites,
// straightnorth, seniorlivingsmart, webflow, visiondesign, ccrgrowth → design
// studios, senior-living vendors, galleries: operators’ demand. «senior living
// seo» vs «assisted living website design» 0 shared URLs → SEO is
// /senior-living-seo (sibling, linked).
// Angles: two readers (adult child and future resident); a page per level of
// care; real photos, video tours and floor plans; resident photo consent;
// starting prices and what they include (layout); tour booking and
// privacy-safe forms (HIPAA in general terms); WCAG for older readers; staff
// and state licensing information; operators with several communities;
// vendor platforms and builders vs custom; redesign without losing URLs
// (Giuseppe migration); AI-readable build. NDA medical system mentioned once.
// NOT on this page: keyword research, Google Business Profile work, referral
// services vs own leads, review routine, cost-search SEO, tracking
// (/senior-living-seo); clinics and practices (/medical-website-design).
// Owner’s rules: every page covers AI search; Giuseppe is the main case;
// never say there are no clients from the visitor’s industry.
import { p, h2, li, ol, link, k } from "./pt";

export const seniorLivingWebsiteDesignEn = {
  lang: "en",
  group: "senior-living-website-design",
  slug: "senior-living-website-design",
  title: "Senior living website design",
  heading: "Senior Living and Assisted Living Website Design",
  excerpt:
    "I design and build senior living and assisted living websites for communities and operators: a page for each level of care, real photos and video tours, starting prices with what they include, tour booking in a few taps and large, high-contrast type that a daughter on her phone and her father on a tablet can both read.",
  seo: {
    metaTitle: "Assisted Living and Senior Living Websites | Bandziuk",
    metaDescription:
      "Senior living and assisted living website design: care-level pages, real photos and video tours, starting prices, tour booking, WCAG. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Schedule a tour", "Assisted living · Memory care", "Pricing starts at", "Call · Text"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple senior living community website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Assisted living website with care-level, pricing, staff and tour pages, CRM-ready forms and accessibility testing, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with senior living website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "One page per level of care", text: "Independent, assisted, memory care, respite" },
        { _key: k("o"), iconName: "image", title: "Real rooms and real days", text: "Photos, floor plans and a video walk-through" },
        { _key: k("o"), iconName: "file-text", title: "Starting prices with what they include", text: "Care levels, community fee, payment options" },
        { _key: k("o"), iconName: "phone", title: "Tour booking from every page", text: "Call, text or pick a time in a few taps" },
        { _key: k("o"), iconName: "gauge", title: "Large type and strong contrast", text: "Built to WCAG, quick on older phones" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Care levels, license and prices as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple senior living community website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Care levels, pricing, staff, tours, CRM-ready forms", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: a calm medical practice site and other websites I have designed and built",
      subtitle:
        "For Giuseppe, a psychotherapist in Milan, I designed and built a calm site for visitors who often arrive anxious: a private medical practice whose CMS warns the editor about wording his professional code forbids, three consulting rooms on a map, and all 468 old blog posts moved without losing a URL. Next to it: a Warsaw renovation and property-investment company with a premium design, Cyprus VIP Estates with a filtered property catalog, a map and video, a multilingual education agency site covering ten countries, and a landing page whose SEO texts the owner edits himself. A senior living website draws on the same skills: a calm tone, real places shown well and content your own staff can keep current.",
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your senior living website",
      subtitle: "I reply within one business day with a proposed structure for the home, care-level and pricing pages and a fixed price.",
      contextLabel: "Community name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How many communities does the site cover?", options: ["One community", "Two or three", "Four or more"] },
        { _key: k("z"), question: "How do families book a tour now?", options: ["By phone only", "A web form", "An online calendar", "Through referral services"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Senior living website design is my work for independent, assisted and memory care communities, and the person who draws the pages is the one who codes them, so nothing is lost between a designer and a developer. An assisted living website has two readers at once: an adult child comparing options on a phone between meetings, and a parent who may read the same page later on a tablet. The design has to serve both without talking down to either."),

        h2("Senior living website design for two readers: the adult child and the future resident"),
        p("The adult child arrives with a deadline and a list of questions: what care you offer, what it costs, whether an apartment is free, when they can visit. The future resident arrives with a different worry: whether this place will feel like home. The first screen answers the first list in plain words — “Assisted living and memory care in [town]”, a starting price, a tour button and a phone number — and the photography below it answers the second."),
        p("Menus follow the questions families ask, not your organization chart: Care, Living here, Pricing, Tours, Our team, Contact. Six items, a word or two each, readable without hovering."),

        h2("Assisted living website design by level of care: one page for each care type"),
        p("Independent living, assisted living, memory care and respite stays are different decisions, often made by different people. Each gets its own page with the same layout, so a family can compare them side by side: who it suits, what daily help is included, how needs are assessed and reassessed, which staff are on site day and night, the starting price and a tour button."),
        p("Memory care pages need the quietest design on the site, because the family reading them is often at the hardest point of the decision. Soft colors, short sentences and no countdown banners or “only two suites left” pressure. A plain description of the secured garden and the shape of the day does more than any slogan."),

        h2("Photos, video tours and floor plans on a senior living website"),
        p("Families judge a community by what they can see, and stock photos of smiling seniors are recognized at once. What works instead:"),
        li("real photos of apartments, bathrooms with grab bars, the dining room, the garden and activity spaces, in daylight and without heavy editing"),
        li("a floor plan for each apartment type with its size and an idea of what furniture fits"),
        li("a short video walk-through that a sibling in another state can watch before the tour"),
        li("this week’s menu and an activity calendar that your staff update themselves"),
        p("Photos of residents need their written consent, or the consent of the person legally entitled to give it; for memory care it is often wiser to show spaces and staff. Your attorney confirms the consent form."),

        h2("Pricing pages on an assisted living website: starting prices and what they include"),
        p("Pricing is the page families look for first and many community sites hide. The layout I use shows a starting monthly price for each level of care, then plain text rows: what the base price covers, how care levels add to it, any one-time community fee and the payment sources you accept. A short note on what moves the final price prepares the family for the assessment. Families who see a number they can manage book the tour with less hesitation; those who cannot save your sales team a long call."),

        h2("Tour booking and inquiry forms on a senior living website"),
        p("The tour is where families decide, so the tour button sits on every page, and on phones a fixed bar holds two actions: schedule a tour and call. Behind it is either a calendar with real free times or a short request form when your sales staff confirm by phone. A text-message option suits adult children who cannot take calls at work."),
        p("Forms ask for the family member’s name, contact details, the level of care being considered and a preferred time. They do not ask for diagnoses or medications; those belong in the assessment with your nurse. Health details about a parent are sensitive whether or not HIPAA applies to your community, so any form that must collect them runs through a provider built for it. Years ago I worked on a medical system holding patient records; it is covered by an NDA, so it stays unnamed, but it left me with a rule: a public website should hold as little health information as it possibly can. Where your CRM accepts web leads, each inquiry goes there with the page it came from."),

        h2("Accessible senior living website design: large type, contrast and WCAG"),
        p("Many residents, and some of their children, see less well, tap less precisely or use a screen reader. The design follows the WCAG guidelines from the first sketch:"),
        li("body text larger than on a typical site, with contrast that meets level AA"),
        li("buttons large enough to hit with an unsteady hand, with space between them"),
        li("no carousels that move by themselves and no text set inside images"),
        li("forms with visible labels, clear error messages and no time limits"),
        li("captions on videos and full keyboard navigation"),
        p("I test the result with automated tools and a screen reader; your obligations under accessibility law are a question for your attorney."),

        h2("Staff, license and inspection information on an assisted living website"),
        p("Trust in a community is trust in its people. A team page with real portraits and a few lines from the people families will actually meet — the community’s director, the nurse in charge, the life enrichment lead — answers the question families ask on every tour: who will look after my mother. Your state license type and number appear as text in the footer and on the care pages, and where your state publishes inspection reports online, a link to its lookup shows families you are comfortable being checked."),

        h2("Websites for senior living operators with several communities"),
        p("An operator with several communities needs one design system and a full section per community: its own address, photos, care levels, prices, team and tour calendar. Families search for a town, not for your company name, so a community page has to make sense on its own when someone lands on it from Maps. Shared content — care philosophy, careers, company history — lives once at the brand level and links down to each community."),

        h2("A senior living website that ChatGPT and Google AI Overviews can read"),
        p("Adult children ask ChatGPT, Perplexity and Google’s AI Overviews to shortlist communities near a parent, with a memory care wing and within a budget. Assistants can recommend only what they can read. The design keeps the facts as text and structured data — levels of care, license, apartment types, starting prices, visiting hours, address — and in agreement with your Google Business Profile. Giuseppe’s site in Milan is built this way, and his new pages already appear in ChatGPT answers."),
        p(
          "Earning a place in those answers takes continuing work — see the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          "; ranking in Google for your town and care levels is the subject of ",
          link("senior living SEO", "/senior-living-seo"),
          ".",
        ),

        h2("Senior living website templates and vendor platforms vs a custom design"),
        p("Several companies sell ready-made senior living websites on their own platform, and a builder like Wix or Webflow can produce a decent page in a day. For one small community with one level of care that can be enough. The limits show as you grow: one generic layout for every care type, pricing that cannot be shown the way you sell, a tour form that never reaches your CRM and a site you cannot take with you when the contract ends. A custom design is built around how you present care, prices and tours, and the code, content and domain stay yours."),
        p(
          "If your current site already has pages that rank, a redesign keeps every address or redirects it, the way all 468 blog posts on Giuseppe’s site kept their old URLs. The ",
          link("website redesign", "/services/website-redesign-services"),
          " page explains the process.",
        ),

        h2("How the senior living website design process works"),
        ol("Brief. You send levels of care, apartment types, prices, team, license details and the questions families ask on tours."),
        ol("Family paths. We agree three routes on a phone screen: schedule a tour, see prices, compare care levels."),
        ol("Design. I draw three key screens in full — home, one care level, pricing — and every other page reuses their parts."),
        ol("Launch. Tour booking and CRM forms go live after accessibility tests, and your staff get a short guide to updating menus, events and prices."),
        p(
          "My general approach to building sites is on the ",
          link("website development", "/services/website-development"),
          " page; clinics and medical practices have a separate page on ",
          link("medical website design", "/medical-website-design"),
          ".",
        ),

        h2("How much assisted living website design costs"),
        p("There is no separate design fee: one price covers drawing the pages and building them."),
        li("A simple senior living community website — home, care levels, pricing, team, contact and a tour button: 700–1,400 €."),
        li("An assisted living website with care-level, pricing, staff and tour pages, community sections for operators, CRM-ready forms and accessibility testing: from 2,000 €."),
        p(
          "Send a short description of your community and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Senior living website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does assisted living website design cost?", "Design is included in the price of the site: 700–1,400 € for a simple community website, from 2,000 € for a site with care-level, pricing, staff and tour pages, operator sections and accessibility testing. After a short description I give a fixed quote."],
          ["How long does it take to build a senior living website?", "You see the phone screens for the home, care-level and pricing pages within about two weeks of the brief. A single-community site is usually live four to six weeks after the brief; photo shoots and text approvals are what most often stretch that."],
          ["Can the tour form send inquiries to our CRM?", "Yes, if your senior living CRM accepts web leads through a form integration, an email parser or an API — most do. Each inquiry arrives with the page it came from."],
          ["Can we show photos of our residents?", "Only with written consent from the resident or the person legally entitled to give it. For memory care, photos of spaces, meals and staff are usually the safer choice. Your attorney confirms the consent form."],
          ["Should an assisted living website show prices?", "A starting price per level of care, with a list of what it includes and what adds to it, answers the first question families have. The final price can still depend on the care assessment, and the page says so."],
          ["Can you redesign our site without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and structured data is carried over before launch, so the positions the site already has are kept."],
          ["Do you work with US senior living communities from Poland?", "Yes. All design reviews happen over video and shared links, in English. Poland’s working afternoon falls on the American morning, so we can talk while your office is open. Invoices are issued in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order senior living website design: what to send me"),
        p(
          "Tell me which communities the site covers, link the current site or Google listing, list your care levels and apartment types, and say how tours are booked today. Add a few phone snapshots of an apartment, the dining room and the garden — they let me sketch a first screen in your colors and light. My reply is a draft layout plus a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
