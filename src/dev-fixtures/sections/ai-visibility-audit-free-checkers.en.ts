// Section add-on for the Sanity page /services/ai-visibility-audit (EN).
// See ai-visibility-audit-platforms.en.ts for what these files are.
//
// Why (22.11.2026). On the live UK SERP for «ai visibility audit» three of the
// seven results offer the audit free: upp.ai «Get your free AI visibility
// audit», firecrawl.dev «Free AI Visibility Audit (AEO + GEO)», and others
// lead with a free check. The page answers neither the objection nor the
// comparison, and the price (from €250, already in the page FAQ) appears
// nowhere in the body text.
import { p, h2, li } from "../pt";

export const aiVisibilityAuditFreeCheckersEn = {
  lang: "en",
  slug: "ai-visibility-audit",
  contentBlocks: [
    {
      _type: "textContent",
      layout: "guide",
      content: [
        h2("Free AI visibility checkers and what a paid audit does instead"),
        p("Several tools will score your brand's AI visibility in a minute at no cost. Run one — it costs you the minute. What it returns is a number and a short list of generic prompts, produced once."),
        p("An audit differs in four ways, and each is a reason the free number is hard to spend money against:"),
        li("the prompts are your buyers' wording, written out of a conversation about your market rather than a template built for everyone;"),
        li("the run covers every language and country that matters to you, separately, because a company is often described correctly in one and wrongly in another;"),
        li("the set is frozen, so next month's run is comparable with this one — a score that cannot be repeated measures nothing;"),
        li("every wrong claim is traced back to the page or profile that produced it and marked as correctable or not."),
        p("A free checker tells you something is wrong. The audit tells you where it came from, whether it can be changed, and what to do first. It starts at €250, and the consultation before it is free — if the answer there is that you do not need the audit yet, that is what I will say."),
      ],
    },
  ],
};
