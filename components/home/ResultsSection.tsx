import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const resultsPreview = [
  {
    image: "/images/results/fairy-before-after.jpg",
    title: "Postopno bledenje manjšega tattooja",
    meta: "po 4 tretmajih",
    alt: "Primer postopnega odstranjevanja manjšega tattooja po štirih tretmajih",
  },
  {
    image: "/images/results/phoenix-before-after.jpg",
    title: "Postopen fade večje tetovaže",
    meta: "po 2 tretmajih",
    alt: "Primer postopnega bledenja večje tetovaže po dveh tretmajih",
  },
  {
    image: "/images/results/tree-before-after.jpg",
    title: "Zmanjšanje temnega pigmenta",
    meta: "po 4 tretmajih",
    alt: "Primer odstranjevanja temnega pigmenta po štirih tretmajih",
  },
];

export default function ResultsPreviewSection() {
  return (
    <section className="section-sm border-t border-skin-400/30 bg-white">
      <Container>
        <div className="flex max-w-3xl flex-col gap-4 sm:gap-5">
          <p className="eyebrow-muted">Rezultati</p>

          <h2 className="heading-section text-neutral-950">
            Realni primeri postopnega odstranjevanja
          </h2>

          <p className="text-body-lg max-w-[58ch]">
            Vsak tattoo je drugačen, zato se rezultat ocenjuje postopno. Spodaj
            so primeri, kako pigment skozi več tretmajev vidno bledi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-neutral-950">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-500">
                      {item.meta}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/rezultati">Poglej vse rezultate</Button>

          <Button href="/posvet" variant="secondary-light">
            Naroči posvet
          </Button>
        </div>
      </Container>
    </section>
  );
}