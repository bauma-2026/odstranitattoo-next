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
    "inline-flex shrink-0 items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.01em] transition-all duration-300 ease-out hover:-translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const styles =
    variant === "primary-dark"
      ? "bg-white text-neutral-950 border border-white hover:bg-white/90 focus-visible:ring-white"
      : variant === "secondary-dark"
      ? "bg-transparent border border-white/20 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/40 focus-visible:ring-white"
      : variant === "primary-light"
      ? "bg-neutral-950 text-white border border-neutral-950 hover:bg-neutral-900 focus-visible:ring-neutral-950"
      : "bg-transparent border border-neutral-300 text-neutral-900 hover:bg-neutral-100 hover:border-neutral-400 focus-visible:ring-neutral-400";

  return (
    <Link href={href} className={[base, styles, className].join(" ")}>
      {children}
    </Link>
  );
}