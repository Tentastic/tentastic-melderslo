import type { MetadataRoute } from "next";

const BASE_URL = "https://tentasticmelderslo.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/programma", "/nieuws", "/sponsoren", "/info"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
