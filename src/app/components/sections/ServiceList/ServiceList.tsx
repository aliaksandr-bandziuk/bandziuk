import { SinglepageRef } from "@/types/singlepage";
import Link from "next/link";
import styles from "./ServiceList.module.scss";
import ServiceItem from "../../ui/ServiceItem/ServiceItem";

type ServiceListProps = {
  services: SinglepageRef[];
  lang: string;
  parentSlug?: string;
};

// без React.FC, чтобы не тащить типы из react
const ServiceList = ({ services, lang, parentSlug }: ServiceListProps) => {
  if (!services?.length) return null;

  return (
    <div className="container">
      <section className={styles.serviceList}>
        <div className={styles.servicesListGrid}>
          {services.map((service) => {
            const childSlug = service.slug[lang]?.current;
            if (!childSlug) return null;

            const pathSegments = [parentSlug, childSlug]
              .filter(Boolean)
              .join("/");

            const href =
              lang === "en" ? `/${pathSegments}` : `/${lang}/${pathSegments}`;

            return (
              <Link
                href={href}
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
