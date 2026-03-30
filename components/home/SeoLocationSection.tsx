import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function SeoLocationSection() {
  return (
 <section className="section-sm border-t border-neutral-200/70 bg-white">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start lg:gap-14">
      
      {/* IMAGE */}
      <div className="image-block overflow-hidden border border-neutral-200/60 bg-white">
        <Image
          src="/images/studio/laser-odstranjevanje-tetovaz-studio-domzale-2.webp"
          alt="Pico laser naprava v studiu v Domžalah"
          width={1200}
          height={1400}
          className="block w-full scale-[1.08] object-cover object-top"
        />
      </div>

      {/* TEXT */}
      <div className="order-1 lg:order-2 flex max-w-xl flex-col gap-5 sm:gap-6">
        
        <div className="header-stack gap-4">
          <p className="eyebrow-muted">Lokacija</p>

          <h2 className="heading-section text-neutral-950">
            Odstranjevanje tetovaž v Domžalah
          </h2>

          <p className="text-body-lg">
            Odstranjevanje tetovaže je postopen proces, ki zahteva pravo
            tehnologijo in natančen pristop. V studiu uporabljamo Pico laser
            za učinkovito razgradnjo pigmenta.
          </p>
        </div>

        {/* HIGHLIGHT */}
        <div className="rounded-[20px] border border-neutral-200/60 bg-neutral-50 p-5 sm:p-6">
          <p className="text-base font-semibold text-neutral-900">
            Studio v Domžalah
          </p>

          <p className="mt-2 max-w-[42ch] text-body-sm text-neutral-600">
            Enostaven dostop, individualen pristop in realna ocena vsakega tattooja.
          </p>
        </div>

        {/* CTA (moved higher) */}
        <div className="cta-spacing flex flex-col items-start gap-3 pt-1">
          <p className="max-w-[48ch] text-body-sm text-neutral-500">
            Prvi korak je vedno realna ocena tattooja.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/posvet" variant="primary-light">
              Preveri svoj primer
            </Button>

            <Button href="/rezultati" variant="secondary-light">
              Poglej rezultate
            </Button>
          </div>

          <a
            href="/kontakt"
            className="text-sm font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
          >
            Kontaktirajte nas →
          </a>
        </div>

        {/* SUPPORT TEXT */}
        <p className="text-body">
          Stranke iz Domžal, Ljubljane in okolice se odločajo za odstranjevanje
          ali pripravo tattooja na prekrivanje.
        </p>

      </div>
    </div>
  </Container>
</section>
  );
}