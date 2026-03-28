import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

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

  {/* HERO / INTRO */}
  <section className="section-sm">
    <Container>
      <div className="header-stack max-w-3xl">
        <p className="eyebrow-muted">Domžale</p>

        <h1 className="heading-display max-w-[16ch] text-neutral-950">
          Odstranjevanje tattoojev
          <br className="hidden sm:block" />
          v Domžalah
        </h1>

        <p className="text-body-lg max-w-[56ch]">
          V Domžalah izvajamo lasersko odstranjevanje tattoojev s Pico
          laser tehnologijo. Postopek temelji na postopnem razbijanju
          pigmenta, ki ga telo nato naravno odstrani.
        </p>
      </div>

      <div className="cta-spacing flex flex-wrap gap-4">
        <Button href="/posvet">Naroči posvet</Button>

        <Button href="/rezultati" variant="secondary-light">
          Poglej rezultate
        </Button>
      </div>
    </Container>
  </section>

  {/* PROCESS + LOCATION */}
  <section className="section-sm">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
        
        <div className="header-stack max-w-[60ch]">
          <h2 className="heading-section text-neutral-950">
            Pico laser za odstranjevanje tattoojev
          </h2>

          <p className="text-body-lg">
            Pico laser odda zelo kratek impulz svetlobe, ki pigment
            tattooja razbije na manjše delce. Ti delci se nato preko
            limfnega sistema postopoma odstranijo iz telesa.
          </p>

          <p className="text-body">
            Odstranjevanje tattoojev zato poteka postopoma in zahteva več
            tretmajev. Končni rezultat je vedno odvisen od pigmenta,
            globine nanosa in odziva kože.
          </p>
        </div>

        <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 sm:p-8">
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              Lokacija
            </p>

            <h3 className="heading-tight text-2xl text-neutral-950">
              Studio v Domžalah
            </h3>

            <p className="text-body">
              Studio se nahaja v Domžalah, kar omogoča enostaven dostop iz
              Ljubljane in okolice.
            </p>

            <p className="text-body">
              Pred začetkom odstranjevanja vedno naredimo individualno
              oceno tattooja in pripravimo realen načrt postopka.
            </p>
          </div>
        </div>

      </div>
    </Container>
  </section>

  {/* CONSULT CTA */}
  <section className="section-sm border-y border-neutral-200 bg-neutral-50">
    <Container>
      <div className="section-gap">
        
        <div className="header-stack max-w-2xl">
          <p className="eyebrow-muted">Posvet</p>

          <h2 className="heading-section text-neutral-950">
            Individualna ocena tattooja
          </h2>

          <p className="text-body-lg">
            Pred začetkom postopka pregledamo tattoo in ocenimo možnosti
            odstranjevanja glede na pigment, velikost in starost tetovaže.
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

</main>
  );
}