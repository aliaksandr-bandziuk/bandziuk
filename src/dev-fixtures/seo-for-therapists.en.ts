// Landing page fixture: SEO for therapists, psychologists and counselors (EN),
// group «seo-for-therapists».
// Semantic core: ref/medical-practices.md (EN, US volumes): seo for therapists
// 480, local seo for therapists 110, seo for psychologists 70, seo services for
// therapists 50, seo for mental health therapists 10, seo keywords for
// therapists 10, seo marketing for therapists 10, seo for counsellors 10.
// Related searches: seo keywords for therapists, SEO keywords for mental
// health, keywords for counseling (→ H2 on keywords), seo for therapists reddit.
// PAA: What is SEO in mental health? What are the best SEO strategies for
// healthcare websites? (both in H2/FAQ).
// Intent: ref/intent-check-medical-practices.md — «seo for therapists» vs «seo
// for psychologists»: 2 of 10 shared URLs, 3 shared domains → one page covers
// therapists, psychologists, counselors, LMFT/LCSW. Top 10: healthie,
// mytherapyflow, therapysites, behavioralhealth.partners, webfx, reddit →
// therapy-marketing vendors and agencies; the buyer is the practice owner.
// «seo for therapists» vs «therapist website design»: 0 shared URLs → separate
// page (/website-for-psychologists-therapists).
// Direct case: Giuseppe, psychotherapist in Milan (psychotherapist-website-milan).
// NOT on this page: design and build of the site, booking path, migration and
// CMS guard rails (/website-for-psychologists-therapists); physical, massage
// and occupational therapists (other intents; PT goes with chiropractors);
// medical practices in general (/medical-seo).
// Owner's rule: every SEO page covers AI search (GEO, AEO).
import { p, h2, h3, li, link, k } from "./pt";

export const seoForTherapistsEn = {
  lang: "en",
  group: "seo-for-therapists",
  slug: "seo-for-therapists",
  title: "SEO for therapists, psychologists and counselors",
  heading: "SEO for Therapists, Psychologists and Counselors",
  excerpt:
    "I do SEO for therapists, psychologists and counselors in private practice: a page for each issue and modality you treat, location and telehealth pages, a Google profile and directory listings that match your site, and facts ChatGPT can quote — so people searching for your kind of therapy find you.",
  seo: {
    metaTitle: "Therapist SEO for Private Practices | Bandziuk",
    metaDescription:
      "SEO for therapists and psychologists: niche and location pages, Psychology Today vs your own site, local SEO and ChatGPT answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Niches + locations + AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Anxiety therapist near me", "EMDR therapy online", "Accepting new clients", "Licensed in your state"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a therapy practice: website, Google profile and directory listings", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for therapists: niche, location and telehealth pages, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a private therapy practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for therapists",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each issue and modality", text: "Anxiety, couples, trauma, EMDR — chosen by search data" },
        { _key: k("o"), iconName: "map-pin", title: "Location and telehealth pages", text: "Your office towns and the states you are licensed in" },
        { _key: k("o"), iconName: "search", title: "Your site and directory profiles in step", text: "Psychology Today, Headway and the site say the same" },
        { _key: k("o"), iconName: "shield-check", title: "Wording that respects your ethics code", text: "No promised outcomes, no client testimonials" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Plain facts an assistant can repeat about you" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in consultation requests", text: "Inquiries from search, not just rankings" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit: website, Google profile, directories", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a private therapy practice", value: "from 800 € / month", note: "niche pages, local, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a therapy practice and other sites I have optimized",
      subtitle:
        "First, a private therapy practice: Giuseppe, a psychotherapist in Milan, whose pages by area of therapy, by town and for clients abroad now appear in ChatGPT answers. The others show the rest of the search work a practice needs: local SEO and Google Maps for a Warsaw service business, a rebuild that grew organic traffic 29 times, and multilingual sites I optimize.",
      picks: [
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your therapy practice",
      subtitle: "I reply within one business day with what I would fix first on your site, Google profile and directory listings, and a fixed price.",
      contextLabel: "Practice name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice do you run?", options: ["Solo therapist or psychologist", "Group practice", "Online-only practice", "Several offices"] },
        { _key: k("z"), question: "How do most new clients find you now?", options: ["Psychology Today or other directories", "Google search and Maps", "Referrals", "Insurance panels"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for therapists, psychologists and counselors in private practice — LMFTs, LCSWs, LPCs and small group practices too: a page for each issue and modality you work with, location and telehealth pages, a Google Business Profile, directory listings that match your site, and the facts ChatGPT and Google AI Overviews rely on. I work alone, from the audit to the code, so the person who finds a problem is the person who fixes it."),

        h2("What SEO in mental health means for a private therapy practice"),
        p("SEO in mental health is the work of making a practice visible at the moment someone looks for help: “therapist for panic attacks near me”, “couples counseling Denver”, “EMDR therapist online”. These are rarely casual searches. Many people read for weeks before they write to anyone, and they choose the therapist whose pages describe their situation in words they recognize."),
        p("A therapy practice is found in four places, and SEO for therapists works on all of them:"),
        li("directories such as Psychology Today, which hold most top results for “therapist + city”"),
        li("the map results shown for “near me” searches"),
        li("your own website, for searches about one issue, approach or client group"),
        li("answers from ChatGPT, Perplexity and Google AI Overviews, which now name individual practitioners"),

        h2("Psychology Today, Headway and directories vs your own therapist website"),
        p("For a search like “therapist Austin”, page one is mostly directories: Psychology Today, GoodTherapy, Zocdoc, and marketplaces such as Headway or Alma. A good directory profile still brings inquiries, and I would not tell anyone to drop it. Its limits are plain, though: you sit in a list of twenty colleagues with the same photo size, the platform sets the rules, and the profile text is short."),
        p("Your own site wins other searches — your name, your niche in your town, questions about a modality — and it is the page assistants read when they describe you. The two work together when the directory profile links to the site and both show the same name, credentials, address and specialties. Directories also count as mentions of your practice for Google and AI tools, so a forgotten profile with an old phone number does real harm."),

        h2("Insurance panels or private pay: which searches a therapy practice targets"),
        p("Being in network changes which searches are worth winning. Clients with coverage search “therapist who takes Aetna in Chicago” or filter directories by plan; a page listing your panels, per state, answers them before they call. Private-pay practices compete on fit. Their clients search by problem and approach, ask about fees and superbills for out-of-network reimbursement, and compare what two or three therapists write about the same issue."),
        p("Group practices often have both kinds of clinicians. Then each profile states which plans that clinician takes, and the fees page explains the difference in a few plain sentences."),

        h2("Niche pages in SEO for therapists: anxiety, couples, trauma and EMDR"),
        p("Most therapist websites have one “Services” page listing fifteen issues. That page rarely ranks for any single one. People searching are specific, so the pages have to be specific too."),
        h3("Pages for issues and conditions"),
        p("Anxiety, panic attacks, depression, grief, burnout, OCD, postpartum depression. Each page says how the problem shows up in daily life, how you work with it, what the first sessions look like and how to start — without promising a result."),
        h3("Pages for therapy approaches and modalities"),
        p("EMDR, CBT, DBT, the Gottman Method, IFS, psychodynamic therapy. People search for a modality after reading about it or after a referral, and a page by someone trained in it, naming that training, answers them better than a directory line."),
        h3("Pages for client groups"),
        p("Couples, teens and their parents, LGBTQ+ clients, first responders, adults starting therapy for the first time. The same anxiety page reads differently to a parent looking for a teen therapist."),
        p("Giuseppe, a psychotherapist in Milan whose site I rebuilt, has seven pillar pages by area of therapy with 21 Italian subtopic pages under them, and 150 Italian FAQ entries reused on the pages where each question belongs. A search for one kind of anxiety lands on the page written about it."),

        h2("Local SEO for therapists: Google Business Profile and location pages"),
        p("Local SEO for therapists starts with the Google Business Profile: a primary category that matches your license (Psychologist, Psychotherapist, Counselor, Marriage & family therapist), the office address, hours, a short description of who you help and a link to the matching page on your site, not the home page. Google lists businesses that meet clients in person, so a practice that works only online usually cannot have a map listing; its location pages and directory profiles carry the local searches instead."),
        p(
          "A location page is more than a town name: how to find the office, parking or transit, which clinicians work there and whether they also see clients by video. Giuseppe has separate pages for Milan and Monza. More on map results on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),
        h3("Reviews and therapist ethics codes"),
        p("Reviews push other businesses up the map; therapists have a narrower path. Ethics codes such as those of the APA and ACA discourage asking current clients for testimonials, and a reply to any review must never confirm that the person is or was a client. Many practices let reviews come on their own and put the effort into the profile and the pages. Check what your licensing board and association allow."),

        h2("Telehealth SEO for therapists: online therapy pages and licensure across state lines"),
        p("Video sessions let a practice in one city see clients across the state, so “online therapist Texas” or “virtual couples counseling California” matters as much as the town. In the US a therapist can generally treat clients located in the states where they hold a license, and interstate compacts cover some professions. An online therapy page for each state you are licensed in — with the license, the platform and your hours in that time zone — targets those searches without implying you can see anyone anywhere. Confirm the current rules with your board."),
        p("The same logic works for languages and clients abroad. Giuseppe has a page for online therapy for Italians living outside Italy — people no map listing in Milan could reach."),

        h2("E-E-A-T for psychologists and counselors: license, training and careful wording"),
        p("Mental health content falls in what Google calls “Your Money or Your Life”, so it is judged on E-E-A-T — signs of experience, expertise, authority and trust. For a therapist those signs are concrete:"),
        li("license type, number and state on the about page and in structured data"),
        li("training in each modality you name, with the institute and the year"),
        li("an author and a review date on every clinical page and blog post"),
        li("no promised outcomes such as “in six sessions”, and no client stories presented as results"),
        p("Wording is an ethics question as much as a ranking one. Giuseppe works under Italian rules on advertising health services, which rule out promised outcomes, patient testimonials, discounts and “free consultation” offers, so every page written to be found has to stay inside it. US ethics codes are less detailed but point the same way."),

        h2("SEO keywords for therapists: blog posts that answer questions before the first session"),
        p("Keyword research for a therapy practice starts from the questions people bring to the first call: “how long does therapy for panic attacks take”, “psychologist vs therapist vs counselor”, “what happens in the first EMDR session”, “is online therapy as effective as in person”. Each answered question is a chance to be found and to be quoted by an assistant. I check real search data for your niches and area, give each phrase one page and draft the outline; you write or approve the clinical content."),
        p("An older blog is an asset. Before anything new is written, I check which posts already bring visits, merge the thin ones and link each post to the niche page it supports."),

        h2("SEO for therapists in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People now ask an assistant before they open a directory: “find a therapist in Brooklyn who does EMDR and takes Cigna” or “Italian-speaking psychotherapist online”. The work of getting into those answers goes by two names, GEO (generative engine optimization) and AEO (answer engine optimization). Assistants name practitioners they can describe with confidence from several sources, so the work is:"),
        li("issues, modalities, client groups, languages, fees, panels and locations written as plain facts"),
        li("structured data naming the practitioner, the practice, the conditions treated and the therapies offered"),
        li("the same facts on the Google profile and in every directory listing"),
        li("robots.txt rules that let AI crawlers read the pages you want quoted"),
        p(
          "Giuseppe found me through ChatGPT, and his new pages already appear in ChatGPT answers. Before I start and again afterwards, I record what assistants say about your practice. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring therapist SEO without exposing client privacy"),
        p("Results for a practice are consultation requests, not traffic. I count calls, form messages and booking clicks from search and show which pages they came from. Two cautions. Advertising pixels on contact and booking pages can pass information that, in the US, may fall under HIPAA. And for visitors from Europe, analytics should run only after consent, as it does on Giuseppe’s site. Measurement can tell you what works without sending anything about a client elsewhere; your compliance adviser has the final word."),

        h2("How much SEO for therapists costs"),
        li("SEO audit of the website, Google profile and directory listings: from 250 €, one-off, with fixes in order of impact."),
        li("One-off work — niche, location and telehealth pages, structured data, technical fixes: 250–700 €."),
        li("Monthly SEO for a therapy practice — new pages, local SEO, AI visibility and reports in inquiries: from 800 € per month; in the most competitive metros, such as New York or Los Angeles, from 1,300 € per month."),
        p(
          "For a solo therapist outside the big metros, the audit plus five or six strong niche pages is often all the work that is needed. If the site itself needs replacing, see ",
          link("therapist website design", "/website-for-psychologists-therapists"),
          "; multi-specialty practices will find ",
          link("medical SEO", "/medical-seo"),
          " more useful. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for therapists: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is SEO in mental health?", "It is the work of making a therapy practice visible when people search for help with a specific problem, approach or place: niche pages, a Google profile, directory listings that match the site, and facts AI assistants can quote. It is measured in consultation requests, not in visits."],
          ["What are the best SEO strategies for healthcare websites?", "Pages for each condition and service, written for patients and reviewed by a named clinician; accurate local listings; fast mobile pages; structured data; and forms that keep health details safe. A therapy practice adds pages by issue and modality and wording that respects its ethics code."],
          ["Is a Psychology Today profile enough, or do I need SEO for my own site?", "A good profile brings inquiries, but you share the page with many colleagues and the platform sets the rules. Your own site wins searches for your name and niche and is what assistants read. Keep both, with the same details, and link the profile to the site."],
          ["Can I ask my therapy clients for Google reviews?", "Many ethics codes, including those of the APA and ACA, discourage asking current clients for testimonials because of the pressure it can put on them. Check with your board and association. Whatever you decide, never reply to a review in a way that confirms the person is a client."],
          ["How long does SEO for a therapy practice take?", "Fixes to the Google profile and directory listings can show within weeks. A new niche page typically needs two to four months to climb, and more where many practices compete for the same city."],
          ["How much does SEO for therapists cost?", "An audit costs from 250 €, single pieces of work 250–700 €, monthly SEO from 800 € per month, and from 1,300 € in the most competitive metros. Describe the practice in a few lines and you get a fixed quote."],
          ["Can you work with a US practice from Poland?", "Yes. I work remotely from Warsaw, and my afternoon and evening overlap with US mornings, so calls are easy to schedule. Invoices are in euros. The site, the profile and the search data are all worked on online."],
          ["Do you write the text for my niche pages?", "I research the searches, plan the pages and draft them. You write or approve every clinical statement, and your name and credentials appear as the author. I do not give clinical advice."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your therapy practice: what to send me"),
        p(
          "Send the website, your Google profile and Psychology Today links, your license type and the states you practice in, the issues and modalities you want more clients for, and whether you are in network. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
