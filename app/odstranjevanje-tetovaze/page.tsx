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
    <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
      <p className="eyebrow-dark">Odstranjevanje tetovaže</p>

     <h1 className="heading-display leading-[1.04] max-w-[15ch] lg:max-w-[16ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
  Odstranjevanje tetovaže je postopen proces
</h1>

      <p className="text-body-inverse-lg max-w-[44ch]">
        Pico laser razbije pigment, telo pa ga postopoma odstranjuje.
        Tetovaža zato ne izgine naenkrat, ampak skozi več tretmajev bledi.
      </p>

      {/* MOBILE */}
      <p className="text-body-inverse-sm max-w-[44ch] sm:hidden">
        Realno oceno lahko podamo na posvetu.
      </p>

      {/* DESKTOP */}
      <p className="hidden text-body-inverse-sm max-w-[44ch] sm:block">
        Končni rezultat je odvisen od pigmenta, globine nanosa in odziva kože.
        Realno oceno lahko podamo šele na posvetu.
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
<div className="rounded-[24px] border border-neutral-200/70 bg-neutral-50/80 p-7 sm:p-8">
  <div className="flex flex-col gap-4">
    <p className="eyebrow-muted text-neutral-500">
      Posvet v studiu
    </p>

    <h3 className="text-2xl font-semibold leading-[1.2] text-neutral-950">
      Studio v Domžalah
    </h3>

    <p className="text-body">
      Pred začetkom pregledamo tattoo in ocenimo, kaj je za vaš primer
      smiselno — odstranitev ali priprava na cover-up.
    </p>

    <p className="text-body-sm text-neutral-500">
      Studio je enostavno dostopen iz Ljubljane in okolice.
    </p>

    <a
      href="/kontakt"
      className="pt-2 text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
    >
      Poglej lokacijo in kontakt →
    </a>
  </div>
</div>
      </div>
    </Container>
  </section>

  <section className="section-sm border-y border-neutral-200/70 bg-neutral-50 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent)]">
  <Container>
    <div className="section-gap">
      
      {/* TEXT */}
      <div className="header-stack max-w-2xl">
        <p className="eyebrow-muted">Posvet</p>

        <h2 className="heading-section text-neutral-950">
          Individualna ocena tattooja
        </h2>

        <p className="text-body-lg">
          Pred začetkom pregledamo tattoo in ocenimo, kaj je pri vašem primeru
          smiselno pričakovati.
        </p>

        <p className="text-body">
          Dobite realno oceno, okviren potek odstranjevanja in jasen naslednji korak.
        </p>
      </div>

    {/* CTA */}
<div className="flex items-center gap-4 pt-4 sm:flex-wrap sm:pt-6">
  <Button href="/posvet">Preveri svoj primer</Button>

  {/* MOBILE LINK (desno od gumba) */}
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
</div>
    </div>
  </Container>
</section>
</main>
  );
}