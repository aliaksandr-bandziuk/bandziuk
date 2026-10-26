// Landing page fixture: SEO for Dermatologists and Dermatology Practices (EN),
// group «seo-for-dermatologists». New page.
// Semantic core: ref/medical-practices.md (US): seo for dermatologists 50 (H1,
// metaTitle, several H2), local seo for dermatologists 50 (local H2). PAA used:
// «What are the best SEO strategies for healthcare websites?», «What is SEO in
// mental health?» adapted as «What is SEO for a dermatology practice?» (FAQ).
// Intent: ref/intent-check-medical-practices.md — «med spa seo» vs «seo for
// dermatologists» 0 of 10 shared URLs, 0 shared domains → separate pages. The
// dermatology SERP is small and its own: EzDerm, DoctorRank, Medigrow,
// healthcare SEO agencies, Quora → the buyer is the practice owner.
// Angle: medical, surgical and cosmetic dermatology on one site; condition
// pages (acne, eczema, psoriasis, rosacea, hair loss, pediatric); skin cancer
// screening, biopsy and Mohs (general, no promises); local SEO per location and
// new-patient availability; insurance vs self-pay; teledermatology (HIPAA,
// state licensure — general); YMYL with accurate clinician titles; images and
// structured data; AI answers. Giuseppe (psychotherapist, Milan) is the proof:
// private medical practice, pillar + subtopic pages, conditions in structured
// data, CMS guard for forbidden wording, pages in ChatGPT.
// NOT on this page: the cosmetic side run as a med spa — memberships,
// injectables, booking platforms (/med-spa-seo, sibling, linked once); plastic
// surgery (separate page); general medical practice SEO (/medical-seo, linked
// once); building the site (/medical-website-design, linked once).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; regulation in general terms.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForDermatologistsEn = {
  lang: "en",
  group: "seo-for-dermatologists",
  slug: "seo-for-dermatologists",
  title: "SEO for dermatologists and dermatology practices",
  heading: "SEO for Dermatologists and Dermatology Practices",
  excerpt:
    "I do SEO for dermatologists and dermatology practices: condition pages for acne, eczema and psoriasis, skin cancer screening and Mohs pages, insurance and self-pay information, teledermatology, a Google profile for each location and a place in AI answers — with medical and cosmetic dermatology kept apart on one site.",
  seo: {
    metaTitle: "Dermatology SEO for Skin Clinics and Practices | Bandziuk",
    metaDescription:
      "SEO for dermatologists: condition and skin check pages, insurance, teledermatology, local SEO per location and AI answers, counted in appointments. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Conditions, skin checks, Maps", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Skin check near me", "Eczema dermatologist", "In-network with your plan", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Dermatology SEO audit: website, Google Business Profiles and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a dermatology practice: condition, screening and insurance pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a dermatology practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for dermatologists",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each condition you treat", text: "Acne, eczema, psoriasis, rosacea, hair loss" },
        { _key: k("o"), iconName: "shield-check", title: "Skin cancer screening pages that inform", text: "Skin checks, biopsy, Mohs — no fear, no promises" },
        { _key: k("o"), iconName: "map-pin", title: "Local SEO for every location", text: "Dermatologist category, services, openings, reviews" },
        { _key: k("o"), iconName: "file-text", title: "Insurance and self-pay stated clearly", text: "Plans per location, referrals, cosmetic price ranges" },
        { _key: k("o"), iconName: "phone", title: "Teledermatology pages kept HIPAA-safe", text: "Photos go through a portal, not a contact form" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Reviewed answers and facts assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Dermatology SEO audit: website and Google profiles", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a dermatology practice", value: "from 800 € / month", note: "condition pages, maps, AI, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: a private medical practice website and the sites I optimize",
      subtitle:
        "The first case is a private medical practice: Giuseppe, a psychotherapist in Milan, whose profession limits what he may say about his work. On the site I rebuilt for him each area of therapy and each condition has its own page, he and his consulting rooms are described in structured data, and recently added pages are quoted by ChatGPT — the structure a dermatology practice needs for its conditions and locations. Next to it: Cyprus VIP Estates, whose five-language site I run SEO for every month; a 3D laser scanning and BIM modeling company that got 29 times more organic traffic once its site was rebuilt; an education agency covering ten countries; and a Warsaw auto repair shop that wins customers from Google Maps.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your dermatology practice",
      subtitle: "Within one business day you get the first fixes I see for your website and Google profiles, plus a fixed price. Please do not include any patient details.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of dermatology do you practice?", options: ["Medical dermatology", "Medical and cosmetic", "Mohs and skin cancer surgery", "Pediatric dermatology", "Several locations"] },
        { _key: k("z"), question: "How do most new patients find you now?", options: ["Referrals from primary care", "Google search and Maps", "Zocdoc or insurer directories", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for dermatologists means that a person with a rash, a changing mole or a question about laser treatment finds your practice — on its own website, on Google Maps and in AI answers — and books an appointment. I do this myself, as a single consultant who also builds websites, for private practices that run medical, surgical and cosmetic dermatology under one name. One person audits the site, writes the condition pages with your dermatologists and makes the changes in the code."),

        h2("What SEO for dermatologists covers: medical, surgical and cosmetic dermatology"),
        p("A dermatology practice serves at least three kinds of patients, and each of them searches in a different way:"),
        li("someone living with a condition — “adult acne dermatologist”, “eczema on hands won’t heal”, “psoriasis biologics” — who wants to know whether a specialist can help and whether insurance pays"),
        li("someone worried about a spot — “mole changed color”, “full body skin check near me” — who wants an appointment soon"),
        li("someone choosing a cosmetic treatment — laser, chemical peel, injectables — who compares prices, photos and who performs it"),
        p("Dermatology SEO gives each of them a page that answers the search, keeps the practice details identical on the site, Google and directories, and reports results in appointments by service line. In any one town the number of dermatology searches is modest, so precise pages for real searches matter more than traffic charts."),

        h2("Medical and cosmetic dermatology on one website: two paths for two kinds of patients"),
        p("Most practices offer both, and the website often mixes them: a rosacea page that ends with a filler promotion, or a home page where a patient with a suspicious mole scrolls past laser packages. Patients and search engines both read that as a confused page. I split the site into two clear sections that share the practice name, the clinicians and the booking system:"),
        li("medical dermatology: conditions, skin checks, procedures, insurance, referrals and new-patient paperwork"),
        li("cosmetic dermatology: treatments, who performs them, price ranges and consultation requests"),
        p(
          "The two sections link where it helps a patient — acne scar treatment after acne care, for example — but each page has one job. If the cosmetic side runs as a separate med spa with its own brand, memberships and booking, that work is described on the ",
          link("med spa SEO", "/med-spa-seo"),
          " page.",
        ),

        h2("Dermatology condition pages: acne, eczema, psoriasis, rosacea and hair loss"),
        p("People search for their condition long before they search for a practice. A condition page that ranks is written for the person who has it and checked by your dermatologist:"),
        li("what the condition looks like and when it is worth seeing a specialist instead of waiting"),
        li("what happens at the first visit, which tests may follow and the kinds of treatment the practice offers"),
        li("whether treatment is usually covered, and what prior authorization means for biologics and other specialty drugs"),
        li("which clinicians at the practice see patients for it, and how to book"),
        p("Start with the conditions you want more patients for, not with the whole textbook. Giuseppe’s psychotherapy site in Milan is organized the same way: seven main pages, one for each area of therapy, carry 21 narrower Italian pages between them, and the conditions he works with are named in structured data, so search engines can tell which problems the practice treats."),
        h3("Pediatric dermatology pages for parents"),
        p("Parents search for “baby eczema specialist” or “birthmark doctor for kids”. They need to see that the practice treats children, from what age, which dermatologist sees them and how a first visit works for a child."),

        h2("Skin cancer screening, biopsy and Mohs surgery pages in dermatology SEO"),
        p("Skin checks are among the most searched dermatology services and the most sensitive to write about. A full-body skin exam page explains in general terms who it is recommended for, what happens in the exam room, how long it takes and what follows if something looks suspicious: a biopsy, the wait for pathology and how results are shared. Mohs surgery, excisions and other skin cancer treatment get their own pages with the surgeon named and the referral process explained, because many of these patients come from another doctor and look up the surgeon first."),
        p("These pages inform; they never diagnose, promise a result or use fear to fill the schedule. A self-check guide such as the ABCDE signs is useful if it ends with “book a skin check”, not with reassurance based on a photo."),

        h2("Local SEO for dermatologists: Google Business Profile, locations and new-patient openings"),
        p("Searches like “dermatologist near me” are decided mostly in the map pack. Local SEO for dermatologists starts with the Google Business Profile of each location: Dermatologist as the primary category, extra categories only where they are true, medical and cosmetic services listed separately, opening hours, photos of your own waiting room and treatment rooms, and a link to that location’s page instead of the home page."),
        p(
          "New patients can wait weeks for a first dermatology visit, and many search for exactly that. If a location has earlier openings, a physician assistant who sees new patients sooner or same-week slots for spot checks, put it on the location page and in the profile. Reviews come from a short request after every visit; replies never confirm that the writer is a patient. The practice name, address and phone must match on the site, the profile, Healthgrades, Zocdoc and insurer directories. Maps work in more depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Insurance and self-pay pages on a dermatology practice website"),
        p("Insurance decides where many dermatology patients book. A page for each location with the plans you accept, whether an HMO referral is needed, how out-of-network visits work and what common visits cost without insurance answers searches like “dermatologist that takes Medicare” or “dermatologist no insurance”. Cosmetic treatments are paid out of pocket, so their pages show price ranges or the consultation fee instead. A wrong plan list brings frustrated calls and one-star reviews, so I agree with the front desk on a date each quarter to confirm it."),

        h2("Teledermatology pages: online visits, skin photos and state licensure"),
        p("Dermatology fits telehealth better than most specialties, and patients search for “online dermatologist” or “virtual acne visit”. A teledermatology page states which problems can be handled online and which need an in-person exam, how the visit works, which states the clinicians are licensed in — patients usually have to be located in one of them — and whether insurance covers it."),
        p("The photos patients send are health information. In the US they belong in a HIPAA-compliant patient portal or telehealth tool, not in a website form or plain email. The form on the site collects contact details and a convenient time, nothing about the skin. Treat this as general orientation rather than legal advice; the practice’s compliance adviser makes the call."),

        h2("YMYL and E-E-A-T on dermatology websites: board certification, reviewer and date"),
        p("Health pages fall into the group Google calls “Your Money or Your Life” (YMYL), where it wants to see who is behind the advice. In dermatology the proof is concrete:"),
        li("each condition and procedure page names the dermatologist who wrote or reviewed it, describes board certification accurately and links to their profile"),
        li("titles are exact: a physician assistant or nurse practitioner is introduced as one, with the conditions they treat"),
        li("pages carry a “last reviewed” date and describe outcomes with risks and alternatives, without promises"),
        li("clinical photos are the practice’s own, used with written consent; before-and-after pairs are shot in the same light and not edited"),
        p("Advertising rules differ by state, and the FTC has its own rules on reviews and endorsements, so check with your state medical board and your adviser. Giuseppe’s editor gets a warning from the CMS whenever a draft uses wording that article 40 of the Italian psychologists’ code of conduct rules out; a dermatology site can get the same kind of check for words like “cure” or “guaranteed results”."),

        h2("Technical SEO for dermatology websites: images, speed and structured data"),
        p("Dermatology sites are heavy with photos, and that is where most technical problems start:"),
        li("photos compressed and served in modern formats, so the main content of a page shows within 2.5 seconds on a phone"),
        li("alt text on clinical images that describes them for screen readers instead of repeating keywords"),
        li("one address per condition and treatment, without near-identical copies for every suburb"),
        li("structured data for the practice (MedicalClinic), each dermatologist (Physician) and the questions answered on a page"),
        p(
          "If the website itself is the obstacle — a vendor template you cannot edit, no room for new pages — read how I design and build sites for practices on the ",
          link("medical website design", "/medical-website-design"),
          " page.",
        ),

        h2("Dermatology SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("More and more patients ask assistants “should I get this mole checked”, “which dermatologist in Denver treats hidradenitis” or “dermatologist or med spa for rosacea laser”. An assistant builds its reply from sources it can compare: the practice website, the Google profile, Healthgrades or Zocdoc listings and reviews. On health questions it favors sources that name a qualified author. Getting into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a dermatology practice it means:"),
        li("conditions treated, procedures, locations, languages, accepted plans and new-patient availability written as plain facts"),
        li("short, clinician-reviewed answers to the questions patients ask the front desk"),
        li("the same practice and doctor details everywhere assistants look"),
        li("structured data that ties the practice, its dermatologists and its locations together"),
        p(
          "A private practice can get there: ChatGPT already cites recently published pages from Giuseppe’s site, and Giuseppe himself first heard of me in a ChatGPT answer. I record what assistants say about your practice at the start and compare it a few months later. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO for dermatologists costs"),
        li("Dermatology SEO audit — website, Google Business Profiles, competitors and AI answers: from 250 €, one-off; you get a list that starts with the changes worth most."),
        li("One-off pieces — a set of condition pages, a skin check page, insurance and teledermatology pages, schema markup or speed work: 250–700 €."),
        li("Monthly SEO for a dermatology practice — new pages, maps and reviews, AI visibility and reports in appointments: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "For a single-location practice outside the largest metros, the audit plus five or six strong condition and skin check pages is often enough for a long time. SEO for other kinds of practices is on the ",
          link("medical SEO", "/medical-seo"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for dermatologists: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for dermatologists cost?", "The audit starts at 250 €, separate jobs cost 250–700 € each, and ongoing work starts at 800 € a month (1,300 € in very competitive markets). Tell me about the practice, its locations and the conditions you want more patients for, and I will quote a fixed price."],
          ["What is SEO for a dermatology practice?", "It is the work that makes the practice appear when people search for a skin condition, a skin check or a cosmetic treatment near them, and in AI answers: condition and treatment pages reviewed by your dermatologists, a Google profile per location, insurance details and a fast site. Results are counted in booked appointments."],
          ["What are the best SEO strategies for healthcare websites?", "For dermatology: one page per condition or procedure you want more patients for, a named clinical reviewer and review date on each, accurate insurance and location details, steady reviews and structured data. None of it works without a fast mobile site and an easy way to book."],
          ["Should cosmetic dermatology have its own website?", "Usually not. One site with separate medical and cosmetic sections keeps the reputation of the practice and its doctors in one place. A separate site makes sense when the cosmetic side runs as its own med spa brand with its own booking and memberships."],
          ["Can patients send photos of a rash or a mole through our website?", "Not through an ordinary form or email. In the US, skin photos are health information and belong in a HIPAA-compliant patient portal or telehealth tool. The website form should ask only for contact details and a preferred time. Your compliance adviser should confirm the setup for your practice."],
          ["How long does dermatology SEO take?", "Profile fixes and corrected pages can show within weeks. A new condition or skin check page typically starts bringing patients after two to four months; cosmetic treatment pages in large metros need more time."],
          ["Can you work with a US dermatology practice from Poland?", "Yes. Everything — the website, the profiles, the search data for your area — is done remotely and in English. Central European afternoons and evenings fall within US business hours, so we can talk during your morning on the East Coast or in Central time. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your dermatology practice: what to send me"),
        p(
          "Send me the practice name, its website, the Google Maps listing of each location, the conditions and procedures you want more patients for, how medical and cosmetic work are split, your locations, the insurance plans you accept and the booking system or patient portal you use. Please leave out any patient details. You will get my first priorities for the practice and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
