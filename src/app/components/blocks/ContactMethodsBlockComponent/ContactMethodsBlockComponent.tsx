import React, { FC } from "react";
import styles from "./ContactMethodsBlockComponent.module.scss";
import { ContactMethodsBlock, FullContact } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Bitter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

type Props = {
  block: ContactMethodsBlock;
  lang: string;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const ContactMethodsBlockComponent: FC<Props> = ({ block, lang }) => {
  // console.log("ContactMethodsBlockComponent", block);

  const computedMarginTop =
    block.marginTop && marginValues[block.marginTop]
      ? marginValues[block.marginTop]
      : "0";

  const computedMarginBottom =
    block.marginBottom && marginValues[block.marginBottom]
      ? marginValues[block.marginBottom]
      : "0";

  const cleanLink = (link: string) => {
    // Оставляем буквы, цифры, символы @ и +
    return link.replace(/[^a-zA-Z0-9@+]/g, "");
  };

  const getContactHref = (contact: FullContact) => {
    const cleanedLabel = cleanLink(contact.label);

    switch (contact.type) {
      case "Email":
        return `mailto:${cleanedLabel}`;

      case "Phone":
        // Если это телефон, возвращаем ссылку для звонка
        return `tel:${cleanedLabel}`;

      case "Link":
        // Если в label содержится номер телефона, формируем ссылку на WhatsApp
        if (cleanedLabel.match(/^\+?\d+$/)) {
          const whatsappNumber = cleanedLabel.replace("+", ""); // Убираем плюс для WhatsApp
          return `https://wa.me/${whatsappNumber}`;
        }
        // Если это обычная ссылка, проверяем на наличие http/https
        return cleanedLabel.startsWith("http://") ||
          cleanedLabel.startsWith("https://")
          ? cleanedLabel
          : `https://${cleanedLabel}`;

      default:
        return "#";
    }
  };

  const { title, description, contacts } = block;
  return (
    <section
      className={styles.contactFull}
      style={{
        marginTop: computedMarginTop,
        marginBottom: computedMarginBottom,
      }}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.contactsBlock}>
            <p className={styles.description}>{description}</p>
            <div className={styles.contacts}>
              {contacts.map((contact) => (
                <Link
                  href={getContactHref(contact)}
                  rel="noopener noreferrer"
                  key={contact._key}
                  className={styles.contact}
                >
                  <Image
                    alt={contact.label}
                    src={urlFor(contact.icon).url()}
                    width={70}
                    height={70}
                    unoptimized
                  />
                  <p className={`${styles.contactLabel} ${bitter.className}`}>
                    {contact.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethodsBlockComponent;
