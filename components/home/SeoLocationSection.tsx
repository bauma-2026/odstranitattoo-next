import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

const points = [
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
    text: "Enostaven dostop, mirno okolje in jasna razlaga postopka pred začetkom odstranjevanja.",
  },
];

export default function SeoLocationSection() {
  return (
    <section className="section-sm border-t border-neutral-200/70 bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-14">
          {/* IMAGE */}
          <div className="image-block relative aspect-[6/5] overflow-hidden border border-neutral-200/60 bg-white lg:aspect-[4/5]">
            <Image
              src="/images/studio/image00074.webp"
              alt="Pico laser naprava v studiu v Domžalah"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="scale-[1.12] object-cover object-[50%_54%]"
            />
          </div>

          {/* TEXT */}
          <div className="order-1 flex max-w-[720px] flex-col gap-5 sm:gap-6 lg:order-2">
            <div className="header-stack gap-4">
              <p className="eyebrow-muted">Studio in tehnologija</p>

              <h2 className="heading-section text-neutral-950">
                Odstranjevanje tetovaž v Domžalah
              </h2>

              <p className="text-body-lg">
                Odstranjevanje tetovaže je postopen proces. Na začetku
                pregledamo tattoo, kožo in pigment ter razložimo, kako postopek
                običajno poteka.
              </p>
            </div>

            <ul className="grid gap-5">
              {points.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-skin-500" />

                  <div>
                    <p className="text-sm font-semibold text-neutral-900">
                      {item.title}
                    </p>

                    <p className="mt-1 max-w-[44ch] text-body-sm text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4 pt-1">
              <p className="text-body max-w-[48ch]">
                Za vprašanja o postopku ali terminu lahko pošljete
                povpraševanje in dogovorili se bomo za naslednji korak.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">
                <Button href="/posvet" variant="primary-light">
                  Pošlji povpraševanje
                </Button>

                <Button href="/rezultati" variant="secondary-light">
                  Poglej rezultate
                </Button>
              </div>

              {/* UTILITY LINKS */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm text-neutral-500">
                <a href="/kontakt" className="transition hover:text-neutral-900">
                  Kontakt
                </a>

                <span className="text-neutral-300">•</span>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Artbite%20Tattoo%20Dom%C5%BEale"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-neutral-900"
                >
                  Navodila za pot
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}