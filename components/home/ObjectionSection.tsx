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

              <p className="text-body-lg max-w-[38ch]">
                Večino tetovaž je možno uspešno odstraniti v celoti, vendar je
                potek odvisen od pigmenta, barve, globine, starosti tattooja in
                odziva kože.
              </p>

              <p className="text-body max-w-[42ch]">
                Odstranjevanje poteka postopno skozi več tretmajev. Dejanski
                odziv pigmenta se bolj jasno pokaže po nekaj tretmajih.
              </p>

              <div className="cta-spacing flex flex-wrap items-center gap-4 pt-3">
                <Button href="/posvet" variant="primary-light">
                  Pošlji povpraševanje
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