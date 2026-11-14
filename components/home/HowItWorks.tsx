import Image from "next/image";
import Container from "@/components/layout/Container";

export default function HowItWorks() {
  return (
    <section className="section-sm border-t border-neutral-200/70">
      <Container>
        <div className="section-gap">
          <div className="grid gap-8 lg:flex lg:flex-row lg:items-start lg:gap-x-12">
            {/* IMAGE */}
            <div className="image-block order-2 overflow-hidden border border-neutral-200/60 bg-white lg:order-first lg:flex-1">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/pico/pico-screen-1.webp"
                  alt="Pico laser zaslon in nastavitve"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[58%_50%] lg:object-[56%_48%]"
                />
              </div>
            </div>

            {/* TEXT: contents below lg so its children interleave with the image via order; a real flex column at lg+ */}
            <div className="contents lg:flex lg:flex-1 lg:flex-col lg:max-w-xl lg:gap-5">
              {/* TEXT TOP: eyebrow + heading + first paragraph */}
              <div className="header-stack order-1 max-w-xl">
                <p className="eyebrow-muted">Kaj se zgodi s tattoojem</p>

                <h2 className="heading-section max-w-[22ch] text-neutral-950">
                  Kako deluje Pico laser odstranjevanje tattoojev
                </h2>

                <p className="text-body-lg max-w-[36ch]">
                  Pico laser pigment razbije na manjše delce, ki jih telo
                  postopoma odstranjuje.
                </p>
              </div>

              {/* TEXT BOTTOM: second paragraph */}
              <p className="text-body-lg order-3 max-w-[38ch]">
                Koža se mora med tretmaji zaceliti, zato odstranjevanje poteka
                postopno skozi več obiskov.
              </p>
            </div>
          </div>

        <div className="border-t border-neutral-200 pt-6 sm:pt-8">
         {/* MOBILE STACK */}
<ol className="grid list-none divide-y divide-skin-300/50 overflow-hidden rounded-2xl border border-skin-300/60 bg-skin-50 lg:hidden">
  <li className="grid grid-cols-[44px_1fr] items-start gap-4 px-5 py-5">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-skin-200 text-[13px] font-bold tabular-nums text-skin-700">
      01
    </span>

    <div className="flex flex-col gap-1.5">
      <h3 className="text-[1rem] font-semibold leading-tight text-neutral-950">
        Pigment se razbije
      </h3>

      <p className="text-[14px] leading-[1.5] text-neutral-600">
        Laser pigment razbije na manjše delce, ki jih telo postopoma
        odstranjuje.
      </p>
    </div>
  </li>

  <li className="grid grid-cols-[44px_1fr] items-start gap-4 px-5 py-5">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-skin-200 text-[13px] font-bold tabular-nums text-skin-700">
      02
    </span>

    <div className="flex flex-col gap-1.5">
      <h3 className="text-[1rem] font-semibold leading-tight text-neutral-950">
        Koža se med tretmaji zaceli
      </h3>

      <p className="text-[14px] leading-[1.5] text-neutral-600">
        Koža se po tretmaju celi 28–60 dni, zato se tretmaji izvajajo v razmiku 8 tednov.
      </p>
    </div>
  </li>

  <li className="grid grid-cols-[44px_1fr] items-start gap-4 px-5 py-5">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-skin-200 text-[13px] font-bold tabular-nums text-skin-700">
      03
    </span>

    <div className="flex flex-col gap-1.5">
      <h3 className="text-[1rem] font-semibold leading-tight text-neutral-950">
        Vsak tattoo reagira drugače
      </h3>

      <p className="text-[14px] leading-[1.5] text-neutral-600">
        Odziv pigmenta je odvisen od barve, globine nanosa, starosti tattooja
        in odziva kože.
      </p>
    </div>
  </li>
</ol>

            {/* DESKTOP GRID */}
            <div className="hidden lg:block">
              <div className="grid gap-10 sm:grid-cols-3">
                <div className="flex flex-col gap-2.5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-700">
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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-700">
                    02
                  </div>

                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    Koža se med tretmaji zaceli
                  </h3>

                  <p className="text-body-sm max-w-[28ch]">
                    Koža se po tretmaju celi 28–60 dni, zato se
                    tretmaji izvajajo na 8 tednov.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-700">
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