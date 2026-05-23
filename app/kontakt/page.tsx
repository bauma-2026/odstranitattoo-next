import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

export const metadata: Metadata = {
  title: "Kontakt in lokacija",
  description:
    "Kontakt za odstranjevanje tattoojev in permanentnega pigmenta s Pico laserjem v Domžalah. Telefon, e-pošta, lokacija in navodila za pot.",
  alternates: {
    canonical: "https://odstranitattoo.si/kontakt",
  },
};

export default function KontaktPage() {
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
            <p className="eyebrow-dark">Kontakt</p>

            <h1 className="heading-display max-w-[11ch] leading-[1.04] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
              Kontakt in lokacija
            </h1>

            <p className="text-body-inverse-lg max-w-[48ch]">
              Za vprašanja, termin ali več informacij nas lahko kontaktirate po
              telefonu ali e-pošti.
            </p>

            <div className="flex flex-col gap-2 pt-3">
              <a
                href="/posvet"
                className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
              >
                Pošlji povpraševanje →
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

      {/* CONTACT CONTENT */}
      <section className="section-tight bg-white">
        <Container>
          <div className="section-gap">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">
              {/* WHITE SIDE */}
              <div className="rounded-[28px] bg-white px-5 pb-6 pt-4 sm:px-7 sm:pb-7 sm:pt-6">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="eyebrow-muted">Kontaktni podatki</p>

                    <h2 className="heading-tight text-2xl text-neutral-950">
                      Stopite v stik
                    </h2>

                    <p className="max-w-[48ch] text-body">
                      Kontaktirate nas lahko za naročanje, dodatna vprašanja in
                      osnovne informacije glede odstranjevanja tattoojev.
                    </p>
                  </div>

                  <div className="flex flex-col divide-y divide-neutral-200/70 rounded-[24px] border border-neutral-200/70 bg-neutral-50/50 px-5">
                    <div className="py-4 first:pt-5">
                      <h3 className="text-base font-semibold text-neutral-950">
                        Telefon
                      </h3>

                      <a
                        href="tel:+38670553340"
                        className="mt-2 inline-block text-body-sm text-neutral-600 transition hover:text-neutral-950"
                      >
                        070 55 33 40
                      </a>
                    </div>

                    <div className="py-4">
                      <h3 className="text-base font-semibold text-neutral-950">
                        E-pošta
                      </h3>

                      <a
                        href="mailto:odstranitattoo@gmail.com"
                        className="mt-2 inline-block break-all text-body-sm text-neutral-600 transition hover:text-neutral-950"
                      >
                        odstranitattoo@gmail.com
                      </a>
                    </div>

                    <div className="py-4">
                      <h3 className="text-base font-semibold text-neutral-950">
                        Lokacija
                      </h3>

                      <p className="mt-2 text-body-sm text-neutral-600">
                        Ljubljanska 90, Domžale
                      </p>
                    </div>

                    <div className="py-4 last:pb-5">
                      <h3 className="text-base font-semibold text-neutral-950">
                        Družbena omrežja
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-3">
                        <a
                          href="https://www.instagram.com/odstranitattoo/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 transition hover:border-skin-400/55 hover:bg-skin-100"
                        >
                          Instagram
                        </a>

                        <a
                          href="https://www.facebook.com/odstranitattoo/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 transition hover:border-skin-400/55 hover:bg-skin-100"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DARK SIDE */}
              <div className="rounded-[28px] border border-neutral-200 bg-neutral-950 p-6 text-white sm:p-7 lg:mt-[6px]">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                      Povpraševanje
                    </p>

                    <h2 className="heading-tight text-2xl text-white">
                      Pošljite vprašanje ali fotografijo
                    </h2>

                    <p className="max-w-[34ch] text-body-inverse-sm text-white/70">
                      Pošljite povpraševanje ali fotografijo tattooja in
                      dogovorili se bomo za naslednji korak.
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
                      <Button href="/posvet" variant="primary-dark">
                        Pošlji povpraševanje
                      </Button>

                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Ljubljanska+90,+Dom%C5%BEale"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/70 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                      >
                        Navodila za pot
                      </a>
                    </div>

                    <p className="text-sm text-white/50">
                      Posvet 30 € • ob zakupu storitve se znesek odšteje.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-[28px] border border-neutral-200 bg-white p-4 sm:p-5">
              <div className="overflow-hidden rounded-[22px] border border-neutral-200 bg-neutral-100">
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