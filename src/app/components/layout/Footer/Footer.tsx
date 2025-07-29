import React from "react";
import styles from "./Footer.module.scss";
import { getFooterByLang } from "@/sanity/sanity.utils";
import Link from "next/link"; // Импортируйте тип Link и переименуйте его, чтобы избежать конфликта с Link из next/link
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { FooterColumn, FooterLink, SocialLink } from "@/types/footer";
import { Bitter } from "next/font/google";
import dynamic from "next/dynamic";
import Contacts from "../../sections/Contacts/Contacts";
import { FormStandardDocument } from "@/types/formStandardDocument";

type Props = {
  params: { lang: string };
  formDocument: FormStandardDocument;
};

const bitter = Bitter({
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const ParticlesBackground = dynamic(
  () => import("../../animations/ParticlesBackground/ParticlesBackground"),
  {
    ssr: false,
  }
);

const Footer = async ({ params, formDocument }: Props) => {
  const data = await getFooterByLang(params.lang);

  const { logo, socialLinks, footerColumns, copyright, finalText } = data;

  const cleanLink = (link: string) => {
    // Оставляем буквы, цифры, символы @ и +
    return link.replace(/[^a-zA-Z0-9@+]/g, "");
  };

  return (
    <>
      <Contacts
        contacts={data?.contactsSection}
        lang={params.lang}
        formDocument={formDocument}
      />
      <footer className={styles.footer} id="footer">
        <div className={styles.particlesWrapper}>
          <ParticlesBackground />
        </div>
        <div className={styles.bgCenter}></div>
        <div className={styles.top}>
          <div className="container">
            <div className={styles.footerWrapper}>
              <div className={styles.logoLinks}>
                <div className={styles.logoBlock}>
                  <Image
                    alt="Cyprys VIP Estates"
                    src={urlFor(logo).url()}
                    width={400}
                    height={400}
                    unoptimized
                    className={styles.image}
                  />
                </div>
                <div className={styles.socialLinks}>
                  {socialLinks.map((socialLink: SocialLink) => (
                    <a
                      href={socialLink.link}
                      key={socialLink._key}
                      className={`${styles.socialLink} ${bitter.className}`}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      {socialLink.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.footerColumns}>
                {footerColumns.map((column: FooterColumn) => (
                  <div key={column._key} className={styles.footerColumn}>
                    <p className={styles.columnTitle}>{column.title}</p>
                    <div className={styles.columnLinks}>
                      {column.links.map((link: FooterLink) => (
                        <Link
                          key={link._key}
                          className={styles.columnLink}
                          href={link.link}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.footerDivider}></div>
        </div>
        <div className={styles.bottom}>
          <div className="container">
            <div className={styles.bottomWrapper}>
              <div className={styles.bottomLeft}>
                <p className={styles.policyLink}>
                  © {new Date().getFullYear()} {copyright}
                </p>
              </div>
              <div className={styles.bottomRight}>
                <p>{finalText}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
