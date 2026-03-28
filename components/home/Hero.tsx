import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsHeroMobile,
  pixelsHeroTablet,
  pixelsHeroDesktop,
} from "@/components/ui/pixels/pixels.config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* BASE BG */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black" />

      {/* MOBILE HERO */}
      <div className="relative z-10 md:hidden">
        <div className="relative min-h-[620px] overflow-hidden">
          <Image
            src="/images/hero/hero-machines.webp"
            alt="Pico laser naprava za odstranjevanje tetovaž"
            fill
            sizes="100vw"
            priority
            className="
              object-cover
              object-[74%_center]
              scale-[2.1]
              translate-y-[14%]
              min-[400px]:scale-[2.3]
            "
          />

          {/* MOBILE OVERLAYS */}
          <div className="pointer-events-none absolute inset-0 z-[1] bg-black/42" />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/28 to-black/72" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[70%] bg-gradient-to-r from-black/78 via-black/46 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[32%] bg-gradient-to-t from-black/68 to-transparent" />

          {/* HERO PIXELS */}
          <PixelLayerRandom
            basePixels={pixelsHeroMobile}
            className="pointer-events-none absolute inset-0 z-[2]"
          />

          {/* CONTENT */}
          <Container className="relative z-[3] flex min-h-[620px] flex-col justify-between pt-12 pb-10">
            <div className="flex max-w-[22rem] flex-col gap-4">
              <p className="eyebrow-dark text-white/58">Pico laser • Domžale</p>

              <h1 className="max-w-[9ch] text-[2.7rem] font-semibold leading-[0.94] tracking-tight text-white">
                Lasersko odstranjevanje tetovaž
              </h1>

              <p className="max-w-[20ch] text-[1.08rem] leading-[1.5] text-neutral-200">
                Pico laser razbije pigment na mikro delce, ki jih telo naravno
                odstrani.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3">
              <Button href="/posvet" variant="primary-dark">
                Naroči brezplačen posvet
              </Button>
            </div>
          </Container>
        </div>
      </div>

   {/* TABLET + DESKTOP HERO */}
<div className="relative z-10 hidden md:block">
  <div className="relative min-h-[calc(100vh-72px)] overflow-hidden">
    {/* BG VIDEO */}
    <video
      className="
        absolute inset-0 h-full w-full object-cover
        object-[50%_28%]
      "
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/videos/hero/hero-machine-poster.jpg"
    >
      <source src="/videos/hero/hero-machine.mp4" type="video/mp4" />
    </video>

    {/* OVERLAYS */}
<div className="pointer-events-none absolute inset-0 z-[1] bg-black/28" />

<div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/42 via-black/18 to-black/54" />

<div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[50%] bg-gradient-to-r from-black/84 via-black/50 to-transparent" />

<div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[82%] bg-gradient-to-l from-black/94 via-black/78 via-40% to-transparent" />

<div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[24%] bg-gradient-to-b from-black/40 via-black/16 to-transparent" />

<div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[22%] bg-gradient-to-t from-black/52 via-black/18 to-transparent" />

{/* FOCUS LIGHT (laser area) */}
<div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_52%_68%,rgba(255,255,255,0.06),transparent_60%)]" />    {/* CONTENT */}
    <Container className="relative z-[2] flex min-h-[calc(100vh-72px)] items-center">
      <div className="flex max-w-[540px] flex-col gap-5 md:pr-6 lg:max-w-[560px] lg:pr-10 xl:max-w-[580px] xl:pr-14">
        <p className="eyebrow-dark text-white/50">Pico laser • Domžale</p>

        <h1 className="heading-display max-w-[12ch] text-[3.25rem] leading-[0.95] text-white lg:max-w-[13ch] lg:text-[4.05rem]">
          Lasersko odstranjevanje tetovaž
        </h1>

        <p className="text-body-inverse max-w-[34ch] text-neutral-300">
          Pico laser razbije pigment na mikro delce, ki jih telo naravno
          odstrani.
        </p>

        <p className="text-body-inverse-sm text-white/50">
          Brezplačen posvet • individualna ocena • brez obveznosti
        </p>

        <div className="pt-2">
  <div className="flex flex-wrap items-center gap-5 lg:gap-6">
    <Button href="/posvet" variant="primary-dark">
      Naroči brezplačen posvet
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