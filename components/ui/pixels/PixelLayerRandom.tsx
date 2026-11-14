"use client";

import { useMemo } from "react";
import PixelLayer from "./PixelLayer";
import type { Pixel } from "./PixelLayer";

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export default function PixelLayerRandom({
  basePixels,
  className,
}: {
  basePixels: Pixel[];
  className?: string;
}) {
  const pixels = useMemo<Pixel[]>(() => {
    return basePixels.map((p, index) => {
      const leftBase = parseFloat(p.left);
      const topBase = parseFloat(p.top);

      const leftRandom = pseudoRandom(index + 1);
      const topRandom = pseudoRandom(index + 2);
      const sizeRandom = pseudoRandom(index + 3);
      const opacityRandom = pseudoRandom(index + 4);
      const delayRandom = pseudoRandom(index + 5);

      return {
        ...p,
        left: `${clamp(leftBase + (leftRandom - 0.5) * 16, 0, 100)}%`,
        top: `${clamp(topBase + (topRandom - 0.5) * 16, 0, 100)}%`,
        size: clamp(p.size + (sizeRandom - 0.5) * 1.2, 2, 6),
        opacity: clamp(p.opacity + (opacityRandom - 0.5) * 0.02, 0.02, 0.08),
        delay: `${delayRandom * 2}s`,
      };
    });
  }, [basePixels]);

  return <PixelLayer pixels={pixels} className={className} />;
}