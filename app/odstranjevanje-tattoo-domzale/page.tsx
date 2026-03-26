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

   <section className="pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Domžale
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight leading-[1.05] text-neutral-950 sm:text-[48px]">
              Odstranjevanje tattoojev
              <br className="hidden sm:block" />
              v Domžalah
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-neutral-700">
              V Domžalah izvajamo lasersko odstranjevanje tattoojev s Pico
              laser tehnologijo. Postopek temelji na postopnem razbijanju
              pigmenta, ki ga telo nato naravno odstrani.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/posvet">Naroči posvet</Button>

              <Button href="/rezultati" variant="secondary-light">
                Poglej rezultate
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                Pico laser za odstranjevanje tattoojev
              </h2>

              <p className="mt-6 text-lg leading-[1.6] text-neutral-700">
                Pico laser odda zelo kratek impulz svetlobe, ki pigment
                tattooja razbije na manjše delce. Ti delci se nato preko
                limfnega sistema postopoma odstranijo iz telesa.
              </p>

              <p className="mt-5 leading-7 text-neutral-600">
                Odstranjevanje tattoojev zato poteka postopoma in zahteva več
                tretmajev. Končni rezultat je vedno odvisen od pigmenta,
                globine nanosa in odziva kože.
              </p>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-neutral-500">
                Lokacija
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-950">
                Studio v Domžalah
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Studio se nahaja v Domžalah, kar omogoča enostaven dostop iz
                Ljubljane in okolice.
              </p>

              <p className="mt-3 leading-7 text-neutral-600">
                Pred začetkom odstranjevanja vedno naredimo individualno
                oceno tattooja in pripravimo realen načrt postopka.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Posvet
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Individualna ocena tattooja
            </h2>

            <p className="mt-6 text-lg leading-[1.6] text-neutral-700">
              Pred začetkom postopka pregledamo tattoo in ocenimo možnosti
              odstranjevanja glede na pigment, velikost in starost tetovaže.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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