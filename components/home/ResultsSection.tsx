import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const resultsPreview = [
  {
    image: "/images/results/fairy-before-after.jpg",
    title: "Vidno bledenje po 4 tretmajih",
    meta: "4 tretmaji",
    caption: "Pred / Po – odstranjevanje še ni zaključeno",
    note: "Pigment je vidno svetlejši. Za končni rezultat je potreben nadaljnji postopek.",
    alt: "Pred in po štirih tretmajih laserskega odstranjevanja tattooja",
  },
  {
    image: "/images/results/phoenix-before-after.jpg",
    title: "Napredek po prvih tretmajih",
    meta: "2 tretmaja",
    caption: "Pred / Po – pigment postopoma bledi",
    note: "Po prvih tretmajih je viden začetni fade, rezultat pa se izboljšuje med nadaljnjimi obiski.",
    alt: "Pred in po dveh tretmajih laserskega odstranjevanja tattooja",
  },
  {
    image: "/images/results/tree-before-after.jpg",
    title: "Postopen fade pigmenta",
    meta: "4 tretmaji",
    caption: "Pred / Po – vidno zmanjšanje intenzivnosti",
    note: "Odstranjevanje poteka postopoma, hitrost rezultata pa je odvisna od pigmenta in odziva kože.",
    alt: "Pred in po štirih tretmajih laserskega odstranjevanja temnejšega pigmenta",
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
          Spodaj so realni primeri, kako tattoo po več tretmajih postopoma
          bledi.
        </p>

        <p className="text-body-sm max-w-[52ch] text-neutral-600">
          Rezultati niso takojšnji — pigment se zmanjšuje postopoma, zato je pri
          vsakem primeru pomembna realna ocena glede na tattoo in odziv kože.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 pt-2 lg:grid-cols-3">
        {resultsPreview.map((item) => (
          <article
            key={item.title}
            className="
              group overflow-hidden image-block border border-neutral-200/60 bg-white
              transition-all duration-300
              hover:border-skin-400/40
            "
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-neutral-100">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex flex-col gap-3">

                <div className="flex flex-wrap items-start gap-2.5">
                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    {item.title}
                  </h3>

                  <span className="rounded-full bg-skin-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-skin-600">
                    {item.meta}
                  </span>
                </div>

                <p className="text-body-sm font-medium text-neutral-700">
                  {item.caption}
                </p>

                {item.note && (
                  <p className="text-body-sm text-neutral-500">
                    {item.note}
                  </p>
                )}

              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-spacing flex justify-center pt-4 sm:pt-6">
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/rezultati">
            Poglej vse rezultate
          </Button>

          <Button href="/posvet" variant="secondary-light">
            Naroči posvet
          </Button>
        </div>
      </div>

    </div>
  </Container>
</section>
  );
}