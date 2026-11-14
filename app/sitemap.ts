import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes = [
  "",
  "/rezultati",
  "/pico-laser",
  "/odstranjevanje-tattoojev",
  "/odstranjevanje-tetovaze",
  "/odstranjevanje-tattoo-domzale",
  "/faq",
  "/kontakt",
  "/posvet",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}