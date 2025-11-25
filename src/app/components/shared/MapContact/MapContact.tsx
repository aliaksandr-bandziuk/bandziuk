"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FC } from "react";
import styles from "./MapContact.module.scss";

// Настройка стандартных иконок Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const customMarkerIcon = new L.Icon({
  iconUrl:
    "https://cdn.sanity.io/files/x6jc462y/production/3233ca821c2109a7bbe699e3a2f1dcf4b3416ebd.png", // замените на URL вашего изображения
  iconSize: [90, 90], // размер изображения
  iconAnchor: [20, 100], // точка привязки (середина нижней части)
  popupAnchor: [0, -41], // положение всплывающего окна относительно маркера
});

type Props = {
  lat: number;
  lng: number;
  lang: string;
};

const MapContact: FC<Props> = ({ lat, lng, lang }) => {
  const popupTextByLang: { [key: string]: string } = {
    en: "My office is here!",
    pl: "Moje biuro jest tutaj!",
    ru: "Мой офис здесь!",
  };

  return (
    <div className={styles.propertyMap}>
      <MapContainer
        center={[lat, lng]}
        zoom={14}
        scrollWheelZoom={false}
        attributionControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Черно-белая тема для карты */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className={styles.grayscaleTile}
        />

        {/* Маркер с кастомным цветом */}
        <Marker position={[lat, lng]} icon={customMarkerIcon}>
          <Popup>
            <b>{popupTextByLang[lang] || popupTextByLang.en}</b>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapContact;
