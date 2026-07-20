import React, { FC } from "react";
import styles from "./Services.module.scss";
import { ServicesSection } from "@/types/homepage";
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

  const { pretitle, title, subtitle, serviceItems, fullLink } = servicesSection;

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.text}>
          <SectionHeading eyebrow={pretitle} title={title} subtitle={subtitle} />
        </div>
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
                          unoptimized
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
      </div>
    </section>
  );
};

export default Services;
