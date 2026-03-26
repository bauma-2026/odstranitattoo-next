import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function WhyPico() {
  return (
<section className="border-t border-skin-500/20 bg-skin-200/60 pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
  <Container>
    <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
  <div className="max-w-xl">
    <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-skin-500/90">
      Pico laser tehnologija
    </p>

    <h2 className="mt-4 text-3xl font-semibold tracking-tight leading-[1.1] text-neutral-950 sm:text-4xl">
      Zakaj je Pico laser učinkovitejši
    </h2>

    <p className="mt-6 text-lg leading-[1.6] text-neutral-700">
      Pico laser deluje z izjemno kratkimi impulzi, zato pigment razbije na
      manjše delce kot starejše laserske tehnologije. Telo jih zato lažje
      postopoma odstrani.
    </p>

    <p className="mt-4 text-lg leading-[1.6] text-neutral-700">
      Ker je energija bolj usmerjena v pigment in manj v okoliško tkivo, je
      odstranjevanje bolj natančno, bolj nadzorovano in manj obremenjujoče
      za kožo.
    </p>

    <p className="mt-6 text-lg leading-[1.6] text-neutral-700">
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

    <div className="mt-16 grid gap-8 sm:grid-cols-2 sm:gap-10">
      <div>
        <h3 className="text-base font-semibold text-neutral-950">
          Krajši impulz
        </h3>
        <p className="mt-2 text-base leading-6 text-neutral-700">
          text-base leading-6 zato pigment razbije hitreje in
          natančneje kot starejše tehnologije.
        </p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-neutral-950">
          Manjša obremenitev kože
        </h3>
        <p className="mt-2 text-base leading-6 text-neutral-700">
          Energija je bolj usmerjena v pigment, zato je okoliško tkivo med
          tretmajem manj obremenjeno.
        </p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-neutral-950">
          Lažje odstranjevanje pigmenta
        </h3>
        <p className="mt-2 text-base leading-6 text-neutral-700">
          Manjši delci pigmenta omogočajo postopnejše in učinkovitejše
          odstranjevanje iz tretmaja v tretma.
        </p>
      </div>

      <div>
        <h3 className="text-base font-semibold text-neutral-950">
          Bolj nadzorovan rezultat
        </h3>
        <p className="mt-2 text-base leading-6 text-neutral-700">
          Postopek omogoča več nadzora nad odstranjevanjem in manjše tveganje za
          nepotrebno obremenitev kože.
        </p>
        
      </div>
    </div>

   <div className="mt-14 flex justify-center">
  <div
    className="
      w-full max-w-xl
      rounded-[20px]
      border border-skin-500/40
      bg-skin-300/50
      px-6 py-7
      text-center
      shadow-[0_8px_20px_rgba(0,0,0,0.03)]
      sm:px-8 sm:py-8
    "
  >
    <p className="text-base font-medium text-neutral-900 sm:text-lg">
      Želite preveriti, ali je Pico laser primeren za vaš tattoo?
    </p>

   <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-neutral-700">
  Na posvetu ocenimo vaš tattoo in razložimo, kaj lahko realno pričakujete.
</p>

    <div className="mt-6 flex flex-wrap justify-center gap-3">
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
  </Container>
</section>
  );
}


