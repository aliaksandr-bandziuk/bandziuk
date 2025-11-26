import React from "react";
import styles from "./ServiceOffered.module.scss";
import { navLink } from "@/types/header";
import Link from "next/link";

export type Props = {
  serviceOffered: navLink[];
  lang: string;
};

const ServiceOffered = ({ serviceOffered, lang }: Props) => {
  return (
    <div className={styles.serviceOffered}>
      <div className={styles.serviceOfferedList}>
        {serviceOffered
          .filter((service) => service.link)
          .map((service) => {
            const href =
              lang === "en" ? `/${service.link}` : `/${lang}/${service.link}`;

            return (
              <Link
                key={service.link}
                href={href}
                className={styles.serviceOfferedLink}
                aria-label={`Service Link to ${service.label}`}
              >
                {service.label}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ServiceOffered;
