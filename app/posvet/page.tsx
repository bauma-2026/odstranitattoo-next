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
import { faqs } from "@/content/faq";

export const metadata: Metadata = pageMetadata({
  path: "/posvet",
  title: "Povpraševanje za odstranjevanje tattooja",
  description:
    "Pošljite povpraševanje za odstranjevanje tattooja ali permanentnega pigmenta s Pico laserjem v Domžalah. Kontakt, termin in informacije pred tretmajem.",
});

const expectationIds = [
  "first-treatment-overview",
  "pain",
  "session-duration",
  "skin-after-treatment",
];

const expectations = expectationIds
  .map((id) => faqs.find((faq) => faq.id === id))
  .filter((faq): faq is NonNullable<typeof faq> => Boolean(faq));

export default function PosvetPage() {
  return (
    <main className="bg-canvas text-ink">
   {/* HERO */}
<section className="relative overflow-hidden border-b border-ink/10 bg-hero text-ink">
  <Container className="relative z-10 section-hero">
    <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
      <p className="eyebrow-skin">Povpraševanje</p>

      <h1 className="heading-display max-w-[15ch] text-3xl leading-[1.04] text-ink sm:text-4xl lg:text-[3.25rem]">
        Pošljite vprašanje ali fotografijo
      </h1>

      <p className="max-w-[44ch] text-lg leading-[1.6] text-ink-muted">
        Pošljite povpraševanje za odstranjevanje tattooja in dogovorili se
        bomo za naslednji korak.
      </p>

      <p className="max-w-[44ch] text-sm leading-[1.6] text-ink-muted">
       Fotografijo tetovaže, obrvi ali predela, ki vas zanima, lahko dodate po e-pošti.
      </p>

      <div className="pt-2">
        <a
          href="/rezultati"
          className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
        >
          Poglej rezultate pred in po →
        </a>
      </div>
    </div>
  </Container>
</section>
      {/* CONSULTATION CONTENT */}
      <section className="section-tight">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
           {/* WHITE SIDE */}
<div className="rounded-2xl border border-neutral-200 bg-canvas p-6 sm:p-7">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <h2 className="heading-tight text-2xl text-ink">
        Kaj dobite pri prvem stiku
      </h2>

      <p className="max-w-[48ch] text-body">
        Prvi stik je namenjen temu, da nam opišete svoj primer,
        pošljete vprašanje ali fotografijo in se dogovorimo za
        primeren naslednji korak.
      </p>
    </div>

    <div className="flex flex-col divide-y divide-ink/10 rounded-xl border border-ink/10 bg-ink/[0.03] px-5">
      <div className="py-4 first:pt-5">
        <h3 className="text-base font-semibold text-ink">
          Osnovne informacije
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-ink-muted">
          Pogledamo velikost, pigment, starost tattooja in področje
          na koži, ker vse to vpliva na potek odstranjevanja.
        </p>
      </div>

      <div className="py-4">
        <h3 className="text-base font-semibold text-ink">
          Potek odstranjevanja
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-ink-muted">
          Razložimo, kako postopek običajno poteka, zakaj je
          potreben čas med tretmaji in kaj lahko pričakujete po
          posameznem obisku.
        </p>
      </div>

      <div className="py-4">
        <h3 className="text-base font-semibold text-ink">
          Celjenje med tretmaji
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-ink-muted">
          Koža se po tretmaju celi 28–60 dni, zato se
          tretmaji izvajajo na 8 tednov.
        </p>
      </div> 

      <div className="py-4 last:pb-5">
        <h3 className="text-base font-semibold text-ink">
          Naslednji korak
        </h3>

        <p className="mt-2 max-w-[46ch] text-body-sm text-ink-muted">
          Po odgovoru se lahko dogovorimo za termin, dodatna
          vprašanja ali ogled v studiu.
        </p>
      </div>
    </div>
  </div>
</div>
           {/* CTA SIDE */}
<div className="rounded-2xl border border-neutral-200 bg-cta p-6 text-ink sm:p-7">
  <div className="flex flex-col gap-6">
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
        Kontakt
      </p>

      <h2 className="heading-tight text-2xl text-ink">
        Pošljite povpraševanje
      </h2>

      <p className="max-w-[34ch] text-sm leading-[1.6] text-ink-muted">
        Za termin ali vprašanje nas lahko kontaktirate po telefonu
        ali elektronski pošti.
      </p>
    </div>

    <div className="flex flex-col divide-y divide-ink/10 rounded-xl border border-ink/10 bg-ink/[0.03] px-5">
      <div className="flex flex-col gap-1.5 py-4 first:pt-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          Telefon
        </p>

        <a
          href="tel:+38670553340"
          className="text-lg font-semibold text-ink transition hover:text-accent"
        >
          070 55 33 40
        </a>
      </div>

      <div className="flex flex-col gap-1.5 py-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          E-pošta
        </p>

        <a
          href="mailto:odstranitattoo@gmail.com"
          className="break-all text-base text-ink transition hover:text-accent"
        >
          odstranitattoo@gmail.com
        </a>
      </div>

      <div className="flex flex-col gap-1.5 py-4 last:pb-5">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
          Lokacija
        </p>

        <p className="text-base text-ink">
          Ljubljanska 90, Domžale
        </p>
      </div>
    </div>

    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Button href="tel:+38670553340" variant="primary-light">
          Pokliči zdaj
        </Button>

        <a
          href="mailto:odstranitattoo@gmail.com"
          className="inline-flex items-center justify-center rounded-full border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition hover:bg-ink/5 hover:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink"
        >
          Pošlji e-pošto
        </a>
      </div>

      <p className="text-sm text-ink-muted">
        Posvet 30 € • ob zakupu storitve je posvet brezplačen.
      </p>
    </div>
  </div>
</div>    </div>    </Container>
      </section>

      {/* EXPECTATIONS */}
      <section className="section-sm border-t border-neutral-200/70 bg-hero">
        <Container>
          <div className="section-gap">
            <div className="header-stack max-w-3xl">
              <p className="eyebrow-muted">Pred tretmajem</p>

              <h2 className="heading-section text-ink">
                Kaj pričakovati med postopkom
              </h2>

              <p className="text-body-lg max-w-[58ch]">
                Pred prvim obiskom je najpomembneje, da veste, kako tretma
                poteka, kakšen občutek lahko pričakujete in kako se koža odzove
                po postopku.
              </p>

              <a
                href="/faq"
                className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
              >
                Poglej vsa pogosta vprašanja →
              </a>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {expectations.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-neutral-200 bg-canvas p-6 sm:p-7"
                >
                  <h3 className="text-lg font-semibold text-ink">
                    {item.q}
                  </h3>

                  <p className="mt-3 text-body text-ink-muted">
                    {item.a}
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