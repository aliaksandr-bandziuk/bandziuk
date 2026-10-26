// Landing page fixture: Gym SEO (EN), group «gym-seo». New page.
// Semantic core: ref/creative-leisure.md, gyms / trainers group (US): gym seo
// 170 and seo gym 170 (one demand — H1, metaTitle, several H2, FAQ) · gym near
// me 1,830,000 and planet fitness 11,100,000 are members’ searches, used only
// as examples of what the map pack answers (local H2, franchise H2) · anytime
// fitness personal trainer cost per month 90 (members’ search, keyword list).
// Intent: ref/intent-check-creative-leisure.md — «gym seo» vs «gym website
// design» 0 of 10 shared URLs, 1 shared domain → SEO and website are separate
// pages; /fitness-studio-website is the sibling. «gym seo» SERP = gym software
// blogs (Glofox, Kilo, Gleantap, Gym Insight), agencies and Reddit → the
// searcher is the owner or manager of an independent gym or studio.
// Angles (BRIEF.md): «gym near me» and the local pack, class and program pages
// (HIIT, boxing, yoga, CrossFit-style), membership prices, trial passes,
// multiple locations, reviews, Instagram vs search, booking software (Mindbody,
// Glofox — general), franchises (Planet Fitness, Anytime Fitness) as
// competitors, AI answers, reporting in trials and memberships.
// NOT on this page: the website itself — first screen, schedule widget design,
// membership table layout, trial form, trainer page template, photos, speed,
// online sales (/fitness-studio-website — sibling); independent trainers’ own
// sites (/personal-trainer-website-design — linked once); map work in depth
// (/services/local-seo-services); paid ads and social media management.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings.
import { p, h2, li, link, k } from "./pt";

export const gymSeoEn = {
  lang: "en",
  group: "gym-seo",
  slug: "gym-seo",
  title: "Gym SEO",
  heading: "Gym SEO for Independent Gyms and Fitness Studios",
  excerpt:
    "I do gym SEO for independent gyms, boutique fitness studios and small multi-location clubs: the map pack for “gym near me”, a page for every class people search, membership and trial-pass pages that rank, reviews that name your coaches and a place in AI answers, measured in trials and new members.",
  seo: {
    metaTitle: "SEO for Gyms: Map Pack, Class Pages and AI | Bandziuk",
    metaDescription:
      "Gym SEO for independent clubs and studios: map pack, class and membership pages, trial passes, reviews, several locations and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Map pack, classes, memberships", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Gym near me · Open now", "Beginner boxing class", "7-day trial pass", "Named in AI Overviews"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Gym SEO audit: website, Google Business Profile, local competitors, booking setup and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off gym SEO work: class, membership, trial and location pages, profile clean-up, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a gym or fitness studio", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with gym SEO",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Map pack work for every location", text: "Categories, hours, amenities, fresh photos" },
        { _key: k("o"), iconName: "layers", title: "A page for each class people search", text: "HIIT, boxing, yoga, functional fitness" },
        { _key: k("o"), iconName: "file-text", title: "Membership and trial pages that rank", text: "Prices, terms and a pass people can claim" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews that name classes and coaches", text: "Asked at the right moment, always answered" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Hours, prices and amenities as plain text" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in trials and new members", text: "Lead source passed into your gym software" },
      ],
      prices: [
        { _key: k("r"), label: "Gym SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a gym or studio", value: "from 800 € / month", note: "map, class pages, reviews, AI, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Local SEO portfolio: service businesses whose sites I built and optimized",
      subtitle:
        "What these share with a gym: people find them by searching for a service, often with a place name, and the site has to turn that search into a call or a booking. A Warsaw auto repair shop got local SEO, a cleaned-up Google Maps listing, UX fixes and a page for every service. A psychotherapist in Milan got a page for each consulting room, and his new pages already show up in ChatGPT answers. After a WordPress rebuild that kept its design, ScanM2 — 3D laser scanning and BIM — has 29× the organic traffic and new leads every week. Cyprus VIP Estates, a property site in five languages with a map-based catalog, gets its SEO from me every month, and Felgilab, a Warsaw wheel-renovation workshop, has service and price pages on its new WordPress site.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your gym",
      subtitle: "Within one business day I send what I would start with — the map, class pages or membership pages — and a fixed price.",
      contextLabel: "Gym name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of gym do you run?", options: ["Independent or 24-hour gym", "Boutique class studio", "Boxing, martial arts or functional fitness", "Two or more locations"] },
        { _key: k("z"), question: "What should search bring you more of?", options: ["New memberships", "Trial and intro-offer sign-ups", "Class bookings", "Personal training clients"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Gym SEO is the work that puts your club in front of people nearby when they search for a gym, a class or a trial pass — in Google’s map pack, in the regular results and in AI assistants — and turns those searches into trial sign-ups and memberships. The work is mine from start to finish — I am one SEO consultant who also builds websites — and I take on independent gyms, boutique studios and small groups of clubs. Most members train within a short drive of home or work, so gym SEO is won neighborhood by neighborhood, not nationally."),

        h2("What gym SEO covers: “gym near me”, class searches and membership questions"),
        p("“Gym near me” is one of the most searched phrases in fitness, and Google answers it with a map before any website. Around it sits a long tail that says what the person actually wants. I start with search data for your town and your programs, and it usually falls into four groups:"),
        li("type and access — “24 hour gym”, “gym with sauna”, “women’s gym”, “powerlifting gym”"),
        li("classes — “spin class near me”, “kickboxing for beginners”, “hot yoga” plus your town"),
        li("price and commitment — “gym membership cost”, “gym no contract”, “gym day pass”, “free trial gym”"),
        li("people and services — “personal trainer at gym”, “kids jiu-jitsu”, “senior fitness classes”"),
        p(
          "Those searches end in four places: your Google Business Profile, your website, listings such as Yelp and ClassPass, and AI answers. Gym SEO keeps all four consistent and points each search at the page that answers it. Trainers who work for themselves, without a club, have a separate ",
          link("personal trainer website design", "/personal-trainer-website-design"),
          " page.",
        ),

        h2("Local SEO for gyms: the map pack and your Google Business Profile"),
        p("For a local search Google shows three businesses on a map, chosen by relevance, distance and prominence. Your building fixes the distance; relevance and prominence are work:"),
        li("a primary category that matches what you are — gym, fitness center, boxing gym, yoga studio, Pilates studio — and secondary ones only for what runs every week"),
        li("hours that match reality: staffed hours in the profile, 24/7 keycard access explained in the description and on the website"),
        li("services and amenities filled in, from childcare and parking to wheelchair access"),
        li("new photos of the floor, studios and locker rooms every month, and posts for challenges and schedule changes"),
        p(
          "Each profile links to the page for that location rather than the home page, with tracking, so calls and direction requests from the map are counted. Citations, categories and map work in more depth are on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Class and program pages in gym SEO: HIIT, boxing, yoga and functional fitness"),
        p("One “Classes” page listing twenty formats does not rank for any single one. Every program people search by name gets its own page, written around what a beginner wants to know: what a session looks like, which level it suits, how hard the first week is, what to bring, who coaches it and when it runs. A page for “beginner boxing class” that names your coach, shows your heavy bags and links to Tuesday’s 6 p.m. session beats a national fitness article for someone who lives ten minutes away."),
        p(
          "One naming detail: CrossFit is a registered trademark that only licensed affiliates may use. An affiliate can target “CrossFit” plus the town; a gym running similar workouts writes about functional fitness or strength and conditioning, which is also what many people type. How the class page template and the timetable look is a design question, covered on the ",
          link("gym website design", "/fitness-studio-website"),
          " page.",
        ),

        h2("Membership prices and trial passes: gym SEO for searches right before sign-up"),
        p("“How much is a gym membership”, “gym no annual fee”, “day pass near me”, “free week pass” — these come from people deciding this week. A club that hides prices behind “stop by for rates” loses many of them to clubs that answer. Gym SEO puts the answers on pages search engines can index:"),
        li("a membership page with real or “from” prices, enrollment and annual fees, contract length and how to cancel"),
        li("a trial or intro-offer page that says what the pass includes, how to claim it and whether a tour with a membership advisor is part of it"),
        li("a day-pass or drop-in page for travelers and people new to the area"),
        p("Demand follows the calendar: the January peak, a smaller rise in spring before summer and a restart in September. A new page needs weeks to climb, so January pages go live in October or November, not on New Year’s Eve."),

        h2("Gym SEO for multiple locations: a page and a profile for every club"),
        p("A club with three addresses and one “Locations” page gives Google one page for three different searches. Every location gets its own page: address, staffed hours, parking, the classes held there, the manager and coaches, photos of that room and its own reviews. Its Google profile links to that page. When clubs differ — one has a pool, another only a floor and a studio — the pages say so, which is exactly what a person choosing between them wants to read."),
        p("Pages for nearby neighborhoods without a club help only when they carry facts, such as drive times or classes that fit a lunch break; dozens of copies with the town name swapped are doorway pages that Google filters."),

        h2("Gym reviews in local SEO: members who mention classes and coaches"),
        p("Reviews are one of the signals behind the map pack and often the deciding factor between two gyms at the same distance. The most useful ones are specific — the 5:30 a.m. class, a coach’s name, spotless showers, a sign-up without pressure — because their words match what the next person searches for. A routine that fits a gym:"),
        li("ask after a good moment — a first month completed, a class milestone, a finished challenge — not at the front desk on day one"),
        li("send the review link by text or through your gym app, with no reward attached, since Google’s rules forbid incentives"),
        li("reply to every review, including complaints about billing or cancellation, with what was done about it"),

        h2("Instagram vs Google search for gyms: what each channel brings"),
        p("Many gyms put most of their marketing into Instagram, and it does something search cannot: it shows energy, community and coaches to people who already follow you. Someone who has just moved to the area, or decided today to start training, does not scroll Instagram to find a gym; they search Google or ask an assistant. Search catches existing demand, while a post fades from feeds in days and a class page can rank for years. The two work best linked: the profile link points to the trial page, not the home page, and reels are embedded on the class pages they show."),

        h2("Competing with Planet Fitness, Anytime Fitness and other franchises in local search"),
        p("Franchise clubs hold the generic searches through brand strength, a large national site and hundreds of reviews per location. An independent gym rarely outranks them for “gym near me” in every direction, and it does not need to. It wins the searches where it is different: classes the franchise does not run, coaching included in the dues, a turf lane, a recovery room, women-only hours, staff who know members by name. Pages that say this plainly, with prices and real photos, rank for those searches and give a person comparing clubs a reason to pay more."),

        h2("Gym booking software and SEO: Mindbody, Glofox and schedules Google can read"),
        p("Most gyms run classes, bookings and billing in software such as Mindbody, Glofox, Wodify or ClubReady. Two things matter for SEO. A schedule loaded inside an iframe or a script is often invisible to search engines and assistants, so the class list and regular class times also need to exist as text on your own pages. And some platforms run a consumer app or marketplace of their own — Mindbody does — where your classes appear next to other studios, so your own pages should be the stronger result for your gym’s name. I check what your setup shows to Google and pass the traffic source into the software, so each sign-up can be traced back to a page."),

        h2("Gym SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Future members also type questions into ChatGPT, Perplexity or Google’s AI Overviews: “which gyms in Austin have a pool and childcare”, “a beginner-friendly boxing gym near downtown” or “is reformer Pilates good for back pain”. The reply lists a handful of clubs, each with a reason taken from a source the assistant could read. Work on those replies is known as GEO (generative engine optimization) or AEO (answer engine optimization); at a gym it covers four things:"),
        li("membership types, prices, contract terms, hours and amenities written as text, not only inside a PDF or a booking widget"),
        li("class pages that answer beginner questions directly, with a named coach as the author"),
        li("structured data for the business, each location, its opening hours and classes"),
        li("the same name, address, hours and offers on Google, Yelp, ClassPass and your site, because assistants cross-check sources"),
        p(
          "Before the work starts and again a few months in, I put the same questions to the assistants and record which gyms they suggest in your place. The method is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring gym SEO in trial sign-ups, memberships and calls"),
        p("Rankings are a means, not the result. The monthly report shows trial sign-ups, class bookings, calls and new memberships that came from search and the map, by page and by location. Forms and booking links carry the source into your gym software, calls from the profile are tracked, and rankings sit next to these numbers rather than in their place. Pages with visits but no trials get rewritten or merged."),

        h2("How much gym SEO costs"),
        li("Gym SEO audit — website, Google Business Profile, local competitors, booking setup and AI answers: from 250 €, one-off."),
        li("One-off work — class, membership, trial or location pages, profile clean-up, structured data, sign-up tracking: 250–700 €."),
        li("Monthly SEO for a gym or fitness studio — new pages, map work, reviews, AI visibility and reports in trials and members: from 800 € per month."),
        p(
          "For a single studio in a small town, the audit plus three or four well-built pages is often enough for a long time. Ongoing work is described under ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ", the audit under ",
          link("SEO audit", "/services/seo-audit"),
          ", and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Gym SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a gym cost?", "An audit costs from 250 € one-off, separate jobs 250–700 €, and monthly SEO from 800 €. Once I know how many locations you have, which programs need members and where sign-ups come from today, you get a fixed price."],
          ["How long does gym SEO take to bring new members?", "Profile fixes and fresh reviews can move a club on the map within a few weeks. New class and location pages tend to climb over three to six months before sign-ups from them become regular, which is why January pages are published in the fall."],
          ["Can a small independent gym outrank Planet Fitness?", "For “gym near me” in every direction, rarely. For searches about a class, an amenity, coaching or a neighborhood, often yes, because those searches reward a specific answer more than a big brand."],
          ["Does my Mindbody or Glofox schedule help SEO?", "Usually not on its own, because schedules loaded in widgets are often invisible to search engines. Class pages with times written as text, linking into the booking widget, do help."],
          ["Should a gym post membership prices online?", "If you can, yes, at least “from” prices. Price searches come right before a decision, and an assistant asked for “a cheap gym with a pool near me” can only name clubs whose prices it can read."],
          ["Can ChatGPT recommend my gym?", "Yes, when someone asks for a gym or a class nearby. It names clubs it finds clear, consistent facts about: location, hours, prices, classes, reviews. Nobody can guarantee a mention; I compare the answers at the start and a few months later."],
          ["Can a consultant in Poland do SEO for a US gym?", "Yes. Everything is done online, in English, from Warsaw. Between 2 and 10 p.m. Central European Time it is morning to afternoon on the East Coast and early morning to midday on the West Coast, so calls fit before your evening rush. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order gym SEO: what to send me"),
        p(
          "Send your club’s name, website and Google Maps link, the number of locations, the classes and memberships you want to fill, the gym software you use and where new members come from today. You get back the first fixes I would make, in order, and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
