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
    title: "Izjemno kratek impulz",
    text: "Pico laser deluje v zelo kratkih impulzih, zato pigment razbije bolj natančno in na manjše delce.",
  },
  {
    title: "Manjša obremenitev kože",
    text: "Energija je usmerjena predvsem v pigment tattooja, zato je okoliško tkivo manj obremenjeno kot pri starejših tehnologijah.",
  },
  {
    title: "Lažje odstranjevanje pigmenta",
    text: "Manjši delci pigmenta se lažje postopoma odstranjujejo preko imunskega in limfnega sistema.",
  },
  {
    title: "Boljši nadzor nad postopkom",
    text: "Odstranjevanje je bolj postopno, bolj natančno in bolje prilagojeno posameznemu tattooju ter odzivu kože.",
  },
];

const process = [
  {
    title: "Svetlobni impulz",
    text: "Pico laser odda zelo kratek impulz, ki se usmeri v pigment tattooja.",
  },
  {
    title: "Razbitje pigmenta",
    text: "Pigment se razbije na manjše delce, ki jih telo lažje postopoma obdela.",
  },
  {
    title: "Naravno odstranjevanje",
    text: "Telo razbite delce pigmenta skozi čas odstranjuje preko imunskega in limfnega sistema.",
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

        <h1 className="heading-display text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
          Zakaj je Pico laser
          <br />
          bolj učinkovit
        </h1>
<p className="text-body-inverse-lg max-w-[52ch]">
  Pico laser pigment tattooja razbije na manjše delce kot starejše
  tehnologije. Zato ga telo lažje postopoma odstranjuje, koža pa je pri
  postopku manj obremenjena.
</p>

<p className="text-body-inverse-sm max-w-[52ch]">
  Izbira tehnologije neposredno vpliva na potek odstranjevanja in končni rezultat.
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
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
        <div className="header-stack max-w-[60ch]">
          <h2 className="heading-section text-neutral-950">
            Zakaj je Pico laser bolj učinkovit
          </h2>

 <p className="text-body-lg">
  Pico laser deluje v izjemno kratkih impulzih, zato pigment tattooja
  razbije bolj natančno.
</p>

<p className="text-body">
  To pomeni manjšo obremenitev kože, boljši nadzor nad postopkom in bolj
  predvidljiv potek odstranjevanja.
</p>

          <a
            href="/faq"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
          >
            Preberi pogosta vprašanja o postopku →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="
                image-block border border-neutral-200/60 bg-white/80 backdrop-blur-[1px] p-5
                transition-all duration-300
                hover:border-skin-400/50
                hover:bg-skin-50
                hover:shadow-[0_10px_24px_rgba(var(--skin-rgb),0.14)]
              "
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                  {item.title}
                </h3>

                <p className="text-body-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>

  {/* PROCESS */}
  <section className="relative section-sm border-y border-skin-400/20 bg-skin-50/60">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--skin-rgb),0.035),transparent_60%)]" />

    <Container>
      <div className="section-gap">
        <div className="header-stack max-w-2xl">
          <p className="eyebrow-skin">Proces</p>

          <h2 className="heading-section text-neutral-950">
           Kako telo postopoma odstranjuje pigment
          </h2>

<p className="text-body-lg">
  Laserski tretma je prvi korak. Ko se pigment razbije, telo te delce
  skozi čas postopoma odstranjuje preko imunskega in limfnega sistema.
</p>

          <a
            href="/odstranjevanje-tattoojev"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
          >
            Preberi več o celotnem procesu odstranjevanja →
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          {process.map((item, index) => (
            <div
              key={item.title}
              className={[
                "flex flex-col gap-3",
                "sm:border-r sm:border-neutral-200/40 sm:pr-6",
                index === process.length - 1 ? "sm:border-r-0 sm:pr-0" : "",
              ].join(" ")}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-skin-500/80">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                {item.title}
              </h3>

              <p className="text-body-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>

  {/* TECHNOLOGY COMPARISON */}
  <section className="section-sm border-y border-neutral-200/40 bg-white">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div className="header-stack max-w-[60ch]">
          <p className="eyebrow-skin">Tehnologija</p>

          <h2 className="heading-section text-neutral-950">
            Kaj Pico laser naredi drugače
          </h2>

 <p className="text-body-lg">
  Razlika ni samo v tehnologiji, ampak v tem, kako telo lahko nadaljuje
  proces odstranjevanja po tretmaju.
</p>

<p className="text-body">
  Pico laser omogoča bolj postopno odstranjevanje, manjšo obremenitev kože
  in bolj natančen pristop glede na posamezen tattoo in odziv kože.
</p>

          <div className="grid gap-3 pt-2 sm:grid-cols-2">
            {/* bullets ostanejo */}
          </div>

          <a
            href="/rezultati"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
          >
            Poglej realne rezultate odstranjevanja →
          </a>
        </div>

        {/* VISUAL ostane enak */}
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
            Razmišljate o odstranjevanju tattooja?
          </h2>

         <p className="text-body-inverse max-w-[52ch]">
  Na posvetu pregledamo tattoo, ocenimo možnosti odstranjevanja in
  razložimo, kaj lahko glede na vaš primer realno pričakujete.
</p>
        </div>

        <div className="cta-spacing flex flex-wrap justify-center gap-4">
          <Button href="/posvet" variant="primary-dark">
            Naroči brezplačen posvet
          </Button>

          <Button href="/rezultati" variant="secondary-dark">
            Poglej rezultate
          </Button>
        </div>

        <a
          href="/faq"
          className="mt-4 text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
        >
          Preberi pogosta vprašanja →
        </a>

       <p className="mt-4 text-sm text-white/50">
  Posvet je brezplačen in namenjen realni oceni vašega primera.
</p>
      </div>
    </Container>
  </section>
</main>
  );
}