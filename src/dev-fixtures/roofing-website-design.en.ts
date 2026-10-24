// Landing page fixture: Roofing website design (EN), group «trades».
// Semantic core: ref/trades-sites.csv + trades-sites.md, roofing group:
// roofing website design 210, website design for roofing 210, website design
// roofing 210, roofing website design agency 70, roofing contractor website
// design 50, roofing company website design 40, best roofing website design
// 20, website design for roofing company 20, free roofing website templates
// 10; related: Roofing website design template, roofing company website
// template 10, roofing websites templates 10, best looking roofing websites 10.
// Intent: ref/intent-check-trades-sites.md — «roofing website design» top-10:
// servicetitan, comradeweb, fiverr, homeprodigital, dribbble, readmetalroofing,
// hookagency, pinterest → agencies, freelancers, inspiration boards and
// templates. 0 shared URLs with «roofing websites» and «roofing company
// website» (development page) and with «contractor website design».
// This page = what the homeowner sees and does: two paths (urgent leak or
// storm vs planned replacement), first screen, mobile button bar and estimate
// CTA, drone and before-after photos, trust signals, storm-season banner,
// financing display, inspiration, templates vs custom, agency vs designer.
// Not here: page structure, storm-area pages, CRM, instant estimate tools,
// speed, ownership, migration (/roofing-websites); SEO (/roofing-seo).
// Owner’s rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const roofingWebsiteDesignEn = {
  lang: "en",
  group: "roofing-website-design",
  slug: "roofing-website-design",
  title: "Roofing website design",
  heading: "Roofing Website Design",
  excerpt:
    "I design roofing websites and build them myself: drone and before-and-after roof photos, license, insurance and warranties next to every button, a storm-season banner and two clear paths — an urgent leak or a planned replacement.",
  seo: {
    metaTitle: "Website Design for Roofing Contractors | Bandziuk",
    metaDescription:
      "Roofing website design for storm calls and planned replacements: drone and before-after photos, license, warranties, financing. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Licensed · Insured", "Before and after from above", "Free roof inspection", "Financing available"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple roofing website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Roofing website with storm, replacement and roof system pages, project galleries, financing and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with roofing website design",
      items: [
        { _key: k("o"), iconName: "message-circle", title: "Two paths: a leak today or a roof next season", text: "A call for the urgent, an estimate for the planner" },
        { _key: k("o"), iconName: "image", title: "Drone and before-and-after roof photos", text: "Finished roofs shown from above, with town and material" },
        { _key: k("o"), iconName: "shield-check", title: "License, insurance, certifications, warranties", text: "Next to every button, written as text" },
        { _key: k("o"), iconName: "phone", title: "A button bar that stays on the phone screen", text: "Call and book an inspection from any page" },
        { _key: k("o"), iconName: "file-text", title: "A storm banner and financing in the layout", text: "Designed in advance, switched on by your office" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Certifications and warranties as text, not images" },
      ],
      prices: [
        { _key: k("r"), label: "Simple roofing website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Storm, replacement and roof system pages, galleries, financing, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: local-service websites I have designed",
      subtitle:
        "No roofing companies among them. These are the nearest projects: a renovation company and an architecture studio shown through photos of finished work, a wheel workshop and a car repair shop whose customers call or send photos, and a tire storage page built around one button.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your roofing website design",
      subtitle: "I reply within one business day with a proposed first screen, a storm damage page and a replacement page layout, and a fixed price.",
      contextLabel: "Roofing company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What brings most of your jobs?", options: ["Storm and insurance work", "Planned replacements", "Repairs", "Commercial roofs"] },
        { _key: k("z"), question: "Do you have aerial or drone photos of your roofs?", options: ["Yes, plenty", "A few", "Not yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design roofing websites and build them myself, so design and build come from one person at one price. Roofing website design decides what a homeowner sees and does on your site — usually on a phone, sometimes standing in the yard looking at shingles the wind tore off, sometimes weeks into planning a new roof. Every screen is laid out to end in one of two actions: a call about a roof that leaks now, or a request for an inspection and estimate."),

        h2("Roofing website design for two visitors: an urgent leak or storm, and a planned roof replacement"),
        p("The urgent visitor has a stain spreading on the ceiling or debris in the yard after last night’s storm. They want to know whether you can come and how soon. The planning visitor has a roof near the end of its life and will compare three or four roofers on finished roofs, materials, warranties and monthly payments before inviting one to measure. They read the same site in very different ways, and the design gives each a path of its own:"),
        li("the urgent path is short: a call button, emergency tarping if you offer it, one line on how soon a crew can come"),
        li("the planned path is longer: materials and colors, finished roofs, warranty, financing, then an estimate request"),
        li("the two buttons look different, so the urgent visitor never lands in a multi-step form and the planner is not pushed to phone before they are ready"),

        h2("Website design for roofing: what the first screen shows on a phone"),
        p("The first screen of a roofing site carries four things and nothing else:"),
        li("what you do and where: “Roof replacement and repair in [your area]”, not a slogan about quality"),
        li("two buttons: call, and book a roof inspection — marked free only if it is"),
        li("one line of proof: licensed and insured, years in business, review score"),
        li("one photo of a roof you finished, taken from above"),
        p("Sliders, video backgrounds and welcome paragraphs move down the page or go. They push the buttons out of view, and a homeowner looking at a damaged roof does not scroll to find them."),

        h2("Inspection and estimate buttons in mobile-first roofing contractor website design"),
        p("The layout is designed on a phone screen first; the desktop version is adapted from it. On phones the call button and the inspection button sit in a bar fixed at the bottom of the screen, where the thumb already is, on every page. On a desktop the phone number sits top right, where people look for it."),
        p("The wording changes with the page: “Book a hail damage inspection” on storm pages, “Get a replacement estimate” on replacement and material pages, “Call for emergency tarping” where that is the job. One “Contact us” across the whole site makes the visitor translate their problem into your menu."),
        p(
          "What the form asks, where requests go and how they reach your CRM is covered on the ",
          link("roofing websites", "/roofing-websites"),
          " page.",
        ),

        h2("Aerial, drone and before-and-after roof photos in roofing website design"),
        p("Homeowners rarely see their own roof from above, and a roof is hard to judge from the street. Aerial and drone photos show the finished job the way a ground shot cannot: straight courses, clean valleys, neat ridge caps, flashing around the chimney. A before-and-after pair from the same angle — the worn, patched roof and the new one — does more than any paragraph about workmanship. On each project:"),
        li("before and after from the same position, as a slider or side by side"),
        li("the roof system, color and product line under the photos"),
        li("the town or neighborhood, so visitors see roofs near their own"),
        li("one or two close-ups of details — drip edge, vents, flashing — for the visitor comparing roofers"),
        p("Commercial drone flights are regulated in most countries — in the US they need a pilot with an FAA Part 107 certificate — so drone shots come from a certified pilot on your team or a hired one. Phone photos from a ladder still work for details. Stock roofs are recognized at once and say nothing about your crew."),

        h2("Trust signals in roofing company website design: license, insurance, manufacturer certifications, warranties"),
        p("Every big storm brings storm chasers who knock on doors, take deposits and are gone before the first leak. Homeowners know it, and they look for signs that you will still answer the phone when the warranty matters. The design puts those signs next to every button, not in the footer:"),
        li("license number and insurance, written out so they can be checked"),
        li("manufacturer certifications — only programs you belong to, shown the way the manufacturer’s rules allow"),
        li("warranties in plain words: what the manufacturer covers, what your workmanship warranty covers, and for how long"),
        li("a local address and the year the company started"),
        li("a review score and recent reviews that name the roof, the town or the storm"),

        h2("A storm-season banner on a roofing website: when it appears and what it says"),
        p("After hail or high wind, visitors arrive with one question: can you inspect my roof this week? A slim banner above the header answers it before they look for anything else — the storm date and area, how soon you can inspect, and a button to book. Your office switches it on and off in the admin panel; a banner still announcing a storm from three months ago makes the site look abandoned."),
        p("The banner is designed before the season, with fixed wording, color and position, so it does not look improvised on the day. It uses the same accent color as the call button and never covers the button bar on phones."),

        h2("How to display financing in roofing website design"),
        p("A full replacement costs more than many homeowners keep in savings, so the planner looks for a monthly payment as much as for the total. Financing is shown where the decision is made, not on a page few people find:"),
        li("a short line under the estimate button on replacement and material pages: “Financing available”, linked to the details"),
        li("an example payment only if your lending partner gives you one you may publish"),
        li("the lender’s name, so the visitor knows who they would be borrowing from"),
        p("Financing stays off the urgent path: someone with water coming through the ceiling needs a crew, not a loan offer."),

        h2("Best roofing website design: what to take from Dribbble and Pinterest examples"),
        p("Searches for the best roofing website design lead to Dribbble shots and Pinterest boards: big aerial heroes, dark backgrounds, heavy type. They are useful for color, type and photo style. They are made to be admired as pictures, though, and rarely show the screens that decide whether a homeowner calls: a phone layout with the button bar, a replacement page with real text, an inspection form, a storm banner. When you send examples you like, I take the look from them and keep the layout that works for a roofing company."),

        h2("Free roofing website templates or a custom roofing website design"),
        p("Free roofing website templates and paid themes look finished in their demo: drone shots, invented reviews, a storm banner. With a real company’s content the gaps show — no separate urgent and planned paths, one page for every service, a contact form instead of an inspection request, no place for certifications or financing beside the buttons."),
        p("The choice depends on what the site has to carry. A roofer doing repairs in one town by referral can run on a well-chosen template with real photos for years. A company that depends on storm seasons, sells financed replacements and wants certifications next to every button ends up overriding the template piece by piece, and that usually costs more than a design made for the company from the start."),

        h2("Choosing a roofing website design agency or a single designer"),
        p("A roofing website design agency brings a team and often sells the site together with ads, lead generation and monthly marketing, sometimes to several roofers in one market. A single designer who also builds the site — that is how I work — means the person who drew the layout makes it work on a phone, at one price, without a retainer. Whoever you choose, ask:"),
        li("Will we see phone layouts of the key pages before anything is built?"),
        li("Are you designing for another roofer in our area?"),
        li("Can our office change the storm banner, projects and financing text without paying for each edit?"),
        li("Do we get the design files and the finished site when the project ends?"),

        h2("Roofing website design that ChatGPT and Google AI Overviews can read"),
        p("Homeowners increasingly ask ChatGPT, Perplexity or Google’s AI Overviews which roofers nearby are certified, or how a metal roof compares with shingles. Assistants read text, not pictures. A design that puts certifications in badge images, warranty terms in a graphic and service areas on a map image hides the very facts an assistant needs. The same facts set as real text beside the badges, with structured data behind the page, can be read and repeated."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google search and on the map is covered on the ",
          link("roofing SEO", "/roofing-seo"),
          " page.",
        ),

        h2("How the roofing website design process works and what it costs"),
        ol("Brief. You send your roof jobs and systems, towns, license, insurance and certifications, warranty terms, financing partner, reviews and photos of finished roofs."),
        ol("Phone layouts. I design the first screen, a storm damage page and a replacement page on a phone screen and agree them with you."),
        ol("Full design. The other pages, the storm banner and the desktop versions follow the same system."),
        ol("Build. The approved design is built into a fast site your office can edit."),
        p("Design is part of building the site, and the price covers both: a simple roofing website costs 700–1,400 €; a site with storm, replacement and roof system pages, project galleries, financing, a storm banner and local search optimization costs from 2,000 €."),
        p(
          "If you already have a website and want a new look without losing Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses and redirects in place. Companies that also do siding, windows or remodeling will find more on the ",
          link("contractor website design", "/contractor-website-design"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Roofing website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does roofing website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple roofing site, from 2,000 € for a site with storm, replacement and roof system pages, project galleries, financing and local search optimization. After a short description of the company I give a fixed quote."],
          ["How long does website design for a roofing company take?", "Phone layouts of the first screen, a storm damage page and a replacement page are usually ready within one to two weeks of the brief. The whole site, designed and built, typically takes three to five weeks."],
          ["Can I use a roofing website design template instead of a custom design?", "Yes, for a small company starting out. A template becomes a limit once you need separate urgent and planned paths, a storm banner, certifications and financing beside the buttons. Changing later usually means starting again."],
          ["Do we need drone photos for our roofing website?", "They help more than anything else, because they show the finished roof the way the homeowner never sees it. Use a certified drone pilot where the law requires one. Until you have them, careful phone photos of details and before-and-after pairs from the ground work well."],
          ["Can we show manufacturer certification logos on the website?", "Yes, if you hold the certification. Manufacturers usually have rules on how their program name and logo may be used, and the design follows them. The certification is also written as text, so search engines and AI assistants can read it."],
          ["Can you redesign our roofing website without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and structured data is carried over before the new design goes live, so the positions the site already has are kept."],
          ["Do you work with roofing companies outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order roofing website design: what to send me"),
        p(
          "Send the company name, a link to your current website or Google profile, the roof jobs you want more of and the towns you cover. A few aerial or before-and-after photos of finished roofs, your certifications and warranty terms help me show you a first screen that looks like your company. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
