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
      src="/images/hero/2.png"
      alt="Pico laser odstranjevanje tattooja med tretmajem"
      fill
      sizes="100vw"
      priority
className="scale-[1.15] object-cover object-[26%_76%] brightness-[0.92] contrast-[1.06]"
    />

  {/* OVERLAYS */}
<div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/38 via-black/20 to-black/68" />

<div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[82%] bg-gradient-to-r from-black/62 via-black/34 to-transparent" />

<div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[30%] bg-gradient-to-b from-black/44 to-transparent" />

<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[30%] bg-gradient-to-t from-black/62 via-black/22 to-transparent" />

<div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_45%_46%,rgba(255,210,170,0.15),transparent_13%)]" />

<div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_32%_52%,rgba(255,190,130,0.1),transparent_24%)]" />

<div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_56%_53%,rgba(255,210,170,0.12),transparent_14%)]" />

    {/* CONTENT */}
    <Container className="relative z-[3] min-h-[640px] pt-12 pb-6">
      <div className="relative flex min-h-[592px] flex-col">
        
        {/* TOP */}
        <div className="flex max-w-[22rem] flex-col gap-4">
          <p className="eyebrow-dark text-white/60">
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
            Večino tattoojev lahko postopno odstranimo — varno in brez
            brazgotin.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="absolute bottom-10 left-0 flex flex-col items-start gap-5">
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
            poster="/videos/hero/hero-machine-poster.jpg"
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

              <p className="text-body-inverse max-w-[40ch] text-neutral-300">
                Tattoo ne izgine čez noč. Lahko pa ga postopno odstranimo —
                varno in brez brazgotin.
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
  Posvet 30 € • ob zakupu storitve se znesek odšteje
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