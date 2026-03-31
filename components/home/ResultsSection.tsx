import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const resultsPreview = [
  {
    image: "/images/results/fairy-before-after.jpg",
    title: "4 tretmaji — vidno zmanjšanje pigmenta",
    meta: "4 tretmaji",
    caption: "Pred / Po",
    note: "Pigment je občutno svetlejši. Za končni rezultat je potreben nadaljnji postopek.",
    alt: "Pred in po štirih tretmajih laserskega odstranjevanja tattooja",
  },
  {
    image: "/images/results/phoenix-before-after.jpg",
    title: "2 tretmaja — začetni fade",
    meta: "2 tretmaja",
    caption: "Pred / Po",
    note: "Prvi rezultati so vidni že po nekaj obiskih. Tattoo postopoma bledi skozi nadaljnje tretmaje.",
    alt: "Pred in po dveh tretmajih laserskega odstranjevanja tattooja",
  },
  {
    image: "/images/results/tree-before-after.jpg",
    title: "4 tretmaji — enakomerno bledenje",
    meta: "4 tretmaji",
    caption: "Pred / Po",
    note: "Napredek je postopen in odvisen od pigmenta, globine in odziva kože.",
    alt: "Pred in po štirih tretmajih laserskega odstranjevanja temnejšega pigmenta",
  },
];

export default function ResultsPreviewSection() {
  return (
<section className="section-sm border-t border-neutral-200/70 bg-white">
  <Container>
    <div className="section-gap">
      
   {/* HEADER */}
{/* HEADER */}
<div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start lg:gap-14">
  <div className="header-stack max-w-3xl">
    <p className="eyebrow-muted">Rezultati</p>

    <h2 className="heading-section text-neutral-950">
      Realni primeri odstranjevanja
    </h2>

    <p className="text-body-lg max-w-[56ch]">
      Spodaj so realni primeri,
      <br className="hidden sm:block" />
      kako tattoo skozi več tretmajev postopoma bledi.
    </p>

    <p className="text-body-sm max-w-[52ch] text-neutral-600">
      Napredek ni enak pri vseh — odvisen je od pigmenta, globine in odziva kože, zato je pri vsakem primeru potrebna individualna ocena.
    </p>
  </div>

 <div className="hidden lg:block max-w-[34ch]">
  <div className="relative rounded-[20px] bg-neutral-50/80 p-6 ring-1 ring-neutral-200/60">
    
    {/* LEFT ACCENT */}
    <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-skin-400/70" />

    <div className="pl-4">
      <p className="eyebrow-muted">Kaj je pomembno</p>

      <ul className="mt-5 flex flex-col gap-3 text-body-sm text-neutral-700">
        <li className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-skin-500/70" />
          <span>rezultati niso takojšnji</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-skin-500/70" />
          <span>število tretmajev je odvisno od tattooja</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-skin-500/70" />
          <span>primeri spodaj prikazujejo postopen napredek</span>
        </li>
      </ul>

      <p className="mt-6 text-body-sm text-neutral-500">
        Končni rezultat je vedno odvisen od pigmenta, starega tattooja in odziva kože.
      </p>
    </div>
  </div>
</div>
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