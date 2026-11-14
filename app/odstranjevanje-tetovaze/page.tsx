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
  path: "/odstranjevanje-tetovaze",
  title: "Odstranjevanje tetovaže z laserjem",
  description:
    "Odstranjevanje tetovaže z laserjem je postopen proces. Pico laser razbije pigment, telo pa ga skozi več tretmajev postopoma odstranjuje.",
});

const factors = [
  {
    title: "Barva pigmenta",
    text: "Temnejši pigmenti se običajno lažje odstranjujejo, medtem ko so barvne tetovaže pogosto zahtevnejše.",
  },
  {
    title: "Globina pigmenta",
    text: "Če je pigment globlje v koži ali zelo nasičen, je za postopno bledenje običajno potrebnih več tretmajev.",
  },
  {
    title: "Starost tetovaže",
    text: "Starejše tetovaže so pogosto že delno zbledele, zato se lahko odzovejo drugače kot novejše.",
  },
  {
    title: "Odziv kože",
    text: "Vsaka koža se odziva drugače. Zato se bolj jasen odziv pigmenta pokaže šele skozi postopek.",
  },
];

export default function OdstranjevanjeTetovazePage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

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

        <Container className="relative z-10 pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16">
          <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
            <p className="eyebrow-dark">Odstranjevanje tetovaže</p>

            <h1 className="heading-display max-w-[15ch] text-3xl leading-[1.04] text-white sm:text-4xl lg:max-w-[16ch] lg:text-[3.25rem]">
              Odstranjevanje tetovaže je postopen proces
            </h1>

            <p className="text-body-inverse-lg max-w-[40ch]">
              Pico laser razbije pigment, telo pa ga skozi več tretmajev
              postopoma odstranjuje.
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

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-sm bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
            <div className="header-stack max-w-[60ch]">
              <p className="eyebrow-muted">Kako poteka</p>

              <h2 className="heading-section text-neutral-950">
                Kaj se zgodi s pigmentom
              </h2>

              <p className="text-body-lg">
                Lasersko odstranjevanje tetovaže deluje tako, da Pico laser
                pigment razbije na manjše delce. Telo jih nato postopoma
                odstranjuje preko naravnih procesov.
              </p>

              <p className="text-body">
                Postopek ni enkraten. Tetovaža bledi postopno, skozi več
                tretmajev, odziv pa je odvisen od pigmenta, kože in globine
                nanosa.
              </p>

              <p className="text-body">
                Med posameznimi tretmaji mora miniti dovolj časa, da se koža
                zaceli in da telo odstrani razgrajeni pigment. Koža se po
                tretmaju celi približno 28–60 dni, zato se tretmaji izvajajo
                približno na 8 tednov.
              </p>

              <a
                href="/pico-laser"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi več o Pico laser tehnologiji →
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-neutral-200/70 bg-neutral-100">
              <Image
                src="/images/pico/pico-laser-process-01-desktop.webp"
                alt="Pico laser odstranjevanje tetovaže med tretmajem"
                width={2560}
                height={1440}
                className="hidden aspect-[16/10] w-full object-cover lg:block"
              />

              <Image
                src="/images/pico/pico-laser-process-01-mobile.webp"
                alt="Pico laser odstranjevanje tetovaže med tretmajem"
                width={1080}
                height={1350}
                className="block aspect-[4/5] w-full object-cover lg:hidden"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FACTORS */}
      <section className="section-sm border-y border-neutral-200/70 bg-neutral-50/80">
        <Container>
          <div className="section-gap">
            <div className="header-stack max-w-2xl">
              <p className="eyebrow-muted">Kaj vpliva na rezultat</p>

              <h2 className="heading-section text-neutral-950">
                Od česa je odvisno odstranjevanje tetovaže
              </h2>

              <p className="text-body-lg">
                Rezultat ni enak pri vsaki tetovaži. Na potek vpliva več
                dejavnikov, zato se odziv pigmenta pokaže skozi čas.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-10">
              {factors.map((item, index) => (
                <div
                  key={item.title}
                  className="relative rounded-[24px] border border-neutral-200/70 bg-white p-5 sm:p-6"
                >
                  <div className="mb-3 text-xs font-semibold tracking-[0.14em] text-skin-500/70">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-base font-semibold text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-body-sm text-neutral-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/rezultati"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
            >
              Poglej realne rezultate odstranjevanja →
            </a>
          </div>
        </Container>
      </section>

      {/* EXPECTATIONS */}
      <section className="section-tight bg-white">
        <Container>
          <div className="section-gap">
            <div className="header-stack max-w-3xl">
              <p className="eyebrow-muted">Realna pričakovanja</p>

              <h2 className="heading-section text-neutral-950">
                Ali se tetovaža lahko popolnoma odstrani?
              </h2>

              <p className="text-body-lg">
                Večino tetovaž je možno uspešno odstraniti v celoti, vendar je
                potek odvisen od pigmenta, barve, globine, starosti tetovaže in
                odziva kože.
              </p>

              <p className="text-body">
                Pri nekaterih je cilj popolna odstranitev, pri drugih pa
                postopno posvetlitev za cover-up. Bolj jasen odziv pigmenta se
                pokaže po nekaj tretmajih.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 sm:pt-4">
              <Button href="/posvet">Pošlji povpraševanje</Button>

              <Button href="/rezultati" variant="secondary-light">
                Poglej rezultate
              </Button>
            </div>

            <a
              href="/faq"
              className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
            >
              Poglej pogosta vprašanja →
            </a>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-sm relative overflow-hidden bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black via-black to-neutral-950" />

        <Container className="relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <p className="eyebrow-dark">Kontakt</p>

              <h2 className="heading-section text-white">
                Imate vprašanje o odstranjevanju?
              </h2>

              <p className="text-body-inverse max-w-[44ch]">
                Pošljite povpraševanje ali fotografijo tetovaže in dogovorili
                se bomo za naslednji korak.
              </p>

              <p className="text-body-sm text-white/60">
                Posvet 30 € • ob zakupu storitve se znesek odšteje
              </p>
            </div>

            <div className="cta-spacing flex flex-col items-center gap-4">
              <Button href="/posvet" variant="primary-dark">
                Pošlji povpraševanje
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}