import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Samo namenske, indeksabilne strani s statusom 200 in lastnim canonicalom.
const routes = [
  "",
  "/odstranjevanje-tattoojev",
  "/odstranjevanje-tetovaze",
  "/odstranjevanje-tattoo-domzale",
  "/pico-laser",
  "/rezultati",
  "/faq",
  "/kontakt",
  "/posvet",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}
