import { SinglepageRef } from "@/types/singlepage";

type ServiceListProps = {
  services: SinglepageRef[];
  lang: string;
  parentSlug?: string;
};

// без React.FC, чтобы не тащить типы из react
const ServiceList = ({ services, lang, parentSlug }: ServiceListProps) => {
  if (!services?.length) return null;

  return (
    <section className="services-list">
      <div className="services-list__grid">
        {services.map((service) => {
          const childSlug = service.slug[lang]?.current;
          if (!childSlug) return null;

          const pathSegments = [parentSlug, childSlug]
            .filter(Boolean)
            .join("/");

          const href =
            lang === "en" ? `/${pathSegments}` : `/${lang}/${pathSegments}`;

          return (
            <article key={service._id} className="services-list__item">
              {/* лучше Link, но если тебе сейчас не критично — можно оставить <a> */}
              <a href={href}>
                {/* {service.previewImage && (
                  <img
                    src={service.previewImage.asset?.url}
                    alt={service.previewImage.alt || service.title}
                  />
                )} */}
                <h2>{service.title}</h2>
                {service.excerpt && <p>{service.excerpt}</p>}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceList;
