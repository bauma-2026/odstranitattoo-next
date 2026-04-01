import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import OpenCookieSettingsButton from "@/components/ui/OpenCookieSettingsButton";


export const metadata: Metadata = {
  title: "Politika piškotkov",
  description:
    "Informacije o uporabi piškotkov na strani Odstrani Tattoo.",
  alternates: {
    canonical: "https://odstranitattoo.si/piskotki",
  },
};

export default function PiskotkiPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="section-sm border-b border-neutral-200/40 bg-white">
        <Container>
          <div className="header-stack max-w-2xl">
            <p className="eyebrow-muted">Piškotki</p>

            <h1 className="heading-display text-neutral-950">
              Politika piškotkov
            </h1>

            <p className="text-body-lg">
              Na tej strani pojasnjujemo, katere piškotke uporabljamo, zakaj jih
              uporabljamo in kako lahko upravljate svoje nastavitve.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="section-sm bg-white">
        <Container>
          <div className="body-stack max-w-2xl">
            {/* Kaj so */}
            <div className="content-stack">
              <h2 className="heading-tight text-xl text-neutral-950">
                Kaj so piškotki
              </h2>
              <p className="text-body">
                Piškotki so majhne datoteke, ki jih spletna stran shrani na vašo
                napravo. Omogočajo osnovno delovanje strani in pomagajo izboljšati
                uporabniško izkušnjo.
              </p>
            </div>

            {/* Katere */}
            <div className="content-stack">
              <h2 className="heading-tight text-xl text-neutral-950">
                Katere piškotke uporabljamo
              </h2>

              <div className="content-stack">
                <p className="text-body">
                  <strong>Nujni piškotki</strong> so potrebni za delovanje strani
                  in jih ni mogoče izklopiti.
                </p>

                <p className="text-body">
                  <strong>Analitični piškotki</strong> nam pomagajo razumeti uporabo
                  strani in izboljšati vsebino. Uporabljamo jih samo z vašim
                  soglasjem.
                </p>
              </div>
            </div>

            {/* Nastavitve */}
            <div className="content-stack">
              <h2 className="heading-tight text-xl text-neutral-950">
                Upravljanje nastavitev
              </h2>
              <p className="text-body">
                Piškotke lahko upravljate v svojem brskalniku ali preko nastavitev
                na tej strani.
              </p>

         <OpenCookieSettingsButton className="mt-2 inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100" />
            </div>

            {/* Kontakt */}
            <div className="content-stack">
              <h2 className="heading-tight text-xl text-neutral-950">
                Kontakt
              </h2>
              <p className="text-body">
                Za dodatna vprašanja glede piškotkov nas lahko kontaktirate na{" "}
                <a
                  href="mailto:odstranitattoo@gmail.com"
                  className="underline underline-offset-4"
                >
                  odstranitattoo@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}