import Image from "next/image";

const images4x3 = Array.from({ length: 83 }, (_, i) => {
  const number = String(i + 1).padStart(5, "0");

  return `image${number}.jpeg`;
});

const images16x9 = Array.from({ length: 21 }, (_, i) => {
  const number = String(i + 1).padStart(5, "0");

  return `image${number}.jpeg`;
});

function GallerySection({
  title,
  folder,
  images,
}: {
  title: string;
  folder: string;
  images: string[];
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
          {title}
        </h2>

        <p className="mt-2 text-sm text-white/50">
          {images.length} images
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {images.map((image) => (
          <div
            key={image}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3] bg-black">
              <Image
                src={`/images/odstrani-tattoo/${folder}/${image}`}
                alt={image}
                fill
                className="object-cover"
              />
            </div>

            <div className="border-t border-white/10 px-3 py-2">
              <p className="truncate text-xs text-white/60">{image}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContentBlock({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
        {title}
      </h3>

      <div className="mt-4 whitespace-pre-wrap text-sm leading-7 text-white/65">
        {content}
      </div>
    </article>
  );
}

export default function MaterialPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-6 py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-20">
        <div className="max-w-[700px]">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
            Internal Material
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Odstrani Tattoo — Selection Board
          </h1>

          <p className="mt-4 max-w-[60ch] text-sm leading-6 text-white/60">
            Internal page for selecting images, organizing content and building
            final page flow.
          </p>
        </div>

        <GallerySection
          title="4:3 Images"
          folder="4-3"
          images={images4x3}
        />

        <GallerySection
          title="16:9 Images"
          folder="16-9"
          images={images16x9}
        />

        <section className="space-y-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              Content
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              Raw Text Material
            </h2>
          </div>

          <div className="grid gap-6">
            <ContentBlock
              title="Kaj pričakovati pri prvem tretmaju?"
              content={`Prvi tretma laserskega odstranjevanja tetovaže je običajno najbolj intenziven — tako fizično kot psihično.

Občutek med samim postopkom lahko peče, vendar traja kratek čas in je za večino strank znosnejši, kot so pričakovale.

Ker želimo izkušnjo čim bolj olajšati, med celotnim tretmajem neprekinjeno uporabljamo hladilno napravo, ki kožo sproti hladi in pomirja.`}
            />

            <ContentBlock
              title="Kako stranka občuti postopek?"
              content={`Občutek med laserjem je lahko intenziven in se opisuje kot hitro, vroče “ščipanje” ali pekoč občutek na koži.

Ker uporabljamo aktivno hlajenje med celotnim postopkom, se neprijeten občutek bistveno zmanjša in je za večino strank dobro obvladljiv.`}
            />

            <ContentBlock
              title="Koliko časa traja en tretma?"
              content={`En tretma običajno traja od nekaj minut do približno 30 minut, odvisno od velikosti tetovaže, gostote pigmenta in lokacije na telesu.`}
            />

            <ContentBlock
              title="Kako izgleda koža po tretmaju?"
              content={`Takoj po tretmaju je koža lahko pordela, rahlo otekla ali občutljiva na dotik.

Včasih se pojavi tudi sokrvica in občutek toplote, podoben sončni opeklini.`}
            />

            <ContentBlock
              title="Koliko časa mora biti med tretmaji?"
              content={`Priporočen razmik med tretmaji je približno 8 tednov.

Ta čas omogoča, da se koža popolnoma regenerira in da telo postopoma razgradi pigment.`}
            />

            <ContentBlock
              title="Zakaj je Pico laser pogosto boljša izbira kot Nd:YAG?"
              content={`Pico laser deluje z bistveno krajšimi pulzi energije kot klasični Nd:YAG laser.

To pomeni, da pigment v koži razbije na zelo drobne delce, kar telesu omogoča lažjo in hitrejšo naravno odstranitev.`}
            />
          </div>
          <ContentBlock
  title="Naročnik Notes"
  content={`zivjo, preko wetransferja sem ti poslala nekaj videev, pisljem se slike…

tukaj pa ti pošiljam tekste, uporabi, kar se ti zdi smiselno…

pri "naroči se na brezplacni posvet", bi dali ven brezplacni in ostane samo "naroči se na posvet"

CTA:
→ pošlji povpraševanje`}
 />
 <ContentBlock
  title="Cenik"
  content={`Posvet pred lasersko terapijo
30€
(Brezplačno ob zakupu storitve)

Zelo majhna tetovaža
(prstani, male črke, znakci do 2cm)
50€

Odstranjevanje obrvi
100€

Odstranjevanje tetovaž
80–250€

CTA:
Pošlji povpraševanje`}
 />
        </section>
      </div>
    </main>
  );
}