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
    text: "Temnejši pigmenti se običajno lažje odstranjujejo, medtem ko so barvni tattooji pogosto zahtevnejši in potrebujejo več tretmajev.",
  },
  {
    title: "Globina nanosa",
    text: "Globlje in bolj nasičene tetovaže zahtevajo več časa, saj je pigment težje razgraditi in odstraniti.",
  },
  {
    title: "Starost tattooja",
    text: "Starejši tattooji pogosto že delno zbledijo, zato se lahko odzovejo hitreje kot novi.",
  },
  {
    title: "Odziv kože",
    text: "Vsaka koža reagira drugače. Hitrost bledenja in končni rezultat sta odvisna tudi od naravnih regeneracijskih procesov.",
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
    <p className="eyebrow-dark">Kako poteka</p>

    <h1 className="heading-display leading-[1.04] max-w-[16ch] lg:max-w-[17ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
  Odstranjevanje tattooja je postopen proces
</h1>

    <p className="text-body-inverse-lg max-w-[44ch]">
      Laser razbije pigment, telo pa ga postopoma odstranjuje.
      Tattoo zato bledi skozi več tretmajev.
    </p>

    {/* MOBILE */}
    <p className="text-body-inverse-sm max-w-[44ch] sm:hidden">
      Realno oceno lahko podamo na posvetu.
    </p>

    {/* DESKTOP */}
    <p className="hidden text-body-inverse-sm max-w-[44ch] sm:block">
      Vsak primer je drugačen — rezultat je odvisen od pigmenta, globine in odziva kože.
      Realno oceno lahko podamo šele na posvetu.
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
        <p className="eyebrow-muted">Kako poteka</p>

        <h2 className="heading-section text-neutral-950">
          Kaj se dogaja med odstranjevanjem
        </h2>

        <p className="text-body-lg">
          Pico laser razbije pigment tattooja na manjše delce, ki jih telo
          nato postopoma odstranjuje. Zato odstranjevanje ni enkraten poseg,
          ampak proces, ki poteka skozi več tretmajev.
        </p>

        <p className="text-body">
          Med posameznimi tretmaji mora miniti dovolj časa, da se koža umiri
          in da telo razgrajeni pigment postopoma odstrani. 
        </p>

        <a
          href="/pico-laser"
          className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
        >
          Preberi več o Pico laser tehnologiji →
        </a>
      </div>

      {/* INFO BLOCK */}
      <div className="hidden lg:block max-w-[36ch]">
        <div className="relative rounded-[20px] bg-neutral-50/80 p-6 ring-1 ring-neutral-200/60">
          <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-skin-400/70" />

          <div className="pl-4">
            <p className="eyebrow-muted text-neutral-500">
              Kaj je pomembno vedeti
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-body-sm text-neutral-700 marker:text-skin-500/70">
              <li className="leading-[1.5]">barva tattooja</li>
              <li className="leading-[1.5]">starost tattooja</li>
              <li className="leading-[1.5]">globina nanosa</li>
              <li className="leading-[1.5]">odziv kože</li>
            </ul>

            <p className="mt-6 text-body-sm text-neutral-500">
              Zato lahko šele na podlagi vašega tattooja realno ocenimo, kaj
              je smiselno pričakovati.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

{/* FACTORS */}
<section className="section-sm border-y border-neutral-200/70 bg-neutral-50/80">
  <Container>
    <div className="section-gap">

      {/* HEADER */}
      <div className="header-stack max-w-2xl">
        <p className="eyebrow-muted">Kaj vpliva na rezultat</p>

        <h2 className="heading-section text-neutral-950">
          Od česa je odvisno odstranjevanje tattooja
        </h2>

        <p className="text-body-lg">
          Končni rezultat ni enak pri vsakem tattooju — odvisen je od več dejavnikov.
        </p>
      </div>

      {/* MOBILE SUMMARY */}
      <div className="sm:hidden">
        <div className="flex flex-col gap-3 max-w-[34ch]">
          <p className="text-body text-neutral-900">
            Na rezultat vplivajo barva pigmenta, starost tattooja, globina nanosa in odziv kože.
          </p>

          <p className="text-body-sm text-neutral-600">
            Zato lahko šele na podlagi vašega tattooja realno ocenimo, koliko tretmajev je smiselnih in kaj je mogoče pričakovati.
          </p>
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:gap-14">

        {/* ITEM 01 */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
              01
            </span>

            <h3 className="text-base font-semibold text-neutral-950">
              Barva pigmenta
            </h3>

            <p className="text-body max-w-[36ch]">
              Temnejši pigmenti se običajno lažje odstranjujejo, medtem ko so
              barvni tattooji pogosto zahtevnejši in potrebujejo več tretmajev.
            </p>
          </div>
        </div>

        {/* ITEM 02 */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
              02
            </span>

            <h3 className="text-base font-semibold text-neutral-950">
              Starost tattooja
            </h3>

            <p className="text-body max-w-[36ch]">
              Starejši tattooji pogosto že delno zbledijo, zato se lahko odzovejo
              hitreje kot novi, kjer je pigment bolj koncentriran.
            </p>
          </div>
        </div>

        {/* ITEM 03 */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
              03
            </span>

            <h3 className="text-base font-semibold text-neutral-950">
              Globina in gostota pigmenta
            </h3>

            <p className="text-body max-w-[36ch]">
              Globlje in bolj nasičene tetovaže zahtevajo več tretmajev, saj je
              pigment težje razgraditi in odstraniti.
            </p>
          </div>
        </div>

        {/* ITEM 04 */}
        <div className="relative pl-6">
          <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
              04
            </span>

            <h3 className="text-base font-semibold text-neutral-950">
              Odziv kože
            </h3>

            <p className="text-body max-w-[36ch]">
              Vsaka koža reagira drugače. Hitrost bledenja in končni rezultat sta
              odvisna tudi od naravnih regeneracijskih procesov.
            </p>
          </div>
        </div>

      </div>

      {/* CTA */}
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
          Veliko tattoojev je mogoče zelo uspešno odstraniti, vendar končni
          rezultat ni enak pri vseh.
        </p>

        <p className="text-body">
          Na rezultat vplivajo pigment, globina nanosa, starost tattooja in
          odziv kože. Pri nekaterih je cilj popolna odstranitev, pri drugih pa
          postopno posvetlitev za cover-up.
        </p>

        <p className="text-body">
          Zato je pred začetkom najpomembnejša realna ocena — da veste, kaj je
          pri vašem tattooju smiselno pričakovati.
        </p>
      </div>

      <div className="pt-2 sm:pt-4 flex flex-wrap gap-4">
        <Button href="/posvet">Preveri svoj primer</Button>

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
         Na podlagi vašega tattooja vam jasno povemo, kaj lahko pričakujete — koliko tretmajev je potrebnih in kako bo potekalo odstranjevanje.
        </p>

        <p className="text-body-sm text-white/60">
          Brezplačno • brez obveznosti • realna ocena
        </p>
      </div>

      <div className="cta-spacing flex flex-col items-center gap-4">
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
          Preveri svoj primer
        </Button>
      </div>
    </div>
  </Container>
</section>
</main>
  );
}