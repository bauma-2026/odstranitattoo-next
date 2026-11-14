import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayer from "@/components/ui/pixels/PixelLayer";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSubtleDark,
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

export const metadata: Metadata = pageMetadata({
  path: "/rezultati",
  title: "Rezultati odstranjevanja tattoojev",
  description:
    "Realni primeri odstranjevanja tattoojev in permanentnih obrvi s Pico laserjem. Primeri prikazujejo postopno bledenje skozi več tretmajev.",
});

const results = [
  {
    before: "/images/results/2before.webp",
    after: "/images/results/2after1tretma.webp",
    title: "Odstranjevanje permanentnih obrvi",
    meta: "po 1 tretmaju",
    beforeAlt: "Permanentne obrvi pred laserskim odstranjevanjem",
    afterAlt: "Permanentne obrvi po enem tretmaju laserskega odstranjevanja",
    description:
      "Primer prikazuje začetni napredek pri odstranjevanju pigmenta na obrazu. Pri permanentnih obrveh je pomemben postopen pristop in dovolj časa za celjenje kože.",
  },
  {
    before: "/images/results/3before.webp",
    after: "/images/results/3after3tretma.webp",
    title: "Postopno bledenje večjega tattooja",
    meta: "po 3 tretmajih",
    beforeAlt: "Tattoo pred laserskim odstranjevanjem",
    afterAlt: "Tattoo po treh tretmajih laserskega odstranjevanja",
    description:
      "Pigment je po več tretmajih vidno svetlejši. Odziv se razvija postopno in je odvisen od pigmenta, globine nanosa in kože.",
  },
  {
    before: "/images/results/5before.webp",
    after: "/images/results/5after4tretma.webp",
    title: "Viden fade barvnega tattooja",
    meta: "po 4 tretmajih",
    beforeAlt: "Barvni tattoo pred laserskim odstranjevanjem",
    afterAlt: "Barvni tattoo po štirih tretmajih laserskega odstranjevanja",
    description:
      "Barvni pigment običajno zahteva več časa, vendar se lahko skozi več tretmajev doseže jasno vidno bledenje.",
  },
  {
    before: "/images/results/6before.webp",
    after: "/images/results/6after3tretma.webp",
    title: "Postopno odstranjevanje temnega pigmenta",
    meta: "po 3 tretmajih",
    beforeAlt: "Temnejši tattoo pred laserskim odstranjevanjem",
    afterAlt: "Temnejši tattoo po treh tretmajih laserskega odstranjevanja",
    description:
      "Temnejši pigment se postopoma razgrajuje, telo pa ga med posameznimi tretmaji odstranjuje skozi čas.",
  },
  {
    before: "/images/results/8before.webp",
    after: "/images/results/8after5tretma.webp",
    title: "Enakomerno bledenje večjega tattooja",
    meta: "po 5 tretmajih",
    beforeAlt: "Večji tattoo pred laserskim odstranjevanjem",
    afterAlt: "Večji tattoo po petih tretmajih laserskega odstranjevanja",
    description:
      "Primer prikazuje, kako se lahko večji tattoo skozi več tretmajev postopoma posvetli. Končni rezultat je odvisen od odziva kože in pigmenta.",
  },
];

export default function RezultatiPage() {
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
          <div className="header-stack max-w-2xl">
            <p className="eyebrow-dark">Pred / Po</p>

            <h1 className="heading-display max-w-[14ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
              Realni rezultati odstranjevanja
            </h1>

            <p className="text-body-inverse-lg max-w-[48ch]">
              Vsak tattoo se odziva drugače. Primeri prikazujejo postopno
              bledenje skozi več tretmajev.
            </p>

            <p className="text-body-inverse-sm max-w-[52ch]">
              Rezultati niso obljuba enakega izida za vsak primer, ampak realen
              prikaz napredka skozi čas.
            </p>

            <a
              href="/odstranjevanje-tattoojev"
              className="pt-1 text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
            >
              Preberi, kako poteka odstranjevanje →
            </a>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-sm bg-white">
        <Container>
          <div className="section-gap">
            <div className="header-stack max-w-3xl">
              <p className="eyebrow-muted">Pred / Po</p>

              <h2 className="heading-section text-neutral-950">
                Realni primeri odstranjevanja
              </h2>

              <p className="text-body-lg max-w-[56ch]">
                Spodaj so primeri, kako tattoo skozi več tretmajev postopoma
                bledi in kako se rezultat razvija skozi čas.
              </p>

              <p className="text-body-sm max-w-[52ch] text-neutral-600">
                Primeri niso obljuba enakega rezultata za vsak tattoo, ampak
                realen prikaz napredka glede na pigment, globino nanosa in odziv
                kože.
              </p>

              <a
                href="/faq"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi pogosta vprašanja o rezultatih →
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {results.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group overflow-hidden image-block border border-neutral-200/60 bg-white transition-all duration-300 hover:border-skin-400/40 hover:shadow-[0_10px_24px_rgba(var(--skin-rgb),0.12)]"
                >
                  <div className="grid grid-cols-2 gap-[2px] overflow-hidden bg-neutral-100">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.before}
                        alt={item.beforeAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 25vw, 50vw"
                      />

                      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur">
                        Pred
                      </div>
                    </div>

                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.after}
                        alt={item.afterAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 25vw, 50vw"
                      />

                      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-900 backdrop-blur">
                        Po
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block w-fit rounded-full bg-skin-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-600">
                          {item.meta}
                        </span>

                        <h3 className="text-lg font-semibold text-neutral-950">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-body-sm text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* VIDEO PROOF */}
      <section className="section-sm relative overflow-hidden border-b border-white/10 bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-neutral-950 via-black to-black" />

        <Container className="relative z-10">
          <div className="section-gap">
            <div className="header-stack max-w-3xl">
              <p className="eyebrow-dark">Video</p>

              <h2 className="heading-section text-white">
                Kako poteka odstranjevanje v praksi
              </h2>

              <p className="text-body-inverse-lg max-w-[56ch]">
                Posnetki prikazujejo dejanski potek tretmaja in odziv kože med
                odstranjevanjem.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="image-block overflow-hidden border border-white/10 bg-black">
                <video
                  src="/videos/odstranjevanje-tattoo-pico-laser-postopek-1.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="image-block overflow-hidden border border-white/10 bg-black">
                <video
                  src="/videos/odstranjevanje-tattoo-pico-laser-postopek-2.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="image-block overflow-hidden border border-white/10 bg-black">
                <video
                  src="/videos/odstranjevanje-tattoo-pico-laser-postopek-3.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <p className="text-body-inverse max-w-[52ch] text-white/65">
              Posnetki prikazujejo realen potek tretmaja. Rezultat je vedno
              odvisen od tattooja, pigmenta in odziva kože.
            </p>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
      </section>

      {/* CTA */}
      <section className="section-sm relative overflow-hidden bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black via-black to-neutral-950" />

        <div className="pointer-events-none absolute inset-0 z-[2]">
          <PixelLayer pixels={pixelsSubtleDark} />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <p className="eyebrow-dark">Kontakt</p>

              <h2 className="heading-section text-white">
                Imate vprašanje o rezultatih?
              </h2>

              <p className="text-body-inverse max-w-[44ch]">
                Pošljite povpraševanje ali fotografijo tattooja in dogovorili se
                bomo za naslednji korak.
              </p>

              <p className="text-body-sm text-white/60">
                Posvet 30 € • ob zakupu storitve se znesek odšteje
              </p>
            </div>

            <div className="cta-spacing flex flex-col items-center">
              <div className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-6">
                <Button href="/posvet" variant="primary-dark">
                  Pošlji povpraševanje
                </Button>

                <Button href="/#cenik" variant="secondary-dark">
                  Poglej cenik
                </Button>
              </div>

              <a
                href="/faq"
                className="mt-8 text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
              >
                Preberi pogosta vprašanja →
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}