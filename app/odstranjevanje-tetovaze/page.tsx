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
  title: "Odstranjevanje tetovaže z laserjem",
  description:
    "Kako poteka odstranjevanje tetovaže z laserjem, koliko tretmajev je potrebnih in kaj vpliva na končni rezultat.",
  alternates: {
    canonical: "https://odstranitattoo.si/odstranjevanje-tetovaze",
  },
};

const factors = [
  {
    title: "Barva pigmenta",
    text: "Nekatere barve se odstranjujejo hitreje kot druge, zato je potek odstranjevanja vedno odvisen od posamezne tetovaže.",
  },
  {
    title: "Globina nanosa",
    text: "Globlje nanešen pigment običajno zahteva več tretmajev in daljši čas med posameznimi obiski.",
  },
  {
    title: "Starost tetovaže",
    text: "Starejše tetovaže pogosto reagirajo drugače kot nove, zato je vsaka ocena vedno individualna.",
  },
  {
    title: "Tip kože",
    text: "Na hitrost odstranjevanja vplivata regeneracija kože in odziv telesa po tretmaju.",
  },
];

export default function OdstranjevanjeTetovazePage() {
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
        <p className="eyebrow-dark">Odstranjevanje tetovaže</p>

        <h1 className="heading-display text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
          Kako poteka odstranjevanje
          <br />
          tetovaže z laserjem
        </h1>

        <p className="text-body-inverse-lg max-w-[52ch]">
          Lasersko odstranjevanje tetovaže temelji na razbijanju pigmenta v
          koži. Pico laser odda zelo kratek impulz energije, ki pigment
          razbije na manjše delce, telo pa jih nato postopoma odstrani.
        </p>

        <div className="cta-spacing flex flex-wrap gap-4">
          <Button href="/posvet" variant="primary-dark">
            Naroči posvet
          </Button>

          <Button href="/rezultati" variant="secondary-dark">
            Poglej rezultate
          </Button>
        </div>
      </div>
    </Container>

    <div className="pointer-events-none absolute inset-0 z-[1]">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
    </div>
  </section>

  {/* PROCESS */}
  <section className="section-sm">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:gap-14">
        <div className="header-stack max-w-[60ch]">
          <h2 className="heading-section text-neutral-950">
            Zakaj se tetovaža odstranjuje postopoma
          </h2>

          <p className="text-body-lg">
            Laser pigment razbije na manjše delce, vendar jih telo odstrani
            postopoma. Zato je med posameznimi tretmaji potreben čas, da se
            koža regenerira in da limfni sistem odstrani razgrajene delce
            pigmenta.
          </p>

          <p className="text-body">
            Postopek je zato vedno individualen in prilagojen tetovaži,
            tipu kože ter odzivu telesa.
          </p>
        </div>

        <div className="rounded-[28px] border border-skin-400/25 bg-skin-50/60 p-7 sm:p-8">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-skin-500/90">
              Realna pričakovanja
            </p>

            <h3 className="heading-tight text-2xl text-skin-900">
              Ali se tetovaža lahko popolnoma odstrani?
            </h3>

            <p className="text-skin-body">
              Veliko tetovaž se lahko zelo uspešno odstrani, vendar je
              rezultat vedno odvisen od pigmenta, globine nanosa, starosti
              tetovaže in regeneracije kože.
            </p>
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
          <p className="eyebrow-muted">Dejavniki</p>

          <h2 className="heading-section text-neutral-950">
            Kaj vpliva na odstranjevanje tetovaže
          </h2>

          <p className="text-body-lg">
            Na končni rezultat vpliva več dejavnikov, ki določajo hitrost in
            uspešnost postopka.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {factors.map((item) => (
            <div
              key={item.title}
              className="image-block border border-neutral-200 bg-white p-5"
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
      </div>
    </Container>
  </section>

  {/* INFO CTA */}
  <section className="section-tight">
    <Container>
      <div className="section-gap">
        <div className="header-stack max-w-3xl">
          <p className="eyebrow-muted">Pogosta vprašanja</p>

          <h2 className="heading-section text-neutral-950">
            Ali se tetovaža lahko popolnoma odstrani?
          </h2>

          <p className="text-body-lg">
            Veliko tetovaž je mogoče zelo uspešno odstraniti, vendar je
            končni rezultat vedno odvisen od pigmenta, globine nanosa,
            starosti tetovaže in odziva kože. Zato je pomembno, da se
            odstranjevanje začne z realnimi pričakovanji.
          </p>

          <p className="text-body">
            V nekaterih primerih je cilj popolna odstranitev, v drugih pa
            postopno bledenje pigmenta za cover-up. Vsak primer zato ocenimo
            individualno.
          </p>
        </div>

        <div className="cta-spacing flex flex-wrap gap-4">
          <Button href="/posvet">Naroči posvet</Button>

          <Button href="/kontakt" variant="secondary-light">
            Kontakt
          </Button>
        </div>
      </div>
    </Container>
  </section>

  {/* DARK CTA */}
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
            Razmišljate o odstranitvi tetovaže?
          </h2>

          <p className="text-body-inverse max-w-[52ch]">
            Na posvetu pregledamo tetovažo, razložimo potek odstranjevanja in
            podamo realno oceno glede na vaš primer.
          </p>
        </div>

        <div className="cta-spacing flex flex-wrap justify-center gap-4">
          <Button href="/posvet" variant="primary-dark">
            Naroči posvet
          </Button>

          <Button href="/kontakt" variant="secondary-dark">
            Kontakt
          </Button>
        </div>
      </div>
    </Container>
  </section>
</main>
  );
}