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
    <p className="eyebrow-muted">Kako poteka</p>

    <h2 className="heading-section max-w-[16ch] text-neutral-950">
      Kaj pomeni postopen proces odstranjevanja
    </h2>

    <p className="text-body-lg max-w-[36ch]">
      Odstranjevanje tattooja ne poteka naenkrat. Po vsakem tretmaju
      telo postopoma odstranjuje razbite delce pigmenta, zato se
      rezultat izboljšuje skozi čas.
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

<div className="border-t border-neutral-200 pt-6 sm:pt-12">
  <div className="grid gap-0 sm:grid-cols-3 sm:gap-10 lg:gap-12">

    {/* 01 */}
    <div className="flex flex-col gap-2 border-b border-neutral-200/70 pb-5 sm:border-b-0 sm:pb-0 sm:gap-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
        01
      </div>

      <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
        Rezultat se gradi postopoma
      </h3>

      <p className="text-body-sm max-w-[28ch]">
        Tattoo običajno ne zbledi naenkrat, ampak postopoma iz
        tretmaja v tretma.
      </p>
    </div>

    {/* 02 */}
    <div className="flex flex-col gap-2 border-b border-neutral-200/70 py-5 sm:border-b-0 sm:py-0 sm:gap-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
        02
      </div>

      <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
        Potrebnih je več obiskov
      </h3>

      <p className="text-body-sm max-w-[28ch]">
        Med tretmaji mora miniti dovolj časa, da se koža umiri in
        telo odstrani del pigmenta.
      </p>
    </div>

    {/* 03 */}
    <div className="flex flex-col gap-2 pt-5 sm:pt-0 sm:gap-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-skin-500/70">
        03
      </div>

      <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
        Vsak tattoo je drugačen
      </h3>

      <p className="text-body-sm max-w-[28ch]">
        Končni rezultat je odvisen od pigmenta, globine nanosa,
        starosti tattooja in odziva kože.
      </p>
    </div>
  </div>

  <p className="mt-5 max-w-[34ch] text-body-sm text-neutral-600 sm:mt-10 sm:max-w-xl sm:text-neutral-500">
    Zato je pomembna realna ocena — na posvetu lahko glede na vaš
    primer povemo, kaj je smiselno pričakovati.
  </p>
</div>
          </div>
        </Container>
      </section>

     <section className="border-t border-neutral-200/60 bg-transparent">
  <Container>
    <div className="py-12 sm:py-14">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center gap-5">

        <p className="text-sm text-neutral-500">
          Naslednji korak je individualna ocena vašega primera.
        </p>

       <p className="eyebrow-skin text-skin-600/80">
          Posvet
        </p>
<h2 className="heading-section text-neutral-950">
  Kaj lahko pričakujete?
</h2>

        <p className="text-body-lg max-w-[42ch] text-neutral-600">
          Na posvetu ocenimo vaš tattoo in vam povemo, kakšen rezultat
          lahko realno pričakujete.
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