import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* BASE BG */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black" />
{/* MOBILE HERO */}
<div className="relative z-10 md:hidden">
  <div className="relative min-h-[640px] overflow-hidden bg-black">
    <Image
      src="/images/hero/hero-machines.webp"
      alt="PicoFocus laser za odstranjevanje tattoojev"
      fill
      sizes="100vw"
      priority
      className="scale-[1.0] object-contain object-[62%_48%] opacity-88"
    />

    {/* OVERLAYS */}
    <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/48 via-black/18 to-black/72" />
    <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[88%] bg-gradient-to-r from-black/78 via-black/44 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[30%] bg-gradient-to-b from-black/48 to-transparent" />
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[34%] bg-gradient-to-t from-black/72 via-black/28 to-transparent" />

    {/* CINEMATIC FOCUS LIGHT */}
    <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_48%_62%,rgba(255,255,255,0.06),transparent_20%)]" />
    <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_44%_72%,rgba(255,170,110,0.055),transparent_26%)]" />

    {/* CONTENT */}
    <Container className="relative z-[3] min-h-[640px] pt-12 pb-6">
      <div className="relative flex min-h-[592px] flex-col">
        {/* TOP */}
        <div className="flex max-w-[22rem] flex-col gap-4">
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/60">
            Domžale • lasersko odstranjevanje
          </p>

          <h1 className="max-w-[13ch] text-[2.45rem] font-semibold leading-[0.94] tracking-tight text-white sm:text-[2.7rem]">
            Ali je vaš tattoo
            <br />
            <span className="whitespace-nowrap">
              mogoče odstraniti?
            </span>
          </h1>

       <p className="max-w-[24ch] text-[1.06rem] leading-[1.45] text-neutral-200">
  Večino tattoojev lahko postopoma odstranjujemo — z nadzorovanim pristopom.
</p>
        </div>

        {/* BOTTOM */}
        <div className="absolute bottom-14 left-0 flex flex-col items-start gap-5">
          <Button href="/posvet" variant="primary-dark">
            Pošlji povpraševanje
          </Button>

          <p className="text-[11px] leading-none text-white/38">
            Del studia{" "}
            <a
              href="https://artbite-tattoo.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 underline underline-offset-4 transition hover:text-white"
            >
              Artbite Tattoo
            </a>
          </p>
        </div>
      </div>
    </Container>
  </div>
</div>
      {/* DESKTOP HERO */}
      <div className="relative z-10 hidden md:block">
        <div className="relative min-h-[calc(100vh-72px)] overflow-hidden">
          {/* VIDEO */}
        <video
  className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
>
  <source src="/videos/hero/hero-machine_1_2.webm" type="video/webm" />
  <source src="/videos/hero/hero-machine_1_2.mp4" type="video/mp4" />
</video>
          {/* OVERLAYS */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/14 to-black/52" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[56%] bg-gradient-to-r from-black/86 via-black/52 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[38%] bg-gradient-to-l from-black/30 via-black/12 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[20%] bg-gradient-to-t from-black/38 to-transparent" />

          {/* FOCUS LIGHT */}
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_46%_65%,rgba(255,255,255,0.05),transparent_18%)]" />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_44%_74%,rgba(255,170,110,0.04),transparent_24%)]" />

          {/* CONTENT */}
          <Container className="relative z-[3] flex min-h-[calc(100vh-72px)] items-center">
            <div className="flex max-w-[560px] flex-col gap-5 lg:pr-10 xl:max-w-[680px] xl:pr-14">
              <p className="eyebrow-dark text-white/50">
                Domžale • lasersko odstranjevanje
              </p>

              <h1 className="heading-display max-w-[16ch] text-[3.25rem] leading-[0.95] lg:text-[4.05rem]">
                Ali je vaš tattoo mogoče odstraniti?
              </h1>

              <p className="text-body-inverse max-w-[40ch]">
  Tattoo ne izgine čez noč. Lahko pa ga postopoma odstranjujemo z nadzorovanim pristopom.
</p>

              <p className="text-body-inverse-sm text-white/50">
                Del studia{" "}
                <a
                  href="https://artbite-tattoo.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Artbite Tattoo
                </a>
                .
              </p>

             <p className="text-body-inverse-sm text-white/50">
  Posvet 30 € • ob zakupu storitve je posvet brezplačen
</p>

              <div className="pt-2">
                <div className="flex flex-wrap items-center gap-6">
                  <Button href="/posvet" variant="primary-dark">
                    Pošlji povpraševanje
                  </Button>

                  <a
                    href="/rezultati"
                    className="text-sm font-medium text-white/70 underline underline-offset-4 decoration-white/30 transition hover:text-white hover:decoration-white/60"
                  >
                    Poglej rezultate pred in po →
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}