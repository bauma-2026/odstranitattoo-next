import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";
import FaqSection from "@/components/home/FaqSection";

export const metadata: Metadata = pageMetadata({
  path: "/faq",
  title: "Pogosta vprašanja",
  description:
    "Odgovori na najpogostejša vprašanja o laserskem odstranjevanju tattoojev s Pico laserjem, poteku tretmajev, celjenju kože in rezultatih.",
});

export default function FaqPage() {
  return (
    <main className="bg-canvas text-ink">
     {/* HERO */}
<section className="relative overflow-hidden border-b border-ink/10 bg-hero text-ink">
  <Container className="relative z-10 section-hero">
    <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
      <p className="eyebrow-skin">FAQ</p>

      <h1 className="heading-display max-w-[13ch] text-3xl leading-[1.04] text-ink sm:text-4xl lg:text-[3.25rem]">
        Pogosta vprašanja
      </h1>

      <p className="max-w-[42ch] text-lg leading-[1.6] text-ink-muted">
        Jasni odgovori na najpogostejša vprašanja pred odstranjevanjem
        tattooja in med samim postopkom.
      </p>

      <p className="max-w-[46ch] text-sm leading-[1.6] text-ink-muted">
     Če odgovora ne najdete, lahko pošljete vprašanje ali fotografijo tetovaže.
      </p>

      <div className="flex flex-col items-start gap-3 pt-3 sm:gap-4">
        <Button href="/posvet" variant="primary-light">
          Pošlji povpraševanje
        </Button>

        <a
          href="/rezultati"
          className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
        >
          Poglej rezultate odstranjevanja →
        </a>
      </div>
    </div>
  </Container>
</section>

      {/* FAQ CONTENT */}
      <FaqSection />
    </main>
  );
}