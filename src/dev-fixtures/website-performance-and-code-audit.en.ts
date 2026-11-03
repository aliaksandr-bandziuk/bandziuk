// Landing page fixture: website performance and code audit (EN), group
// «website-performance-and-code-audit». REBUILD of the existing old-template
// page at the same address — replace-landing.cjs.
//
// Why this page (03.11.2026). 452 impressions in three months at average
// position 56.3 and zero clicks, on five exact-match queries that all belong
// to it:
//   website performance audit 150 (поз. 63) · web performance audit 140 (52) ·
//   website code audit 83 (55) · site performance audit 23 (66) ·
//   audit performance web 19 (58)
// Plus the measured demand behind them: «website speed optimization» 2400 and
// «why is my website slow» 170.
//
// EN only. The PL and RU versions of this page had ZERO impressions and zero
// queries in the same three months, and the Polish and Russian speed phrases
// came back below the measurement threshold in the grid rebuild. By the
// owner's rule a language version follows demand, so they stay in the general
// old-template queue.
//
// What was wrong with the old page:
//   — label headings from the old template: «Core Web Vitals Optimization»,
//     «Code & Structure Audit», «JavaScript & Rendering Optimization»,
//     «SEO & Accessibility Alignment», «Actionable Reporting», and «Image
//     Full» leaking into the heading list;
//   — the top query «website performance audit» was not in the metaTitle
//     («Website Performance Optimization & Code Audit» has no «performance
//     audit» in it);
//   — «website code audit» 83 impressions had no heading containing the phrase.
//
// Prices: audit €250 and redesign from €1,000 — both from the price list.
// Portfolio picks carry real Lighthouse numbers, which is the one place on the
// site where they are the point rather than decoration.
import { p, h2, h3, li, link, k } from "./pt";

export const websitePerformanceAndCodeAuditEn = {
  lang: "en",
  group: "website-performance-and-code-audit",
  parentPath: ["services"],
  slug: "website-performance-and-code-audit",
  title: "Website Performance and Code Audit",
  heading: "Website performance audit and code audit: why the site is slow and what to fix first",
  excerpt:
    "A performance audit measures what a visitor actually waits for and a code audit explains why. You get a prioritised list: what costs the most milliseconds, what it takes to fix, and what can be left alone. €250, and if the answer is «nothing worth fixing» I will say so.",
  seo: {
    metaTitle: "Website performance audit and code audit — €250",
    metaDescription:
      "Website performance and code audit: Core Web Vitals, JavaScript and rendering, server response. A prioritised fix list with before-and-after numbers. €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Core Web Vitals and code", "Audit €250", "Report in 3 working days"],
  heroPhonePoints: ["LCP 4.1s", "INP 320ms", "CLS 0.24", "Fix list"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Website performance and code audit with a prioritised fix list", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Rebuild of a site too slow to fix, keeping its rankings", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What is measured",
      title: "What a website performance audit covers",
      items: [
        { _key: k("o"), iconName: "gauge", title: "Core Web Vitals on real pages", text: "LCP, INP and CLS on the templates that earn" },
        { _key: k("o"), iconName: "code", title: "Website code audit", text: "What the code does that a speed test cannot see" },
        { _key: k("o"), iconName: "zap", title: "JavaScript and rendering", text: "What runs before the page becomes usable" },
        { _key: k("o"), iconName: "image", title: "Images, fonts and third parties", text: "The three things that usually carry the weight" },
        { _key: k("o"), iconName: "server", title: "Server response and caching", text: "Where the first byte is lost" },
        { _key: k("o"), iconName: "list-checks", title: "A prioritised fix list", text: "Cost in milliseconds against cost in hours" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("What a website performance audit actually measures"),
        p("A score out of 100 is not a diagnosis. The audit measures what a visitor waits for, on the pages that matter to the business rather than on the homepage: how long until the main content appears, how long until a tap does something, and whether the layout jumps while they are reading. Then it explains which piece of the page is responsible for each of those numbers."),
        p("Two things make this different from running a free test yourself. The first is that a test gives you a symptom and the audit gives you the cause — «the largest element takes 4.1 seconds» becomes «the hero image is a 2.4 MB PNG served at full size and the font blocks rendering until it loads». The second is prioritisation: of the twenty things a test flags, usually three carry almost all the delay, and the rest are noise that costs more to fix than it returns."),

        h2("Core Web Vitals: LCP, INP and CLS, and which one is costing you"),
        h3("LCP — how long until the main thing appears"),
        p("Usually an image, a heading or a hero block. The common causes are an oversized image, a font that blocks rendering, a slow first byte from the server, and a page that renders in the browser instead of arriving ready. This is the metric most often responsible when a page «feels» slow."),
        h3("INP — how long until a tap does something"),
        p("Replaced the old FID in 2024 and is harsher: it measures every interaction, not just the first. Heavy JavaScript on the main thread is the usual cause — analytics, chat widgets, sliders, and page-builder scripts that keep running after the page looks finished."),
        h3("CLS — how much the layout jumps while being read"),
        p("Caused by images without dimensions, ads and embeds inserted after load, and fonts that swap and reflow the text. Cheap to fix and often ignored, because it annoys visitors without showing up in any report the owner reads."),
        p(
          "What these three mean in practice, and what to check first when a site simply feels slow, is in the article ",
          link("why is my website slow", "/blog/why-is-my-website-slow"),
          ".",
        ),

        h2("Website code audit: what the code review finds that a speed test cannot"),
        p("A speed test sees the finished page. A code audit sees how it was built, which is where the fixable problems live: components re-rendering on every scroll, data fetched on the client that could arrive with the page, images not run through any pipeline, a bundle shipping libraries used on one screen to every screen, and third-party scripts loaded in the head because that is where the instructions said to put them."),
        p("It also finds what is cheap to leave alone. Not every inefficiency is worth paying to fix, and an audit that returns a list of forty items without saying which three matter has given you homework rather than an answer."),

        h2("JavaScript and rendering: why a fast server still gives a slow page"),
        p("A site can respond in 80 milliseconds and still take four seconds to become usable, because the server sent a nearly empty document and the browser had to download, parse and execute JavaScript before anything appeared. That pattern is normal in single-page applications and in WordPress sites carrying a page builder plus a dozen plugins."),
        p(
          "The fix is architectural rather than cosmetic: render on the server what can be rendered on the server, send to the browser only what the browser needs, and load the rest when it is actually required. On Next.js that is ",
          link("Next.js development", "/services/nextjs-development-services"),
          ", and when a site is too tangled to fix in place it is cheaper to ",
          link("rebuild it keeping the rankings", "/services/website-redesign-services"),
          " than to keep paying for patches.",
        ),

        h2("Performance audit or SEO audit — which one you need"),
        p("They answer different questions, and buying the wrong one wastes the money rather than half of it."),
        li("the pages load slowly, the site works and is found — a performance and code audit;"),
        li("the pages load fine and the site is not found — an SEO audit;"),
        li("traffic dropped after a redesign or a migration — an SEO audit first, because the cause is usually addresses and redirects rather than speed;"),
        li("Google says «poor» in Search Console but the site feels fast — a performance audit, because the field data disagrees with your laptop."),
        p(
          "What the search-side audit covers is on the ",
          link("SEO audit page", "/services/seo-audit"),
          ". Speed does affect rankings, but it is a tie-breaker between pages that are otherwise equal — it will not rank a page that answers nothing.",
        ),

        h2("What a website performance audit costs and what you get"),
        p(
          "The audit is €250 and you get a document, not a dashboard screenshot: measured numbers for the templates that matter, the cause behind each number, a fix list ordered by milliseconds gained against hours spent, and what I would not touch. If the site turns out to be too tangled to fix in place, a rebuild that keeps the existing rankings starts at €1,000, and I will say which of the two is cheaper for you. The full list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long a web performance audit takes and when the speed changes"),
        p("The report takes three working days. Implementation depends on what is found and is quoted after the audit rather than before it — anyone quoting the fix before measuring is guessing. Field data in Search Console moves on a 28-day rolling window, so Core Web Vitals there change about a month after the fixes ship, not the same week."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: measured performance, not promised performance",
      subtitle:
        "These cases carry their Lighthouse numbers because here the numbers are the point: a renovation and investment site at 96/98/100/100, a consultant's site at 100/100/100/100, an education agency site taken from 61 to 91 on performance, a full WordPress rebuild, and a multilingual property platform with a large catalogue.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "consultant-website-design-retail-analytics",
        "seo-case-study-education-agency",
        "felgilab-wordpress-rebuild",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Book a website performance and code audit",
      subtitle: "Send the address and I reply within one working day with what I would measure and what it will cost.",
      contextLabel: "Website address",
      contextPlaceholder: "Link to the site",
      buttonText: "Send and book the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is the site built on?", options: ["WordPress", "Next.js or React", "Shopify or a builder", "Not sure"] },
        { _key: k("z"), question: "What is the complaint?", options: ["Slow on phones", "Search Console says poor", "Visitors leave fast", "All of it"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Why speed decides whether AI assistants can read your site at all (GEO, AEO)"),
        p("The crawlers behind ChatGPT, Perplexity and Google's AI answers are stricter than Googlebot in one specific way: most of them do not execute JavaScript, and the ones that fetch a page give it far less time. A site that renders its content in the browser sends them an almost empty document, so an assistant asked about your company finds nothing to quote — not because the text is wrong, but because it was never in the HTML."),
        p(
          "That makes rendering a visibility question, not only a speed question: whatever you want quoted has to be in the server's response, as text. Getting an existing site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Website performance and code audit: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What does a website performance audit include?", "Measured Core Web Vitals on the templates that matter rather than on the homepage, a code review explaining the cause behind each number, the weight of images, fonts and third-party scripts, server response and caching, and a fix list ordered by milliseconds gained against hours spent — including what I would leave alone."],
          ["How is this different from running PageSpeed Insights myself?", "A test gives a symptom and a score; the audit gives the cause and an order of work. «LCP 4.1s» becomes «the hero is a 2.4 MB PNG at full size and the font blocks rendering», and of the twenty flagged items you get the three that carry almost all the delay."],
          ["Do you fix what the audit finds?", "Yes, as separate work quoted after the audit, because quoting a fix before measuring is guessing. You are also free to hand the report to your own developer — it is written to be actionable by someone who did not write it."],
          ["Will this improve my rankings?", "Speed is a tie-breaker between pages that are otherwise comparable, so it helps where you are already close and does nothing for a page that answers no query. If the problem is that the site is not found at all, the SEO audit is the right purchase."],
          ["Can you audit WordPress and Next.js sites?", "Both, and the findings differ by stack. On WordPress it is usually plugins, a page builder and unoptimised images; on Next.js and React it is usually the bundle, client-side data fetching and components re-rendering more than they need to."],
          ["How soon do the numbers change?", "The report takes three working days. After the fixes ship, your own measurements change immediately, but Search Console field data moves on a 28-day rolling window, so the official Core Web Vitals follow about a month later."],
          ["What if the site is too slow to be worth fixing?", "That happens, and I will say so instead of selling an audit's worth of patches. A rebuild that keeps the existing rankings starts at €1,000, which is often cheaper than a year of fighting the current build."],
          ["What do you need from me to start?", "The address, and access to the hosting or the code if the fixes are also mine to make. The audit itself needs nothing but the public site."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website performance audit: what to send me"),
        p("Send the address, say what the complaint is — slow on phones, Search Console reporting «poor», visitors leaving within seconds — and tell me what the site is built on if you know. I reply within one working day with what I would measure and what it would cost, and if a free test already shows the answer, I will point at it rather than invoice for finding it."),
      ],
    },
  ],
};
