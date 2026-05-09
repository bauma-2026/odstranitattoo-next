import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyPico() {
  return (
    <>
      <section className="section-sm border-t border-neutral-200/70 bg-white">
        <Container>
          <div className="section-gap-lg">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-14">
              <div className="header-stack max-w-xl">
                <p className="eyebrow-muted">Tehnologija vpliva na rezultat</p>

                <h2 className="heading-section text-neutral-950">
                  Zakaj tehnologija vpliva na rezultat
                </h2>

                <p className="text-body-lg">
                  Pri odstranjevanju tattoojev ni pomembno samo, da se pigment
                  razbije — pomembno je tudi, kako natančno se to zgodi.
                </p>

                <p className="text-body">
                  To vpliva na to, kako postopno telo odstranjuje pigment, kako
                  se koža odziva in kako predvidljiv je proces skozi več
                  tretmajev.
                </p>

                <p className="text-body pt-1">
                  Če vas zanima celoten potek, lahko preberete{" "}
                  <a
                    href="/odstranjevanje-tattoojev"
                    className="font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
                  >
                    kako poteka odstranjevanje
                  </a>
                  , podrobneje pa tudi{" "}
                  <a
                    href="/odstranjevanje-tetovaze"
                    className="font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
                  >
                    odstranjevanje tetovaže z laserjem
                  </a>{" "}
                  ali preverite{" "}
                  <a
                    href="/odstranjevanje-tattoo-domzale"
                    className="font-medium text-neutral-900 underline underline-offset-4 transition hover:text-neutral-700"
                  >
                    odstranjevanje tattoojev v Domžalah
                  </a>
                  .
                </p>
              </div>

<div className="image-block relative h-[380px] overflow-hidden border border-neutral-200/60 bg-white sm:h-[440px] lg:h-full lg:min-h-[560px]">                <Image
                  src="/images/pico/pico-technology-detail.webp"
                  alt="Pico laser naprava za odstranjevanje tattoojev"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="scale-[1.01] object-cover object-[56%_31%]"
                />
              </div>
              {/* MOBILE SUMMARY */}
<div className="pt-0 lg:hidden">
  <div className="flex flex-col gap-2">
   <p className="text-body font-medium text-neutral-900">
  Pico laser omogoča bolj predvidljivo odstranjevanje.
</p>

    <ul className="list-disc pl-4 space-y-2 text-body-sm text-neutral-700 marker:text-skin-500/70">
      <li>tattoo bledi bolj enakomerno skozi čas</li>
      <li>koža je med postopkom manj obremenjena</li>
      <li>več kontrole pri zahtevnejših tattoojih</li>
    </ul>
  </div>
</div>
            </div>
</div>
       
        </Container>
      </section>

      <section className="section-sm border-t border-white/10 bg-neutral-950 text-white">
        <Container>
         <div className="py-16 sm:py-20">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <p className="eyebrow-skin text-skin-600/80">Posvet</p>

              <h2 className="heading-section text-white">
                Kaj to pomeni za vaš primer?
              </h2>

              <p className="text-body-inverse-lg max-w-[52ch] text-neutral-200">
                Tehnologija vpliva na potek odstranjevanja, rezultat pa je
                vedno odvisen od konkretnega tattooja. Na posvetu ocenimo, kaj
                je pri vašem primeru realno dosegljivo.
              </p>

              <p className="text-body-inverse-sm pt-1 text-white/55">
                Posvet 30 € • ob zakupu storitve se znesek odšteje
              </p>

              <div className="pt-3">
                <Button href="/posvet" variant="primary-dark">
                  Pošlji povpraševanje
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}