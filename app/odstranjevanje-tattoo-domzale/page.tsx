import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

export const metadata: Metadata = pageMetadata({
  path: "/odstranjevanje-tattoo-domzale",
  title: "Odstranjevanje tattoojev Domžale",
  description:
    "Lasersko odstranjevanje tattoojev s Pico laserjem v Domžalah. Postopen postopek, celjenje kože med tretmaji in realni rezultati odstranjevanja.",
});

export default function OdstranjevanjeTattooDomzalePage() {
  return (
    <main className="bg-canvas text-ink">
{/* HERO */}
<section className="relative overflow-hidden border-b border-ink/10 bg-hero text-ink">
  {/* CONTENT */}
  <Container className="relative z-10 section-hero">
    <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
      <p className="eyebrow-skin">Domžale</p>

      <h1 className="heading-display max-w-[20ch] text-3xl leading-[1.04] text-ink sm:text-4xl lg:text-[3.25rem]">
        Odstranjevanje tattoojev s Pico laserjem
      </h1>

      <p className="max-w-[40ch] text-lg leading-[1.6] text-ink-muted">
        Tattoo se odstranjuje postopno. Pico laser razbije pigment, telo
        pa ga skozi več tretmajev postopoma odstranjuje.
      </p>

      <div className="cta-spacing flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <Button href="/posvet" variant="primary-light">
          Pošlji povpraševanje
        </Button>

        <a
          href="/rezultati"
          className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
        >
          Poglej rezultate →
        </a>
      </div>
    </div>
  </Container>
</section>
      {/* PROCESS + LOCATION */}
      <section className="section-sm">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
            {/* LEFT */}
            <div className="header-stack max-w-[60ch]">
              <p className="eyebrow-muted">Postopek odstranjevanja</p>

              <h2 className="heading-section text-ink">
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
                Koža se po tretmaju celi 28–60 dni, zato se tretmaji
                izvajajo na 8 tednov.
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href="/pico-laser"
                  className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
                >
                  Preberi več o Pico laser tehnologiji →
                </a>

                <a
                  href="/odstranjevanje-tattoojev"
                  className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
                >
                  Preberi več o poteku odstranjevanja tattoojev →
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="image-block relative border border-neutral-200/60 bg-white">
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
      <section className="section-sm border-y border-neutral-200/70 bg-hero">
        <Container>
          <div className="section-gap">
            {/* TEXT */}
            <div className="header-stack max-w-2xl">
              <p className="eyebrow-muted">Naslednji korak</p>

              <h2 className="heading-section text-ink">
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
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700 sm:hidden"
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
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
              >
                Pogosta vprašanja →
              </a>

              <a
                href="/rezultati"
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
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