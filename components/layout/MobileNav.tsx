"use client";

import Link from "next/link";
import { useEffect } from "react";

type NavItem = {
  href: string;
  label: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  pathname: string;
  nav: NavItem[];
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function MobileNav({
  open,
  onClose,
  pathname,
  nav,
}: Props) {
  useEffect(() => {
    if (!open) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
      {/* overlay */}
      <div
        onClick={onClose}
        className={[
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-[3px] transition-opacity duration-300 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* panel */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[360px] border-r border-white/10 bg-neutral-950 text-white shadow-2xl transition-transform duration-300 ease-out md:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-full flex-col">
          {/* header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-6">
            <Link
              href="/"
              onClick={onClose}
              className="text-[12px] font-medium uppercase tracking-[0.16em] text-white"
            >
              Odstrani Tattoo
            </Link>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:bg-white/5"
              aria-label="Zapri meni"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>

          {/* nav */}
          <nav className="flex-1 px-5 py-6">
            <div className="grid gap-1">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={[
                      "rounded-xl px-4 py-3 text-[1.05rem] font-medium tracking-tight transition-all duration-200",
                      active
                        ? "border border-white/10 bg-white/5 text-white"
                        : "text-neutral-300 hover:bg-white/[0.04] hover:text-white",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* CTA */}
          <div className="border-t border-white/10 px-5 py-5">
            <Link
              href="/posvet"
              onClick={onClose}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-200 hover:bg-white/90"
            >
              Posvet
            </Link>

            <p className="mt-5 text-xs leading-5 text-neutral-500">
              Lasersko odstranjevanje tetovaž s Pico laserjem v Domžalah.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}