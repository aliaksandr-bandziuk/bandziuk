// Landing page fixture: Local SEO for Lawyers (EN), group
// «local-seo-for-lawyers». New page.
// Semantic core: ref/lawyers.md / lawyers.csv (US) and BRIEF.md: local seo for
// lawyers 720 · law firm local seo 720 · lawyer local seo 590 · local seo for
// law firm 90 · local seo for personal injury lawyers 110 · local seo services
// for lawyers 20 · local seo tips for lawyers 10 · google lawyer reviews 210 ·
// attorney reviews by clients 170 (topic: reviews and what bar rules allow).
// Intent: ref/intent-check-lawyers.md — «law firm seo» vs «local seo for
// lawyers» 0 shared URLs, 2 shared domains; the local SERP is agencies
// (growlaw, lawfirmsites, telligentmarketing, thrivesearch, apollodigital) →
// own page selling the map side of legal SEO.
// Topics: Google Business Profile for law firms (one profile per office,
// categories by practice area, no keywords in the name), the map pack, Google’s
// rules for individual practitioner vs firm profiles, reviews and bar rules on
// testimonials, legal directories as citations (Avvo, Justia, FindLaw,
// Martindale-Hubbell, Super Lawyers, Nolo, state bar directories), office
// location pages vs virtual offices, Local Services Ads (Google Verified) vs
// organic.
// NOT on this page: practice-area architecture, YMYL content, technical SEO,
// consultant vs agency, measurement in signed cases (/seo-for-law-firms);
// personal injury case-type and city pages, intake speed, contingency
// messaging (/personal-injury-seo — one short section + link); building or
// designing the site (/lawyer-website-development, /law-firm-website-design).
// «lawyer reviews website» 390 / «website for lawyer reviews» 480 are people
// looking for review sites — not targeted.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const localSeoForLawyersEn = {
  lang: "en",
  group: "local-seo-for-lawyers",
  slug: "local-seo-for-lawyers",
  title: "Local SEO for lawyers and law firms",
  heading: "Local SEO for Lawyers and Law Firms",
  excerpt:
    "I do local SEO for lawyers and law firms: a Google Business Profile for each office, practice-area categories, client reviews within bar rules, consistent legal directory profiles and office pages, so your firm appears in the map when people nearby search for a lawyer.",
  seo: {
    metaTitle: "Law Firm Local SEO: Google Maps and Reviews | Bandziuk",
    metaDescription:
      "Local SEO for law firms: Google Business Profile per office, reviews within bar rules, Avvo and Justia listings, office pages, LSA vs organic. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google Maps + legal directories", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Family lawyer near me", "Top 3 on the map", "Reviews from past clients", "Call the office"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Local SEO audit for a law firm: Google Business Profiles, directories, office pages", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Google Business Profile, legal directory and review routine set-up for a law firm", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly local SEO for a law firm", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with local SEO services for lawyers",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile for each office", text: "Practice-area categories, the real firm name, hours" },
        { _key: k("o"), iconName: "message-circle", title: "A review routine within bar rules", text: "Asked after the matter, replies that keep confidences" },
        { _key: k("o"), iconName: "file-text", title: "Legal directory profiles that match", text: "Avvo, Justia, FindLaw, Martindale-Hubbell, state bar" },
        { _key: k("o"), iconName: "layers", title: "An office page for each location", text: "Address, attorneys, directions, courts nearby" },
        { _key: k("o"), iconName: "sparkles", title: "Named in local AI answers", text: "ChatGPT and AI Overviews read the same sources" },
        { _key: k("o"), iconName: "phone", title: "Calls from the map, counted", text: "Separated from Local Services Ads and the website" },
      ],
      prices: [
        { _key: k("r"), label: "Local SEO audit for a law firm", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly local SEO for a law firm", value: "from 800 € / month", note: "profiles, reviews, directories, office pages", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Local SEO portfolio: businesses that get calls from Google Maps",
      subtitle:
        "Businesses with a real address and clients from the surrounding area: an auto repair shop, a wheel-renovation workshop, a tyre-storage business, a renovation company and a 3D laser scanning and BIM company. The work is the same a law office needs for the map: a profile that matches the website, a clear address and phone, and pages that confirm what the listing says.",
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
      title: "Get a quote for local SEO for your law firm",
      subtitle: "I reply within one business day with what I would change first in your Google profiles and directory listings, and a fixed price. Please do not include details of any client matter.",
      contextLabel: "Firm name or Google Maps link",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Does your firm show up in the Google map for your main practice?", options: ["Yes, in the top 3", "Lower on the map", "Not at all", "Not sure"] },
        { _key: k("z"), question: "How many offices does the firm have?", options: ["One office", "Two or three offices", "Four or more", "We meet clients by appointment only"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Local SEO for lawyers is the work that puts a law firm into the three Google Maps results and the local search results when someone nearby searches for a divorce lawyer, an immigration attorney or a DUI defense firm. I do it myself — the Google Business Profile for each office, practice-area categories, reviews, legal directories and office pages — and I keep every step within Google’s rules and your bar’s rules."),

        h2("Lawyer local SEO and the map pack: how a law firm gets into Google’s top three"),
        p("For searches like “family lawyer near me” or “criminal defense attorney [city]”, Google shows a map with three firms above the regular results. On a phone they fill the screen, each with a star rating, a call button and directions. Google picks them by three factors:"),
        li("relevance — how well the profile’s categories, services and website match the search"),
        li("distance — how close the office is to the person searching, or to the place named in the search"),
        li("prominence — reviews, directory listings, links and mentions of the firm across the web"),
        p("Distance matters more in law than many firms expect: a firm with an office downtown may not appear for someone searching from a suburb ten miles away. Law firm local SEO cannot move the office, but it can make the firm the most relevant and most trusted choice within its reach."),

        h2("Google Business Profile for law firms: one profile per office, categories by practice area"),
        p("The profile is the center of lawyer local SEO. Each office where you meet clients gets its own profile, linked to its own office page on the website."),
        h3("Choosing Google categories for a law firm"),
        p("Google has categories by practice area: “Family law attorney”, “Divorce lawyer”, “Immigration attorney”, “Criminal justice attorney”, “DUI attorney”, “Employment attorney”, “Personal injury attorney” and others; the list changes, so I check it when setting up the profile. The primary category should be the practice that brings the most valuable cases; secondary categories cover the other practices you really handle. “Law firm” alone is too broad to win specific searches."),
        h3("The firm name in the profile: no keywords added"),
        p("The name must match what is on your sign, your letterhead and your bar registration. “Smith & Lee Law” is correct; “Smith & Lee Law — Best Divorce Lawyer Chicago” breaks Google’s guidelines, invites edits from competitors and can get the profile suspended."),
        h3("What else to fill in on a lawyer’s profile"),
        li("services listed per practice area, each with a short plain description"),
        li("hours, including whether you take calls after hours"),
        li("photos of the office entrance, the reception and the attorneys"),
        li("attributes such as languages spoken, online appointments and wheelchair access"),
        li("the website link pointing to the matching office page, not to the home page"),

        h2("Google’s rules for lawyer profiles: individual practitioner profiles and firm profiles"),
        p("Google treats lawyers, like doctors, as individual practitioners: a public-facing attorney may have a profile of their own in addition to the firm’s profile. That brings rules firms often get wrong:"),
        li("an attorney’s own profile carries only the attorney’s name, with no firm name or practice keywords added"),
        li("a solo attorney whose name is the firm usually needs one shared profile, not two that compete with each other"),
        li("when an attorney leaves, their profile is not deleted but marked as moved or closed, so calls do not go to a dead number"),
        p("Several profiles at one address with overlapping categories split reviews and can trigger suspension. I decide with you which profiles should exist and merge or close the rest."),

        h2("Office location pages for law firms, and why virtual offices get suspended"),
        p("A profile needs a real office where clients are received and where someone is present during the hours shown. Firms that want to appear in a neighboring city often rent a virtual office or a mail address there. Google checks such addresses, often by asking for video verification, and suspended profiles disappear from the map until reinstated."),
        p("What works instead is an office page for each real location: the address with directions and parking, the attorneys who work there, the courts nearby, office hours and reviews from clients of that office. For areas without an office, a firm can still rank in the regular results with practice-area content about that county, while the map stays tied to real addresses."),

        h2("Google lawyer reviews and bar rules on testimonials"),
        p("Reviews are what a prospective client reads before calling, and the number, freshness and wording of reviews also lift a firm in the map. Lawyers have to collect them with more care than other businesses."),
        h3("Asking clients for reviews without breaking the rules"),
        p("Ask after the matter is closed, with a direct link to the review form, and ask every client rather than only those you expect to be happy. Do not offer anything in exchange — a discount or a gift card breaks Google’s policies and, in many states, bar rules as well. Some bars also limit how reviews may be quoted on your own website, and may require a disclaimer next to testimonials; check your state bar’s rules before republishing reviews."),
        h3("Replying to lawyer reviews without revealing client confidences"),
        p("A negative review tempts an attorney to explain what really happened. Bar ethics opinions have warned that such a reply must not reveal anything about the client’s matter. A short reply that thanks the reviewer, states that the firm cannot discuss client matters and invites them to call the office protects the firm and still shows future clients that you respond."),

        h2("Legal directories for local SEO: Avvo, Justia, FindLaw, Martindale-Hubbell and bar directories"),
        p("Legal directories work as citations: listings with the firm’s name, address and phone that Google and AI assistants compare with your profile. The ones that matter for most US firms:"),
        li("Avvo, Justia, FindLaw, Nolo and Martindale-Hubbell profiles for the firm and each attorney"),
        li("Super Lawyers, where an attorney has been selected — if you display such a badge on the site, check how your state bar treats references to ratings"),
        li("your state bar’s lawyer directory and local bar association referral lists"),
        li("Apple Business Connect, Bing Places and Yelp for general map apps"),
        p("For firms in the UK, Canada or Australia, the regulator’s and law society’s registers play the same role. What counts is consistency: one version of the firm name, address and phone everywhere, including old directory profiles left after a move or a name change. A few dozen accurate listings beat hundreds of automatic submissions."),

        h2("Local Services Ads for lawyers (Google Verified) vs organic local SEO"),
        p("Local Services Ads appear above the map for many legal searches. Firms that pass Google’s checks — including a state bar license check for each lawyer — get the Google Verified badge, which replaced Google Screened on 20 October 2025, and pay per lead rather than per click. They bring calls from the first weeks; credits for invalid leads are now applied automatically."),
        p("Organic local SEO is slower but does not charge per call, and the profile, reviews and listings stay when the budget stops. The reviews you collect on the profile also feed LSA. Many firms run both: Local Services Ads for steady calls, local SEO so they depend on them less over time. I do the organic side and track calls from the profile separately from LSA, so you can compare them."),

        h2("Local SEO for personal injury lawyers: the most crowded map in legal search"),
        p(
          "In personal injury, the map for “car accident lawyer” in a large city is filled by firms with hundreds of reviews and offices placed across the metro area. Local work there starts with the suburb or town where your office is, not the whole city. The rest of PI strategy — case-type pages, city pages, intake and competition — is on the ",
          link("personal injury SEO", "/personal-injury-seo"),
          " page.",
        ),

        h2("Local SEO for lawyers in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("When someone asks ChatGPT, Perplexity or Google’s AI Overviews to recommend an immigration lawyer in their city who speaks Spanish, the assistant builds the answer from map data, reviews, legal directories and firm websites. Getting into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO), and for a law firm it rests on local SEO:"),
        li("the same firm and attorney details on Google, Avvo, Justia, the state bar directory and your site"),
        li("reviews that describe the kind of matter in the client’s words, which assistants summarize"),
        li("practice areas, languages, offices and counties served written as text on the office pages"),
        li("structured data that connects each office page with its Google profile"),
        p(
          "I check how assistants describe your firm before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How law firm local SEO results are measured"),
        p("Checking the map from your office tells you little, because results change with where the searcher stands. I report calls, direction requests and website clicks from each profile; map positions on a grid of points across your area for your main practices; reviews and rating per office by month; and visits from the profile in GA4, separated with UTM tags. Calls from the profile, from Local Services Ads and from the website are kept apart."),

        h2("How much local SEO services for lawyers cost"),
        li("Local SEO audit for a law firm — profiles, categories, directories, reviews and office pages: from 250 €, one-off, with fixes ranked by impact."),
        li("One-off set-up — profiles per office, categories, directory clean-up, review routine: 250–700 €."),
        li("Monthly local SEO for a law firm — updates, reviews, directories, office pages and reporting: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "For a firm with one office, a correct profile, clean directories and a review routine often bring most of the result. If you need more than the map — practice-area pages, content, technical fixes — see ",
          link("law firm SEO", "/seo-for-law-firms"),
          ". Local SEO for other kinds of businesses is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Local SEO for lawyers: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does local SEO for a law firm cost?", "An audit costs from 250 € one-off, the set-up of profiles, directories and a review routine 250–700 €, and monthly local SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after seeing your profiles."],
          ["Can each attorney at our firm have their own Google Business Profile?", "Public-facing attorneys can, under Google’s rules for individual practitioners, with only their own name on the profile. A solo attorney whose name is the firm is usually better served by one shared profile."],
          ["Can we use a virtual office to rank in another city?", "It is risky. Google expects a real office where clients are received, and virtual or mail addresses are a common reason for suspension. A real satellite office, or practice-area content about that county in the regular results, is the safer route."],
          ["Are lawyers allowed to ask clients for Google reviews?", "In most places, yes, if you ask every client, offer nothing in exchange and do not write or edit reviews. Some states limit how reviews and testimonials may be used in advertising, so check your state bar’s rules."],
          ["Are Avvo, Justia and FindLaw profiles worth keeping?", "Yes, as citations: they confirm the firm’s details for Google and AI assistants, and some clients find lawyers there. What matters is that each profile is claimed, accurate and matches your Google profile."],
          ["Should we run Local Services Ads or invest in local SEO?", "They do different jobs. Local Services Ads bring calls quickly and charge per lead; local SEO takes months and then brings calls without a per-lead cost. Many firms run both and compare the calls each brings."],
          ["Can a consultant in Poland do local SEO for a US, UK or Canadian firm?", "Yes. Profiles, directories and reporting are managed remotely, in English. My afternoon and evening in Central European Time overlap with the North American working day, and contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order local SEO for your law firm: what to send me"),
        p(
          "Send the firm’s website, the Google Maps links for each office, the practice areas you want more calls for, the attorneys who meet clients, the directories you are listed in and whether you run Local Services Ads. I will reply with what I would change first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
