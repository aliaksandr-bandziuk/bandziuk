// Landing page fixture: Plastic surgeon website design (EN), group
// «plastic-surgeon-website-design». Design + development, one price.
// Semantic core: ref/medical-practices.md (EN, US): plastic surgeon website
// design 170, plastic surgery websites 140 (H2 on templates, vendor platforms
// and what good plastic surgery websites share). «plastic surgery studios» 210
// is a brand/navigational query — not targeted. PAA: What credentials should a
// plastic surgeon have? (surgeon profile H2 + FAQ, from the website angle).
// Intent: ref/intent-check-medical-practices.md — «plastic surgeon website
// design» vs «seo for plastic surgeons»: 0 shared URLs, 0 shared domains →
// separate pages. Top 10: aestheticos.ai, studio3marketing, nkpmedical,
// medicalpracticewebsitedesign, onthemap, dribbble, behance → design studios,
// aesthetic-medicine vendors and galleries; the buyer is the surgeon.
// NOT on this page: ranking work, reviews routine, Google profile
// (/seo-for-plastic-surgeons); med spa sites (/med-spa-website-design);
// general medical sites (/medical-website-design); paid ads and social media.
// Main case: Giuseppe, psychotherapist in Milan — calm design for anxious
// visitors, advertising rules checked in the CMS, guard rails, consent-based
// analytics, 44 working days, pages in ChatGPT. NDA medical system mentioned
// once. Owner’s rule: website pages carry the «AI can read» H2.
import { p, h2, li, ol, link, k } from "./pt";

export const plasticSurgeonWebsiteDesignEn = {
  lang: "en",
  group: "plastic-surgeon-website-design",
  slug: "plastic-surgeon-website-design",
  title: "Plastic surgeon website design",
  heading: "Plastic Surgeon Website Design and Development",
  excerpt:
    "I design and build plastic surgeon websites: surgeon profiles with board certification shown correctly, procedure pages that read well on a phone, before-and-after galleries built on consent, consultation requests that keep patient photos secure and pages for patients who travel.",
  seo: {
    metaTitle: "Website Design for Plastic Surgeons | Bandziuk",
    metaDescription:
      "Plastic surgeon website design: surgeon profiles, procedure pages, consented before-and-after galleries, secure consultation forms. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Surgeon, procedures, gallery", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Meet the surgeon", "Before & after gallery", "Virtual consultation", "Financing options"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple plastic surgeon website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Plastic surgery practice website with surgeon profiles, procedure pages, galleries, secure consultation requests and language versions, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with plastic surgeon website design",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Surgeon profiles with certification stated exactly", text: "Board, training, privileges, memberships" },
        { _key: k("o"), iconName: "layers", title: "Procedure pages with one clear layout", text: "Candidates, recovery, risks, cost range, gallery" },
        { _key: k("o"), iconName: "image", title: "Before-and-after galleries built on consent", text: "Filters by procedure, captions, fast on phones" },
        { _key: k("o"), iconName: "message-circle", title: "Consultation requests with secure photo upload", text: "Through a provider that signs a BAA" },
        { _key: k("o"), iconName: "map-pin", title: "Pages for patients who travel to you", text: "Stay, follow-up visits, flights, virtual consult" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Surgeons, procedures and locations as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple plastic surgeon website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Surgeons, procedures, galleries, secure requests, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Design portfolio: a private medical practice and premium websites",
      subtitle:
        "A private medical practice in Milan, designed calm for anxious visitors and built with advertising rules in its editor. Next to it, premium and multilingual sites with galleries, video and catalogs — the parts a plastic surgery website is made of.",
      picks: [
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your plastic surgeon website",
      subtitle: "Within one business day you get a proposed structure for the home page, the surgeon profile and a procedure page, with a fixed price.",
      contextLabel: "Practice name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice is it?", options: ["Solo plastic surgeon", "Group practice", "Surgery center", "Surgery and med spa"] },
        { _key: k("z"), question: "What bothers you most about the current site?", options: ["There is no site yet", "The gallery is hard to use", "Few consultation requests", "It looks dated"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design and build plastic surgeon websites — for solo surgeons, group practices and surgery centers — and I do both the design and the code, so one person answers for how the site looks and how it works. A plastic surgery website has a narrow job: help someone who is considering an operation decide that your surgeon is the right one and ask for a consultation. Every page is measured against that job."),

        h2("Plastic surgeon website design: what a patient checks before requesting a consultation"),
        p("Visitors arrive with specific doubts: is this surgeon trained for my operation, do the results look natural, how long will I be off work, can I afford it. The home page and the menu are built around those doubts, not around how the practice is organized:"),
        li("the surgeon’s name, specialty and board on the first screen, with a real photograph"),
        li("procedures grouped by face, breast and body, with reconstructive work shown on its own if you do it"),
        li("the gallery one tap away from every procedure"),
        li("consultation request, call and text in a fixed bar at the bottom of the phone screen"),
        p("The look is discreet rather than glossy: photographs of the surgeon, the team and the facility, a restrained palette and readable type. Stock images of models signal a template and show nothing about your work."),

        h2("Surgeon profile page design: board certification and training shown correctly"),
        p("Patients reread the surgeon profile before the consultation, and it is where they look for what credentials a plastic surgeon should have. The template holds:"),
        li("full name and the exact name of the certifying board — in the US, for example, the American Board of Plastic Surgery — rather than a bare “board-certified”"),
        li("medical school, residency, fellowship and hospital privileges"),
        li("professional memberships, written as each society names itself"),
        li("the procedures this surgeon performs, linked to their pages and galleries"),
        li("a short video or a note on the surgeon’s approach, and a button to request a consultation with them"),
        p("Some states regulate how certification and specialty may be advertised, so the wording is checked with your state medical board or counsel before launch. Board and society logos appear only where their own rules allow it."),

        h2("Procedure page design for plastic surgery websites: face, breast and body"),
        p("Every procedure page follows one layout, so a patient who has read about rhinoplasty knows where recovery is described on the breast reduction page. A summary comes first — what the operation changes, how long it takes, the anesthesia, typical downtime — then the detail: candidates, technique options, a recovery timeline, risks, a cost range linked to financing, and the matching gallery. A table of contents lets readers jump, and long medical text is split under headings that say what each part contains."),
        p("Each page shows the surgeon who reviewed it and the date of the last review. Results are described with their limits, and the page ends at a consultation request, not at a promise."),

        h2("Before-and-after gallery design for plastic surgeon websites"),
        p("The gallery is where many patients spend the most time and where most plastic surgery sites are slowest. The design I use:"),
        li("a gallery per procedure, with filters patients care about — technique, implant type, age range — only where there are enough cases to fill them"),
        li("each case as a pair at the same size, with a caption: procedure, time since surgery, surgeon"),
        li("a notice before images with nudity, which open on tap"),
        li("images in modern formats that load as the visitor scrolls, so the gallery opens quickly on a phone"),
        p("The gallery depends on discipline in the photos: written consent from each patient for use on the website, the same lighting, angle and background, no retouching. Each case can be removed in one step if a patient withdraws consent."),

        h2("Consultation requests and virtual consultations: secure forms for patient photos"),
        p("Many practices ask for photos with a consultation request. A photo of a patient’s body attached to an ordinary contact form and delivered by email is health information traveling through tools never meant for it, and in the US it can fall under HIPAA. The design keeps the paths apart:"),
        li("the short request asks only for name, contact details, procedure of interest and a preferred time"),
        li("photo uploads and medical history go through a form or practice-management provider that signs a business associate agreement"),
        li("analytics and ad pixels stay off the request and upload pages"),
        p("Years ago I worked under NDA on a medical system that stored patient records; I can’t name it, but it left me with one rule: the website itself collects as little as possible. Your compliance adviser confirms the final setup."),

        h2("Website design for out-of-town and international plastic surgery patients"),
        p(
          "Patients who fly in for surgery need a different set of pages: how a virtual consultation works, how many nights to plan nearby, where to stay during recovery, when the follow-up visits are and how aftercare continues at home. A “Traveling for surgery” section answers this in one place, with a checklist and a map of the practice, the surgery center and nearby accommodation. For international patients the section exists in their languages, each version at its own address rather than behind a translation widget. I build ",
          link("multilingual websites", "/services/multilingual-website-development"),
          ", including Hebrew, a right-to-left language, on the Cyprus VIP Estates platform.",
        ),

        h2("Financing and price pages in plastic surgery website design"),
        p("Price is the question patients hesitate to ask on the phone. A pricing page with ranges per procedure and a plain list of what is and is not included — anesthesia, facility, garments, follow-up — plus a financing page with the providers you accept and a link to apply, filters out requests from people who cannot go ahead and makes it easier for those who can. On each procedure page a short cost block links to both."),

        h2("Advertising rules built into a plastic surgeon website’s editor: the Milan practice case"),
        p("My strongest case is a private medical practice with strict advertising rules: Giuseppe, a psychologist and psychotherapist in Milan. I rebuilt his site on Next.js and Sanity with a calm design for anxious visitors — dark backgrounds broken by light sections and serif type with a real italic. While he types, the editor points out anything Italian rules on advertising health services make risky: promises of results, patient testimonials, discounts, a “free consultation”. Key pages cannot be deleted, published URLs are locked, analytics runs only after consent, and he got an owner’s manual in English and Italian with video walkthroughs. The build, from first code to handover, took 44 working days."),
        p("For a plastic surgery practice the same approach means the editor flags “guaranteed”, “painless”, “risk-free” and discount wording before a page goes live, and a gallery case can require a consent date before it is published. Staff add procedures and cases without breaking the layout."),

        h2("A plastic surgeon website that ChatGPT and Google AI Overviews can read"),
        p(
          "Patients ask assistants which surgeon in their city does revision rhinoplasty or breast reconstruction after cancer. Assistants answer from text they can read and check, so the site keeps surgeons, boards, training, procedures, locations, languages and financing as text and structured data, matching your Google profile and RealSelf. Giuseppe’s new pages already appear in ChatGPT answers, and the same build applies here. Ongoing AI visibility work has its own page, ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          ", and ranking for procedures is covered on ",
          link("SEO for plastic surgeons", "/seo-for-plastic-surgeons"),
          ".",
        ),

        h2("Plastic surgery website templates, vendor platforms or a custom design"),
        p(
          "Vendors of plastic surgery websites offer polished templates with galleries built in, often with a monthly fee and a contract that keeps the site on their platform. For a new solo practice a template is a fair start. A custom design pays off with several surgeons, a large gallery, patients from other states or countries, more than one language, or rankings you cannot afford to lose. With a custom build the code, the content and the domain stay yours. Practices that also run injectables and laser will find the ",
          link("med spa website design", "/med-spa-website-design"),
          " page useful; other specialties, the ",
          link("medical website design", "/medical-website-design"),
          " page.",
        ),

        h2("How the plastic surgeon website design process works"),
        ol("Brief. You send the surgeons, the procedures, the cases with consent, the locations and the tools you use for requests and scheduling."),
        ol("Patient paths. I map three routes on a phone screen — read about a procedure, browse the gallery, request a consultation — and agree them with you."),
        ol("Design. The home page, a surgeon profile, a procedure page and a gallery are designed in full; the rest follows the same system."),
        ol("Build and checks. Forms, uploads, accessibility and speed are tested, and on a redesign every old URL is redirected to its new page."),
        p(
          "Redesigns follow the ",
          link("website redesign", "/services/website-redesign-services"),
          " process; the general service is on ",
          link("website development", "/services/website-development"),
          ".",
        ),

        h2("How much plastic surgeon website design costs"),
        li("A simple plastic surgeon website — home, surgeon, main procedures, gallery, financing and contact: 700–1,400 €."),
        li("A practice website with surgeon profiles, procedure pages, galleries with filters, secure consultation requests, travel pages and language versions: from 2,000 €."),
        p(
          "Design is included in both. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Plastic surgeon website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a plastic surgeon website cost?", "700–1,400 € for a simple site with the surgeon, main procedures, a gallery and contact; from 2,000 € for a practice site with several surgeons, procedure pages, filtered galleries, secure consultation requests and language versions. Design is included, and the price is fixed after a short brief."],
          ["How long does it take to build a plastic surgery website?", "Usually four to eight weeks, depending on the number of procedures and gallery cases and on how fast photos and reviewed texts arrive. Giuseppe’s site in Milan, with hundreds of migrated posts, took 44 working days of build."],
          ["What credentials should a plastic surgeon’s website show?", "Medical school, residency, fellowship, hospital privileges and the full name of the certifying board, plus memberships named exactly. In the US, some states regulate how certification is advertised, so the wording is checked with your board or counsel."],
          ["How do you handle nudity in before-and-after galleries?", "Images with nudity sit behind a short notice and open on tap, faces and identifying marks are cropped unless the patient agreed otherwise, and every case has written consent on file. Each case can be removed in one step."],
          ["Can patients send photos for a virtual consultation safely?", "Yes, if the upload runs on a form or portal service that has signed a business associate agreement with you. Ordinary contact forms and email are not used for photos, and the short request form asks for no medical details at all."],
          ["Can you redesign our site without losing rankings?", "Yes. Every old URL is mapped to its new page and redirected. For Giuseppe I moved all 468 blog posts this way, with 301 redirects from every old address."],
          ["Do you work with US practices from Poland?", "Yes. I design and build remotely from Warsaw, and the second half of my working day falls on US mornings, so calls fit your schedule. Invoices are in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order plastic surgeon website design: what to send me"),
        p(
          "I need the practice name, a link to the current site or Google profile, the surgeons and procedures, the number of gallery cases with consent, your locations and the tools that handle consultation requests. Add a few photos of the surgeon and the facility, and the first screen I sketch will look like your practice, not a template. A layout and a fixed price come back in reply. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
