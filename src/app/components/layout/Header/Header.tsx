import { getHeaderByLang } from "@/sanity/sanity.utils";
import { Header as HeaderType, MegaItem } from "@/types/header";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { Translation } from "@/types/homepage";
import { ModalButton } from "../../ui/Button/ModalButton";
import { defaultLocale } from "@/i18n.config";
import LocaleSwitcher from "../../shared/LocaleSwitcher/LocaleSwitcher";
import MegaNav from "./MegaNav";
import NavController from "./NavController";

type Props = {
  translations?: Translation[];
  params: { lang: string };
};

// The legacy menu stored links without the language prefix. Used only while
// the header document has no megaMenu yet.
function fromLegacy(data: HeaderType, lang: string): MegaItem[] {
  const prefix = lang === defaultLocale ? "" : `/${lang}`;
  const full = (l: string) => (l.startsWith("/") ? `${prefix}${l}` : `${prefix}/${l}`);
  return (data.navLinks ?? []).map((n) => {
    const kids = (n.children ?? []).filter((c) => c?.label && c?.link);
    if (!kids.length) return { _key: n._key, label: n.label, kind: "link", link: full(n.link) };
    return {
      _key: n._key,
      label: n.label,
      kind: "list",
      columns: [{ _key: `${n._key}c`, title: n.label, links: kids.map((c) => ({ _key: c._key, label: c.label, link: full(c.link) })) }],
    };
  });
}

const Header = async ({ translations, params }: Props) => {
  const data = await getHeaderByLang(params.lang);
  const items = data.megaMenu?.length ? data.megaMenu : fromLegacy(data, params.lang);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.companyData}>
            {/* English has no prefix, so `/${lang}` would make the most
                clicked link on every English page a 308 to "/". */}
            <Link
              className={styles.logoLink}
              href={params.lang === defaultLocale ? "/" : `/${params.lang}`}
            >
              <Image
                alt="Bandziuk Logo"
                src={urlFor(data.logo).url()}
                width={300}
                height={300}
                className={styles.logoImage}
              />
              <Image
                alt="Bandziuk Logo"
                src={urlFor(data.logoMobile).url()}
                width={40}
                height={40}
                className={`${styles.logoImageMobile} logoImageMobile`}
              />
            </Link>
          </div>
          <div className={styles.contacts}>
            <div className={styles.navWrapperParent}>
              <MegaNav
                items={items}
                lang={params.lang}
                localeSlot={<LocaleSwitcher translations={translations} />}
                buttonLabel={data.buttonLabel}
                phone={data.phone}
                whatsappNumber={data.whatsappNumber}
              />
            </div>
            <div className={styles.localeWrapper}>
              <LocaleSwitcher translations={translations} />
            </div>
            <div className={styles.contactData}>
              <div className={styles.contactButtons}>
                <ModalButton variant="primary" size="md">{data.buttonLabel}</ModalButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavController />
    </header>
  );
};

export default Header;
