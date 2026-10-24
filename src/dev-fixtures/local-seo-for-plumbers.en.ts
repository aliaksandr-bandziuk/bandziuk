// Landing page fixture: Local SEO for plumbers (EN), group «trades».
// Semantic core: ref/trades.md / trades.csv, plumbing group: local seo for
// plumbers 480; variant «local seo for plumbing»; map-pack phrasing
// («plumber near me» map results, Google Maps for plumbers).
// Intent: ref/intent-check-trades.md — «local seo for plumbers» vs «seo for
// plumbers» 1 shared URL (seo.co/plumbers) → separate page; this one is about
// the map results: Google Business Profile (category Plumber, service-area
// business without the home address, services, hours incl. 24/7, photos),
// reviews naming the job and the neighborhood, citations, Local Services Ads
// next to the map, fake listings and the redressal form, call tracking
// without breaking NAP.
// NOT on this page: emergency and service pages, pricing pages, technical SEO,
// choosing an SEO company (/seo-for-plumbers); building the site
// (/website-for-plumbers); design (/plumbing-website-design); other trades'
// map results (/local-seo-for-contractors); plumbing + HVAC (/hvac-seo).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, ol, link, k } from "./pt";

export const localSeoForPlumbersEn = {
  lang: "en",
  group: "local-seo-for-plumbers",
  slug: "local-seo-for-plumbers",
  title: "Local SEO for plumbers",
  heading: "Local SEO for Plumbers",
  excerpt:
    "I do local SEO for plumbers: the Google Business Profile, reviews, listings, spam reports and call tracking that put a plumbing company in the map results when someone nearby needs a plumber, often in an emergency.",
  seo: {
    metaTitle: "Local SEO for Plumbing Companies: Map Pack | Bandziuk",
    metaDescription:
      "Local SEO for plumbers: Google Business Profile, 24/7 hours, reviews by neighborhood, listings, fake-listing reports and call tracking. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google Maps for plumbers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Plumber · Open 24 hours", "In the map pack", "Reviews that name the job", "Call now"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Local SEO audit for a plumber: Google Business Profile, listings, website", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Google Business Profile, listings and call tracking set-up for a plumbing company", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly local SEO for a plumbing company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with local SEO for plumbers",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile built for plumbing", text: "Plumber category, services, service area, real hours" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews that name the job and the neighborhood", text: "Asked by text after each job, every one answered" },
        { _key: k("o"), iconName: "file-text", title: "Clean listings: Yelp, BBB, Angi, Apple, Bing", text: "One name, address and phone everywhere" },
        { _key: k("o"), iconName: "shield-check", title: "Fake competitor listings reported", text: "Spam in the map flagged through Google’s forms" },
        { _key: k("o"), iconName: "phone", title: "Call tracking that keeps NAP intact", text: "Map calls counted, main number kept" },
        { _key: k("o"), iconName: "sparkles", title: "Local answers in ChatGPT and AI Overviews", text: "Facts assistants can check against your profile" },
      ],
      prices: [
        { _key: k("r"), label: "Local SEO audit for a plumber", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly local SEO for a plumbing company", value: "from 800 € / month", note: "profile, reviews, listings, spam reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local businesses that get calls from Google Maps",
      subtitle:
        "These are not plumbing companies. They are the nearest work I have to a plumber’s map results: an auto repair shop, a wheel-repair workshop and a tire-storage business that live on local searches, plus a renovation company and an architecture studio.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for local SEO for your plumbing company",
      subtitle: "I reply within one business day with what I would change first in your Google profile and a fixed price.",
      contextLabel: "Company name or Google Maps link",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where does your company show for “plumber near me”?", options: ["In the top 3", "Lower on the map", "Not on the map", "Not sure"] },
        { _key: k("z"), question: "Do you answer calls 24/7?", options: ["Yes, every night", "Some nights", "Business hours only"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do local SEO for plumbers — the work on your Google Business Profile, reviews and listings that decides whether your company appears among the three map results when someone nearby searches for a plumber. In plumbing those three places matter more than in most trades: many searches come from people with water on the floor, and they call one of the first numbers they see."),

        h2("How the Google map pack works for “plumber near me” searches"),
        p("For a plumbing search Google shows a map with three businesses above the regular results, and on a phone they fill most of the screen. Which three appear depends on what was typed, where the person is and what Google knows about each business. For plumbers a few points carry extra weight:"),
        li("closeness — urgent searches lean towards businesses near the searcher, so the service area has to cover the right towns"),
        li("opening hours — a profile shown as closed at 11 pm is less likely to appear for a search made at 11 pm"),
        li("the primary category and the services list — they have to match what the person searched for"),
        li("reviews — how many, how recent and what they say"),
        p("Local SEO for plumbing works on all of these except where the customer happens to be standing."),

        h2("Google Business Profile for plumbers: category, services and description"),
        p("The profile is the center of local SEO for plumbers. What I set up and keep current:"),
        li("“Plumber” as the primary category, because most searches match it"),
        li("secondary categories only for work you really do and Google has a category for — drain or septic work, for example — not a long list added in hope"),
        li("a full services list: drain cleaning, leak repair, water heater installation, sewer line repair, repiping, fixture installation, backflow testing — each with a short description"),
        li("a business description that names the trade, the towns and your license, without stuffing phrases into it"),
        li("a link from the profile to the matching page on your website, not only the home page"),

        h2("Service-area business set-up for plumbers working from home"),
        p("Most plumbers have no shop for customers to visit; many run the business from home with the vans in the driveway. Google’s answer is the service-area business: the address stays hidden and the profile shows the area you cover. What often goes wrong:"),
        li("the home address is entered but not hidden, so it appears on the map for anyone to see"),
        li("the service area is drawn far wider than the crews drive, which does not help ranking and brings calls you turn down"),
        li("a second profile is created for a “branch” that is a mailbox or a virtual office — a common reason for suspension"),
        li("“24/7 Emergency Plumber” and a city name are added to the business name, which breaks Google’s guidelines"),
        p("Getting a suspended profile back can take weeks, and for a plumber that means weeks of emergency calls going to someone else."),

        h2("Hours, 24/7 emergency service and photos in a plumber’s Google profile"),
        p("If someone really answers the phone at night, set the hours to open 24 hours and say so in the description and the services. If nobody does, do not: customers who call at 2 am and reach voicemail write the reviews that hurt most. Holiday hours are worth setting before each holiday, because pipes freeze and burst on public holidays too."),
        p("Photos need regular attention as well: the team, the vans with the company name, finished work under a sink or in a utility room, a new water heater in place. Real photos added every week or two show that the business is active and help a customer trust the person they are about to let into the house."),

        h2("Reviews for plumbers that mention the job and the neighborhood"),
        p("A review along the lines of “came out at midnight for a burst pipe in [neighborhood] and fixed it within the hour” does more than five stars with no text: it tells the next customer and Google what the job was and where. The routine I set up:"),
        ol("the job is closed and the customer gets a text with a direct link to the review form the same day"),
        ol("the message suggests mentioning what was fixed and the neighborhood, in the customer’s own words"),
        ol("every review gets a reply within a few days, including the angry one about the call-out fee"),
        p("Housecall Pro, ServiceTitan and Jobber can send the review request automatically when a job is closed, so nobody has to remember. Paid reviews, requests sent only to happy customers and discounts in exchange for reviews break Google’s rules, so none of them is used."),

        h2("Local SEO for plumbing companies: citations and listings beyond Google"),
        p("Beyond Google, a plumbing company is listed in many places: Yelp, BBB, Angi, Nextdoor, Apple Business Connect, Bing Places, the local chamber of commerce, and the “find an installer” pages of the water heater and fixture brands you fit. Google compares these with your profile. A company that has moved, changed its number or rebranded often has old details spread across a dozen sites, which weakens Google’s confidence in the profile. I find the listings that matter for plumbing in your country, correct the name, address and phone, and add the missing ones. Mass submissions to hundreds of directories are not part of the work."),

        h2("Local Services Ads and the map: where Google Guaranteed plumbers appear"),
        p("For plumbing searches, Local Services Ads with the Google Guaranteed badge often sit above the map. They are paid per lead, require background checks and license verification, and their order depends on things like distance, reviews and how quickly you answer. They do not change your position in the map results, and the map does not depend on whether you buy them."),
        p("The two work side by side: the ads take the top of the screen for those who pay, and the map takes the next three places for free. Many plumbers use both. I do not run Local Services Ads, but the habits that help the map — quick answers, a verified business, a steady flow of reviews — help there too, and the reports show map calls separately from ad leads."),

        h2("Fake plumber listings in Google Maps: how to report spam competitors"),
        p("Plumbing is one of the trades with the most spam in Google Maps: names stuffed with keywords, addresses at empty lots or mailbox stores, and lead-generation networks that forward calls to whichever plumber pays. They hold map positions that real companies would otherwise have. What can be done:"),
        li("“Suggest an edit” on the listing for a stuffed name or a business that does not exist at that address"),
        li("Google’s Business Redressal Complaint Form for networks of fake listings, with evidence: street photos of the address, screenshots, notes on where the number forwards"),
        li("a check after a few weeks, because removed listings sometimes return under a new name"),
        p("Google decides what to remove, and not every report succeeds. But reporting is allowed, costs nothing, and can free a map position faster than months of other work."),

        h2("Call tracking for plumbers without breaking NAP consistency"),
        p("To know how many calls come from the map, the profile needs its own tracking number. Done carelessly, this creates the very problem local SEO tries to avoid: different phone numbers in different places. The safe set-up:"),
        li("the tracking number as the primary phone in the Google profile, your main number as the additional phone"),
        li("your main number on the website, in listings and in the structured data"),
        li("on the website, dynamic number insertion only for visitors from ads or other tracked sources, with the main number kept in the page code"),
        li("the profile’s website link tagged with UTM parameters, so visits from the map show separately in analytics"),
        p("The report then shows calls from the map, calls from the website and calls from ads as separate lines, which is the only way to see what each one brings."),

        h2("Local AI search for plumbers: how ChatGPT and Google AI Overviews pick a plumber (GEO, AEO)"),
        p("Ask ChatGPT, Perplexity or Google’s AI Overviews for “a good emergency plumber in [town]” and the answer is assembled from business listings, review sites and the companies’ own websites. For a plumber, generative engine optimization (GEO) and answer engine optimization (AEO) build on local SEO:"),
        li("the same name, phone and service area on every listing, so the assistant does not confuse you with a similarly named company"),
        li("reviews that say what was fixed and where, which assistants summarize"),
        li("24/7 availability, license and insurance written on your website as text, not only in a badge image"),
        li("structured data on the website that matches the profile"),
        p(
          "I check what assistants say about your company before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much local SEO for plumbers costs"),
        li("Local SEO audit for a plumbing company — profile, reviews, listings, website: from 250 €, one-off, with fixes ranked by impact."),
        li("One-off set-up — categories, services, service area, listings clean-up, review requests, call tracking: 250–700 €."),
        li("Monthly local SEO for a plumber — photos and updates, reviews, listings, spam reports and reporting on map calls: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "The map is one part of search. Emergency and service pages, pricing pages and technical fixes are on the ",
          link("SEO for plumbers", "/seo-for-plumbers"),
          " page; a new site is described on the ",
          link("website for plumbers", "/website-for-plumbers"),
          " page and its design on the ",
          link("plumbing website design", "/plumbing-website-design"),
          " page. Map results for other trades are covered on the ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          " page, and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Local SEO for plumbers: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does local SEO for plumbers cost?", "An audit of the profile, listings and website costs from 250 € one-off, the set-up 250–700 €, and monthly local SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after seeing your profile."],
          ["How long does it take a plumber to get into the map pack?", "Corrections to categories, services and hours can show within a few weeks. A steady flow of reviews and clean listings builds up over two to four months. In big cities, where the map is crowded with spam and well-reviewed competitors, it takes longer."],
          ["Can a plumber show up in Google Maps without showing a home address?", "Yes. Set the profile up as a service-area business: the address is hidden and the map shows the area you cover. Google still needs a real address behind it for verification; a mailbox or virtual office is a common reason for suspension."],
          ["Should a plumber set the Google profile to open 24 hours?", "Only if someone really answers the phone at night. A profile open 24 hours can appear for late-night searches, but calls that end in voicemail turn into bad reviews."],
          ["Do Local Services Ads help a plumber rank in the map?", "No. They are a separate paid placement and do not change your map position. The same habits — fast answers, a verified business, a steady flow of reviews — help in both."],
          ["How many Google reviews does a plumbing company need?", "There is no fixed number. Compare yourself with the three plumbers in the map for your main searches: you need a similar or larger number, more recent ones, and new reviews coming in after every job."],
          ["Can you get fake plumbing listings removed from Google Maps?", "I can report them with evidence through “Suggest an edit” and Google’s Business Redressal Complaint Form. Google makes the decision: some listings are removed within weeks, others need a second report, and some come back later under a new name."],
          ["Do you do local SEO for plumbers outside Poland?", "Yes. Local SEO is done remotely — the profile, listings for your country, review requests and tracking — for plumbing companies in the US, Canada, the UK or Australia. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order local SEO for your plumbing company: what to send me"),
        p(
          "Send the company name, the Google Maps link, the website, the towns and neighborhoods you cover and whether you take calls 24/7. I will reply with what I would change first in the profile and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
