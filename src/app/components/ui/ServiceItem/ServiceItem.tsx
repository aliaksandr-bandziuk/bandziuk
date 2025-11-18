import React from "react";
import styles from "./ServiceItem.module.scss";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.client";
import { ImageAlt } from "@/types/homepage";

type Props = {
  title: string;
  excerpt?: string;
  previewImage?: ImageAlt;
};

const ServiceItem = ({ title, excerpt, previewImage }: Props) => {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.bg}>
        {previewImage && (
          <Image
            src={urlFor(previewImage).url()}
            alt={title}
            fill
            unoptimized
            className={styles.imageQuote}
          />
        )}
      </div>
      <div className={styles.serviceItemWrapper}>
        <div className={styles.content}>
          <div className={styles.serviceItemTop}>
            <h2 className={styles.serviceItemTitle}>{title}</h2>
          </div>
          <div className={styles.serviceItemBottom}>
            {excerpt && <p className={styles.serviceItemExcerpt}>{excerpt}</p>}
          </div>
        </div>
        <div className={styles.icon}>
          <BsArrowUpRightCircle size={45} />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
