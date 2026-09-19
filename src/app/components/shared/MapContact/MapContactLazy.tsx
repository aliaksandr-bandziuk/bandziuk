"use client";

import dynamic from "next/dynamic";

// Leaflet needs `window`. Since Next 15, `ssr: false` is only allowed inside a
// Client Component, so the server-rendered LocationBlockComponent uses this.
const MapContactLazy = dynamic(() => import("./MapContact"), {
  ssr: false,
});

export default MapContactLazy;
