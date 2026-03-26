"use client";

import { useEffect, useState } from "react";
import PixelLayer from "./PixelLayer";
import type { Pixel } from "./PixelLayer";

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

export default function PixelLayerRandom({
  basePixels,
  className,
}: {
  basePixels: Pixel[];
  className?: string;
}) {
  const [pixels, setPixels] = useState<Pixel[]>(basePixels);

  useEffect(() => {
    const randomized = basePixels.map((p) => {
      const leftBase = parseFloat(p.left);
      const topBase = parseFloat(p.top);

      return {
        ...p,
        left: `${clamp(leftBase + (Math.random() - 0.5) * 16, 0, 100)}%`,
        top: `${clamp(topBase + (Math.random() - 0.5) * 16, 0, 100)}%`,
        size: clamp(p.size + (Math.random() - 0.5) * 1.2, 2, 6),
        opacity: clamp(p.opacity + (Math.random() - 0.5) * 0.02, 0.02, 0.08),
        delay: `${Math.random() * 2}s`,
      };
    });

    setPixels(randomized);
  }, [basePixels]);

  return <PixelLayer pixels={pixels} className={className} />;
}