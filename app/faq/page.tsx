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
          <div className="flex max-w-2xl flex-col gap-4 sm:gap-5">
            <p className="eyebrow-dark">FAQ</p>

            <h1 className="heading-display text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
              Pogosta
              <br />
              vprašanja
            </h1>

            <p className="text-body-inverse-lg max-w-[60ch]">
              Zbrali smo odgovore na vprašanja, ki jih stranke najpogosteje
              zastavijo pred prvim posvetom, tretmajem in med samim postopkom
              odstranjevanja tattooja.
            </p>

            <p className="text-body-inverse-sm max-w-[60ch]">
              Na enem mestu lahko hitro preverite, kako poteka odstranjevanje,
              kaj lahko pričakujete in od česa je odvisen končni rezultat.
            </p>
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