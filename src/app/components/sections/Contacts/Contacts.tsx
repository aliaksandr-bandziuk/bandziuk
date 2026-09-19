import React, { FC } from "react";
import styles from "./Contacts.module.scss";
import { ContactsSection } from "@/types/homepage";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import FormFull from "../../forms/FormFull/FormFullOnView";
import { FormStandardDocument } from "@/types/formStandardDocument";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Icon from "../../ui/Icon/Icon";
import IconBadge from "../../ui/Icon/IconBadge";

type Props = {
  contacts: ContactsSection;
  lang: string;
  formDocument: FormStandardDocument;
};

const Contacts: FC<Props> = ({ contacts, lang, formDocument }) => {
  const {
    pretitle,
    title,
    subtitle,
    emailLabel,
    emailAddress,
    socialLinks,
    officeAddressLabel,
    officeAddress,
    formTitle,
    formDescription,
    formButtonLabel,
  } = contacts;

  if (!contacts || !contacts.socialLinks || contacts.socialLinks.length === 0) {
    return null;
  }

  return (
    <section className={styles.contactsSection} id="contacts">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <SectionHeading eyebrow={pretitle} title={title} subtitle={subtitle} />
          </div>
        </div>
        <FadeInOnScroll>
          <div className={styles.contacts}>
            <div className={styles.contactsWrapper}>
              <div className={styles.direct}>
                <div className={styles.directImage}>
                  {/* A plain <img> on purpose. This dotted map is an indexed PNG
                      that WebP encodes larger (99 KB vs 73 KB), so there is
                      nothing for an optimizer to gain. It sits in the footer on
                      every page, so it loads lazily, with its real size to
                      reserve space. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://cdn.sanity.io/files/x6jc462y/production/61b823d8e4d34037dd42c28841d0f12bd957658f.png"
                    alt={title}
                    width={600}
                    height={359}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className={styles.directContacts}>
                  <div className={styles.directData}>
                    <div className={styles.directDataWrapper}>
                      <div className={styles.directContactItem}>
                        <p className={styles.itemTitle}>{emailLabel}</p>
                        <a
                          className={styles.itemValue}
                          href={`mailto:${emailAddress}`}
                        >
                          {emailAddress}
                        </a>
                      </div>
                      <div className={styles.directContactItem}>
                        <p className={styles.itemTitle}>{officeAddressLabel}</p>
                        <p className={styles.itemValue}>{officeAddress}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.socialLinks}>
                    {socialLinks.map((link) => (
                      <a
                        key={link._key}
                        href={link.link}
                        className={styles.socialLink}
                        target="_blank"
                      >
                        <div className={styles.socialLinkWrapper}>
                          {link.iconName ? (
                            <IconBadge>
                              <Icon name={link.iconName} />
                            </IconBadge>
                          ) : (
                            <Image
                              src={urlFor(link.icon).url()}
                              alt={link.icon.alt ?? link.label}
                              width={30}
                              height={30}
                              className={styles.socialLinkImage}
                            />
                          )}
                          <p className={styles.socialLinkLabel}>{link.label}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.indirect}>
                <div className={styles.indirectWrapper}>
                  <div className={styles.indirectContent}>
                    <h3 className={styles.indirectTitle}>{formTitle}</h3>
                    <p className={styles.indirectDescription}>
                      {formDescription}
                    </p>
                  </div>
                  <div className={styles.formContainer}>
                    <FormFull
                      lang={lang}
                      form={formDocument}
                      offerButtonCustomText={formButtonLabel}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};

export default Contacts;
