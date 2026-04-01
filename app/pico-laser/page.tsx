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
{/* DESKTOP */}
<p className="hidden text-body-inverse-lg max-w-[52ch] sm:block">
  Pico laser razbije pigment na bistveno manjše delce, zato ga telo
  lažje odstranjuje. To pomeni manj tretmajev, manjšo obremenitev kože
  in boljši nadzor nad rezultatom.
</p>

{/* MOBILE */}
<p className="text-body-inverse-lg max-w-[52ch] sm:hidden">
  Pico laser razbije pigment na manjše delce, zato ga telo lažje odstranjuje.
</p>

      {/* DESKTOP */}
      <p className="hidden text-body-inverse-sm max-w-[52ch] sm:block">
        Končni rezultat je odvisen od pigmenta, globine nanosa in odziva kože.
        Zato je pred začetkom vedno ključna realna ocena.
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

<section className="section-sm bg-white">
  <Container>
    {/* TOP TEXT */}
    <div className="header-stack max-w-[60ch]">
      <p className="eyebrow-muted">Prednosti</p>

      <h2 className="heading-section text-neutral-950">
        Zakaj je Pico laser bolj učinkovit
      </h2>

      <p className="text-body-lg">
        Pico laser deluje v izjemno kratkih impulzih, zato pigment razbije
        bolj natančno in na manjše delce.
      </p>

      <p className="text-body">
        To pomeni manjšo obremenitev kože, boljši nadzor nad postopkom in
        bolj predvidljiv potek odstranjevanja.
      </p>

      {/* MOBILE SUMMARY */}
      <div className="sm:hidden">
        <div className="flex flex-col gap-3 max-w-[34ch]">
          <p className="text-body text-neutral-900">
            Za vas to pomeni manjšo obremenitev kože, lažje odstranjevanje pigmenta in bolj nadzorovan potek odstranjevanja.
          </p>

          <p className="text-body-sm text-neutral-600">
            Končni rezultat je še vedno odvisen od tattooja, zato je pred začetkom pomembna realna ocena.
          </p>
        </div>
      </div>

      <a
        href="/faq"
        className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
      >
        Preberi pogosta vprašanja o postopku →
      </a>
    </div>

    {/* BENEFITS GRID */}
    <div className="mt-12 hidden gap-8 sm:grid sm:grid-cols-2 lg:mt-16">
      
      {/* 01 */}
      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
            01
          </span>
          <h3 className="text-base font-semibold text-neutral-950">
            Manjša obremenitev kože
          </h3>
          <p className="text-body max-w-[36ch]">
            Pico laser deluje v zelo kratkih impulzih, zato je vpliv na okolno tkivo manjši kot pri starejših tehnologijah.
          </p>
        </div>
      </div>

      {/* 02 */}
      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
            02
          </span>
          <h3 className="text-base font-semibold text-neutral-950">
            Lažje odstranjevanje pigmenta
          </h3>
          <p className="text-body max-w-[36ch]">
            Ker laser pigment razbije na manjše delce, ga telo lažje postopoma odstranjuje skozi naravne procese.
          </p>
        </div>
      </div>

      {/* 03 */}
      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
            03
          </span>
          <h3 className="text-base font-semibold text-neutral-950">
            Bolj predvidljiv proces
          </h3>
          <p className="text-body max-w-[36ch]">
            Odstranjevanje poteka bolj postopno in nadzorovano, zato je lažje oceniti, kako se tattoo odziva skozi tretmaje.
          </p>
        </div>
      </div>

      {/* 04 */}
      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-[0.14em] text-skin-500/70">
            04
          </span>
          <h3 className="text-base font-semibold text-neutral-950">
            Učinkovit tudi pri zahtevnih tattoojih
          </h3>
          <p className="text-body max-w-[36ch]">
            Tehnologija omogoča natančnejše razbijanje pigmenta, kar je pomembno pri gostejših ali zahtevnejših tattoojih.
          </p>
        </div>
      </div>

    </div>
  </Container>
</section>

  {/* PROCESS */}
<section className="relative section-sm border-y border-neutral-200/70 bg-neutral-50/80">
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--skin-rgb),0.035),transparent_60%)]" />

  <Container>
    <div className="section-gap">
      <div className="header-stack max-w-2xl">
        <p className="eyebrow-muted">Proces</p>

        <h2 className="heading-section text-neutral-950">
          Kako telo postopoma odstranjuje pigment
        </h2>

        <p className="text-body-lg">
          Laser pigment najprej razbije na manjše delce. Telo jih nato skozi čas
          postopoma odstranjuje preko naravnih procesov.
        </p>

        <p className="text-body">
          Zato odstranjevanje tattooja ni enkraten poseg, ampak proces, ki se
          razvija med posameznimi tretmaji.
        </p>

        {/* MOBILE SUMMARY */}
        <div className="sm:hidden">
          <div className="flex flex-col gap-3 max-w-[34ch]">
            <p className="text-body text-neutral-900">
              Najprej se pigment razbije, nato ga telo postopoma odstranjuje, zato tattoo bledi skozi čas.
            </p>

            <p className="text-body-sm text-neutral-600">
              Prav zato so med tretmaji potrebni razmiki in realna pričakovanja.
            </p>
          </div>
        </div>

        <a
          href="/odstranjevanje-tattoojev"
          className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
        >
          Preberi več o celotnem procesu odstranjevanja →
        </a>
      </div>

      {/* DESKTOP STEPS */}
      <div className="hidden gap-8 sm:grid sm:grid-cols-3 sm:gap-10">
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
<section className="section-sm border-y border-neutral-200/70 bg-neutral-100/80">
  <Container>
    {/* TOP */}
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
      {/* LEFT */}
      <div className="header-stack max-w-[60ch]">
        <p className="eyebrow-muted">Tehnologija</p>

        <h2 className="heading-section text-neutral-950">
          Kaj Pico laser naredi drugače
        </h2>

        <p className="text-body-lg">
          Pico laser deluje v izjemno kratkih impulzih, zato pigment razbije
          bolj natančno in z manjšo obremenitvijo kože.
        </p>

        <p className="text-body">
          Razlika ni samo v tehnologiji, ampak v tem, kako telo po tretmaju
          nadaljuje proces odstranjevanja. Manjši delci pigmenta se lažje
          postopoma odstranjujejo, zato je potek bolj nadzorovan in bolj
          predvidljiv.
        </p>

        {/* MOBILE SUMMARY */}
        <div className="sm:hidden">
          <div className="flex max-w-[34ch] flex-col gap-3">
            <p className="text-body text-neutral-900">
              Pico laser pomeni manjšo obremenitev kože, natančnejše razbijanje
              pigmenta in bolj postopen potek odstranjevanja.
            </p>

            <p className="text-body-sm text-neutral-600">
              Končni rezultat je še vedno odvisen od tattooja, zato je pred
              začetkom pomembna realna ocena.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="hidden lg:block">
        {/* tukaj ostane tvoj visual */}
      </div>
    </div>

    {/* DESKTOP BENEFITS — FULL WIDTH */}
    <div className="mt-12 hidden border-t border-neutral-200/70 pt-8 sm:grid sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-10 lg:pt-10">
      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Manj toplote
          </h3>
          <p className="text-body-sm">
            Koža je med postopkom manj obremenjena kot pri starejših tehnologijah.
          </p>
        </div>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Natančnejše razbijanje pigmenta
          </h3>
          <p className="text-body-sm">
            Pigment se razbije na manjše delce, ki jih telo lažje postopoma odstranjuje.
          </p>
        </div>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Boljši nadzor
          </h3>
          <p className="text-body-sm">
            Potek odstranjevanja je bolj postopen in lažje prilagojen posameznemu tattooju.
          </p>
        </div>
      </div>

      <div className="relative pl-6">
        <div className="absolute left-0 top-1 h-[80%] w-[2px] bg-skin-400/60" />
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Bolj predvidljiv proces
          </h3>
          <p className="text-body-sm">
            Ker telo pigment odstranjuje postopoma, je lažje razumeti, kako se tattoo odziva skozi tretmaje.
          </p>
        </div>
      </div>
    </div>

    {/* LINK */}
    <div className="mt-8 lg:mt-10">
      <a
        href="/rezultati"
        className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
      >
        Poglej realne rezultate odstranjevanja →
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
  Preverite svoj primer
</h2>

<p className="text-body-inverse max-w-[52ch]">
  Na posvetu pregledamo tattoo in vam jasno povemo,
  <br className="hidden sm:block" />
  kaj je pri vašem primeru smiselno pričakovati.
</p>

<div className="cta-spacing flex flex-wrap justify-center gap-4">
  <Button href="/posvet" variant="primary-dark">
    Preveri svoj primer
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
  Brezplačno • brez obveznosti • realna ocena
</p>      </div></div>
    </Container>
  </section>
</main>
  );
}