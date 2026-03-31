import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyPico() {
  return (
    <>
   <section className="section-sm border-t border-neutral-200/70 bg-white">
  <Container>
    <div className="section-gap-lg">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
        <div className="header-stack max-w-xl">
          <p className="eyebrow-muted">Tehnologija</p>

          <h2 className="heading-section text-neutral-950">
            Zakaj tehnologija vpliva na rezultat
          </h2>

          <p className="text-body-lg">
            Pri odstranjevanju tattoojev ni pomembno samo, da se pigment razbije — pomembno je tudi, kako natančno se to zgodi.
          </p>

          <p className="text-body">
            To vpliva na to, kako postopno telo odstranjuje pigment, kako se koža odziva in kako predvidljiv je proces skozi več tretmajev.
          </p>

         <p className="text-body pt-1">
  Če vas zanima celoten potek, lahko preberete{" "}
  <a
    href="/odstranjevanje-tattoojev"
    className="font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
  >
    kako poteka odstranjevanje
  </a>
  , podrobneje pa tudi{" "}
  <a
    href="/odstranjevanje-tetovaze"
    className="font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
  >
    odstranjevanje tetovaže z laserjem
  </a>
  {" "}ali preverite{" "}
  <a
    href="/odstranjevanje-tattoo-domzale"
    className="font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
  >
    odstranjevanje tattoojev v Domžalah
  </a>
  .
</p>
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

      {/* SUMMARY + CARDS */}
      <div className="border-t border-neutral-200/70 pt-8 sm:pt-12">
        
        {/* MOBILE SUMMARY */}
        <div className="lg:hidden">
  <div className="flex flex-col gap-3">
    <p className="text-body text-neutral-900">
      Pico laser omogoča bolj natančen in bolj predvidljiv potek odstranjevanja.
    </p>

    <ul className="list-disc pl-4 space-y-2 text-body-sm text-neutral-700 marker:text-skin-500/70">
      <li>tattoo bledi bolj enakomerno skozi čas</li>
      <li>koža je med postopkom manj obremenjena</li>
      <li>pri zahtevnejših tattoojih omogoča več kontrole</li>
    </ul>
  </div>
</div>

       {/* DESKTOP CARDS */}
<div className="hidden lg:block">
  <div className="grid gap-6 sm:grid-cols-2">
    {/* ITEM 01 */}
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
          01
        </span>

        <h3 className="text-base font-semibold text-neutral-950">
          Predvidljivost
        </h3>

        <p className="text-body max-w-[36ch]">
          Pico laser pigment razbije na manjše delce, kar omogoča bolj
          postopen in nadzorovan proces odstranjevanja.
        </p>
      </div>
    </div>

    {/* ITEM 02 */}
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
          02
        </span>

        <h3 className="text-base font-semibold text-neutral-950">
          Bolj enakomerno bledenje skozi čas
        </h3>

        <p className="text-body max-w-[36ch]">
          Pigment se razbija bolj dosledno, zato tattoo skozi tretmaje
          bledi bolj enakomerno — brez nepredvidljivih razlik.
        </p>
      </div>
    </div>

    {/* ITEM 03 */}
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
          03
        </span>

        <h3 className="text-base font-semibold text-neutral-950">
          Manj tveganja za kožo
        </h3>

        <p className="text-body max-w-[36ch]">
          Energija je bolj usmerjena v pigment, zato je manj vpliva na
          okolico — kar pomeni manjšo obremenitev kože.
        </p>
      </div>
    </div>

    {/* ITEM 04 */}
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
          04
        </span>

        <h3 className="text-base font-semibold text-neutral-950">
          Več kontrole pri zahtevnih tattoojih
        </h3>

        <p className="text-body max-w-[36ch]">
          Pri gostejšem ali barvnem pigmentu omogoča bolj natančen in
          predvidljiv potek odstranjevanja.
        </p>
      </div>
    </div>
  </div>
</div></div></div>
  </Container>
</section>

     <section className="section-sm border-t border-white/10 bg-neutral-950 text-white">
<Container>
  <div className="section-gap">
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center gap-5">
      <p className="text-sm text-white/45">
        Kako se to odrazi pri vašem tattooju?
      </p>

      <p className="eyebrow-skin text-skin-600/80">
        Posvet
      </p>

      <h2 className="heading-section text-white">
        Kaj to pomeni za vaš primer?
      </h2>

      <p className="text-body-inverse-lg max-w-[52ch] text-neutral-200">
        Tehnologija vpliva na potek odstranjevanja, ampak rezultat je vedno
        odvisen od konkretnega tattooja. Na podlagi pigmenta, globine in
        stanja kože vam jasno povemo, kaj je realno dosegljivo.
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