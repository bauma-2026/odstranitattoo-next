import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayer from "@/components/ui/pixels/PixelLayer";
import { pixelsSubtleDark } from "@/components/ui/pixels/pixels.config";

export default function FinalCta() {
  return (
    <section className="section-sm relative overflow-hidden bg-neutral-950 text-white">
      {/* gradient */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black via-black to-neutral-950" />

      {/* pixels */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <PixelLayer pixels={pixelsSubtleDark} />
      </div>

      {/* content */}
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-5">
          <p className="eyebrow-dark text-white/50">Posvet</p>

          <h2 className="heading-section text-white">
            Razmišljate o odstranitvi tetovaže?
          </h2>

          <p className="text-body-inverse-lg max-w-[52ch]">
            Na posvetu ocenimo vaš tattoo, razložimo potek odstranjevanja in
            podamo realno oceno glede na vaš primer.
          </p>

          <p className="text-body-inverse-sm text-white/50">
            Brezplačen posvet • individualna ocena • brez obveznosti
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="/posvet" variant="primary-dark">
              Naroči brezplačen posvet
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}