import React, { FC } from "react";
import styles from "./Compare.module.scss";
import { CompareSection } from "@/types/homepage";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";

type Props = {
  compareSection?: CompareSection;
};

/**
 * A real <table>, so search engines and assistants can read the comparison as
 * pairs. On a phone each row is restyled as a card; data-label repeats the
 * column name inside the cell, since the header row is hidden there.
 */
const Compare: FC<Props> = ({ compareSection }) => {
  const rows = compareSection?.rows?.filter((row) => row.criterion) ?? [];
  if (!compareSection || rows.length === 0) return null;
  const { pretitle, title, criterionLabel, agencyLabel, meLabel, note } = compareSection;

  return (
    <section className={styles.compareSection} id="freelancer-or-agency">
      <div className="container">
        <div className={styles.heading}>
          <SectionHeading eyebrow={pretitle} title={title} />
        </div>

        <FadeInOnScroll>
          <table className={styles.table}>
            {title && <caption className={styles.caption}>{title}</caption>}
            <thead>
              <tr>
                <th scope="col">{criterionLabel}</th>
                <th scope="col">{agencyLabel}</th>
                <th scope="col" className={styles.meColumn}>
                  {meLabel}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row._key}>
                  <th scope="row" className={styles.criterion}>
                    {row.criterion}
                  </th>
                  <td data-label={agencyLabel} className={styles.agency}>
                    {row.agency}
                  </td>
                  <td data-label={meLabel} className={styles.me}>
                    {row.me}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeInOnScroll>

        {note && <p className={styles.note}>{note}</p>}
      </div>
    </section>
  );
};

export default Compare;
