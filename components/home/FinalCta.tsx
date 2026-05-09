import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayer from "@/components/ui/pixels/PixelLayer";
import { pixelsSubtleDark } from "@/components/ui/pixels/pixels.config";

export default function FinalCta() {
  return (
<section className="section-sm relative overflow-hidden bg-neutral-950 text-white">
  <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black via-black to-neutral-950" />

  <div className="pointer-events-none absolute inset-0 z-[2]">
    <PixelLayer pixels={pixelsSubtleDark} />
  </div>

  <Container className="relative z-10">
    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
      <div className="flex flex-col items-center gap-4 sm:gap-5">
        <p className="eyebrow-dark text-white/50">Posvet</p>

        <h2 className="heading-section text-white">
          Preverite svoj primer.
        </h2>

        <p className="text-body-inverse-lg max-w-[38ch]">
          Pošljite povpraševanje in skupaj preverimo, kaj je pri vašem tattooju
          realno možno.
        </p>

        <p className="text-body-inverse-sm text-white/55">
          Posvet 30 € • ob zakupu storitve se znesek odšteje
        </p>
      </div>

      <div className="cta-spacing flex flex-wrap justify-center gap-4">
        <Button href="/posvet" variant="primary-dark">
          Pošlji povpraševanje
        </Button>
      </div>
    </div>
  </Container>
</section>
  );
}