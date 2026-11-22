// Section add-on for the Sanity page /services/fix-ai-misinformation (EN).
// See sections/ai-visibility-audit-platforms.en.ts for what these files are.
//
// Why (22.11.2026). Search Console, 28 days: this page already takes positions
// 4-11 on prompt-shaped queries from the United Kingdom — «chatgpt is
// describing one of our senior partners with the wrong practice focus…» 7.4,
// «what agency helps fix incorrect brand descriptions in ai answers?» 8.7,
// «agencies that can fix inaccurate information about my company in ai
// chatbot» 4.0 — and it carries no outgoing link in its body at all. The
// audit page it should feed sits at 38.1 on «ai visibility audit» with 211
// impressions. The page's own FAQ answers «Do I need the audit first?» and
// step 01 mentions an audit, neither of them linked.
import { p, h2, link } from "../pt";

export const fixAiMisinformationAuditFirstEn = {
  lang: "en",
  slug: "fix-ai-misinformation",
  contentBlocks: [
    {
      _type: "textContent",
      layout: "guide",
      content: [
        h2("Running the audit before the correction: when it is worth it and when it is not"),
        p("Correcting directly, with no audit, makes sense when you already know exactly what is wrong and where it came from: one claim, one visible source, one market. Measuring first would tell you what you can already see, and the money is better spent on the fix."),
        p(
          "The case for measuring first is a different situation: you know an answer was wrong, but not how widely, not on which platforms, and not in which languages. An ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          " covers that ground before anything is committed — which claims appear where, which sources produce them, and which of them are reachable at all. It is cheaper to find out that half the problem sits in training data before paying to correct it than after.",
        ),
        p("There is a second reason, and it outlasts the first. A correction is judged by comparing the answers afterwards with the answers before, prompt by prompt. Without a recorded baseline there is nothing to compare against, and the result can only be reported as an impression that things look better now — which is exactly the kind of claim this work exists to replace."),
      ],
    },
  ],
};
