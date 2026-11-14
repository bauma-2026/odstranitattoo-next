import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import CookieConsent from "@/components/ui/CookieConsent";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/seo";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

// Indeksiranje je dovoljeno samo v produkcijskem deployu (preview ostane noindex).
// Javni URL-ji (metadataBase, OG, schema, sitemap) so vedno produkcijska domena.
const isProd = process.env.NEXT_PUBLIC_SITE_URL === SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Odstrani Tattoo",
    template: "%s | Odstrani Tattoo",
  },

  description:
    "Lasersko odstranjevanje tattoojev in tetovaž s Pico laserjem v Domžalah. Individualna ocena, strokovni postopek in realen načrt odstranjevanja.",

  robots: isProd
    ? {
        index: true,
        follow: true,
      }
    : {
        index: false,
        follow: false,
      },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  openGraph: {
    title: "Odstrani Tattoo",
    description:
      "Lasersko odstranjevanje tattoojev in tetovaž s Pico laserjem v Domžalah.",
    url: SITE_URL,
    siteName: "Odstrani Tattoo",
    locale: "sl_SI",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Odstrani Tattoo — lasersko odstranjevanje tattoojev in tetovaž",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Odstrani Tattoo",
    description:
      "Lasersko odstranjevanje tattoojev in tetovaž s Pico laserjem v Domžalah.",
    images: ["/og-default.jpg"],
  },

  verification: {
    google: "YaDvteUYphNwmacnUqO6Uvj8h-__g_cXhBd83Cs6sRI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Odstrani Tattoo",
    url: SITE_URL,
    telephone: "+38670553340",
    email: "odstranitattoo@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ljubljanska 90",
      postalCode: "1230",
      addressLocality: "Domžale",
      addressCountry: "SI",
    },
    areaServed: {
      "@type": "Country",
      name: "Slovenia",
    },
    sameAs: [
      "https://www.instagram.com/odstranitattoo/",
      "https://www.facebook.com/odstranitattoo/",
    ],
  };

  return (
    <html lang="sl" className={`${satoshi.variable} ${inter.variable}`}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <JsonLd data={businessSchema} />

        <Header />
        {children}
        <Footer />

        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}