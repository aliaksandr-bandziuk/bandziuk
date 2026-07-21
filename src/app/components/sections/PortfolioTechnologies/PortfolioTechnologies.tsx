import React from "react";
import styles from "./PortfolioTechnologies.module.scss";
import { Technology } from "@/types/portfolio";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
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
// every locale. Anything not listed here falls back to the document's own
// inline SVG (tech.svg) exactly as before — nothing breaks for an unmapped
// technology.
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
        <div className={styles.technologiesList}>
          {technologies.map((tech) => {
            const BrandIcon = BRAND_ICONS[tech.title];
            return (
              <div key={tech._id} className={styles.technologyItem}>
                {BrandIcon ? (
                  <div className={styles.technologyIconBrand}>
                    <BrandIcon size={64} />
                  </div>
                ) : (
                  <div
                    className={styles.technologyIcon}
                    dangerouslySetInnerHTML={{ __html: tech.svg }}
                  />
                )}
                <p className={styles.technologyTitle}>{tech.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTechnologies;
