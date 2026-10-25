// Landing page fixture: Small business website design (EN), group
// «small-business-website-design».
// Semantic core: ref/small-business.md / small-business.csv, website / design
// group + brief: website design for small business / web design for small
// business / design website for small business 1,900 (one bucket) · web design
// for small companies 1,900 · small business website redesign 1,900 · website
// design services for small business 880 · website developers for small
// business 720 · inexpensive website design for small business 320 (H3) ·
// average cost of website design for small business 320 (FAQ) · website design
// company for small business 260 (FAQ) · how much does a small business
// website cost 210 (H2 + FAQ) · website for small business 1,900 (mostly
// builder demand — answered by the builder-or-custom H2).
// PAA used: How to make your own website for a small business? (FAQ on
// builders); How much does it cost to build a website in 2026? (cost H2).
// Related searches: Website developers for small business, Best small business
// website design (pages H2).
// Intent: ref/intent-check-small-business.md — «website for small business» vs
// «best website builder for small business» 2 shared URLs, 4 shared domains →
// a large share of the demand is choosing Wix / Squarespace / GoDaddy /
// WordPress.com, hence the H2 «Website builder or a custom website for a small
// business» with both sides. «small business website cost» vs «small business
// website design» 0 shared URLs, 3 shared domains (forbes, wix, reddit) → cost
// is one H2 + FAQ here, not a separate article. «startup website design» and
// «b2b website design» 0 shared URLs with this page → separate pages.
// NOT on this page: SEO as a service (/seo-services-for-small-business); Google
// Business Profile, reviews, citations, map pack (/local-seo-for-small-business);
// the 239 «website builder for small business» phrases (5,400 / 4,400) — builder
// comparison demand, not targeted, only answered in one H2; startups
// (/startup-website-design); B2B (/b2b-website-design); industry design
// (/plumbing-website-design, /dental-website-design, /restaurant-website-design,
// /hotel-website-design, /contractor-website-design).
// Owner’s rule: every page covers AI search; never say there are no clients
// from the visitor’s segment.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const smallBusinessWebsiteDesignEn = {
  lang: "en",
  group: "small-business-website-design",
  slug: "small-business-website-design",
  title: "Small business website design",
  heading: "Small Business Website Design",
  excerpt:
    "I design and build websites for small businesses: a page for each service, call and message buttons on every screen, text and prices you change yourself — at a price published before you write to me.",
  seo: {
    metaTitle: "Small Business Website Design and Development | Bandziuk",
    metaDescription:
      "Small business website design and build by one person: service pages, one-tap contact, fast on phones, yours to edit and own. From 700 €, prices published.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Prices published up front"],
  heroPhonePoints: ["Call · WhatsApp", "Services and prices", "Open today 8–18", "Request a quote"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple small business website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Small business website with service and area pages, quote or booking form, integrations and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with small business website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each service you sell", text: "What is included, a price or range, real photos" },
        { _key: k("o"), iconName: "phone", title: "Call, WhatsApp and directions on every page", text: "The way your customers prefer to reach you" },
        { _key: k("o"), iconName: "file-text", title: "Text, prices and hours you edit yourself", text: "A simple admin panel, no developer needed" },
        { _key: k("o"), iconName: "gauge", title: "Fast on a phone", text: "Pages load in under 2.5 s on mobile data" },
        { _key: k("o"), iconName: "shield-check", title: "Yours: domain, code and content", text: "No per-feature subscription, no lock-in" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Facts as text, structured data for the business" },
      ],
      prices: [
        { _key: k("r"), label: "Simple small business website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Service and area pages, forms, integrations, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Small business websites I have designed and built",
      subtitle:
        "Small local businesses: a renovation company, a car repair shop, a wheel-repair workshop, a tyre-storage service and a 3D laser scanning and BIM company. Each site is built to turn visits into calls and quote requests and to load fast on a phone.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your small business website",
      subtitle: "I reply within one business day with a list of pages for your site and a fixed price within the published ranges.",
      contextLabel: "Business name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A Wix, Squarespace or GoDaddy site", "An old WordPress site", "Only a Google or Facebook page"] },
        { _key: k("z"), question: "How do customers usually reach you?", options: ["Phone calls", "Forms and email", "WhatsApp or text", "They walk in"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design and build websites for small businesses, so design and development come from one person, at a price you can see before you contact me. Most owners I work with run everything themselves: they answer the phone, do the work, send the invoices and have maybe an hour a week left for the website. The site has to work without that hour — bring calls and requests, show what you sell and what it costs, and stay easy to change when prices or opening hours change."),

        h2("Website design for small business: what the site has to do for an owner"),
        p("A small business does not need a website that looks like a corporation’s. It needs one that does three jobs every day without supervision:"),
        li("says in one sentence what you do and where, so the visitor knows within seconds they are in the right place"),
        li("makes contact easy in the way your customers prefer — a call, a WhatsApp message, a form, or directions to your door"),
        li("answers the questions you would otherwise answer on the phone ten times a week: prices or price ranges, hours, the area you serve, how long a job takes"),
        p("Everything else — animations, sliders, a page about the company mission — comes after these three, and often not at all. Good web design for small business is mostly a matter of deciding what to leave out."),

        h2("Website builder or a custom website for a small business"),
        p("Wix, Squarespace, the GoDaddy website builder and WordPress.com put a site online in a weekend for a monthly subscription. Many people who search for a website for a small business are really choosing between these tools, and for some of them a builder is the right choice. Better to say that here than to sell a custom site to someone who does not need one."),
        h3("When a website builder is enough for a small business"),
        li("you sell one or two services in one place, and the site is mainly an online business card"),
        li("you have the time to assemble it from a template and keep it up to date"),
        li("your customers come through referrals, social media or foot traffic, not from Google searches"),
        li("you are testing an idea and do not yet know whether the business will be running in a year"),
        h3("When a custom small business website pays off"),
        li("you sell several services and want each one found in Google on its own, with its own page, text and price"),
        li("you want full control over SEO: page addresses, titles, structured data, redirects and loading speed"),
        li("the monthly bill keeps growing — a plan upgrade for a booking form, an app for reviews, another for a second language"),
        li("the site has to work with other tools: a booking system, a CRM, invoicing, a delivery or reservation platform"),
        li("you want to own the site and be able to move it to another host or developer without rebuilding it"),
        p("A custom site costs more at the start and less over the years: no per-feature subscriptions, and hosting a small, fast site is cheap. If you start on a builder and outgrow it, moving later means building the site again, not exporting it — that is the real cost to weigh."),

        h2("Web design for small companies: the pages a small business website needs"),
        p("Small business websites need fewer pages than most owners expect, but they need the right ones:"),
        li("a home page that says what, where and how to reach you, with the main services one tap away"),
        li("a page for each service or product line people search for, with what is included, a price or range and your own photos"),
        li("a page about you and the team — in a small business, customers choose people, not a brand"),
        li("reviews, ideally the ones customers already left on your Google Business Profile or another platform they trust"),
        li("contact and location: an address on a map, hours, the service area, parking or how to find the entrance"),
        p("The best small business websites rarely have more than this at launch. A blog is optional: if nobody will write in it, it is better left out than left with three posts from years ago."),

        h2("Website developers for small business: one person from design to launch"),
        p("An agency splits a small website between a project manager, a designer, a developer and a copywriter, and the price reflects four people. I do all of it myself: the structure, the design, the build in Next.js or WordPress, the page texts together with you, the SEO basics and the launch. You talk to the person who does the work, and a decision takes a message instead of a meeting."),
        h3("What website design services for small business include"),
        p("In both price ranges you get:"),
        li("the design for phones and desktops, agreed with you before the build"),
        li("development, hosting setup, SSL and your domain connected"),
        li("page titles, descriptions, structured data and a sitemap, so Google can index the site from the first day"),
        li("Google Analytics 4 and Search Console connected, with calls, messages and form sends counted"),
        li("an admin panel where you change text, prices, photos and hours without calling anyone"),
        p(
          "The general way I build sites, for any size of business, is described on the ",
          link("website development", "/services/website-development"),
          " page.",
        ),

        h2("A fast small business website with one-tap contact on a phone"),
        p("Most visits to a local business website come from phones, often straight from Google Maps or a search for a service nearby. The design and build are checked against that visit:"),
        li("pages load in under 2.5 seconds on a phone, the Largest Contentful Paint level Google rates as good"),
        li("call, WhatsApp and directions buttons on every page, large enough for a thumb"),
        li("forms with as few fields as the job allows: a name, a phone number and a short description are often all you need"),
        li("text that can be read without zooming and colors that stay readable outdoors"),

        h2("A small business website that ChatGPT and Google AI Overviews can read"),
        p("People now ask ChatGPT, Perplexity or Google’s AI Overviews for recommendations: a bakery that makes custom cakes, an accountant who speaks Polish, a bike repair shop open on Sunday. Assistants can only suggest what they can read and check. The site is built so the facts about your business are text, not pictures — services, prices, area, hours and languages — with structured data for the business, its services and reviews, and the same name, address and phone number as on your Google Business Profile and in directories."),
        p(
          "Getting mentioned in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google search and on the map is covered on the ",
          link("SEO services for small business", "/seo-services-for-small-business"),
          " and ",
          link("local SEO for small business", "/local-seo-for-small-business"),
          " pages.",
        ),

        h2("Small business website redesign without losing Google rankings"),
        p("Many owners come with a site that is five or ten years old, built by a relative or by an agency that has since closed, slow on a phone and impossible to edit. A small business website redesign keeps what still works — the domain, the pages Google already ranks, the reviews, the good photos — and replaces what does not."),
        p(
          "Before the new site goes live, every old address is mapped to a new page and redirected, titles and structured data are carried over, and after launch Search Console is checked for errors. Moving away from Wix, Squarespace or GoDaddy follows the same steps: the content is moved over page by page and the old addresses are redirected. The full process is on the ",
          link("website redesign services", "/services/website-redesign-services"),
          " page.",
        ),

        h2("Website design for your type of small business"),
        p(
          "Some trades need specific things from a site: emergency calls for plumbers, appointment booking and patient trust for dentists, menus and table reservations for restaurants, direct bookings for hotels, project galleries and estimate forms for contractors. Each has its own page: ",
          link("plumbing website design", "/plumbing-website-design"),
          ", ",
          link("dental website design", "/dental-website-design"),
          ", ",
          link("restaurant website design", "/restaurant-website-design"),
          ", ",
          link("hotel website design", "/hotel-website-design"),
          " and ",
          link("contractor website design", "/contractor-website-design"),
          ". For any other kind of small business, this page is the place to start.",
        ),

        h2("How the small business website design process works"),
        ol("Brief. You send what you sell, where and to whom, the questions customers ask, and any photos and texts you already have. A voice message is fine."),
        ol("Structure and fixed price. I propose the list of pages and a price. If the scope changes later, the change is priced before it is made."),
        ol("Design, phone first. The home page and one service page are designed and agreed with you; the other pages follow the same style."),
        ol("Build and texts. I build the site and fill it in. If you have no texts, I write them from your brief and you correct the facts."),
        ol("Launch and hand-over. Domain, analytics and Search Console are connected, you get a short guide to editing, and the site is yours."),

        h2("How much does a small business website cost"),
        p(
          "My prices are published on the ",
          link("pricing", "/pricing"),
          " page, so you know the range before writing to me. Design is included in both:",
        ),
        li("A simple small business website — home page, a few service pages, about, contact and a quote form: 700–1,400 €."),
        li("A full website with a page for each service and area, a detailed quote or booking form, integrations with your tools and local SEO set up: from 2,000 €."),
        p("After launch there is no monthly fee to me. You pay your hosting and domain provider, and you pay me only for changes you ask for."),
        h3("Inexpensive website design for a small business: where the price can go down"),
        p("The price goes down when you bring your own texts and photos, when the site has fewer pages, and when we launch the simple version first and add pages as the business grows. It does not go down by skipping mobile layout, speed or the SEO basics — those are the parts that make a site bring customers instead of just existing."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Small business website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a small business website cost?", "With me, 700–1,400 € for a simple small business website and from 2,000 € for a full site with service and area pages, a quote or booking form, integrations and local SEO. Design is included in both, and the prices are published on the pricing page. After a short description of the business I give a fixed quote."],
          ["What is the average cost of website design for a small business?", "There is no single average: it depends on who builds the site and in which country. A builder costs a monthly subscription plus your own time; a freelancer or one-person studio sits in the middle; an agency with a team usually charges more for the same number of pages, because more people work on it. My own ranges are published, so you can compare."],
          ["Should I build my small business website myself on Wix or Squarespace?", "If you sell one or two services, have time for it and do not depend on Google searches, a builder is a reasonable start. Hire a designer and developer when you need a page per service, control over SEO, integrations, or when builder subscriptions and add-ons start costing more each year."],
          ["Is a website design company or a freelancer better for a small business?", "A website design company brings a team, which suits large projects with many stakeholders. For a small business site, one experienced person who designs, builds and writes is usually faster and cheaper, and you always talk to whoever does the work."],
          ["How long does it take to build a small business website?", "A simple site usually takes two to four weeks from the brief, a full site four to six. Most of the time depends on how quickly texts, photos and feedback are ready."],
          ["Can I update the website myself after launch?", "Yes. Texts, prices, photos, hours and new pages are edited in a simple admin panel, including from a phone. You do not need a developer for everyday changes."],
          ["Do I need a website if I have a Google Business Profile and social media?", "A profile brings people to you; a website is where they check you before calling — services, prices, photos, reviews. It is also the only place you own: a profile or a social page can change its rules, but your site and domain stay yours."],
          ["Do you design websites for small businesses outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, currency, address format and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order small business website design: what to send me"),
        p(
          "Send the business name, a link to your current website or Google profile, what you sell, where you work and how customers usually reach you. A few photos of your work, your team or your premises help me show you a home page that looks like your business. I will reply with a list of pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
