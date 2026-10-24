// Landing page fixture: Healthcare SEO (EN), group «healthcare-seo».
// Semantic core: ref/dental-medical.csv|md, «healthcare seo» rows: healthcare
// seo agency 1600, seo agency healthcare 1600, seo agency for healthcare 1600,
// seo for healthcare industry 480, seo services for healthcare 480, seo for
// healthcare services 480, healthcare seo services 390, healthcare-seo-services
// 390, healthcare seo service 390, seo services healthcare 390, seo in
// healthcare 390, seo for healthcare 390, healthcare seo 320, seo healthcare
// 320, healthcare seo companies 320, healthcare seo company 320, local seo for
// healthcare 260, healthcare seo experts 110, healthcare local seo 110, seo for
// healthcare providers 90, healthcare seo consultant 70, healthcare seo expert
// 70, healthcare seo firm 70, healthcare marketing seo 50, healthcare seo
// marketing 50, healthcare seo strategy 40, healthcare local seo company 20,
// healthcare website seo 20, seo for healthcare professionals 20, seo for
// healthcare companies 20, healthcare seo uk 20; 10 each: best healthcare seo
// services, best healthcare seo agency, best healthcare seo company, healthcare
// seo keywords, seo for healthcare websites, seo for hospitals and healthcare,
// healthcare local seo services, healthcare seo trends, healthcare seo stats,
// healthcare seo reviews. «hospital seo» 110 is marked «off topic» in the csv
// but belongs here by meaning; used in text, not in the heading.
// Not targeted: «seo united healthcare», «dr seo family healthcare associates»,
// «healthcare seo linkedin» (navigational); «healthcare seo in new york»
// (city page, not planned).
// Intent: ref/intent-check-veterinary.md, group 2 — «medical seo» vs
// «healthcare seo» 0 shared URLs, 0 shared domains → two pages. The «healthcare
// seo» top 10 is agencies for hospitals and health systems: guidewaycare,
// cardinaldigitalmarketing, healthcaresuccess, silverbackstrategies,
// remedyconnect, progress, sequencehealth, ink-digital.co.uk, lumar.io. So this
// page is for large organizations: hospitals, health systems, multi-site
// clinic groups, urgent care networks, diagnostic labs, telehealth companies.
// «veterinary seo» vs «healthcare seo» 0 shared → /veterinary-seo.
// NOT on this page: private practices and small clinics, «medical seo»,
// «medical practice seo», «medical marketing» (/medical-seo); individual
// physicians, «seo for doctors», «healthcare seo for doctors» (/seo-for-doctors);
// dentists (/dentist-seo); building and designing the site
// (/medical-website-design). Owner is a single specialist: the page offers a
// defined project or work alongside an in-house team, not a full agency.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const healthcareSeoEn = {
  lang: "en",
  group: "healthcare-seo",
  slug: "healthcare-seo",
  title: "Healthcare SEO",
  heading: "Healthcare SEO",
  excerpt:
    "I do healthcare SEO for hospitals, health systems, multi-site clinic groups, urgent care networks, diagnostic labs and telehealth companies: provider directories, location and service-line pages, medically reviewed content and technical SEO, as a single specialist who takes a defined project or works with your in-house team.",
  seo: {
    metaTitle: "Healthcare SEO for Hospitals and Health Systems | Bandziuk",
    metaDescription:
      "SEO for hospitals, clinic groups and telehealth: provider directories, location and service-line pages, schema and site migrations. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Directories, locations, service lines", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Find a cardiologist near me", "Accepting new patients", "Open today until 9 pm", "Book online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Healthcare SEO audit of a website or one section", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off healthcare SEO work: template specifications, redirect maps, schema plans", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly healthcare SEO alongside an in-house team", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with healthcare SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data by service line and location", text: "What patients type for conditions, treatments and towns" },
        { _key: k("o"), iconName: "layers", title: "Provider directory and location templates", text: "Fixes that apply to hundreds of doctors and sites at once" },
        { _key: k("o"), iconName: "file-text", title: "Medically reviewed service-line content", text: "Named reviewers, credentials and review dates" },
        { _key: k("o"), iconName: "gauge", title: "Technical SEO for large CMS sites", text: "Crawling, duplicates, JavaScript directories, migrations" },
        { _key: k("o"), iconName: "shield-check", title: "Tracking checked on sensitive pages", text: "Tags flagged for your privacy and compliance team" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Provider and location facts assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Healthcare SEO audit: website or one section", value: "from 250 €", note: "one-off, fixed quote first" },
        { _key: k("r"), label: "Monthly SEO alongside your in-house team", value: "from 800 € / month", note: "templates, content briefs, migrations, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: multilingual and multi-page websites I have built and optimized",
      subtitle:
        "None of these are hospitals or clinics. They are the closest work I have: a multilingual site with pages for several countries and services, website rebuilds with SEO, and local-service businesses that get their customers from Google Maps.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for healthcare SEO for your organization",
      subtitle: "I reply within one business day with what I would look at first on your website and a fixed price for a defined piece of work.",
      contextLabel: "Organization name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of organization are you?", options: ["Hospital or health system", "Multi-site clinic group or urgent care", "Diagnostic lab or imaging network", "Telehealth company"] },
        { _key: k("z"), question: "What do you need first?", options: ["An SEO audit of the site or a section", "Provider directory and location pages", "An SEO plan for a site migration", "Ongoing SEO alongside our team"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do healthcare SEO for hospitals, health systems, multi-site clinic groups, urgent care networks, diagnostic labs and telehealth companies: provider directories, location and service-line pages, medically reviewed content, schema and the technical work on large websites. I am a single specialist, not an agency, so I take a defined piece of work — an audit, one section of the site, a migration plan — or work alongside your in-house marketing and web team."),

        h2("What healthcare SEO covers for hospitals, health systems and clinic networks"),
        p("A health system website can hold thousands of pages: a profile for every physician, a page for every hospital, clinic, urgent care center and imaging site, service lines, a condition library and the patient portal. Most of the search demand that brings patients lands on four types of page:"),
        li("provider profiles — searches for a physician’s name, or for a specialty with a town"),
        li("location pages — “urgent care near me”, “hospital in [town]”, “MRI near me”"),
        li("service-line pages — “cardiologist in [city]”, “knee replacement surgery”, “maternity hospital”"),
        li("condition and treatment content — “what causes atrial fibrillation”, “recovery after hip replacement”"),
        p("Each type has its own template and its own owner inside the organization. Healthcare SEO services at this size are mostly about getting those templates right once, so that one fix applies to hundreds of pages. Telehealth companies add a fifth type: pages for each state or country where their clinicians are licensed, because that is how patients search for online care."),

        h2("Provider directory SEO: “find a doctor” pages that rank for physician names"),
        p("Patients search for doctors by name to check a referral, find a phone number or read reviews before a visit. On those searches the organization’s own profile often ranks below Healthgrades, WebMD, Vitals or Zocdoc, because it is thin: a name, a photo and a specialty from the credentialing database. A provider profile that can rank includes:"),
        li("full name with credentials, specialty and subspecialties, board certifications"),
        li("every location where the physician sees patients, linked to those location pages"),
        li("languages spoken, whether they accept new patients, and the insurance plans accepted"),
        li("training and the conditions treated, written as text, not only as filter tags"),
        li("a direct path to booking or to the phone number of the right office"),
        p("The directory search is the other half. Filters by specialty, location, language and insurance can create millions of URL combinations that waste crawling and produce near-duplicate pages. I map which filtered pages deserve to be indexed — “cardiologists in [town]” usually does, a page for Spanish-speaking cardiologists accepting one plan on Tuesdays does not — and how the rest should be handled."),

        h2("Location pages at scale for hospitals, urgent care networks and clinic groups"),
        p("A clinic group with forty sites or an urgent care network with a hundred needs a page for each location, and those pages have to differ in substance, not only in the address. What separates a location page that ranks from a template copy is the information patients use: hours, including holidays; services available at that site; the providers who work there; parking and public transport; accepted insurance. For urgent care, whether walk-ins are accepted and how to check in online. For a lab or imaging network, the tests offered at that site and how to prepare for them."),
        p("Each location page connects to its own Google Business Profile listing with the same name, address, phone and hours. After mergers and moves, large organizations often have duplicate or outdated listings; cleaning them up is usually the fastest local SEO for healthcare win, because the map decides most “near me” searches."),

        h2("Service-line pages in healthcare SEO: cardiology, orthopedics and maternity"),
        p("Service lines compete with other systems, specialty groups and national centers. A service-line section works best as a small hub: an overview, pages for the main procedures and programs, and links to the physicians and locations of that line."),
        h3("Orthopedics and joint replacement pages"),
        p("Patients compare hospitals for hip and knee replacement weeks in advance. They look for the surgeon, the approach used, the expected length of stay and the rehabilitation program."),
        h3("Cardiology and heart care pages"),
        p("A mix of urgent and planned searches, from chest pain to “cardiac rehab near me”. The pages have to send urgent cases to emergency care at once and still answer the planned-care questions."),
        h3("Maternity pages"),
        p("Expecting parents choose a hospital months ahead and search for tours, birthing options and which obstetricians deliver there."),

        h2("Condition and treatment content under YMYL: medical review and E-E-A-T"),
        p("Google treats health content as “Your Money or Your Life” and holds it to a higher standard of experience, expertise, authoritativeness and trust (E-E-A-T). A hospital has what smaller publishers lack — real clinicians — and the pages only have to show it:"),
        li("a named clinician who wrote or reviewed the page, with credentials and a link to their profile"),
        li("a publication date, a “last reviewed” date and a review schedule that someone owns"),
        li("content tied to the care the organization provides, with a path to the right specialist or location"),
        li("no claims beyond what the clinical team signs off on, and a clear note that the page is not individual medical advice"),
        p("Licensed health libraries with thousands of generic articles rarely rank, because the same text sits on hundreds of other sites. Fewer original pages on conditions the system treats in volume, reviewed by its own specialists, do better."),

        h2("Schema markup for healthcare organizations, hospitals, physicians and clinics"),
        p("Structured data tells search engines and AI assistants what each page describes. Schema.org has types for this — MedicalOrganization and Hospital for the organization and its facilities, MedicalClinic for outpatient sites, Physician for provider profiles — with properties for specialty, address, hours and the link between a doctor and the places where they practice. On a large site the markup should come from the same data as the visible page, so it stays correct when a physician leaves. Schema does not guarantee rich results; it removes guessing."),

        h2("Technical SEO for large healthcare websites and site migrations"),
        p("Hospital websites usually run on enterprise CMS platforms such as Sitecore, Drupal or Adobe Experience Manager, with the directory, the location finder and the patient portal often served by separate systems. Most technical problems come from the joins:"),
        li("directory and location pages rendered by JavaScript that search engines read late or incompletely"),
        li("the same physician available under several URLs from different systems"),
        li("old campaign pages, PDFs and microsites of acquired hospitals still indexed"),
        li("slow templates on pages patients open on a phone"),
        p("Migrations need their own plan. Mergers, rebrands and CMS moves are common in healthcare, and a migration that breaks provider and location URLs can cost a long time in search. The plan covers the URL inventory, a redirect map for every profile and location, template and markup changes, a check on staging and monitoring after launch."),

        h2("HIPAA, tracking pixels and analytics in healthcare SEO"),
        p("In the US, measuring SEO on a healthcare website has a privacy side. Tracking pixels and analytics tags on pages where patients read about conditions, book appointments or log in to a portal can pass health-related information to third parties, and this has drawn regulator guidance and lawsuits. Forms that collect health information can fall under HIPAA, which usually means using vendors that sign a business associate agreement, or keeping clinical details off the form."),
        p("I measure SEO with the tools your privacy team has approved and flag tags found on sensitive pages during the audit. I do not give legal opinions; that stays with your privacy officer and counsel. In the EU, GDPR treats health data as a special category, and the principle is the same: collect less."),

        h2("Healthcare SEO approval workflows with compliance, legal and clinical reviewers"),
        p("In healthcare the slow part is the approval. A change to a service-line page can pass through marketing, a clinical reviewer, compliance, legal and brand. To keep SEO work moving I:"),
        li("separate technical changes — titles, redirects, markup, internal links — from changes to clinical wording, so the first group does not wait for medical review"),
        li("write content briefs that reviewers can approve in one pass: the search data, the questions to answer and the claims that need sign-off"),
        li("agree page templates with compliance once, so new location and provider pages follow an approved pattern"),
        li("keep a change log that shows what was changed, when and why"),

        h2("Healthcare SEO for ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Patients now ask ChatGPT, Perplexity or Google’s AI Overviews which hospital is good for a knee replacement, which urgent care is open now, or whether a doctor takes their insurance. The answers draw on what assistants can read and cross-check: your pages, Google listings, directories such as Healthgrades, and news. Getting into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a healthcare organization it means:"),
        li("provider, location and service-line facts written as plain, current text, not only inside filters and widgets"),
        li("the same names, addresses and specialties on the website, the listings and the directories"),
        li("structured data that connects physicians, locations and the organization"),
        li("condition pages with named clinical reviewers, which assistants treat as more reliable sources"),
        p(
          "I check how assistants describe the organization, its locations and its main service lines before and after the work. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Healthcare SEO agency, consultant or in-house team: where a single specialist fits"),
        p("Most healthcare SEO companies in these search results are agencies with teams for content, paid media, PR and analytics. If you need all of that from one supplier, choose an agency. I am one person — an SEO specialist who also builds websites — and I fit where the work has clear edges:"),
        li("an SEO audit of the whole site or one part of it, such as the provider directory"),
        li("a specification for provider, location or service-line templates that your developers build"),
        li("an SEO plan for a migration, merger or rebrand, with checks around launch"),
        li("ongoing work next to an in-house team that lacks SEO capacity"),
        p(
          "Private practices and small clinics are covered on the ",
          link("medical SEO", "/medical-seo"),
          " page, individual physicians on ",
          link("SEO for doctors", "/seo-for-doctors"),
          ", and dental groups on ",
          link("dentist SEO", "/dentist-seo"),
          ".",
        ),

        h2("How much healthcare SEO services cost"),
        li("SEO audit of a website or one section: from 250 €, one-off. The price depends on the size of the site, and you get a fixed quote before the work starts."),
        li("One-off healthcare SEO work — a template specification, a redirect map, a schema plan: 250–700 € per piece."),
        li("Monthly SEO alongside your team: from 800 € per month; in large, very competitive metro markets from 1,300 € per month."),
        p(
          "If the website itself needs rebuilding, the ",
          link("website redesign", "/services/website-redesign-services"),
          " and ",
          link("medical website design", "/medical-website-design"),
          " pages describe that work. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Healthcare SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much do healthcare SEO services cost?", "An audit of a website or one section costs from 250 € one-off, single pieces of work such as a redirect map or a template specification 250–700 €, and monthly SEO alongside your team from 800 € per month, or from 1,300 € in very competitive metro markets. The audit price depends on the size of the site; I give a fixed quote first."],
          ["Can a single SEO consultant work with a hospital or health system?", "Yes, on a defined scope: an audit, the provider directory, location templates, a migration plan, or ongoing work next to an in-house team. I do not replace a full agency with paid media, PR and content teams, and I say so before we start."],
          ["What is the difference between healthcare SEO and medical SEO?", "In search, healthcare SEO is mostly about hospitals, health systems and multi-site organizations: directories, location pages at scale, service lines and large CMS sites. Medical SEO is about private practices and small clinics: procedure pages, the Google profile, reviews and booking. I describe that work on a separate medical SEO page."],
          ["Do you need access to patient data?", "No. SEO works with public pages, Search Console, analytics and the CMS. If your policy requires a business associate agreement or other paperwork for any vendor who touches analytics, tell me early and we will scope the work around it."],
          ["How long does SEO take for a hospital website?", "Template fixes on provider and location pages can show within weeks, because they apply to hundreds of pages at once. New service-line content usually takes three to six months, and the approval process often takes longer than the SEO itself."],
          ["Do you write medical content?", "I write the structure, the search data and the briefs, and I can draft non-clinical parts. Clinical statements are written or reviewed by your clinicians and approved by your compliance team. I do not give medical advice and do not publish health claims without sign-off."],
          ["How do you handle SEO during a merger or rebrand?", "With a migration plan: a full URL inventory, a redirect map for every provider and location page, changes to templates and markup, a check on staging before launch and monitoring after it. This is usually a one-off project with a fixed price."],
          ["Do you work with healthcare organizations outside Poland?", "Yes. The work is remote, for organizations in the US, the UK and the EU. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order healthcare SEO for your organization: what to send me"),
        p(
          "Send the organization’s website, the type of organization — hospital, clinic group, urgent care, lab or telehealth — the number of locations and providers, the CMS you use and the piece of work you need: an audit, a section, a migration plan or ongoing support. I will reply with what I would look at first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
