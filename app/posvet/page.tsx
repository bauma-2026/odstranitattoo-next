import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsSectionDarkMobile,
  pixelsSectionDarkTablet,
  pixelsSectionDarkDesktop,
} from "@/components/ui/pixels/pixels.config";

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

        <h1 className="heading-display text-3xl text-white sm:text-4xl lg:text-[3.25rem]">
          Posvet
          <br />
          in ocena tattooja
        </h1>

        <p className="text-body-inverse-lg max-w-[52ch]">
          Pred začetkom odstranjevanja pregledamo tattoo, razložimo potek
          postopka in podamo realno oceno glede na pigment, velikost,
          starost tattooja in odziv kože.
        </p>

        <p className="text-body-inverse-sm max-w-[52ch]">
          Namen posveta je, da dobite jasen pregled nad možnostmi
          odstranjevanja in realnimi pričakovanji.
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
  <section className="section-sm bg-white">
    <Container>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* WHITE CARD */}
        <div className="rounded-[28px] border border-neutral-200 bg-white p-7 sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="heading-tight text-2xl text-neutral-950">
                Kaj vključuje posvet
              </h2>

              <p className="text-body max-w-[48ch]">
                Na posvetu pregledamo tattoo, razložimo potek odstranjevanja in podamo
                realno oceno naslednjih korakov.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-950">
                    Pregled tattooja
                  </h3>

                  <p className="text-body">
                    Ocenimo velikost, barvo, starost tattooja in splošno
                    stanje kože.
                  </p>
                </div>
              </div>

              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-950">
                    Potek odstranjevanja
                  </h3>

                  <p className="text-body">
                    Razložimo, kako deluje Pico laser in kako telo postopoma
                    odstranjuje pigment.
                  </p>
                </div>
              </div>

              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-950">
                    Realna ocena
                  </h3>

                  <p className="text-body">
                    Podamo realna pričakovanja glede odstranjevanja tetovaže
                    in okvirnega števila tretmajev.
                  </p>
                </div>
              </div>

              <div className="rounded-[22px] border border-skin-400/25 bg-white p-5">
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-neutral-950">
                    Naslednji korak
                  </h3>

                  <p className="text-body">
                    Po posvetu se lažje odločite, ali želite začeti s
                    postopkom odstranjevanja.
                  </p>
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
                Kontakt
              </p>

              <h2 className="heading-tight text-2xl text-white">
                Naročanje na posvet
              </h2>

              <p className="text-body-inverse">
                Za termin nas lahko kontaktirate po telefonu ali elektronski
                pošti. Posvet je namenjen individualni oceni tattooja in
                razlagi postopka odstranjevanja.
              </p>
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
                  Email
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

            <div className="cta-spacing flex flex-wrap gap-4 pt-0">
              <Button href="tel:+38670553340" variant="primary-dark">
                Pokliči zdaj
              </Button>

              <a
                href="mailto:odstranitattoo@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Pošlji email
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</main>
  );
}