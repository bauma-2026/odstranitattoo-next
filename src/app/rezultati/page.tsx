import Image from "next/image";
import Container from "@/components/layout/Container";

const results = [
  {
    before: "/images/results/result-1-before.jpg",
    after: "/images/results/result-1-after.jpg",
    title: "Postopno bledenje tetovaže",
    meta: "več tretmajev",
    description:
      "Rezultat je odvisen od pigmenta, starosti tetovaže, globine nanosa in odziva kože na tretma.",
  },
  {
    before: "/images/results/result-2-before.jpg",
    after: "/images/results/result-2-after.jpg",
    title: "Odstranjevanje temnega pigmenta",
    meta: "individualen plan",
    description:
      "Temnejši pigmenti se pogosto odstranjujejo bolj učinkovito, vendar je vsak primer treba oceniti individualno.",
  },
  {
    before: "/images/results/result-3-before.jpg",
    after: "/images/results/result-3-after.jpg",
    title: "Priprava za cover-up",
    meta: "fade za nov tattoo",
    description:
      "V nekaterih primerih popolna odstranitev ni potrebna, ampak je cilj le dovoljšen fade za nov tattoo.",
  },
  {
    before: "/images/results/result-1-before.jpg",
    after: "/images/results/result-1-after.jpg",
    title: "Postopno odstranjevanje pigmenta",
    meta: "več obiskov",
    description:
      "Odstranjevanje tetovaže je postopen proces, pri katerem pigment skozi čas vedno bolj bledi.",
  },
  {
    before: "/images/results/result-2-before.jpg",
    after: "/images/results/result-2-after.jpg",
    title: "Individualna ocena tetovaže",
    meta: "realna pričakovanja",
    description:
      "Na potek odstranjevanja vplivajo velikost, barva, starost tetovaže in regeneracija kože.",
  },
  {
    before: "/images/results/result-3-before.jpg",
    after: "/images/results/result-3-after.jpg",
    title: "Rezultat po več tretmajih",
    meta: "postopen napredek",
    description:
      "Pri odstranjevanju tetovaž je pomembno, da se rezultat ocenjuje postopno in v realnem časovnem okviru.",
  },
];

export default function RezultatiPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Pred / Po
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-[48px]">
              Rezultati odstranjevanja tattoojev
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-neutral-700">
              Vsaka tetovaža je drugačna, zato je tudi odstranjevanje vedno
              individualen proces. Končni rezultat je odvisen od pigmenta,
              globine, starosti tetovaže in odziva kože.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {results.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white"
              >
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[4/5] bg-neutral-100">
                    <Image
                      src={item.before}
                      alt={`${item.title} pred odstranjevanjem`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700">
                      Pred
                    </div>
                  </div>

                  <div className="relative aspect-[4/5] bg-neutral-100">
                    <Image
                      src={item.after}
                      alt={`${item.title} po odstranjevanju`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-700">
                      Po
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                   <h3 className="text-lg font-semibold text-neutral-950">
                      {item.title}
                    </h3>

                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                      {item.meta}
                    </span>
                  </div>

                  <p className="mt-5 text-neutral-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}