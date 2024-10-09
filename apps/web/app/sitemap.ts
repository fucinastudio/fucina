import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.fucina.studio",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}