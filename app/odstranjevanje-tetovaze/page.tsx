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
        <p className="eyebrow-dark">Odstranjevanje tetovaže</p>

        <h1 className="heading-display max-w-[13ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
          Kako poteka odstranjevanje
          <br className="hidden sm:block" />
          tetovaže z laserjem
        </h1>

        <p className="text-body-inverse-lg max-w-[54ch]">
          Pico laser razbije pigment v koži na manjše delce, ki jih telo
          postopoma odstrani. Zato je odstranjevanje vedno postopen in
          nadzorovan proces.
        </p>

        <p className="text-body-inverse-sm max-w-[44ch] text-white/60">
          Končni rezultat je odvisen od pigmenta, globine nanosa in odziva kože.
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
        {/* LEFT */}
        <div className="header-stack max-w-[60ch]">
          <h2 className="heading-section text-neutral-950">
            Pico laser za odstranjevanje tattoojev
          </h2>

          <p className="text-body-lg">
            Pico laser odda zelo kratek impulz svetlobe, ki pigment tattooja
            razbije na manjše delce. Telo jih nato postopoma odstrani preko
            naravnih procesov.
          </p>

          <p className="text-body">
            Odstranjevanje zato ni enkraten poseg, ampak proces, ki zahteva čas
            med posameznimi tretmaji.
          </p>

          <a
            href="/pico-laser"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
          >
            Preberi več o Pico laser tehnologiji →
          </a>
        </div>

        {/* RIGHT */}
        <div className="rounded-[28px] border border-skin-400/25 bg-skin-50/60 p-7 sm:p-8">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-skin-500/90">
              Lokacija
            </p>

            <h3 className="heading-tight text-2xl text-skin-900">
              Studio v Domžalah
            </h3>

            <p className="text-skin-body">
              Studio v Domžalah omogoča enostaven dostop iz Ljubljane in okolice.
            </p>

            <p className="text-skin-body">
              Pred začetkom odstranjevanja naredimo individualno oceno tattooja
              in podamo realen načrt postopka.
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

  {/* CONSULT CTA */}
  <section className="section-sm border-y border-skin-400/20 bg-skin-50/60">
    <Container>
      <div className="section-gap">
        <div className="header-stack max-w-2xl">
          <p className="eyebrow-muted">Posvet</p>

          <h2 className="heading-section text-neutral-950">
            Individualna ocena tattooja
          </h2>

          <p className="text-body-lg">
            Pred začetkom postopka pregledamo tattoo in ocenimo možnosti
            odstranjevanja glede na pigment, velikost in starost tetovaže.
          </p>

          <p className="text-body">
            Na posvetu dobite jasno oceno poteka odstranjevanja in naslednjih
            korakov glede na vaš primer.
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