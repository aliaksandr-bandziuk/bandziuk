// Landing page fixture: SEO for hair transplant clinics (EN), group
// «seo-for-hair-transplant-clinics».
//
// Semantic core, buyer side (demand-new-niches + demand-hair-b2b, EN/US):
// seo for hair transplant clinics 10, hair transplant seo 20 (both in H1 and
// H2), hair transplant marketing 10, hair transplant advertising 20 (CPC
// 18.98). «hair restoration» measured dead as a target — hair restoration seo
// 10, hair restoration marketing 10, the other seven forms zero in US and GB —
// so it stays a synonym in the body, never a heading target. Zero in the
// planner but alive below its floor of 10, taken from related searches in the
// live SERP: hair transplant marketing strategy, hair transplant marketing
// cost, seo for hair transplant clinics near california / near texas, hair
// transplant seo services, hair transplant tourism marketing.
//
// Intent check (striking-serp-custom, EN/US, top-20 domains):
// «seo for hair transplant clinics» ∩ «seo for plastic surgeons» = 0 shared
// domains → separate page, same rule that separated med spa SEO. ∩ «hair
// transplant seo» = 6 shared (hair-transplant-seo.com, focus-digital.co,
// inboundblogging.com, ceohero.com, treehack.com) → one page covers both
// phrasings. ∩ «hair transplant website design» = 2 (gmrwebteam.com,
// sosyalzeplin.com) → the build page is separate. Top-10 of the service query
// is ten providers and zero showcases; two exact-match domains exist in the
// niche (hair-transplant-seo.com, hairtransplantdesign.com), plus two agency
// listicles and a «Hair Transplant Clinic SEO + AEO + GEO Guide (2026)».
//
// Patient-side core (demand-hair-patient, EN/US) — this is NOT our demand, it
// is the structure this page tells a clinic to build: cost 27100 and
// how much is a hair transplant 8100 and financing 3600; hair transplant
// turkey 27100 and istanbul 2900; fue 18100 and follicular unit extraction
// 14800 and dhi 2400 and fut 1900; surgeon 14800 and near me 6600 and
// consultation 590 (CPC 132.44, the dearest click measured on this project);
// female 8100 and beard 5400 and eyebrow 5400; before and after 8100 and
// timeline 1300; gone wrong 1600 (CPC 26.36) and recovery 1600 and scars 1600.
// Graft-band searches are a small fraction of plain cost (~630 against 27100),
// so the graft table lives inside the cost page, not as pages of its own.
// GB has the same shape but travel outranks cost: turkey 8100 vs cost 6600.
// Not targeted: hair transplant all inclusive, am i a candidate for a hair
// transplant (both zero). hairline transplant reads 60500 US / 22200 GB with
// the same CPC as the bare head term — a close-variant cluster, not a separate
// search.
//
// AI vocabulary per claude/service-wording-demand.md (18.11): headings carry
// ai seo 6600, generative engine optimization 4400, answer engine
// optimization 2400, geo seo 2400; body and FAQ carry ai search optimization
// 1600, ai visibility 1000, llm seo 720, chatgpt seo 390, how to get cited by
// chatgpt 260, perplexity seo 110. Niche+AI combinations have no demand in any
// language, so the section is built on the general terms.
//
// NOT on this page: building and designing the site
// (/plastic-surgeon-website-design for the surgical neighbour; the hair
// transplant build page is its own group); surgical plastic surgery
// (/seo-for-plastic-surgeons); injectables, laser and non-surgical treatment
// (/med-spa-seo); hair loss as a medical condition, which dermatology owns
// (/seo-for-dermatologists); general practice SEO (/medical-seo); paid ads and
// social media (the owner does not run them). Main case: Giuseppe, a
// psychotherapist in Milan — a private medical practice under strict
// advertising rules, 301 migration, pages quoted in ChatGPT.
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, li, link, k } from "./pt";

export const seoForHairTransplantClinicsEn = {
  lang: "en",
  group: "seo-for-hair-transplant-clinics",
  slug: "seo-for-hair-transplant-clinics",
  title: "SEO for hair transplant clinics",
  heading: "SEO, GEO and AEO for Hair Transplant Clinics and Hair Restoration Surgeons",
  excerpt:
    "I do SEO, GEO and AEO for hair transplant clinics: a page for each technique under the name patients type, cost pages that answer the price question first, the surgeon who actually operates, galleries dated by month, and the clinic named in ChatGPT, Perplexity and Google AI Overviews when a patient asks an assistant where to fly.",
  seo: {
    metaTitle: "Hair Transplant Clinic SEO and AI Visibility (GEO, AEO)",
    metaDescription:
      "SEO, GEO and AEO for hair transplant clinics: cost and technique pages, the surgeon who operates, and answers in ChatGPT and Perplexity. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["SEO, GEO and AEO in one scope", "Named in ChatGPT and Perplexity", "Audit from 250 €"],
  heroPhonePoints: ["Best clinic for a hair transplant?", "FUE or DHI hair transplant", "Hair transplant cost", "Who performs the incisions"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a hair transplant clinic: website, galleries and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off hair transplant clinic SEO work: technique, cost and gallery pages, surgeon bios, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a hair transplant clinic", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for a hair transplant clinic",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each technique patients name themselves", text: "FUE, FUT and DHI, with the full term beside each abbreviation" },
        { _key: k("o"), iconName: "file-text", title: "Cost pages that answer the plain price question", text: "A range, what moves it, and the graft table inside one page" },
        { _key: k("o"), iconName: "shield-check", title: "The surgeon who operates, named and credentialed", text: "Training, registration, who makes incisions and who places grafts" },
        { _key: k("o"), iconName: "image", title: "Galleries dated by month after surgery", text: "Three, six and twelve months, with written consent on file" },
        { _key: k("o"), iconName: "map-pin", title: "Google Business Profile for the clinic and its surgeons", text: "Right category, procedures as services, real photos of the clinic" },
        { _key: k("o"), iconName: "sparkles", title: "GEO and AEO: the clinic named in ChatGPT and Perplexity", text: "A baseline of what assistants say now, corrected and measured again" },
      ],
      prices: [
        { _key: k("r"), label: "Hair transplant clinic SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a hair transplant clinic", value: "from 800 € / month", note: "techniques, cost, galleries, maps, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a private medical practice and sites that sell across borders",
      subtitle:
        "First, a private medical practice in Milan that works under strict advertising rules and is now quoted in ChatGPT answers. Then multilingual sites for clients who decide from another city or country, and premium services chosen after weeks of research — the conditions a hair transplant clinic competes in when its patients fly in.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your hair transplant clinic",
      subtitle: "Within one business day you get the first fixes I would make to your site, galleries and Google profile, with a fixed price.",
      contextLabel: "Clinic name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which procedures do you want more patients for?", options: ["FUE hair transplant", "DHI or unshaven transplant", "Beard or eyebrow restoration", "Female pattern hair loss"] },
        { _key: k("z"), question: "Where do your patients travel from?", options: ["The same city or region", "Other cities in the same country", "Other countries", "Both local and international"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO, GEO and AEO for hair transplant clinics and hair restoration surgeons — single-surgeon practices, clinics with a transplant unit, and centres that treat patients flying in from abroad."),
        p("The work covers technique and cost pages, the surgeon’s own credentials, galleries, the complication questions most clinics avoid, and your Google profile."),
        p("It also covers what ChatGPT, Perplexity, Gemini and Google AI Overviews say about the clinic — generative engine optimization and answer engine optimization, GEO and AEO, which in this field decide the shortlist before the patient opens a site. I do all of it myself, from the audit through to the code."),

        h2("SEO for hair transplant clinics: what it covers, and how it differs from plastic surgery SEO"),
        p("Hair restoration is searched in a shape no other aesthetic procedure shares, and I check that shape against search data before proposing a structure."),
        p("Three questions carry almost all of the demand: what it costs, where to fly for it, and which technique the clinic performs. In the United States the cost search and the Turkey search are the same size as each other."),
        p("In Britain the travel search is the larger of the two. A clinic with one page called “hair transplant” competes for none of the three."),
        p(
          "This is a different job from SEO for a plastic surgery practice, and the search results prove it rather than suggest it: the top twenty for hair transplant clinic searches and the top twenty for plastic surgery searches share no domains at all. Surgical plastic surgery is covered on the ",
          link("SEO for plastic surgeons", "/seo-for-plastic-surgeons"),
          " page, non-surgical treatment on the ",
          link("med spa SEO", "/med-spa-seo"),
          " page, and hair loss as a medical condition belongs with ",
          link("SEO for dermatologists", "/seo-for-dermatologists"),
          ". A clinic that does several of these needs each kind of page, written for its own patient.",
        ),

        h2("Hair transplant cost pages that answer the price question first"),
        p("“Hair transplant cost” and “how much is a hair transplant” are the largest searches in the field, and clinics that keep the price behind a consultation form lose them to directories, forums and competitors abroad."),
        p("A cost page per market gives a range, explains what moves it and says that the final figure is set after the surgeon sees the donor area. A price kept out of the text is also a price no assistant can quote, so the clinic drops out of the AI answer as well as the search result."),
        li("a range, with the number of grafts that range covers"),
        li("what changes it: technique, graft count, the surgeon’s own involvement, anaesthesia, number of sessions"),
        li("what the figure includes — medication, aftercare visits, the first wash, a second session if it is needed"),
        li("financing or instalments, which patients search for separately from price"),
        p("Searches by graft band — two thousand, three thousand, four thousand grafts — exist but are a small fraction of the plain cost search."),
        p("So the graft table belongs inside the cost page, with each band named in the text, rather than spread across pages of its own that each compete for a tiny query."),

        h2("Hair transplant technique pages: FUE, FUT, DHI and the words patients type"),
        p("Patients arrive having already read the technique names, and they compare clinics by which ones are offered."),
        p("FUE carries by far the most demand, and the full term — follicular unit extraction — is searched almost as often as the abbreviation, so a page that uses only one of the two loses half the search. FUT and DHI each have their own, smaller demand and their own question behind them."),
        li("one page per technique, each saying who it suits, who it does not, and what the donor area looks like afterwards"),
        li("both the abbreviation and the full term in the heading and the first paragraph"),
        li("the shaving question answered plainly, because unshaven and partially shaved procedures are chosen for that reason alone"),
        li("session length, number of sessions and what the day itself involves"),
                p("Branded technique names a clinic has coined do not bring search traffic on their own. They belong on the page as a sentence explaining which standard technique they are a version of, so that a patient searching the standard name still finds the clinic."),

        h2("Hair transplant tourism SEO: patients who compare cities before they compare clinics"),
                p("In this field the travel search is as large as the price search. A patient in Britain or Germany searching for a transplant in Turkey is comparing countries first and clinics second, and the clinic that wins is the one whose pages answer the travel question rather than only the surgical one."),
        li("a page in the patient’s language, not the clinic’s — the search happens in the patient’s own words"),
        li("how many nights to stay, when the washing and the follow-up happen, and when flying is considered safe"),
        li("what is arranged and what is not: transfers, accommodation, interpreters — stated as facts, not as packages the clinic does not actually sell"),
        li("how aftercare continues once the patient is home, and who answers questions at that point"),
        li("the surgeon’s registration and where a complaint would go, which is the question international patients ask most and clinic sites answer least"),
        p("This is also where assistants decide the most. A patient weighing Istanbul against London asks ChatGPT or Perplexity which city and which clinic before opening any site, and the answer is built from whoever published prices, staging and risks as text."),
        p("A clinic selling across borders is competing in several search markets at once, each with its own competitors and its own price expectations."),
        p("That is an argument for separate language versions with their own cost ranges, not one page translated word for word."),

        h2("Hair transplant surgeon pages: who performs the incisions and who places the grafts"),
        p("“Hair transplant surgeon” is among the largest searches in the field, and the consultation search carries the most expensive click I have measured on any page of this kind."),
        p("Both point at the same thing: the page that turns a reader into a booking is the one that names the person who operates."),
        p("In this field that page has a specific job, because the division of work between the surgeon and the technicians is the question patients discuss most and clinics explain least."),
        p("A page that says plainly who makes the incisions, who places the grafts, how many patients the surgeon takes in a day and whether the same surgeon handles the follow-up answers a real doubt."),
        p("It also gives assistants a fact to quote, and it is checked against the advertising rules of the clinic’s own regulator before publication."),

        h2("Hair transplant pages beyond the scalp: beard, eyebrow and female hair loss"),
        p("Three groups of searches sit next to the main one and bring a different patient with a different question."),
        p("Female pattern hair loss carries substantial demand of its own, and almost no clinic site addresses it directly — the pages assume a male patient, the galleries show male patients, and a woman researching her options reads herself out of the market."),
        p("Beard and eyebrow restoration each have their own steady demand and their own concerns about density and direction."),
                p("Each of these gets its own page rather than a paragraph on the main one: the candidacy criteria differ, the graft counts differ, the photographs that convince are different photographs, and the patient does not recognise herself in a page written for someone else."),

        h2("Before-and-after galleries and a hair transplant timeline dated by month"),
        p("Galleries are the most visited part of a hair clinic site and usually the least readable: hundreds of images with no text, loaded through a slow plugin."),
        p("In this field they also carry a problem no other procedure has, which is time. Hair grows over a year, so an undated before-and-after photograph reads as stock imagery to a patient who knows that."),
        li("each case dated by month after surgery — three, six, twelve — and the graft count stated"),
        li("the same lighting, angle and distance in both photographs, with no editing beyond cropping"),
        li("a separate page explaining the growth timeline, including the shedding phase that frightens patients at week three"),
        li("compressed images with descriptive file names and alt text about the procedure, never about the person"),
        li("written consent for marketing use on every photograph, confirmed by the clinic’s own adviser"),

        h2("Hair transplant complication pages: scarring, recovery and poor results answered plainly"),
                p("Scarring, recovery, success rates and what a poor result looks like are all searched, and clinics bid on those searches — the query about transplants going wrong carries a click price higher than most commercial terms in the field. That tells you how much the answer is worth."),
        p("A clinic that answers its own hardest question keeps the patient who would otherwise find that answer on a competitor’s site or in a forum thread."),
        p("The page describes what can go wrong, how often, what the clinic does about it and what a revision involves. It makes no promise of a result, which is both the rule in most markets and the thing that makes the page credible."),

        h2("Local SEO for a hair transplant clinic: Google Business Profile and “near me” searches"),
        p("For “hair transplant near me” the map results come first, and the click there is among the dearest in the field."),
        p("The clinic profile needs the right primary category, the procedures listed as services, real photographs of the clinic and the team rather than patient photographs, and links to the matching pages."),
        p("Surgeons can hold their own profiles; in a clinic with several, they are set up to support the clinic listing rather than compete with it."),
        p("A consulting room the clinic uses one day a month in another city is information for the site, not a second map listing."),
        p("Clinics that treat patients from abroad still need the local profile, because patients check that the clinic is a real place with a real address before they book a flight."),

        h2("Hair transplant advertising rules that decide what a clinic page may claim"),
        p("Hair restoration is advertised under medical advertising rules, and they differ by market: what may be claimed about a result, whether before-and-after photographs may be shown at all, how prices may be presented and how patient testimonials may be used."),
        p("A clinic selling into several countries is subject to the rules of each market it advertises into, not only the one it operates in."),
        p("I write pages that rank without promised results, and the wording is checked against the regulator that applies to the clinic, with the clinic’s own adviser confirming anything clinical or legal."),
        p("This is the same discipline as the Milan case below, where the content management system itself flags a sentence that breaks the rules before it can be published."),

        h2("AI SEO for hair transplant clinics: visibility in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Before opening a single clinic website, patients now ask an assistant: “how much does a hair transplant cost in Turkey”, “is FUE or DHI better for a receding hairline”, “what can go wrong with a hair transplant abroad”."),
        p("The same question goes to Perplexity and to Gemini, and into Google AI Overviews above the results."),
        p("This work goes by two names — GEO, generative engine optimization, and AEO, answer engine optimization — and it is also searched as AI SEO, AI search optimization and LLM SEO. In a field where the patient is comparing countries, the assistant is often the first thing that names a shortlist."),
                p("Assistants quote facts they can read and confirm in more than one place, so the work on a hair clinic site is:"),
        li("techniques, graft ranges, prices, session lengths and recovery stages written as plain text, never as an image or a price list behind a form"),
        li("short, surgeon-reviewed answers to the questions patients actually ask, including the ones about complications"),
        li("the same clinic and surgeon details everywhere: the site, the Google profile, the surgeon’s registration entry, directory listings"),
        li("structured data connecting the clinic, its surgeons, its procedures and its locations"),
        p("I record what ChatGPT, Perplexity and Google AI Overviews say about the clinic before the work starts, correct what they get wrong at its source, and measure the same questions again afterwards — that baseline is what AI visibility means in practice."),
        p("It works for medical practices: Giuseppe, a psychotherapist in Milan, found me through ChatGPT, and the pages of his rebuilt site are quoted in ChatGPT answers today."),
        p(
          "The method is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("SEO for a private medical practice under strict advertising rules: the Milan case"),
        p("My strongest medical case comes from a practice with stricter advertising rules than most hair clinics face."),
        p("For Giuseppe, a psychologist and psychotherapist in Milan, I moved the site from WordPress to Next.js and Sanity, migrated all 468 blog posts with 301 redirects from every old URL, and built pillar pages, pages for Milan, Monza and online therapy, and 150 FAQ entries with structured data."),
        p("His content management system flags any sentence that breaks Italian rules on advertising health services — a promised result, a testimonial, a discount — before it can go live."),
                p("For a hair transplant clinic the transferable part is the method: a medical site can rank without promising results, keep every old address through a rebuild, catch risky wording before publication, and end up as the source an assistant quotes."),

        h2("Hair transplant clinic marketing: where SEO fits next to ads and Instagram"),
        p("Hair transplant clinic marketing usually mixes paid search, Instagram and TikTok, influencer trips, agencies that resell patients, and a website."),
        p("Ads and social bring attention while you pay for it. Search brings the patient who is already costing out the operation, and the pages keep working after the campaign stops."),
        p("I do SEO and build sites; I do not run ads or social accounts. The pages I build support them — a follower who searches the clinic’s name lands on a page that answers what a reel cannot."),
        p(
          "Other specialties are covered on the ",
          link("medical SEO", "/medical-seo"),
          " page, and the wider service on ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          ".",
        ),

        h2("How much SEO for a hair transplant clinic costs"),
        li("SEO audit of the site, galleries and Google Business Profile: from 250 €, one-off, with fixes ranked by the consultations they can bring."),
        li("One-off work — technique, cost and gallery pages, surgeon bios, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO — new technique and market pages, galleries, maps, AI visibility and reports in consultation requests: from 800 € per month; in the most competitive markets, from 1,300 € per month."),
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
      title: "SEO for hair transplant clinics: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a hair transplant clinic cost?", "The audit starts at 250 €, one-off tasks cost 250–700 €, and monthly work starts at 800 € — or 1,300 € in the most competitive markets, where clinics from several countries compete for the same patient. Tell me about the clinic, its surgeons and the markets you sell into, and the quote comes back as a fixed sum."],
          ["How long does hair transplant clinic SEO take to bring consultations?", "Changes to the Google profile and to pages that already rank tend to show within a few weeks. A new technique or cost page usually needs three to six months, and longer in the markets where clinics advertise across borders."],
          ["Should the cost be published, or kept for the consultation?", "Published as a range, with the graft count it covers and what moves it. The price question is the largest search in this field; a clinic that hides it loses that search to directories and to competitors abroad, and the range still leaves the final figure to the surgeon."],
          ["Our patients fly in from other countries. Does that change the work?", "Yes, substantially. Each market searches in its own language and compares against its own local prices, so it needs its own pages rather than one translated set — plus a travel page covering nights required, follow-up timing, when flying is safe, and how aftercare continues at home."],
          ["Can we show before-and-after photos?", "Yes, with written consent for marketing use, matching lighting and angles and no retouching beyond cropping — and in this field each case needs a date, because growth takes a year and an undated photograph reads as stock imagery. Your adviser confirms the consent form and what your market allows."],
          ["Do you write the clinical content?", "I prepare the outline, the search data and a draft; a surgeon from your clinic corrects and approves anything clinical, and the page shows who approved it and when. Medical advice stays with your surgeons."],
          ["Will patients find the clinic through ChatGPT and Perplexity?", "Increasingly, when there is something to quote. ChatGPT, Perplexity and Gemini repeat what they can read: techniques, graft ranges, prices, recovery stages and the surgeon’s registration, written as text. A clinic whose prices live inside an image, or behind a form, is left out of the answer — and this is the field where the assistant often names the shortlist before the patient opens a single site."],
          ["Can a clinic abroad work with an SEO consultant in Poland?", "Yes. I work remotely from Warsaw, which sits an hour or two from most European markets and overlaps the Gulf morning and the UK working day, so calls are easy to schedule. Invoices are in euros, calls and reports in English."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your hair transplant clinic: what to send me"),
        p(
          "Tell me the clinic name and send links to the website and the Google Maps listing, plus your surgeons, the techniques you perform, the countries your patients come from and the languages you sell in. You get my first fixes and a fixed price in reply. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
