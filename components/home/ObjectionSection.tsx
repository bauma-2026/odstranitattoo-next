import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function ObjectionSection() {
  return (
  <section className="section-sm border-t border-neutral-200/70 bg-neutral-50 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent)]">
  <Container>
    <div className="section-gap">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14">

        {/* TEXT */}
        <div className="header-stack max-w-xl">
          <p className="eyebrow-muted">Realna pričakovanja</p>

          <h2 className="heading-section max-w-[22ch] text-neutral-950">
            Ali se tattoo lahko popolnoma odstrani?
          </h2>

          <p className="text-body-lg max-w-[36ch]">
            Večino tattoojev je mogoče zelo dobro odstraniti — v mnogih primerih tudi skoraj popolnoma.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <p className="text-body">
              Rezultat pa ni vedno enak.
            </p>

            <p className="text-body">
              Odvisen je od pigmenta, globine in odziva telesa.
            </p>

            <p className="text-body">
              Nekateri tattooji izginejo skoraj v celoti, pri drugih lahko ostanejo rahle sledi.
            </p>
          </div>

          <div className="cta-spacing flex flex-wrap items-center gap-4 pt-3">
            <Button href="/posvet" variant="primary-light">
              Preveri svoj primer
            </Button>

            <Button href="/rezultati" variant="secondary-light">
              Poglej rezultate
            </Button>
          </div>
        </div>
{/* INFO BLOCK */}
<div className="hidden lg:block max-w-[36ch]">
  <div className="relative rounded-[20px] bg-neutral-50/80 p-6 ring-1 ring-neutral-200/60">
    
    {/* LEFT ACCENT */}
    <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-skin-400/70" />

    <div className="pl-4">
      <p className="eyebrow-muted text-neutral-500">
         Kaj je pomembno vedeti
      </p>

      <ul className="mt-5 flex flex-col gap-3 text-body-sm text-neutral-700">
        <li className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-skin-500/70" />
          <span>barva tattooja</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-skin-500/70" />
          <span>starost tattooja</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-skin-500/70" />
          <span>globina nanosa</span>
        </li>

        <li className="flex items-start gap-2">
          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-skin-500/70" />
          <span>odziv kože</span>
        </li>
      </ul>

      <p className="mt-6 text-body-sm text-neutral-500">
        Zato lahko šele na podlagi vašega tattooja realno ocenimo, kaj je smiselno pričakovati.
      </p>
    </div>
  </div>
</div></div>

    </div>
  </Container>
</section>
  );
}