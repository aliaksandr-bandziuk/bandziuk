// Landing page fixture: SEO for plastic surgeons (EN), group «seo-for-plastic-surgeons».
// Semantic core: ref/medical-practices.md (EN, US): seo for plastic surgeons 480,
// marketing for plastic surgeons 260 (H2: where SEO fits in plastic surgery
// marketing), local seo for plastic surgeons 50. Related searches: seo for
// plastic surgeons near california / near texas, best seo for plastic surgeons.
// PAA: What credentials should a plastic surgeon have? What is the difference
// between a plastic and cosmetic surgeon? (E-E-A-T H2 + FAQ). Not targeted:
// «Can I negotiate with a plastic surgeon?», «Which country is no 1 in plastic
// surgery?», «hardest plastic surgery to recover from» (patients’ questions).
// Intent: ref/intent-check-medical-practices.md — «seo for plastic surgeons» vs
// «plastic surgeon website design»: 0 shared URLs, 0 shared domains → separate
// pages; vs «med spa seo»: 0 / 0 → med spa is its own page. Top 10: aesthetic
// medicine agencies (intrepy, inboundmedic, bluetonemedia, seodiscovery,
// highervisibility, ignitedigital, loganix) → the buyer is the surgeon or the
// practice owner.
// NOT on this page: designing and building the site
// (/plastic-surgeon-website-design); injectables, laser, non-surgical
// treatments (/med-spa-seo); general practice SEO (/medical-seo); dermatology
// (/seo-for-dermatologists); paid ads and social media (the owner does not run
// them). Main case: Giuseppe, psychotherapist in Milan — private medical
// practice with strict advertising rules, 301 migration, pages in ChatGPT.
// Owner’s rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const seoForPlasticSurgeonsEn = {
  lang: "en",
  group: "seo-for-plastic-surgeons",
  slug: "seo-for-plastic-surgeons",
  title: "SEO for plastic surgeons",
  heading: "SEO for Plastic Surgeons and Plastic Surgery Practices",
  excerpt:
    "I do SEO for plastic surgeons and plastic surgery practices: a page for every operation you perform, board certification stated correctly, before-and-after galleries built on patient consent, cost and financing pages and visibility for patients who travel to you.",
  seo: {
    metaTitle: "Plastic Surgeon SEO: Procedures, Galleries, AI | Bandziuk",
    metaDescription:
      "SEO for plastic surgeons: procedure and cost pages, board certification, consented before-and-after galleries, traveling patients and AI answers. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Procedures + galleries + maps", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Rhinoplasty surgeon near me", "Certified by the ABPS", "Tummy tuck cost", "Request a consultation"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a plastic surgery practice: website, galleries and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off plastic surgeon SEO work: procedure, cost and gallery pages, surgeon bios, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a plastic surgery practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for plastic surgeons",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each operation you want more cases of", text: "Rhinoplasty, breast, body, facelift — picked from search data" },
        { _key: k("o"), iconName: "shield-check", title: "Board certification written the way the board names it", text: "Training, fellowship and hospital privileges on each bio" },
        { _key: k("o"), iconName: "image", title: "Before-and-after galleries search engines can read", text: "Consent on file, text captions, no retouching" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile for practice and surgeons", text: "Right category, procedures and the matching pages" },
        { _key: k("o"), iconName: "file-text", title: "Cost, financing and travel pages", text: "The price and logistics questions patients ask first" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Facts about your surgeons that assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Plastic surgery practice SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a plastic surgery practice", value: "from 800 € / month", note: "procedures, galleries, maps, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a private medical practice and high-trust multilingual sites",
      subtitle:
        "First, a private medical practice in Milan that works under strict advertising rules and now appears in ChatGPT answers. Then multilingual sites for clients who decide from another city or country, and premium services chosen after long research — the conditions a plastic surgery practice competes in.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your plastic surgery practice",
      subtitle: "Within one business day you get the first fixes I would make to your site, gallery and Google profile, with a fixed price.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which procedures do you want more patients for?", options: ["Face: rhinoplasty, facelift, eyelids", "Breast surgery", "Body: tummy tuck, liposuction", "Reconstructive surgery"] },
        { _key: k("z"), question: "Where do consultation requests come from now?", options: ["Google search and Maps", "Instagram and other social media", "RealSelf and directories", "Referrals and past patients"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for plastic surgeons — solo surgeons, group practices and plastic surgery centers — so that people researching an operation find your practice, read about your surgeons and request a consultation. The work covers procedure pages, credentials, before-and-after galleries, cost and financing pages, your Google profile and AI answers, and I do it myself, from the audit to the code."),

        h2("What SEO for plastic surgeons covers, and how it differs from med spa SEO"),
        p("Nobody books a facelift after one search. A patient reads for weeks, compares two or three surgeons, looks through hundreds of photos, checks credentials and asks about cost and time off work. SEO for a plastic surgery practice follows that research: your practice should appear at each step, and each page should answer the question the patient had when they arrived."),
        p(
          "This is a different job from SEO for a med spa. Injectables, laser and body contouring are frequent, lower-cost visits, often chosen by distance and price; surgery is one large decision made on the surgeon. Practices that offer both need both kinds of pages, and the non-surgical side is covered on the ",
          link("med spa SEO", "/med-spa-seo"),
          " page.",
        ),

        h2("Procedure pages in SEO for plastic surgeons: one page per operation"),
        p("Patients search by operation and often by detail: “deep plane facelift”, “breast lift without implants”, “revision rhinoplasty”, “mommy makeover cost Houston”. A single “Procedures” page does not rank for searches this specific. Each operation you want more cases of gets its own page, and the main ones get supporting pages for variants and common questions. A procedure page that ranks and leads to consultations usually covers:"),
        li("who is a good candidate, and who should not have the operation"),
        li("how it is performed, the type of anesthesia and where — office surgical suite, ambulatory surgery center or hospital"),
        li("recovery week by week, return to work and exercise, scar care"),
        li("risks and possible complications, in plain words"),
        li("a cost range, what it includes and financing options"),
        li("links to the matching gallery, the surgeon who performs it and the consultation request"),
        p("I pick procedures and variants from search data for your area, so the pages use the words patients type rather than surgical terms from the operating notes."),

        h2("Board certification, surgeon credentials and E-E-A-T in plastic surgery SEO"),
        p("Plastic surgery is a “Your Money or Your Life” topic for Google, and the surgeon is the strongest trust signal a practice has. Patients ask what credentials a plastic surgeon should have; search engines and assistants look for the same facts: medical school, residency, fellowship, hospital privileges and board certification."),
        p("Certification has to be stated exactly. In the US, “board-certified plastic surgeon” usually refers to the American Board of Plastic Surgery; a surgeon certified by another board names that board in full instead of writing “board-certified” alone. Some states regulate how certification may be advertised, so the wording is checked against your state medical board’s rules. Each procedure page names the surgeon who reviewed it, links to the bio and shows a review date."),
        p("The same clarity answers a frequent search — the difference between a plastic surgeon and a cosmetic surgeon. A page that explains your training in plain words, without attacking anyone, helps patients and gives assistants a fact they can quote."),

        h2("Before-and-after galleries in plastic surgeon SEO: consent, captions and image search"),
        p("Galleries are the most visited part of most plastic surgery sites and the least readable for search engines: hundreds of images with no text, loaded through a slow plugin. A gallery can do more work:"),
        li("one gallery page per procedure, linked from the procedure page and back"),
        li("each case with a text caption: procedure, technique, implant size where relevant, time after surgery, surgeon"),
        li("compressed images with descriptive file names and alt text about the procedure, never about the person"),
        li("faces and identifying marks cropped or covered unless the patient agreed otherwise"),
        p("Every photo needs the patient’s written consent for marketing use, the same lighting, angle and background before and after, and no editing beyond cropping. In the US, using patient photos in marketing generally requires a signed HIPAA authorization; your compliance adviser confirms the form."),

        h2("Local SEO for plastic surgeons: Google Business Profile for the practice and each surgeon"),
        p("For “plastic surgeon near me” or “breast augmentation [city]” the map results come first. The practice profile needs the right primary category, procedures listed as services, real photos of the office and the team — never patient photos — and links to the matching pages. Surgeons can have their own profiles; in a group practice they are set up to support the practice listing, not compete with it. An operating room at a surgery center in another town belongs on your site as information, not as a fake office listing."),
        p("In big metros patients search by neighborhood and suburb; in smaller cities they often accept a drive of an hour or two for surgery. Location pages are made for real offices only, and procedure pages say where patients come from and how consultations work for them."),

        h2("Plastic surgeon reviews on Google and RealSelf: what helps SEO and what breaks the rules"),
        p("Reviews move the practice up the map and decide the patient’s shortlist. For surgery, Google and RealSelf carry the most weight, and patients read the long reviews about recovery and how the surgeon explained risks. A steady routine — a request with a direct link after the post-op visit — works better than occasional campaigns."),
        p("The limits are clear: no paying or rewarding patients for reviews, no reviews written by staff, and no hiding the negative ones, all of which the FTC rules on endorsements and reviews address. Replies never confirm that the reviewer is a patient or mention their procedure, even if the reviewer did. A short, polite reply with an invitation to call the office protects privacy and shows readers that the practice responds."),

        h2("SEO for out-of-town and medical tourism patients: travel, recovery and virtual consultations"),
        p("Many plastic surgery patients travel: from rural areas to the nearest city, across state lines for a specific surgeon, or from abroad. They search differently — “rhinoplasty surgeon Miami out of town patients”, “how long to stay after tummy tuck before flying” — and need a page that answers practical questions:"),
        li("how a virtual consultation works, which photos to send and through which secure channel"),
        li("how many nights to stay nearby, when the follow-up visits are and when flying is considered safe"),
        li("recovery accommodation, aftercare nurses and airport transport — as information, not packages you do not sell"),
        li("how follow-up continues after the patient returns home"),
        p("For international patients the page exists in their language, and questions about licensing and aftercare abroad are answered as facts."),

        h2("Plastic surgery cost and financing pages that answer price searches"),
        p("“How much is a breast augmentation”, “tummy tuck cost near me” and “facelift financing” are among the most searched plastic surgery questions, and practices that hide prices lose them to directories and price articles. A cost page per procedure gives a range, explains what moves the price — technique, anesthesia, facility fee, garments, follow-up visits — and says that the exact fee is set at consultation. A financing page lists the medical credit providers you accept, such as CareCredit, and how to apply. Prices stay in text, not inside an image."),

        h2("Plastic surgeon SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Before opening a single site, many patients type into an assistant “which surgeon in Dallas specializes in revision rhinoplasty” or “what is recovery like after a deep plane facelift”. This work goes by two names, GEO (generative engine optimization) and AEO (answer engine optimization). Assistants quote facts they can read and confirm in several places, so the work is:"),
        li("surgeons, boards, training, procedures, locations and languages written as plain facts"),
        li("short answers to procedure questions, reviewed by a surgeon"),
        li("the same practice and surgeon details on the site, the Google profile, RealSelf and hospital pages"),
        li("structured data that connects the practice, its surgeons, procedures and locations"),
        p(
          "It works for medical practices: Giuseppe, a psychotherapist in Milan, found me through ChatGPT, and the new pages of his rebuilt site are already quoted in ChatGPT answers. The method is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SEO for a private medical practice under strict advertising rules: the Milan case"),
        p("Plastic surgery marketing works inside rules: medical board advertising rules, FTC endorsement rules, privacy rules for patient photos. My strongest case comes from a practice with stricter rules than most. For Giuseppe, a psychologist and psychotherapist in Milan, I moved the site from WordPress to Next.js and Sanity, migrated all 468 blog posts with 301 redirects from every old URL, and built pillar pages, pages for Milan, Monza and online therapy, and 150 FAQ entries with structured data. His CMS flags any sentence that breaks article 40 of the Italian psychologists’ code of conduct, such as a promised result, a testimonial or a discount."),
        p("For a plastic surgery practice the lesson is the same: a site can rank without “guaranteed results”, keep every old URL through a rebuild and catch risky wording before it is published."),

        h2("Marketing for plastic surgeons: where SEO fits next to ads and Instagram"),
        p("Marketing for plastic surgeons usually mixes paid search, Instagram and TikTok, email to past patients, RealSelf and a website. Social media brings attention and ads bring patients while you pay. SEO brings people who are already researching an operation, and its pages keep working. I do SEO and build sites; I do not run ads or social accounts. The pages I build support them: a follower who searches your name lands on a page that answers the questions a reel cannot."),
        p(
          "Other specialties are covered on the ",
          link("medical SEO", "/medical-seo"),
          " page and the wider service on ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ". If the site itself needs rebuilding, see ",
          link("plastic surgeon website design", "/plastic-surgeon-website-design"),
          ".",
        ),

        h2("How much SEO for plastic surgeons costs"),
        li("SEO audit of the site, galleries and Google Business Profile: from 250 €, one-off, with fixes ranked by the consultations they can bring."),
        li("One-off work — procedure, cost and gallery pages, surgeon bios, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO — new procedure pages, galleries, maps, reviews routine, AI visibility and reports in consultation requests: from 800 € per month; in big US metros such as Los Angeles, Miami, New York or Dallas, from 1,300 € per month."),
        p(
          "All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for plastic surgeons: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a plastic surgery practice cost?", "The audit starts at 250 €, one-off tasks cost 250–700 €, and monthly work starts at 800 € — or 1,300 € in big US metros where many practices compete for the same procedures. Tell me about the practice and its surgeons, and the quote comes back as a fixed sum."],
          ["How long does plastic surgeon SEO take to bring consultations?", "Changes to the Google profile and to pages that already rank tend to show in a few weeks. A new procedure page usually needs three to six months, longer for breast and body procedures in large cities."],
          ["What is the difference between a plastic and a cosmetic surgeon, and should our site explain it?", "A plastic surgeon has completed residency training in plastic surgery; “cosmetic surgeon” describes the work, and doctors with different training use it. Patients search this question, so a calm, factual explanation of your training helps them and search engines. It should not criticize other doctors."],
          ["Can we show before-and-after photos on the website?", "Yes, with each patient’s written consent for marketing use, matching lighting and angles and no retouching. In the US a signed HIPAA authorization is generally needed. Captions and alt text describe the procedure, not the person."],
          ["Is RealSelf enough, or do we need our own site to rank?", "RealSelf brings patients who already compare surgeons, and its reviews help. Your own site wins searches for your name and your procedures in your city, and it is the source assistants read. Keep the details identical in both places."],
          ["Do you write the procedure content?", "I prepare the outline, the search data and a draft; a surgeon from your practice corrects and approves anything clinical, and the page shows who approved it and when. Medical advice stays with your surgeons."],
          ["Can a US plastic surgery practice work with an SEO consultant in Poland?", "Yes. I work remotely from Warsaw; my working afternoon and evening fall on the East Coast morning and the West Coast early morning, so calls are easy to schedule. Invoices are in euros, calls and reports in English."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your plastic surgery practice: what to send me"),
        p(
          "Tell me the practice name and send links to the website, the Google Maps listing and RealSelf, plus your surgeons, the procedures you want more consultations for, your locations and where patients travel from. You get my first fixes and a fixed price in reply. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
