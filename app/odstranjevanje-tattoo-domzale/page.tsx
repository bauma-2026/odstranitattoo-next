import type { Metadata } from "next";
import Image from "next/image";
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
    "Lasersko odstranjevanje tattoojev s Pico laserjem v Domžalah. Postopen postopek, celjenje kože med tretmaji in realni rezultati odstranjevanja.",
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

            <h1 className="heading-display max-w-[15ch] text-3xl leading-[1.04] text-white sm:text-4xl lg:max-w-[16ch] lg:text-[3.25rem]">
              Odstranjevanje tattoojev s Pico laserjem
            </h1>

            <p className="text-body-inverse-lg max-w-[40ch]">
              Tattoo se odstranjuje postopno. Pico laser razbije pigment, telo
              pa ga skozi več tretmajev postopoma odstranjuje.
            </p>

            <div className="cta-spacing flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="/posvet" variant="primary-dark">
                Pošlji povpraševanje
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

      {/* PROCESS + LOCATION */}
      <section className="section-sm bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
            {/* LEFT */}
            <div className="header-stack max-w-[60ch]">
              <p className="eyebrow-muted">Postopek odstranjevanja</p>

              <h2 className="heading-section text-neutral-950">
                Pico laser za odstranjevanje tattoojev
              </h2>

              <p className="text-body-lg">
                Pico laser odda zelo kratek impulz svetlobe, ki pigment tattooja
                razbije na manjše delce. Telo jih nato postopoma odstranjuje
                preko naravnih procesov.
              </p>

              <p className="text-body">
                Odstranjevanje zato ni enkraten poseg. Med tretmaji mora miniti
                dovolj časa, da se koža zaceli in da telo odstrani razgrajeni
                pigment.
              </p>

              <p className="text-body">
                Koža se po tretmaju celi približno 28–60 dni, zato se tretmaji
                izvajajo približno na 8 tednov.
              </p>

              <a
                href="/pico-laser"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi več o Pico laser tehnologiji →
              </a>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[24px] border border-neutral-200/70 bg-neutral-100">
              <Image
                src="/images/pico/pico-laser-process-01-desktop.webp"
                alt="Pico laser odstranjevanje tattooja med tretmajem"
                width={2560}
                height={1440}
                className="hidden aspect-[16/10] w-full object-cover lg:block"
              />

              <Image
                src="/images/pico/pico-laser-process-01-mobile.webp"
                alt="Pico laser odstranjevanje tattooja med tretmajem"
                width={1080}
                height={1350}
                className="block aspect-[4/5] w-full object-cover lg:hidden"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* NEXT STEP */}
      <section className="section-sm border-y border-neutral-200/70 bg-neutral-50 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent)]">
        <Container>
          <div className="section-gap">
            {/* TEXT */}
            <div className="header-stack max-w-2xl">
              <p className="eyebrow-muted">Naslednji korak</p>

              <h2 className="heading-section text-neutral-950">
                Vsak tattoo se odziva drugače
              </h2>

              <p className="text-body-lg">
                Na začetku lahko okvirno predvidimo potek odstranjevanja, bolj
                jasen odziv pigmenta pa se pokaže po nekaj tretmajih.
              </p>

              <p className="text-body">
                Na rezultat vplivajo barva pigmenta, globina nanosa, starost
                tattooja in odziv kože.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-4 sm:flex-wrap sm:pt-6">
              <Button href="/posvet">Pošlji povpraševanje</Button>

              {/* MOBILE LINK */}
              <a
                href="/kontakt"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700 sm:hidden"
              >
                Kontakt →
              </a>

              {/* DESKTOP BUTTON */}
              <div className="hidden sm:block">
                <Button href="/kontakt" variant="secondary-light">
                  Kontakt
                </Button>
              </div>
            </div>

            {/* SECONDARY LINKS */}
            <div className="flex flex-col gap-3 pt-4 sm:pt-6">
              <a
                href="/faq"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Pogosta vprašanja →
              </a>

              <a
                href="/rezultati"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Poglej rezultate odstranjevanja →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}