// Landing page fixture: Cafe website design (EN), group «cafe-website-design».
// New page, EN only. Design page (how the site looks); what the site does
// lives on /cafe-website (sibling, linked).
// Semantic core: ref/food-venues.md (US): cafe website design 480, cafe website
// designs 480, coffee shop website design 480, website design cafe 390, coffee
// shop website designs 390 (H1, metaTitle, several H2, cost H2, FAQ) · cafe
// website templates 320, website cafe template 320, cafe template website 320
// (templates H2) · related: cafe website examples, best coffee shop website
// (examples H2).
// Intent: ref/intent-check-food.md — «cafe website design» vs «cafe website»
// 1 of 10 shared URLs (YouTube) → separate pages. Design SERP: Colorlib,
// Reddit, BrandCrowd, FreshySites, Figma community files, Pinterest, One Page
// Love → owners collecting looks and weighing templates → H2 on Dribbble/Figma
// concepts vs a real menu, examples H2, templates H2.
// Angles: brand taken from cups, bags and the sign; phone-first first screen
// and art-directed crop; photography shot list (drinks from the side and from
// above, bar in action, room empty and full, one color grade); menu grid with
// sizes as columns and add-ons on one line; seasonal looks from the CMS;
// concepts vs real content; what good cafe sites share; templates vs custom;
// design choices that keep text readable for AI; cost (design included).
// NOT on this page (no paragraph, thesis or FAQ shared): menu as data, hours
// and holiday hours, directions, pickup ordering, delivery apps, beans shop,
// events, Instagram, speed, builder vs custom (/cafe-website); SEO and maps
// (/cafe-seo, linked once); restaurant design (/restaurant-website-design,
// linked once — its theses on first five seconds, PDF menus, 8–12 photos,
// WCAG and autoplay are not repeated).
// Portfolio: renovation (premium design), Sasha Dith (heavy media, fast),
// Giuseppe (calm custom design), ScanM2 (design kept in a rebuild), Landi Room
// (landing that sells). Restaurants under NDA mentioned once, positively.
// Owner’s rules: every page covers AI search; design is included in the site
// price; never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const cafeWebsiteDesignEn = {
  lang: "en",
  group: "cafe-website-design",
  slug: "cafe-website-design",
  title: "Cafe website design",
  heading: "Cafe Website Design",
  excerpt:
    "I design cafe websites that look like the cafe itself: colors and marks taken from your cups and sign, photos of drinks and the room planned for the screen, a menu layout that reads at a glance and a first screen designed for the phone. Design is included in the price of the site.",
  seo: {
    metaTitle: "Coffee Shop Website Design: Brand, Photos, Menu | Bandziuk",
    metaDescription:
      "Cafe website design: your brand from cup to screen, drink and room photos, a menu that reads at a glance, a phone-first look. Included in the site, from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design included in the site", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Your cup, your colors", "This season’s drink", "Menu at a glance", "One photo, one mood"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple cafe website with custom design", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Cafe website with custom design, menu layout, seasonal looks, ordering, shop and events", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with cafe website design",
      items: [
        { _key: k("o"), iconName: "layers", title: "Your brand from cup to screen", text: "Colors, type and marks you already use" },
        { _key: k("o"), iconName: "image", title: "Photography planned for the layout", text: "A shot list for drinks, pastries, bar and room" },
        { _key: k("o"), iconName: "file-text", title: "A menu layout that reads at a glance", text: "Sizes in columns, add-ons on one line" },
        { _key: k("o"), iconName: "phone", title: "A first screen designed for the phone", text: "Vertical crop, one line in your voice, two buttons" },
        { _key: k("o"), iconName: "sparkles", title: "Seasonal looks without a redesign", text: "Accent color, photo and banner set from the CMS" },
        { _key: k("o"), iconName: "gauge", title: "Rich photos, light pages", text: "Images sized per screen, no loading animation" },
      ],
      prices: [
        { _key: k("r"), label: "Simple cafe website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Design, ordering, shop, events, seasonal looks", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: sites I have designed and built",
      subtitle:
        "What these sites share with a cafe site is design that carries a feeling and still loads fast. A Warsaw renovation and property-investment company got a premium design in which large photos of finished interiors do the selling, as the room and the drinks do for a cafe. The site of DJ and producer Sasha Dith, built on Next.js, holds a video gallery and a booking form and loads in under one second. A psychotherapist in Milan got a calm custom design on Next.js and Sanity. For ScanM2, a 3D laser scanning company, I rebuilt the site on WordPress and kept the design its clients already knew. Landi Room, a Warsaw beauty salon, sells an online course from a landing page with Stripe Checkout. I have built websites for restaurants whose owners asked me not to show them publicly.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "official-website-for-dj-and-producer-sasha-dith",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "e-commerce-landing-page-with-secured-video-access",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your cafe website design",
      subtitle: "Within one business day you get a proposed page list for your cafe, the photos the design will need and a fixed price for the whole site.",
      contextLabel: "Cafe name, Instagram or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have for your brand?", options: ["A logo and printed cups", "A full brand guide", "A template look we want to replace", "Nothing yet, we are opening"] },
        { _key: k("z"), question: "What photos do you have?", options: ["None yet", "Phone photos from Instagram", "A professional shoot", "A mix of both"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Cafe website design is part of every cafe site I build: I design the look and develop the site myself, and the design is included in the price of the website, not billed as a separate project. The design has one task. A guest who has never been to your cafe should know from the screen what it feels like to sit there — bright and quick, slow and cozy, a roaster with a long bar, a brunch place with a line on Sundays — and every choice below serves that impression on a small screen."),

        h2("Cafe branding on the website: taken from your cups, bags and sign"),
        p("A cafe has a brand even without a brand guide. It is printed on the takeaway cup, stamped on the bean bags, painted on the window and chalked on the board. The cup matters most: it is the object guests photograph and post, so the website takes its colors and marks from it first."),
        li("the palette comes from the cup, the bags and the room — often one strong color and two quiet ones"),
        li("the logo stamp becomes the icon in the browser tab and a small mark in the corner of sections"),
        li("a hand-lettered or display font, if the board uses one, appears in a few headings only; the menu and body text use a plain typeface that reads well in daylight"),
        li("patterns or illustrations from your packaging frame sections, never sitting behind text"),
        p("If you are still opening and have no brand yet, the design works from what you chose for the room — wood, tiles, the color of the espresso machine — and stays simple enough to adapt when the logo arrives."),

        h2("Coffee shop website design on a phone: the first screen and the vertical crop"),
        p("A desktop hero photo is wide; a phone screen is tall. A panorama of the room that looks good on a laptop becomes a slice of countertop on a phone. So the first screen is designed for the phone first, with a photo chosen for each shape: a vertical image for phones — the 4:5 format you already shoot for Instagram — and a wider one for desktop, each cropped so the cup, the bar or the window stays in frame."),
        p("Over the photo sits only what helps a guest decide: the name, one line in your own voice, such as “small-batch roaster, brunch until 3”, and two buttons. Everything else — the story, the team, the beans — starts one scroll down, where it gets the attention it deserves."),

        h2("Photography for a cafe website: drinks, pastries, the bar and the room"),
        p("The same stock photos of beans and latte art appear on thousands of cafe sites, and guests recognize them. A cafe is easier to photograph than most businesses: one morning before opening usually covers it, working from a list of shots I write for the layout:"),
        li("signature drinks shot from above for latte art and from the side for iced and layered drinks, where the layers show"),
        li("the pastry case and two or three plated items in window light"),
        li("the bar in action: hands on the portafilter, milk being poured, beans going into the grinder"),
        li("the room empty, for its shape and light, and the room with guests, for its mood"),
        li("details that carry the brand: the cup, the bag, the sign, a corner of the tiles"),
        p("Every photo then gets the same color grade — warmth, contrast, brightness — so the site reads as one cafe and not as a stack of posts from different years."),

        h2("Cafe menu layout: sizes, milk options and prices that read at a glance"),
        p("A cafe menu is a grid more than a list, and the layout follows how a guest reads it while waiting in line:"),
        li("drink names on the left and sizes as columns — small, medium, large or 8, 12 and 16 oz — with prices in the grid, so a guest compares at a glance"),
        li("milk alternatives, extra shots and syrups printed once, on a single line under each group, instead of after every drink"),
        li("dietary labels — vegan, gluten-free, contains nuts — as small tags explained once at the top"),
        li("seasonal drinks set apart with their own color and photo, so they read as news rather than another line"),
        p("On a phone the size columns fold into a compact row under each drink rather than a table that scrolls sideways. The menu page borrows the look of your printed menu or board, so the screen and the counter feel like the same place."),

        h2("Seasonal drinks and launches in a cafe website design"),
        p("Cafes change with the seasons more than most businesses: a fall menu, summer cold brew, a holiday drink, a guest roaster for a month. The design plans for it. Each season can have its own accent color, a hero photo and a short banner, all set from the CMS with a start and end date, while the layout, the fonts and the menu structure stay the same. The site looks fresh four times a year without a redesign, and last season’s drink leaves the screen on the date you chose."),

        h2("Cafe website designs on Dribbble and Figma, and a design built on your real menu"),
        p("Search for cafe website designs and you find striking concepts on Dribbble, Behance and in Figma community files. Most were made for a designer’s portfolio: four drinks on the menu, perfect photos, no hours, no allergens, no holiday notice and no order button. They are useful for collecting what you like — a color, a type pairing, the way a photo is cropped. A design for your cafe starts from the other end: your real menu with every size and add-on, your photos and the buttons guests use. I lay these out on a phone screen first, so the look is tested against the content it has to carry."),

        h2("Cafe website examples: what the best coffee shop websites have in common"),
        p("Looking through galleries of cafe and coffee shop websites, the ones that work for guests share a few design choices:"),
        li("one strong photo on the first screen, not a slider that changes before anyone reads it"),
        li("copy that sounds like the person behind the bar, not like a template"),
        li("the menu one tap away from every page"),
        li("one color grade across all photos, so the site feels like one place"),
        li("plenty of white space, so the drinks and the room bring the color"),
        li("nothing standing between the guest and the first screen: no loading animation, no newsletter pop-up on arrival"),

        h2("Cafe website templates or a custom cafe website design"),
        p("Cafe website templates are designed around their demo photos: warm, perfectly lit, all in one palette. Swap in your own photos and the template often stops looking like its preview, because its colors and spacing were tuned to images you do not have. Templates also expect a short menu with one price per item, so sizes and add-ons get squeezed into descriptions. A template is a fair choice if you like it as it is and your menu fits it. A custom design is built around your photos, your colors and your real menu, so what you approve in the design is what guests see, and its cost is part of the website price."),

        h2("A cafe website design that ChatGPT and Google AI Overviews can read"),
        p("Design choices decide what search engines and AI assistants can read. A menu exported from Canva as an image, opening hours inside a photo of the door sign or a seasonal drink announced only in a banner graphic are invisible to them. In my designs, everything that looks like a graphic but carries information is styled text: the menu, the hours, seasonal names and prices. Photos get descriptive alt text — “oat flat white with a rosetta on the window counter” — which serves screen readers and image search alike. That is how a guest who asks ChatGPT or Google’s AI Overviews for a cafe with a certain drink or atmosphere can be pointed to yours."),
        p(
          "The ongoing work on AI answers is on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page, and getting found in Google and on the map is on the ",
          link("cafe SEO", "/cafe-seo"),
          " page.",
        ),

        h2("How much cafe website design costs"),
        p("There is no design invoice on its own: the look, the page layouts and the working site are one job with one price."),
        li("A simple cafe website with a custom design for the home page, menu, hours and location: 700–1,400 €."),
        li("A cafe website with custom design, seasonal looks, ordering, a bean shop and events: from 2,000 €."),
        p(
          "What the site does — pickup ordering, holiday hours, delivery apps, a bean shop, private hire — is described on the ",
          link("cafe website", "/cafe-website"),
          " page. For a venue with table service see ",
          link("restaurant website design", "/restaurant-website-design"),
          "; the build process is on the ",
          link("website development", "/services/website-development"),
          " page and all prices on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Cafe website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does cafe website design cost?", "Design is included in the price of the site: 700–1,400 € for a simple cafe website, from 2,000 € with seasonal looks, ordering, a shop and events. There is no separate design fee; I give a fixed price after seeing your menu, brand and photos."],
          ["Can you work with our existing logo, cups and brand guide?", "Yes. The site takes its colors, fonts and marks from what you already use. If you have a brand guide, the design follows it; if you have a logo and printed cups, I build the palette from those."],
          ["Are phone photos good enough for a cafe website?", "For drinks, pastries and details, often yes, if they are shot in daylight against a calm background and graded the same way. The first-screen photo and wide shots of the room gain the most from a photographer. You get a shot list either way."],
          ["Will the design match our online ordering and loyalty pages?", "Hosted ordering and loyalty pages from POS providers usually let you set a logo and colors, and I set them to match the site. Their layout stays the provider’s, so the same button style and wording lead guests from the site into ordering without a jolt."],
          ["Can we change the seasonal look ourselves?", "Yes. Each season’s accent color, hero photo and banner are set in the CMS with a start and end date. The layout and the menu structure stay fixed, so nothing breaks."],
          ["Can you redesign our cafe website without losing its place in Google?", "Yes. The new design keeps the existing page addresses where it can; where an address changes, it gets a 301 redirect to the new page, and structured data carries over."],
          ["How do we review the design if you work from Poland?", "You get a link to the design on a phone and a desktop and leave comments on it; we talk it through on a video call in English. Warsaw afternoons and evenings fall in US mornings. I invoice in EUR, or in another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order cafe website design: what to send me"),
        p(
          "Send photos of your cup, bags, sign and room, your logo files or brand guide if you have one, your current menu, the photos you already own and two or three cafe websites you like. You get back a proposed page list and one fixed price that covers design and build. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
