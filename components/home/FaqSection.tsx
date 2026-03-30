import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Script from "next/script";

const faqs = [
  {
    q: "Ali se tattoo lahko popolnoma odstrani?",
    a: "V veliko primerih je mogoče tattoo zelo uspešno odstraniti. Končni rezultat pa je vedno odvisen od pigmenta, kože in starosti tattooja. Na posvetu vam jasno povemo, kaj lahko realno pričakujete.",
  },
  {
    q: "Koliko tretmajev je potrebnih?",
    a: "Odvisno od velikosti, barve in globine tattooja. Nekateri tattooji zbledijo hitreje, drugi potrebujejo več tretmajev. Na posvetu dobite realno oceno števila tretmajev.",
  },
  {
    q: "Ali odstranjevanje tattooja boli?",
    a: "Občutek je odvisen od mesta tattooja in vaše občutljivosti, večina pa ga opisuje kot rahlo pikanje ali toploto. Tretma je kratek, po potrebi uporabimo hlajenje za večje udobje.",
  },
  {
    q: "Ali je rezultat takoj viden?",
    a: "Ne. Pigment se razgrajuje postopoma, telo pa ga odstranjuje skozi čas. Vidne spremembe se pokažejo po vsakem tretmaju.",
  },
  {
    q: "Ali odstranjevanje poškoduje kožo?",
    a: "Pri Pico laser tehnologiji je energija usmerjena v pigment, ne v okolno tkivo. Zato je vpliv na kožo minimalen, postopek pa poteka postopno in nadzorovano.",
  },
  {
    q: "Ali lahko nastanejo brazgotine?",
    a: "Pri sodobni Pico laser tehnologiji je tveganje za brazgotine majhno. Pomembna je tudi pravilna nega po tretmaju, ki jo natančno razložimo na posvetu.",
  },
  {
    q: "Koliko časa traja odstranjevanje?",
    a: "Odstranjevanje je postopen proces. Med tretmaji mora miniti nekaj tednov, da se koža obnovi in telo odstrani pigment. Celoten proces običajno traja več mesecev.",
  },
  {
    q: "Ali lahko odstranim samo del tattooja?",
    a: "Da. Možno je postopno odstranjevanje ali svetljenje tattooja za prekrivanje (cover-up). Postopek prilagodimo vašemu cilju.",
  },
  {
    q: "Koliko stane odstranjevanje tattooja?",
    a: "Cena je odvisna od velikosti in zahtevnosti tattooja. Na posvetu dobite jasno oceno stroška in poteka odstranjevanja.",
  },
];

export default function FaqSection() {
  return (
    <>
      {/* FAQ */}
<section className="section-tight border-t border-neutral-200/70 bg-neutral-50">
  <Container className="max-w-3xl">
    <div className="section-gap">

      {/* HEADER */}
      <div className="header-stack max-w-2xl">
        <p className="eyebrow-muted">Pogosta vprašanja</p>

        <h2 className="heading-section text-neutral-950">
          Odgovori na pogosta vprašanja
        </h2>

        <p className="text-body-lg max-w-[42ch] text-neutral-700">
          Spodaj so odgovori na vprašanja, ki jih stranke najpogosteje zastavijo
          pred prvim tretmajem.
        </p>
      </div>

      {/* MINI INTRO */}
      <div className="border-t border-neutral-200/60 pt-6 sm:pt-8">
        <p className="text-sm text-neutral-500">
          Najprej preverite najpogostejša vprašanja, nato pa se po potrebi
          oglasite na posvet.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group border-b border-neutral-200/70 py-1.5"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-4 py-4 text-left">
              <span className="pr-4 text-base font-semibold leading-7 tracking-tight text-neutral-950">
                {faq.q}
              </span>

              <span className="relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                <span className="absolute h-[2px] w-4 bg-neutral-900 transition-transform duration-200" />
                <span className="absolute h-4 w-[2px] bg-neutral-900 transition-opacity duration-200 group-open:opacity-0" />
              </span>
            </summary>

            <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <div className="px-4 pb-5 pt-1">
                  <p className="text-body">{faq.a}</p>
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
<section className="section-tight border-t border-neutral-300/60 bg-neutral-200/60">
  <Container>
    <div className="section-gap">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center gap-5">

        <p className="text-sm text-neutral-500">
          Še vedno imate vprašanje?
        </p>

      <p className="eyebrow-skin text-skin-600/80">
          Kontakt
        </p>

        <h2 className="heading-section text-neutral-950">
          Imate dodatno vprašanje?
        </h2>

        <p className="text-body-lg max-w-[42ch] text-neutral-700">
          Pošljite vprašanje ali povpraševanje in pomagamo vam z jasno
          oceno naslednjega koraka.
        </p>

        <div className="pt-2">
          <Button href="/posvet" variant="primary-light">
            Pošlji vprašanje
          </Button>
        </div>

      </div>
    </div>
  </Container>
</section>
    </>
  );
}