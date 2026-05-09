import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const resultsPreview = [
  {
    before: "/images/results/fairy-before.jpg",
    after: "/images/results/fairy-after.jpg",
    title: "Vidno zmanjšanje pigmenta",
    meta: "4 tretmaji",
    beforeAlt: "Tattoo pred laserskim odstranjevanjem",
    afterAlt: "Tattoo po štirih tretmajih laserskega odstranjevanja",
  },
  {
    before: "/images/results/phoenix-before.jpg",
    after: "/images/results/phoenix-after.jpg",
    title: "Začetni fade",
    meta: "2 tretmaja",
    beforeAlt: "Tattoo pred laserskim odstranjevanjem",
    afterAlt: "Tattoo po dveh tretmajih laserskega odstranjevanja",
  },
  {
    before: "/images/results/tree-before.jpg",
    after: "/images/results/tree-after.jpg",
    title: "Enakomerno bledenje",
    meta: "4 tretmaji",
    beforeAlt: "Temnejši tattoo pred laserskim odstranjevanjem",
    afterAlt: "Temnejši tattoo po štirih tretmajih laserskega odstranjevanja",
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
              Spodaj so realni primeri, kako tattoo skozi več tretmajev
              postopoma bledi.
            </p>

            <p className="text-body-sm max-w-[52ch] text-neutral-600">
              Napredek ni enak pri vseh — odvisen je od pigmenta, globine in
              odziva kože.
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
                  </div>

                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.after}
                      alt={item.afterAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 16vw, 50vw"
                    />
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