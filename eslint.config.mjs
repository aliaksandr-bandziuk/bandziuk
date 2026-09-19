// ESLint 9 flat config. `next lint` was removed in Next 16; run `npm run lint`.
// Same ruleset as the old .eslintrc.json ("next/core-web-vitals").
import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...coreWebVitals,
  {
    // eslint-plugin-react-hooks 7 added React Compiler rules that Next 14's
    // config did not have. They flag working patterns here (a "mounted" flag
    // set in an effect, Swiper navigation refs, window.location assignment).
    // Warnings, not errors, until those components are refactored on purpose.
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/static-components": "warn",
    },
  },
  {
    // `next lint` only looked at src/; keep one-off scripts and notes out.
    ignores: [".next/**", "node_modules/**", "scripts/**", "research/**", "drafts/**", "public/**", "next-env.d.ts"],
  },
];

export default config;
