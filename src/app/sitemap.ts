import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://growth-engineering.io",
      lastModified: new Date("2026-05-03"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
