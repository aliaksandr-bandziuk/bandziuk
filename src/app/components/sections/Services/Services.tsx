import React, { FC } from "react";
import styles from "./Services.module.scss";
import { ServicesSection } from "@/types/homepage";
import { Bitter } from "next/font/google";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import Link from "next/link";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";

type Props = {
  servicesSection: ServicesSection;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const Services: FC<Props> = ({ servicesSection }) => {
  if (!servicesSection) {
    return null;
  }

  const { pretitle, title, subtitle, serviceItems, fullLink } = servicesSection;

  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.text}>
          <div className={styles.pretitle}>{pretitle}</div>
          <h2 className={styles.title}>{title}</h2>
          <p className={`${styles.subtitle} ${bitter.className}`}>{subtitle}</p>
        </div>
        <div className={styles.servicesItems}>
          {serviceItems.map((item, index) => (
            <div key={item._key} className={styles.serviceItemWrapperGrid}>
              <FadeInOnScroll index={index}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceItemWrapper}>
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
                    <div className={styles.serviceItemText}>
                      <h3 className={styles.serviceItemTitle}>{item.title}</h3>
                      <p className={styles.serviceItemDescription}>
                        {item.description}
                      </p>
                      <Link
                        href={item.linkDestination}
                        className={styles.serviceItemLink}
                      >
                        {item.linkLabel}
                      </Link>
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
