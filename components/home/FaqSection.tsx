import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Script from "next/script";

const faqs = [
  {
    q: "Ali se tattoo lahko popolnoma odstrani?",
    a: "V veliko primerih je mogoče tattoo zelo uspešno odstraniti. Končni rezultat pa je vedno odvisen od pigmenta, kože in starosti tattooja. Zato vam že na začetku jasno povemo, kaj je pri vašem primeru realno pričakovati.",
  },
  {
    q: "Koliko tretmajev je potrebnih?",
    a: "Število tretmajev je odvisno od pigmenta, globine nanosa in odziva kože. Nekateri tattooji bledijo hitreje, drugi potrebujejo več časa. Okvirno število vedno določimo glede na vaš konkreten primer.",
  },
  {
    q: "Ali odstranjevanje tattooja boli?",
    a: "Občutek je odvisen od mesta tattooja in vaše občutljivosti. Večina ga opisuje kot hitro pikanje ali občutek rahlega \"švikanja\" po koži. Tretma je kratek, po potrebi pa poskrbimo za večje udobje.",
  },
  {
    q: "Kdaj so vidni prvi rezultati?",
    a: "Rezultat ni takojšen. Pigment se razgrajuje postopoma, telo pa ga odstranjuje skozi čas. Prve spremembe so pogosto vidne že po nekaj tretmajih, napredek pa se nadaljuje tudi med posameznimi obiski.",
  },
  {
    q: "Koliko časa mora miniti med tretmaji?",
    a: "Med tretmaji je potreben čas, da se koža obnovi in telo odstrani razbite delce pigmenta. Razmiki so običajno več tednov, natančen potek pa vedno prilagodimo glede na kožo in tattoo.",
  },
  {
    q: "Ali Pico laser deluje na vse barve tattooja?",
    a: "Pico laser je učinkovit tudi pri zahtevnejših pigmentih, vendar rezultat ni pri vseh barvah enak. Na hitrost bledenja vplivajo barva, gostota in globina tattooja.",
  },
  {
    q: "Ali odstranjevanje poškoduje kožo?",
    a: "Pri Pico laser tehnologiji je energija usmerjena predvsem v pigment, zato je vpliv na okolno tkivo manjši. Po tretmaju sta možni prehodna rdečina ali rahla občutljivost, kar je normalen odziv kože.",
  },
  {
    q: "Ali lahko nastanejo brazgotine?",
    a: "Tveganje za brazgotine je pri sodobni Pico laser tehnologiji majhno. Ključno je pravilno izveden tretma in ustrezna nega po postopku.",
  },
  {
    q: "Ali lahko odstranim samo del tattooja ali ga posvetlim za cover-up?",
    a: "Da. Tattoo lahko odstranjujemo postopoma ali ga posvetlimo do točke, primerne za prekrivanje. Postopek vedno prilagodimo vašemu cilju.",
  },
  {
    q: "Koliko stane odstranjevanje tattooja?",
    a: "Cena je odvisna od velikosti, zahtevnosti in cilja odstranjevanja. Okviren strošek in potek vedno določimo glede na vaš konkreten primer.",
  },
];

export default function FaqSection() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
<section className="section-tight border-t border-neutral-200/70 bg-neutral-50">
  <Container className="max-w-3xl">
    <div className="section-gap">
      {/* HEADER */}
      <div className="header-stack max-w-2xl">
        <p className="eyebrow-muted">Pogosta vprašanja</p>

        <h2 className="heading-section text-neutral-950">
          Odgovori na pogosta vprašanja
        </h2>

        <p className="text-body-lg max-w-[46ch] text-neutral-700">
          Spodaj so odgovori na vprašanja, ki jih stranke najpogosteje zastavijo
          pred prvim tretmajem.
        </p>
      </div>

      {/* MINI INTRO */}
      <div className="border-t border-neutral-200/60 pt-6 sm:pt-8">
        <p className="text-body-sm max-w-[58ch] text-neutral-500">
          Če svojega primera ne najdete tukaj, ga skupaj pogledamo na posvetu in
          vam jasno povemo, kaj je smiselno pričakovati.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group border-b border-neutral-200/70"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-0 py-5 text-left">
              <span className="pr-4 text-base font-semibold leading-7 tracking-tight text-neutral-950 sm:text-[1.05rem]">
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
                  <p className="text-body text-neutral-700">
                    {faq.a}
                  </p>
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
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
        <p className="text-sm text-neutral-500">
          Še vedno imate vprašanje?
        </p>

        <p className="eyebrow-skin text-skin-600/80">
          Posvet
        </p>

        <h2 className="heading-section text-neutral-950">
          Preverite svoj primer
        </h2>

        <p className="text-body-lg max-w-[46ch] text-neutral-700">
          Na posvetu pregledamo vaš tattoo in vam jasno povemo,
          <br className="hidden sm:block" />
          kaj je pri vašem primeru smiselno pričakovati.
        </p>

        <div className="pt-2">
          <Button href="/posvet" variant="primary-light">
            Preveri svoj primer
          </Button>
        </div>

        {/* subtle trust line */}
        <p className="text-sm text-neutral-500">
          Brez obveznosti. Realna ocena.
        </p>
      </div>
    </div>
  </Container>
</section>
    </>
  );
}