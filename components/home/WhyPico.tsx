import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyPico() {
  return (
    <>
   <section className="section-sm border-t border-neutral-200/70">
  <Container>
    <div className="section-gap-lg">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
        <div className="header-stack order-2 max-w-xl lg:order-1">
          <p className="eyebrow-muted">Natančnost postopka</p>

          <h2 className="heading-section text-ink lg:max-w-[21ch]">
            Zakaj tehnologija vpliva na rezultat
          </h2>

          <p className="text-body-lg">
            Pri odstranjevanju tattoojev ni pomembno samo, da se pigment
            razbije — pomembno je tudi, kako natančno in nadzorovano se to
            zgodi skozi več tretmajev. Med postopkom uporabljamo tudi
            hlajenje kože, ki zmanjša občutek vročine in nelagodja.
          </p>

          <a
            href="/pico-laser"
            className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
          >
            Preberi več o Pico laser tehnologiji →
          </a>
        </div>

        <div className="image-block relative order-1 aspect-[4/3] overflow-hidden border border-neutral-200/60 bg-white lg:order-2">
          <Image
            src="/images/pico/pico-technology-detail.webp"
            alt="Pico laser naprava za odstranjevanje tattoojev"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="scale-[1.01] object-cover object-[56%_66%]"
          />
        </div>
      </div>
    </div>
  </Container>
</section>
{/* EYEBROWS NOTE */}
<section className="section-tight border-t border-neutral-200/70 bg-hero">
  <Container>
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:gap-12">
      {/* IMAGE */}
      <div className="image-block relative aspect-[4/3] overflow-hidden border border-neutral-200/60 bg-white">
        <Image
          src="/images/video-posters/poster-eyebrow-01.webp"
          alt="Lasersko odstranjevanje permanentnih obrvi"
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover object-[50%_36%]"
        />
      </div>

      {/* TEXT */}
      <div className="header-stack">
        <p className="eyebrow-muted">Permanentne obrvi</p>

        <h2 className="heading-section text-ink lg:max-w-[22ch]">
          Odstranjujemo tudi permanentne obrvi
        </h2>

        <p className="text-body text-ink-muted">
          Poleg tattoojev odstranjujemo tudi permanentni pigment obrvi. Ker gre
          za občutljivo področje obraza, je pomemben postopen in previden
          pristop.
        </p>

        <div className="flex flex-col gap-2 border-t border-neutral-200 pt-5 sm:flex-row sm:items-center sm:gap-5">
        <a
href="/posvet"
className="text-sm font-medium text-ink underline underline-offset-4 transition hover:text-neutral-700"
>
Pošlji fotografijo za posvet →
</a>

        <a
href="/rezultati#obrvi"
className="text-sm font-medium text-ink-muted underline underline-offset-4 transition hover:text-ink"
>
Poglej primer odstranjevanja obrvi →
</a>
        </div>
      </div>
    </div>
  </Container>
</section>
      <section className="section-sm border-t border-ink/10 bg-cta text-ink">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-skin-700">Naslednji korak</p>

            <h2 className="heading-section text-ink">
              Vsak tattoo se odziva drugače
            </h2>

            <p className="max-w-[52ch] text-lg leading-[1.6] text-ink-muted">
              Na začetku lahko okvirno ocenimo izhodišče in razložimo
              pričakovan potek. Bolj jasen odziv pigmenta pa se pokaže po
              nekaj tretmajih.
            </p>

            <p className="pt-1 text-sm leading-[1.6] text-ink-muted">
              Posvet 30 € • ob zakupu storitve je posvet brezplačen
            </p>

            <div className="pt-3">
              <Button href="/posvet" variant="primary-light">
                Pošlji povpraševanje
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}