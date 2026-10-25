// Landing page fixture: Realtor website design (EN), group
// «realtor-website-design». New page.
// Semantic core: ref/real-estate-finance.md / .csv, realtors group + BRIEF.md:
// realtor website design / website design for realtors / website design
// realtor / real estate agent website design 720 each (H1, H2s, metaTitle) ·
// website for realtors 1,300 (intro, FAQ) · realtor website design templates
// 1,300 + website templates for realtors 480 + real estate agent website
// templates 90 (H3 under the IDX H2) · best website for realtors 590 + best
// realtor website design 140 + related «real estate agent website examples»,
// «top real estate agent websites» (H2, patterns only, no agents named) ·
// website builder for realtors 480 + idx website for realtors 390 + best
// website builder(s) for realtors 210 + best idx website for realtors 50 + free
// (idx) website for realtors 40/30 (IDX builder vs custom H2, H3s, FAQ) · mls
// website for realtors 480 (listing and IDX text, FAQ) · custom realtor website
// design 10 (H3). PAA used: «How to create a website for real estate?» (FAQ),
// «What CRM do most realtors use?» (lead H2 + FAQ, no statistics).
// Intent: ref/intent-check-real-estate-finance.md — «realtor website design»
// vs «real estate agency website design» 0 shared URLs → separate from
// /real-estate-agency-website; «realtor website design» vs «seo for realtors»
// 0 shared URLs → separate from /seo-for-realtors; «realtor website» is
// realtor.com (people looking for homes) → not targeted. SERP: Agent Image,
// Real Estate Designer, Maxa Designs, HousingWire, galleries (Awwwards,
// Dribbble, Webflow).
// This page = what an individual agent’s or small team’s site looks like and
// how it is built: first screen, IDX builder vs custom (honest), templates,
// bio and personal brand, neighborhood pages, listing pages and video, home
// valuation and lead forms into the CRM (Follow Up Boss, kvCORE, Lofty —
// general, no integration claimed), speed with heavy photos, brokerage name /
// license / Equal Housing / Fair Housing (general, «check with your managing
// broker»), owning the domain and content when changing brokerage, AI-readable
// design. Design is sold with development; prices include both.
// NOT on this page: agency or developer sites, property catalogs and portals
// (/real-estate-agency-website, /property-developer-website — linked once);
// realtor SEO, Google Business Profile, ranking neighborhood pages
// (/seo-for-realtors — sibling); catalog SEO (/seo-for-real-estate).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const realtorWebsiteDesignEn = {
  lang: "en",
  group: "realtor-website-design",
  slug: "realtor-website-design",
  title: "Realtor website design",
  heading: "Realtor Website Design for Real Estate Agents",
  excerpt:
    "Realtor website design and build from one person: your personal brand on the first screen, neighborhood pages, listings with photos and video, home valuation requests that reach your CRM, and a site that stays yours when you change brokerage.",
  seo: {
    metaTitle: "Website Design for Realtors and Agents | Bandziuk",
    metaDescription:
      "Realtor website design with the build included: agent bio and brand, neighborhood pages, listings with video, valuation leads sent to your CRM. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Your domain, your site"],
  heroPhonePoints: ["What is my home worth?", "Neighborhood guides", "Featured listings", "Call · Text"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple realtor website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Realtor website with neighborhood and listing page designs, IDX search through your provider, video, valuation and showing requests sent to your CRM, and local SEO setup, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with realtor website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Your face and name, not a stock skyline", text: "Bio, portraits and a short video introduction" },
        { _key: k("o"), iconName: "map-pin", title: "A page for each neighborhood you work", text: "Your photos, dated market notes, local listings" },
        { _key: k("o"), iconName: "layers", title: "Listing pages with video tours", text: "Galleries that swipe fast on a phone" },
        { _key: k("o"), iconName: "plug", title: "Valuation and showing requests into your CRM", text: "Follow Up Boss, kvCORE or the tool you use" },
        { _key: k("o"), iconName: "gauge", title: "Fast with heavy photos", text: "Under 2.5 s on a phone, video on tap" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Name, brokerage, areas and languages as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple realtor website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Neighborhoods, listings, IDX, CRM leads, local SEO", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Real estate and service websites I have designed and built",
      subtitle:
        "Cyprus VIP Estates is a luxury real estate site I designed and built from scratch: a filterable property catalog, an interactive map, video presentations of projects, CRM integration and versions in English, German, Polish, Russian and Hebrew. It brings in buyer leads, and I still do its SEO every month. Alongside it: a premium-design site for a Warsaw renovation and property-investment company, a rebuild for a 3D laser scanning company whose organic traffic grew 29 times, a multilingual site for an education agency covering ten countries and a tyre-storage landing page with SEO the owner edits himself.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your realtor website design",
      subtitle: "I reply within one business day with a plan for the home, neighborhood and listing pages and a fixed price.",
      contextLabel: "Your name, team or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "The agent page my brokerage provides", "An IDX builder site", "An older WordPress or custom site"] },
        { _key: k("z"), question: "What should the site bring you first?", options: ["Seller leads and listing appointments", "Buyer leads", "A stronger personal brand", "Clients in a second language"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do realtor website design and build the site myself, for individual real estate agents and small teams, so design and development come from one person at one price. You already appear on the brokerage site and on Zillow and Realtor.com; a website of your own is the one place shaped around how you work that carries your name from one brokerage to the next."),

        h2("Realtor website design: what buyers and sellers check on an agent’s website"),
        p("Buyers usually find a home first and look up the agent afterwards; sellers compare two or three agents before a listing appointment. Both open your site on a phone, and the first screen answers them before they scroll:"),
        li("who you are — your photo, your name, the brokerage you work with and the area you cover, in one line such as “Homes in [neighborhood] — [Name], [Brokerage]”"),
        li("what you are best at — first-time buyers, luxury homes, condos, relocation or investors"),
        li("the next step for each side — “What is my home worth?” for sellers, search or featured listings for buyers"),
        li("how to reach you now — call, text and email, each one tap away"),
        p("A full-screen drone video pushes all four answers below the fold on a phone; video belongs on the listing and neighborhood pages."),

        h2("IDX website builders for realtors or a custom real estate agent website"),
        p("Most agents choose between three things: the free agent page their brokerage provides, a subscription IDX website builder — Placester, Real Geeks, Luxury Presence, the site that comes with kvCORE and similar platforms — or a custom site. Each fits a different stage, and a builder is not a wrong choice."),
        h3("When an IDX builder or a brokerage page is enough"),
        li("you are new, the budget is small and you need MLS search on the first day"),
        li("most of your business comes from referrals and your sphere, not from search"),
        li("the builder’s layouts suit you and you do not plan many pages of your own"),
        h3("When a custom realtor website design pays off"),
        li("your brand and your neighborhoods should look like you, not like a layout many agents in your market already use"),
        li("you want neighborhood guides, market updates and video pages that build up under your own domain"),
        li("you work in two languages or with relocation and international buyers"),
        li("the site, the domain and the content must stay yours when you change brokerage or software"),
        p("A custom site does not mean giving up listing search. MLS data still comes from an IDX provider you subscribe to, such as iHomefinder, embedded in your design; your MLS and your broker approve the feed, and the MLS display rules apply. The trade-off in plain terms: a builder is cheaper to start and has saved searches and alerts ready; a custom site costs more at the start and gives you control over everything around the search."),
        h3("Realtor website design templates"),
        p("Realtor website design templates — WordPress real estate themes, Squarespace or Webflow layouts — sit between the two. With a real agent’s content their gaps show: one “Communities” page instead of a page per neighborhood, no place for a valuation request, an IDX plugin styled differently from the theme. As a start, with those limits accepted, a template works."),

        h2("Agent bio and personal brand in real estate agent website design"),
        p("People choose an agent before they think about the brokerage, and the About page with its photos carries most of that choice. That is why it is designed first:"),
        li("portraits and working photos taken for the site — at a showing, on your streets, with your team — in the same light and framing"),
        li("a bio written as an introduction: where you live, which areas and property types you know, how you work with buyers and with sellers"),
        li("designations, certifications and languages as a short list in text, not inside badges"),
        li("reviews from Google, Zillow and Realtor.com, each with its source named"),
        li("your own colors and logo next to the brokerage’s, in the proportion your brokerage’s brand rules allow"),

        h2("Neighborhood and community pages on a realtor website"),
        p("Neighborhood pages show local knowledge that a portal cannot. They share one layout, so the set stays consistent as you add areas:"),
        li("a description in your own words: streets, housing types, commute"),
        li("your photos and a short video walk rather than stock images"),
        li("schools, parks and transit as facts with links to official sources, not your rating of them"),
        li("active and recently sold listings from that area through the IDX feed"),
        li("a market note refreshed monthly or quarterly, with the date shown"),
        li("a contact block that names you as the agent for this area"),
        p(
          "Getting these pages found in Google and on the map is SEO work, described on the ",
          link("SEO for realtors", "/seo-for-realtors"),
          " page.",
        ),

        h2("Listing pages, photos and video tours in realtor website design"),
        p("Your own listings are marketing, not only data. A listing page designed for your site does more than a standard IDX template:"),
        li("a large photo gallery that opens quickly and swipes on a phone"),
        li("a video tour or 3D walk-through near the top, loaded only when the visitor taps play"),
        li("price, beds, baths, size, lot and fees in a fixed block, as text"),
        li("a floor plan, a map and a short story of the home in your words"),
        li("a showing request button, with the listing brokerage credited as your MLS requires"),

        h2("Home valuation and lead forms that reach your real estate CRM"),
        p("Most leads on an agent’s site come from three forms: a home valuation request, a showing request and a buyer consultation. Each asks only what the first reply needs — the address and the home’s basics for a valuation, the listing and a preferred time for a showing."),
        p("I do not put an invented instant estimate on the page. The valuation form starts a conversation, and you answer it with your own market analysis, which is why sellers ask an agent in the first place. If your IDX or valuation tool provides an automated estimate, it can sit on the page with its own disclaimer."),
        p("Leads go where you already work — Follow Up Boss, kvCORE, Lofty or another CRM — through the CRM’s own form, its API or an automation service, depending on your plan. Each lead carries the page it came from, so you see which neighborhood or listing brought it. I check what your account supports before quoting."),

        h2("A fast realtor website on a phone, even with heavy listing photos"),
        p("A realtor’s site carries far more weight than a typical service business site: dozens of photos per listing, video, maps and an IDX script. The build keeps the main content of each page visible in under 2.5 seconds on a phone, the level Google rates as good:"),
        li("photos resized for each screen and served as WebP or AVIF"),
        li("galleries that load the first image at once and the rest as the visitor swipes"),
        li("video and 3D tours shown as a poster image until someone taps play"),
        li("maps and IDX search loaded only on the pages that use them"),

        h2("Brokerage name, license details and Fair Housing on a real estate agent website"),
        p("An agent’s website is advertising, and real estate advertising has rules. In the US, state license laws generally require the brokerage name in advertising, some states require license numbers, and the Fair Housing Act applies to every word on the site. The design gives these items fixed places:"),
        li("the brokerage name and contact details on every page, where your state and your broker require them"),
        li("your license number and the Equal Housing Opportunity logo in the footer"),
        li("MLS attribution and the IDX disclaimer next to listing data"),
        li("neighborhood copy that describes homes and places, not the kind of people who should live there"),
        p("Rules differ by state and by brokerage, so check the wording with your managing broker before launch. In Canada, the UK and Australia other regulators set the rules, and the same fixed places hold what yours require."),

        h2("Best websites for realtors: what top real estate agent websites have in common"),
        p("Lists of the best real estate agent websites mix luxury teams with solo agents in small towns. Set the budgets aside and the same patterns repeat:"),
        li("one person or one team clearly in charge of the first screen"),
        li("separate paths for sellers and buyers from the home page"),
        li("neighborhood pages with the agent’s own photos and dated market notes"),
        li("listing pages with video that still load fast"),
        li("reviews with their sources, placed next to the contact buttons"),
        p("Galleries on Awwwards or Dribbble show home pages; open the neighborhood and listing pages too — that is where a visitor decides to call."),

        h2("Owning your realtor website and domain instead of renting a platform"),
        p("Agents change brokerages and software more often than careers. A brokerage page stays with the brokerage when you leave, and a builder site usually stays with the builder when you cancel: the domain can be pointed elsewhere, but the design, the neighborhood guides and years of market notes rarely move with it."),
        p("Here the domain is registered in your name, the hosting is on your account, and the code and content are handed over at launch. When you join another brokerage, the logo and footer change and everything else stays. After launch you pay for hosting, the domain and your IDX provider, if you use one — there is no monthly fee to me."),

        h2("A realtor website that ChatGPT and Google AI Overviews can read"),
        p("Buyers and sellers now ask ChatGPT, Perplexity and Google’s AI Overviews for “a realtor in [suburb] who speaks Spanish” or “an agent who sells condos in [neighborhood]”. An assistant can only suggest an agent it can read about. The design keeps the facts as page text — your name, brokerage, license, areas, languages, property types and contact details — matching your Google Business Profile and your Zillow and Realtor.com profiles. RealEstateAgent structured data describes you, neighborhood pages answer common questions directly, and every market note shows its date."),
        p(
          "Being named in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much realtor website design costs"),
        p("Design is not sold separately: each price covers design and development."),
        li("A simple realtor website — home page, About, a few neighborhood pages, featured listings, contact and valuation forms: 700–1,400 €."),
        li("A full site with neighborhood and listing page designs, IDX search through your provider, video, leads sent to your CRM, brokerage and Fair Housing details and local SEO setup: from 2,000 €."),
        p(
          "All ranges are on the ",
          link("pricing", "/pricing"),
          " page, and how I build websites in general is on the ",
          link("website development", "/services/website-development"),
          " page. Brokerages that need a full property catalog and developers selling new projects will find their own pages: ",
          link("real estate agency website", "/real-estate-agency-website"),
          " and ",
          link("property developer website", "/property-developer-website"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Realtor website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does realtor website design cost?", "The price covers design and development together: 700–1,400 € for a simple realtor website, from 2,000 € for a site with neighborhood and listing page designs, IDX search through your provider, leads sent to your CRM and local SEO setup. Your IDX subscription is paid to the provider. I quote a fixed price after a short description of your business."],
          ["How do I create a website for real estate as an individual agent?", "Start with the first screen and three page types: About, neighborhood and listing. Then decide how listings get onto the site — an IDX builder, an IDX provider embedded in a custom design, or featured listings only — and where leads should go. Design, texts, build and launch follow; I do all of it myself."],
          ["Is an IDX website builder or a custom site better for a realtor?", "A builder suits a new agent with a small budget who needs MLS search right away. A custom site pays off when your brand, neighborhood content, a second language or ownership matter more. Both can show MLS listings; with a custom site they come from an IDX provider you subscribe to."],
          ["Can my website show MLS listings?", "Yes, through IDX. You need MLS membership and your broker’s approval, and you subscribe to an IDX provider whose search is embedded in the design. The MLS display rules — attribution, disclaimers, refresh times — are built into the listing pages."],
          ["What CRM do realtors use, and can the website send leads to it?", "Agents use many CRMs — Follow Up Boss, kvCORE, Lofty and others, often the one their brokerage provides. The website sends valuation, showing and contact requests to yours through its form, API or an automation service, depending on your plan. I confirm what your account supports before the quote."],
          ["What happens to my website if I change brokerage?", "It stays yours. The domain, hosting, code and content are in your name, so moving brokerage means changing the logo, the footer and the required brokerage details, not rebuilding the site."],
          ["How do you work with a US or Canadian agent from Poland?", "Remotely and in English. Calls and design reviews fit my afternoon and evening in Warsaw, which is the morning and early afternoon on the East Coast; between calls we comment in a shared design file. Contracts and invoices are in euros."],
          ["Will my realtor website show up in ChatGPT answers?", "Design alone does not put an agent into AI answers, but it can keep one out: facts hidden in images, sliders and videos cannot be read. The site keeps your name, areas, languages and brokerage as text with structured data; the ongoing visibility work is part of my SEO and GEO service."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order realtor website design: what to send me"),
        p(
          "Send your name and brokerage, a link to your current site or agent page, the neighborhoods you work, whether you mostly list or buy, the CRM and IDX provider you use and two or three agent sites you like. Portraits or listing photos, if you have them, help me show a first screen that looks like you. I will reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
