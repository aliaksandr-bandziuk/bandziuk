// Landing page fixture: Dentist SEO Services (EN), group «dentist-seo».
// Semantic core: ref/dental-medical.md / dental-medical.csv, dental SEO group:
// dentist seo 1000, dentist seo services 1000, dentist seo service 1000, seo
// for dentist 880, seo for dentists 880, seo dentist 880, dentist seo company
// 880, dental seo marketing 880, dentist seo agency 390, dentist seo expert 320,
// dental seo expert 320, seo service(s) for dentist(s) 210, best seo for
// dentists 210, dentist website seo 140, seo agency for dentists 110, seo
// marketing for dentists 110, seo company for dentists 70, dentist seo
// keywords 50, seo keywords for dentists 50, seo for cosmetic dentists 30,
// pediatric dentist seo 10.
// PAA: What is SEO in dentistry? How much does dental SEO cost? What are some
// effective SEO keywords for dentists? (H2 on keyword research). What is local
// SEO for dentists? Is doing local SEO worth it? (FAQ).
// Intent: ref/intent-check-dental-medical.md — «dentist seo» vs «local seo for
// dentists» 0 shared URLs → own page /local-seo-for-dentists (one short
// section + link here); «dentist seo» vs «dental marketing» 0 shared → only
// mentioned: the owner does the SEO part; «seo for doctors» vs «dentist seo»
// 0 shared → /seo-for-doctors.
// NOT on this page: map pack, Google Business Profile, reviews and listings in
// detail (/local-seo-for-dentists); building the site (/dental-clinic-website);
// design (/dental-website-design); physicians (/seo-for-doctors). «website for
// dentists» 1000 — patients’ demand (practice sites, directories), not
// targeted; «dentist marketing» 1300 — marketing-agency SERP, not targeted.
// Owner’s rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const dentistSeoEn = {
  lang: "en",
  group: "dentist-seo",
  slug: "dentist-seo",
  title: "Dentist SEO services",
  heading: "Dentist SEO Services",
  excerpt:
    "I provide dentist SEO services for dental practices: treatment pages for implants, aligners and veneers, insurance and financing pages, dentist-reviewed content and AI answers, so patients who search for a dentist book with you.",
  seo: {
    metaTitle: "SEO for Dentists and Dental Practices | Bandziuk",
    metaDescription:
      "Dentist SEO services: treatment, insurance and emergency pages, dentist-reviewed content and AI answers, measured in new patients. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Treatment pages + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Emergency dentist near me", "Book online", "In-network insurance", "New patient special"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Dental SEO audit: practice website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off dentist SEO work: treatment, insurance and emergency pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a dental practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with dentist SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Keyword data for your treatments and towns", text: "Implants, aligners, emergencies — with real volumes" },
        { _key: k("o"), iconName: "layers", title: "A page for each high-value treatment", text: "Implants, Invisalign, veneers, pediatric care" },
        { _key: k("o"), iconName: "file-text", title: "Insurance, financing and new-patient pages", text: "The cost questions patients ask before booking" },
        { _key: k("o"), iconName: "shield-check", title: "Dentist-reviewed content for YMYL", text: "Named authors, credentials and review dates" },
        { _key: k("o"), iconName: "sparkles", title: "Answers in ChatGPT and AI Overviews", text: "Practice facts and structured data assistants can quote" },
        { _key: k("o"), iconName: "trending-up", title: "New patients from search, reported", text: "Referral source tracked in your practice software" },
      ],
      prices: [
        { _key: k("r"), label: "Dental SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a dental practice", value: "from 800 € / month", note: "pages, tracking, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: local service and multilingual websites I have optimized",
      subtitle:
        "SEO work for service businesses that win customers from local search, maps and reviews — the same work a dental practice needs: pages for each service and area, a strong Google profile and reports in calls and bookings.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your dental practice",
      subtitle: "I reply within one business day with what I would fix first on your practice website and Google profile, and a fixed price.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do most new patients come from now?", options: ["Google search and Maps", "Insurance directories", "Referrals from patients", "Paid ads"] },
        { _key: k("z"), question: "Which treatments do you want more of?", options: ["Dental implants", "Invisalign and clear aligners", "Veneers and cosmetic work", "Emergency and family care"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Dentist SEO services are the work that gets a dental practice found when people search for a dentist, a treatment or an urgent appointment in their town: treatment pages, keyword data, technical fixes and the facts Google and AI assistants need before they trust a health website. I do this work myself, as a single SEO specialist who also builds websites, so the person who audits your site is the person who fixes it. Dental SEO is measured in new patients and booked consultations, not in a traffic chart."),

        h2("What is SEO in dentistry: how a dental practice gets found in Google"),
        p("SEO in dentistry means making the practice website and its listings the answer to the searches patients make before they book. Those searches fall into three groups, and each needs different work:"),
        li("urgent searches — “emergency dentist near me”, “broken tooth”, “toothache weekend” — where the patient calls one of the first practices they see"),
        li("treatment research — “dental implants cost”, “Invisalign vs braces”, “veneers before and after” — where the patient reads for weeks and compares practices"),
        li("searches for the practice by name after a recommendation, where your own site should come first with correct hours and a booking button"),
        p("The map results decide many urgent searches. The website decides treatment research and name searches. AI answers draw on both, and they lean heavily on what your own pages say."),

        h2("Dental SEO keyword research: effective SEO keywords for dentists by treatment and town"),
        p("The most effective SEO keywords for dentists are rarely “dentist” on its own. Patients combine a treatment, a problem or a payment question with a place:"),
        li("treatment and town: “dental implants [city]”, “Invisalign provider near me”, “porcelain veneers [neighborhood]”"),
        li("a problem in plain words: “chipped front tooth”, “lost a crown”, “wisdom tooth swelling”"),
        li("payment: “dentist that takes my insurance”, “implants payment plan”, “dentist without insurance cost”"),
        li("the patient: “pediatric dentist”, “dentist for anxious patients”, “sedation dentistry”"),
        p("Before writing anything I pull real search volumes for your treatments and the towns your patients come from, and check which of your pages already rank. A keyword list is only useful when each phrase belongs to one page; two pages both aiming at “dental implants” usually means neither ranks."),

        h2("High-value treatment pages in dentist SEO: implants, Invisalign and veneers"),
        p("One implant case or one aligner treatment can be worth more than a year of check-ups, and patients research these treatments longest. Each needs its own page, written around the questions people ask before a consultation."),
        h3("Dental implant pages"),
        p("Single implants, implant bridges, full-arch options, bone grafting if you do it, the number of visits, a price range and financing. Patients want to know who places the implant and how long they have done it, so the page names the dentist."),
        h3("Invisalign and clear aligner pages"),
        p("Searches mix the brand and the category: “Invisalign”, “clear aligners”, “invisible braces”. If you are an Invisalign provider, say so within the brand’s rules; if you offer other aligner systems, explain the difference in plain words. Many readers are comparing your practice with mail-order kits, so describe how treatment with in-office check-ups works."),
        h3("Veneers and cosmetic dentistry pages"),
        p("Veneers, bonding and whitening are searched together with “cost” and “before and after”. Photos of your own cases, published with patient consent, and a plain description of the consultation do more than stock images of perfect smiles. This is also where SEO for cosmetic dentists differs from general dentistry: fewer searches, higher value per patient."),

        h2("Emergency dentist and pediatric dentistry pages in dental SEO"),
        p("“Emergency dentist near me” is searched at night and at weekends, almost always on a phone. An emergency page says in its first line whether you see same-day patients, shows the phone number as a button and lists the hours someone actually answers. If you do not take after-hours emergencies, say where patients should go; a page that promises more than the phone delivers turns into bad reviews."),
        p("Parents looking for a pediatric dentist want to know the age you start seeing children, what the first visit looks like, whether a parent can stay in the room and which plans cover children. A pediatric practice, or a family practice with a children’s section, needs this as its own page, apart from adult treatments."),

        h2("Insurance, financing and new-patient special pages for dentists"),
        p("Cost sits behind many dental searches, and most practice websites answer it with “call us”. Pages that help both rankings and patients:"),
        li("an insurance page listing the plans you are in network with, and how out-of-network visits are billed"),
        li("a financing page: payment plans, third-party financing and an in-house membership plan if you run one"),
        li("a new-patient page: what the first visit includes, what to bring and which forms to complete before arriving"),
        li("new-patient specials written as plain offers with their conditions, not pop-ups that cover the page on a phone"),
        p("These pages rank for searches like “dentist that takes [plan name]” and give AI assistants concrete facts to repeat about your practice."),

        h2("YMYL and dentist authorship: how Google judges dental health content"),
        p("Google treats health content as “Your Money or Your Life” (YMYL) and holds it to a higher standard than most topics. On a dental website that means:"),
        li("each treatment page names the dentist who wrote or reviewed it, with a link to their profile"),
        li("dentist profiles list degrees, licenses, specialties, memberships and continuing education"),
        li("clinical pages carry a “last reviewed” date and are reviewed again when techniques or prices change"),
        li("the text explains treatments and options without promising outcomes or diagnosing from a distance"),
        p("I research, structure and draft the pages; a dentist from your practice reviews the clinical content before it goes live. I do not write medical advice, and a good page sends a patient with symptoms to an appointment, not to a self-diagnosis."),

        h2("Technical SEO for dental websites: speed, online booking and patient forms"),
        p("Most technical problems on dental websites are common and cheap to fix:"),
        li("main content that takes longer than 2.5 seconds to appear on a phone, usually because of sliders, video headers and large before-and-after photos"),
        li("online booking from NexHealth or a similar scheduler, or a chat widget, loaded in a way that slows every page"),
        li("one “Services” page for every treatment, so none of them ranks"),
        li("no structured data marking the practice as a dentist, with its dentists, hours and locations"),
        p("Forms need separate attention. In the US, a form that collects health information can fall under HIPAA. The safer options are form and booking providers that sign a business associate agreement, or a form that asks only for a name, contact details and a preferred time and leaves clinical details for the visit. This is a general point, not legal advice; your compliance adviser makes the final call."),
        p(
          "If the site needs rebuilding rather than fixing, the ",
          link("dental clinic website", "/dental-clinic-website"),
          " page describes how I build one, and ",
          link("dental website design", "/dental-website-design"),
          " covers the design side.",
        ),

        h2("Local SEO for dentists: where Google Maps and patient reviews fit"),
        p(
          "For “dentist near me” the map pack usually decides who gets the call, and it depends on the Google Business Profile, reviews and listings more than on the website. Categories, hours, the review routine after each visit and listings such as Healthgrades and ZocDoc are covered on the ",
          link("local SEO for dentists", "/local-seo-for-dentists"),
          " page. On the website side, what matters is that each profile links to its own location page, the site and the profile list the same treatments, and reviews are never bought or filtered to happy patients only.",
        ),

        h2("SEO for multi-location dental groups (DSOs) and independent dental practices"),
        p("A dental service organization with ten or fifty offices has a different problem from an independent practice. The group needs a location page for each office with its own dentists, hours, photos and insurance list, one profile per location linked to that page, and central treatment pages that do not compete with the location pages for the same searches."),
        p("An independent practice cannot outspend a group on ads, but it can win where group sites are thin: the dentist’s own name and background, real photos of the office and team, and detailed pages for the treatments the practice is known for."),

        h2("Dentist SEO for ChatGPT and Google AI Overviews: visibility in AI answers (GEO, AEO)"),
        p("Patients now ask ChatGPT, Perplexity or Google’s AI Overviews which dentist in their town does implants with sedation, or how much veneers cost, and the answer may name practices before anyone clicks a link. Getting a practice into those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a dentist it means:"),
        li("treatments, dentists, credentials, languages spoken, hours and accepted insurance written as plain facts on the site"),
        li("price ranges and financing options in text an assistant can quote"),
        li("structured data marking the practice as a dentist, with its dentists and locations"),
        li("the same details on Google, Healthgrades, Yelp and insurance directories, which assistants cross-check"),
        p(
          "I check how assistants describe your practice before the work and again after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Dental SEO marketing: how to choose a dentist SEO company, agency or expert"),
        p("Dental marketing from an agency is usually a package: ads, social media, recall emails, sometimes call answering, with SEO as one part. I do the SEO part, plus the website when it needs rebuilding; I do not run ads or social accounts. Whether you choose a dentist SEO agency, a larger dentist SEO company or a single dental SEO expert, the best SEO for dentists is an arrangement where you can see what was done and what it brought. Questions to ask:"),
        li("Will you report new patients from search, using the referral source in Dentrix, Open Dental or our practice software, or only rankings?"),
        li("Who owns the website, the domain and the Google profile if we part ways?"),
        li("Is clinical content reviewed by our dentists, or published under our name without that?"),
        li("How long is the contract, and what happens if nothing moves in six months?"),

        h2("How much dental SEO costs"),
        li("SEO audit of the practice website and Google Business Profile: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off dentist SEO work — treatment, insurance and emergency pages, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for a dental practice — new pages, AI visibility, local search and reporting on new patients: from 800 € per month; in very competitive cities from 1,300 € per month."),
        p(
          "A single-location practice in a mid-sized town often gets most of the result from the audit and a few strong treatment pages. Physicians and medical clinics will find their version on the ",
          link("SEO for doctors", "/seo-for-doctors"),
          " page; all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Dentist SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is SEO in dentistry?", "It is the work that makes a dental practice appear when patients search for a dentist, a treatment or an emergency appointment nearby: treatment and insurance pages, dentist-reviewed content, technical fixes, structured data, the Google Business Profile and visibility in AI answers. Paid ads are a separate channel."],
          ["How much does dental SEO cost?", "An audit of the website and Google profile costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive cities. I give a fixed price after a short description of your practice and area."],
          ["What are some effective SEO keywords for dentists?", "Treatment plus place (“dental implants [city]”, “Invisalign near me”), urgent problems (“emergency dentist”, “broken tooth”), payment questions (“dentist that takes my insurance”) and patient groups (“pediatric dentist”, “sedation dentistry”). Which ones are worth a page depends on real volumes in your area, which I check first."],
          ["What is local SEO for dentists?", "The part of dental SEO that decides the map results for searches like “dentist near me”: the Google Business Profile, reviews, listings and location pages. It has its own page on this site, and on monthly work I do both parts."],
          ["How long does SEO take for a dental practice?", "Fixes to the Google profile and existing pages can show within weeks. New treatment pages usually take two to four months to rank, and longer in large cities, where implants and Invisalign are among the most contested local searches."],
          ["Who writes the content, and does a dentist need to review it?", "I research and draft the pages from your treatments, prices and processes. A dentist from your practice reviews the clinical content and is named on the page; Google expects that from health content, and patients do too."],
          ["Is SEO worth it if we already run ads?", "Ads bring patients from the first week and stop when the budget does. SEO takes months, but patients from search are not paid for per click. Many practices keep ads for implants or emergencies and use SEO to depend on them less over time."],
          ["Do you work with dental practices outside Poland?", "Yes. Dentist SEO is done remotely — the website, the profile and the search data for your towns — for practices in the US, Canada, the UK, Australia and Europe. I work in English, Polish and Russian."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order dentist SEO for your practice: what to send me"),
        p(
          "Send the practice name, the website and Google Maps links, the treatments you want more of — implants, aligners, cosmetic work, emergencies — the towns your patients come from, and the booking or practice software you use. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
