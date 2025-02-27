import { MetadataRoute } from "next";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: baseUrl + "/",
      lastModified: new Date().toISOString(),
      priority: 1,
    },
    {
      url: baseUrl + "/faq",
      lastModified: new Date().toISOString(),
      priority: 0.5,
    },
  ];
}
