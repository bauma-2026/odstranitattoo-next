import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HowItWorks() {
  return (
    <section className="section-sm border-t border-skin-400/30 bg-white">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
            <div className="flex max-w-xl flex-col gap-4 sm:gap-5">
              <p className="eyebrow-muted">Kako deluje</p>

              <h2 className="heading-section max-w-[16ch] text-neutral-950">
                Kako se tattoo postopoma odstrani
              </h2>

              <p className="text-body-lg max-w-[34ch]">
                Po tretmaju telo začne postopoma odstranjevati razbite delce
                pigmenta, zato tattoo iz tretmaja v tretma bledi.
              </p>
            </div>

           <div className="overflow-hidden image-block border border-neutral-200/60 bg-white">
  <Image
    src="/images/pico/pico-screen.webp"
    alt="Pico laser zaslon in nastavitve"
    width={800}
    height={800}
    className="block w-full object-cover object-center scale-[1.04]"
  />
</div>
          </div>

          <div className="border-t border-neutral-200 pt-12">
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-12">
              <div className="flex flex-col gap-3">
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

              <div className="flex flex-col gap-3">
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

              <div className="flex flex-col gap-3">
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

            <p className="text-body-sm mt-10 max-w-xl text-neutral-500">
              Proces je postopen — telo potrebuje čas, da odstrani pigment.
            </p>
          </div>

         {/* CTA */}
<div className="mt-10 flex justify-center">
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