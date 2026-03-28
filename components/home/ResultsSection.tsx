import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const resultsPreview = [
  {
    image: "/images/results/fairy-before-after.jpg",
    title: "Manjši tattoo",
    meta: "Po 4 tretmajih",
    note: "Odstranjevanje še ni zaključeno.",
    alt: "Odstranjevanje manjšega tattooja po štirih tretmajih",
  },
  {
    image: "/images/results/phoenix-before-after.jpg",
    title: "Večji tattoo",
    meta: "Po 2 tretmajih",
    note: "Pigment postopoma bledi.",
    alt: "Odstranjevanje večje tetovaže po dveh tretmajih",
  },
  {
    image: "/images/results/tree-before-after.jpg",
    title: "Temnejši pigment",
    meta: "Po 4 tretmajih",
    note: "Vidno zmanjšanje intenzivnosti.",
    alt: "Odstranjevanje temnega pigmenta po štirih tretmajih",
  },
];

export default function ResultsPreviewSection() {
  return (
<section className="section-sm border-t border-skin-400/30 bg-white">
  <Container>
    <div className="section-gap">
      
      {/* HEADER */}
      <div className="header-stack max-w-3xl">
        <p className="eyebrow-muted">Rezultati</p>

        <h2 className="heading-section text-neutral-950">
          Realni primeri odstranjevanja
        </h2>

        <p className="text-body-lg max-w-[56ch]">
          Spodaj so realni primeri, kako pigment po več tretmajih postopoma bledi.
        </p>
         {/* 🔥 interpretacija (not inside same stack) */}
    <p className="text-body-sm text-neutral-500 max-w-[52ch]">
    Rezultati se razlikujejo glede na pigment, globino in starost tetovaže, vendar je pri večini primerov viden postopni fade skozi več tretmajev.
  </p>
      </div>

      {/* GRID */}
      <div className="grid gap-6 lg:grid-cols-3">
        {resultsPreview.map((item) => (
          <article
            key={item.title}
            className="
              group overflow-hidden image-block border border-neutral-200/60 bg-white
              transition-all duration-300
              hover:border-skin-400/40
              hover:shadow-[0_10px_24px_rgba(var(--skin-rgb),0.12)]
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
              <div className="flex flex-col gap-2">
                
                <div className="flex flex-wrap items-start gap-2.5">
                  <h3 className="text-base font-semibold text-neutral-950 sm:text-lg">
                    {item.title}
                  </h3>

                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500">
                    {item.meta}
                  </span>
                </div>

                {/* optional micro proof line */}
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
      <div className="cta-spacing flex flex-wrap items-center gap-4">
        <Button href="/rezultati">Poglej vse rezultate</Button>

        <Button href="/posvet" variant="secondary-light">
          Naroči posvet
        </Button>
      </div>
    </div>
  </Container>
</section>
  );
}