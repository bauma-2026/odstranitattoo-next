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
  path: "/odstranjevanje-tattoojev",
  title: "Odstranjevanje tattoojev s Pico laserjem",
  description:
    "Odstranjevanje tattoojev s Pico laserjem v Domžalah. Kako poteka postopek, koliko tretmajev je potrebnih in kaj vpliva na rezultat.",
});

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
    <main className="bg-canvas text-ink">
  {/* HERO */}
<section className="relative overflow-hidden border-b border-ink/10 bg-hero text-ink">
  <Container className="relative z-10 section-hero">
    <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
      <p className="eyebrow-skin">Kako poteka</p>

      <h1 className="heading-display max-w-[15ch] text-3xl leading-[1.04] text-ink sm:text-4xl lg:text-[3.25rem]">
        Odstranjevanje tattooja je postopen proces
      </h1>

      <p className="max-w-[38ch] text-lg leading-[1.6] text-ink-muted">
        Pico laser razbije pigment, telo pa ga postopoma odstranjuje skozi
        več tretmajev.
      </p>

      <div className="flex flex-col items-start gap-3 pt-3 sm:gap-4">
        <Button href="/posvet" variant="primary-light">
          Pošlji povpraševanje
        </Button>

        <a
          href="/rezultati"
          className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
        >
          Poglej realne rezultate →
        </a>
      </div>
    </div>
  </Container>
</section>
      {/* HOW IT WORKS */}
      <section className="section-sm">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start lg:gap-14">
            <div className="header-stack max-w-[60ch]">
  <p className="eyebrow-muted">Postopek odstranjevanja</p>

  <h2 className="heading-section text-ink">
    Kaj se dogaja med odstranjevanjem
  </h2>

  <p className="text-body-lg">
    Pico laser pigment v koži razbije na manjše delce. Odstranjevanje zato ni
    enkraten poseg, ampak proces, ki poteka skozi več tretmajev.
  </p>

  <p className="text-body">
    Med posameznimi tretmaji mora miniti dovolj časa, da se koža zaceli in da
    telo razgrajeni pigment postopoma odstrani. Koža se po tretmaju celi
    28–60 dni, zato se tretmaji izvajajo na 8 tednov.
  </p>

 <div className="mt-8 border-l border-neutral-300/70 pl-5">
  <p className="text-sm font-semibold text-ink">
    Kako telo odstrani pigment?
  </p>

  <p className="mt-2 text-body-sm text-ink-muted">
    Po tretmaju posebne celice imunskega sistema, imenovane{" "}
    <strong className="font-semibold text-neutral-800">makrofagi</strong>,
    postopoma zajamejo razbite delce pigmenta, telo pa jih nato preko{" "}
    <strong className="font-semibold text-neutral-800">
      limfnega sistema
    </strong>{" "}
    odstranjuje.
  </p>

  <p className="mt-3 text-body-sm text-ink-muted">
    Zato rezultat ni viden takoj po posegu, ampak se tetovaža postopoma svetli v
    tednih in mesecih po tretmaju.
  </p>
</div>

  <a
    href="/pico-laser"
    className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
  >
    Preberi več o Pico laser tehnologiji →
  </a>
</div>

            {/* PROCESS VISUAL */}
            <div className="image-block relative border border-neutral-200/60 bg-white">
              <Image
                src="/images/pico/pico-laser-process-01-desktop.webp"
                alt="Pico laser odstranjevanje tattooja med tretmajem"
                width={2560}
                height={1440}
                className="hidden aspect-[16/10] w-full object-cover lg:block"
              />

              <Image
                src="/images/pico/pico-laser-process-01-mobile.webp"
                alt="Pico laser odstranjevanje tattooja med tretmajem"
                width={1080}
                height={1350}
                className="block aspect-[4/5] w-full object-cover lg:hidden"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* FACTORS */}
      <section className="section-sm border-y border-neutral-200/70 bg-hero">
        <Container>
          <div className="section-gap">
            {/* HEADER */}
            <div className="header-stack max-w-2xl">
              <p className="eyebrow-muted">Kaj vpliva na rezultat</p>

              <h2 className="heading-section text-ink">
                Od česa je odvisno odstranjevanje tattooja
              </h2>

              <p className="text-body-lg">
                Končni rezultat ni enak pri vsakem tattooju — odvisen je od več
                dejavnikov.
              </p>
            </div>

            {/* MOBILE SUMMARY */}
            <div className="sm:hidden">
              <div className="flex max-w-[34ch] flex-col gap-3">
                <p className="text-body text-ink">
                  Na rezultat vplivajo barva pigmenta, starost tattooja, globina
                  nanosa in odziv kože.
                </p>

                <p className="text-body-sm text-ink-muted">
                  Na začetku lahko okvirno predvidimo potek, bolj jasen odziv
                  pigmenta pa se pokaže po nekaj tretmajih.
                </p>
              </div>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden gap-10 sm:grid sm:grid-cols-2 lg:gap-14">
              {factors.map((item, index) => (
                <div key={item.title} className="relative pl-6">
                  <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />

                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-base font-semibold text-ink">
                      {item.title}
                    </h3>

                    <p className="text-body max-w-[36ch]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-2">
              <a
                href="/rezultati"
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
              >
                Poglej realne rezultate odstranjevanja →
              </a>

              <a
                href="/odstranjevanje-tetovaze"
                className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
              >
                Preberi več o odstranjevanju tetovaž →
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ-LIKE INFO */}
      <section className="section-tight">
        <Container>
          <div className="section-gap">
            <div className="header-stack max-w-3xl">
              <p className="eyebrow-muted">Pogosta vprašanja</p>

              <h2 className="heading-section text-ink">
                Ali se tattoo lahko popolnoma odstrani?
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

              <Button href="/faq" variant="secondary-light">
                Pogosta vprašanja
              </Button>
            </div>

            <a
              href="/rezultati"
              className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
            >
              Poglej realne rezultate odstranjevanja →
            </a>
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

            <div className="cta-spacing flex flex-col items-center gap-4">
              <Button href="/posvet" variant="primary-light">
                Pošlji povpraševanje
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}