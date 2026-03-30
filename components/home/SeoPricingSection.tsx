import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function SeoPricingSection() {
  return (
<section className="section-sm border-t border-neutral-200/70 bg-neutral-100">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-14">
      
      {/* TEXT */}
      <div className="order-2 flex max-w-2xl flex-col gap-6 sm:gap-8 lg:order-1 lg:justify-self-start">
        
        <div className="header-stack">
          <p className="eyebrow-muted">Cena</p>

          <h2 className="heading-section text-neutral-950">
            Koliko stane odstranjevanje tattooja?
          </h2>

          <p className="text-body-lg">
            Cena odstranjevanja tattooja je vedno odvisna od posameznega
            primera, zato jo lahko natančno določimo šele po posvetu.
          </p>

          {/* 🔥 NEW — friction remover */}
          <p className="text-body-sm text-neutral-500 max-w-[52ch]">
            Cena je odvisna od velikosti, barve in globine tattooja.
            Točno oceno dobite na posvetu.
          </p>
        </div>

        <ul className="flex flex-col gap-3 text-neutral-700">
          <li className="flex items-start gap-3 text-base leading-6">
            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-skin-500" />
            <span>Velikost tattooja vpliva na zahtevnost odstranjevanja</span>
          </li>

          <li className="flex items-start gap-3 text-base leading-6">
            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-skin-500" />
            <span>Barva in globina pigmenta določata število tretmajev</span>
          </li>

          <li className="flex items-start gap-3 text-base leading-6">
            <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-skin-500" />
            <span>Vsak primer zahteva individualno oceno</span>
          </li>
        </ul>

        <p className="text-body max-w-[60ch]">
          Odstranjevanje poteka postopoma, zato je za končni rezultat
          potrebnih več tretmajev. Na posvetu ocenimo vaš tattoo in
          podamo jasno oceno poteka in stroška.
        </p>

        <div className="cta-spacing flex flex-wrap items-center gap-4 pt-0">
          <Button href="/posvet" variant="primary-light">
            Pridobi oceno
          </Button>

          <Button href="/rezultati" variant="secondary-light">
            Poglej rezultate
          </Button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="order-1 image-block overflow-hidden border border-neutral-200/60 bg-white lg:order-2 lg:justify-self-end">
        <Image
          src="/images/results/coverup-process.jpg"
          alt="Postopno odstranjevanje tattooja skozi več tretmajev"
          width={1200}
          height={1400}
          className="block w-full object-cover object-left scale-x-[-1]"
        />
      </div>

    </div>
  </Container>
</section>
  );
}