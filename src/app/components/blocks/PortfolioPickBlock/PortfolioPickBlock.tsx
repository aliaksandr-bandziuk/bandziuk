import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./PortfolioPickBlock.module.scss";
import PortfolioSlider from "./PortfolioSlider";
import { urlFor } from "@/sanity/sanity.client";
import { PortfolioPickBlock as PortfolioPickBlockType } from "@/types/blog";
import { Portfolio } from "@/types/portfolio";

type Props = {
  block: PortfolioPickBlockType;
  lang: string;
};

type Project = Portfolio & { cardTags?: string[] };

// Same slug fallback as PortfolioItem: current language → the document's own
// language → any slug it has.
function slugOf(project: Project, lang: string): string {
  const slug = project.slug as Record<string, { current?: string } | undefined> | undefined;
  return (
    slug?.[lang]?.current ??
    slug?.[project.language as string]?.current ??
    Object.values(slug ?? {})[0]?.current ??
    ""
  );
}

// Projects picked by hand for one landing page (variant A, 2026-10), as a
// slider. Card tags come from the project itself: its `cardTags` (first one
// highlighted, meant for a number), else the titles of its services — so the
// same project reads the same on every landing page it appears on.
const PortfolioPickBlock: FC<Props> = ({ block, lang }) => {
  const projects = (block.items ?? []).filter(Boolean) as Project[];
  if (!projects.length) return null;

  const base = lang === "en" ? "/portfolio" : `/${lang}/portfolio`;

  return (
    <section className={styles.portfolioPick}>
      <div className="container">
        <PortfolioSlider
          lang={lang}
          count={projects.length}
          header={
            <div className={styles.head}>
              {block.eyebrow && <div className={styles.eyebrow}>{block.eyebrow}</div>}
              <h2 className={styles.title}>{block.title}</h2>
              {block.subtitle && <p className={styles.subtitle}>{block.subtitle}</p>}
            </div>
          }
        >
          {projects.map((p) => {
            const own = (p.cardTags ?? []).filter(Boolean).slice(0, 3);
            const tags = own.length ? own : (p.keyFeatures?.services ?? []).map((s) => s.title).filter(Boolean).slice(0, 2);
            return (
              <li key={p._id} className={styles.cell}>
                <Link href={`${base}/${slugOf(p, lang)}`} className={styles.card}>
                  <div className={styles.frame}>
                    {p.previewImage && (
                      <Image
                        src={urlFor(p.previewImage).width(720).url()}
                        alt={p.title}
                        width={720}
                        height={450}
                        className={styles.screenshot}
                        sizes="(max-width: 768px) 80vw, 400px"
                      />
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  {tags.length > 0 && (
                    <div className={styles.chips}>
                      {tags.map((tag, i) => (
                        <span key={tag} className={own.length && i === 0 ? styles.chipAccent : styles.chip}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </PortfolioSlider>
      </div>
    </section>
  );
};

export default PortfolioPickBlock;
