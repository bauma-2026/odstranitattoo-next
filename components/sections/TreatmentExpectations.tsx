import Container from "@/components/layout/Container";

const expectations = [
  {
    q: "Kaj pričakovati pri prvem tretmaju?",
    a: "Na začetku pregledamo tattoo, ocenimo pigment in kožo ter vam jasno razložimo, kaj je pri vašem primeru realno pričakovati. Sam tretma je običajno kratek.",
  },
  {
    q: "Kako stranka občuti postopek?",
    a: "Občutek se pogosto opisuje kot hitro pikanje ali pekoč občutek na koži. Med celotnim postopkom uporabljamo aktivno hlajenje za večje udobje.",
  },
  {
    q: "Koliko časa traja en tretma?",
    a: "Večina tretmajev traja od nekaj minut do približno 30 minut, odvisno od velikosti tattooja in gostote pigmenta.",
  },
  {
    q: "Kako izgleda koža po tretmaju?",
    a: "Po tretmaju sta možni prehodna rdečina ali občutljivost kože, kar je normalen odziv. Koža se nato postopoma obnovi.",
  },
];

export default function TreatmentExpectations() {
  return (
    <section className="section-tight border-t border-neutral-200/70 bg-white">
      <Container className="max-w-5xl">
        <div className="section-gap">
          <div className="header-stack max-w-3xl">
            <p className="eyebrow-muted">Pred tretmajem</p>

            <h2 className="heading-section text-neutral-950">
              Kaj pričakovati med postopkom
            </h2>

           <p className="text-body-lg max-w-[56ch] text-neutral-700">
              Pred prvim obiskom je najpomembneje, da veste, kako tretma
              poteka, kakšen občutek lahko pričakujete in kako se koža odzove po
              postopku.
            </p>
          </div>

          <div className="max-w-3xl">
            {expectations.map((item) => (
              <details
                key={item.q}
                className="group border-b border-neutral-200/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-0 py-5 text-left">
                  <span className="pr-4 text-base font-semibold leading-7 tracking-tight text-neutral-950 sm:text-[1.05rem]">
                    {item.q}
                  </span>

                  <span className="relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                    <span className="absolute h-[2px] w-4 bg-neutral-900 transition-transform duration-200" />
                    <span className="absolute h-4 w-[2px] bg-neutral-900 transition-opacity duration-200 group-open:opacity-0" />
                  </span>
                </summary>

                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="pb-6 pr-10 pt-0">
                      <p className="whitespace-pre-wrap text-body text-neutral-700">
                        {item.a}
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
  );
}