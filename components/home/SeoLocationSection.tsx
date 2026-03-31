import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function SeoLocationSection() {
  return (
 <section className="section-sm border-t border-neutral-200/70 bg-white">
  <Container>
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-10">
      {/* IMAGE */}
      <div className="image-block overflow-hidden border border-neutral-200/60 bg-white">
        <Image
          src="/images/studio/laser-odstranjevanje-tetovaz-studio-domzale-2.webp"
          alt="Pico laser naprava v studiu v Domžalah"
          width={1200}
          height={1400}
         className="block w-full scale-[1.12] object-cover object-center"
        />
      </div>

      {/* TEXT */}
      <div className="order-1 flex max-w-xl flex-col gap-5 sm:gap-6 lg:order-2">
        <div className="header-stack gap-4">
          <p className="eyebrow-muted">Lokacija</p>

          <h2 className="heading-section text-neutral-950">
            Odstranjevanje tetovaž v Domžalah
          </h2>

          <p className="text-body-lg">
           Odstranjevanje tetovaže je postopen proces, ki zahteva pravi pristop.
V studiu uporabljamo Pico laser, ki omogoča učinkovito in nadzorovano razgradnjo pigmenta.
          </p>
        </div>

   <div className="flex items-start gap-3">
  <span className="mt-1 h-2 w-2 rounded-full bg-skin-500" />

  <div>
    <p className="text-sm font-semibold text-neutral-900">
      Studio v Domžalah
    </p>

    <p className="mt-1 max-w-[42ch] text-body-sm text-neutral-600">
      Enostaven dostop, individualen pristop in realna ocena vsakega tattooja.
    </p>
  </div>
</div>

       <div className="flex flex-col items-start gap-4 pt-1">
  <p className="text-body">
    Prvi korak je vedno realna ocena tattooja.
  </p>

  {/* BUTTONS */}
  <div className="flex flex-wrap gap-3">
    <Button href="/posvet" variant="primary-light">
      Preveri svoj primer
    </Button>

    <Button href="/rezultati" variant="secondary-light">
      Poglej rezultate
    </Button>
  </div>

  {/* UTILITY LINKS */}
  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm">
    <a
      href="/kontakt"
      className="font-medium text-neutral-600 underline underline-offset-4 transition hover:text-neutral-900"
    >
      Kontakt →
    </a>

    <a
      href="https://maps.google.com/?q=YOUR_LOCATION"
      target="_blank"
      rel="noreferrer"
      className="font-medium text-neutral-600 underline underline-offset-4 transition hover:text-neutral-900"
    >
      Navodila za pot →
    </a>
  </div>
</div> </div></div> </Container>
</section>
  );
}