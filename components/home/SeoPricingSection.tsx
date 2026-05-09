import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function SeoPricingSection() {
  return (
    <section className="section-sm border-t border-neutral-200/70 bg-neutral-100">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14">
          {/* TEXT */}
          <div className="order-2 flex max-w-2xl flex-col gap-5 sm:gap-6 lg:order-1 lg:justify-self-start">
            <div className="header-stack gap-4">
              <p className="eyebrow-muted">Cena</p>

              <h2 className="heading-section text-neutral-950">
                Cenik odstranjevanja tattoojev
              </h2>

              <p className="text-body-lg">
               Cene so odvisne od velikosti, pigmenta in zahtevnosti odstranjevanja.
Spodaj so okvirni primeri storitev.
              </p>
            </div>

            {/* PRICE CARDS */}
<div className="grid gap-3 sm:grid-cols-2">
  <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5">
    <p className="text-[13px] font-medium leading-5 text-neutral-700">
      Posvet pred lasersko terapijo
    </p>

    <p className="mt-2 text-[32px] font-semibold leading-none tracking-[-0.04em] text-neutral-900">
      30€
    </p>

    <p className="mt-2 text-body-sm text-neutral-600">
      Brezplačno ob zakupu storitve.
    </p>
  </div>

  <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5">
    <p className="text-[13px] font-medium leading-5 text-neutral-700">
      Zelo majhna tetovaža
    </p>

    <p className="mt-2 text-[32px] font-semibold leading-none tracking-[-0.04em] text-neutral-900">
      50€
    </p>

    <p className="mt-2 text-body-sm text-neutral-600">
      Prstani, male črke in znakci do 2 cm.
    </p>
  </div>

  <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5">
    <p className="text-[13px] font-medium leading-5 text-neutral-700">
      Odstranjevanje obrvi
    </p>

    <p className="mt-2 text-[32px] font-semibold leading-none tracking-[-0.04em] text-neutral-900">
      100€
    </p>

    <p className="mt-2 text-body-sm text-neutral-600">
      Odstranjevanje pigmenta na obrveh.
    </p>
  </div>

  <div className="rounded-[20px] border border-neutral-200/70 bg-white p-5">
    <p className="text-[13px] font-medium leading-5 text-neutral-700">
      Odstranjevanje tetovaž
    </p>

    <p className="mt-2 text-[32px] font-semibold leading-none tracking-[-0.04em] text-neutral-900">
      80–250€
    </p>

    <p className="mt-2 text-body-sm text-neutral-600">
      Cena je odvisna od velikosti in zahtevnosti tattooja.
    </p>
  </div>
</div>

            <p className="text-body max-w-[60ch]">
             Po ogledu tattooja ocenimo okvirno ceno in potek odstranjevanja.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button href="/posvet" variant="primary-light">
                Pošlji povpraševanje
              </Button>

              <Button href="/rezultati" variant="secondary-light">
                Poglej rezultate
              </Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="image-block relative aspect-[6/5] overflow-hidden border border-neutral-200/60 bg-white lg:order-2 lg:aspect-[7/8]">
            <Image
              src="/images/cenik/image00044.webp"
              alt="Pico laser tehnologija za odstranjevanje tattoojev"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="scale-[1.08] object-cover object-[85%_20%]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}