import type { Metadata } from "next";

/** Javna produkcijska domena. Ni odvisna od okoljskih spremenljivk ali Vercel domene. */
export const SITE_URL = "https://odstranitattoo.si";

export const SITE_NAME = "Odstrani Tattoo";

const OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Odstrani Tattoo — lasersko odstranjevanje tattoojev in tetovaž",
};

type PageMetadataInput = {
  /** Pot strani, npr. "/pico-laser". Prazno za domačo stran. */
  path: string;
  title: string;
  description: string;
  /** Domača stran nima priponke »| Odstrani Tattoo« (root layout je ne doda). */
  titleSuffix?: boolean;
};

/**
 * Metapodatki strani z lastnim canonical in Open Graph.
 * Next.js openGraph na strani v celoti nadomesti openGraph iz layouta,
 * zato tu ponovimo siteName, locale, type in sliko.
 */
export function pageMetadata({
  path,
  title,
  description,
  titleSuffix = true,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: titleSuffix ? `${title} | ${SITE_NAME}` : title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "sl_SI",
      type: "website",
      images: [OG_IMAGE],
    },
  };
}
