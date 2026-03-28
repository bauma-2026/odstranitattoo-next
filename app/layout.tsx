import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

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
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://odstranitattoo-next.vercel.app";

// 🔥 detect production
const isProd = BASE_URL === "https://odstranitattoo.si";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Odstrani Tattoo",
    template: "%s | Odstrani Tattoo",
  },

  description:
    "Lasersko odstranjevanje tattoojev s Pico laserjem v Domžalah. Individualna ocena tattooja, strokovni postopek in realen načrt odstranjevanja.",

  // ✅ ROBOTS (ključni del)
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
      "Lasersko odstranjevanje tattoojev s Pico laserjem v Domžalah.",
    url: BASE_URL,
    siteName: "Odstrani Tattoo",
    locale: "sl_SI",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Odstrani Tattoo",
      },
    ],
  },

  // ✅ CANONICAL (vedno production!)
  alternates: {
    canonical: "https://odstranitattoo.si",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className={`${satoshi.variable} ${inter.variable}`}>
      <body className="bg-white font-sans text-neutral-900 antialiased">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Odstrani Tattoo",
              url: "https://odstranitattoo.si",
              telephone: "+38670553340",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ljubljanska 90",
                addressLocality: "Domžale",
                addressCountry: "SI",
              },
              areaServed: "Slovenia",
              sameAs: [
                "https://www.instagram.com/odstranitattoo/",
                "https://www.facebook.com/odstranitattoo/",
              ],
            }),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}