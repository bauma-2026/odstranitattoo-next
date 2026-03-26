import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyPico() {
  return (
    <section className="section-sm border-t border-skin-500/20 bg-skin-100">
      <Container>
        <div className="flex flex-col gap-14 sm:gap-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
            <div className="flex max-w-xl flex-col gap-4 sm:gap-5">
              <p className="eyebrow-skin">Pico laser tehnologija</p>

              <h2 className="heading-section text-neutral-950">
                Zakaj je Pico laser učinkovitejši
              </h2>

              <p className="text-body-lg">
                Pico laser deluje z izjemno kratkimi impulzi, zato pigment
                razbije na manjše delce kot starejše laserske tehnologije. Telo
                jih zato lažje postopoma odstrani.
              </p>

              <p className="text-body">
                Ker je energija bolj usmerjena v pigment in manj v okoliško
                tkivo, je odstranjevanje bolj natančno, bolj nadzorovano in manj
                obremenjujoče za kožo.
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
    src="/images/pico/pico-laser-odstranjevanje-tetovaz-naprava.webp"
    alt="Pico laser naprava za odstranjevanje tetovaž"
    width={1200}
    height={1200}
    className="block w-full object-cover object-top scale-[1.06]"
  />
</div>
</div>

          <div className="border-t border-neutral-200/70 pt-10 sm:pt-12">
            <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-neutral-950">
                  Krajši impulz
                </h3>
                <p className="text-body">
                  Pico laser deluje v pikosekundah, zato pigment razbije hitreje
                  in natančneje kot starejše tehnologije.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-neutral-950">
                  Manjša obremenitev kože
                </h3>
                <p className="text-body">
                  Energija je bolj usmerjena v pigment, zato je okoliško tkivo med
                  tretmajem manj obremenjeno.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-neutral-950">
                  Lažje odstranjevanje pigmenta
                </h3>
                <p className="text-body">
                  Manjši delci pigmenta omogočajo postopnejše in učinkovitejše
                  odstranjevanje iz tretmaja v tretma.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-neutral-950">
                  Bolj nadzorovan rezultat
                </h3>
                <p className="text-body">
                  Postopek omogoča več nadzora nad odstranjevanjem in manjše
                  tveganje za nepotrebno obremenitev kože.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-[20px] border border-neutral-200 border-skin-500/30 bg-skin-100 px-6 py-7 text-center shadow-[0_4px_14px_rgba(var(--skin-rgb),0.12)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_18px_rgba(var(--skin-rgb),0.18)] sm:px-8 sm:py-8">
              <div className="flex flex-col items-center gap-3">
                <p className="text-base font-medium text-neutral-900 sm:text-lg">
                  Želite preveriti, ali je Pico laser primeren za vaš tattoo?
                </p>

                <p className="text-body-sm mx-auto max-w-md text-neutral-700">
                  Na posvetu ocenimo vaš tattoo in razložimo, kaj lahko realno
                  pričakujete.
                </p>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                  <Button
                    href="/posvet"
                    variant="primary-light"
                    className="
                      hover:!bg-skin-200
                      hover:!text-skin-900
                      hover:!border-skin-500/40
                    "
                  >
                    Preveri svoj primer
                  </Button>

                  <Button
                    href="/rezultati"
                    variant="secondary-light"
                    className="
                      hover:!border-skin-500/50
                      hover:!text-skin-900
                    "
                  >
                    Poglej rezultate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}