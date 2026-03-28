import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function SeoLocationSection() {
  return (
   <section className="section-sm border-t border-skin-400/20 bg-white">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start lg:gap-14">
      {/* IMAGE */}
      <div className="image-block overflow-hidden border border-neutral-200/60 bg-white">
        <Image
          src="/images/studio/laser-odstranjevanje-tetovaz-studio-domzale-2.webp"
          alt="Pico laser naprava v studiu v Domžalah"
          width={1200}
          height={1400}
          className="block w-full scale-[1.1] object-cover object-top"
        />
      </div>

      {/* TEXT */}
      <div className="order-1 lg:order-2 flex max-w-2xl flex-col gap-6 sm:gap-8">
        <div className="header-stack">
          <p className="eyebrow-muted">Domžale</p>

          <h2 className="heading-section text-neutral-950">
            Lasersko odstranjevanje tetovaž v Domžalah
          </h2>

          <p className="text-body-lg">
            Odstranjevanje tetovaže je postopen proces, ki zahteva natančen
            pristop in pravo tehnologijo. V našem studiu v Domžalah
            uporabljamo Pico laser, ki omogoča učinkovito razgradnjo pigmenta
            in nadzorovan potek odstranjevanja.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[20px] border border-skin-400/25 bg-skin-100/60 p-5">
            <p className="text-base font-semibold text-neutral-900">
              Individualna ocena
            </p>
            <p className="mt-2 text-body-sm">
              Vsak tattoo ocenimo glede na velikost, barvo pigmenta in
              zahtevnost odstranjevanja.
            </p>
          </div>

          <div className="rounded-[20px] border border-skin-400/25 bg-skin-100/60 p-5">
            <p className="text-base font-semibold text-neutral-900">
              Realen načrt tretmajev
            </p>
            <p className="mt-2 text-body-sm">
              Na posvetu pripravimo jasno oceno poteka odstranjevanja in
              realnih pričakovanj.
            </p>
          </div>
        </div>

        <p className="text-body">
          Stranke iz Domžal, Ljubljane in okolice se za odstranjevanje
          odločajo, ko želijo tattoo odstraniti ali ga pripraviti na
          prekrivanje z novim motivom.
        </p>

        <div className="cta-spacing flex flex-wrap items-center gap-4 pt-0">
          <Button href="/posvet" variant="primary-light">
            Naroči brezplačen posvet
          </Button>

          <Button href="/rezultati" variant="secondary-light">
            Poglej rezultate
          </Button>
        </div>
      </div>
    </div>
  </Container>
</section>
  );
}