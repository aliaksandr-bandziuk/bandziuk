import { SinglepageRef } from "@/types/singlepage";
import Link from "next/link";
import styles from "./ServiceList.module.scss";
import ServiceItem from "../../ui/ServiceItem/ServiceItem";

type ServiceListProps = {
  services: SinglepageRef[];
  lang: string;
  parentSlug?: string;
  /** "compact" renders a dense text list instead of image cards — for a
   * servicesIndex that's itself nested (e.g. a geo hub), so a large group
   * (countries) doesn't dominate the page the way the top-level hub's
   * full-card list does. Top-level servicesIndex pages keep "default". */
  variant?: "default" | "compact";
};

// без React.FC, чтобы не тащить типы из react
const ServiceList = ({
  services,
  lang,
  parentSlug,
  variant = "default",
}: ServiceListProps) => {
  if (!services?.length) return null;

  const buildHref = (childSlug: string) => {
    const pathSegments = [parentSlug, childSlug].filter(Boolean).join("/");
    return lang === "en" ? `/${pathSegments}` : `/${lang}/${pathSegments}`;
  };

  if (variant === "compact") {
    return (
      <div className="container">
        <section className={styles.serviceList}>
          <ul className={styles.servicesListCompact}>
            {services.map((service) => {
              const childSlug = service.slug[lang]?.current;
              if (!childSlug) return null;

              return (
                <li key={service._id}>
                  <Link
                    href={buildHref(childSlug)}
                    className={styles.compactItem}
                  >
                    {service.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <section className={styles.serviceList}>
        <div className={styles.servicesListGrid}>
          {services.map((service) => {
            const childSlug = service.slug[lang]?.current;
            if (!childSlug) return null;

            return (
              <Link
                href={buildHref(childSlug)}
                key={service._id}
                className={styles.servicesListItem}
              >
                <ServiceItem
                  title={service.title}
                  excerpt={service.excerpt}
                  previewImage={service.previewImage}
                />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ServiceList;
