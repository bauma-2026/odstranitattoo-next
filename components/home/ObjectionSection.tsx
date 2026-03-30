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

          <h2 className="heading-section max-w-[16ch] text-neutral-950">
            Ali se tattoo lahko popolnoma odstrani?
          </h2>

          <p className="text-body-lg max-w-[36ch]">
            Nekatere tetovaže izginejo skoraj popolnoma.
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <p className="text-body">
              Rezultat je odvisen od pigmenta, starosti in globine tattooja.
            </p>

            <p className="text-body">
         Zato je realna ocena pred začetkom odstranjevanja ključna.
            </p>

            <p className="text-body">
              Na posvetu dobite jasno oceno, kaj lahko pričakujete.
            </p>
          </div>

          <div className="cta-spacing flex flex-wrap items-center gap-4 pt-2">
            <Button href="/posvet" variant="primary-light">
              Preveri svoj primer
            </Button>

            <Button href="/rezultati" variant="secondary-light">
              Poglej rezultate
            </Button>
          </div>
        </div>

       <div className="rounded-[20px] border border-neutral-200/60 bg-white p-6 sm:p-7">
<p className="text-base font-semibold text-neutral-900 leading-snug">
  Zakaj je pomembna ocena?
</p>

  <p className="mt-3 max-w-[42ch] text-body text-neutral-700">
    Vsaka tetovaža je drugačna. Rezultat je odvisen od pigmenta,
    globine nanosa in odziva kože, zato je individualna ocena najboljši
    prvi korak pred odstranjevanjem.
  </p>
</div>
      </div>
    </div>
  </Container>
</section>
  );
}