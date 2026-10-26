// Landing page fixture: SEO for Chiropractors (EN), group «seo-for-chiropractors».
// New page.
// Semantic core: ref/medical-practices.md, group «chiropractors / physio» (US):
// seo for chiropractors 390 (H1, metaTitle, several H2) · local seo for
// chiropractors 110 (local H2) · seo services for chiropractors 30, best seo for
// chiropractors 10, seo agency for chiropractors 10 (provider H2 + FAQ) ·
// google ads for chiropractors 90 and chiropractic social media marketing 70 —
// mentioned only, not offered · seo for physical therapists 10 — different
// SERP, physical therapy named once as a related practice.
// Intent: ref/intent-check-medical-practices.md — «seo for chiropractors» vs
// «chiropractor website design» 0 of 10 shared URLs → design is the sibling
// /chiropractor-website-design. «seo for chiropractors» vs «seo for physical
// therapists» 0 shared → no PT page here. SERP: chiropractic marketing firms
// (Practice Promotions, The Evidence Based Chiropractor), Reddit, agencies.
// Angles: map pack and Google Business Profile, condition pages (low back
// pain, sciatica, neck pain, sports injuries), auto-injury and insurance cases
// (general), new-patient specials vs state board and FTC rules (general),
// reviews with privacy, online booking and HIPAA-safe forms, YMYL credentials,
// AI answers, choosing a provider. Giuseppe (psychotherapist, Milan) = proof of
// a private practice under advertising rules found in ChatGPT.
// NOT on this page: site design, vendor platforms vs custom build, page layout
// (/chiropractor-website-design); general practice SEO (/medical-seo — linked
// once); physical therapy SEO (no page); Google Ads and social media (not
// offered).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForChiropractorsEn = {
  lang: "en",
  group: "seo-for-chiropractors",
  slug: "seo-for-chiropractors",
  title: "SEO for chiropractors",
  heading: "SEO for Chiropractors",
  excerpt:
    "I do SEO for chiropractors: a Google Business Profile that reaches the map pack, a page for each condition you treat, auto-injury and first-visit pages, reviews that respect privacy and a place in AI answers, measured in booked first visits.",
  seo: {
    metaTitle: "Chiropractic SEO: Map Pack and Condition Pages | Bandziuk",
    metaDescription:
      "SEO for chiropractors: Google Business Profile and map pack, pages for back pain and sciatica, reviews, online booking and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Map pack + condition pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Chiropractor near me", "Chiropractor for sciatica", "Open Saturday", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Chiropractic SEO audit: website, Google Business Profile, reviews, booking path and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a chiropractic office: condition, first-visit and auto-injury pages, profile setup, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a chiropractor or chiropractic group", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for chiropractors",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile built for the map pack", text: "Category, services, hours, photos, the right landing page" },
        { _key: k("o"), iconName: "layers", title: "A page for each condition you treat", text: "Low back pain, sciatica, neck pain, sports injuries" },
        { _key: k("o"), iconName: "file-text", title: "Auto-injury and first-visit pages", text: "What to bring, how long it takes, who usually pays" },
        { _key: k("o"), iconName: "shield-check", title: "Wording your state board accepts", text: "No cure claims; offers with the required disclosures" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews asked after every visit", text: "Replies that never confirm someone is a patient" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Doctors, techniques, hours and insurance as facts" },
      ],
      prices: [
        { _key: k("r"), label: "Chiropractic SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a chiropractic office", value: "from 800 € / month", note: "map pack, condition pages, reviews, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a private medical practice and local service businesses",
      subtitle:
        "Giuseppe, a psychotherapist in Milan, runs a private practice under strict advertising rules, as a chiropractor does. On his site I built pages by area of therapy and by location — Milan, Monza and online sessions — added structured data for the practitioner, conditions and therapies, and kept all 468 blog posts with 301 redirects during the move; his new pages already appear in ChatGPT answers. Next to it: local SEO and Google Maps work for a Warsaw auto repair shop, a rebuild after which a 3D laser scanning company saw 29× more organic traffic, a Warsaw wheel-renovation workshop that wins customers from the map, and Cyprus VIP Estates, whose SEO I run every month.",
      picks: [
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your chiropractic office",
      subtitle: "Within one business day you get my view of the first fix — the map listing, the condition pages or the booking path — and a fixed price.",
      contextLabel: "Office name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which patients do you want more of?", options: ["Back and neck pain", "Sports injuries", "Auto accident cases", "Prenatal and family care"] },
        { _key: k("z"), question: "How is the office set up?", options: ["One chiropractor", "Several chiropractors, one office", "Two or more offices", "Chiropractic inside a multidisciplinary clinic"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for chiropractors is the work that puts a chiropractic office in the map results for “chiropractor near me”, on the first page for the conditions you treat and in AI answers, and turns those searches into booked first visits. One person does all of it — I am an independent SEO consultant and web developer — so whoever reviews your Google Business Profile also writes the condition pages and changes the code."),

        h2("What SEO for chiropractors covers: map searches, condition searches and name searches"),
        p("People look for a chiropractor in three different situations, and each one is won in a different place:"),
        li("in pain today — “chiropractor near me”, “chiropractor open Saturday”, “walk-in chiropractor” — they call one of the three offices shown on the map"),
        li("researching a problem — “chiropractor for sciatica”, “is a chiropractor good for neck pain”, “chiropractor after car accident” — they read websites over several days"),
        li("checking a name after a referral from a friend, a personal trainer or an attorney"),
        p("The first group is decided mostly by the Google Business Profile, the second by your own pages, the third by both plus reviews; ChatGPT and AI Overviews draw on all of them. Physical therapy clinics appear in some of the same searches but compete for a different set of phrases and referrals, so this page stays with chiropractic offices."),

        h2("Local SEO for chiropractors: Google Business Profile and the map pack"),
        p("Most calls from new patients start in the three map results. Distance to the searcher cannot be changed, so everything else has to be right:"),
        li("primary category “Chiropractor”, with secondary categories only for services you really provide"),
        li("a services list — adjustments, spinal decompression, prenatal care, sports injuries — each linked to its own page on the site, not to the home page"),
        li("hours that match reality, including early mornings and Saturdays, which people search for"),
        li("photos of the front desk, adjusting rooms and the team, added regularly"),
        li("one profile and one location page for each office in a group, with its own doctors and hours"),
        p(
          "Virtual offices, invented addresses and business names stuffed with keywords get profiles suspended, and I do not use them. Map ranking factors and citation work in more depth are on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Condition pages for chiropractors: low back pain, sciatica, neck pain and sports injuries"),
        p("One “Services” page cannot rank for “chiropractor for sciatica”, “herniated disc chiropractor” and “sports injury chiropractor” at once. Each condition you want more patients for gets its own page, planned from search data for your town:"),
        li("what patients usually feel, and the warning signs that mean they should see a medical doctor first — written or approved by you"),
        li("how you assess the problem and which techniques you use, in plain words"),
        li("how many visits a typical plan includes, given as a range, without promised outcomes"),
        li("which chiropractor in the office treats it and how to book"),
        p("I organized Giuseppe’s site in Milan on the same principle: 7 pillar pages by area of therapy, 21 subtopic pages under them, separate pages for each place he sees patients and 150 FAQ entries reused where they fit. A chiropractic office has fewer topics, but the pattern — one page per problem, linked to the place and the person who treats it — is what search engines and assistants pick up."),
        h3("How many condition pages a chiropractic office needs"),
        p("Start with five to eight conditions that fill your schedule and that you can describe from experience. Fifty thin pages generated from a template are what Google’s spam policies call scaled content abuse, and patients notice them too."),

        h2("Auto accident and personal injury pages in chiropractic SEO"),
        p("“Chiropractor after car accident” and “whiplash chiropractor” are searched by people who also worry about who will pay. If your office takes these cases, a separate page answers what the front desk hears every week: what to bring to the first visit, how auto insurance and, in no-fault states, personal injury protection usually work, whether you accept cases on a letter of protection and how injuries are documented. Coverage depends on the policy and the state, so the page stays general and invites a call."),
        p("Personal injury attorneys also look for chiropractors who keep clear records. A short section for attorneys with a named contact person serves them without mixing their questions into the patient pages."),

        h2("New patient specials and state board rules in chiropractic SEO"),
        p("Many chiropractic sites lead with a discounted first exam or a free consultation. Chiropractic advertising is regulated by each state’s board, and the FTC expects health claims to be supported by evidence. In general terms:"),
        li("some states require a set disclaimer next to free or discounted services, and offers to patients with Medicare or other federal coverage raise separate questions"),
        li("claims to treat conditions outside the musculoskeletal system draw complaints and regulator attention"),
        li("“best chiropractor in town”, guaranteed results and posture photos published without written consent stay off the site"),
        li("testimonials, where your state allows them, come from real patients, disclose any incentive and do not suggest typical results"),
        p("I write within the rules you give me. Check current wording with your state board or a healthcare attorney; nothing here is legal advice."),

        h2("Chiropractor reviews on Google: a routine that protects patient privacy"),
        p("Reviews often decide between two offices in the map pack. A text after each visit with a direct link to the review form, sent to every patient rather than only the happy ones, works better than a campaign twice a year. Gifts or discounts in exchange for reviews break Google’s rules, and the FTC rule on consumer reviews prohibits incentives tied to positive reviews."),
        p("Healthcare adds one rule to replies: never confirm that the reviewer is a patient and never mention their treatment. A short thank-you answers praise; criticism gets a general apology and an invitation to call the office."),

        h2("Online booking and first-visit pages: turning chiropractic searches into appointments"),
        p("A visitor in pain decides quickly, so every condition page ends with two actions: book online and call. Booking runs through the scheduler you already use, loaded so that it does not slow the page. A “your first visit” page — how long it takes, what to wear, whether X-rays are taken, what it costs with and without insurance — removes the last reason to wait."),
        p("Forms that ask about symptoms can fall under HIPAA. Either keep the form to name, phone and a preferred time, or run it through a form service that will sign a business associate agreement with your office. Calls and bookings are tracked per page, so the monthly report shows which conditions bring patients, not only rankings."),

        h2("Chiropractor credentials and YMYL: author, license and review date"),
        p("Google treats health topics as “Your Money or Your Life” and looks for evidence of who stands behind the advice. For a chiropractic office that means:"),
        li("a bio for each doctor of chiropractic with the DC degree, school, state license, years in practice and techniques used"),
        li("condition pages that name the chiropractor who wrote or reviewed them, with the date of the last review"),
        li("links to sources where a page states facts about a condition"),
        li("MedicalClinic and Person structured data connecting the doctors to the office and its specialty"),
        p("I write the structure, the search data and the drafts; the chiropractor checks every clinical statement before it goes live."),

        h2("SEO for chiropractors in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Patients now ask ChatGPT, Perplexity or Google “what does a chiropractor do for sciatica” or “which chiropractor near me takes Blue Cross and works on Saturdays”. The assistant names a few offices with reasons for each. Earning a place in those replies goes by two names, generative engine optimization (GEO) and answer engine optimization (AEO); in a chiropractic office it comes down to:"),
        li("conditions, techniques, doctors, hours, insurance plans and languages written as plain sentences"),
        li("answers to common patient questions on the condition pages, signed by the chiropractor"),
        li("the same office details on the site, Google, Yelp and Healthgrades"),
        li("structured data that ties the office, its doctors and its locations together"),
        p(
          "Giuseppe found me through ChatGPT, and new pages on his site already appear in its answers — a small private practice can be named there. I check how assistants describe your office before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Chiropractic SEO agencies, platforms and a single consultant: what to ask"),
        p("Searches for SEO services for chiropractors are led by chiropractic marketing firms and website platforms that bundle SEO with templates, ads and newsletters, plus Reddit threads where chiropractors compare them. Before signing with anyone, me included, ask:"),
        li("who writes the condition pages, and whether the same text runs on other clients’ sites"),
        li("whether reports show calls and booked visits, not only rankings"),
        li("whether you keep the domain, the content and the Google profile if you leave"),
        li("how long the contract runs and how to cancel it"),
        p(
          "I do SEO and websites; I do not run Google Ads or social media. My approach to ongoing work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, practices outside chiropractic will find more on ",
          link("medical SEO", "/medical-seo"),
          ", and the site itself is covered on ",
          link("chiropractor website design", "/chiropractor-website-design"),
          ".",
        ),

        h2("How much SEO for chiropractors costs"),
        li("Chiropractic SEO audit — website, Google Business Profile, reviews, booking path and AI answers: from 250 €, one-off."),
        li("One-off work — condition, first-visit and auto-injury pages, profile setup, structured data, tracking: 250–700 €."),
        li("Monthly SEO for a chiropractic office — new pages, map work, review routine, AI visibility and reports in booked visits: from 800 € per month; for groups with several offices in large metros from 1,300 € per month."),
        p(
          "A single-doctor office in a mid-sized town usually needs little more than the audit and five or six well-made condition pages. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for chiropractors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for chiropractors cost?", "The audit starts at 250 € as a one-off; individual tasks such as condition pages or profile setup cost 250–700 €; ongoing monthly SEO starts at 800 €, and at 1,300 € for chiropractic groups with several offices in large metros. Describe your office and town and you get a fixed price."],
          ["How long does chiropractic SEO take to bring new patients?", "Fixes to the Google Business Profile can show in a few weeks. New condition pages usually need three to five months to bring steady bookings, longer in large cities where many offices write about the same problems."],
          ["Should a chiropractor pay for Google Ads or invest in SEO?", "Ads bring calls from the first day and stop when the budget stops. SEO builds pages, a profile and reviews that keep bringing patients without a cost per click. With a small budget, the map listing and a few condition pages are usually the better first spend. I do not run ads."],
          ["Can I promote a new patient special on my website?", "Often yes, but states differ: some require a set disclaimer next to free or discounted services, and offers to patients with federal coverage raise separate questions. I design the page to carry whatever wording your board requires; check the current rules with the board or a healthcare attorney."],
          ["How should a chiropractor reply to a negative review?", "Briefly and in general terms, without confirming that the person is a patient or mentioning any treatment, and with an invitation to call the office. Privacy rules apply to public replies as much as to records."],
          ["Who writes the condition pages?", "I write the structure, the search data and the drafts. The chiropractor checks every clinical statement and is named as the reviewer with a review date. I do not give medical advice."],
          ["Can a consultant in Poland do SEO for a US chiropractic office?", "Yes. The work is remote and in English: the website, the Google profile and the search data for your town. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for chiropractors: what to send me"),
        p(
          "Send the office name, your website and Google Maps links, the conditions you want more patients for, the number of chiropractors and offices, whether you take auto-injury cases and which scheduling system you use. My reply names the first three fixes and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
