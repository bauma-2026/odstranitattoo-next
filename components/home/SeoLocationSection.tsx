import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const textLink =
  "underline underline-offset-4 transition hover:text-neutral-600";

const points: { title: string; text: string; href?: string }[] = [
  {
    title: "Okviren pregled pred začetkom",
    text: "Vsak tattoo pregledamo individualno glede na velikost, barvo, globino pigmenta, starost tattooja in stanje kože.",
  },
  {
    title: "Pico laser tehnologija",
    text: "Laser omogoča nadzorovano razgradnjo pigmenta. Število obiskov je odvisno od tattooja, barv in odziva kože.",
  },
  {
    title: "Studio v Domžalah",
    href: "/odstranjevanje-tattoo-domzale",
    text: "Enostaven dostop, mirno okolje in jasna razlaga postopka pred začetkom odstranjevanja.",
  },
];

export default function SeoLocationSection() {
  return (
    <section className="section-sm border-t border-neutral-200/70">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-start lg:gap-14">
          {/* IMAGE */}
          <div className="image-block relative aspect-[6/5] overflow-hidden border border-neutral-200/60 bg-white">
            <Image
              src="/images/studio/image00074.webp"
              alt="Pico laser naprava v studiu v Domžalah"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="scale-[1.05] object-cover object-[50%_64%]"
            />
          </div>

          {/* TEXT */}
          <div className="order-1 flex max-w-[720px] flex-col lg:order-2">
            {/* 1–2: SECTION IDENTITY + MAIN EXPLANATION */}
            <div className="header-stack gap-4">
              <p className="eyebrow-muted">Studio in tehnologija</p>

              <h2 className="heading-section text-neutral-950">
                Odstranjevanje tetovaž v Domžalah
              </h2>

              <p className="text-body-lg">
                <Link
                  href="/odstranjevanje-tetovaze"
                  className={`font-medium text-ink ${textLink}`}
                >
                  Odstranjevanje tetovaže
                </Link>{" "}
                je postopen proces. Na začetku pregledamo tattoo, kožo in
                pigment ter razložimo, kako postopek običajno poteka.
              </p>
            </div>

            {/* 3: SUPPORTING PROOF POINTS */}
            <ul className="mt-6 flex flex-col gap-3 sm:mt-7">
              {points.map((item) => (
                <li
                  key={item.title}
                  className="relative pl-[18px] before:absolute before:left-0 before:top-[0.42em] before:h-[6px] before:w-[6px] before:rounded-full before:bg-skin-600 before:content-['']"
                >
                  <p className="text-sm font-semibold text-neutral-900">
                    {item.href ? (
                      <Link href={item.href} className={textLink}>
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </p>

                  <p className="max-w-[44ch] text-body-sm text-neutral-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            {/* 4: CLOSING ACTION */}
            <div className="mt-6 sm:mt-7">
              <a
                href="/posvet"
                className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
              >
                Pošlji povpraševanje →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}