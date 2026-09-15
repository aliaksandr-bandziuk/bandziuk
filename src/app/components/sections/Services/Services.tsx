import React, { FC } from "react";
import styles from "./Services.module.scss";
import { ServicePillar, ServicesSection } from "@/types/homepage";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import Link from "next/link";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Icon from "../../ui/Icon/Icon";
import IconBadge from "../../ui/Icon/IconBadge";

type Props = {
  servicesSection: ServicesSection;
};

const Services: FC<Props> = ({ servicesSection }) => {
  if (!servicesSection) {
    return null;
  }

  const { pretitle, title, subtitle, serviceItems, pillars, fullLink } = servicesSection;
  const hasPillars = (pillars?.length ?? 0) > 0;

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.text}>
          <SectionHeading eyebrow={pretitle} title={title} subtitle={subtitle} />
        </div>
        {hasPillars ? (
          <ServicePillars section={servicesSection} />
        ) : (
          <div className={styles.servicesItems}>
            {serviceItems.map((item, index) => (
              <div key={item._key} className={styles.serviceItemWrapperGrid}>
                <FadeInOnScroll index={index}>
                  <div className={styles.serviceItem}>
                    <div className={styles.serviceItemWrapper}>
                      {item.iconName ? (
                        <IconBadge>
                          <Icon name={item.iconName} />
                        </IconBadge>
                      ) : (
                        <div className={styles.serviceItemIcon}>
                          <Image
                            src={urlFor(item.icon).url()}
                            alt={item.icon.alt ?? title}
                            width={70}
                            height={70}
                            className={styles.image}
                          />
                        </div>
                      )}
                      <div className={styles.serviceItemText}>
                        <h3 className={styles.serviceItemTitle}>{item.title}</h3>
                        <p className={styles.serviceItemDescription}>
                          {item.description}
                        </p>
                        {item.linkDestination && item.linkLabel && (
                          <Link
                            href={item.linkDestination}
                            className={styles.serviceItemLink}
                          >
                            {item.linkLabel}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </FadeInOnScroll>
              </div>
            ))}
          </div>
        )}
        {hasPillars && fullLink?.url && fullLink?.label && (
          <div className={styles.fullLinkWrapper}>
            <Link href={fullLink.url} className={styles.serviceItemLink}>
              {fullLink.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Three service directions, each a list of every service page with its price.
 * The assistants and the GEO/AEO definitions sit under the columns: they name
 * what "AI search" means in the words people search with.
 */
const ServicePillars: FC<{ section: ServicesSection }> = ({ section }) => {
  const { pillars = [], assistantsLabel, assistants, definitions } = section;

  return (
    <>
      <ul className={styles.pillars}>
        {pillars.map((pillar, index) => (
          <li key={pillar._key} className={styles.pillarCell}>
            <FadeInOnScroll index={index}>
              <Pillar pillar={pillar} />
            </FadeInOnScroll>
          </li>
        ))}
      </ul>

      {assistants && assistants.length > 0 && (
        <div className={styles.assistants}>
          {assistantsLabel && <span className={styles.assistantsLabel}>{assistantsLabel}</span>}
          <ul className={styles.assistantList}>
            {assistants.map((assistant) => (
              <li key={assistant}>{assistant}</li>
            ))}
          </ul>
        </div>
      )}

      {definitions && definitions.length > 0 && (
        <dl className={styles.definitions}>
          {definitions.map((definition) => (
            <div key={definition._key} className={styles.definition}>
              <dt>{definition.term}</dt>
              <dd>{definition.text}</dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
};

const Pillar: FC<{ pillar: ServicePillar }> = ({ pillar }) => (
  <div className={styles.pillar}>
    <div className={styles.pillarHead}>
      {pillar.iconName && (
        <IconBadge>
          <Icon name={pillar.iconName} />
        </IconBadge>
      )}
      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
      {pillar.description && <p className={styles.pillarDescription}>{pillar.description}</p>}
    </div>
    {pillar.items && pillar.items.length > 0 && (
      <ul className={styles.pillarList}>
        {pillar.items.map((item) => (
          <li key={item._key} className={styles.pillarItem}>
            {item.link ? (
              <Link href={item.link} className={styles.pillarLink}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.pillarLink}>{item.label}</span>
            )}
            {item.price && <span className={styles.pillarPrice}>{item.price}</span>}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Services;
