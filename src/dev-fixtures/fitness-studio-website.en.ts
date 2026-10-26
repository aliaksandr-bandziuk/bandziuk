// Landing page fixture: Gym and fitness studio website design (EN), group
// «fitness-studio-website». REWRITE of the existing page /fitness-studio-website
// (URL kept). Old page had generic headings («How the work goes», «The schedule
// is the product», «let’s discuss…»); the new one is in the landing format with
// keyword headings.
// Semantic core: ref/creative-leisure.md (US): gym website design 260, website
// design for gym 260 (H1, metaTitle, first-screen H2, cost H2, FAQ) · fitness
// studio website (title, H2, FAQ) · related searches: best gym website, best
// gym website design, gym website design ideas, gym website design template,
// modern gym website design (H2 on templates vs custom).
// Intent: ref/intent-check-creative-leisure.md — «gym website design» vs
// «fitness studio website» 5 of 10 shared URLs (dribbble, wodify, webflow,
// behance, ueni) → one page, this one. «website for gyms» = gyms themselves
// (0 shared with design) → not targeted. «gym seo» vs «gym website design» 0
// shared URLs → separate pages; /gym-seo is the sibling. SERP = galleries
// (Dribbble, Behance, Webflow), gym software blogs (Wodify, Kilo, Zipper) and
// builders → owners looking for ideas and a way to build.
// Angles (BRIEF.md): schedule, class booking, membership sign-up, trial pass,
// trainers, photos, speed (Sasha Dith case), selling online classes and intro
// packs (Landi Room case), AI-readable build, templates vs gym software site
// vs custom, cost.
// NOT on this page: being found — keywords, Google Business Profile and map
// pack, location and class pages as SEO, reviews, franchises, Instagram vs
// search, reporting (/gym-seo — sibling); independent trainers’ sites
// (/personal-trainer-website-design — linked once); spas
// (/spa-website-design).
// Owner’s rules: every page covers AI search; design is included in the price;
// never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const fitnessStudioWebsiteEn = {
  lang: "en",
  group: "fitness-studio-website",
  slug: "fitness-studio-website",
  title: "Gym and fitness studio website design",
  heading: "Gym and Fitness Studio Website Design",
  excerpt:
    "I design and build gym websites for independent gyms and fitness studios: a class schedule that stays current, booking and membership sign-up through your gym software, a trial pass page, trainer profiles, real photos and video, and pages that load fast on a phone — design included in one price.",
  seo: {
    metaTitle: "Website Design for Gyms and Fitness Studios | Bandziuk",
    metaDescription:
      "Gym website design: live class schedule, booking and membership sign-up, a trial pass page, trainer profiles, real photos and fast mobile pages. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Today’s classes", "Claim a free trial", "Join online", "Meet the coaches"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple gym or fitness studio website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Gym website with a live schedule, booking and membership sign-up, trial and trainer pages, several locations or online sales, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with gym website design",
      items: [
        { _key: k("o"), iconName: "plug", title: "A schedule that updates itself", text: "From Mindbody, Glofox, Wodify or ClubReady" },
        { _key: k("o"), iconName: "phone", title: "Booking and joining in a few taps", text: "Handed to your gym software’s checkout" },
        { _key: k("o"), iconName: "file-text", title: "Memberships people can compare", text: "Prices, fees, contract and cancellation" },
        { _key: k("o"), iconName: "image", title: "Your floor, your coaches, your members", text: "Photos and short video instead of stock" },
        { _key: k("o"), iconName: "gauge", title: "Fast pages on a phone", text: "Media after the text, widgets on tap" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and ChatGPT", text: "Classes, prices and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple gym or studio website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Schedule, booking, memberships, trainers, locations", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: fast, video-rich and booking-ready sites I have built",
      subtitle:
        "Sasha Dith, a DJ and producer, got an official site built on Next.js pixel-perfect from his Figma design: a video gallery, a booking form over a concert background and lazy-loaded media, loading in under one second where slow builder pages used to be — the mix of video, speed and a booking path a gym site needs. Landi Room, a Warsaw beauty salon, charges for its online course with Stripe Checkout and sends each buyer a private video link automatically — the way a studio can sell intro packs or on-demand classes. Cyprus VIP Estates has a catalog filtered by type and shown on a map, in five languages. The Milan psychotherapist’s site has a page for each location and an editor the owner runs himself, and a Warsaw renovation and property-investment company has a premium design that carries its brand.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your gym website",
      subtitle: "Within one business day you get a proposed page list, how the schedule and sign-up would connect to your software, and a fixed price.",
      contextLabel: "Gym name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website yet", "The site from our gym software", "Wix, Squarespace or a template", "An older custom site"] },
        { _key: k("z"), question: "Which software runs your classes and billing?", options: ["Mindbody", "Glofox", "Wodify, ClubReady or similar", "None yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Gym website design shapes what a future member sees between finding your club and walking in, and I do all of it myself: the page design, the connection to your gym software and the code, for one fixed price that includes design. A gym or fitness studio website has a narrow job — show what training with you looks like, answer the price and schedule questions before anyone has to call, and get a curious visitor onto a trial class from a phone."),

        h2("Gym website design for the first screen: what a visitor sees on a phone"),
        p("Most visitors come from the map, an Instagram bio or a friend’s text, holding a phone. Before they scroll they should see:"),
        li("what you are and where, in plain words — “Strength gym and group classes in East Austin”, not “Become unstoppable”"),
        li("two buttons, “Free trial” and “Schedule”, kept in a bar at the bottom of the screen on every page"),
        li("today’s staffed hours and where to park"),
        li("one real photo or a short silent clip of a class"),
        p("A club with several locations adds a location switch here, so the schedule and prices on every following page are the right ones."),

        h2("A class schedule on a fitness studio website that never goes out of date"),
        p("The schedule is the page members open most, and a PDF or a photo of the whiteboard is wrong the day a coach calls in sick. It should come straight from the software you already run. Depending on your plan, that means a widget from Mindbody, Glofox, Wodify or ClubReady styled to match the site, or — where the platform offers an API — a schedule built from its data and shown as ordinary text that loads fast and can be read by search engines."),
        p("Filters matter more than decoration: location, class type, coach, time of day and level. Every class in the list links to its own class page, and every “Book” button opens that exact class in the booking flow, not the app’s home screen."),

        h2("Class booking and membership sign-up on a gym website"),
        p("Payments, contracts, waivers and member accounts belong in your gym software, which is built for them. The website hands people over at the right step and brings them back. Before quoting, I check what your account supports — embedded booking, direct links to a class or a membership, online contracts, a waiver step — and design the flow around it:"),
        li("“Join online” opens the chosen membership in your software’s checkout with the location already set"),
        li("“Book” opens the selected class, and a new client lands on a short sign-up rather than an app download"),
        li("after payment, a thank-you page with directions, parking, what to bring and the front desk number"),
        p("Where online joining is not available on your plan, the button opens a short form that reaches the front desk the same day."),

        h2("Membership pages on a gym website: prices, fees and how to cancel"),
        p("People compare memberships side by side, so a table with the same rows for every option helps: monthly price, enrollment and annual fees, which locations and hours are included, whether classes are included, contract length, freeze rules and how to cancel. Add-ons such as personal training, towel service or childcare sit below it. If you prefer not to publish exact numbers, “from” prices still answer the first question. Plain cancellation terms on the page also save the front desk the same conversation every week; several US states have their own health club contract rules, so the wording follows what your lawyer approved."),

        h2("A free trial pass page in gym website design"),
        p("The trial is the bridge between interest and membership, so it gets its own page instead of a pop-up. The page says what the offer is — a free class, a seven-day pass, a discounted intro month — what it includes, what to bring, whether a tour with staff is part of it and what happens when it ends. The form asks for a name, phone or email, a preferred day and class, and lands in your gym software or CRM as a lead with the page it came from, so staff can follow up within hours."),
        p("Boutique studios that sell an intro pack instead of a free class show it as a product with a price and a buy button."),

        h2("Trainer and instructor pages on a fitness studio website"),
        p(
          "People try a class and stay for a coach. Every trainer gets a page from one template: a photo taken in your club, the classes they teach, certifications written as text, a few lines in their own voice and their next classes pulled from the schedule. Personal trainers on staff also get a button to book an assessment. When someone joins or leaves, a manager publishes or hides the page in the editor without touching the design. Trainers who work for themselves, without a club, have their own ",
          link("personal trainer website design", "/personal-trainer-website-design"),
          " page.",
        ),

        h2("Gym photos and video in website design: your floor, your classes, your members"),
        p("Stock photos of models under studio lights are recognized at once and tell a visitor nothing about your club. What works: the floor at a busy hour, the studio rooms, the locker rooms and showers, the front desk, coaches mid-session and members who signed a release to appear. A beginner checks the photos to see whether people like them train there, so the gallery shows different ages, body types and levels. A short silent clip shows the pace of a class better than any paragraph, provided it does not slow the page down."),

        h2("Gym website speed: video, widgets and photos without a slow page"),
        p("Gym sites tend to be slow for the same reasons: an autoplaying hero video, two or three booking widgets, a chat bubble, tracking scripts and full-size photos. Members open the schedule in the parking lot, and a page that hangs sends them to the app or to a competitor. The official website of DJ and producer Sasha Dith is full of video embeds and a discography grid, yet with lazy-loaded media it loads in under one second, replacing the slow builder pages he had before. A gym site gets the same treatment: compressed video that starts after the text, images sized for each screen, widgets loaded when someone taps “Book”, and Core Web Vitals checked on a real phone before launch."),

        h2("Selling online classes and intro packs on a fitness studio website"),
        p("Some studios sell more than memberships: an on-demand class library, a six-week program, a gift card or an intro pack. For Landi Room, a Warsaw beauty salon, I built a landing page that sells an online training course through Stripe Checkout; after payment the buyer automatically receives a unique video link that expires after 14 days, and the video cannot be downloaded. The first Google Ads campaign brought more than 100 course sales with no case of unauthorized sharing. A studio can sell on-demand workouts or a program the same way, without putting paid videos on a public YouTube channel."),

        h2("A gym website that ChatGPT and Google AI Overviews can read"),
        p("A visitor who types “an evening reformer Pilates class near me” or “a gym with a pool and no annual fee” into ChatGPT or Google’s AI Overviews gets an answer assembled from pages the assistant managed to read. The site is built for that: pages rendered on the server as text, not assembled by scripts after loading; classes, prices, contract terms, amenities, hours and addresses in plain HTML; structured data for the club, each location and its classes; and robots.txt rules that say which AI crawlers may read the site. Giuseppe, a psychotherapist in Milan, has a site built the same way, and his new pages already appear in ChatGPT answers."),
        p(
          "Being found month after month is ongoing work, described on the ",
          link("gym SEO", "/gym-seo"),
          " and ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " pages.",
        ),

        h2("Best gym websites and gym website design ideas: template, gym software site or custom"),
        p("Galleries of the best gym website designs on Dribbble or Webflow are full of bold home pages and dark themes with neon accents. What the good ones share sits lower on the page: a schedule that loads, prices you can read, a trial button that never leaves the screen and photos of a real club. A template, or the site bundled with your gym software, is a fair start for a new studio with one room and a short class list. A custom design pays off with several locations, a long class list, several membership types or plans to grow from search, and the code, content and domain stay yours."),
        p(
          "If your current site already has search history, the move keeps it: every old address is redirected to its new page, the way Giuseppe’s 468 blog posts moved with 301 redirects. The ",
          link("website redesign", "/services/website-redesign-services"),
          " page walks through how such a move works.",
        ),

        h2("How much gym website design costs"),
        p("Design is not billed separately: the look, the page templates and the build are one price."),
        li("A simple gym or studio website — home, classes, schedule, memberships, trial form and contact: 700–1,400 €."),
        li("A full gym website with a live schedule, booking and membership sign-up, class, trainer and trial pages, several locations or online sales: from 2,000 €."),
        p(
          "The steps of a build, from the first call to launch, are listed under ",
          link("website development", "/services/website-development"),
          "; the full price list is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Gym website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a gym website cost?", "A simple gym or studio site costs 700–1,400 €, and a site with a live schedule, booking and membership sign-up, trainer pages and several locations from 2,000 €; both prices include design. You get a fixed figure once I have seen your class list and your software."],
          ["How long does it take to build a fitness studio website?", "A simple site usually takes a few weeks. Most of the time goes into content — class descriptions, trainer texts, photos — so the date depends on how quickly those are ready. The quote includes a schedule with dates."],
          ["Can you connect Mindbody, Glofox, Wodify or ClubReady?", "Yes, through whatever your plan offers: widgets, direct booking links or an API. I check your account before quoting, so the design only shows flows your setup supports."],
          ["Can new members join and pay on the website?", "They start on the site and finish in your gym software’s checkout, so contracts, billing and waivers stay where your staff manage them. Without online joining, the button opens a short form for the front desk."],
          ["Can our staff update prices, classes and trainers?", "Yes, in an editor such as WordPress or Sanity, without touching the design. The schedule updates itself from your software."],
          ["Do we need a website if our gym software has an app?", "The app serves people who are already members. New people find you on Google, on the map and in AI answers, then compare memberships and claim a trial on the website before they install anything."],
          ["Can you build a website for a US gym from Warsaw?", "Yes. Calls, design reviews and launch all happen online and in English. Afternoons and evenings in Central European Time are mornings in the US, so reviews fit before your after-work rush. Invoices are in EUR, and the site uses US formats for dates, prices and phone numbers."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order gym website design: what to send me"),
        p(
          "Send a link to your current site or Instagram, your locations, the class list, membership options and prices, the gym software you use and a few photos of the space and coaches, if there are any. You get back a proposed page list, how the schedule and sign-up would connect to your software, and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
