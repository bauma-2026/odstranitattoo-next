import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Container from "@/components/layout/Container";
import OpenCookieSettingsButton from "@/components/ui/OpenCookieSettingsButton";


export const metadata: Metadata = pageMetadata({
  path: "/piskotki",
  title: "Politika piškotkov",
  description:
    "Informacije o uporabi piškotkov na strani Odstrani Tattoo.",
});

export default function PiskotkiPage() {
  return (
    <main className="bg-canvas text-ink">
      {/* HERO */}
      <section className="section-sm border-b border-neutral-200/40 bg-white">
        <Container>
          <div className="header-stack max-w-2xl">
            <p className="eyebrow-muted">Piškotki</p>

            <h1 className="heading-display leading-[1.04] text-ink">
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
              <h2 className="heading-tight text-xl text-ink">
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
  <h2 className="heading-tight text-xl text-ink">
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

    <p className="text-body">
      Za osnovno statistiko obiska spletnega mesta uporabljamo Vercel
      Analytics. Podatke uporabljamo za razumevanje obiskanosti strani,
      delovanja strani in izboljšanje uporabniške izkušnje. Statistika se ne
      uporablja za oglaševanje ali profiliranje uporabnikov.
    </p>
  </div>
</div>

            {/* Nastavitve */}
            <div className="content-stack">
              <h2 className="heading-tight text-xl text-ink">
                Upravljanje nastavitev
              </h2>
              <p className="text-body">
                Piškotke lahko upravljate v svojem brskalniku ali preko nastavitev
                na tej strani.
              </p>

         <OpenCookieSettingsButton className="mt-2 inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium text-ink transition hover:bg-neutral-100" />
            </div>

            {/* Kontakt */}
            <div className="content-stack">
              <h2 className="heading-tight text-xl text-ink">
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