import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

export const metadata: Metadata = {
  title: "Odstranjevanje tattoojev Domžale",
  description:
    "Lasersko odstranjevanje tattoojev s Pico laserjem v Domžalah. Individualna ocena tattooja in strokovni postopek.",
  alternates: {
    canonical: "https://odstranitattoo.si/odstranjevanje-tattoo-domzale",
  },
};

export default function OdstranjevanjeTattooDomzalePage() {
  return (
<main className="bg-white text-neutral-900">
  {/* HERO */}
  <section className="relative overflow-hidden bg-neutral-950 text-white">
  {/* BG */}
  <div className="pointer-events-none absolute inset-0 z-[1]">
    <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
  </div>

  {/* PIXELS */}
  <PixelLayerRandom
    basePixels={pixelsSectionDarkMobile}
    className="pointer-events-none absolute inset-0 z-[2] sm:hidden"
  />

  <PixelLayerRandom
    basePixels={pixelsSectionDarkTablet}
    className="pointer-events-none absolute inset-0 z-[2] hidden sm:block lg:hidden"
  />

  <PixelLayerRandom
    basePixels={pixelsSectionDarkDesktop}
    className="pointer-events-none absolute inset-0 z-[2] hidden lg:block"
  />

  {/* CONTENT */}
  <Container className="relative z-10 pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
    <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
      <p className="eyebrow-dark">Domžale</p>

      <h1 className="heading-display leading-[1.04] max-w-[16ch] lg:max-w-[17ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
        Odstranjevanje tattoojev
        <br className="hidden sm:block" />
        je postopen proces
      </h1>

      <p className="text-body-inverse-lg max-w-[44ch]">
        Laser razbije pigment, telo pa ga postopoma odstranjuje.
        Tattoo zato ne izgine naenkrat, ampak skozi več tretmajev bledi.
      </p>

      {/* MOBILE */}
      <p className="text-body-inverse-sm max-w-[44ch] sm:hidden">
        Realno oceno lahko podamo na posvetu.
      </p>

      {/* DESKTOP */}
      <p className="hidden text-body-inverse-sm max-w-[44ch] sm:block">
        Vsak primer je drugačen — rezultat je odvisen od pigmenta, globine in odziva kože.
        Realno oceno lahko podamo šele na posvetu.
      </p>

     <div className="cta-spacing flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
  <Button href="/posvet" variant="primary-dark">
    Naroči posvet
  </Button>

  <a
    href="/rezultati"
    className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
  >
    Poglej rezultate →
  </a>
</div>
    </div>
  </Container>

  {/* EXTRA OVERLAY */}
  <div className="pointer-events-none absolute inset-0 z-[1]">
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
  </div>
</section>

  {/* PROCESS */}
<section className="section-sm bg-white">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
      <div className="header-stack max-w-[60ch]">
        <p className="eyebrow-muted">Postopek</p>

        <h2 className="heading-section text-neutral-950">
          Pico laser za postopno odstranjevanje tattoojev
        </h2>

        <p className="text-body-lg">
          Pico laser razbije pigment tattooja na manjše delce, ki jih telo nato
          postopoma odstranjuje. Zato odstranjevanje ne poteka v enem obisku,
          ampak skozi več tretmajev.
        </p>

        <p className="text-body">
          Med posameznimi tretmaji mora miniti dovolj časa, da se koža umiri in
          da telo razgrajeni pigment postopoma odstrani.
        </p>

        {/* MOBILE SUMMARY */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-3 max-w-[34ch]">
            <p className="text-body text-neutral-900">
              Na rezultat vplivajo barva tattooja, starost, globina nanosa in odziv kože.
            </p>

            <p className="text-body-sm text-neutral-600">
              Zato lahko šele na podlagi vašega tattooja realno ocenimo, kaj je
              smiselno pričakovati.
            </p>
          </div>
        </div>

        <a
          href="/pico-laser"
          className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
        >
          Preberi več o Pico laser tehnologiji →
        </a>
      </div>

     {/* INFO BLOCK */}
<div className="hidden lg:block max-w-[36ch]">
  <div className="relative rounded-[20px] bg-neutral-50/80 p-6 ring-1 ring-neutral-200/60">
    <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-skin-400/70" />

    <div className="pl-4">
      <p className="eyebrow-muted text-neutral-500">
        Kaj dobite na posvetu
      </p>

      <ul className="mt-5 list-disc space-y-2 pl-5 text-body-sm text-neutral-700 marker:text-skin-500/70">
        <li className="leading-[1.5]">realno oceno vašega tattooja</li>
        <li className="leading-[1.5]">okvirno število tretmajev</li>
        <li className="leading-[1.5]">jasen potek odstranjevanja</li>
        <li className="leading-[1.5]">naslednji korak brez ugibanja</li>
      </ul>

      <p className="mt-6 text-body-sm text-neutral-500">
        Cilj posveta je, da dobite jasna pričakovanja in razumete, kaj je pri vašem primeru smiselno.
      </p>
    </div>
  </div>
</div>
    </div>
  </Container>
</section>

  {/* REAL EXPECTATIONS */}
<section className="section-sm border-y border-neutral-200/70 bg-neutral-50/80">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
      
      {/* LEFT */}
      <div className="header-stack max-w-[60ch]">
        <p className="eyebrow-muted">Realna pričakovanja</p>

        <h2 className="heading-section text-neutral-950">
          Vsak tattoo zahteva individualno oceno
        </h2>

        <p className="text-body-lg">
          Pred začetkom ocenimo pigment, globino nanosa, starost tattooja in stanje kože.
        </p>

        <p className="text-body">
          Na podlagi tega vam jasno povemo, kaj lahko pričakujete in kako bo potekalo odstranjevanje.
        </p>

        <p className="text-body">
          Pri nekaterih je cilj popolna odstranitev, pri drugih postopna posvetlitev za cover-up. Zato je pomembno, da že na začetku razumete, kaj je pri vašem primeru realno in smiselno.
        </p>

        {/* MOBILE SUMMARY */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-3 max-w-[34ch]">
            <p className="text-body text-neutral-900">
              Število tretmajev ni mogoče določiti samo po fotografiji ali velikosti tattooja.
            </p>

            <p className="text-body-sm text-neutral-600">
              Zato je realna ocena pred začetkom ključna.
            </p>
          </div>
        </div>
      </div>

     {/* EDITORIAL NOTE */}
<div className="hidden lg:block max-w-[38ch]">
  <div className="rounded-[20px] border border-neutral-200/70 bg-white p-7">
    <div className="flex flex-col gap-4">
      <p className="eyebrow-muted text-neutral-500">
        Pomembno
      </p>

      <h3 className="text-[28px] font-semibold leading-[1.12] tracking-tight text-neutral-950">
        Popolna odstranitev
        <br />
        ni vedno edini cilj
      </h3>

      <p className="text-body text-neutral-700">
        Pri nekaterih je najbolj smiseln postopen fade, da se tattoo pripravi na cover-up.
      </p>

      <p className="text-body-sm text-neutral-500">
        Zato na posvetu ne ocenimo samo, koliko se tattoo lahko odstrani, ampak tudi katera smer je za vaš primer najbolj smiselna.
      </p>
    </div>
  </div>
</div>

    </div>
  </Container>
</section>

  {/* CTA LIGHT */}
<section className="section-tight bg-white">
  <Container>
    <div className="section-gap">
      <div className="header-stack max-w-3xl">
        <p className="eyebrow-muted">Posvet</p>

        <h2 className="heading-section text-neutral-950">
          Preverite svoj primer
        </h2>

       <p className="text-body-lg">
  Na posvetu pregledamo tattoo
  <br />
  in vam jasno povemo, kaj je smiselno pričakovati.
</p>

<p className="text-body">
  Dobite realno oceno,
  <br />
  okviren potek odstranjevanja in jasen naslednji korak.
</p>
      </div>

      <div className="cta-spacing flex flex-wrap gap-4">
        <Button href="/posvet">Preveri svoj primer</Button>
      </div>

      <a
        href="/faq"
        className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
      >
        Preberi pogosta vprašanja →
      </a>
    </div>
  </Container>
</section>
</main>
  );
}