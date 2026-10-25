// Landing page fixture: Medical SEO for private practices and clinics (EN),
// group «medical-seo».
// Semantic core: ref/dental-medical.csv|md: medical seo 390 (related),
// medical practice seo 170, seo for medical practice 170, seo medical practice
// 20, marketing company for medical practice 10 (related). «medical marketing»
// 720 (related) — mentioned only: the owner does SEO, not ads or social media.
// «seo for medical practices» (plural) is not in the csv; the singular form is
// used. «medical spa website design» 210 → /medical-website-design.
// PAA (dental set, closest fit): Is doing local SEO worth it?
// Intent: ref/intent-check-veterinary.md, group 2 — «medical seo» vs
// «healthcare seo» 0 shared URLs, 0 shared domains → separate pages. The
// «medical seo» top 10 there is practice-marketing firms (patientgain,
// percepture, practis, intrepy, kiwihealth). ref/intent-check-dental-medical.md
// — «seo for doctors» vs «medical seo» 0 shared URLs → /seo-for-doctors; its
// «medical seo» top 10 (practicebuilders, smartclinix, mdmarketingdigital,
// practicebeat) is also practice marketing. So this page is for private
// practices and small clinics: dermatology, plastic surgery, med spas,
// physical therapy, chiropractic, primary care, specialists.
// NOT on this page: hospitals, health systems, multi-site groups, «healthcare
// seo» (/healthcare-seo); individual physicians, «seo for doctors», «local seo
// for doctors» (/seo-for-doctors); dentists (/dentist-seo, /local-seo-for-
// dentists); building and designing the site (/medical-website-design).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const medicalSeoEn = {
  lang: "en",
  group: "medical-seo",
  slug: "medical-seo",
  title: "Medical SEO for private practices and clinics",
  heading: "Medical SEO for Private Practices and Clinics",
  excerpt:
    "I do medical SEO for private practices and small clinics — dermatology, plastic surgery, med spas, physical therapy, chiropractic, primary care and specialists: procedure pages, a Google profile for each location, reviews, booking and insurance pages, so patients who search for your treatment book with you.",
  seo: {
    metaTitle: "SEO for Medical Practices and Small Clinics | Bandziuk",
    metaDescription:
      "Medical practice SEO: procedure and insurance pages, Google profile per location, reviews, online booking and AI answers, measured in appointments. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Procedures + Maps + reviews", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Dermatologist near me", "Accepts your insurance", "Book online today", "Board-certified"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Medical practice SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off medical SEO work: procedure and insurance pages, profiles, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a private practice or clinic", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for medical practices",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each procedure you want more of", text: "Botox, mole checks, back pain, knee rehab — by search data" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile for each location", text: "Right category, services, hours and the matching page" },
        { _key: k("o"), iconName: "message-circle", title: "A review routine that respects privacy", text: "Asked after every visit, answered without patient details" },
        { _key: k("o"), iconName: "phone", title: "Booking and insurance in two taps", text: "Online booking, call button, accepted plans per location" },
        { _key: k("o"), iconName: "file-text", title: "Pages reviewed by your clinicians", text: "Named reviewer, credentials and a review date" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Facts about your practice assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Medical practice SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a private practice", value: "from 800 € / month", note: "pages, maps, reviews, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service businesses I have optimized",
      subtitle:
        "SEO work for service businesses that win customers from local search, maps and reviews — the same work a private medical practice needs: pages for each service and area, a strong Google profile and reports in calls and bookings.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your medical practice",
      subtitle: "I reply within one business day with what I would fix first on your website and Google profile, and a fixed price.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice do you run?", options: ["Dermatology or plastic surgery", "Med spa or aesthetics", "Physical therapy or chiropractic", "Primary care or a specialty"] },
        { _key: k("z"), question: "Where do most new patients come from now?", options: ["Referrals from other doctors", "Google search and Maps", "Zocdoc or other directories", "Paid ads"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do medical SEO for private practices and small clinics — dermatology, plastic surgery, med spas, physical therapy, chiropractic, primary care and specialist practices: procedure pages, a Google Business Profile for each location, reviews, booking and insurance pages. Medical practice SEO is measured in new patient appointments, not in traffic, and I do the work myself, from the audit to the code."),

        h2("What medical SEO covers for private practices and small clinics"),
        p("A patient choosing a dermatologist or a physical therapist usually looks in three places before booking:"),
        li("the map results — three practices with a rating, hours and a phone number, shown first for “near me” searches"),
        li("the regular results, where your site competes with Zocdoc, Healthgrades, WebMD and the hospital system in town"),
        li("AI answers — Google AI Overviews and assistants like ChatGPT, which recommend practices by name"),
        p("SEO for a medical practice works on all three: the website pages that answer what patients search, the Google profile, reviews, and the facts assistants read. Unlike a hospital, a private practice has a handful of locations and a short list of treatments it wants more of, so the work is focused and results are easier to trace."),

        h2("Procedure and treatment pages in medical practice SEO"),
        p("Patients search for the treatment or the problem, not for “a practice”: “Botox near me”, “mole removal”, “sciatica physical therapy”, “rhinoplasty cost”. One “Services” page cannot rank for all of them. Each treatment you want more of needs its own page: who it is for, what happens at the visit, recovery, a price range or insurance coverage, the clinician who performs it and how to book."),
        h3("Dermatology and skin treatment pages"),
        p("Medical and cosmetic dermatology bring different patients. Skin checks, acne and eczema are often covered by insurance; laser treatments, fillers and peels are paid out of pocket and compared by price. Separate pages keep each patient on the page meant for them."),
        h3("Plastic surgery and med spa pages"),
        p("Patients research for weeks and compare surgeons. They look for board certification, the steps of the procedure, recovery time, a price range and before-and-after photos — published only with written patient consent and without retouching."),
        h3("Physical therapy and chiropractic pages"),
        p("Searches are built around pain and injuries: “lower back pain”, “sports injury rehab”, “physical therapy after knee surgery”. Pages that explain the first visit, the usual number of sessions and whether a referral is needed answer what patients ask the front desk."),
        h3("Primary care and specialist pages"),
        p("For primary care the questions are practical: accepting new patients, same-day visits, which insurance. Specialists get many patients by referral, but the patient still searches the practice and the doctor’s name before the first visit."),

        h2("Local SEO for medical practices: Google Business Profile for each location"),
        p("For “dermatologist near me” or “chiropractor open Saturday” the map results decide most of the calls. They depend on the Google Business Profile: the right primary category (Dermatologist, Physical therapy clinic, Chiropractor, Medical spa), the services list, hours, real photos of the practice and a link to the matching page on the site, not the home page. A practice with two or three locations needs a profile and a page for each."),
        p(
          "Google also allows profiles for individual practitioners. In a practice with several doctors they should be set up deliberately, so they support the practice listing instead of competing with it. Practices built around one or two physicians will find more on the ",
          link("SEO for doctors", "/seo-for-doctors"),
          " page.",
        ),

        h2("Patient reviews in SEO for medical practices: Google, Zocdoc and Healthgrades"),
        p("Reviews move a practice up the map and help patients choose between two names. A routine works better than a campaign: a short text after each visit with a direct link, sent to every patient, not only the happy ones. Buying reviews or rewarding patients for them breaks Google’s rules and, in the US, consumer protection rules on reviews."),
        p("Healthcare adds one rule other businesses do not have: a reply must not confirm that the reviewer is a patient or mention anything about their care. A polite, general answer that invites the person to call the office protects privacy and still shows readers that the practice responds."),

        h2("Online booking and appointment forms on a medical practice website"),
        p("Every extra step between the search result and an appointment loses patients. Online booking through your practice management system or a tool such as NexHealth or Zocdoc, a tap-to-call button at the top of each page and text reminders through a service like Weave cover most of them."),
        p("Forms need care. In the US, a form that collects health information can fall under HIPAA. The usual options are a form provider that signs a business associate agreement, or a form that asks only for name, contact details and a preferred time and leaves symptoms for the call. Tracking pixels on booking pages deserve the same caution. This is general guidance, not legal advice; your compliance adviser has the final word."),

        h2("Insurance pages for medical practices: “does this doctor take my insurance”"),
        p("Many patients filter by insurance before anything else: “dermatologist that accepts Medicare”, “physical therapy covered by Blue Cross”. A page that lists the plans you accept, per location if they differ, explains out-of-network visits and shows self-pay prices where you have them answers these searches and saves calls to the front desk. The list has to stay current: a wrong insurance listing brings angry reviews, not patients."),

        h2("YMYL and E-E-A-T on medical practice websites: author, reviewer and date"),
        p("Google treats health pages as “Your Money or Your Life” and expects clear experience, expertise, authoritativeness and trust (E-E-A-T). For a practice this means:"),
        li("each treatment page names the clinician who wrote or reviewed it, with credentials and a link to their bio"),
        li("pages show a publication date and a “last reviewed” date"),
        li("results are described with risks and alternatives, without guarantees"),
        li("pages give general information, not individual medical advice, with a clear path to book a consultation"),
        p("I write the structure, the search data and the drafts; your clinicians check and approve the clinical content before it goes live."),

        h2("Technical SEO for medical practice websites: speed, booking widgets and schema"),
        p("Most practice websites lose positions on the basics:"),
        li("pages slowed down by booking widgets, chat pop-ups and video, taking longer than 2.5 seconds to show content on a phone"),
        li("template sites from medical marketing vendors with the same text on hundreds of practices"),
        li("practice name, address and phone written differently on the site, the profile and directories"),
        li("no structured data — MedicalClinic or Physician — naming the practice, its specialties, locations and hours"),
        p(
          "If the site needs more than fixes, the ",
          link("medical website design", "/medical-website-design"),
          " page describes how I build practice websites.",
        ),

        h2("Medical SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Patients now ask an assistant “which dermatologist in [town] does skin checks on Saturdays” or “is a chiropractor or a physical therapist better for back pain” before they open a single site. The answers come from what assistants can read and cross-check: your pages, your Google profile, reviews and directories. Getting into them is called generative engine optimization (GEO) or answer engine optimization (AEO). For a practice it means:"),
        li("specialties, treatments, locations, hours, languages and accepted insurance written as plain facts"),
        li("answers to common patient questions on the treatment pages, reviewed by a clinician"),
        li("the same practice details on the site, the profile, Zocdoc and Healthgrades"),
        li("structured data that connects the practice, its clinicians and its locations"),
        p(
          "I check how assistants describe your practice before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Medical SEO and medical marketing: what an SEO specialist does and does not do"),
        p("Medical marketing is the wider field: paid ads, social media, email, reputation management, sometimes a call center. Many firms that sell medical SEO are practice-marketing companies that bundle all of it with a website on their own platform. I am a single SEO specialist who also builds websites. I do not run ads or social media; I make the pages, the profile and the facts that search and AI answers rely on, and the site stays yours."),
        p(
          "Hospitals, health systems and multi-site groups are covered on the ",
          link("healthcare SEO", "/healthcare-seo"),
          " page, dental practices on ",
          link("dentist SEO", "/dentist-seo"),
          ".",
        ),

        h2("How much medical SEO costs for a private practice"),
        li("SEO audit of the website and the Google Business Profile: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off medical SEO work — procedure and insurance pages, profiles, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for a practice — new pages, maps, reviews routine, AI visibility and reporting on appointments: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "A single-location practice in a mid-sized town often gets most of the result from the audit and a few strong treatment pages. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Medical SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a medical practice cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after a short description of the practice and its locations."],
          ["How long does medical SEO take to bring patients?", "Fixes to the Google profile and existing pages can show within weeks. New treatment pages usually take two to four months to rank, longer for competitive treatments such as cosmetic procedures in large cities."],
          ["Is local SEO worth it for a small practice?", "Usually yes. Most patients choose a practice close to home, and the map results for “near me” searches decide many of the calls. A complete profile, a page for each location and a steady flow of reviews cost little compared with paid ads."],
          ["Should we rely on Zocdoc or on our own website?", "Both have a place. Directories bring patients now and charge for them; your own website and profile bring patients you do not pay for one by one. A complete directory profile that links to your site also helps your own pages."],
          ["How should a practice answer negative reviews?", "Politely and in general terms, without confirming that the reviewer is a patient or mentioning their care, and with an invitation to call the office. Patient privacy rules apply to public replies too."],
          ["Is an appointment form on our website safe?", "It can be. In the US, use a form provider that signs a business associate agreement, or ask only for name, contact details and a preferred time and leave symptoms for the call. This is general guidance; your compliance adviser decides."],
          ["Do you write the medical content?", "I write the structure, the search data and drafts. Your clinicians check and approve every clinical statement, and the page names the reviewer. I do not give medical advice."],
          ["Do you do medical SEO outside Poland?", "Yes. The work is remote — the website, the Google profile and the search data for your area — for practices in the US, the UK, Canada and the EU. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your medical practice: what to send me"),
        p(
          "Send the practice name, the website and Google Maps links, your specialty, the treatments you want more patients for, your locations and the booking system you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
