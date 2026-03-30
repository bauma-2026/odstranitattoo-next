"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";

const nav = [
  { href: "/odstranjevanje-tattoojev", label: "Odstranjevanje" },
  { href: "/pico-laser", label: "Pico laser" },
  { href: "/rezultati", label: "Rezultati" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
  {
    href: "https://artbite-tattoo.com/",
    label: "Artbite",
    external: true,
  },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/80 backdrop-blur-md">
  <Container>
    <div className="flex min-h-[76px] items-center justify-between gap-4 sm:gap-6">
      <Link
        href="/"
        className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
      >
        <Image
          src="/logo/laser-symbol.svg"
          alt="Odstrani Tattoo"
          width={52}
          height={52}
          priority
          className={[
            "h-[52px] w-[52px] shrink-0 transition-all duration-500 ease-out",
            scrolled
              ? "translate-y-[1px] scale-[0.97] opacity-90 brightness-95"
              : "translate-y-0 scale-100 opacity-100 brightness-100",
          ].join(" ")}
        />

        <span
          className={[
            "overflow-hidden whitespace-nowrap text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-900 transition-all duration-400 ease-out",
            scrolled
              ? "max-w-0 -translate-x-2 opacity-0"
              : "max-w-[180px] translate-x-0 opacity-100",
          ].join(" ")}
          aria-hidden={scrolled}
        >
          Odstrani Tattoo
        </span>
      </Link>

<nav className="hidden items-center gap-7 md:flex lg:gap-8">
  {nav.map((item) => {
    const active = !item.external && isActive(pathname, item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
        className={[
          "relative pb-1 text-[14px] font-medium tracking-[0.01em] transition-colors duration-200",
          "whitespace-nowrap",
          active
            ? "text-neutral-950"
            : "text-neutral-600 hover:text-neutral-950",
        ].join(" ")}
      >
        {item.label}

        <span
          className={[
            "pointer-events-none absolute bottom-0 left-0 h-px bg-neutral-900 transition-all duration-200",
            item.external
              ? "w-0 opacity-0"
              : active
              ? "w-full opacity-100"
              : "w-0 opacity-0",
          ].join(" ")}
        />
      </Link>
    );
  })}
</nav>
  
      <div className="ml-1 hidden md:block">
        <Button href="/posvet" variant="primary-light">Posvet</Button>
      </div>

      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 transition-colors hover:bg-neutral-100 md:hidden"
        aria-label="Odpri meni"
        aria-expanded={mobileOpen}
      >
        <span className="flex flex-col gap-[4px]">
          <span className="block h-[1.5px] w-5 bg-current" />
          <span className="block h-[1.5px] w-5 bg-current" />
          <span className="block h-[1.5px] w-5 bg-current" />
        </span>
      </button>
    </div>
  </Container>
</header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
        nav={nav}
      />
    </>
  );
}