import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HowItWorks() {
  return (
<section className="section-sm border-t border-skin-400/30 bg-white">
  <Container>
    <div className="section-gap">
      <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
        <div className="header-stack max-w-xl">
          <p className="eyebrow-muted">Kako deluje</p>

          <h2 className="heading-section max-w-[16ch] text-neutral-950">
            Kako se tattoo postopoma odstrani
          </h2>

          <p className="text-body-lg max-w-[34ch]">
            Po tretmaju telo začne postopoma odstranjevati razbite delce
            pigmenta, zato tattoo iz tretmaja v tretma bledi.
          </p>
        </div>

        <div className="image-block overflow-hidden border border-neutral-200/60 bg-white">
          <Image
            src="/images/pico/pico-screen.webp"
            alt="Pico laser zaslon in nastavitve"
            width={800}
            height={800}
            className="block w-full scale-[1.04] object-cover object-center"
          />
        </div>
      </div>

      <div className="border-t border-neutral-200 pt-8 sm:pt-12">
        <div className="grid gap-0 sm:grid-cols-3 sm:gap-10 lg:gap-12">
          <div className="flex flex-col gap-3 border-b border-neutral-200/70 pb-7 sm:border-b-0 sm:pb-0 sm:gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-skin-500/70">
              01
            </div>

            <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
              Razbijanje pigmenta
            </h3>

            <p className="text-body-sm max-w-[28ch]">
              Laser razbije pigment na mikroskopske delce.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-b border-neutral-200/70 py-7 sm:border-b-0 sm:py-0 sm:gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-skin-500/70">
              02
            </div>

            <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
              Naravno odstranjevanje
            </h3>

            <p className="text-body-sm max-w-[28ch]">
              Telo začne odstranjevati razbite delce preko limfnega sistema.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-7 sm:pt-0 sm:gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-skin-500/70">
              03
            </div>

            <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
              Postopno bledenje
            </h3>

            <p className="text-body-sm max-w-[28ch]">
              Tattoo z vsakim tretmajem postaja svetlejši.
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-[30ch] text-body-sm text-neutral-600 sm:mt-10 sm:max-w-xl sm:text-neutral-500">
          Proces je postopen — telo potrebuje čas, da odstrani pigment.
        </p>
      </div>

      {/* CTA */}
      <div className="cta-spacing flex justify-center">
        <div
          className="
            w-full max-w-xl
            rounded-[20px]
            border border-neutral-300
            border-skin-400/30
            px-6 py-7 text-center
            sm:px-8 sm:py-8
          "
        >
          <div className="flex flex-col items-center gap-3">
            <p className="text-base font-medium text-neutral-900 sm:text-lg">
              Želite vedeti, kako bo potekalo pri vas?
            </p>

            <p className="text-body-sm mx-auto max-w-md text-neutral-600">
              Na posvetu pregledamo tattoo in podamo realno oceno.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button href="/posvet" variant="primary-light">
                Naroči posvet
              </Button>

              <Button href="/odstranjevanje-tattoojev" variant="secondary-light">
                Poglej postopek
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
  );
}