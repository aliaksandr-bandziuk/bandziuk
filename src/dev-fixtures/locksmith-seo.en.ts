// Landing page fixture: Locksmith SEO (EN), group «locksmith-seo». New page.
// Semantic core: ref/home-services.md, locksmiths group (US): locksmith seo
// 140, seo locksmith 140 (H1, metaTitle, several H2) · seo for locksmith 110
// (H2) · locksmith seo services 20 (cost H2, offer list) · best locksmith seo
// 10, locksmith seo agency 10 (choosing H2). Not targeted: locksmith near me
// 673,000 (consumers — the searches the client’s pages aim at, not ours),
// locksmith directory 70, savta locksmith 30, fair trade locksmith 10 (brands).
// No PAA for locksmiths in the source.
// Intent: ref/intent-check-home-services.md — «locksmith seo» vs «locksmith
// website design» 0 shared URLs → design is a different intent: one H2 on the
// website here, no separate page. SERP for «locksmith seo»: one vendor
// (bigseoonline) holds 8 of 10 results → weak competition, buyers’ demand.
// Angle: Google Maps spam and fake locksmith listings (the honest business with
// a real address), service-area business without a storefront and stricter
// verification, key-cutting counter vs mobile service, home / car / commercial
// pages, key programming by make, 24/7 hours and price logic before arrival,
// trust signals (license where states require it), call tracking without
// breaking NAP, dispatch networks and LSA, AI answers.
// NOT on this page: website design in depth (no design page yet — one H2 +
// /services/website-development); map work in depth (/services/local-seo-services
// — one link); garage doors (/garage-door-seo — repair vs install vs openers,
// springs, brands); other trades (roofing, plumbing, landscaping pages — no
// shared theses); running ads (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there are
// no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const locksmithSeoEn = {
  lang: "en",
  group: "locksmith-seo",
  slug: "locksmith-seo",
  title: "Locksmith SEO",
  heading: "Locksmith SEO Services",
  excerpt:
    "I do locksmith SEO for local locksmith businesses: a Google Business Profile that holds its place among fake listings, pages for home, car and business lockouts, rekeying and key programming, a site built around the call button and visibility in AI answers.",
  seo: {
    metaTitle: "SEO for Locksmiths: Maps, Lockouts and AI | Bandziuk",
    metaDescription:
      "Locksmith SEO: Google Maps without a storefront, fake listing reports, lockout and car key pages, call tracking and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Maps, lockouts, car keys", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Locked out? Call now", "Car key programming", "Real business on the map", "Price explained first"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Locksmith SEO audit: Google Business Profile, website, map competitors and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off locksmith SEO work: lockout and key pages, profile clean-up, spam reports, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a locksmith business", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with locksmith SEO services",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile that holds up", text: "Real address or service area, clean name, verification ready" },
        { _key: k("o"), iconName: "shield-check", title: "Fake locksmith listings reported", text: "Spam near you documented and sent to Google" },
        { _key: k("o"), iconName: "layers", title: "A page for each lockout and key job", text: "Home, car, business, rekeying, key fobs, safes" },
        { _key: k("o"), iconName: "phone", title: "A site built around the call button", text: "Number and hours visible on every screen" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "License, area and price logic assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "Calls tracked by source", text: "Map, website and AI referrals, missed calls included" },
      ],
      prices: [
        { _key: k("r"), label: "Locksmith SEO audit: profile, website, competitors", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a locksmith business", value: "from 800 € / month", note: "pages, map, spam reports, calls", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service businesses that live on phone calls",
      subtitle:
        "Most of this work is for Warsaw service businesses whose customers call or find them on Google Maps: an auto repair shop where I did local SEO, the map profile, service pages and UX; Felgilab’s wheel-renovation workshop, moved to a new WordPress site with a page for every service and its price; a tyre-storage business run from a single landing page, its SEO texts edited by the owner; and a renovation company with a premium site. The fifth, a psychotherapist in Milan, has location pages for two towns and new pages that already appear in ChatGPT answers. A locksmith needs that same set: a page per job, a map profile that matches the site and a number one tap away.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your locksmith business",
      subtitle: "I reply within one business day with what I would fix first in your Google profile and website, and a fixed price.",
      contextLabel: "Locksmith business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which jobs do you want more of?", options: ["Home lockouts and rekeys", "Car lockouts and key programming", "Commercial locks and access control", "Safes"] },
        { _key: k("z"), question: "How do you work?", options: ["Mobile only, from a van", "Shop plus mobile service", "Several vans and techs", "Just starting out"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do locksmith SEO for local locksmith businesses: the Google Business Profile, the website and a page for each job — home and car lockouts, rekeying, key programming, commercial locks — so that the person standing outside a locked door calls a real locksmith, not a call center renting out its listing. Almost every locksmith customer phones rather than fills in a form, so the result is counted in calls answered and jobs done."),

        h2("Why SEO for locksmiths differs from other local trades"),
        p("Three things set locksmiths apart in search. Most searches are urgent and made on a phone, often in a parking lot or a hallway. The map carries more weight than the website, because people tap the first number that looks trustworthy. And the map itself is crowded with listings that are not real businesses. Locksmith SEO deals with all three at once: a profile Google trusts, pages that answer the job on the first screen, and visible proof that you are the business you claim to be."),

        h2("Fake locksmith listings on Google Maps: how a real locksmith competes"),
        p("Locksmiths have long been one of the categories hit hardest by spam on Google Maps. Lead-generation networks create listings with invented names, borrowed addresses and titles like “24 Hour Locksmith [City]”, then forward the calls to whoever is free. The customer hears a low price on the phone and gets a far larger bill at the door; the honest locksmith down the street never gets the call. What helps:"),
        li("keeping your own profile clean — the business name you trade under with no keywords added, a real address, hours you actually keep"),
        li("documenting fake listings near you, with a street view of the empty address or a call where nobody can name the company, and reporting them through “Suggest an edit” and Google’s business redressal complaint form"),
        li("reporting listings that copy your name, photos or reviews"),
        li("checking your own profile for edits suggested by others, because spammers sometimes change competitors’ phone numbers or hours"),
        p("Spam removal takes weeks and some listings come back. It is still worth the effort: every listing that disappears moves the real businesses up."),

        h2("Google Business Profile for a mobile locksmith without a storefront"),
        p("Most locksmiths work from a van. Google allows that as a service-area business: you list the area you cover and hide the street address. The address must still be real and able to pass verification — a virtual office, a mailbox store or a coworking desk is exactly what gets locksmith profiles suspended. Locksmiths are also often asked for stricter verification than other businesses, such as a video showing the work vehicle, tools and business documents, so have these ready before changing the name, address or category. Suspensions often follow changes made in a hurry, and reinstatement is slow."),
        p("If you also run a counter where customers come to cut keys, that location shows its address and counter hours; the mobile work is described through the service area. On the website these become two pages: one for people who will walk in, one for people waiting at a door."),

        h2("Locksmith service pages: home, car and commercial lockouts, rekeying and safes"),
        p("A single “Services” page listing fifteen jobs does not rank for any of them. Each job customers search by name gets its own page, and its first lines say what you do, where and how quickly you arrive."),
        h3("Residential lockout and rekey pages"),
        p("House lockouts, lock changes after a move, rekeying after a lost key or a tenant leaving, smart lock installation. The page explains when rekeying is enough and when the lock has to be replaced, and states that you ask for proof of residence before opening a door."),
        h3("Car lockout and key programming pages"),
        p("Car customers search by situation and by make: “keys locked in car”, “lost car key no spare”, “Honda key fob replacement”. A key programming page names the makes and key types you handle — transponder keys, remote fobs, push-to-start smart keys — and says whether you program on site, so the car does not have to be towed to a dealer. A make gets its own page only if you do it often."),
        h3("Commercial locksmith pages"),
        p("Property managers, offices and shops look for master key systems, panic bars, high-security cylinders, access control and safe opening. They decide slowly and stay for years, so the page lists the building types you serve and how to book a site survey."),

        h2("Emergency locksmith SEO: 24/7 hours, arrival times and price logic"),
        p("“Emergency locksmith”, “locksmith open now” and “24 hour locksmith” are searched at the moments when a call is worth most. Google uses your listed hours when deciding whom to show at night, so a locksmith who really answers at 2 a.m. should say so in the profile and on the site. One who does not should leave 24/7 out: the calls you cannot take come back as poor reviews."),
        p("An emergency page names the areas you reach with a realistic arrival time for each, explains how the call-out and the job are priced, and lists what to have ready — ID, the car’s registration, proof of address. Explaining the price before you arrive is the clearest line between you and the bait-and-switch operators."),

        h2("A locksmith website that turns a search into a call"),
        p("Locksmith websites tend to fail in the same places: a heavy slider at the top, the number hidden in the menu, the same text on every city page and not a word about price. A locksmith site needs less than people expect:"),
        li("a tap-to-call button and opening hours on every page, visible without scrolling"),
        li("main content shown within 2.5 seconds on a weak mobile connection"),
        li("the business name, the license number where your state requires one, and photos of your own van and team instead of stock images"),
        li("a short form or a text option for jobs that can wait, such as rekeys and commercial quotes"),
        li("structured data of the Locksmith type with your service area"),
        p(
          "If the current site cannot be fixed, I build a new one; how that works is on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("Locksmith reviews and trust signals: license, ID checks and upfront pricing"),
        p("People who have heard about locksmith scams read reviews more closely than in most trades. Ask each customer for a review the same day, by text with a direct link, and ask them to mention the job and the area — “rekeyed all locks after we moved in, Westside”. Reply to every review under your own name. On the site, show what fake operators cannot: insurance, a license number in states that license locksmiths, trade association membership if you have one, a company name that matches the van and a sentence on how you price jobs. Search engines and AI assistants use the same details to tell a business from a listing."),

        h2("Call tracking for locksmiths without breaking the map listing"),
        p("Since nearly every job starts with a call, call tracking is how locksmith SEO is measured. Done carelessly it damages the map: a tracking number that replaces your main number everywhere breaks the consistency of your business details. The safe setup is dynamic numbers on the website, a tracking number as the primary number in the Business Profile with your main number kept as an additional phone, and the main number in directories. The monthly report then shows calls from the map, the website and AI referrals, with missed calls counted — at night a missed call is a lost job."),

        h2("Dispatch networks and Local Services Ads vs your own locksmith SEO"),
        p("Many locksmiths take work from dispatch networks and lead platforms that keep part of each job or charge per call. They fill quiet days, but the customer belongs to the network and the reviews often go to a listing you do not control. Google Local Services Ads also run for locksmiths in many US areas, with background checks and a fee per lead. SEO builds the part that stays yours: a profile and pages under your name, where every review and every repeat customer adds up. The question is what share of your calls you want to own; I work on that share and do not run ads."),

        h2("Locksmith SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People also ask assistants “how do I find a legit locksmith”, “can a locksmith make a car key without the original” or “how much does it cost to rekey a house”. ChatGPT and AI Overviews answer from a few sources and sometimes name businesses. Getting a locksmith into those answers — generative engine optimization (GEO) or answer engine optimization (AEO) — rests on the same facts that beat fake listings:"),
        li("business name, license, service area and hours written as plain text on the site"),
        li("answers to lockout and key questions on your own pages, including how jobs are priced"),
        li("Locksmith structured data tied to your Business Profile"),
        li("identical details on Google, Apple Maps, Yelp and BBB"),
        p(
          "I check how assistants describe your business before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Choosing a locksmith SEO company or consultant"),
        p("Search “locksmith seo” and most of the first page belongs to one vendor. That shows the niche is small, not that the choice is made. Before signing with anyone, ask:"),
        li("Will you add keywords to my business name or create extra listings? If yes, walk away — that is how profiles get suspended."),
        li("Do you work for another locksmith in my area?"),
        li("Will reports show calls and jobs, including missed calls?"),
        li("Who owns the website, the profile and the tracking numbers if we stop?"),
        p(
          "I work alone, so the person who audits your profile writes the pages and changes the code. What monthly work includes is described on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page.",
        ),

        h2("How much locksmith SEO services cost"),
        li("Locksmith SEO audit of the profile, the website, map competitors and AI answers: from 250 €, one-off, with fixes in order of impact."),
        li("One-off work — lockout and key pages, profile clean-up, spam reports, call tracking, structured data: 250–700 €."),
        li("Monthly SEO for a locksmith business — new pages, map and reviews, spam monitoring, reporting: from 800 € per month; in big US metros, where locksmith maps are most crowded, from 1,300 € per month."),
        p(
          "A one-van locksmith in a smaller town often gets most of the result from the audit and a few strong pages. Map work in depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page, other small service firms will find their version on the ",
          link("SEO services for small business", "/seo-services-for-small-business"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Locksmith SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a locksmith cost?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in big US metros. After a short description of your business and area I give a fixed price."],
          ["Can a locksmith rank on Google Maps without a storefront?", "Yes, as a service-area business with the address hidden. The address still has to be real and pass verification; virtual offices and mailbox addresses are what get locksmith profiles suspended."],
          ["How do I get fake locksmith listings removed from Google?", "Collect evidence — a street view of the address, a test call where nobody can name the company — and report each listing with “Suggest an edit”, then use Google’s business redressal complaint form for the persistent ones. Expect weeks, and recheck the area every month."],
          ["How long does locksmith SEO take to bring calls?", "Profile fixes and spam removal can change the map within weeks. New service pages usually need two to four months to rank, longer in large metros."],
          ["Is SEO worth it if I already get jobs from a dispatch network?", "Usually yes, as a second source. Network jobs come with a cut and the customer stays with the network; calls from your own profile and pages bring repeat customers and reviews that stay with you."],
          ["Can ChatGPT write the pages for my locksmith website?", "It can draft text. It does not know your area, your arrival times, the car makes you program or how you price a night call, and pages without those details rarely rank or convince."],
          ["Can a consultant in Poland do SEO for a US locksmith?", "Yes. The work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order locksmith SEO: what to send me"),
        p(
          "Send the business name, the website and Google Maps links, the jobs you want more of — home lockouts, car keys, commercial work — the area you cover, whether you have a counter or work only from a van, and the fake listings that bother you most. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
