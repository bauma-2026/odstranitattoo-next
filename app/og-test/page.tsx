import Image from "next/image";
import Container from "@/components/layout/Container";
import PixelLayerRandom from "@/components/ui/pixels/PixelLayerRandom";
import {
  pixelsHeroMobile,
  pixelsHeroTablet,
  pixelsHeroDesktop,
} from "@/components/ui/pixels/pixels.config";

export default function OgTest() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
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

      {/* DESKTOP ONLY (OG focus) */}
      <div className="relative z-10">
        <div className="relative min-h-[630px] overflow-hidden">
          <Image
            src="/images/hero/hero-machines.webp"
            alt=""
            fill
            priority
            className="object-cover object-[70%_center] scale-[1.02]"
          />

          {/* overlays */}
          <div className="absolute inset-0 z-[1] bg-black/45" />
          <div className="absolute inset-y-0 left-0 z-[1] w-[55%] bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

    <Container className="relative z-[2] flex min-h-[630px] items-center">
  <div className="flex max-w-[560px] flex-col gap-5">
    <div className="flex items-center gap-3">
      <Image
        src="/logo/laser-symbol-white.svg"
        alt="Odstrani Tattoo"
        width={36}
        height={36}
        className="h-8 w-8 opacity-90"
      />

      <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
        Pico laser • Domžale
      </p>
    </div>

    <h1 className="heading-display text-[3.2rem] leading-[0.95] text-white">
      <span className="block whitespace-nowrap">Odstrani tattoo</span>
      <span className="block whitespace-nowrap">brez poškodb kože</span>
    </h1>
<p className="text-[17px] font-medium leading-[1.45] tracking-[0.01em] text-white/72">
  <span className="block whitespace-nowrap">
    Ne veš, ali se da odstraniti?
  </span>
  <span className="block whitespace-nowrap">
    Brezplačen posvet • preveri svoj primer
  </span>
</p>
  </div>
</Container>
        </div>
      </div>
    </section>
  );
}