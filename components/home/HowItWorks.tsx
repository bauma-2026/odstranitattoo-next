import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function HowItWorks() {
  return (
    <>
      <section className="section-sm border-t border-neutral-200/70 bg-white">
        <Container>
          <div className="section-gap">
            <div className="grid gap-6 md:grid-cols-2 md:items-start md:gap-12">
              <div className="header-stack max-w-xl">
                <p className="eyebrow-muted">Kaj se zgodi s tattoojem</p>

                <h2 className="heading-section max-w-[22ch] text-neutral-950">
                  Kako deluje Pico laser odstranjevanje tattoojev
                </h2>

                <p className="text-body-lg max-w-[36ch]">
                  Pico laser deluje drugače kot starejši laserji. Ne temelji na
                  segrevanju kože, ampak na izjemno hitrih impulzih, ki
                  razbijejo pigment.
                </p>
              </div>

              <div className="image-block overflow-hidden border border-neutral-200/60 bg-white">
                <Image
                  src="/images/pico/pico-screen.webp"
                  alt="Pico laser zaslon in nastavitve"
                  width={800}
                  height={800}
                  className="block h-full w-full scale-[1.22] object-cover object-[68%_55%]"
                />
              </div>
            </div>
<div className="border-t border-neutral-200 pt-6 sm:pt-12">
{/* MOBILE STACK */}
<div className="mb-8 flex flex-col gap-6 lg:hidden">
  {/* 01 */}
  <div className="flex flex-col gap-2">
    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
      01
    </div>

    <h3 className="text-base font-semibold text-neutral-950">
      Pigment se razbije
    </h3>

    <p className="text-body-sm text-neutral-600">
      Pico laser pigment razbije na zelo majhne delce brez prekomerne toplote.
    </p>
  </div>

  {/* 02 */}
  <div className="flex flex-col gap-2 border-t border-neutral-200/70 pt-6">
    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
      02
    </div>

    <h3 className="text-base font-semibold text-neutral-950">
      Proces poteka postopno
    </h3>

    <p className="text-body-sm text-neutral-600">
      Telo potrebuje čas, da med tretmaji postopoma odstrani razbite delce pigmenta.
    </p>
  </div>

  {/* 03 */}
  <div className="flex flex-col gap-2 border-t border-neutral-200/70 pt-6">
    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
      03
    </div>

    <h3 className="text-base font-semibold text-neutral-950">
      Vsak tattoo reagira drugače
    </h3>

    <p className="text-body-sm text-neutral-600">
      Hitrost bledenja je odvisna od pigmenta, globine nanosa in odziva telesa.
    </p>
  </div>
</div>

{/* DESKTOP GRID */}
<div className="hidden lg:block">
  <div className="grid gap-12 sm:grid-cols-3">
    {/* 01 */}
    <div className="flex flex-col gap-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
        01
      </div>

      <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
        Pigment se razbije
      </h3>

      <p className="text-body-sm max-w-[28ch]">
        Pico laser ustvari zelo hiter impulz, ki pigment razbije na majhne delce.
      </p>

      <ul className="mt-1 list-disc pl-3 space-y-1.5 text-body-sm text-neutral-600 marker:text-skin-500/60">
        <li>deluje neposredno na pigment</li>
        <li>brez prekomerne toplote</li>
      </ul>
    </div>

    {/* 02 */}
    <div className="flex flex-col gap-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
        02
      </div>

      <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
        Proces poteka postopno
      </h3>

      <p className="text-body-sm max-w-[28ch]">
        Telo potrebuje čas, da med posameznimi tretmaji postopoma odstrani razbite delce pigmenta.
      </p>

      <ul className="mt-1 list-disc pl-3 space-y-1.5 text-body-sm text-neutral-600 marker:text-skin-500/60">
        <li>zato je potrebnih več obiskov</li>
        <li>med tretmaji poteka naravno čiščenje pigmenta</li>
      </ul>
    </div>

    {/* 03 */}
    <div className="flex flex-col gap-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
        03
      </div>

      <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
        Vsak tattoo reagira drugače
      </h3>

      <p className="text-body-sm max-w-[28ch]">
        Hitrost bledenja je odvisna od pigmenta, globine nanosa in odziva telesa.
      </p>

      <ul className="mt-1 list-disc pl-3 space-y-1.5 text-body-sm text-neutral-600 marker:text-skin-500/60">
        <li>temni pigmenti pogosto bledijo hitreje</li>
        <li>barvni in gostejši tattooji potrebujejo več časa</li>
      </ul>
    </div>
  </div>  </div>  </div>


          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200/60 bg-transparent">
        <Container>
          <div className="py-12 sm:py-14">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
              <p className="text-sm text-neutral-500">Naslednji korak</p>

              <p className="eyebrow-skin text-skin-600/80">Posvet</p>

              <h2 className="heading-section text-neutral-950">
                Kaj lahko pričakujete?
              </h2>

              <p className="text-body-lg max-w-[42ch] text-neutral-600">
                Ocenimo vaš tattoo in vam jasno povemo, kakšen rezultat lahko
                realno pričakujete.
              </p>

              <div className="flex flex-wrap justify-center gap-3 pt-3">
                <Button href="/posvet" variant="primary-light">
                  Naroči posvet
                </Button>

                <Button href="/rezultati" variant="secondary-light">
                  Poglej rezultate
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}