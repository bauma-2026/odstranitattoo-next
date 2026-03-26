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
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black" />

      {/* PIXELS */}
      <PixelLayerRandom
        basePixels={pixelsHeroMobile}
        className="pointer-events-none absolute inset-0 z-[3] sm:hidden"
      />
      <PixelLayerRandom
        basePixels={pixelsHeroTablet}
        className="pointer-events-none absolute inset-0 z-[3] hidden sm:block lg:hidden"
      />
      <PixelLayerRandom
        basePixels={pixelsHeroDesktop}
        className="pointer-events-none absolute inset-0 z-[3] hidden lg:block"
      />

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

          {/* MOBILE OVERLAY */}
          <div className="absolute inset-0 z-[1] bg-black/42" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/28 to-black/72" />
          <div className="absolute inset-y-0 left-0 z-[1] w-[70%] bg-gradient-to-r from-black/78 via-black/46 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-[1] h-[32%] bg-gradient-to-t from-black/68 to-transparent" />

          <Container className="relative z-[2] flex min-h-[620px] flex-col justify-between pt-12 pb-10">
            <div className="max-w-[22rem]">
              <p className="eyebrow-dark text-white/58">Pico laser • Domžale</p>

              <h1 className="mt-4 max-w-[9ch] text-[2.7rem] font-semibold leading-[0.94] tracking-tight text-white">
                Lasersko odstranjevanje tetovaž
              </h1>

              <p className="mt-6 max-w-[20ch] text-[1.08rem] leading-[1.5] text-neutral-200">
             Pico laser razbije pigment na mikro delce, ki jih telo naravno odstrani.

              </p>
            </div>

            <div className="flex flex-col items-start gap-2.5">
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
          {/* BG IMAGE */}
     <Image
  src="/images/hero/hero-machines.webp"
  alt="Pico laser naprava za odstranjevanje tetovaž"
  fill
  sizes="100vw"
  priority
  className="
    object-cover
    object-[70%_center]
    md:scale-[0.94]
    lg:scale-[0.98]
    xl:scale-[1.01]
  "
/>

<div className="pointer-events-none absolute inset-0 z-[1] bg-black/40" />
<div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/48 via-black/24 to-black/62" />
<div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[50%] bg-gradient-to-r from-black/82 via-black/48 to-transparent" />
<div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[28%] bg-gradient-to-l from-black/48 via-black/12 to-transparent" />

          <Container className="relative z-[2] flex min-h-[calc(100vh-72px)] items-center">
            <div className="max-w-[540px] md:pr-6 lg:max-w-[560px] lg:pr-10 xl:max-w-[580px] xl:pr-14">
              <p className="eyebrow-dark text-white/50">Pico laser • Domžale</p>

              <h1 className="heading-display mt-4 max-w-[12ch] text-[3.25rem] leading-[0.95] text-white lg:max-w-[13ch] lg:text-[4.05rem]">
                Lasersko odstranjevanje tetovaž
              </h1>

              <p className="text-body-inverse mt-6 max-w-[34ch] text-neutral-300">
              Pico laser razbije pigment na mikro delce, ki jih telo naravno odstrani.
              </p>

              <p className="text-body-inverse-sm mt-5 text-white/50">
                Brezplačen posvet • individualna ocena • brez obveznosti
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 lg:gap-5">
                <Button href="/posvet" variant="primary-dark">
                  Naroči brezplačen posvet
                </Button>

                <Button href="/rezultati" variant="secondary-dark">
                  Poglej rezultate
                </Button>
              </div>
            </div>
          </Container>

          {/* subtle divider only on wider desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-[2] hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/6 to-transparent xl:block" />
        </div>
      </div>
    </section>
  );
}