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
  path: "/rezultati",
  title: "Rezultati odstranjevanja tattoojev",
  description:
    "Realni primeri odstranjevanja tattoojev in permanentnih obrvi s Pico laserjem. Primeri prikazujejo postopno bledenje skozi več tretmajev.",
});

const eyebrowResults = [
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
];

const results = [
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
  {
    before: "/images/results/1before.jpg",
    after: "/images/results/1after8tretma.jpg",
    title: "Postopno odstranjevanje napisov",
    meta: "po 8 tretmajih",
    beforeAlt: "Napis pred laserskim odstranjevanjem",
    afterAlt: "Napis po laserskem odstranjevanju",
    description:
      "Primer prikazuje bledenje tankih linij in napisov skozi več tretmajev. Pri takih motivih je pomembno postopno svetlenje in dovolj časa za celjenje kože.",
  },
  {
    before: "/images/results/7before.jpg",
    after: "/images/results/7after4tretma.jpg",
    title: "Skoraj v celoti odstranjen manjši tattoo",
    meta: "po 4 tretmajih",
    beforeAlt: "Manjši tattoo pred laserskim odstranjevanjem",
    afterAlt: "Manjši tattoo po laserskem odstranjevanju",
    description:
      "Primer prikazuje izrazito bledenje manjšega tattooja skozi tretmaje. Končni rezultat je odvisen od pigmenta, globine nanosa in odziva kože.",
  },
];

export default function RezultatiPage() {
  return (
    <main className="bg-canvas text-ink">
     {/* HERO */}
<section className="relative overflow-hidden bg-neutral-950 text-white">
<Image
  src="/images/hero/hero-laser-process.webp"
  alt=""
  fill
  priority
  sizes="100vw"
  className="absolute inset-0 z-0 object-cover object-[58%_center] opacity-50 sm:object-center sm:opacity-60"
/>
<div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/55 to-black/15" />

<div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/10 via-transparent to-neutral-950/80" />
 

  <Container className="relative z-10 section-hero">
    <div className="header-stack max-w-2xl">
      <p className="eyebrow-dark">Pred / Po</p>

      <h1 className="heading-display max-w-[14ch] text-3xl leading-[1.04] text-white sm:text-4xl lg:text-[3.25rem]">
        Realni rezultati odstranjevanja
      </h1>

      <p className="text-body-inverse-lg max-w-[34ch] sm:max-w-[48ch]">
        Vsak tattoo se odziva drugače. Primeri prikazujejo postopno
        bledenje skozi več tretmajev.
      </p>

      <p className="text-body-inverse-sm max-w-[52ch]">
        Rezultati niso obljuba enakega izida za vsak primer, ampak realen
        prikaz napredka skozi čas.
      </p>

      <div className="pt-5">
        <Button href="/posvet" variant="primary-dark">
          Pošlji povpraševanje
        </Button>
      </div>
    </div>
  </Container>
</section>

      {/* RESULTS */}
      <section className="section-sm">
        <Container>
          <div className="section-gap">
            <div className="header-stack max-w-3xl">
              <p className="eyebrow-muted">Pred / Po</p>

              <h2 className="heading-section text-ink">
                Realni primeri odstranjevanja
              </h2>

              <p className="text-body-lg max-w-[56ch]">
                Spodaj so primeri, kako tattoo skozi več tretmajev postopoma
                bledi in kako se rezultat razvija skozi čas.
              </p>

              <p className="text-body-sm max-w-[52ch] text-ink-muted">
                Primeri niso obljuba enakega rezultata za vsak tattoo, ampak
                realen prikaz napredka glede na pigment, globino nanosa in odziv
                kože.
              </p>

              <a
                href="/faq"
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi pogosta vprašanja o rezultatih →
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {results.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group overflow-hidden image-block border border-neutral-200/60 bg-white transition-all duration-300 hover:border-skin-400/40"
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

                      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink backdrop-blur">
                        Po
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block w-fit rounded-full bg-skin-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                          {item.meta}
                        </span>

                        <h3 className="text-lg font-semibold text-ink">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-body-sm text-ink-muted">
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
<section className="section-sm relative overflow-hidden border-b border-ink/10 bg-cta text-ink">
 <Container className="relative z-10">
  <div className="section-gap">
    <div className="header-stack max-w-3xl">
      <p className="eyebrow-skin">Video</p>

      <h2 className="heading-section text-ink">
        Kako poteka odstranjevanje v praksi
      </h2>

      <p className="max-w-[56ch] text-lg leading-[1.6] text-ink-muted">
        Posnetki prikazujejo dejanski potek tretmaja pri različnih primerih
        tattoojev.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">
      <div className="image-block overflow-hidden border border-white/10 bg-black">
        <video
          src="/videos/process/tattoo-noga-pico-postopek-01.mp4"
          controls
          playsInline
          preload="metadata"
          poster="/images/video-posters/tattoo-noga-pico-postopek-01.webp"
          className="aspect-[4/5] h-full w-full object-cover"
        />
      </div>

      <div className="image-block overflow-hidden border border-white/10 bg-black">
        <video
          src="/videos/process/tattoo-vrat-postopek.mp4"
          controls
          playsInline
          preload="metadata"
          poster="/images/video-posters/poster-procedure-02.webp"
          className="aspect-[4/5] h-full w-full object-cover"
        />
      </div>

      <div className="image-block overflow-hidden border border-white/10 bg-black">
        <video
          src="/videos/process/tattoo-vecji-postopek-01.mp4"
          controls
          playsInline
          preload="metadata"
          poster="/images/video-posters/poster-procedure-03.webp"
          className="aspect-[4/5] h-full w-full object-cover"
        />
      </div>
    </div>

    <p className="max-w-[52ch] text-base leading-[1.65] text-ink-muted">
      Posnetki prikazujejo realen potek tretmaja. Rezultat je vedno odvisen od
      tattooja, pigmenta, globine nanosa in odziva kože.
    </p>

    <a
      href="/pico-laser"
      className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
    >
      Preberi, kako deluje Pico laser →
    </a>
  </div>
</Container>

  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-ink/10" />
</section>
      {/* EYEBROWS RESULTS */}
      <section
  id="obrvi"
  className="section-sm scroll-mt-28 border-t border-neutral-200/70"
>
        <Container>
          <div className="section-gap">
         <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
  <div className="header-stack">
    <p className="eyebrow-muted">Permanentne obrvi</p>

    <h2 className="heading-section text-ink">
      Odstranjevanje permanentnih obrvi
    </h2>
  </div>

  <div className="max-w-[54ch] lg:pt-7">
    <p className="text-body text-ink-muted">
      Permanentne obrvi se odstranjujejo postopno in previdno, saj gre za
      občutljivo področje obraza.
    </p>

    <p className="mt-3 text-body-sm text-neutral-500">
      Rezultat je odvisen od vrste pigmenta, globine nanosa in odziva kože.
    </p>
  </div>
</div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              {eyebrowResults.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group overflow-hidden image-block border border-neutral-200/60 bg-white transition-all duration-300 hover:border-skin-400/40"
                >
                  <div className="grid grid-cols-2 gap-[2px] overflow-hidden bg-neutral-100">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.before}
                        alt={item.beforeAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 22vw, 50vw"
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
                        sizes="(min-width: 1024px) 22vw, 50vw"
                      />

                      <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-ink backdrop-blur">
                        Po
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <span className="inline-block w-fit rounded-full bg-skin-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                          {item.meta}
                        </span>

                        <h3 className="text-lg font-semibold text-ink">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-body-sm text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}

             <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
  <div className="flex flex-col gap-6">
    <div className="header-stack">
      <p className="eyebrow-muted">Prednosti Pico laserja</p>

      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
        Pri obrveh je pomemben nadzorovan pristop
      </h3>

      <p className="text-body text-ink-muted">
       Pigment pri permanentnih obrveh je lahko drugačen kot pri klasičnih tetovažah, zato se postopek prilagodi posameznemu primeru, globini pigmenta in odzivu kože. Cilj je postopno, varno in čim bolj nadzorovano svetlenje pigmenta.
      </p>
    </div>

    <div className="divide-y divide-neutral-200/70 border-y border-neutral-200/70">
      <div className="py-4">
        <p className="text-sm font-semibold text-ink">
          Učinkovitost na trdovratne pigmente
        </p>

        <p className="mt-1 text-body-sm text-ink-muted">
          Pico laser deluje tudi na starejše, temnejše in bolj trdovratne
          pigmente, ki jih druge metode težje odstranijo.
        </p>
      </div>

      <div className="py-4">
        <p className="text-sm font-semibold text-ink">
          Manjši toplotni vpliv na kožo
        </p>

        <p className="mt-1 text-body-sm text-ink-muted">
          Zaradi ultra kratkih impulzov je toplotni vpliv na okolno tkivo
          manjši, kar je posebej pomembno na občutljivem predelu obraza.
        </p>
      </div>

      <div className="py-4">
        <p className="text-sm font-semibold text-ink">
          Postopno, kontrolirano svetlenje
        </p>

        <p className="mt-1 text-body-sm text-ink-muted">
          Intenzivnost postopka se prilagaja stanju pigmenta, odzivu kože in
          želenemu cilju, tudi pri pripravi na novo pigmentacijo.
        </p>
      </div>
    </div>

    <a
      href="/posvet"
      className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
    >
      Pošlji fotografijo obrvi za posvet →
    </a>
  </div>
</div></div>
           <div className="border-t border-neutral-200 pt-8 sm:pt-10">
  <div className="header-stack max-w-3xl">
    <p className="eyebrow-muted">Video obrvi</p>

    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
      Kako poteka odstranjevanje
      <span className="block">permanentnih obrvi</span>
    </h3>

    <p className="text-body max-w-[56ch] text-ink-muted">
      Posnetek prikazuje realen potek odstranjevanja pigmenta obrvi. Pri
      predelu obraza je pomemben miren, postopen in nadzorovan pristop.
    </p>
  </div>

  <div className="mt-8 max-w-[680px]">
    <div className="image-block overflow-hidden border border-neutral-200/70 bg-neutral-100">
      <video
        src="/videos/obrvi/obrvi-postopek-wide.mp4"
        controls
        playsInline
        preload="metadata"
        poster="/images/video-posters/poster-eyebrow-01.webp"
        className="aspect-video h-full w-full object-cover"
      />
    </div>
  </div>
</div>
          </div>
        </Container>
      </section>
      {/* CTA */}
      <section className="section-sm relative overflow-hidden bg-cta text-ink">
        <Container className="relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <p className="eyebrow-skin">Kontakt</p>

              <h2 className="heading-section text-ink">
                Imate vprašanje o rezultatih?
              </h2>

              <p className="max-w-[44ch] text-lg leading-[1.6] text-ink-muted">
               Pošljite povpraševanje ali fotografijo tetovaže in dogovorili se
                bomo za naslednji korak.
              </p>

              <p className="text-body-sm text-ink-muted">
                Posvet 30 € • ob zakupu storitve je posvet brezplačen
              </p>
            </div>

            <div className="cta-spacing flex flex-col items-center">
              <div className="mt-4 flex flex-wrap justify-center gap-4 sm:mt-6">
                <Button href="/posvet" variant="primary-light">
                  Pošlji povpraševanje
                </Button>

            <Button href="/#cenik" variant="secondary-light">
  Poglej cenik
</Button>
              </div>

              <a
                href="/faq"
                className="mt-8 text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
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