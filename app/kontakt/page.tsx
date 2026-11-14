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
  path: "/kontakt",
  title: "Kontakt in lokacija",
  description:
    "Kontakt za odstranjevanje tattoojev in permanentnega pigmenta s Pico laserjem v Domžalah. Telefon, e-pošta, lokacija in navodila za pot.",
});

export default function KontaktPage() {
  return (
    <main className="bg-canvas text-ink">
      {/* HERO */}
<section className="relative overflow-hidden border-b border-ink/10 bg-hero text-ink">
  <Container className="relative z-10 section-hero">
    <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
      <p className="eyebrow-muted">Kontakt</p>

      <h1 className="heading-display max-w-[12ch] text-3xl leading-[1.04] text-ink sm:text-4xl lg:text-[3.25rem]">
        Kontakt in lokacija
      </h1>

      <p className="text-body-lg max-w-[42ch]">
        Za vprašanja, termin ali več informacij nas lahko kontaktirate po
        telefonu ali e-pošti.
      </p>

      <div className="flex flex-col items-start gap-4 pt-2">
        <Button href="/posvet" variant="primary-light">
          Pošlji povpraševanje
        </Button>

        <a
          href="/faq"
          className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
        >
          Preberi pogosta vprašanja →
        </a>
      </div>
    </div>
  </Container>
</section>

      {/* CONTACT CONTENT */}
      <section className="section-tight">
        <Container>
          <div className="section-gap">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
              {/* WHITE SIDE */}
              <div className="rounded-2xl border border-neutral-200 bg-canvas p-6 sm:p-7">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="eyebrow-muted">Kontaktni podatki</p>

                    <h2 className="heading-tight text-2xl text-ink">
                      Stopite v stik
                    </h2>

                    <p className="max-w-[48ch] text-body">
                      Kontaktirate nas lahko za naročanje, dodatna vprašanja in
                      osnovne informacije glede odstranjevanja tattoojev.
                    </p>
                  </div>

                  <div className="flex flex-col divide-y divide-ink/10 rounded-xl border border-ink/10 bg-ink/[0.03] px-5">
                    <div className="py-4 first:pt-5">
                      <h3 className="text-base font-semibold text-ink">
                        Telefon
                      </h3>

                      <a
                        href="tel:+38670553340"
                        className="mt-2 inline-block text-sm leading-[1.6] text-skin-600 transition hover:text-skin-900"
                      >
                        070 55 33 40
                      </a>
                    </div>

                    <div className="py-4">
                      <h3 className="text-base font-semibold text-ink">
                        E-pošta
                      </h3>

                      <a
                        href="mailto:odstranitattoo@gmail.com"
                        className="mt-2 inline-block break-all text-sm leading-[1.6] text-skin-600 transition hover:text-skin-900"
                      >
                        odstranitattoo@gmail.com
                      </a>
                    </div>

                    <div className="py-4">
                      <h3 className="text-base font-semibold text-ink">
                        Lokacija
                      </h3>

                      <p className="mt-2 text-body-sm text-ink-muted">
                        Ljubljanska 90, Domžale
                      </p>
                    </div>

                    <div className="py-4 last:pb-5">
                      <h3 className="text-base font-semibold text-ink">
                        Družbena omrežja
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-3">
                        <a
                          href="https://www.instagram.com/odstranitattoo/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-ink transition hover:border-skin-400/55 hover:bg-skin-100"
                        >
                          Instagram
                        </a>

                        <a
                          href="https://www.facebook.com/odstranitattoo/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-ink transition hover:border-skin-400/55 hover:bg-skin-100"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA SIDE */}
              <div className="rounded-2xl border border-neutral-200 bg-cta p-6 text-ink sm:p-7">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                      Povpraševanje
                    </p>

                    <h2 className="heading-tight max-w-[16ch] text-2xl text-ink sm:max-w-none">
                      Pošljite vprašanje ali fotografijo
                    </h2>

                    <p className="max-w-[34ch] text-sm leading-[1.6] text-ink-muted">
                      Pošljite povpraševanje ali fotografijo tetovaže po
                      e-pošti in dogovorili se bomo za naslednji korak.
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
                      <Button href="/posvet" variant="primary-light">
                        Pošlji povpraševanje
                      </Button>

                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Ljubljanska+90,+Dom%C5%BEale"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition hover:bg-ink/5 hover:border-ink/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink"
                      >
                        Navodila za pot
                      </a>
                    </div>

                    <p className="text-sm text-ink-muted">
                      Posvet 30 € • ob zakupu storitve je posvet brezplačen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-2xl border border-neutral-200 bg-canvas p-4 sm:p-5">
              <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
                <iframe
                  title="Lokacija Odstrani Tattoo"
                  src="https://www.google.com/maps?q=Ljubljanska%2090,%20Dom%C5%BEale&z=15&output=embed"
                  className="h-[320px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}