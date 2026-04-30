import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://growth-engineering.io/sitemap.xml",
    host: "https://growth-engineering.io",
  };
}
