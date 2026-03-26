import type { CSSProperties } from "react";

export type Pixel = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  delay: string;
  duration: string;
  tone?: "neutral" | "green";
};

type Props = {
  pixels: Pixel[];
  className?: string;
};

export default function PixelLayer({ pixels, className = "" }: Props) {
  return (
    <div className={className} aria-hidden="true">
      {pixels.map((p, i) => {
        const style: CSSProperties = {
          left: p.left,
          top: p.top,
          width: `${p.size}px`,
          height: `${p.size}px`,
          opacity: p.opacity,
          animationDelay: p.delay,
          animationDuration: p.duration,
          backgroundColor:
            p.tone === "green"
              ? "rgba(120, 255, 180, 0.22)"
              : "rgba(180, 180, 180, 0.52)",
        };

        return (
          <span
            key={i}
            className="absolute rounded-[1px] pixel-fade"
            style={style}
          />
        );
      })}
    </div>
  );
}