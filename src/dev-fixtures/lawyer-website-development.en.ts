// Landing page fixture: Law firm website development (EN), group
// «lawyer-website-development». REWRITE of the old-template page at the same
// URL — completely new text on the landing template.
// Semantic core: ref/lawyers.md / lawyers.csv, website group + BRIEF.md:
// website for lawyer 1,600 (H2) · law firm website development / website
// development for law firm 1,600 (H1, H2, cost H2) · lawyer website development
// 1,000 (FAQ) · law firm website developer (related search; FAQ on owning the
// site, H2 on WordPress vs Next.js) · small law firm website (related; H3 under
// cost) · law firm website redesign (related; H2) · wordpress website for
// lawyers 10 / lawyer website wordpress 10 (H2) · website accessibility lawyer
// 140 (ADA H2) · lawyer website hosting 30 (H2) · lawyer website disclaimer 10
// (H2 on Attorney Advertising disclaimers).
// Intent: ref/intent-check-lawyers.md — «law firm website design» vs «law firm
// website development» 0 shared URLs, 2 shared domains (paperstreet,
// themodernfirm) → separate pages; development SERP: owdt, sixthcitymarketing,
// reddit, attorneyatwork, hennessey, cybernews builders → this page answers
// structure, intake, rules, hosting, platform. «lawyer website» 590 vs «law
// firm website design» 0 shared URLs — people looking for a lawyer (justia, US
// News, lawyerpages) → NOT targeted.
// This page = how a law firm site is built: page types and templates,
// practice-area and attorney bio pages, intake forms with confidentiality and
// no-attorney-client-relationship notices, conflict-check fields, Clio / MyCase
// / Lawmatics / CallRail in general terms (no integration claimed), Attorney
// Advertising disclaimers per state bar rules (ABA Model Rules in principle,
// SRA price information for England and Wales), multilingual sites, speed and
// ADA / WCAG, WordPress vs custom Next.js, hosting and ownership, redesign and
// migration, AI-readable build (YMYL signals).
// NOT on this page: visual design, photography, bio and practice page layouts,
// case-result and review design, templates, design by practice
// (/law-firm-website-design); law firm SEO (/seo-for-law-firms); Google
// Business Profile, map pack, directories, reviews (/local-seo-for-lawyers);
// personal injury market (/personal-injury-seo).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search; design is included in the price.
import { p, h2, h3, li, link, k } from "./pt";

export const lawyerWebsiteDevelopmentEn = {
  lang: "en",
  group: "lawyer-website-development",
  slug: "lawyer-website-development",
  title: "Law firm website development",
  heading: "Law Firm Website Development for Lawyers and Attorneys",
  excerpt:
    "I build law firm websites for solo attorneys and small and mid-size firms: practice-area and attorney bio pages, intake forms with the notices bar rules expect, fast and accessible pages, and a site the firm owns outright.",
  seo: {
    metaTitle: "Website Development for Law Firms and Lawyers | Bandziuk",
    metaDescription:
      "Law firm website development: practice-area and attorney bio pages, intake forms with confidentiality notices, WCAG accessibility, owned by you. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Remote, in English"],
  heroPhonePoints: ["Practice areas", "Meet the attorneys", "Request a consultation", "Call · Text"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple law firm website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Law firm website with practice-area and attorney bio pages, case results with disclaimers, intake connected to your tools and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with law firm website development",
      items: [
        { _key: k("o"), iconName: "layers", title: "Practice-area and attorney bio pages", text: "A page for each matter type and each lawyer" },
        { _key: k("o"), iconName: "file-text", title: "Intake forms with the right notices", text: "No confidential details, no attorney-client relationship" },
        { _key: k("o"), iconName: "plug", title: "Intake that reaches your practice tools", text: "Email, CRM or practice-management software" },
        { _key: k("o"), iconName: "shield-check", title: "Disclaimers where bar rules expect them", text: "Attorney Advertising, case results, not legal advice" },
        { _key: k("o"), iconName: "gauge", title: "Fast and accessible", text: "Under 2.5 s on a phone, built to WCAG 2.1 AA" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Bylines, bar admissions and structured data" },
      ],
      prices: [
        { _key: k("r"), label: "Simple law firm website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Practice and matter pages, attorney bios, intake, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: sites I have built",
      subtitle:
        "A multilingual site for an education agency working in ten countries, a renovation and investment company, an architecture studio’s rebuild, a wheel-renovation workshop moved to a new WordPress build and a car repair shop with reworked SEO and UX. Together they cover what a law firm site needs: language versions, service pages, rebuilds of older sites and clear paths to a call or a form.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your law firm website",
      subtitle: "I reply within one business day with a proposed page structure and a fixed price.",
      contextLabel: "Firm name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does the firm have now?", options: ["No website", "A template or builder site", "An older WordPress site", "A site rented from an agency"] },
        { _key: k("z"), question: "How large is the firm?", options: ["Solo attorney", "2–5 attorneys", "6 or more attorneys"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I build law firm websites from start to finish — structure, design, development and launch — for solo attorneys and small and mid-size firms in the US, the UK, Canada and Australia. Legal clients rarely call the first firm they find. They read the practice-area page, look at the attorney, check that the firm handles their kind of matter, and only then call or send a form. The build is planned around that path and around the rules a lawyer’s website has to follow."),

        h2("Law firm website development: what a website for lawyers must contain"),
        p("A law firm website is more than a brochure with an “Our Team” page. To bring consultations it needs several kinds of pages, each built as its own template:"),
        li("a page for each practice area and, under it, pages for the matters clients actually search for"),
        li("a bio page for each attorney, with bar admissions, education and languages"),
        li("case results or representative matters, where your state allows them, with the disclaimer attached"),
        li("a contact and intake page with a form that does not invite confidential details"),
        li("legal guides and FAQs with the author’s name, the date and who reviewed them"),
        li("disclaimers: “Attorney Advertising” where state rules require it, “not legal advice” on articles, a privacy policy for the forms"),
        p(
          "How these pages look and lead a visitor to call is covered on the ",
          link("law firm website design", "/law-firm-website-design"),
          " page; this page is about how they are built.",
        ),

        h2("Practice-area pages and attorney bio pages: how they are built"),
        h3("Practice-area pages built around the matters clients search for"),
        p("People rarely search for “family law”. They search for “uncontested divorce”, “child custody modification” or “prenup lawyer”. Each practice area gets a parent page and child pages for those matters, linked so a visitor can move from the general topic to their own situation and back. The template has fields for the description, the process step by step, typical timelines, fees where you choose to publish them, the attorneys who handle the matter and an FAQ, so every page your team adds later has the same structure."),
        h3("Attorney bio pages with bar admissions, education and languages"),
        p("The bio template stores admissions, courts, education, memberships, languages, publications and practice areas as separate fields rather than one block of text. The site then lists the right attorneys on each practice page automatically, marks up each person with structured data, and keeps every fact in one place when someone is admitted in another state or leaves the firm."),

        h2("Intake forms for law firms: confidentiality notice and no attorney-client relationship"),
        p("A contact form on a lawyer’s website is where two risks meet: a prospective client writes the whole story, including facts against them, before the firm has checked for conflicts — and may later argue that sending it made you their lawyer. The intake form is built to avoid both:"),
        li("a short notice above the button: sending the form does not create an attorney-client relationship, and confidential details should wait until the firm confirms it can take the matter"),
        li("a field for the names of other parties, so your office can run a conflict check before the first call"),
        li("a choice of practice area and a short, length-limited description instead of an open “tell us everything” box"),
        li("a privacy notice checkbox and consent to be contacted"),
        p("Data travels over HTTPS, the form is protected against spam, and requests go to the inbox or tool you choose instead of piling up on the web server. The exact wording of the notice is your decision; I place it where visitors actually read it."),

        h2("Connecting website intake to practice-management and call-tracking tools"),
        p("Most firms already use a practice-management or intake system — Clio, MyCase, Lawmatics or a similar tool — and often a call-tracking service such as CallRail. In general terms, the website can work with them in three ways:"),
        li("embedding the intake form the tool itself provides, styled to match the site"),
        li("sending the website’s own form to the tool through its API or an automation service, where your plan allows it"),
        li("email with every field filled in, when neither is available"),
        p("Call tracking shows which pages and channels bring calls without changing the main number in your Google profile and directories. Which option fits depends on the tool and your subscription, so I check it before the quote instead of promising a connection that may not exist."),

        h2("Attorney Advertising disclaimers and state bar rules on a lawyer website"),
        p("In the US, a law firm website is lawyer advertising. State bar rules follow the ABA Model Rules in principle — communications about a lawyer’s services must not be false or misleading — but the details differ by state: some require an “Attorney Advertising” label, some require disclaimers on case results, many limit the word “specialist” to lawyers certified as such, and rules on testimonials vary. In England and Wales, the SRA requires price information for certain services to be published."),
        p("The site gives these elements fixed places: a label slot in the header or footer, a disclaimer field attached to every case result, a review section that can be switched off. I am a developer, not ethics counsel: check your state bar’s rules, and you approve the wording before launch."),

        h2("Multilingual law firm websites for immigration and international practices"),
        p("Immigration, family and business firms often serve clients who prefer another language — Spanish, Polish, Ukrainian, Chinese, Arabic and many more. A page in the client’s own language, written by a person rather than a translation widget, makes the first call far easier. Each language version gets its own addresses, a visible language switch, the attorneys who actually speak that language and the contact channels that audience uses; for many immigration clients a WhatsApp button matters more than a form."),
        p(
          "I work in English, Polish and Russian and build multilingual sites regularly. The technical side — hreflang, translated addresses, an editing workflow for translators — is on the ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " page.",
        ),

        h2("Website speed and ADA accessibility for law firm websites"),
        p("Most legal searches start on a phone, often at a bad moment. Pages are built to appear in under 2.5 seconds on a mobile connection — the Largest Contentful Paint level Google rates as good — with optimized images, few scripts and no heavy page builder."),
        p("Accessibility matters twice for a law firm. People with disabilities are clients too, and in the US accessibility claims under the ADA against business websites are common, law firms included. The site is built against WCAG 2.1 level AA, the standard most often used as the reference: real headings, labeled form fields, keyboard navigation, enough contrast, alt text for images and captions for video. An accessibility overlay widget does not replace this work."),

        h2("WordPress website for lawyers or a custom Next.js build"),
        p("Both are sound choices for a law firm; they suit different firms."),
        li("WordPress suits a team that wants a familiar editor and a plugin for every task. It needs regular core and plugin updates, and a plugin-heavy site becomes slow and harder to secure."),
        li("A custom build in Next.js with a headless CMS such as Sanity is faster, has fewer moving parts to attack and no plugins to update; the team edits practice pages, bios and articles in a clean admin panel. It suits firms that publish often and care about speed."),
        p("I build both and recommend one after seeing how your team works. Either way, the templates let the site grow from ten pages to a hundred without a rebuild."),

        h2("Hosting, security and ownership of a law firm website"),
        p("Some legal marketing agencies rent the website to the firm: the monthly fee covers the site, and when the contract ends, the site stays with the agency. Here the domain is registered in the firm’s name, the hosting account is yours, and the code and content are handed over at launch. You can move to another developer at any time."),
        p("The site runs on fast hosting with SSL, automatic backups, updates and spam protection. Admin access uses individual accounts with two-factor login, so a departing employee is removed without changing everyone’s password. There is no monthly retainer to me; changes are paid as work done."),

        h2("Law firm website redesign and migration without losing rankings"),
        p(
          "A firm that has had a site for years usually ranks for some searches and has links from bar associations, directories and articles. A law firm website redesign keeps that value. Before launch, every old address is mapped to its new page and redirected, titles and structured data are carried over, and after launch Search Console is watched for errors. Moving from a rented agency site follows the same steps once the content is exported. The process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("A law firm website that ChatGPT and Google AI Overviews can read"),
        p("People ask ChatGPT, Perplexity and Google’s AI Overviews how custody works in their state or which immigration lawyer speaks their language. Google treats legal content as “Your Money or Your Life” and holds it to a higher standard, and assistants lean on the same trust signals. The build supports them: pages served as plain HTML that crawlers read without running scripts, LegalService and Person structured data for the firm and each attorney, author bylines with bar admissions, publication and review dates on every article, and the same name, address and phone as in your Google profile and legal directories."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Ranking in Google is covered on the ",
          link("law firm SEO", "/seo-for-law-firms"),
          " and ",
          link("local SEO for lawyers", "/local-seo-for-lawyers"),
          " pages; personal injury firms will find their market on the ",
          link("personal injury SEO", "/personal-injury-seo"),
          " page.",
        ),

        h2("How much law firm website development costs"),
        li("A simple law firm website — home, practice areas, attorney bios, contact and intake form: 700–1,400 €."),
        li("A full site with practice-area and matter pages, attorney bios with structured data, case results with disclaimers, intake connected to your tools and local SEO setup: from 2,000 €."),
        h3("A small law firm website: where to start"),
        p(
          "A solo attorney or a two-partner firm usually starts with the simple version and adds matter pages and a second language as the practice grows, on the same templates. Design is included in both prices. How I build websites in general is on the ",
          link("website development", "/services/website-development"),
          " page, and all price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Law firm website development: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does lawyer website development cost?", "700–1,400 € for a simple law firm site and from 2,000 € for a full site with practice-area and matter pages, attorney bios, case results with disclaimers, intake connected to your tools and local SEO setup. Design is included. After a short description of the firm I give a fixed price in euros."],
          ["How long does it take to build a law firm website?", "Usually three to six weeks from the brief. Most of the time goes into texts — practice pages, bios and disclaimers that the attorneys review. A simple site for a solo practice can be ready in two to three weeks."],
          ["Will the website follow my state bar’s advertising rules?", "The site has fixed places for what bar rules usually ask for: an Attorney Advertising label, disclaimers on case results, a not-legal-advice notice on articles and the notice on forms. Which of them your state requires, and the exact wording, you confirm against your state bar’s rules; I do not give legal advice."],
          ["Can website intake go straight into Clio, MyCase or Lawmatics?", "Often yes — through the tool’s own intake form, its API or an automation service, depending on the tool and your plan. I check what your account supports before the quote. Where no connection is possible, requests arrive by email with every field filled in."],
          ["Do we own the website, or is it rented like some agency sites?", "You own it: the domain is in the firm’s name, the hosting is on your account, and the code and content are handed over at launch. There is no platform fee and no contract that takes the site away if you stop working with me."],
          ["Can you move our law firm website without losing Google rankings?", "Yes. Old addresses are mapped and redirected to the new pages, titles and structured data are carried over before launch, and Search Console is checked after it, so links from bar associations and directories keep working."],
          ["Can a law firm website developer in Poland work for a US or UK firm?", "Yes. I work remotely and in English, with calls and messages in my afternoon and evening Central European Time — the US business morning and most of the UK working day. Contracts and invoices are in euros, and the site is set up for your jurisdiction: phone formats, bar details, disclaimers and the review platforms your clients use."],
          ["Will the website be found in ChatGPT and Google AI Overviews?", "The build makes the site readable for assistants: plain HTML, structured data for the firm and each attorney, bylines and dates on articles, and details that match your Google profile and directories such as Avvo, Justia and FindLaw. Being named in answers to competitive questions is ongoing SEO and GEO work on top of the build, which I also do."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order law firm website development: what to send me"),
        p(
          "Send the firm’s name and current website, the practice areas and matters you want more of, the number of attorneys, the states or countries where they are admitted, the languages your clients speak and the tools you use for intake. I will reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
