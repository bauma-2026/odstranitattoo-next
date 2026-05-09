import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = {
  title: "Pogosta vprašanja",
  description:
    "Odgovori na najpogostejša vprašanja o laserskem odstranjevanju tattoojev s Pico laserjem.",
  alternates: {
    canonical: "https://odstranitattoo.si/faq",
  },
};

export default function FaqPage() {
  return (
<main className="bg-white text-neutral-900">
  {/* HERO */}
  <section className="relative overflow-hidden bg-neutral-950 text-white">
    <div className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
    </div>

    <PixelLayerRandom
      basePixels={pixelsSectionDarkMobile}
      className="pointer-events-none absolute inset-0 z-[2] sm:hidden"
    />

    <PixelLayerRandom
      basePixels={pixelsSectionDarkTablet}
      className="pointer-events-none absolute inset-0 z-[2] hidden sm:block lg:hidden"
    />

    <PixelLayerRandom
      basePixels={pixelsSectionDarkDesktop}
      className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
    />

   <Container className="relative z-10 pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
 <div className="header-stack max-w-3xl">
    <p className="eyebrow-dark">FAQ</p>

   <h1 className="heading-display leading-[1.04] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
  Pogosta vprašanja
</h1>

    {/* MOBILE */}
    <p className="text-body-inverse-lg max-w-[56ch] sm:hidden">
      Jasni odgovori na najpogostejša vprašanja pred odstranjevanjem tattooja in med samim postopkom.
    </p>

  <p className="hidden text-body-inverse-lg max-w-[60ch] sm:block">
  Odgovori na najpogostejša vprašanja
  <br />
  <span className="text-white/70">
    pred odstranjevanjem tattooja — od poteka do realnih rezultatov.
  </span>
</p>

    {/* MOBILE */}
    <p className="text-body-inverse-sm max-w-[56ch] sm:hidden">
      Če tukaj ne najdete svojega odgovora, ga skupaj pogledamo na posvetu.
    </p>

    {/* DESKTOP */}
    <p className="hidden text-body-inverse-sm max-w-[60ch] sm:block">
     Če svojega primera ne najdete tukaj, ga skupaj pogledamo na posvetu.
    </p>

    <div className="flex flex-col gap-2 pt-3">
      <a
        href="/odstranjevanje-tattoojev"
        className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
      >
        Kako poteka odstranjevanje →
      </a>

      <a
        href="/rezultati"
        className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
      >
        Poglej rezultate odstranjevanja →
      </a>
    </div>
  </div>
</Container>
    <div className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
    </div>
  </section>

  {/* FAQ CONTENT */}
  <FaqSection />
</main>
  );
}