import React, { FC } from "react";
import styles from "./Contacts.module.scss";
import { ContactsSection } from "@/types/homepage";
import { Bitter } from "next/font/google";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import FormFull from "../../forms/FormFull/FormFull";
import { FormStandardDocument } from "@/types/formStandardDocument";
import FormStandard from "../../forms/FormStandard/FormStandard";
import FadeInOnScroll from "../../animations/FadeInOnScroll/FadeInOnScroll";

type Props = {
  contacts: ContactsSection;
  lang: string;
  formDocument: FormStandardDocument;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

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
            <div className={styles.pretitle}>{pretitle}</div>
            <h2 className={styles.title}>{title}</h2>
            <p className={`${styles.subtitle} ${bitter.className}`}>
              {subtitle}
            </p>
          </div>
        </div>
        <FadeInOnScroll>
          <div className={styles.contacts}>
            <div className={styles.contactsWrapper}>
              <div className={styles.direct}>
                <div className={styles.directImage}>
                  <img
                    src="https://cdn.sanity.io/files/x6jc462y/production/61b823d8e4d34037dd42c28841d0f12bd957658f.png"
                    alt={title}
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
                          <Image
                            src={urlFor(link.icon).url()}
                            alt={link.icon.alt ?? link.label}
                            width={30}
                            height={30}
                            unoptimized
                            className={styles.socialLinkImage}
                          />
                          <p className={styles.socialLinkLabel}>{link.label}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.indirect}>
                <div className={styles.bgImage}></div>
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
