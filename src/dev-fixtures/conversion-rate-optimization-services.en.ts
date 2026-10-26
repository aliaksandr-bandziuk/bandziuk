// Landing page fixture: Conversion rate optimization services (EN), group
// «conversion-rate-optimization-services», URL /services/conversion-rate-optimization-services.
// Semantic core: ref/general-services.md, EN «CRO» group: conversion rate
// optimization services 590 (H1, H2 on cost, FAQ) · conversion rate
// optimization companies 170 (H2 companies vs specialist) · ecommerce
// conversion rate optimization services 90 (H2) · website conversion rate
// optimization services 50 (H2 on what the work includes) · conversion rate
// specialist 10 (same H2 as companies). CRO audit and A/B testing are covered
// as H2s (brief).
// Intent: ref/intent-check-general-services.md — «conversion rate optimization
// services» vs «conversion rate optimization» 0/10 shared URLs, 0 shared
// domains: the services SERP is CRO agencies and tools (conversion.com,
// optimizely, conversionsciences, clutch), the bare term is informational
// (wordstream, designrush). This page sells the service; definitions are kept
// to one sentence.
// NOT on this page: «conversion rate optimization strategies» 110 —
// informational, a blog topic; «conversion rate optimization services pricing»
// 20 → /pricing (linked); «shopify conversion rate optimization services» 30 —
// not targeted (Shopify work is not offered); city and country tails (india,
// london, san diego, usa) — not targeted. SEO as a service →
// /services/seo-optimization-and-strategy; local visibility →
// /services/local-seo-services; store SEO → /services/ecommerce-seo-services;
// speed as a separate audit → /services/website-performance-and-code-audit;
// getting cited by AI → /services/ai-ready-seo-and-geo-optimization.
// Brief rules: no promised uplift percentages, no invented statistics; proof is
// Landi Room (100+ course sales from the first Google Ads campaign), ScanM2 (no
// leads for two years → leads every week), auto repair, tyre storage, Giuseppe
// (found the owner through ChatGPT).
import { p, h2, h3, li, ol, link, k } from "./pt";

export const conversionRateOptimizationServicesEn = {
  lang: "en",
  group: "conversion-rate-optimization-services",
  slug: "conversion-rate-optimization-services",
  parentPath: ["services"],
  pageType: "service",
  title: "Conversion rate optimization services",
  heading: "Conversion Rate Optimization Services: Analysis and Fixes in Your Site’s Code",
  excerpt:
    "I provide conversion rate optimization services as the developer who also fixes what the analysis finds: tracking you can trust, then changes to forms, first screens, checkout and speed, measured against a baseline.",
  seo: {
    metaTitle: "Conversion Rate Optimization Services from 250 € | Bandziuk",
    metaDescription:
      "CRO services from a developer: event tracking, funnel analysis, then fixes to forms, checkout, speed and contact buttons in your code. CRO audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Analysis + fixes in the code", "CRO audit from 250 €", "Measured against a baseline"],
  heroPhonePoints: ["What you get, in one line", "Call · WhatsApp", "Three-field form", "Request sent"],
  offers: [
    { _key: "offer1", _type: "offer", name: "CRO audit: tracking check, funnel analysis and a list of fixes sorted by effect", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Monthly conversion rate optimization: analysis, changes in the code and a monthly report", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with conversion rate optimization services",
      items: [
        { _key: k("o"), iconName: "trending-up", title: "Tracking that counts leads and sales", text: "GA4 events for forms, calls, WhatsApp and orders" },
        { _key: k("o"), iconName: "search", title: "Funnel and behavior analysis", text: "Where visitors enter, hesitate and leave" },
        { _key: k("o"), iconName: "layers", title: "First screens that say what you sell", text: "Offer, price level and one clear next step" },
        { _key: k("o"), iconName: "phone", title: "Forms and contact paths that work", text: "Fewer fields, tap to call, WhatsApp with context" },
        { _key: k("o"), iconName: "gauge", title: "Speed and mobile layout fixed in code", text: "Templates and images, not another plugin" },
        { _key: k("o"), iconName: "shield-check", title: "Trust where the decision is made", text: "Prices, reviews, terms and real photos" },
      ],
      prices: [
        { _key: k("r"), label: "CRO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly CRO work", value: "from 800 € / month", note: "analysis + changes in the code", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Websites I built to turn visits into sales and inquiries",
      subtitle:
        "A course landing page with Stripe Checkout that sold 100+ courses from its first Google Ads campaign, a 3D scanning and BIM company that went from no leads to inquiries every week, local service sites built around calls and WhatsApp, and a psychotherapist’s site whose owner was found through ChatGPT.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for conversion rate optimization",
      subtitle: "I reply within one business day with the first things I would check on your site and a fixed price.",
      contextLabel: "Website address",
      contextPlaceholder: "https://",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What should your website produce?", options: ["Calls and inquiries", "Online orders", "Bookings", "Sign-ups or downloads"] },
        { _key: k("z"), question: "How are conversions tracked now?", options: ["GA4 with events", "Only page views", "Not sure", "No analytics"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide conversion rate optimization services as the same person who builds and repairs websites, so the analysis ends in changes to your site’s code, not in a slide deck for someone else to implement. CRO means getting more of the visitors you already have to do what the site exists for: call, send an inquiry, book or buy. Most sites lose those visitors in a few predictable places — a first screen that does not say what is sold, a form that breaks on a phone, a delivery cost revealed at the last step, a contact button nobody finds. Finding them takes measurement. Fixing them takes a developer."),

        h2("Website conversion rate optimization services: what the work includes"),
        p("The mix depends on the site, but the work usually covers these parts:"),
        li("analytics and event setup: GA4 events for form sends, calls, WhatsApp clicks, bookings and purchases, so a conversion is counted the same way before and after every change"),
        li("funnel analysis: which pages people land on, where they leave, and how phones differ from desktops"),
        li("session recordings and heatmaps, used to see where people hesitate, tap on things that are not links or stop scrolling"),
        li("first screens: what you sell, for whom, where, at what price level, and one clear next step"),
        li("forms: only the fields you need, the right keyboard on a phone, errors shown next to the field and a confirmation that says what happens next"),
        li("speed: slow templates, heavy images and third-party scripts fixed at the source"),
        li("trust elements: real photos, reviews, prices or price ranges, terms, and who is behind the business"),
        li("calls to action and contact paths: call, WhatsApp, form and booking buttons placed where the decision is made and sized for a thumb"),
        p("Every check above is done on a phone first, where layout, form and speed problems show up before anywhere else."),

        h2("Conversion rate optimization companies vs a conversion rate specialist who writes the code"),
        p("Conversion rate optimization companies usually work in two steps: a strategist finds problems and writes recommendations, and your developer or another agency implements them weeks later. That model fits large stores with a product team, a testing program and enough traffic for several experiments a month."),
        p(
          "Most businesses looking for CRO help are in a different position: one website, one developer or none, and a list of known problems that has waited for months. As a conversion rate specialist who also builds sites in ",
          link("WordPress", "/services/wordpress-development-services"),
          " and ",
          link("Next.js", "/services/nextjs-development-services"),
          ", I change the template, the form or the checkout step myself, test it on real devices and measure it. The person who found the problem is the person who fixes it, so nothing gets lost in a ticket queue.",
        ),

        h2("CRO audit: what I check and what you receive"),
        p("A CRO audit is the usual start. I need read access to Google Analytics 4 and Search Console, and your definition of a good lead or a good order. Then I go through the site the way visitors do: from the pages they actually land on, on a phone, filling in and sending every form."),
        p("You receive a written list of problems, each with a screenshot or a short recording, why it costs you inquiries or sales, and the effort to fix it. The list is sorted by expected effect against effort, so the first items are cheap fixes on the pages with the most traffic. If tracking is missing or wrong, fixing it comes first: without it, nothing that follows can be measured. You can carry out the fixes with your own developer or have me do them."),

        h2("A/B testing in CRO: when your traffic is enough and when it is not"),
        p("An A/B test shows two versions of a page to two groups of visitors and compares the results. It is the cleanest way to measure a change, but it needs volume: each version has to collect enough conversions to tell a real difference from chance. A busy store can get a usable answer about a product page within weeks. A service site with a few dozen inquiries a month would wait many months for one test."),
        h3("When A/B tests are worth running"),
        li("pages with high traffic and frequent conversions: product pages, checkout steps, landing pages behind a large ad budget"),
        li("questions where the outcome is uncertain, such as how prices are presented or the order of checkout steps"),
        h3("Before-and-after measurement for smaller sites"),
        p("For most small and medium sites I use careful before-and-after measurement instead: a fixed baseline period, changes released in dated groups and annotated in analytics, conversion rates compared by channel and device, and the same period of the previous year where the business is seasonal. It is less precise than a test, so I use it for clear problems — a broken form does not need an experiment — and keep testing for the questions that remain open."),

        h2("CRO for lead-generation websites: from the first visit to a qualified inquiry"),
        p("On a lead-generation site the conversion is an inquiry, and its quality matters as much as the count. A form that collects ten vague messages is worse than one that collects four with a budget and a deadline. The work focuses on:"),
        li("service pages that answer what a buyer asks before contacting anyone: scope, process, price range, timelines and examples of work"),
        li("a quote form that asks for exactly what you need to reply with a price"),
        li("a thank-you page that says when and how you will answer"),
        li("tracking that separates spam and job applications from real inquiries"),
        p("ScanM2, a 3D laser scanning and BIM company, had received no leads for two years from its no-code website. After I rebuilt it on WordPress, keeping its design, it gets inquiries every week. That change came from search and conversion work together."),

        h2("CRO for local service businesses: calls, WhatsApp and forms"),
        p("For a workshop, a clinic or a repair service, most conversions happen on a phone, and many of them are not forms at all: people call, write on WhatsApp or tap for directions. Conversion work for local services means:"),
        li("call, WhatsApp and directions buttons on every page, fixed to the bottom of the screen on phones"),
        li("a WhatsApp link that opens with a prefilled message naming the service the visitor was reading about"),
        li("every tap on the phone number, WhatsApp button or map counted as a conversion, so you see which pages bring contacts"),
        li("opening hours, service area and price ranges visible without long scrolling"),
        p(
          "The Warsaw auto repair shop and the tyre-storage service in my portfolio are built this way. Getting found on the map in the first place is a separate job, covered by ",
          link("local SEO services", "/services/local-seo-services"),
          ".",
        ),

        h2("Ecommerce conversion rate optimization services: product page, cart and checkout"),
        p("In a store the path is longer, and every step can leak buyers:"),
        li("product page: photos that show the product in use, the price, delivery cost and time before the cart, availability, sizes and returns in plain words"),
        li("cart: quantities and options editable in place, the full cost visible, no forced account"),
        li("checkout: guest checkout, the payment methods buyers expect in their country, working autofill and clear error messages"),
        li("after the purchase: a confirmation page and email that answer “when will it arrive?”"),
        p(
          "The Landi Room course page is a compact example of a page built to sell: one offer, Stripe Checkout and a protected video link delivered automatically after payment. It sold more than 100 courses from its first Google Ads campaign. For product and category pages that need organic traffic, see ",
          link("ecommerce SEO services", "/services/ecommerce-seo-services"),
          ".",
        ),

        h2("CRO and SEO together: traffic that does not convert vs conversions without traffic"),
        p("A website can fail in two opposite ways. It can rank and get visits that leave without contacting you — a conversion problem that more traffic will not solve. Or it can turn its few visitors into customers well while almost nobody finds it — a visibility problem that CRO will not solve. Most sites have some of both, so I look at both numbers before deciding where your budget goes first."),
        p(
          "Conversion changes must not cost rankings: the headings, text and internal links a page ranks with are kept or moved on purpose, not deleted for a cleaner layout. The search side of the work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page.",
        ),

        h2("CRO for visitors who come from ChatGPT and Google AI Overviews"),
        p("Visitors who arrive from ChatGPT, Perplexity or a link in Google AI Overviews rarely see your homepage. The assistant sends them to the page it quoted: a service page, a price list, a blog post from two years ago. They come with part of their question already answered and a specific reason to click. So every page that can be cited has to work as a first page: who you are, what you offer, the price level and the next step, without assuming the visitor has seen anything else on the site."),
        p(
          "In analytics I separate this traffic — ChatGPT adds utm_source=chatgpt.com to its links, and other assistants show up as referrers — so you can compare how these visitors convert against search and ads. Giuseppe, a psychotherapist in Milan whose site I rebuilt, found me through ChatGPT. Getting cited at all is the work described on ",
          link("AI-ready SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          "; which sources assistants rely on when they recommend a business is in my ",
          link("study of 141 AI answers", "/blog/ai-assistant-recommendations-study"),
          ".",
        ),

        h2("How conversion rate optimization results are measured"),
        p("Before any change, we agree what a conversion is for you — a sent form, a call, a WhatsApp chat, a paid order — and I record a baseline. After each group of changes the report shows:"),
        li("conversion rate by channel and device, against the baseline and, where it matters, the same period last year"),
        li("the number and quality of leads or orders, not only the rate"),
        li("what changed on the site and when, so every rise or drop can be traced to a date"),
        p("Results are reported as measured numbers, including changes that made no difference, rather than as a percentage promised before anyone has seen your data."),

        h2("How much conversion rate optimization services cost"),
        li("CRO audit — tracking check, funnel analysis and a list of fixes sorted by effect: from 250 €."),
        li("One-off fixes — a form, a checkout step, a first screen or the speed of key templates: 250–700 € per task."),
        li("Monthly CRO work — analysis, changes in the code, tests where traffic allows and a monthly report: from 800 € per month."),
        p(
          "All ranges are on the ",
          link("pricing", "/pricing"),
          " page. The first call, 15–30 minutes, is free: we look at your site together and I tell you whether conversion work, SEO or both should come first.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Conversion rate optimization services: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What do conversion rate optimization services include?", "Tracking setup so conversions are counted correctly, analysis of where visitors leave, and changes to the site: first screens, forms, checkout, speed, trust elements and contact buttons. With me the changes are made in the code, not only recommended."],
          ["Can you guarantee a higher conversion rate?", "Nobody can name a figure before seeing your data. What I commit to is the method: tracking you can trust, documented changes and results reported against a baseline, including the changes that made no difference."],
          ["Is my website big enough for A/B testing?", "If a page gets only a few dozen conversions a month, an A/B test would take too long to give a reliable answer. For such sites I fix clear problems and measure before and after; A/B tests are kept for busy pages such as product pages or checkout."],
          ["Can you work on a website someone else built?", "Yes. Most CRO work starts on an existing site, usually WordPress, Next.js or another framework. I need access to the code or the admin panel and to analytics. On hosted builders the changes are limited to what the builder allows, and I tell you that before starting."],
          ["How soon do CRO changes show results?", "Tracking fixes give you reliable numbers right away. The effect of page changes shows within weeks on a busy site and over a few months on a small one, because a fair comparison needs enough conversions."],
          ["Do you work remotely with clients in the US, UK and EU?", "Yes, all CRO work is remote. I am based in Warsaw on Central European Time, which covers the whole UK and EU working day and the morning of the US East Coast. Invoices are issued in EUR by my Polish business, and we work in English."],
          ["How much do CRO services cost?", "A CRO audit costs from 250 €, one-off fixes 250–700 € per task, and monthly CRO work from 800 € per month. The first 15–30 minute call is free."],
          ["Should I start with a CRO audit or go straight to fixes?", "If tracking works and you already know the problem, for example a form that fails on phones, we can fix it directly as a one-off task. If you only know that the site brings too few inquiries or orders, start with the audit."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order conversion rate optimization services: what to send me"),
        p(
          "Send the website address, what counts as a conversion for you — a call, an inquiry, an order — roughly how many visits and conversions you get a month, and the pages you suspect are losing people. GA4 access helps but is not needed for the first reply. I will answer with what I would check first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
