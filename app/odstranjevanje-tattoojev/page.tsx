import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Odstranjevanje tattoojev s Pico laserjem",
  description:
    "Odstranjevanje tattoojev s Pico laserjem v Domžalah. Kako poteka postopek, koliko tretmajev je potrebnih in kaj vpliva na rezultat.",
  alternates: {
    canonical: "https://odstranitattoo.sijev",
  },
};

const factors = [
  {
    title: "Barva pigmenta",
    text: "Temnejši pigmenti se pogosto odstranjujejo bolj učinkovito, medtem ko so nekatere barve zahtevnejše in potrebujejo več časa.",
  },
  {
    title: "Globina nanosa",
    text: "Na rezultat vpliva tudi to, kako globoko je bil pigment vnešen v kožo in kako močno je tetovaža nasičena.",
  },
  {
    title: "Starost tattooja",
    text: "Starejši tattooji pogosto reagirajo drugače kot novi, zato je vsaka ocena vedno individualna.",
  },
  {
    title: "Odziv kože",
    text: "Na končni rezultat vplivajo regeneracija kože, nega po tretmaju in delovanje imunskega sistema.",
  },
];

export default function OdstranjevanjeTattooPage() {
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
      <p className="eyebrow-dark">Odstranjevanje tattoojev</p>

      <h1 className="heading-display max-w-[13ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
        Kako poteka odstranjevanje tattooja
      </h1>

    <p className="text-body-inverse-lg max-w-[44ch]">
  Odstranjevanje tattooja je postopen proces, pri katerem telo
  razgrajeni pigment skozi čas naravno odstrani.
</p>

<p className="text-body-inverse-sm max-w-[44ch]">
  Število tretmajev je vedno odvisno od vašega tattooja in odziva kože.
</p>
<a
  href="/rezultati"
  className="pt-1 text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
>
  Poglej realne rezultate →
</a>
    </div>
  </Container>

  <div className="pointer-events-none absolute inset-0 z-[1]">
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
  </div>
</section>

{/* HOW IT WORKS */}
<section className="section-sm bg-white">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-14">
      <div className="header-stack max-w-[60ch]">
        <h2 className="heading-section text-neutral-950">
          Kaj se dogaja med odstranjevanjem
        </h2>

        <p className="text-body-lg">
          Pico laser odda izjemno kratek svetlobni impulz, ki pigment
          tattooja razbije na drobne delce. Telo te delce nato postopoma
          odstranjuje preko imunskega in limfnega sistema.
        </p>

        <p className="text-body">
          Odstranjevanje zato ni enkraten poseg, ampak postopen proces.
          Med posameznimi tretmaji mora miniti dovolj časa, da se koža
          umiri in da se razgrajeni pigment lahko naravno odstrani iz
          telesa.
        </p>

        <a
          href="/pico-laser"
          className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
        >
          Preberi več o Pico laser tehnologiji →
        </a>
      </div>

     {/* RIGHT BOX */}
<div className="rounded-[28px] border border-skin-400/25 bg-skin-50/60 p-7 sm:p-8">
  <div className="flex flex-col gap-3">
    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-skin-500/90">
      Pomembno
    </p>

    <h3 className="heading-tight text-2xl text-skin-900">
      Zakaj je potreben čas med tretmaji?
    </h3>

    <p className="text-skin-body">
      Po vsakem tretmaju telo postopoma odstranjuje razgrajeni pigment.
      Zato mora med tretmaji miniti dovolj časa, da se koža umiri in da
      se rezultat lahko razvije.
    </p>

    <a
      href="/posvet"
      className="pt-1 text-sm font-medium text-skin-900 underline underline-offset-4 transition hover:text-skin-700"
    >
      Naroči posvet →
    </a>
  </div>
</div>
    </div>
  </Container>
</section>

{/* FACTORS */}
<section className="section-sm border-y border-skin-400/20 bg-skin-50/60">
  <Container>
    <div className="section-gap">
      <div className="header-stack max-w-2xl">
        <p className="eyebrow-skin">Kaj vpliva na rezultat</p>

        <h2 className="heading-section text-neutral-950">
          Od česa je odvisno odstranjevanje tattooja
        </h2>

        <p className="text-body-lg">
          Končni rezultat ni enak pri vsakem tattooju.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {factors.map((item) => (
          <div
            key={item.title}
            className="
              rounded-[22px]
              border border-skin-400/25
              bg-white
              p-5
              transition-all duration-300 ease-out
              hover:border-skin-400/60
              hover:bg-skin-50/60
              hover:shadow-[0_8px_20px_rgba(var(--skin-rgb),0.12)]
            "
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-neutral-950">
                {item.title}
              </h3>

              <p className="text-body">{item.text}</p>
            </div>
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

{/* FAQ-LIKE INFO */}
<section className="section-tight bg-white">
  <Container>
    <div className="section-gap">
      <div className="header-stack max-w-3xl">
        <p className="eyebrow-muted">Pogosta vprašanja</p>

        <h2 className="heading-section text-neutral-950">
          Ali se tattoo lahko popolnoma odstrani?
        </h2>

      <p className="text-body-lg">
  Veliko tattoojev je mogoče zelo uspešno odstraniti, končni rezultat pa je
  vedno odvisen od pigmenta, globine nanosa, starosti tetovaže in odziva kože.
</p>

<p className="text-body">
  Pri nekaterih je cilj popolna odstranitev, pri drugih pa priprava tattooja
  na cover-up. Zato je realna ocena pred začetkom odstranjevanja ključna.
</p>
      </div>

      <div className="cta-spacing flex flex-wrap gap-4 pt-0">
        <Button href="/posvet">Naroči posvet</Button>
        <Button href="/kontakt" variant="secondary-light">
          Kontakt
        </Button>
      </div>

      <a
        href="/faq"
        className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
      >
        Poglej vsa pogosta vprašanja →
      </a>
    </div>
  </Container>
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
  Preverite svoj primer.
</h2>

<p className="text-body-inverse max-w-[52ch]">
  Na posvetu ocenimo vaš tattoo in vam jasno povemo, kako lahko poteka odstranjevanje.
</p>
      </div>

      <div className="cta-spacing flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4">
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

          <Button href="/kontakt" variant="secondary-dark">
            Kontakt
          </Button>
        </div>

        <a
          href="/pico-laser"
          className="mt-1 text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
        >
          Preberi več o Pico laser tehnologiji →
        </a>
      </div>
    </div>
  </Container>
</section>
</main>
  );
}