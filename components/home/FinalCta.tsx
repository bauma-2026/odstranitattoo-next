import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function FinalCta() {
  return (
    <section className="section-sm relative overflow-hidden bg-cta text-ink">
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-skin-700">Kontakt</p>

            <h2 className="heading-section text-ink">
              Imate vprašanje<br className="hidden sm:block" /> o odstranjevanju?
            </h2>

          <p className="max-w-[42ch] text-lg leading-[1.6] text-ink-muted">
  Pošljite povpraševanje ali fotografijo tetovaže in dogovorili se
  bomo za naslednji korak.
</p>

            <p className="text-sm leading-[1.6] text-ink-muted">
              Posvet 30 € • ob zakupu storitve je posvet brezplačen
            </p>
          </div>

          <div className="cta-spacing flex flex-wrap justify-center gap-4">
           <Button href="/posvet" variant="primary-light">
  Pošlji svoj primer
</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}