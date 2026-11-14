import Link from "next/link";
import { ReactNode } from "react";

type Variant =
  | "primary-dark"
  | "secondary-dark"
  | "primary-light"
  | "secondary-light";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary-light",
  className = "",
}: Props) {
  const base =
    "inline-flex shrink-0 items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.01em] transition-[background-color,border-color,color] duration-[175ms] ease-out active:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset";

  const styles =
    variant === "primary-dark"
      ? "bg-white text-ink border border-white hover:bg-white/90 focus-visible:ring-ink"
      : variant === "secondary-dark"
      ? "bg-transparent border border-white/20 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/40 focus-visible:ring-white"
      : variant === "primary-light"
      ? "bg-accent text-[#ffffff] border border-accent hover:bg-accent-hover focus-visible:ring-white"
      : "bg-transparent border border-ink/20 text-ink hover:bg-ink/5 hover:border-ink/40 focus-visible:ring-ink";

  return (
    <Link href={href} className={[base, styles, className].join(" ")}>
      {children}
    </Link>
  );
}