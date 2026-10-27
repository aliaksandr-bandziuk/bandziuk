import React from "react";
import styles from "./Footer.module.scss";
import { getFooterByLang } from "@/sanity/sanity.utils";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { Footer as FooterType, FooterColumn, FooterLink, SocialLink } from "@/types/footer";
import ParticlesBackground from "@/app/components/animations/ParticlesBackground/ParticlesBackgroundLazy";
import Contacts from "../../sections/Contacts/Contacts";
import { FormStandardDocument } from "@/types/formStandardDocument";
import { ModalButton } from "../../ui/Button/ModalButton";

type Props = {
  params: { lang: string };
  formDocument: FormStandardDocument;
  // /contacts already renders its own full contact form mid-page — showing
  // this same band again right above the footer would be a duplicate ask.
  hideContactBand?: boolean;
};

// Server component: every column and link is in the HTML. On a phone the
// columns fold into accordions; the toggling is done by NavController (in the
// header), which only flips data-open on this markup.
const Footer = async ({ params, formDocument, hideContactBand }: Props) => {
  const data: FooterType = await getFooterByLang(params.lang);
  const { logo, socialLinks, footerColumns, copyright, finalText, aboutText, phone, whatsappNumber, ctaLabel } = data;
  const wa = (whatsappNumber || phone || "").replace(/\D/g, "");

  return (
    <>
      {!hideContactBand && (
        <Contacts
          contacts={data?.contactsSection}
          lang={params.lang}
          formDocument={formDocument}
        />
      )}
      <footer className={styles.footer} id="footer">
        <div className={styles.particlesWrapper}>
          <ParticlesBackground />
        </div>
        <div className={styles.top}>
          <div className="container">
            <div className={styles.footerWrapper}>
              <div className={styles.brand}>
                {logo && (
                  <Image
                    alt="Bandziuk"
                    src={urlFor(logo).url()}
                    width={400}
                    height={400}
                    className={styles.image}
                  />
                )}
                {aboutText && <p className={styles.about}>{aboutText}</p>}
                {phone && (
                  <a className={styles.phone} href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6L3 21Z" />
                    </svg>
                    {phone}
                  </a>
                )}
                {ctaLabel && (
                  <ModalButton variant="primary" size="md" className={styles.cta}>
                    {ctaLabel}
                  </ModalButton>
                )}
                {socialLinks?.length ? (
                  <div className={styles.socialLinks}>
                    {socialLinks.map((socialLink: SocialLink) => (
                      <a
                        href={socialLink.link}
                        key={socialLink._key}
                        className={styles.socialLink}
                        target="_blank"
                        rel="noopener nofollow"
                      >
                        {socialLink.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className={styles.footerColumns}>
                {footerColumns?.map((column: FooterColumn) => {
                  const id = `footer-col-${column._key}`;
                  return (
                    <div key={column._key} className={styles.footerColumn} data-acc>
                      <p className={styles.columnHead}>
                        <button type="button" className={styles.columnTitle} data-acc-trigger aria-expanded="false" aria-controls={id}>
                          {column.title}
                          <svg className={styles.caret} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                      </p>
                      <div className={styles.columnBody} id={id}>
                        <ul className={styles.columnLinks}>
                          {column.links?.map((link: FooterLink) => (
                            <li key={link._key}>
                              {link.link.startsWith("http") ? (
                                <a className={styles.columnLink} href={link.link} target="_blank" rel="noopener">
                                  {link.label}
                                </a>
                              ) : (
                                <Link className={styles.columnLink} href={link.link}>
                                  {link.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
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
