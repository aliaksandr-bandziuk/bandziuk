// Landing page fixture: SEO for Moving Companies and Movers (EN), group
// «seo-for-moving-companies». New page.
// Semantic core: ref/home-services.md, movers group (US): seo for moving
// companies 880 (H1, metaTitle, several H2) = seo for movers 880 (H2, intro) ·
// local seo for movers 110 (local H2) · seo services for moving companies 30
// (cost H2) · seo for movers and packers 10 (packing mention). Mention only:
// moving marketing 320, marketers for movers 320, google ads for moving
// companies 110, how to advertise moving company 20 (advertising H2 + FAQ).
// PAA: What are some effective advertising ideas for a moving company? (H2 +
// FAQ).
// Intent: ref/intent-check-home-services.md — «seo for moving companies» vs
// «seo for movers» 5 of 10 shared URLs → one page. «seo for moving companies»
// vs «moving company website design» 0 shared (templates, builders) → no
// separate website page; one H2 about the website inside this page.
// Angle: local vs long-distance vs interstate pages, city-to-city route pages
// only for lanes the company runs, quote forms and estimates (in-home, video,
// binding/non-binding), lead aggregators selling one lead to several movers,
// trust (USDOT/FMCSA and state licensing in general terms, valuation
// coverage), fake broker listings on the map, seasonality, storage and
// commercial moves, AI answers.
// NOT on this page: junk hauling and cleanouts (/junk-removal-seo — linked
// once); freight and trucking websites (/logistics-company-website — linked
// once from the website H2); site build in depth (/services/website-development);
// map work in depth (/services/local-seo-services); Google Ads, LSA and lead
// buying (not offered, mentioned as channels only).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; prices for big US metros from
// 1,300 €.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForMovingCompaniesEn = {
  lang: "en",
  group: "seo-for-moving-companies",
  slug: "seo-for-moving-companies",
  title: "SEO for moving companies and movers",
  heading: "SEO for Moving Companies and Movers",
  excerpt:
    "I do SEO for moving companies and movers: local, long-distance and route pages, quote forms that reach your estimator fast, USDOT and insurance facts, Google Maps and reviews, and answers in ChatGPT, so moves are booked with you, not sold as shared leads.",
  seo: {
    metaTitle: "Mover SEO: Route Pages, Quotes and Google Maps | Bandziuk",
    metaDescription:
      "SEO for movers: local and long-distance pages, city-to-city routes, quote forms, USDOT trust signals, reviews and AI answers. Moving SEO audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Local, long-distance, interstate", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Movers Austin to Denver", "Free video estimate", "USDOT number shown", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Moving company SEO audit: website, quote form, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for movers: move-type and route pages, trust pages, quote tracking, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a moving company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for moving companies",
      items: [
        { _key: k("o"), iconName: "layers", title: "Pages for each type of move", text: "Local, long-distance, interstate, office, storage" },
        { _key: k("o"), iconName: "map-pin", title: "Route pages for lanes you drive", text: "City to city, with transit times and real reviews" },
        { _key: k("o"), iconName: "file-text", title: "Quote forms that get filled in", text: "Short first step, video estimates, CRM with source" },
        { _key: k("o"), iconName: "shield-check", title: "USDOT, insurance and valuation facts", text: "The checks customers make before booking a mover" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Price logic and facts assistants can repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in quotes and booked moves", text: "Compared with what shared leads cost you" },
      ],
      prices: [
        { _key: k("r"), label: "Moving company SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for movers", value: "from 800 € / month", note: "route pages, map, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service websites that live on calls and quote requests",
      subtitle:
        "Three of these are Warsaw service firms whose phone rings from search and the map: an auto repair shop where I worked on local SEO, Google Maps, UX and service pages; Felgilab, a wheel-renovation workshop rebuilt on WordPress with service and price pages; and a tyre-storage business with a landing page whose SEO texts the owner edits himself. Next to them, an education agency with one multilingual site covering ten countries, and a psychotherapist in Milan whose 468 posts moved to a new site with 301 redirects from every old URL and whose new pages already appear in ChatGPT answers. A mover needs the same pieces: a page for each job and place, a strong map profile and requests that can be counted.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your moving company",
      subtitle: "I reply within one business day with what I would fix first — move-type pages, routes, the quote form or your map profile — and a fixed price.",
      contextLabel: "Moving company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which moves do you want more of?", options: ["Local residential moves", "Long-distance and interstate", "Office and commercial moves", "Storage customers"] },
        { _key: k("z"), question: "Where do most of your jobs come from now?", options: ["Bought moving leads", "Google Ads or Local Services Ads", "Google search and Maps", "Realtor and repeat referrals"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for moving companies is the work that puts your crews in front of people searching for movers in your towns and on your routes, and turns those searches into quote requests and booked moves. I do it myself, as a single SEO consultant who also builds websites, for independent movers with a few trucks and for family moving companies that have grown into a warehouse and a sales office. Call it SEO for movers or for moving companies — it is measured in booked estimates."),

        h2("What SEO for moving companies covers: from “movers near me” to a booked estimate"),
        p("A move usually starts with a search weeks before the date: “movers near me”, “cheap movers in Tampa”, “long distance moving company Dallas”, “movers from Boston to Chicago”. The customer opens four or five sites, fills in two forms and books whoever replies first with a clear price and looks trustworthy. Moving company SEO works on each step of that path:"),
        li("pages that answer local, long-distance and route searches"),
        li("the Google Business Profile and the map results for “movers near me”"),
        li("the quote form and how fast a request reaches your estimator"),
        li("registration, insurance and reviews — what a customer checks before handing over everything they own"),
        li("answers in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "Hauling unwanted furniture and clearing out houses is a different trade with different searches; if that is where your trucks spend most days, see the ",
          link("junk removal SEO", "/junk-removal-seo"),
          " page.",
        ),

        h2("Local, long-distance and interstate moves: separate pages in SEO for movers"),
        p("A two-bedroom apartment across town, a house moved 300 miles within the state and a family relocating from New Jersey to Florida are three different purchases. They are priced differently — by the hour for local moves, by weight or volume and distance for long hauls — and searched with different words. One “Moving services” page cannot rank for all three."),
        h3("Local moving pages"),
        p("Hourly rates or the minimum charge, crew size, what is included (blankets, shrink wrap, furniture disassembly), stairs and elevator bookings in apartment buildings, and how street parking on moving day is arranged."),
        h3("Long-distance and interstate moving pages"),
        p("How the estimate is made, delivery windows, whether the load travels alone or shares a truck, storage in transit, and the federal registration interstate moves require. Customers compare carefully here, because the bill is large and the truck leaves with all their belongings."),
        h3("Office, piano and senior moving pages"),
        p("Office relocations, piano and safe moves, and senior moves organized by adult children each have their own searches and questions. Each gets a page only if your crews do the work."),

        h2("City-to-city route pages for movers: which routes deserve a page"),
        p("Searches like “movers from Austin to Denver” or “Chicago to Phoenix moving company” come from people who already know the date and the distance — the most valuable visitors a long-distance mover gets. A route page ranks when it carries what only a company running that lane knows: how often your trucks go that way, typical transit time, whether customers can share a load to lower the price, the delivery window, and photos or reviews from moves on that route."),
        p("The usual mistake is generating hundreds of route pages from one template with the city names swapped. Google treats them as doorway pages and trusts the whole site less. I start with the five to fifteen routes you drive most and add new ones when the jobs are there."),

        h2("Moving quote forms and estimates: in-home, video and online inventory"),
        p("For a mover the quote request is the conversion, so the form decides how much search traffic becomes revenue. A good first step asks only what the estimator needs to call back: moving from and to, date or month, home size and a phone number. A fifty-item inventory list scares people off on a phone; it belongs in a second step or a video survey."),
        li("a video survey option — the customer walks the rooms on a call — is quicker to book than an in-home visit and gives a firmer price"),
        li("a page explaining binding, non-binding and not-to-exceed estimates in plain words, because customers search those terms while comparing quotes"),
        li("every request sent to your moving CRM — SmartMoving, Supermove or the one you use — with the page and search that brought it"),
        li("a reply within minutes in business hours; in moving, the first credible quote often wins the job"),

        h2("USDOT number, insurance and reviews: trust signals in moving company SEO"),
        p("“Moving scams” and “how to check a moving company” are searched by the same people who later search for movers. In the US, interstate household movers register with the FMCSA and display a USDOT number, and many states license movers who work inside the state. Showing those facts plainly helps both customers and search:"),
        li("USDOT and state license numbers as text in the footer and on the about page, not inside an image"),
        li("a page on valuation coverage — what basic released value covers and what full value protection adds — in general terms, with your own options"),
        li("a real street address for the office and warehouse, photos of your own branded trucks and of the crew"),
        li("reviews on Google, Yelp and the BBB that mention the route or type of move"),
        p("Requirements change and differ by state; check the current rules for your operation. Nothing here is legal advice."),

        h2("Local SEO for movers: Google Business Profile, service area and fake listings"),
        p("For “movers near me” the map usually comes before the regular results, and the moving category has a known problem: lead brokers and out-of-state operators create listings that look like local movers. A company with a real yard and real trucks wins by being complete and consistent:"),
        li("a moving category such as “Moving company” as the primary one, and a storage category only if you run a warehouse"),
        li("a service area that matches where you really book local moves"),
        li("new photos of trucks, crews and the warehouse every month"),
        li("a review request after each delivery, asking customers to mention where they moved from and to"),
        p(
          "Listings of brokers posing as local movers can be reported to Google through its redress form. Map work in depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Advertising ideas for a moving company: lead sites, Google Ads and SEO compared"),
        p("Ask movers what works and you hear the same list: realtor and apartment-complex referrals, trucks as rolling billboards, Google Ads, Local Services Ads, Yelp and moving lead websites. Lead aggregators are where many owners lose the most: one form on a quote site is sold to several movers at once, so you pay to compete with four other companies for the same customer."),
        p("Paid channels bring calls this week and stop with the budget. SEO brings requests that come to you alone, with no fee per lead, but it needs months. A common mix is ads for the summer peak while route pages and the map profile grow. My part is search and AI answers, and the pages I build are the same pages your ads can land on."),

        h2("Seasonality in SEO for moving companies: summer peak and slow months"),
        p("Most household moves in the US happen between May and September, with spikes at the end of each month and around school calendars; college towns add move-in and move-out weeks. Searches follow the same curve, and new pages take weeks or months to rank, so the work runs ahead of it: route pages and summer content are written in winter, review requests are pushed hardest in summer, and the off-season goes to commercial moving and storage, which sell all year."),

        h2("Storage, packing and commercial moving pages for the whole year"),
        p("Storage is searched on its own — “moving and storage near me”, “storage in transit” — and a warehouse with vaults or containers deserves a page with sizes, access hours and how pricing works. Office and commercial moves keep crews busy when residential demand drops, and they are decided by managers who read about insurance certificates, after-hours scheduling and how equipment is labeled and set up again."),

        h2("The moving company website: what the site needs for SEO and quote requests"),
        p("Rankings bring visitors; the website decides whether they ask for a quote. Typical problems: a quote widget that breaks on a phone, stock photos of smiling movers, no price logic anywhere, and the USDOT number hidden in an image. A moving site that works is fast on a phone, shows your own trucks and people, has a short quote form near the top, and keeps one page for each move type and main route."),
        p(
          "If the site has to be rebuilt rather than fixed, the ",
          link("website development", "/services/website-development"),
          " page describes how I build sites; freight carriers and trucking firms will find their version on the ",
          link("logistics company website", "/logistics-company-website"),
          " page.",
        ),

        h2("SEO for movers in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People now ask ChatGPT, Perplexity and Google’s AI Overviews “how much does it cost to move a three-bedroom house across the country”, “how do I check a mover’s USDOT number” or “which movers in Denver are reliable”. The assistant answers with figures and a few company names. Getting into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a moving company it rests on:"),
        li("price logic and typical ranges written on your pages, so the assistant can cite you instead of a national cost guide"),
        li("registration, insurance, years in business, fleet and service area in plain sentences"),
        li("MovingCompany structured data with the areas you serve and links to your profiles"),
        li("the same details and steady reviews on Google, Yelp and the BBB, which assistants cross-check"),
        p(
          "At the start and again after the work, I put your customers’ questions to the assistants and note which movers they name. The method is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO services for moving companies cost"),
        li("Moving company SEO audit — website, quote form, Google Business Profile, reviews and AI answers: from 250 €, one-off, with fixes ordered by impact."),
        li("One-off work — move-type and route pages, trust and valuation pages, quote tracking into your CRM, structured data: 250–700 €."),
        li("Monthly SEO for movers — new route and service pages, map profile, reviews, AI visibility and reports in booked moves: from 800 € per month; in big US metros such as Los Angeles, New York or Chicago from 1,300 € per month."),
        p(
          "A small mover in a mid-sized market often gets most of the effect from the audit, a fixed profile and a handful of strong pages. How monthly work runs is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for moving companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a moving company cost?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in big US metros where many movers fight for the same searches. After a short description of your company, routes and towns I give a fixed price."],
          ["How long does SEO take to bring moving quotes?", "Profile fixes can show on the map within weeks. New move-type and route pages usually need three to six months to bring steady requests, so pages meant for the summer peak should go live in winter or early spring."],
          ["What are some effective advertising ideas for a moving company?", "Referrals from realtors and apartment managers, branded trucks, reviews after every move, Google Ads or Local Services Ads in the peak season, and SEO for the searches you want long-term: local moves, long-distance moves and your main routes. Bought leads work too, but they are often shared with several competitors."],
          ["Should a mover buy leads or invest in SEO?", "Bought leads start at once and cost per lead, and the same customer often gets calls from four or five movers. SEO takes months, then brings requests that come only to you. Many companies keep a paid channel for the peak and rely on it less as their pages grow."],
          ["Do I need a separate page for every city-to-city route?", "Only for routes you really run often enough to say something specific: frequency, transit time, shared-load options and reviews from that lane. Hundreds of copied route pages are treated as doorway pages and can hurt the whole site."],
          ["Should my USDOT number be on the website?", "Yes, as text on the about page and in the footer, together with state license numbers where they apply. Customers check them, and so do the AI assistants that answer “is this mover legit” questions."],
          ["Can a consultant in Poland do SEO for a US moving company?", "Yes. Everything is done online and in English, from the route pages to the map profile. Warsaw afternoons and evenings fall on US mornings, so a call can fit before your crews head out on the East Coast or in the Central time zone. I invoice in EUR under a written contract."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your moving company: what to send me"),
        p(
          "Send the company name, the website and Google Maps links, the moves you want more of — local, long-distance, office or storage — your main routes and towns, and the CRM or quote tool you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
