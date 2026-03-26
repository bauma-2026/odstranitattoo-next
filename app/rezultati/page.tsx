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
    title: "Postopno bledenje manjšega tattooja",
    meta: "po 4 tretmajih",
    description:
      "Manjši tattooji lahko po več tretmajih izrazito zbledijo. Končni rezultat je vedno odvisen od pigmenta, globine nanosa in odziva kože.",
    alt: "Primer postopnega odstranjevanja manjšega tattooja po štirih tretmajih",
  },
  {
    image: "/images/results/phoenix-before-after.jpg",
    title: "Postopen fade večje tetovaže",
    meta: "po 2 tretmajih",
    description:
      "Že po prvih tretmajih je lahko viden opazen fade pigmenta. Pri večjih motivih rezultat ocenjujemo postopno in v realnem časovnem okviru.",
    alt: "Primer postopnega bledenja večje tetovaže po dveh tretmajih",
  },
  {
    image: "/images/results/tree-before-after.jpg",
    title: "Zmanjšanje temnega pigmenta",
    meta: "po 4 tretmajih",
    description:
      "Temnejši pigmenti se pogosto odstranjujejo bolj učinkovito, vendar je potek vedno individualen in odvisen od posamezne tetovaže.",
    alt: "Primer odstranjevanja temnega pigmenta po štirih tretmajih",
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
          <div className="flex max-w-2xl flex-col gap-4 sm:gap-5">
            <p className="eyebrow-dark">Pred / Po</p>

            <h1 className="heading-display text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
              Rezultati odstranjevanja
              <br />
              tattoojev
            </h1>

            <p className="text-body-inverse-lg max-w-[52ch]">
              Vsaka tetovaža je drugačna, zato je tudi odstranjevanje vedno
              individualen proces. Končni rezultat je odvisen od pigmenta,
              globine nanosa, starosti tetovaže in odziva kože.
            </p>

            <p className="text-body-inverse-sm max-w-[52ch]">
              Rezultate je zato vedno smiselno ocenjevati postopno in z realnimi
              pričakovanji.
            </p>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-sm bg-white">
        <Container>
          <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
            <p className="eyebrow-muted">Primeri rezultatov</p>

            <h2 className="heading-section text-neutral-950">
            Realni primeri
            </h2>

            <p className="text-body-lg max-w-[58ch]">
              Namen teh primerov ni obljuba enakega rezultata pri vsakem
              tattooju, ampak realen prikaz, kako tattoo skozi več tretmajev postopoma bledi.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
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
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-semibold text-neutral-950">
                        {item.title}
                      </h2>

                      <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                        {item.meta}
                      </span>
                    </div>

                    <p className="text-body">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black via-black to-neutral-950" />

        <div className="pointer-events-none absolute inset-0 z-[2]">
          <PixelLayer pixels={pixelsSubtleDark} />
        </div>

        <Container className="relative z-10 pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-5">
            <p className="eyebrow-dark">Posvet</p>

            <h2 className="heading-section text-white">
              Kakšen rezultat lahko pričakujete?
            </h2>

            <p className="text-body-inverse max-w-[52ch]">
              Vsaka tetovaža je drugačna, zato je najboljši način ocene
              brezplačen posvet, kjer pregledamo pigment, starost tetovaže in
              vam podamo realno pričakovanje rezultatov.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button
                href="/posvet"
                variant="primary-dark"
                className="
                  hover:!bg-skin-200
                  hover:!text-skin-900
                  hover:!border-skin-400/60
                  hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]
                "
              >
                Naroči brezplačen posvet
              </Button>

              <Button href="/odstranjevanje-tattoojev" variant="secondary-dark">
                Kako poteka odstranjevanje
              </Button>
            </div>

            <p className="text-body-inverse-sm pt-2">
              Posvet je brezplačen in brez obveznosti.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}