import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

const expectations = [
  {
    title: "Kaj pričakovati pri prvem tretmaju?",
    text: "Prvi tretma je pogosto najbolj neznan del postopka. Občutek je lahko intenziven, vendar traja kratek čas in je za večino strank bolj znosen, kot so pričakovale.",
  },
  {
    title: "Kako stranka občuti postopek?",
    text: "Občutek med laserjem se pogosto opiše kot kratek, vroč ali pekoč občutek na koži. Med tretmajem uporabljamo hlajenje, ki občutek bistveno omili.",
  },
  {
    title: "Koliko časa traja en tretma?",
    text: "Trajanje je odvisno od velikosti tattooja, gostote pigmenta in lokacije na telesu. Manjši tretmaji trajajo le nekaj minut, večji lahko dlje.",
  },
  {
    title: "Kako izgleda koža po tretmaju?",
    text: "Koža je lahko takoj po tretmaju pordela, rahlo otekla ali občutljiva na dotik. Včasih se pojavi občutek toplote, podoben sončni opeklini.",
  },
];

export default function PosvetPage() {
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
            <p className="eyebrow-dark">Posvet</p>

            <h1 className="heading-display leading-[1.04] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
              Kako ocenimo
              <br />
              vaš tattoo
            </h1>

            <p className="max-w-[52ch] text-body-inverse-lg">
              Na posvetu pregledamo tattoo, ocenimo možnosti odstranjevanja in
              razložimo, kaj lahko glede na vaš primer realno pričakujete.
            </p>

            <p className="max-w-[52ch] text-body-inverse-sm">
              Cilj posveta je jasna ocena, realna pričakovanja in miren
              naslednji korak.
            </p>

            <div className="flex flex-col gap-2 pt-3">
              <a
                href="/rezultati"
                className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
              >
                Poglej rezultate pred in po →
              </a>

              <a
                href="/faq"
                className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
              >
                Preberi pogosta vprašanja →
              </a>
            </div>
          </div>
        </Container>

        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/35" />
        </div>
      </section>

      {/* CONSULTATION CONTENT */}
      <section className="section-tight bg-white">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
            {/* WHITE SIDE */}
            <div className="rounded-[28px] bg-white px-5 pt-4 pb-6 sm:px-8 sm:pt-6 sm:pb-8">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <h2 className="heading-tight text-2xl text-neutral-950">
                    Kaj dobite na posvetu
                  </h2>

                  <p className="max-w-[48ch] text-body">
                    Posvet je namenjen temu, da dobite jasno oceno tattooja,
                    razumete potek odstranjevanja in lažje presodite, kaj je
                    smiseln naslednji korak.
                  </p>
                </div>

                <div className="flex flex-col divide-y divide-neutral-200/70">
                  <div className="py-5 first:pt-0">
                    <h3 className="text-base font-semibold text-neutral-950">
                      Pregled tattooja
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-body">
                      Ocenimo velikost, pigment, starost tattooja in stanje
                      kože, ker vse to vpliva na potek odstranjevanja.
                    </p>
                  </div>

                  <div className="py-5">
                    <h3 className="text-base font-semibold text-neutral-950">
                      Potek odstranjevanja
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-body">
                      Razložimo, kako postopek poteka, zakaj je potreben čas med
                      tretmaji in kaj lahko pričakujete po posameznem obisku.
                    </p>
                  </div>

                  <div className="py-5">
                    <h3 className="text-base font-semibold text-neutral-950">
                      Realna ocena
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-body">
                      Podamo realna pričakovanja glede poteka odstranjevanja in
                      okvirne ocene, koliko tretmajev je lahko potrebnih.
                    </p>
                  </div>

                  <div className="py-5 last:pb-0">
                    <h3 className="text-base font-semibold text-neutral-950">
                      Naslednji korak
                    </h3>
                    <p className="mt-2 max-w-[46ch] text-body">
                      Po posvetu imate bolj jasno sliko, ali želite začeti s
                      postopkom in kako bi ta glede na vaš primer potekal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DARK SIDE */}
            <div className="rounded-[28px] border border-neutral-200 bg-neutral-950 p-7 text-white sm:p-8 lg:mt-[6px]">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                    Kontakt
                  </p>

                  <h2 className="heading-tight text-2xl text-white">
                    Naročanje na posvet
                  </h2>

                  <p className="max-w-[34ch] text-body-inverse">
                    Za termin nas lahko kontaktirate po telefonu ali elektronski
                    pošti. Posvet je namenjen jasni oceni tattooja.
                  </p>
                </div>

                <div className="flex flex-col divide-y divide-white/6">
                  <div className="flex flex-col gap-2 py-4 first:pt-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                      Telefon
                    </p>
                    <a
                      href="tel:+38670553340"
                      className="text-xl font-semibold text-white transition hover:text-neutral-300"
                    >
                      070 55 33 40
                    </a>
                  </div>

                  <div className="flex flex-col gap-2 py-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                      E-pošta
                    </p>
                    <a
                      href="mailto:odstranitattoo@gmail.com"
                      className="break-all text-lg text-white transition hover:text-neutral-300"
                    >
                      odstranitattoo@gmail.com
                    </a>
                  </div>

                  <div className="flex flex-col gap-2 py-4 last:pb-0">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                      Lokacija
                    </p>
                    <p className="text-lg text-white">
                      Ljubljanska 90, Domžale
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-5">
                  <div className="cta-spacing flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                    <Button href="tel:+38670553340" variant="primary-dark">
                      Pokliči zdaj
                    </Button>

                    <a
                      href="mailto:odstranitattoo@gmail.com"
                      className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      Pošlji e-pošto
                    </a>
                  </div>

                  <p className="text-sm text-white/50">
                    Hiter kontakt za termin in jasno oceno vašega primera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* EXPECTATIONS */}
      <section className="section-sm border-t border-neutral-200/70 bg-neutral-50">
        <Container>
          <div className="section-gap">
            <div className="header-stack max-w-3xl">
              <p className="eyebrow-muted">Pred tretmajem</p>

              <h2 className="heading-section text-neutral-950">
                Kaj pričakovati med postopkom
              </h2>

              <p className="text-body-lg max-w-[58ch]">
                Pred prvim obiskom je najpomembneje, da veste, kako tretma
                poteka, kakšen občutek lahko pričakujete in kako se koža odzove
                po postopku.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {expectations.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-neutral-200 bg-white p-6 sm:p-7"
                >
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-body text-neutral-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}