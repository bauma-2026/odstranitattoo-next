import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

export const metadata: Metadata = pageMetadata({
  path: "/posvet",
  title: "Povpraševanje za odstranjevanje tattooja",
  description:
    "Pošljite povpraševanje za odstranjevanje tattooja ali permanentnega pigmenta s Pico laserjem v Domžalah. Kontakt, termin in informacije pred tretmajem.",
});

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
            <p className="eyebrow-dark">Povpraševanje</p>

            <h1 className="heading-display max-w-[13ch] leading-[1.04] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
              Pošljite vprašanje ali fotografijo
            </h1>

            <p className="max-w-[48ch] text-body-inverse-lg">
              Pošljite povpraševanje za odstranjevanje tattooja in dogovorili se
              bomo za naslednji korak.
            </p>

            <p className="max-w-[48ch] text-body-inverse-sm">
              Dodate lahko tudi fotografijo tattooja, obrvi ali predela, ki vas
              zanima.
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
<div className="rounded-[28px] bg-white px-5 pb-6 pt-4 sm:px-7 sm:pb-7 sm:pt-6">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h2 className="heading-tight text-2xl text-neutral-950">
        Kaj dobite pri prvem stiku
      </h2>

      <p className="max-w-[48ch] text-body">
        Prvi stik je namenjen temu, da nam opišete svoj primer,
        pošljete vprašanje ali fotografijo in se dogovorimo za
        primeren naslednji korak.
      </p>
    </div>

    <div className="flex flex-col divide-y divide-neutral-200/70 rounded-[24px] border border-neutral-200/70 bg-neutral-50/50 px-5">
      <div className="py-4 first:pt-5">
        <h3 className="text-base font-semibold text-neutral-950">
          Osnovne informacije
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-neutral-600">
          Pogledamo velikost, pigment, starost tattooja in področje
          na koži, ker vse to vpliva na potek odstranjevanja.
        </p>
      </div>

      <div className="py-4">
        <h3 className="text-base font-semibold text-neutral-950">
          Potek odstranjevanja
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-neutral-600">
          Razložimo, kako postopek običajno poteka, zakaj je
          potreben čas med tretmaji in kaj lahko pričakujete po
          posameznem obisku.
        </p>
      </div>

      <div className="py-4">
        <h3 className="text-base font-semibold text-neutral-950">
          Celjenje med tretmaji
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-neutral-600">
          Koža se po tretmaju celi približno 28–60 dni, zato se
          tretmaji izvajajo približno na 8 tednov.
        </p>
      </div>

      <div className="py-4 last:pb-5">
        <h3 className="text-base font-semibold text-neutral-950">
          Naslednji korak
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-neutral-600">
          Po odgovoru se lahko dogovorimo za termin, dodatna
          vprašanja ali ogled v studiu.
        </p>
      </div>
    </div>
  </div>
</div>
           {/* DARK SIDE */}
<div className="rounded-[28px] border border-neutral-200 bg-neutral-950 p-6 text-white sm:p-7 lg:mt-[6px]">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
        Kontakt
      </p>

      <h2 className="heading-tight text-2xl text-white">
        Pošljite povpraševanje
      </h2>

      <p className="max-w-[34ch] text-body-inverse-sm text-white/70">
        Za termin ali vprašanje nas lahko kontaktirate po telefonu
        ali elektronski pošti.
      </p>
    </div>

    <div className="flex flex-col divide-y divide-white/10 rounded-[24px] border border-white/10 bg-white/[0.03] px-5">
      <div className="flex flex-col gap-1.5 py-4 first:pt-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
          Telefon
        </p>

        <a
          href="tel:+38670553340"
          className="text-lg font-semibold text-white transition hover:text-neutral-300"
        >
          070 55 33 40
        </a>
      </div>

      <div className="flex flex-col gap-1.5 py-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
          E-pošta
        </p>

        <a
          href="mailto:odstranitattoo@gmail.com"
          className="break-all text-base text-white transition hover:text-neutral-300"
        >
          odstranitattoo@gmail.com
        </a>
      </div>

      <div className="flex flex-col gap-1.5 py-4 last:pb-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
          Lokacija
        </p>

        <p className="text-base text-white">
          Ljubljanska 90, Domžale
        </p>
      </div>
    </div>

    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button href="tel:+38670553340" variant="primary-dark">
          Pokliči zdaj
        </Button>

        <a
          href="mailto:odstranitattoo@gmail.com"
          className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Pošlji e-pošto
        </a>
      </div>

      <p className="text-sm text-white/50">
        Posvet 30 € • ob zakupu storitve se znesek odšteje.
      </p>
    </div>
  </div>
</div>    </div>    </Container>
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