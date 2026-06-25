export type ImageAlt = {
  _key: string;
  _type: "image";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type GeoPoint = {
  _type: "geopoint";
  lat: number;
  lng: number;
  alt?: number;
};
