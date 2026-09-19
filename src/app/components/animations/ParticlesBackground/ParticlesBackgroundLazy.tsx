"use client";

import dynamic from "next/dynamic";

// Since Next 15, `ssr: false` is only allowed inside a Client Component.
// Server components (Hero, Reviews, Footer) render this wrapper instead.
const ParticlesBackgroundLazy = dynamic(() => import("./ParticlesBackground"), {
  ssr: false,
});

export default ParticlesBackgroundLazy;
