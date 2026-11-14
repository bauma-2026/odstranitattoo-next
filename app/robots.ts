import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const isProd = process.env.NEXT_PUBLIC_SITE_URL === SITE_URL;

export default function robots(): MetadataRoute.Robots {
  if (!isProd) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}