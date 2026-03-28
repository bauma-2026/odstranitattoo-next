import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://odstranitattoo-next.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/rezultati`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pico-laser`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/odstranjevanje-tattoojev`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/odstranjevanje-tetovaze`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/odstranjevanje-tattoo-domzale`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/posvet`,
      lastModified: new Date(),
    },
  ];
}