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
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/pico-laser",
  title: "Pico laser za odstranjevanje tattoojev",
  description:
    "Kako Pico laser s kratkimi impulzi razbije pigment tattooja in kako različne valovne dolžine omogočajo bolj ciljno odstranjevanje pigmentov.",
});

const benefits = [
  {
    title: "Natančen vpliv na pigment",
    text: "Kratki impulzi delujejo usmerjeno na pigment, ki se razbije na manjše delce.",
  },
  {
    title: "Postopno odstranjevanje pigmenta",
    text: "Razgrajeni pigment telo odstranjuje postopoma skozi čas in več tretmajev.",
  },
  {
    title: "Bolj nadzorovan postopek",
    text: "Postopek se prilagaja posameznemu tattooju, pigmentu in odzivu kože.",
  },
];

export default function PicoLaserPage() {
  return (
    <main className="bg-canvas text-ink">
     {/* HERO */}
<section className="relative overflow-hidden bg-neutral-950 text-white">
  <Image
    src="/images/hero/hero-pico-laser.webp"
    alt=""
    fill
    priority
    sizes="100vw"
    className="absolute inset-0 z-0 object-cover object-[58%_center] opacity-55 sm:object-center sm:opacity-65"
  />

  <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

  <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-black/10 via-transparent to-neutral-950/70" />

  <Container className="relative z-10 section-hero">
    <div className="header-stack max-w-2xl">
      <p className="eyebrow-dark">Pico laser</p>

      <h1 className="heading-display max-w-[13ch] text-3xl leading-[1.04] text-white sm:text-4xl lg:text-[3.25rem]">
        Pico laser za odstranjevanje tattoojev
      </h1>

      <p className="text-body-inverse-lg max-w-[34ch] sm:max-w-[38ch]">
        Pico laser razbije pigment na manjše delce, ki jih telo nato postopoma
        odstranjuje.
      </p>

      <div className="flex flex-col items-start gap-3 pt-5 sm:gap-4">
        <Button href="/posvet" variant="primary-dark">
          Pošlji povpraševanje
        </Button>

        <a
          href="/rezultati"
          className="text-sm font-medium text-white/70 underline underline-offset-4 decoration-white/30 transition hover:text-white hover:decoration-white/60"
        >
          Poglej rezultate pred in po →
        </a>
      </div>
    </div>
  </Container>
</section>

    {/* BENEFITS */}
<section className="section-sm">
  <Container>
    <div className="section-gap">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
        {/* LEFT */}
        <div className="header-stack max-w-[60ch]">
          <p className="eyebrow-muted">Prednosti</p>

          <h2 className="heading-section text-ink">
            Kaj Pico laser naredi drugače
          </h2>

          <p className="text-body-lg">
            Pico laser deluje v izjemno kratkih impulzih, zato pigment razbije
            natančno in na manjše delce.
          </p>

          <p className="text-body">
            To omogoča bolj nadzorovan postopek, ki se prilagaja pigmentu,
            področju, barvi tetovaže in odzivu kože.
          </p>

          <p className="text-body">
            V studiu uporabljamo laser s 4 različnimi valovnimi dolžinami, kar
            omogoča bolj ciljno odstranjevanje različnih pigmentov v koži.
          </p>

          <a
            href="/faq"
            className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
          >
            Preberi pogosta vprašanja o postopku →
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="image-block relative aspect-[4/3] border border-neutral-200/60 bg-white">
          <Image
            src="/images/pico/pico-laser-nastavki-odstranjevanje-tattoo.webp"
            alt="Nastavki Pico laserja za odstranjevanje tetovaž"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* WAVELENGTHS */}
      <div className="rounded-2xl border border-neutral-200 bg-hero p-5 sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="header-stack">
            <p className="eyebrow-muted">Valovne dolžine</p>

            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink sm:text-3xl">
              Nastavki za lasersko odstranjevanje tetovaž
            </h3>

            <p className="text-body text-ink-muted">
              Vsak nastavek deluje na določeni valovni dolžini in je prilagojen
              različnim barvam pigmenta.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col divide-y divide-ink/10 rounded-xl border border-ink/10 bg-canvas px-4">
              <div className="flex items-baseline justify-between gap-4 py-3 first:pt-4 last:pb-4">
                <span className="font-semibold text-ink">1064 nm</span>
                <span className="text-sm text-ink-muted">črni pigmenti</span>
              </div>

              <div className="flex items-baseline justify-between gap-4 py-3 first:pt-4 last:pb-4">
                <span className="font-semibold text-ink">532 nm</span>
                <span className="text-sm text-ink-muted">rdeči pigmenti</span>
              </div>

              <div className="flex items-baseline justify-between gap-4 py-3 first:pt-4 last:pb-4">
                <span className="font-semibold text-ink">585 nm</span>
                <span className="text-sm text-ink-muted">modri pigmenti</span>
              </div>

              <div className="flex items-baseline justify-between gap-4 py-3 first:pt-4 last:pb-4">
                <span className="font-semibold text-ink">650 nm</span>
                <span className="text-sm text-ink-muted">zeleni pigmenti</span>
              </div>
            </div>

            <p className="text-body-sm text-ink-muted">
              Takšen pristop omogoča bolj selektivno delovanje glede na barvo
              pigmenta. To je posebej pomembno pri večbarvnih tetovažah in
              permanentnem make-upu, kjer ena sama valovna dolžina ne more
              optimalno obdelati vseh pigmentov.
            </p>

            <p className="text-body-sm text-ink-muted">
              Ciljno lahko obravnavamo različne barvne skupine pigmentov, tudi
              zahtevne in mešane odtenke, ki so pogosti pri tetovažah in PMU.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>

      {/* PROCESS VISUAL */}
      <section className="section-sm border-y border-neutral-200/70 bg-hero">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-14">
            <div className="image-block relative border border-neutral-200/60 bg-white">
              <Image
                src="/images/pico/pico-laser-process-02-desktop.webp"
                alt="Pico laser med odstranjevanjem tattooja"
                width={2560}
                height={1440}
                className="hidden aspect-[16/10] w-full object-cover lg:block"
              />

              <Image
                src="/images/pico/pico-laser-process-02-mobile.webp"
                alt="Pico laser med odstranjevanjem tattooja"
                width={1080}
                height={1920}
                className="block aspect-[4/5] w-full object-cover lg:hidden"
              />
            </div>

            <div className="header-stack max-w-[56ch]">
              <p className="eyebrow-muted">Proces</p>

              <h2 className="heading-section text-ink">
                Pigment se odstranjuje postopoma
              </h2>

              <p className="text-body-lg">
                Laser pigment najprej razbije na manjše delce. Telo jih nato
                skozi čas postopoma odstranjuje preko naravnih procesov.
              </p>

              <p className="text-body">
                Zato odstranjevanje tattooja ni enkraten poseg. Med tretmaji
                mora miniti dovolj časa, da se koža zaceli in da telo postopoma
                odstrani razgrajeni pigment.
              </p>

              <p className="text-body">
                Koža se po tretmaju celi 28–60 dni, zato se tretmaji
                izvajajo na 8 tednov.
              </p>

              <a
                href="/odstranjevanje-tattoojev"
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi več o celotnem postopku →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* COOLING / SAFETY */}
      <section className="section-sm">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14">
            <div className="header-stack max-w-[60ch]">
              <p className="eyebrow-muted">Nadzor postopka</p>

              <h2 className="heading-section text-ink">
                Pomembni so tudi hlajenje, koža in razmiki med tretmaji
              </h2>

              <p className="text-body-lg">
                Pri odstranjevanju ni pomemben samo laser, ampak tudi nadzor nad
                postopkom, hlajenje kože in pravilni razmiki med tretmaji.
              </p>

              <p className="text-body">
                Postopek se prilagaja tattooju, pigmentu in odzivu kože. Bolj
                jasen odziv pigmenta se pokaže po nekaj tretmajih.
              </p>

              <a
                href="/posvet"
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
              >
                Pošlji povpraševanje →
              </a>
            </div>

            <div className="image-block relative border border-neutral-200/60 bg-white">
              <Image
                src="/images/pico/process-cooling-01-desktop.webp"
                alt="Hlajenje kože med odstranjevanjem tattooja"
                width={2560}
                height={1440}
                className="hidden aspect-[16/10] w-full object-cover lg:block"
              />

              <Image
                src="/images/pico/process-cooling-01-mobile.webp"
                alt="Hlajenje kože med odstranjevanjem tattooja"
                width={1080}
                height={1920}
                className="block aspect-[4/5] w-full object-cover lg:hidden"
              />
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
                Imate vprašanje o odstranjevanju?
              </h2>

              <p className="max-w-[44ch] text-lg leading-[1.6] text-ink-muted">
                Pošljite povpraševanje ali fotografijo tetovaže in dogovorili se
                bomo za naslednji korak.
              </p>

              <p className="text-body-sm text-ink-muted">
                Posvet 30 € • ob zakupu storitve je posvet brezplačen
              </p>
            </div>

            <div className="cta-spacing flex flex-wrap justify-center gap-4">
              <Button href="/posvet" variant="primary-light">
                Pošlji povpraševanje
              </Button>

              <Button href="/rezultati" variant="secondary-light">
                Poglej rezultate
              </Button>
            </div>

            <a
              href="/faq"
              className="mt-6 text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
            >
              Preberi pogosta vprašanja →
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}