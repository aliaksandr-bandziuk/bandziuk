import { ImageAlt } from "@/types/common";
import React, { FC } from "react";
import styles from "./PropertyIntro.module.scss";
import {
  FaArrowsToCircle,
  FaLocationDot,
  FaHouseCircleCheck,
  FaBuilding,
  FaElevator,
  FaMoneyBill,
  FaBoxArchive,
  FaChalkboard,
  FaSquareParking,
  FaPeopleRoof,
  FaHouseFlag,
} from "react-icons/fa6";
import { urlFor } from "@/sanity/sanity.client";
import { ModalButton } from "../../ui/Button/ModalButton";
import ResponsiveMedia from "../../ui/ResponsiveMedia/ResponsiveMedia";
import WhatsAppButton from "../../ui/WhatsAppButton/WhatsAppButton";
import Breadcrumbs from "../../layout/Breadcrumbs/Breadcrumbs";

type Props = {
  title: string;
  excerpt: string;
  previewImage: ImageAlt;
  videoId?: string;
  videoPreview?: ImageAlt;
  lang: string;
  segments?: string[];
  collapseBottomGap?: boolean;
};

const PropertyIntro: FC<Props> = ({
  title,
  excerpt,
  previewImage,
  videoId,
  videoPreview,
  lang,
  segments,
  collapseBottomGap,
}) => {
  return (
    <section
      className={[styles.popertyIntro, collapseBottomGap ? styles.noBottomGap : ""]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.overlayFull}></div>
      <ResponsiveMedia
        title={title}
        previewImage={previewImage}
        videoId={videoId}
        videoPreview={videoPreview}
      />
      <div className={`container ${styles.contentInner}`}>
        {/* <div className={styles.overlay}></div> */}
        <div className={styles.content}>
          <div className={styles.contentWrapper}>
            {segments && segments.length > 0 && (
              <Breadcrumbs lang={lang} segments={segments} currentTitle={title} />
            )}
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{excerpt}</p>
            <div className={styles.button}>
              <ModalButton variant="primary">
                {lang === "en"
                  ? "Request Personal Offer"
                  : lang === "de"
                    ? "Persönliches anfordern"
                    : lang === "pl"
                      ? "Poproś o ofertę"
                      : lang === "ru"
                        ? "Запросить предложение"
                        : "Request Personal Offer"}
              </ModalButton>
              <WhatsAppButton lang={lang} placement="hero" variant="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyIntro;
