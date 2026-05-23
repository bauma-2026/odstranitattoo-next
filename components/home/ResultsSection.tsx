import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const resultsPreview = [
  {
    before: "/images/results/2before.webp",
    after: "/images/results/2after1tretma.webp",
    title: "Odstranjevanje permanentnih obrvi",
    meta: "po 1 tretmaju",
    beforeAlt: "Permanentne obrvi pred laserskim odstranjevanjem",
    afterAlt: "Permanentne obrvi po enem tretmaju laserskega odstranjevanja",
  },
  {
    before: "/images/results/3before.webp",
    after: "/images/results/3after3tretma.webp",
    title: "Postopno bledenje tattooja",
    meta: "po 3 tretmajih",
    beforeAlt: "Tattoo pred laserskim odstranjevanjem",
    afterAlt: "Tattoo po treh tretmajih laserskega odstranjevanja",
  },
  {
    before: "/images/results/8before.webp",
    after: "/images/results/8after5tretma.webp",
    title: "Enakomerno bledenje večjega tattooja",
    meta: "po 5 tretmajih",
    beforeAlt: "Večji tattoo pred laserskim odstranjevanjem",
    afterAlt: "Večji tattoo po petih tretmajih laserskega odstranjevanja",
  },
];

export default function ResultsPreviewSection() {
  return (
    <section className="section-sm border-t border-neutral-200/70 bg-white">
      <Container>
        <div className="section-gap">
          {/* HEADER */}
          <div className="header-stack max-w-3xl">
            <p className="eyebrow-muted">Rezultati</p>

            <h2 className="heading-section text-neutral-950">
              Realni primeri odstranjevanja
            </h2>

            <p className="text-body-lg max-w-[56ch]">
              Spodaj so primeri, kako tattoo skozi več tretmajev postopoma
              bledi in kako se rezultat razvija skozi čas.
            </p>

            <p className="text-body-sm max-w-[52ch] text-neutral-600">
              Primeri niso obljuba enakega rezultata za vsak tattoo, ampak
              realen prikaz napredka glede na pigment, globino nanosa in odziv
              kože.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-6 pt-2 lg:grid-cols-3">
            {resultsPreview.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden image-block border border-neutral-200/60 bg-white transition-all duration-300 hover:border-skin-400/40"
              >
                <div className="grid grid-cols-2 gap-[2px] overflow-hidden bg-neutral-100">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.before}
                      alt={item.beforeAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 16vw, 50vw"
                    />

                    <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur">
                      Pred
                    </div>
                  </div>

                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.after}
                      alt={item.afterAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 16vw, 50vw"
                    />

                    <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/75 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-900 backdrop-blur">
                      Po
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                      {item.meta}
                    </p>

                    <h3 className="text-[1.02rem] leading-7 tracking-[-0.02em] text-neutral-900">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="cta-spacing flex justify-center pt-0 sm:pt-2">
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/rezultati">Poglej vse rezultate</Button>

              <Button href="/posvet" variant="secondary-light">
                Pošlji povpraševanje
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}