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

const results = [
  {
    image: "/images/results/fairy-before-after.jpg",
    title: "Opazno bledenje po 4 tretmajih",
    meta: "4 tretmaji",
    alt: "Postopno bledenje tattooja po štirih tretmajih",
    description:
      "Pigment je po štirih tretmajih občutno svetlejši. Postopek še ni zaključen, napredek pa je že jasno viden.",
  },
  {
    image: "/images/results/phoenix-before-after.jpg",
    title: "Začetni fade",
    meta: "2 tretmaja",
    alt: "Začetni rezultati odstranjevanja tattooja po dveh tretmajih",
    description:
      "Prvi rezultati so vidni že po nekaj obiskih. Pigment postopoma bledi tudi med posameznimi tretmaji.",
  },
  {
    image: "/images/results/tree-before-after.jpg",
    title: "Enakomerno bledenje",
    meta: "4 tretmaji",
    alt: "Postopno zmanjšanje intenzivnosti pigmenta",
    description:
      "Napredek je postopen in odvisen od pigmenta, globine nanosa in odziva kože.",
  },
  {
    image: "/images/results/rose-before-after-1.jpg",
    title: "Viden napredek pri barvnem tattooju",
    meta: "5 tretmajev",
    alt: "Odstranjevanje barvnega tattooja po petih tretmajih",
    description:
      "Barvni pigment praviloma zahteva več časa. Tudi pri takem tattooju je po več tretmajih lahko viden jasen napredek.",
  },
  {
    image: "/images/results/fineline-before-after.jpg",
    title: "Nežen tattoo skoraj odstranjen",
    meta: "6 tretmajev",
    alt: "Odstranjevanje nežnega tattooja po šestih tretmajih",
    description:
      "Pri tanjših linijah je napredek pogosto hitreje viden, končni rezultat pa je še vedno odvisen od pigmenta in kože.",
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

      <h1 className="heading-display text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
        Realni rezultati
        <br />
        odstranjevanja tattoojev
      </h1>

      {/* MOBILE */}
      <p className="text-body-inverse-lg max-w-[52ch] sm:hidden">
        Vsak tattoo reagira drugače, zato rezultat nastaja postopoma skozi več tretmajev.
      </p>

      {/* DESKTOP */}
      <p className="hidden text-body-inverse-lg max-w-[52ch] sm:block">
        Vsak tattoo je drugačen, zato tudi odstranjevanje poteka različno.
        Rezultat je odvisen od pigmenta, starosti tattooja, globine nanosa
        in odziva kože.
      </p>

      {/* MOBILE */}
      <p className="text-body-inverse-sm max-w-[52ch] sm:hidden">
        Primeri prikazujejo realen napredek, ne enak rezultat za vse.
      </p>

      {/* DESKTOP */}
      <p className="hidden text-body-inverse-sm max-w-[52ch] sm:block">
        Primere je smiselno gledati kot realen prikaz postopnega napredka,
ne kot obljubo enakega rezultata za vsak primer.
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
       Spodaj so primeri, kako tattoo skozi več tretmajev postopoma bledi in kako se rezultat razvija skozi čas.
        </p>

        <p className="text-body-sm max-w-[52ch] text-neutral-600">
          Primeri niso obljuba enakega rezultata za vsak tattoo, ampak realen prikaz
          napredka glede na pigment, globino nanosa in odziv kože.
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
            className="
              group overflow-hidden image-block border border-neutral-200/60 bg-white
              transition-all duration-300
              hover:border-skin-400/40
              hover:shadow-[0_10px_24px_rgba(var(--skin-rgb),0.12)]
            "
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-neutral-100">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
              />

              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-white/8" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black/18 to-transparent" />

              <div className="pointer-events-none absolute inset-0 flex">
                <div className="flex w-1/2 items-start justify-start p-3 sm:p-4">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur">
                    Pred
                  </span>
                </div>

                <div className="flex w-1/2 items-start justify-end p-3 sm:p-4">
                  <span className="rounded-full bg-white/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-900 backdrop-blur">
                    Po
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-black/5" />
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
          Posnetki prikazujejo dejanski potek tretmaja in odziv kože med odstranjevanjem.
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
      Posnetki prikazujejo realen potek tretmaja. Rezultat je vedno odvisen od tattooja in odziva kože.
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
        <p className="eyebrow-dark">Posvet</p>

       <h2 className="heading-section text-white">
  Kaj lahko realno pričakujete
  <br className="hidden sm:block" />
  od odstranjevanja
</h2>

        <p className="text-body-inverse max-w-[52ch]">
          Na posvetu pregledamo tattoo in vam jasno povemo,
          <br className="hidden sm:block" />
          kaj je pri vašem primeru smiselno pričakovati.
        </p>
      </div>

      <div className="cta-spacing flex flex-col items-center">
       <div className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-6">
          <Button href="/posvet" variant="primary-dark">
            Naroči posvet
          </Button>

          <Button href="/odstranjevanje-tattoojev" variant="secondary-dark">
            Poglej potek odstranjevanja
          </Button>
        </div>

        <div className="flex flex-col gap-2 pt-3">
          <a
            href="/faq"
            className="mt-6 text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
          >
            Preberi pogosta vprašanja →
          </a>

          <p className="mt-4 text-sm text-white/50">
            Posvet je brezplačen in namenjen realni oceni vašega primera.
          </p>
        </div>
      </div>
    </div>
  </Container>
</section>
    </main>
  );
}