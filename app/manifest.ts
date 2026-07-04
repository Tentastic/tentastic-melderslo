import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tentastic Melderslo 2026",
    short_name: "Tentastic",
    description:
      "Vrijdag 10 juli 2026 — een avond vol muziek, gezelligheid en feest in de tent bij Melderslo.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#f7931e",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
