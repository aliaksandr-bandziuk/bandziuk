// Landing page fixture: Personal trainer website design (EN), group
// «personal-trainer-website-design». New page.
// Semantic core: ref/creative-leisure.md, gyms / trainers (US volumes):
// personal trainer website 320 · website personal trainer 320 · website for
// personal trainer 320 · personal fitness trainer website 320 (intro, H2s,
// metaTitle) · best personal trainer website 260 (examples H2) · personal
// trainer website design 70 (H1) · examples 70 / example 70 (examples H2) ·
// template 70 (app/template H2) · in-home personal trainer near me 1,300 (the
// trainer’s clients search this — local H2) · online personal trainer and
// nutritionist 110 (formats H2).
// Intent: ref/intent-check-creative-leisure.md — «website for personal
// trainers» vs «personal trainer website design»: 0 shared URLs. The first SERP
// is trainers’ own sites plus builders (FitBudd, Strikingly); the design SERP is
// PT software with websites (Trainerfu, PT Distinction, mypersonaltrainerwebsite)
// → the reader is an independent trainer choosing between an app/template site
// and an own site; the page says when a template is enough.
// Angles: in-person vs online coaching, packages and prices, booking and
// payments (Stripe, deposits), selling programs online (Landi Room case), results
// with consent (FTC endorsement guides — general), local search for in-home
// trainers, coaching app vs own site, AI-readable facts.
// Portfolio: Landi Room (selling a course online with protected video), Sasha
// Dith (one-person brand, booking form, fast), retail analytics consultant
// (personal brand, courses with video), Giuseppe (one-person practice, AI
// answers), Warsaw auto repair (local search, Google Maps).
// NOT on this page: gyms and studios with class schedules and memberships
// (/fitness-studio-website, linked once); gym SEO (/gym-seo); life coaches —
// niche, discovery call, lead magnet, email list (/life-coach-website-design);
// fitness apps as products; certification courses for trainers.
// Owner’s rules: never say there are no clients from the visitor’s segment; no
// outcome promises, no invented testimonials; AI search on every page.
import { p, h2, h3, li, link, k } from "./pt";

export const personalTrainerWebsiteDesignEn = {
  lang: "en",
  group: "personal-trainer-website-design",
  slug: "personal-trainer-website-design",
  title: "Personal trainer website design",
  heading: "Personal Trainer Website Design",
  excerpt:
    "I design and build personal trainer websites for independent trainers: separate pages for in-person and online coaching, packages people can compare, booking and payment on the site, programs you can sell online and local pages for clients who search for a trainer nearby.",
  seo: {
    metaTitle: "Personal Trainer Website: In-Person and Online | Bandziuk",
    metaDescription:
      "Personal trainer website design: in-person and online coaching pages, packages, consult booking and payments, program sales, local search. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Booking and payments built in"],
  heroPhonePoints: ["Strength coaching, Denver", "Gym · Your home · Online", "Compare packages", "Book a free consult"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple personal trainer website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Personal trainer website with in-person and online coaching pages, package payments, program sales with protected video and service-area pages, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with personal trainer website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "In-person and online as two offers", text: "Own page, packages and button for each" },
        { _key: k("o"), iconName: "file-text", title: "Packages people can compare", text: "Sessions, length, price, what is included" },
        { _key: k("o"), iconName: "plug", title: "Booking and payment on the site", text: "Consult slots, Stripe, deposits, monthly plans" },
        { _key: k("o"), iconName: "shield-check", title: "Programs sold with protected video", text: "Personal link after payment, no downloads" },
        { _key: k("o"), iconName: "map-pin", title: "Local pages for in-home training", text: "Gym address, neighborhoods, travel radius" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and ChatGPT", text: "Certifications, formats and area as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple personal trainer website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Two formats, payments, program sales, areas", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites for personal brands that sell, book and get found",
      subtitle:
        "What these projects share with a trainer’s site is a person or a small team selling their own skill. Landi Room, a Warsaw salon, sells an online course through Stripe with a video link that expires after 14 days. Sasha Dith, a DJ and producer, has one fast hub with a booking form. A retail analytics consultant sells courses with video on her own site. Giuseppe, a psychotherapist in Milan, works alone, and ChatGPT already quotes his new pages. An auto repair shop in Warsaw shows the local side: Google Maps and service pages.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "official-website-for-dj-and-producer-sasha-dith",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your personal trainer website",
      subtitle: "Within one business day you get a proposed page list for your coaching formats and a fixed price.",
      contextLabel: "Your Instagram handle or current site",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do you train clients?", options: ["At a gym or studio", "In clients’ homes", "Online only", "A mix of these"] },
        { _key: k("z"), question: "What should the site sell?", options: ["Personal training packages", "Online coaching", "A ready-made program", "Not sure yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design and build personal trainer websites for independent trainers who coach in a gym, in clients’ homes, in a park or online. One person does the design, the code and the launch, for one fixed price. Instagram shows how you train. The website answers what a ready-to-start client checks before paying anyone: where you train, what a package includes, what it costs, how to book a first meeting and how to pay — all without sending you a DM."),

        h2("Personal trainer website design: what the first screen tells a new client"),
        p("Most people open a trainer’s site on a phone, from your Instagram bio, a Google search or a link a friend sent. In a few seconds they look for three answers: is this coach for someone like me, can I train with them where I live, and what happens if I tap the button. The first screen answers all three in text:"),
        li("who you train and how, in one sentence — “Strength coaching for women over 40, in Denver gyms and online”"),
        li("your formats: gym, in-home, outdoor, online, small group"),
        li("one main button, the same on every page: “Book a free consult” or “See packages”"),
        p("Photos come from a real shoot where you actually work. You correcting someone’s squat sells better than a model on a stock image. A short looping video can work too, as long as it is compressed and does not hold up the page on mobile data."),

        h2("In-person and online personal training: two offers on one website"),
        p("An in-person client and an online client buy different things. The local client cares about the gym or the home visit, time slots, travel radius and session length. The online client cares about the app, how the program arrives, how often you review form videos and answer messages, and what happens in a week they miss. Mix both on one page and each reader skips half of it."),
        p("So the home page splits visitors early — “Train with me in Denver” and “Coaching online, anywhere” — and each format gets its own page, packages and button. Hybrid clients, who see you twice a month and follow your app plan in between, get a block on both pages. People also search for an “online personal trainer and nutritionist”: if you hold a nutrition credential, the page names it and its scope; if not, it says you give general eating guidance and refer to a registered dietitian."),

        h2("Personal training packages and prices on the website"),
        p("Price is the question people hesitate to ask and most want answered. You decide whether to show exact amounts or a starting price; either way the package page makes the structure easy to compare:"),
        li("a single session, packs of 10 or 20, or a monthly plan"),
        li("session length, place and the travel fee for in-home training"),
        li("what happens between sessions: an app program, form checks, messaging hours"),
        li("how long a pack stays valid, how to pause, the cancellation window"),
        p("Three packages side by side read well on a phone; a fourth usually belongs on its own page. Packages are stored in the CMS as fields — name, number of sessions, price, what is included — so a price change takes a minute and cannot break the layout."),

        h2("Booking and payments on a personal trainer website"),
        p("Two moments turn a visitor into a client: a booked first meeting and a paid package. The site handles both, so you are not chasing anyone through direct messages."),
        h3("Booking a free consult or a paid assessment"),
        p("The consult button opens a calendar with consult slots only — from Calendly, Acuity or the booking module of your coaching app — or a short form: name, contact, the goal in one line, in person or online, preferred times. Screening questions about injuries or a doctor’s clearance go to your inbox or app, never to a shared spreadsheet, and the form asks only what you will use. A line under the button says how long the consult takes and that nothing has to be bought on the spot."),
        h3("Taking payment for packages, deposits and monthly plans"),
        p("Package buttons lead to Stripe Checkout or to your coaching app’s checkout: one-off packs, monthly plans billed automatically, or a deposit that holds the first session. Cancellation and refund terms sit next to the button in plain words, and a confirmation email tells the client what happens next. Card details never pass through your website; the payment provider handles them."),

        h2("Selling workout programs online from your personal trainer website"),
        p("A ready-made program — a 12-week strength plan, a return-to-training course after pregnancy, a mobility series — sells while you coach other people. The weak spot is delivery: a PDF or video link that one buyer forwards to a group chat of twenty."),
        p("For Landi Room, a beauty salon in Warsaw, I built a landing page for an online hair treatment course on Next.js and Sanity, with Stripe Checkout. Payment triggers an automatic email with a unique video link. That link stops working 14 days later, and there is no download button or file to pass around. More than 100 people bought the course from the first Google Ads campaign, and nobody got access without paying. A trainer’s video program fits the same setup: a sales page showing the plan week by week, the equipment and who it suits, then payment and access with no files sent by hand."),

        h2("Client results on a personal trainer website: before-and-after photos with consent"),
        p("Before-and-after photos are the most persuasive part of a trainer’s site and the easiest to get wrong. A story goes live only with the client’s written permission for the photos, the name or initials and the quote. In the CMS each story has a consent field; without it, the story stays in draft, and removing one when a client asks takes a click."),
        p("Captions describe what the client did — three sessions a week for five months, a first pull-up, back pain gone in their own words — rather than promising the reader a number of pounds by a date. A line near the gallery says results depend on the person, their health, sleep and food. In the US, testimonials used in advertising fall under the FTC’s endorsement guides, so check the wording around them with your adviser."),

        h2("Local search for in-home personal trainers: “near me” and service areas"),
        p("People type “personal trainer near me”, and “in-home personal trainer near me” alone gets about 1,300 searches a month in the US. Google answers from your Business Profile, the location written on your site and pages that match the query. So the site names the gym you work from, with the address and a map. If you travel to clients, a service-area page lists the neighborhoods or ZIP codes you cover and how the travel fee works, while your Business Profile keeps your home address hidden. Two gyms mean two short pages with their own details."),
        p(
          "Reviews come from clients you ask after a few weeks of training, on Google; the site links to them instead of copying them. Growing local visibility month by month is the work described on ",
          link("local SEO services", "/services/local-seo-services"),
          "; the website gives that work pages to point at.",
        ),

        h2("Coaching app, template or your own personal trainer website"),
        p("Coaching platforms such as Trainerfu, PT Distinction and FitBudd include a simple trainer website, and Wix or Squarespace sell personal trainer website templates. If you are starting out, train in one gym and need four pages, a template is enough — I will say so on the first call, and the budget is better spent on a photo shoot."),
        p("Your own site pays off when you sell local and online coaching side by side, sell programs, need area pages or a second language, or expect to switch apps one day. The app keeps the training itself — programs, check-ins, progress logs. The site takes the first impression, search, booking and sales, and links to the app for login. Before signing with any platform, ask whether your domain, pages and addresses stay yours when you leave."),

        h2("What the best personal trainer websites have in common"),
        p("Lists of the best personal trainer website examples mostly show handsome home pages. What the useful ones share is less visible:"),
        li("the city, or “online”, in the first line"),
        li("one button, repeated, leading to a consult"),
        li("packages explained before anyone has to ask"),
        li("a real face and the real training place"),
        li("pages that open fast on a phone"),
        p("Speed is the point people forget. On the site I built for Sasha Dith, a DJ and producer, video and music load only when needed, and pages open in under one second, replacing slow builder pages. The look follows your brand — a powerlifting coach and a Pilates-based trainer should not resemble each other — while the order of information stays the same."),

        h2("A personal trainer website that ChatGPT and Google AI Overviews can read"),
        p("Ask ChatGPT for a trainer who works with beginners in your part of town, or read Google’s AI Overview for an online strength coach, and the answer is assembled from pages the assistant could read. Your site gives it facts as text: name, certifications by name and issuing body — NASM, ACE, NSCA or ACSM, for example — formats, area, languages and starting price. Structured data describes you as a person and your services, FAQ answers are marked up, pages arrive from the server as ready HTML, and robots.txt states which AI crawlers may read them."),
        p(
          "Credentials belong in text, not only in a strip of logos: assistants do not read logos. Giuseppe, a psychotherapist in Milan who works alone, as most trainers do, already sees new pages of the site I built for him in ChatGPT answers. The ongoing side of this is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much a personal trainer website costs"),
        p("Design is part of the build, so there are two price levels and nothing on top:"),
        li("A simple personal trainer website — home, about, one coaching format, packages, consult booking, contact: 700–1,400 €."),
        li("A site with separate in-person and online pages, package payments, a program sales page with protected video, service-area pages, a second language or a blog: from 2,000 €."),
        p(
          "Gyms and studios with class schedules and memberships have their own page on ",
          link("fitness studio website", "/fitness-studio-website"),
          " design. How I approach builds in general is under ",
          link("website development", "/services/website-development"),
          ", and every price is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Personal trainer website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a personal trainer website cost?", "A simple trainer site costs 700–1,400 €; one with separate in-person and online pages, payments, program sales or area pages starts at 2,000 €. Design is included in both. Tell me where and how you train, and I quote a fixed amount."],
          ["How long does it take to build a personal trainer website?", "Plan on a few weeks for a simple trainer site. The calendar mostly follows your texts and photos: page list first, design second, build and launch last."],
          ["Can clients pay for training packages on my website?", "Yes. Package buttons lead to Stripe Checkout or your coaching app’s checkout, for one-off packs, monthly plans or a deposit. The provider handles cards and receipts; your terms are shown next to the button."],
          ["Can I sell a video program without people sharing it?", "Yes. After payment each buyer gets a personal video link that expires after a set time, and the video cannot be downloaded — the setup I built for Landi Room’s online course, which had no case of unauthorized sharing."],
          ["Is my coaching app’s website or a template enough?", "If you train in one place and need a few pages, it usually is. Your own site makes sense when local and online coaching sit side by side, when you sell programs, or when your pages must survive a change of app."],
          ["Can I update packages, prices and client stories myself?", "Yes. They are fields in the CMS, key pages are protected, and a client story cannot go live without the consent field filled in. You also get a short manual and video walkthroughs."],
          ["Do you build websites for US personal trainers from Poland?", "Yes. I work remotely from Warsaw; my afternoon and evening (CET) overlap with the US morning, so calls fit into your workday. Invoices are in euros, and the site shows US dates, phone formats and your time zone."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a personal trainer website: what to send me"),
        p(
          "Send your Instagram or current site, where you train (gym, clients’ homes, outdoors, online), your certifications, the packages or programs you sell and how you want clients to book and pay. A few photos of you working with clients help me plan the first screen. Within one business day you get a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
