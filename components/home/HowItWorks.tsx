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
                postopoma odstrani.
              </p>

              <p className="text-body-lg max-w-[36ch]">
                Odstranjevanje zato poteka postopno skozi več tretmajev.
              </p>
            </div>
          </div>

          <div className="border-t border-neutral-200 pt-0 sm:pt-4">
            {/* MOBILE STACK */}
            <div className="flex flex-col gap-0 lg:hidden">
              <div className="flex flex-col gap-2 py-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                  01
                </div>

                <h3 className="text-[1.05rem] font-semibold leading-tight text-neutral-950">
                  Pigment se razbije
                </h3>

                <p className="text-[15px] leading-[1.55] text-neutral-600">
                  Pigment se razbije na manjše delce, ki jih telo postopoma
                  odstrani.
                </p>
              </div>

              <div className="flex flex-col gap-2 border-t border-neutral-200/70 py-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                  02
                </div>

                <h3 className="text-[1.05rem] font-semibold leading-tight text-neutral-950">
                  Proces poteka postopno
                </h3>

                <p className="text-[15px] leading-[1.55] text-neutral-600">
                  Telo med tretmaji postopoma odstranjuje razbite delce
                  pigmenta.
                </p>
              </div>

              <div className="flex flex-col gap-2 border-t border-neutral-200/70 py-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                  03
                </div>

                <h3 className="text-[1.05rem] font-semibold leading-tight text-neutral-950">
                  Vsak tattoo reagira drugače
                </h3>

                <p className="text-[15px] leading-[1.55] text-neutral-600">
                  Hitrost bledenja je odvisna od pigmenta, globine nanosa in
                  odziva telesa.
                </p>
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
                    Pigment se razbije na manjše delce, ki jih telo postopoma
                    odstrani.
                  </p>
                </div>

             <div className="flex flex-col gap-2.5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                    02
                  </div>

                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    Proces poteka postopno
                  </h3>

                  <p className="text-body-sm max-w-[26ch]">
                    Telo med tretmaji postopoma odstranjuje razbite delce
                    pigmenta.
                  </p>
                </div>

             <div className="flex flex-col gap-2.5 pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
                    03
                  </div>

                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    Vsak tattoo reagira drugače
                  </h3>

                  <p className="text-body-sm max-w-[26ch]">
                    Rezultat je odvisen od pigmenta, globine nanosa in odziva
                    kože.
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