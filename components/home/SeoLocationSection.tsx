import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

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
                Odstranjevanje tetovaže je postopen proces. Zato najprej
                ocenimo tattoo, kožo in pričakovan rezultat, nato pa izberemo
                ustrezen pristop z uporabo Pico laserja.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-skin-500" />

                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Realna ocena pred začetkom
                  </p>

                  <p className="mt-1 max-w-[44ch] text-body-sm text-neutral-600">
                    Vsak tattoo pregledamo individualno glede na velikost,
                    barvo, globino pigmenta, starost tattooja in stanje kože.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-skin-500" />

                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Pico laser tehnologija
                  </p>

                  <p className="mt-1 max-w-[44ch] text-body-sm text-neutral-600">
                    Laser omogoča nadzorovano razgradnjo pigmenta. Število
                    obiskov je odvisno od tattooja, barv in odziva kože.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-skin-500" />

                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Studio v Domžalah
                  </p>

                  <p className="mt-1 max-w-[44ch] text-body-sm text-neutral-600">
                    Enostaven dostop, mirno okolje in jasna razlaga postopka
                    pred začetkom odstranjevanja.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 pt-1">
             <p className="text-body">
  Prvi korak je posvet, kjer preverimo, kaj je pri vašem tattooju realno možno.
</p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3">
                <Button href="/posvet" variant="primary-light">
                  Preveri svoj primer
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