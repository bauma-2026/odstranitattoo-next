import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

// Neobstoječe poti so vedno noindex; prepiše index, follow iz root layouta.
export const metadata: Metadata = {
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-canvas text-ink">
      <section className="section-sm">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="eyebrow-muted">404</p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
              Stran ni bila najdena
            </h1>

            <p className="mt-5 max-w-[48ch] text-body-lg text-ink-muted">
              Povezava je morda zastarela ali pa stran ne obstaja več. Lahko se
              vrnete na prvo stran ali pogledate rezultate odstranjevanja.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Button href="/">Prva stran</Button>

              <Button href="/rezultati" variant="secondary-light">
                Poglej rezultate
              </Button>
            </div>

            <Link
              href="/posvet"
              className="mt-6 text-sm font-medium text-neutral-700 underline underline-offset-4 transition hover:text-ink"
            >
              Pošlji vprašanje ali fotografijo tetovaže →
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}