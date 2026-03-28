import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyPico() {
  return (
<section className="section-sm border-t border-skin-500/20 bg-skin-200/60">
  <Container>
    <div className="section-gap">

      {/* TOP GRID */}
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        
        <div className="header-stack max-w-xl">
          <p className="eyebrow-skin">
            Pico laser tehnologija
          </p>

          <h2 className="heading-section text-neutral-950">
            Zakaj je Pico laser učinkovitejši
          </h2>

          <p className="text-body-lg">
            Pico laser deluje z izjemno kratkimi impulzi, zato pigment razbije na
            manjše delce kot starejše laserske tehnologije. Telo jih zato lažje
            postopoma odstrani.
          </p>

          <p className="text-body">
            Ker je energija bolj usmerjena v pigment in manj v okoliško tkivo, je
            odstranjevanje bolj natančno, bolj nadzorovano in manj obremenjujoče
            za kožo.
          </p>

          <p className="text-body">
            Več o postopku lahko preberete na strani{" "}
            <a
              href="/odstranjevanje-tattoojev"
              className="font-medium underline underline-offset-4 decoration-neutral-400 transition hover:decoration-neutral-900"
            >
              odstranjevanje tattoojev
            </a>{" "}
            ali na strani{" "}
            <a
              href="/odstranjevanje-tetovaze"
              className="font-medium underline underline-offset-4 decoration-neutral-400 transition hover:decoration-neutral-900"
            >
              odstranjevanje tetovaže z laserjem
            </a>
            .
          </p>
        </div>

        <div className="relative overflow-hidden image-block border border-neutral-200/60 bg-white">
          <Image
            src="/images/pico/pico-device.jpg"
            alt="Pico laser naprava za odstranjevanje tetovaž"
            width={1200}
            height={1200}
            className="block w-full object-cover"
          />
        </div>
      </div>

      {/* BENEFITS */}
      <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Krajši impulz
          </h3>
          <p className="text-body-sm">
            Pico laser deluje v pikosekundah, zato pigment razbije hitreje in
            natančneje kot starejše tehnologije.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Manjša obremenitev kože
          </h3>
          <p className="text-body-sm">
            Energija je bolj usmerjena v pigment, zato je okoliško tkivo med
            tretmajem manj obremenjeno.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Lažje odstranjevanje pigmenta
          </h3>
          <p className="text-body-sm">
            Manjši delci pigmenta omogočajo postopnejše in učinkovitejše
            odstranjevanje iz tretmaja v tretma.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold text-neutral-950">
            Bolj nadzorovan rezultat
          </h3>
          <p className="text-body-sm">
            Postopek omogoča več nadzora nad odstranjevanjem in manjše tveganje za
            nepotrebno obremenitev kože.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-spacing flex justify-center">
        <div
          className="
            w-full max-w-xl
            rounded-[20px]
            border border-skin-500/40
            bg-skin-300/50
            px-6 py-7 text-center
            shadow-[0_8px_20px_rgba(0,0,0,0.03)]
            sm:px-8 sm:py-8
          "
        >
          <p className="text-base font-medium text-neutral-900 sm:text-lg">
            Želite preveriti, ali je Pico laser primeren za vaš tattoo?
          </p>

          <p className="text-body-sm mx-auto mt-2 max-w-md text-neutral-700">
            Na posvetu ocenimo vaš tattoo in razložimo, kaj lahko realno pričakujete.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button href="/posvet" variant="primary-light">
              Preveri svoj primer
            </Button>

            <Button href="/rezultati" variant="secondary-light">
              Poglej rezultate
            </Button>
          </div>
        </div>
      </div>

    </div>
  </Container>
</section>
  );
}


