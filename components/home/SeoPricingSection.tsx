import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function SeoPricingSection() {
  return (
    <section className="section-sm border-t border-skin-400/20 bg-skin-50">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-14">
          {/* TEXT */}
          <div className="order-2 flex max-w-2xl flex-col gap-4 sm:gap-5 lg:order-1 lg:justify-self-start">
            <p className="eyebrow-skin">Cena odstranjevanja tattooja</p>

            <h2 className="heading-section text-neutral-950">
              Koliko stane odstranjevanje tattooja?
            </h2>

            <p className="text-body-lg">
              Cena odstranjevanja tattooja je vedno odvisna od posameznega
              primera, zato jo lahko natančno določimo šele po posvetu.
            </p>

            <ul className="flex flex-col gap-3 text-neutral-700">
              <li className="flex items-start gap-3 text-base leading-6">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-skin-500" />
                <span>
                  Velikost tetovaže vpliva na zahtevnost odstranjevanja
                </span>
              </li>

              <li className="flex items-start gap-3 text-base leading-6">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-skin-500" />
                <span>
                  Barva in globina pigmenta določata število tretmajev
                </span>
              </li>

              <li className="flex items-start gap-3 text-base leading-6">
                <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-skin-500" />
                <span>Končna ocena je vedno individualna</span>
              </li>
            </ul>

            <p className="text-body max-w-[60ch]">
              Odstranjevanje poteka postopoma, zato je za končni rezultat
              potrebnih več tretmajev. Na posvetu ocenimo vaš tattoo in
              pripravimo jasno ter realno oceno poteka in stroška.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/posvet" variant="primary-light">
                Pridobi oceno
              </Button>

              <Button href="/rezultati" variant="secondary-light">
                Poglej rezultate
              </Button>
            </div>
          </div>

          {/* IMAGE */}
        <div className="order-1 overflow-hidden image-block border border-neutral-200/60 bg-white lg:order-2 lg:justify-self-end">
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