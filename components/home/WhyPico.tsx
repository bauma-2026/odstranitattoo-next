import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyPico() {
  return (
    <>
    <section className="section-sm border-t border-neutral-200/70 bg-white">
  <Container>
    <div className="section-gap-lg">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-top lg:gap-14">
        <div className="header-stack max-w-xl">
          <p className="eyebrow-muted">Tehnologija</p>

  

  <h2 className="heading-section text-neutral-950">
    Kaj Pico laser naredi drugače
  </h2>

  <p className="text-body-lg">
    Klasični laserji pigment bolj segrevajo, Pico laser pa ga razbije
    na manjše delce. Zato jih telo lažje postopoma odstrani.
  </p>

  <p className="text-body">
    To v praksi pomeni hitrejše bledenje tattooja, manjšo
    obremenitev kože in bolj nadzorovan potek odstranjevanja.
  </p>

  <div className="flex flex-col gap-2 pt-1">
    <a
      href="/odstranjevanje-tattoojev"
      className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
    >
      Preberi, kako poteka odstranjevanje →
    </a>

    <a
      href="/odstranjevanje-tetovaze"
      className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
    >
      Preberi več o odstranjevanju tetovaže z laserjem →
    </a>

    <a
      href="/odstranjevanje-tattoo-domzale"
      className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
    >
      Odstranjevanje tattoojev v Domžalah →
    </a>
  </div>
</div>

       <div className="image-block relative h-[420px] overflow-hidden border border-neutral-200/60 bg-white sm:h-[480px] lg:h-full lg:min-h-[560px]">
  <Image
    src="/images/pico/pico-laser-odstranjevanje-tetovaz-naprava.webp"
    alt="Pico laser naprava za odstranjevanje tetovaž"
    fill
    sizes="(min-width: 1024px) 50vw, 100vw"
    className="object-cover object-top scale-[1.08] -translate-y-[4%]"
  />
</div>
      </div>

      <div className="border-t border-neutral-200/70 pt-8 sm:pt-12">
  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">

    {/* ITEM */}
    <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="text-sm font-semibold text-neutral-400">01</span>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Pigment se lažje razbije
          </h3>
          <p className="text-body max-w-[32ch]">
            Pico laser deluje v izjemno kratkih impulzih, zato pigment
            razbije na manjše delce kot starejše tehnologije.
          </p>
        </div>
      </div>
    </div>

    {/* ITEM */}
    <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="text-sm font-semibold text-neutral-400">02</span>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Telo ga lažje odstranjuje
          </h3>
          <p className="text-body max-w-[32ch]">
            Manjši delci pomenijo, da telo med posameznimi tretmaji
            lažje postopoma odstranjuje pigment.
          </p>
        </div>
      </div>
    </div>

    {/* ITEM */}
    <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="text-sm font-semibold text-neutral-400">03</span>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Manj vpliva na kožo
          </h3>
          <p className="text-body max-w-[32ch]">
            Energija je bolj usmerjena v pigment in manj v okoliško
            tkivo, zato je postopek za kožo manj obremenjujoč.
          </p>
        </div>
      </div>
    </div>

    {/* ITEM */}
    <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5 sm:p-6">
      <div className="flex items-start gap-4">
        <span className="text-sm font-semibold text-neutral-400">04</span>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Boljši pri zahtevnih tattoojih
          </h3>
          <p className="text-body max-w-[32ch]">
            Pico laser omogoča bolj nadzorovan potek odstranjevanja tudi
            pri gostejšem pigmentu in zahtevnejših tattoo motivih.
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
    </div>
  </Container>
</section>

     <section className="section-sm border-t border-white/10 bg-neutral-950 text-white">
  <Container>
    <div className="section-gap">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center gap-5">
        <p className="text-sm text-white/45">
          Naslednji korak je individualna ocena vašega primera.
        </p>

        <p className="eyebrow-skin text-skin-600/80">
          Posvet
        </p>

        <h2 className="heading-section text-white">
          Kaj lahko realno pričakujete?
        </h2>

        <p className="text-body-inverse-lg max-w-[52ch] text-neutral-200">
          Na posvetu ocenimo vaš tattoo in vam jasno povemo, kakšen
          rezultat lahko pričakujete ter koliko tretmajev je smiselnih.
        </p>

        <p className="text-body-inverse-sm pt-1 text-white/55">
          Posvet je brezplačen • brez obveznosti
        </p>

        <div className="pt-3">
          <Button href="/posvet" variant="primary-dark">
            Preveri svoj primer
          </Button>
        </div>
      </div>
    </div>
  </Container>
</section>
    </>
  );
}