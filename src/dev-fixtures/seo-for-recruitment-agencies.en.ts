// Landing page fixture: SEO for Recruitment Agencies (EN), group
// «seo-for-recruitment-agencies». New page.
// Semantic core: ref/batch-h1.md, recruitment SEO (US): seo for recruitment
// agencies 140 (grid 390) — H1, excerpt, several H2 · recruitment agency seo
// (grid 390) — metaTitle, H2s · seo recruiters 30 (recruiter profile H2) ·
// staffing agency seo — one H2 (see intent). «social media recruitment agency»
// 20 — not targeted (social media is not part of this service).
// Intent: ref/intent-check-batch-h.md — «seo for recruitment agencies» vs
// «staffing agency seo» 1 of 10 shared URLs (kasplacement.com): the staffing
// SERP is US staffing-marketing firms (Haley Marketing, Staffing Future) →
// covered in one H2 here, no separate page. ref/intent-check-delta.md — «seo
// for recruitment agencies» vs «recruitment agency website design» 0 shared
// URLs → the build stays on /recruitment-agency-website (linked once). SERP
// for this page: RecruiterWeb, Hike SEO, Herd, Multiply Labs, Reddit →
// agency owners comparing providers (commercial).
// Angles: two audiences (candidates vs employers; client pages bring the
// fees), sector × city pages for hiring managers, Google for Jobs and
// JobPosting (validThrough, baseSalary, remote), expired vacancy URLs and
// evergreen category pages, Indeed / LinkedIn / Glassdoor as competitors and
// distribution, a Google Business Profile per office, recruiter profiles
// (E-E-A-T), salary guides from own placement data, staffing (temp, light
// industrial, healthcare), AI answers, measuring by audience, cost.
// NOT on this page: the site build — two-sided structure, job board, search
// filters, application forms, candidate registration, ATS integration
// (/recruitment-agency-website); map work in depth (/services/local-seo-services);
// paid job ads and social recruiting (not part of the service).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no invented data; no guaranteed
// rankings.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForRecruitmentAgenciesEn = {
  lang: "en",
  group: "seo-for-recruitment-agencies",
  slug: "seo-for-recruitment-agencies",
  title: "SEO for recruitment agencies",
  heading: "SEO for Recruitment Agencies",
  excerpt:
    "I do SEO for recruitment agencies and staffing firms: sector and city pages that win employer searches, job pages that show in Google for Jobs and close cleanly when a role is filled, a profile for each office, salary guides from your own placements and a place in AI answers — reported in client inquiries and applications.",
  seo: {
    metaTitle: "Recruitment Agency SEO: Clients, Jobs and AI | Bandziuk",
    metaDescription:
      "SEO for recruitment and staffing agencies: employer pages by sector and city, Google for Jobs, expired vacancies, office profiles, AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Employer and candidate searches", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["IT recruiters in Austin", "Warehouse jobs, weekly pay", "Jobs block in Google", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Recruitment agency SEO audit: employer pages, job markup, expired vacancies, office profiles and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a recruitment agency: sector and city pages, JobPosting fixes, recruiter profiles, tracking", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a recruitment or staffing agency", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for recruitment agencies",
      items: [
        { _key: k("o"), iconName: "users", title: "Pages that win employer searches", text: "Sector and city pages written for hiring managers" },
        { _key: k("o"), iconName: "code", title: "Jobs that show in Google for Jobs", text: "JobPosting data with salary, location and closing date" },
        { _key: k("o"), iconName: "layers", title: "Closed vacancies handled by rule", text: "No dead “Apply now” pages, evergreen roles kept" },
        { _key: k("o"), iconName: "file-text", title: "Salary guides from your placements", text: "Your own figures, the content others link to" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "When employers ask which agency to call" },
        { _key: k("o"), iconName: "trending-up", title: "Reports split by audience", text: "Client inquiries and applications counted apart" },
      ],
      prices: [
        { _key: k("r"), label: "Recruitment agency SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a recruitment agency", value: "from 800 € / month", note: "employer pages, jobs, offices, AI, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: two-audience, B2B and listing websites I have built and optimized",
      subtitle:
        "An education agency’s site that speaks to two audiences at once and grew from one country to ten — the same page-per-market structure an agency needs for sectors and cities. ScanM2, a 3D laser scanning and BIM company, had no leads for two years; after the rebuild its organic traffic grew 29× and B2B inquiries arrive every week, which is what employer pages should do for you. A Cyprus property platform with about 375 developments updated daily from feeds, where every old URL got a 301 after a migration — listings that appear and disappear, like vacancies — with no bought links and about 10% of organic visits from AI assistants. A Warsaw auto repair shop where I did local SEO and the Google Maps listing, and a retail analytics consultant’s site with 153 pages of B2B expertise in three languages, built to be quoted by AI assistants.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "auto-repair-seo-and-ux-boost",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your recruitment agency",
      subtitle: "Within one business day you get the sectors, offices and job-page fixes I would start with, and a fixed price.",
      contextLabel: "Agency name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What should search bring you more of?", options: ["Employer clients", "Candidates for open roles", "Both", "Temp and shift workers"] },
        { _key: k("z"), question: "What does your agency place?", options: ["Permanent and executive roles", "Contract and temp staff", "IT and tech specialists", "Healthcare or light industrial staff"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for recruitment agencies is the work that brings two kinds of people to your site from Google and AI assistants: employers looking for an agency to fill a role, and candidates looking for that role. I do it myself, as an independent SEO consultant and web developer, for recruitment agencies, executive search firms and staffing companies, so the person who reads your search data is the one who writes the sector pages and fixes the job markup."),

        h2("What SEO for recruitment agencies covers: candidate searches and employer searches"),
        p("A recruitment agency is searched for from both sides of the hire. Candidates type “accounting jobs in Denver”, “remote Java developer jobs” or “staffing agencies hiring near me”. Employers type “IT recruitment agency Chicago”, “executive search firm for healthcare” or “temp agency for warehouse staff”. The two groups use different words, land on different pages and are worth different amounts to you:"),
        li("the candidate side: job pages, Google for Jobs, permanent job category pages and advice for job seekers"),
        li("the employer side: sector and city pages, recruiter profiles, salary guides and placement stories"),
        li("the map: a Google Business Profile for each office, with reviews from candidates and clients"),
        li("answers in ChatGPT, Perplexity and Google AI Overviews"),
        p("Candidates bring volume; employers bring the fees. On many agency sites the job board gets all the attention and the employer gets one “Hire talent” page. I usually start on the employer side and keep the candidate side technically clean."),

        h2("Employer-side recruitment agency SEO: sector and city pages for hiring managers"),
        p("A hiring manager with an open role looks for a specialist: “accounting and finance recruiters Dallas”, “construction recruitment agency Phoenix”, “cybersecurity headhunters”. A page that ranks for such a search answers what that person wants to know before picking up the phone:"),
        li("the roles you fill in that sector and the seniority levels you cover"),
        li("salary ranges and typical time to fill, taken from your own placements"),
        li("how you work — contingent, retained or contract — and what the fee depends on, in general terms"),
        li("the recruiter who runs the desk, with a photo and a direct line"),
        li("short placement stories, with the client’s permission or without names"),
        h3("How many sector and city pages a recruitment agency needs"),
        p("One for each pair you can back with a real desk and real placements. An accounting team covering Dallas and Houston means two pages. Fifty city pages that differ only in the city name fall under Google’s rules on doorway pages and get filtered, and they tell a hiring manager that nobody local wrote them. Start with the sectors that bring the highest fees and add a city once you have a recruiter and placements there."),

        h2("Google for Jobs and JobPosting structured data on recruitment agency job pages"),
        p("For many job searches Google shows its own jobs block above the regular results. A listing gets into it through JobPosting structured data on the job page, and agencies lose this traffic mostly through small errors in that data:"),
        li("the title is a real job title, without “URGENT”, reference codes or pay in it"),
        li("datePosted and validThrough come from your ATS, so closing dates are true"),
        li("baseSalary carries a real range and unit — hourly for temp roles, yearly for permanent ones"),
        li("jobLocation has a full address, and remote roles are marked as such, with the states or countries candidates may work from"),
        li("hiringOrganization is filled the same way on every job, confidential searches included"),
        p("Job pages usually come from an ATS plugin or a feed, so I check what Google receives in the Search Console job posting report and fix the template once. Google’s Indexing API, accepted for job pages, then reports new and removed jobs without waiting for a crawl."),

        h2("Expired job postings: what to do with vacancy URLs after a role is filled"),
        p("Every closed job leaves a URL behind. Left alone, those pages still say “Apply now” for a role filled in March, still carry markup and send candidates to a dead end. I set up one rule for the whole site:"),
        li("the JobPosting markup goes, or validThrough moves into the past, the day the role closes"),
        li("the page either returns 404 or 410, or stays live with “this position has been filled” and links to similar open roles"),
        li("the URL leaves the sitemap and the Indexing API gets a removal notice"),
        li("roles you hire for again and again — forklift operators in Columbus, registered nurses in Tampa — get a permanent category page that lists current openings and keeps its links between hires"),

        h2("Indeed, LinkedIn and Glassdoor in recruitment agency SEO: competitors and distribution"),
        p("For broad searches like “jobs in Houston” or “marketing jobs”, Indeed, LinkedIn, Glassdoor and ZipRecruiter will stay above any agency site. An agency wins where it knows more than a board — a narrow specialism, a city, a type of contract — and in every search an employer makes. Boards remain a distribution channel, and the two work together when:"),
        li("a job goes live on your site first, with fuller text than the board version"),
        li("your LinkedIn company page and Glassdoor profile carry the same sectors, offices and details as the site, because candidates and AI assistants read them when they check you"),
        li("reviews on Glassdoor and Indeed get the same calm answers as reviews on Google"),

        h2("Local SEO for recruitment agencies: a Google Business Profile for each office"),
        p("Searches such as “staffing agency near me” or “recruitment agency in Columbus” are answered by the map, and they come both from candidates who want to walk in and from local employers. Each staffed office gets its own profile:"),
        li("the primary category that matches the office — Employment agency, Temp agency, Executive search firm or Recruiter"),
        li("the office’s own page on the site as the profile link, with its sectors and its team"),
        li("hours for walk-in registration where you offer it"),
        li("reviews requested from placed candidates and from clients, each answered without personal details"),
        p(
          "Categories, listings and review work in more depth are on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Recruiter profile pages: SEO for recruiters and the expertise behind the agency"),
        p("Clients hire a recruiter, not a logo. A profile page for each consultant ranks for that person’s name and shows Google and AI assistants the experience behind your content — what Google calls E-E-A-T. Each profile carries:"),
        li("the sectors, seniority levels and locations the recruiter covers, and years in the field"),
        li("a LinkedIn link and Person structured data that ties the two together"),
        li("articles and salary commentary signed with their name"),
        li("a plan for when someone leaves: the page is redirected to the desk or sector page, never simply deleted"),

        h2("Salary guides and hiring market reports built on your own placement data"),
        p("A salary guide is the content that earns links for a recruitment agency: HR blogs, local business press and job seekers cite it, and AI assistants quote it when someone asks what a role pays in a city. It works only when the numbers are yours — accepted offers, agreed rates, time to hire — with the method, the number of placements behind each figure and the period stated next to the table. Where the sample for a role is too small, the role is left out. Each guide keeps one permanent page, refreshed every year or quarter, with a one-sentence summary on top that a journalist or an assistant can repeat."),

        h2("Staffing agency SEO: temp, light industrial and healthcare staffing"),
        p("US staffing firms are searched for differently from permanent recruiters. Volume roles, many branches and shift work change the job:"),
        li("candidate searches carry pay and urgency — “warehouse jobs hiring immediately”, “weekly pay jobs near me”, “night shift CNA jobs” — so pay rate, shift and start date go into the first lines of the job page and into the markup"),
        li("branch pages matter more than sector pages: one per branch, with its open roles, hours and directions"),
        li("employer pages answer “light industrial staffing [city]”, “temp to hire agency” or “healthcare staffing agency” with service levels, onboarding and safety written as text"),
        li("in healthcare staffing, license and credential requirements are described per role and state in general terms and checked by your compliance team"),

        h2("Recruitment agency SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Hiring managers now ask ChatGPT or Perplexity “which recruitment agencies in Boston specialize in biotech” or “retained or contingent search for a CFO”, and candidates ask “are staffing agencies worth it for nurses in Texas”. The assistant names a few agencies and gives its reasons. Getting into those lists is what generative engine optimization (GEO), also called answer engine optimization (AEO), is about. For a recruitment agency it involves:"),
        li("sectors, cities, fee models and the roles you fill written as plain sentences on sector and office pages"),
        li("recruiter profiles and salary guides with named authors and dates"),
        li("the same agency details on the site, Google Business Profile, LinkedIn, Glassdoor and industry directories"),
        li("Organization, EmploymentAgency and Person structured data linked to one another"),
        p(
          "Before the work and a few months into it, I record which agencies the assistants name for your sectors and cities. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring recruitment agency SEO in client inquiries and applications"),
        p("A report that mixes both audiences hides the result, so in GA4 each conversion is labeled by audience: applications and CV uploads by job, sector and office on one side; client inquiries, “submit a vacancy” forms and calls to the business line on the other. If your ATS or recruitment CRM records the source, we follow clients who found you through search on to jobs registered and placements made. Rankings sit next to these numbers as a means, not as the result. First results usually show after about a month and a half, and steady growth takes three to six months."),

        h2("How much SEO for a recruitment agency costs"),
        li("Recruitment agency SEO audit — employer pages, job markup, expired vacancies, office profiles, competitors and AI answers: from 250 €, one-off."),
        li("One-off work — sector and city pages, JobPosting template fixes, recruiter profiles, a salary guide page, tracking by audience: 250–700 €."),
        li("Monthly SEO for a recruitment or staffing agency — new employer pages, job-page upkeep, offices, AI visibility and reports: from 800 € per month; for agencies competing in big cities such as New York, Chicago or London from 1,300 € per month."),
        p(
          "If the site itself needs rebuilding — job board, application flow, candidate registration — that is described on the ",
          link("recruitment agency website", "/recruitment-agency-website"),
          " page. How monthly work runs is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, the audit on the ",
          link("SEO audit", "/services/seo-audit"),
          " page, and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for recruitment agencies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a recruitment agency?", "The audit starts at 250 €, separate tasks cost 250–700 €, and monthly SEO starts at 800 €, or 1,300 € for agencies competing in big cities. Describe your sectors, offices and current sources of clients, and you get a fixed price in reply."],
          ["Should a recruitment agency do SEO for candidates or for clients?", "Both, but not equally. Candidate traffic is large and comes partly through Google for Jobs once the job markup is right. Employer searches are fewer and bring the fees, so most of the new pages I write are for hiring managers."],
          ["How do our jobs get into Google for Jobs?", "Through JobPosting structured data on each job page, with a real title, location or remote status, salary range, posting date and closing date. If your jobs come from an ATS plugin, the template is fixed once and every job benefits."],
          ["What should we do with a job page when the role is filled?", "Remove the markup or set the closing date in the past the same day, then either let the page return 404 or 410 or keep it with a “position filled” note and links to similar roles. Roles you fill repeatedly deserve a permanent category page instead."],
          ["Can a recruitment agency site outrank Indeed and LinkedIn?", "For “jobs in [city]”, rarely. For a specialism plus a place — “SAP consultants Atlanta”, “dental nurse jobs Austin” — and for every employer search, yes, because the boards have no page that answers those questions as well as you can."],
          ["How long does SEO take for a recruitment agency?", "Fixes to job markup and office profiles often show within weeks. First results from new pages usually come after about a month and a half, and steady growth takes three to six months, depending on the city and sector."],
          ["Can ChatGPT recommend a recruitment agency?", "It can, when asked directly. It names agencies whose sectors, cities and reviews it can confirm across the site, LinkedIn, Glassdoor and the map. No one can guarantee a mention; I compare the answers before and after the work."],
          ["Can you do SEO for a US recruitment or staffing agency from Poland?", "Yes. The work needs no visit: search data, your site, profiles and the ATS feed are all reachable remotely, and we talk in English during my Warsaw afternoon or evening, which is your morning or midday. Invoices are in EUR or another currency by agreement, and the first call of 15–30 minutes is free."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your recruitment agency: what to send me"),
        p(
          "Send your website, the sectors and cities you want more clients in, your office addresses, how jobs reach the site — ATS plugin, feed or manual posting — and whether you place permanent, contract or temp staff. Within one business day you get my first priorities and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
