import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

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

      <h1 className="heading-display leading-[1.04] text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
        Kontakt in
        <br />
        lokacija
      </h1>

      {/* MOBILE */}
      <p className="text-body-inverse-lg max-w-[56ch] sm:hidden">
        Kontaktirate nas lahko za posvet, vprašanja ali uskladitev termina.
      </p>

      {/* DESKTOP */}
      <p className="hidden text-body-inverse-lg max-w-[60ch] sm:block">
        Če razmišljate o odstranjevanju tattooja, nas lahko kontaktirate za
        posvet, dodatna vprašanja ali uskladitev termina.
      </p>

      {/* MOBILE */}
      <p className="text-body-inverse-sm max-w-[56ch] sm:hidden">
        Tukaj najdete kontakt, lokacijo studia in hiter naslednji korak.
      </p>

      {/* DESKTOP */}
      <p className="hidden text-body-inverse-sm max-w-[60ch] sm:block">
        Tukaj najdete kontaktne podatke, lokacijo studia v Domžalah in hiter
        dostop do naslednjih korakov.
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
<section className="section-sm bg-white">
  <Container>
    <div className="section-gap">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* WHITE CARD */}
        <div className="rounded-[28px] border border-neutral-200 bg-white p-7 sm:p-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="eyebrow-muted">Kontaktni podatki</p>

              <h2 className="heading-tight text-2xl text-neutral-950">
                Stopite v stik
              </h2>

              <p className="text-body max-w-[44ch]">
                Kontaktirate nas lahko za naročanje, dodatna vprašanja in
                osnovne informacije glede odstranjevanja tattoojev.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-950">
                    Telefon
                  </h3>

                  <a
                    href="tel:+38670553340"
                    className="text-base leading-6 text-neutral-600 transition hover:text-neutral-950"
                  >
                    070 55 33 40
                  </a>
                </div>
              </div>

              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-950">
                    E-pošta
                  </h3>

                  <a
                    href="mailto:odstranitattoo@gmail.com"
                    className="break-all text-base leading-6 text-neutral-600 transition hover:text-neutral-950"
                  >
                    odstranitattoo@gmail.com
                  </a>
                </div>
              </div>

              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5 sm:col-span-2">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-950">
                    Lokacija
                  </h3>

                  <p className="text-body">Ljubljanska 90, Domžale</p>
                </div>
              </div>

              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5 sm:col-span-2">
                <div className="flex flex-col gap-3">
                  <h3 className="text-base font-semibold text-neutral-950">
                    Družbena omrežja
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.instagram.com/odstranitattoo/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-skin-400/35 bg-white px-4 py-2 text-sm text-neutral-900 transition hover:border-skin-400/55 hover:bg-skin-100"
                    >
                      Instagram
                    </a>

                    <a
                      href="https://www.facebook.com/odstranitattoo/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-skin-400/35 bg-white px-4 py-2 text-sm text-neutral-900 transition hover:border-skin-400/55 hover:bg-skin-100"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DARK CARD */}
        <div className="rounded-[28px] border border-neutral-200 bg-neutral-950 p-7 text-white sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                Posvet in naročilo
              </p>

              <h2 className="heading-tight text-2xl text-white">
                Naročanje na posvet
              </h2>

              {/* MOBILE */}
              <p className="text-body-inverse sm:hidden">
                Za termin nas lahko kontaktirate po telefonu ali elektronski pošti.
              </p>

              {/* DESKTOP */}
              <p className="hidden text-body-inverse sm:block">
                Za termin nas lahko kontaktirate po telefonu ali elektronski
                pošti. Pred začetkom odstranjevanja je pomembno, da se tattoo
                oceni individualno in da dobite realna pričakovanja.
              </p>
            </div>

            <div className="hidden image-block border border-white/10 bg-white/5 p-6 lg:block">
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                  Pomembno
                </p>

                <p className="text-body-inverse">
                  Končni rezultat je odvisen od pigmenta, globine nanosa,
                  starosti tattooja in odziva kože. Zato vsak primer
                  pregledamo posebej.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Telefon
                </p>
                <a
                  href="tel:+38670553340"
                  className="text-lg text-white transition hover:text-neutral-300"
                >
                  070 55 33 40
                </a>
              </div>

              <div className="flex flex-col gap-2">
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

              <div className="flex flex-col gap-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500">
                  Lokacija
                </p>
                <p className="text-lg text-white">Ljubljanska 90, Domžale</p>
              </div>
            </div>

            <div className="cta-spacing flex flex-col items-start gap-3 pt-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="/posvet" variant="primary-dark">
                Pošlji povpraševanje
              </Button>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Ljubljanska+90,+Dom%C5%BEale"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Navodila za pot
              </a>
            </div>

            <p className="text-sm text-white/50 sm:hidden">
              Hiter kontakt za termin in naslednji korak.
            </p>

            <p className="hidden text-sm text-white/50 sm:block">
              Posvet je namenjen jasni oceni vašega primera in naslednjemu
              koraku brez ugibanja.
            </p>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="rounded-[28px] border border-neutral-200 bg-white p-4 sm:p-5">
        <div className="overflow-hidden rounded-[22px] border border-skin-400/25 bg-neutral-100">
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