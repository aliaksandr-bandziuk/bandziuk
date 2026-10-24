// Landing page fixture: Veterinary SEO (EN), group «veterinary-seo».
// Semantic core: ref/veterinary.csv + veterinary.md, SEO group: veterinary seo
// 210, seo veterinary 210, seo for veterinary 170, seo for veterinarians 170,
// seo vet 170, veterinary seo services 40, veterinary seo company 30, vet seo
// 30, seo for veterinary practices 10, veterinary practice seo 10, veterinary
// website seo 10, best seo for veterinarians 10.
// PAA used: How much does an SEO service cost? Can a beginner do SEO?
// Intent: ref/intent-check-veterinary.md — «veterinary seo» vs «local seo for
// veterinarians» 0 shared URLs (1 shared domain), but local volume is tiny →
// one H2 here, not a page; vs «veterinary marketing» 0 shared URLs, SERP of
// marketing agencies, IDEXX, AVMA, Vetstoria, PetDesk → different intent,
// mentioned only to say I do the SEO part; vs «healthcare seo» 0 shared → human
// medicine stays on /healthcare-seo and /medical-seo.
// NOT on this page: veterinary marketing 480 / marketing for veterinary 480 /
// vet marketing 260 (not targeted, other intent); building the clinic site
// (/veterinary-clinic-website); design (/veterinary-website-design);
// «veterinary website», «vet clinic website» (pet owners looking for a clinic,
// not targeted); brands and navigational queries (veterinary partner, vca vet,
// petvet clinic, vca animal hospital locations) — not targeted.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const veterinarySeoEn = {
  lang: "en",
  group: "veterinary-seo",
  slug: "veterinary-seo",
  title: "Veterinary SEO",
  heading: "Veterinary SEO",
  excerpt:
    "I do veterinary SEO for independent clinics and animal hospitals: emergency and routine care pages, species pages, Google Maps and pet owner reviews, so the owner of a sick dog or a new kitten finds your practice before a corporate chain.",
  seo: {
    metaTitle: "SEO for Veterinarians and Vet Clinics | Bandziuk",
    metaDescription:
      "Veterinary SEO for clinics and animal hospitals: emergency and care pages, Google Maps, owner reviews and AI answers, measured in bookings. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Emergency + routine care pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Emergency vet near me", "Open now", "Book a wellness visit", "Dogs · Cats · Exotics"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Veterinary SEO audit: clinic website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off veterinary SEO work: emergency, care and species pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a veterinary clinic or animal hospital", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with veterinary SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "What pet owners search in your area", text: "Emergency, care and species searches, with volumes" },
        { _key: k("o"), iconName: "phone", title: "Emergency and after-hours pages", text: "Open now, what to do on the way, the number to call" },
        { _key: k("o"), iconName: "layers", title: "Routine care and species pages", text: "Vaccinations, spay/neuter, dental, wellness plans, exotics" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for your clinic", text: "Veterinarian or Animal hospital category, real hours" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Facts about your vets and services assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Bookings from search, reported", text: "Calls and online appointments, not positions alone" },
      ],
      prices: [
        { _key: k("r"), label: "Veterinary SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a veterinary clinic", value: "from 800 € / month", note: "pages, map, reviews, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service websites I have optimized",
      subtitle:
        "None of these are veterinary clinics. They are the closest work I have: an auto repair shop and a wheel-repair workshop that live on local searches and bookings, a tyre storage page built around one action, and multilingual sites where the same methods brought measurable search traffic.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your veterinary clinic",
      subtitle: "I reply within one business day with what I would fix first on your clinic website and Google profile, and a fixed price.",
      contextLabel: "Clinic name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice do you run?", options: ["General practice", "Animal hospital with emergency care", "Exotics or specialist practice", "Several locations"] },
        { _key: k("z"), question: "Which visits do you want more of?", options: ["New clients for wellness care", "Dental and surgery", "Emergency and after-hours", "Exotic pets"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do veterinary SEO for independent clinics and animal hospitals myself — the clinic website, the Google Business Profile and the search data behind them — so the person who finds the problems is the one who fixes them. SEO for veterinarians is judged by booked appointments: the new puppy owner who books a vaccination series, the cat owner who chooses you for a dental, the call at 11 p.m. about a dog that ate chocolate."),

        h2("Veterinary SEO for emergency searches: “emergency vet near me” and 24/7 care"),
        p("A large share of veterinary searches is made in fear, on a phone, often at night. The phrases are short:"),
        li("“emergency vet near me”, “24 hour vet”, “vet open now”"),
        li("“dog ate chocolate”, “cat not eating”, “dog hit by car”"),
        li("“after hours vet” with the name of a town"),
        p("These searches show the map first, and Google checks the opening hours in your profile against the time of the search. If you are an emergency hospital, the website needs one page that says so in the first line, shows the phone number as a button, gives the address with a directions link and tells the owner what to do on the way. If you are not open at night, the page says who you refer to after hours. That is honest, and it still keeps your clinic in the owner’s mind for the follow-up visit."),

        h2("Routine care pages in SEO for veterinarians: vaccinations, spay/neuter, dental and wellness plans"),
        p("Planned care is searched calmly, and the owner compares two or three clinics. Each service with its own demand needs its own page:"),
        h3("Vaccination pages for puppies, kittens and adult pets"),
        p("Owners search for “puppy shots”, “kitten vaccination schedule” and “rabies vaccine near me”. The page lists which vaccines you give, at what age the visits fall, and how to book the series."),
        h3("Spay and neuter pages"),
        p("Questions here are about age, recovery and cost. The page explains what happens on the day, how long the pet stays, what aftercare looks like and what the price includes."),
        h3("Pet dental care pages"),
        p("“Dog teeth cleaning cost” and “cat dental” are common searches. The page describes anesthesia, dental X-rays and extractions in plain words, without promising outcomes."),
        h3("Wellness plan pages"),
        p("If you sell monthly wellness plans, a page per plan with what is included and the monthly price turns a comparison search into a sign-up."),

        h2("Species pages in veterinary SEO: dogs, cats and exotic pets"),
        p("“Cat friendly vet”, “rabbit vet near me”, “avian vet” and “reptile vet” are searches that general pages do not answer. Many owners of rabbits, birds, reptiles or small mammals drive past three clinics to reach one that sees their animal. If your team treats exotics, a page for each group you see — with the vet who handles them and the services offered — is often the fastest way to rank, because few local competitors have one. A cat-only waiting area or a fear-free approach is worth a page too, since owners search for it."),

        h2("Local SEO for veterinarians: Google Business Profile, categories and the map"),
        p("For most clinics the map brings more calls than the website. The profile needs a primary category of “Veterinarian” or “Animal hospital”, whichever describes you better, with hours that are kept up to date, holiday hours included. Add the services you offer, real photos of the clinic and team, and an appointment link that goes to your booking page rather than the home page. Clinics with several locations get one profile per location, each linked to its own page on the site. Name, address and phone must be the same on the site, the profile and directories."),

        h2("Pet owner reviews in SEO for veterinary clinics"),
        p("Pet owners read reviews closely, and reviews also move a clinic up the map. A steady routine works best: the client gets a text with a direct review link after the visit, every review gets a reply within days, and replies never confirm medical details about the pet. Negative reviews after a lost patient are part of veterinary work; a calm, private follow-up does more than an argument in public. Bought reviews and asking only happy clients break Google’s rules, so neither is used."),

        h2("Online booking and reminders in veterinary SEO: PetDesk, Vetstoria and the clinic site"),
        p("Many clinics already use an online booking or client communication tool such as PetDesk or Vetstoria, connected to their practice-management software. For SEO it matters where booking sits: a link from the profile, a button on every care page and a widget that does not slow the page. Reminders for vaccines and annual checks bring clients back without search, so the website’s job is to win the first visit. I also set up tracking so organic search appears as its own source of bookings."),

        h2("Pet health articles and YMYL: content reviewed by a veterinarian"),
        p("Articles about symptoms, toxic foods, medication or post-surgery care touch the health and safety of animals, and Google’s quality guidelines hold this kind of content to a higher standard. Pages of this type should:"),
        li("name the veterinarian who wrote or reviewed them, with their degree and a link to their profile on your team page"),
        li("show the date of the last review and be checked again when advice changes"),
        li("tell the owner to call the clinic, not treat the pet from the article"),
        p("This is not medical advice on the website’s part; it is a clear route from a worried search to your phone. A small library of reviewed answers to the questions your front desk hears every day is often the best content a clinic can publish."),

        h2("SEO for independent veterinary practices competing with VCA, Banfield and other corporate groups"),
        p("Corporate groups such as VCA or Banfield have strong brands, hundreds of location pages and budgets to match. An independent practice wins on what a template location page cannot show: the names and faces of its vets, how long they have served the town, the species and services they really handle, and reviews that mention them by name. Detailed care pages, a real team page and a well-kept profile let a single clinic outrank a chain location for its own neighborhood."),

        h2("Veterinary SEO and AI search: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Pet owners now ask ChatGPT, Perplexity or Google’s AI Overviews “which vet near me treats rabbits” or “is it an emergency if my dog is vomiting” before they open any website. Getting a clinic into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a veterinary practice it means:"),
        li("services, species, hours, emergency policy and the vets’ credentials written as plain text an assistant can quote"),
        li("structured data marking the business as a veterinary care provider, with its services and locations"),
        li("reviewed answers to common owner questions on your own pages"),
        li("the same clinic details on Google, Yelp and other listings, which assistants cross-check"),
        p(
          "I check how assistants describe your clinic before the work and again after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Veterinary SEO services or a veterinary marketing agency: which part I do"),
        p("Veterinary marketing agencies usually sell a package: ads, social media, email, sometimes a website on their own platform, with SEO as one part. I do the SEO part only, as a single specialist who also builds websites. I do not run ads or social media accounts, but I make sure the pages your ads point to are the ones that rank. If the site itself needs work, the ",
          link("veterinary clinic website", "/veterinary-clinic-website"),
          " page describes how I build one, and ",
          link("veterinary website design", "/veterinary-website-design"),
          " covers the design side. Whoever you hire, ask who owns the website and profile, and whether reports show bookings or only positions.",
        ),

        h2("How much veterinary SEO services cost"),
        li("SEO audit of the clinic website and Google Business Profile: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off veterinary SEO work — emergency, care and species pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a veterinary clinic — new pages, map and reviews, AI visibility and reporting on bookings: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "A single-location clinic in a mid-sized town often gets most of the result from the audit and a handful of strong pages. SEO for clinics that treat people is a different market, covered on the ",
          link("medical SEO", "/medical-seo"),
          " page. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Veterinary SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does veterinary SEO cost?", "An audit of the clinic website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. After a short description of the clinic and its area I give a fixed price."],
          ["How long does SEO for a veterinary clinic take?", "Fixes to the Google profile, hours and categories can show on the map within weeks. New care and species pages usually take two to four months to rank, longer in large cities where corporate groups have many locations."],
          ["What is local SEO for veterinarians?", "It is the part of SEO that decides whether your clinic appears on the map for searches like “vet near me”: the Google Business Profile with the right category and hours, reviews, photos and consistent listings. It works together with the website, which supplies the pages the profile links to."],
          ["Can a beginner do SEO for a vet clinic?", "Some of it. Keeping hours and holiday hours correct, adding photos and asking every client for a review takes minutes a week. Keyword research, page structure, structured data and tracking are where most clinics save time by handing the work over."],
          ["Should a veterinarian review the articles on our website?", "Yes. Content about pet health is held to a higher standard, and owners act on it. Each article should name the vet who wrote or reviewed it, show the review date and send the owner to the clinic rather than replace a visit."],
          ["Can an independent clinic outrank VCA or Banfield?", "For its own neighborhood, often yes. Chains win on brand; an independent wins with detailed care and species pages, a real team page, a well-kept map profile and reviews that name its vets."],
          ["Do you run veterinary marketing — ads and social media?", "No. I do SEO and build websites. Ads, social media and email campaigns are best handled by a marketing agency or your own team; I make sure the pages they send people to rank and convert."],
          ["Do you work with veterinary clinics outside Poland?", "Yes. Veterinary SEO is done remotely — the website, the profile and the search data for your area — for clinics in the US, Canada, the UK, Australia and Europe. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your veterinary clinic: what to send me"),
        p(
          "Send the clinic name, the website and Google Maps links, whether you take emergencies, the species you treat and the visits you want more of — wellness, dental, surgery, exotics. If you use PetDesk, Vetstoria or another booking tool, say which. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
