import React from "react";
import styles from "./PortfolioTechnologies.module.scss";
import { Technology } from "@/types/portfolio";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Icon from "../../ui/Icon/Icon";
import {
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiJavascript,
  SiReact,
  SiWordpress,
  SiWoocommerce,
  SiFigma,
  SiTailwindcss,
  SiAdobephotoshop,
  SiPhp,
  SiGoogleanalytics,
  SiSwiper,
} from "react-icons/si";
import type { IconType } from "react-icons";

type Props = {
  lang: string;
  technologies: Technology[];
};

// Curated, static — matched against the technology document's own `title`
// field. These brand names aren't translated (unlike concept entries such
// as "Web Accessibility"/"API Integration"), so one key per brand covers
// every locale. Anything not listed here falls through to CONCEPT_ICONS,
// then to a text-only chip — the raw Sanity SVG is never rendered.
const BRAND_ICONS: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Git: SiGit,
  JavaScript: SiJavascript,
  "React.js": SiReact,
  WordPress: SiWordpress,
  WooCommerce: SiWoocommerce,
  Figma: SiFigma,
  Tailwind: SiTailwindcss,
  Photoshop: SiAdobephotoshop,
  PHP: SiPhp,
  "Google Analytics": SiGoogleanalytics,
  Swiper: SiSwiper,
};

// Concept technologies (not brands) are separate Sanity documents per
// locale, so each has its own title string in en/pl/ru. Maps to the
// curated Lucide names in the shared Icon component.
const CONCEPT_ICONS: Record<string, string> = {
  SEO: "search",
  "API Integration": "plug",
  "API Интеграция": "plug",
  "Integracja API": "plug",
  "Hosting & Deployment": "server",
  "Hosting i wdrażanie": "server",
  "Хостинг и деплой": "server",
  "Web Accessibility": "accessibility",
  "Web Dostępność": "accessibility",
  "Web Доступность": "accessibility",
};

const PortfolioTechnologies: React.FC<Props> = ({ lang, technologies }) => {
  return (
    <section className={styles.technologies}>
      <div className="container">
        <SectionHeading
          align="center"
          className={styles.title}
          title={
            lang === "en"
              ? "Technologies Used"
              : lang === "ru"
                ? "Используемые технологии"
                : lang === "pl"
                  ? "Użyte technologie"
                  : "Technologies Used"
          }
        />
        <div className={styles.chips}>
          {technologies.map((tech) => {
            const BrandIcon = BRAND_ICONS[tech.title];
            const conceptIconName = CONCEPT_ICONS[tech.title];
            return (
              <div key={tech._id} className={styles.chip}>
                {BrandIcon ? (
                  <span className={styles.chipIcon}>
                    <BrandIcon size={18} />
                  </span>
                ) : conceptIconName ? (
                  <span className={styles.chipIcon}>
                    <Icon name={conceptIconName} size={18} />
                  </span>
                ) : null}
                <span className={styles.chipLabel}>{tech.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTechnologies;
