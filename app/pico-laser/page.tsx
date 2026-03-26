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
    text: "Pico laser deluje v izjemno kratkih časovnih intervalih, kar omogoča učinkovitejše razbijanje pigmenta na manjše delce.",
  },
  {
    title: "Manjša obremenitev kože",
    text: "Energija je bolj usmerjena v pigment tetovaže, zato je okoliško tkivo manj obremenjeno kot pri starejših tehnologijah.",
  },
  {
    title: "Hitrejše razbijanje pigmenta",
    text: "Manjši delci pigmenta se lažje in hitreje odstranjujejo preko imunskega in limfnega sistema.",
  },
  {
    title: "Boljši končni rezultat",
    text: "Odstranjevanje je bolj postopno, natančno in prilagojeno posamezni tetovaži ter odzivu kože.",
  },
];

const process = [
  {
    title: "Svetlobni impulz",
    text: "Pico laser odda zelo kratek svetlobni impulz, ki se usmeri v pigment tetovaže.",
  },
  {
    title: "Razgradnja pigmenta",
    text: "Pigment se razbije na drobnejše delce, ki jih telo lažje obdela.",
  },
  {
    title: "Naravno odstranjevanje",
    text: "Imunski sistem in limfni sistem postopoma odstranjujeta razbite delce pigmenta.",
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
          <div className="flex max-w-2xl flex-col gap-4 sm:gap-5">
            <p className="eyebrow-dark">Pico laser</p>

            <h1 className="heading-display text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
              Zakaj je Pico laser
              <br />
              bolj učinkovit
            </h1>

            <p className="text-body-inverse-lg max-w-[52ch]">
              Pico laser odda izjemno kratek svetlobni impulz, ki pigment
              tetovaže razbije na zelo majhne delce. Ti so manjši kot pri
              starejših tehnologijah, zato jih telo lažje odstrani.
            </p>

            <p className="text-body-inverse-sm max-w-[52ch]">
              Rezultat je bolj natančno razgrajen pigment in manjša obremenitev
              kože.
            </p>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-sm bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
            <div className="flex max-w-[60ch] flex-col gap-4 sm:gap-5">
              <h2 className="heading-section text-neutral-950">
                Zakaj je Pico laser učinkovitejši
              </h2>

              <p className="text-body-lg">
                Pico laser deluje v pikosekundah – energijo odda v izjemno
                kratkem času. Zaradi tega pigment razbije bolj natančno in z
                manjšo obremenitvijo za kožo.
              </p>

              <p className="text-body">
                Pri odstranjevanju tattoojev to pomeni učinkovitejšo razgradnjo
                pigmenta, boljši nadzor nad postopkom in bolj realne možnosti za
                postopno odstranjevanje tetovaže.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="
  image-block border border-neutral-200/60 bg-white/80 backdrop-blur-[1px] p-6
  transition-all duration-300
  hover:border-skin-400/50
  hover:bg-skin-50
  hover:shadow-[0_10px_24px_rgba(var(--skin-rgb),0.14)]
"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-neutral-950">
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

<section className="relative section-sm border-y border-skin-400/20 bg-skin-50/60 pt-16 sm:pt-20 pb-12 sm:pb-14">
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--skin-rgb),0.035),transparent_60%)]" />
  <Container>
    <div className="flex flex-col gap-12 sm:gap-14">
      <div className="flex max-w-2xl flex-col gap-4 sm:gap-5">
        <p className="eyebrow-skin">Proces</p>

        <h2 className="heading-section text-neutral-950">
          Kako telo odstranjuje pigment
        </h2>

        <p className="text-body-lg">
          Laserski tretma je le prvi del postopka. Po razbitju pigmenta telo te
          delce postopoma odstranjuje preko imunskega in limfnega sistema.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-3 sm:gap-12">
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

            <p className="text-body-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>

   {/* TECHNOLOGY COMPARISON */}
<section className="relative section-sm border-y border-neutral-200/40 bg-white pt-16 sm:pt-20">
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(var(--skin-rgb),0.035),transparent_60%)]" />
  <Container className="relative z-10">
    <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
      {/* LEFT – TEXT */}
      <div className="flex max-w-[60ch] flex-col gap-5">
        <p className="eyebrow-skin">Tehnologija</p>

        <h2 className="heading-section text-neutral-950">
          Kaj Pico laser naredi drugače
        </h2>

        <p className="text-body-lg">
          Pico laser deluje v izjemno kratkih impulzih, ki pigment tetovaže
          razbijejo na bistveno manjše delce kot starejše tehnologije.
        </p>

        <p className="text-body">
          Manjši delci pomenijo, da jih telo lažje odstrani. Rezultat je bolj
          postopno odstranjevanje tetovaže, manjša obremenitev kože in boljši
          nadzor nad celotnim procesom.
        </p>

        <div className="grid gap-4 pt-3 sm:grid-cols-2">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-neutral-950">
              Natančnejša razgradnja pigmenta
            </p>
            <p className="text-body-sm">
              pigment se razbije na manjše delce
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-neutral-950">
              Manjša obremenitev kože
            </p>
            <p className="text-body-sm">
              energija je bolj usmerjena v pigment
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-neutral-950">
              Postopen in kontroliran proces
            </p>
            <p className="text-body-sm">
              boljši nadzor nad odstranjevanjem
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-neutral-950">
              Boljši končni rezultat
            </p>
            <p className="text-body-sm">
              realno odstranjevanje brez poškodb kože
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT – VISUAL */}
      <div className="rounded-[28px] border border-skin-400/18 bg-white/70 p-5 backdrop-blur-[2px] sm:p-6">
        <div className="flex flex-col gap-8">
          {/* KLASIČNI LASER */}
          <div className="grid items-center gap-5 sm:grid-cols-[280px_1fr]">
            <img
              src="/images/pico/klasicni_laser_visual.png"
              alt="Klasični laser razgradnja pigmenta"
              className="w-full max-w-[280px] rounded-[18px] object-contain"
            />

            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                Klasični laser
              </p>

              <p className="text-body text-neutral-600">
                Pigment se razbije na večje delce, ki jih telo težje odstrani.
              </p>
            </div>
          </div>

          {/* PICO LASER */}
          <div className="grid items-center gap-5 sm:grid-cols-[280px_1fr]">
            <img
              src="/images/pico/pico_laser_visual.png"
              alt="Pico laser razgradnja pigmenta"
              className="w-full max-w-[280px] rounded-[18px] object-contain"
            />

            <div className="flex flex-col gap-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-skin-500/90">
                Pico laser
              </p>

              <p className="text-body text-neutral-700">
                Pigment se razbije na bistveno manjše delce, ki jih telo hitreje
                odstrani.
              </p>
            </div>
          </div>

          {/* QUIET TAKEAWAY */}
          <p className="border-t border-skin-400/12 pt-5 text-body-sm text-neutral-500">
            Manjši delci omogočajo hitrejše in učinkovitejše odstranjevanje pigmenta.
          </p>
        </div>
      </div>
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
              Razmišljate o odstranitvi tetovaže?
            </h2>

            <p className="text-body-inverse max-w-[52ch]">
              Naročite se na brezplačen posvet, kjer ocenimo stanje tetovaže,
              število potrebnih tretmajev in vam razložimo celoten postopek.
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

              <Button href="/rezultati" variant="secondary-dark">
                Poglej rezultate
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