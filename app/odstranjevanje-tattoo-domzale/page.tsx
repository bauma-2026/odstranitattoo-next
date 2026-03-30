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
      <div className="flex max-w-2xl flex-col gap-5 sm:gap-6">
        <p className="eyebrow-dark">Domžale</p>

        <h1 className="heading-display max-w-[13ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
          Odstranjevanje tattoojev
          <br className="hidden sm:block" />
          v Domžalah
        </h1>

        <p className="text-body-inverse-lg max-w-[54ch]">
          V Domžalah izvajamo odstranjevanje tattoojev s Pico laser
          tehnologijo. Postopek poteka postopoma, zato sta pred začetkom
          pomembna realna ocena in jasno zastavljen načrt.
        </p>

        <div className="cta-spacing flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Button href="/posvet" variant="primary-dark">
            Naroči posvet
          </Button>

          <Button href="/rezultati" variant="secondary-dark">
            Poglej rezultate
          </Button>
        </div>
      </div>
    </Container>

    {/* EXTRA OVERLAY */}
    <div className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
    </div>
  </section>

  {/* PROCESS + LOCATION */}
  <section className="section-sm bg-white">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
        <div className="header-stack max-w-[60ch]">
          <p className="eyebrow-muted">Postopek</p>

          <h2 className="heading-section text-neutral-950">
            Pico laser za postopno odstranjevanje tattoojev
          </h2>

          <p className="text-body-lg">
            Pico laser razbije pigment tattooja na manjše delce, ki jih telo
            nato postopoma odstranjuje. Zato odstranjevanje ne poteka v enem
            obisku, ampak skozi več tretmajev.
          </p>

          <p className="text-body">
            Potek je vedno odvisen od pigmenta, globine nanosa, starosti
            tetovaže in odziva kože. Prav zato je pomembno, da se vsak primer
            oceni individualno.
          </p>

          <a
            href="/pico-laser"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
          >
            Preberi več o Pico laser tehnologiji →
          </a>
        </div>

        <div className="rounded-[28px] border border-skin-400/25 bg-skin-50/60 p-7 sm:p-8">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-skin-500/90">
              Lokacija
            </p>

            <h3 className="heading-tight text-2xl text-skin-900">
              Studio v Domžalah
            </h3>

            <p className="text-skin-body">
              Studio v Domžalah je enostavno dostopen tudi iz Ljubljane in
              okoliških krajev.
            </p>

            <p className="text-skin-body">
              Pred začetkom odstranitev vedno pregledamo tattoo, razložimo
              potek postopka in podamo realno oceno glede na vaš primer.
            </p>

            <a
              href="/kontakt"
              className="pt-1 text-sm font-medium text-skin-900 underline underline-offset-4 transition hover:text-skin-700"
            >
              Poglej kontakt in lokacijo →
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>

  {/* REAL EXPECTATIONS / INFO */}
  <section className="section-sm border-y border-skin-400/20 bg-skin-50/60">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
        <div className="header-stack max-w-[60ch]">
          <p className="eyebrow-muted">Realna pričakovanja</p>

          <h2 className="heading-section text-neutral-950">
            Vsak tattoo zahteva individualno oceno
          </h2>

          <p className="text-body-lg">
            Pred začetkom postopka ocenimo velikost tattooja, pigment, globino
            nanosa, starost tetovaže in stanje kože.
          </p>

          <p className="text-body">
            Na podlagi tega lahko razložimo, kako bo odstranjevanje potekalo,
            kaj lahko pričakujete in kateri naslednji korak je najbolj smiseln
            za vaš primer.
          </p>
        </div>

        <div className="image-block border border-neutral-200 bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              Pomembno
            </p>

            <h3 className="text-lg font-semibold text-neutral-950">
              Zakaj je posvet pomemben?
            </h3>

            <p className="text-body">
              Število tretmajev in hitrost odstranjevanja ni mogoče določiti
              samo po fotografiji ali velikosti tattooja. Na rezultat vplivajo
              tudi pigment, globina nanosa, starost tetovaže in odziv kože.
            </p>
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
            Razmišljate o odstranitvi tattooja?
          </h2>

          <p className="text-body-lg">
            Na posvetu pregledamo tattoo, razložimo potek odstranjevanja in
            podamo realno oceno glede na vaš primer.
          </p>

          <p className="text-body">
            Cilj posveta je, da dobite jasen naslednji korak in realna
            pričakovanja pred začetkom postopka.
          </p>
        </div>

        <div className="cta-spacing flex flex-wrap gap-4">
          <Button href="/posvet">Naroči posvet</Button>

          <Button href="/kontakt" variant="secondary-light">
            Kontakt
          </Button>
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