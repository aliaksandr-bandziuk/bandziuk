import { getHeaderByLang } from "@/sanity/sanity.utils";
import { Header as HeaderType } from "@/types/header";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import styles from "./Header.module.scss";
import Link from "next/link";
import { Translation } from "@/types/homepage";
import LocaleSwitcher from "../../shared/LocaleSwitcher/LocaleSwitcher";
import NavWrapper from "../../wrappers/NavWrapper/NavWrapper";
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";

type Props = {
  translations?: Translation[];
  params: { lang: string };
};

const Header = async ({ translations, params }: Props) => {
  const data = await getHeaderByLang(params.lang);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.companyData}>
            <Link className={styles.logoLink} href={`/${params.lang}`}>
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
              <NavWrapper
                navLinks={data.navLinks}
                params={params}
                translations={translations}
              />
            </div>
            <div className={styles.contactData}>
              <div className={styles.contactButtons}>
                {/* <LocaleSwitcher translations={translations} /> */}
                <ButtonModal>{data.buttonLabel}</ButtonModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
