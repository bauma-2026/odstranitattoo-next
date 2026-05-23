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
  <p className="eyebrow-dark">Pico laser</p>

  <h1 className="heading-display max-w-[11ch] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
    Pico laser za odstranjevanje tattoojev
  </h1>

  <p className="text-body-inverse-lg max-w-[38ch]">
    Pico laser razbije pigment na manjše delce, ki jih telo nato postopoma
    odstranjuje.
  </p>

  <div className="flex flex-col gap-2 pt-3">
    <a
      href="/odstranjevanje-tattoojev"
      className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
    >
      Preberi, kako poteka odstranjevanje →
    </a>

    <a
      href="/rezultati"
      className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
    >
      Poglej rezultate pred in po →
    </a>
  </div>
</div>
        </Container>

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-sm bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
            {/* LEFT */}
            <div className="header-stack max-w-[60ch]">
              <p className="eyebrow-muted">Prednosti</p>

              <h2 className="heading-section text-neutral-950">
                Kaj Pico laser naredi drugače
              </h2>

              <p className="text-body-lg">
                Pico laser deluje v izjemno kratkih impulzih, zato pigment
                razbije natančno in na manjše delce.
              </p>

              <p className="text-body">
                To omogoča bolj nadzorovan postopek, ki se prilagaja pigmentu,
                področju in odzivu kože.
              </p>

              <a
                href="/faq"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi pogosta vprašanja o postopku →
              </a>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
                <Image
                  src="/images/pico/pico-laser-nastavki-odstranjevanje-tattoo.webp"
                  alt="Nastavki Pico laserja za odstranjevanje tattoojev"
                  width={1600}
                  height={1200}
                  className="block w-full object-cover"
                />
              </div>

              <p className="max-w-[52ch] text-sm leading-6 text-neutral-500">
                Različni nastavki omogočajo prilagoditev tretmaja glede na
                pigment, področje in odziv kože.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PROCESS VISUAL */}
      <section className="section-sm border-y border-neutral-200/70 bg-neutral-50/80">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-14">
            <div className="relative overflow-hidden rounded-[24px] border border-neutral-200/70 bg-neutral-100">
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

              <h2 className="heading-section text-neutral-950">
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
                Koža se po tretmaju celi približno 28–60 dni, zato se tretmaji
                izvajajo približno na 8 tednov.
              </p>

              <a
                href="/odstranjevanje-tattoojev"
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi več o celotnem postopku →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* COOLING / SAFETY */}
      <section className="section-sm bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14">
            <div className="header-stack max-w-[60ch]">
              <p className="eyebrow-muted">Nadzor postopka</p>

              <h2 className="heading-section text-neutral-950">
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
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
              >
                Pošlji povpraševanje →
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[24px] border border-neutral-200/70 bg-neutral-100">
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
                Imate vprašanje o odstranjevanju?
              </h2>

              <p className="text-body-inverse max-w-[44ch]">
                Pošljite povpraševanje ali fotografijo tattooja in dogovorili se
                bomo za naslednji korak.
              </p>

              <p className="text-body-sm text-white/60">
                Posvet 30 € • ob zakupu storitve se znesek odšteje
              </p>
            </div>

            <div className="cta-spacing flex flex-wrap justify-center gap-4">
              <Button href="/posvet" variant="primary-dark">
                Pošlji povpraševanje
              </Button>

              <Button href="/rezultati" variant="secondary-dark">
                Poglej rezultate
              </Button>
            </div>

            <a
              href="/faq"
              className="mt-6 text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
            >
              Preberi pogosta vprašanja →
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}