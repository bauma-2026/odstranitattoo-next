import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Script from "next/script";
import { faqs } from "@/content/faq";

type Props = {
  excludeIds?: string[];
  showClosingCta?: boolean;
};

export default function FaqSection({ excludeIds = [], showClosingCta = true }: Props) {
  const visibleFaqs = faqs.filter((faq) => !excludeIds.includes(faq.id));

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: visibleFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* FAQ */}
      <section className="section-tight border-t border-neutral-200/70 bg-hero">
        <Container className="max-w-3xl">
          <div className="section-gap">
            {/* HEADER */}
            <div className="header-stack max-w-2xl">
              <p className="eyebrow-muted">Pogosta vprašanja</p>

              <h2 className="heading-section text-neutral-950">
                Odgovori na pogosta vprašanja
              </h2>

              <p className="text-body-lg max-w-[46ch] text-neutral-700">
                Najpogostejša vprašanja pred odločitvijo in med postopkom.
              </p>
            </div>

            {/* FAQ LIST */}
           <div className="max-w-3xl pb-6 sm:pb-14">
              {visibleFaqs.map((faq) => (
                <details
                  key={faq.id}
                  className="group border-b border-neutral-300/70"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-0 py-3 text-left sm:py-4">
                    <span className="pr-4 text-base font-medium leading-7 tracking-tight text-neutral-950 sm:text-[1.05rem]">
                      {faq.q}
                    </span>

                    <span className="relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="absolute h-[2px] w-4 bg-neutral-900 transition-transform duration-200" />
                      <span className="absolute h-4 w-[2px] bg-neutral-900 transition-opacity duration-200 group-open:opacity-0" />
                    </span>
                  </summary>

                  <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="pb-6 pr-10 pt-0">
                        <p className="text-body text-neutral-700">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      {showClosingCta && (
        <section className="section-tight border-t border-neutral-200/70 bg-hero">
          <Container>
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <p className="eyebrow-muted">Kontakt</p>

              <h2 className="heading-section mt-4 text-neutral-950">
                Še vedno imate vprašanje?
              </h2>

           <p className="mt-4 max-w-[50ch] text-body-lg text-neutral-600">
    Pošljite vprašanje ali fotografijo tetovaže in dogovorili se bomo
    za naslednji korak.
  </p>

              <div className="mt-8">
                <Button href="/posvet" variant="primary-light">
                  Pošlji povpraševanje
                </Button>
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
