import Image from "next/image";
import Container from "@/components/layout/Container";

export default function HowItWorks() {
  return (
    <section className="section-sm border-t border-neutral-200/70 bg-white">
      <Container>
        <div className="section-gap">
          <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-12">
            {/* IMAGE */}
            <div className="image-block order-2 overflow-hidden border border-neutral-200/60 bg-white md:order-1">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/pico/pico-screen-1.webp"
                  alt="Pico laser zaslon in nastavitve"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-[58%_38%] md:object-[56%_36%]"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="header-stack order-1 max-w-xl md:order-2 md:pt-8">
              <p className="eyebrow-muted">Kaj se zgodi s tattoojem</p>

              <h2 className="heading-section max-w-[18ch] text-neutral-950">
                Kako deluje Pico laser odstranjevanje tattoojev
              </h2>

              <p className="text-body-lg max-w-[36ch]">
                Pico laser pigment razbije na manjše delce, ki jih telo
                postopoma odstranjuje.
              </p>

              <p className="text-body-lg max-w-[38ch]">
                Koža se mora med tretmaji zaceliti, zato odstranjevanje poteka
                postopno skozi več obiskov.
              </p>
            </div>
          </div>

        <div className="border-t border-neutral-200 pt-6 sm:pt-8">
         {/* MOBILE STACK */}
<div className="grid gap-3 lg:hidden">
  <div className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-neutral-200/70 bg-white px-4 py-4">
    <div className="pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
      01
    </div>

    <div className="flex flex-col gap-1.5">
      <h3 className="text-[1rem] font-semibold leading-tight text-neutral-950">
        Pigment se razbije
      </h3>

      <p className="text-[14px] leading-[1.5] text-neutral-600">
        Laser pigment razbije na manjše delce, ki jih telo postopoma
        odstranjuje.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-neutral-200/70 bg-white px-4 py-4">
    <div className="pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
      02
    </div>

    <div className="flex flex-col gap-1.5">
      <h3 className="text-[1rem] font-semibold leading-tight text-neutral-950">
        Koža se med tretmaji zaceli
      </h3>

      <p className="text-[14px] leading-[1.5] text-neutral-600">
        Koža se po tretmaju celi približno 28–60 dni, zato se tretmaji
        praviloma izvajajo v razmiku približno 8 tednov.
      </p>
    </div>
  </div>

  <div className="grid grid-cols-[44px_1fr] gap-4 rounded-2xl border border-neutral-200/70 bg-white px-4 py-4">
    <div className="pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
      03
    </div>

    <div className="flex flex-col gap-1.5">
      <h3 className="text-[1rem] font-semibold leading-tight text-neutral-950">
        Vsak tattoo reagira drugače
      </h3>

      <p className="text-[14px] leading-[1.5] text-neutral-600">
        Odziv pigmenta je odvisen od barve, globine nanosa, starosti tattooja
        in odziva kože.
      </p>
    </div>
  </div>
</div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:block">
              <div className="grid gap-10 sm:grid-cols-3">
                <div className="flex flex-col gap-2.5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                    01
                  </div>

                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    Pigment se razbije
                  </h3>

                  <p className="text-body-sm max-w-[26ch]">
                    Laser pigment razbije na manjše delce, ki jih telo postopoma
                    odstranjuje.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                    02
                  </div>

                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    Koža se med tretmaji zaceli
                  </h3>

                  <p className="text-body-sm max-w-[28ch]">
                    Koža se po tretmaju celi približno 28–60 dni, zato se
                    tretmaji izvajajo približno na 8 tednov.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                    03
                  </div>

                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    Vsak tattoo reagira drugače
                  </h3>

                  <p className="text-body-sm max-w-[28ch]">
                    Odziv je odvisen od pigmenta, globine nanosa, starosti
                    tattooja in odziva kože.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}