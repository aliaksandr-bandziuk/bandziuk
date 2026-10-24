// Landing page fixture: Veterinary website design (EN), group
// «veterinary-website-design».
// Semantic core: ref/veterinary.csv + veterinary.md, website/design group:
// veterinary website designs 140, veterinary website design 110, veterinary
// websites design 110, best veterinary websites 50, best veterinary website
// 50, veterinary website template 30, veterinary website templates 30,
// veterinary website design companies 20, best veterinary website design 10,
// veterinary clinic website design 10, vet clinic website design 10,
// veterinary clinic website templates 10, veterinary website templates free 10.
// Related: Veterinary website design template, Free veterinary website
// design, Veterinary website design companies, Best veterinary websites, Pet
// Clinic website templates.
// Intent: ref/intent-check-veterinary.md — «veterinary website design» top-10:
// petdesk, colorlib, youtube, imatrix, dvm360, beyondindigopets, vetweb.uk,
// vetmarketingservices → templates and vendors. 0 shared URLs with «veterinary
// website» (pet owners and associations), with «vet clinic website» (clinic
// home pages) and with «medical website design» → own page, separate from
// human medicine.
// This page = what the visitor sees and does: emergency vs routine path, warm
// but clear design, team and pet photos with owner consent, species sections,
// booking, pharmacy and food ordering placement, pricing, accessibility,
// mobile, best-site patterns, templates vs custom, choosing a company.
// NOT on this page: structure, integrations with practice-management
// software, hosting, speed, ownership (/veterinary-clinic-website); SEO
// (/veterinary-seo); «veterinary website», «vet clinic website» and named
// clinics or brands — not targeted.
// Owner's rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const veterinaryWebsiteDesignEn = {
  lang: "en",
  group: "veterinary-website-design",
  slug: "veterinary-website-design",
  title: "Veterinary website design",
  heading: "Veterinary Website Design",
  excerpt:
    "I design and build veterinary websites for clinics and animal hospitals: a separate emergency path, a calm route to booking routine care, real photos of your team and patients, and species sections owners find in one tap.",
  seo: {
    metaTitle: "Website Design for Veterinary Clinics | Bandziuk",
    metaDescription:
      "Veterinary website design for clinics and animal hospitals: an emergency path, warm but clear layouts, real team and pet photos, booking up front. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Emergency? Call now", "Book an appointment", "Dogs · Cats · Exotics", "Meet our vets"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple veterinary clinic website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Veterinary website with emergency, care and species pages, online booking and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with veterinary website design",
      items: [
        { _key: k("o"), iconName: "phone", title: "An emergency path that is never more than one tap away", text: "Hours, phone and directions, or where to go after hours" },
        { _key: k("o"), iconName: "message-circle", title: "A calm route to routine care", text: "Book a wellness visit, vaccination or dental check" },
        { _key: k("o"), iconName: "image", title: "Your team and your patients, with consent", text: "A shot list and a simple photo consent for owners" },
        { _key: k("o"), iconName: "layers", title: "Species sections owners find at once", text: "Dogs, cats and exotics, each with its own page" },
        { _key: k("o"), iconName: "file-text", title: "Prices and plans set out clearly", text: "Exam fees, vaccine visits and wellness plans" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Hours, vets and services as text, not images" },
      ],
      prices: [
        { _key: k("r"), label: "Simple veterinary clinic website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Emergency, care and species pages, booking, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: local-service and multilingual websites I have designed",
      subtitle:
        "No veterinary clinics among them — these are the nearest projects: a car repair shop and a wheel-repair workshop whose customers book or call, a tyre storage page built around one action, and two sites where real photos carry the design.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your veterinary website design",
      subtitle: "I reply within one business day with a proposed first screen, an emergency page and a routine care page, and a fixed price.",
      contextLabel: "Clinic name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Do you see emergencies?", options: ["Yes, 24/7", "During opening hours only", "No, we refer them"] },
        { _key: k("z"), question: "Which species do you treat?", options: ["Dogs and cats", "Dogs, cats and exotics", "Mostly exotics", "Also horses or farm animals"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design veterinary websites for clinics and animal hospitals and build them myself, so design and build come from one person at one price. Veterinary website design is about what a pet owner sees and does in the first seconds — sometimes calmly booking a puppy’s first shots, sometimes holding a phone in one hand and a bleeding dog in the other. Every page is laid out so that each of those owners finds their action without reading what is meant for the other."),

        h2("Veterinary website design for two paths: the emergency and the routine visit"),
        p("The same site is opened by two very different people. One has a pet that ate something toxic, was hit by a car or cannot breathe properly. This person scans for a phone number, whether you are open now and how to get there. The other wants a vaccination, a spay appointment or a dental check and is comparing clinics on the team, the prices and how the place looks."),
        p("The design keeps the two paths apart:"),
        li("the emergency path is one clearly marked button — “Emergency? Call now” — that leads to the phone, the address with directions and two or three things to do on the way"),
        li("if you do not see emergencies, or not at night, the same place says where to go instead and when you open"),
        li("the routine path is a calmer “Book an appointment” button that leads to booking, never to the emergency page"),
        li("the two buttons look different, so nobody has to think which one is theirs"),

        h2("Mobile veterinary website design: what the first screen shows on a phone"),
        p("Most owners open a clinic site on a phone. The first screen carries four things and nothing else:"),
        li("what you are and where: “Veterinary clinic for dogs, cats and exotics in [your town]”"),
        li("today’s opening hours and whether you are open now"),
        li("the emergency button and the booking button"),
        li("one real photo of your team or clinic"),
        p("Sliders, slogans and welcome letters move further down or go. The call and booking buttons stay fixed at the bottom of the phone screen on every page, within reach of the thumb. On a desktop the phone number and hours sit in the top right of the header, where people look for them."),

        h2("Warm but clear veterinary website designs: color, type and accessibility"),
        p("Veterinary website designs often lean on paw prints, cartoon animals and pastel colors. Warmth is right for a place people trust with a family member, but it must not get in the way of reading. The design aims for warm and clear at once:"),
        li("a calm palette with one strong color kept only for the emergency button"),
        li("body text at 16 pixels or larger, short headings and one idea per paragraph"),
        li("contrast between text and background that meets the WCAG accessibility guidelines, since many clients are older owners"),
        li("form fields with visible labels, large tap targets and alt text on every photo"),
        li("decoration kept to the edges: a paw icon in a corner does no harm, a paw pattern behind text does"),
        p("Your logo and clinic colors carry the brand; the emergency color is chosen for visibility first."),

        h2("Real team and pet photos in veterinary website design, with owner consent"),
        p("A stock photo of a smiling model holding a golden retriever is recognized at once and says nothing about your clinic. Owners want to see the vets and nurses who will handle their animal, the waiting room, the consulting rooms and real patients. Those photos also help a nervous owner recognize the person who comes out to the waiting room."),
        p("Patient photos need the owner’s permission. A short consent line on the intake form, or a simple form at the desk, covers it; the pet’s name is shown only if the owner agrees. Surgery and injury photos stay off the public pages. Phone photos in daylight are enough; I give your team a short shot list: each vet and nurse, the building from the street, the rooms, and a few calm patients."),

        h2("Species sections in veterinary website design: dogs, cats and exotic pets"),
        p("A rabbit owner and a cat owner look for different signs that a clinic is right for them. Species sections let each one go straight to their animal:"),
        li("a clear “Dogs · Cats · Exotics” choice near the top of the home page, as text, with simple icons"),
        li("a page for each species with the services you offer for it and the vet who leads that work"),
        li("for cats, a note on a separate waiting area or a calmer approach if you have one"),
        li("for exotics, the list of animals you really see — rabbits, birds, reptiles, small mammals — so owners do not need to call to ask"),

        h2("Where online booking, pharmacy and food ordering go in a veterinary website design"),
        p("Most clinics use an online booking or client communication tool, such as PetDesk or Vetstoria, and many offer an online pharmacy or prescription food ordering through a partner. These help only if owners see them when they need them:"),
        li("booking as the second button in the fixed bar on phones and at the end of every routine care page"),
        li("never on the emergency page, where it would suggest that a poisoned dog can wait for a slot"),
        li("pharmacy and food ordering in the header menu and on the page for existing clients, not on the first screen for new ones"),
        li("each external tool styled to match the site as far as it allows, with a line saying where the owner is going"),
        p(
          "How the site is structured, connected to your practice-management and booking software, hosted and kept fast is covered on the ",
          link("veterinary clinic website", "/veterinary-clinic-website"),
          " page.",
        ),

        h2("Pricing transparency on veterinary websites: exam fees, vaccines and wellness plans"),
        p("Cost is one of the main reasons owners delay a visit. A clinic does not need to publish its full fee schedule, but a page or a section that shows the exam fee, the price of a vaccination visit, a range for spay and neuter, and the monthly price of each wellness plan answers the first question before the phone rings. Where a price depends on weight or tests, say what it depends on. If an emergency exam has a separate fee, it belongs on the emergency page, stated calmly."),

        h2("What the best veterinary websites have in common"),
        p("Lists of the best veterinary websites mix large hospital groups with single clinics. The decisions that make the good ones work fit any practice:"),
        li("one sentence on the first screen saying what the clinic is and where"),
        li("an emergency path and a booking path that never get mixed up"),
        li("real photos of the team and patients, and a page for each vet"),
        li("a page for each main service and each species"),
        li("hours, address and prices that can be read, not guessed"),
        li("a site that reads as easily on an older phone as on a new one"),

        h2("Veterinary website design templates vs custom design"),
        p("A veterinary website design template, free or paid, looks good in the demo: perfect photos of puppies, invented reviews, a neat services grid. Collections of pet clinic website templates show many of them. With a real clinic’s content the gaps appear — no separate emergency path, one page for all services, nothing for species, a contact form instead of booking. Free veterinary website design offers from builders work the same way: the design is free, the decisions are left to you."),
        p("A template is a fair start for a small new practice. A custom design is worth it when you see emergencies, treat several species, run more than one location or want new clients from search. Moving off a template later usually means designing from the beginning."),

        h2("Choosing a veterinary website design company"),
        p("Veterinary website design companies range from vendors that bundle a website with their booking or communication product, to agencies that build vet sites from one template, to single designers and developers like me. Questions to ask any of them:"),
        li("Who owns the website, the domain and the content if we stop working together?"),
        li("Can we change the layout of the emergency and booking paths, or only the colors?"),
        li("Will the site use our photos and our vets, or the vendor’s stock library?"),
        li("Who updates opening hours and prices, and how fast?"),
        p(
          "My process: you send services, hours, species and photos; I design the first screen, an emergency page and a routine care page on a phone screen; we agree them; the rest of the site follows the same system and is built by me. If you already have a site and want a new design without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses and redirects in place.",
        ),

        h2("A veterinary website that ChatGPT and Google AI Overviews can read"),
        p("More owners ask ChatGPT, Perplexity or Google’s AI Overviews to suggest a vet nearby or to say whether a symptom is urgent. Assistants work from text, not pictures. A design that keeps hours, species, prices and the vets’ credentials inside images hides them; the same facts set as real text, with structured data for the clinic, its services and its vets, can be read and repeated."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google search and on the map is covered on the ",
          link("veterinary SEO", "/veterinary-seo"),
          " page.",
        ),

        h2("How much veterinary website design costs"),
        p("Design is part of building the site, and the price covers both."),
        li("A simple veterinary clinic website: 700–1,400 €."),
        li("A veterinary website with emergency, routine care and species pages, online booking, pricing and local search optimization: from 2,000 €."),
        p(
          "Send a short description of the clinic, the species you treat and whether you see emergencies, and I will prepare a fixed quote. Clinics that treat people will find their version on the ",
          link("medical website design", "/medical-website-design"),
          " page; full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Veterinary website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does veterinary website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple veterinary clinic site, from 2,000 € for a site with emergency, care and species pages, online booking and local search optimization. After a short description of the clinic I give a fixed quote."],
          ["How long does a veterinary website design take?", "The phone layouts of the first screen, an emergency page and a routine care page are usually ready within one to two weeks of the brief. The whole site, designed and built, typically takes three to five weeks."],
          ["Can we use a veterinary website template instead?", "Yes, for a small practice starting out. A template becomes a limit once you need a separate emergency path, species pages and booking in the right places. Changing later usually means starting again."],
          ["Can we put photos of our patients on the website?", "Yes, with the owner’s permission. A consent line on the intake form or a short form at the desk is enough in most cases. Surgery and injury photos are best kept off public pages."],
          ["Should we publish our prices?", "Publishing the exam fee, vaccine visits, a spay and neuter range and wellness plan prices helps owners decide and cuts routine calls. You do not need to publish the full fee schedule."],
          ["Can the design work with PetDesk, Vetstoria or our booking tool?", "Yes. The booking button and widget are placed in the design where owners decide to book, and styled to match the site as far as the tool allows. The technical connection is part of the build."],
          ["Can you redesign our veterinary website without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and structured data is carried over before the new design goes live, so the positions the site already has are kept."],
          ["Do you work with veterinary clinics outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian, for clinics in the US, the UK, Europe and elsewhere. The site is set up for your country: phone formats, units and the review platforms your clients use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order veterinary website design: what to send me"),
        p(
          "Send the clinic name, a link to your current website or Google profile, your hours, whether you see emergencies, the species you treat and the services you want to show first. A few photos of your team and clinic help me show you a first screen that looks like your practice. If you use PetDesk, Vetstoria or another booking tool, say which. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
