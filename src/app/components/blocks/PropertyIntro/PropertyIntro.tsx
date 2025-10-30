import { ImageAlt } from "@/types/property";
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
import { ButtonModal } from "../../ui/ButtonModal/ButtonModal";
import ResponsiveMedia from "../../ui/ResponsiveMedia/ResponsiveMedia";

type Props = {
  title: string;
  excerpt: string;
  previewImage: ImageAlt;
  videoId?: string;
  videoPreview?: ImageAlt;
  lang: string;
};

const PropertyIntro: FC<Props> = ({
  title,
  excerpt,
  previewImage,
  videoId,
  videoPreview,
  lang,
}) => {
  return (
    <section className={styles.popertyIntro}>
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
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{excerpt}</p>
            <div className={styles.button}>
              <ButtonModal>
                {lang === "en"
                  ? "Request Personal Offer"
                  : lang === "de"
                    ? "Persönliches Angebot anfordern"
                    : lang === "pl"
                      ? "Poproś o indywidualną ofertę"
                      : lang === "ru"
                        ? "Запросить персональное предложение"
                        : "Request Personal Offer"}
              </ButtonModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyIntro;
