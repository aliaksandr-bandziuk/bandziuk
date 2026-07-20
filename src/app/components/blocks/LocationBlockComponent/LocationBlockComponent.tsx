import React, { FC } from "react";
import styles from "./LocationBlockComponent.module.scss";
import dynamic from "next/dynamic";
import { LocationBlock } from "@/types/blog";
import CurrentTime from "../../ui/CurrentTime/CurrentTime";
import Icon from "../../ui/Icon/Icon";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";

type Props = {
  block: LocationBlock;
  lang: string;
};

const marginValues: Record<string, string> = {
  small: "clamp(0.9375rem, 3.75vw, 2.8125rem)",
  medium: "clamp(1.875rem, 0.75rem + 4.5vw, 4.125rem)",
  large: "clamp(1.875rem, 7.5vw, 5.625rem)",
};

const LocationBlockComponent: FC<Props> = ({ block, lang }) => {
  const MapWithNoSSR = dynamic(
    () => import("../../shared/MapContact/MapContact"),
    {
      ssr: false,
    }
  );

  const computedMarginTop =
    block.marginTop && marginValues[block.marginTop]
      ? marginValues[block.marginTop]
      : "0";

  const computedMarginBottom =
    block.marginBottom && marginValues[block.marginBottom]
      ? marginValues[block.marginBottom]
      : "0";

  return (
    <section
      className={styles.locationBlock}
      style={{
        marginTop: computedMarginTop,
        marginBottom: computedMarginBottom,
      }}
    >
      <div className="container">
        {block.title && (
          <SectionHeading title={block.title} align="left" className={styles.heading} />
        )}
      </div>
      <div className={styles.locationData}>
        <div className="container">
          <div className={styles.locationItems}>
            {block.countryAndCity && (
              <div className={styles.locationItem}>
                <Icon name="map-pin" size={18} className={styles.locationItemIcon} />
                <h3 className={styles.locationItemTitle}>Country and City</h3>
                <p className={styles.locationItemText}>
                  {block.countryAndCity}
                </p>
              </div>
            )}
            {block.workingHours && (
              <div className={styles.locationItem}>
                <Icon name="clock" size={18} className={styles.locationItemIcon} />
                <h3 className={styles.locationItemTitle}>Working Hours</h3>
                <p className={styles.locationItemText}>
                  {block.workingHours}
                </p>
              </div>
            )}
            {block.timezone && (
              <div className={styles.locationItem}>
                <Icon name="timer" size={18} className={styles.locationItemIcon} />
                <h3 className={styles.locationItemTitle}>Current Time</h3>
                <CurrentTime
                  timezone={block.timezone}
                  className={styles.locationItemText}
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.mapContainer}>
          <MapWithNoSSR
            lat={block.location.lat}
            lng={block.location.lng}
            lang={lang}
          />
        </div>
      </div>
    </section>
  );
};

export default LocationBlockComponent;
