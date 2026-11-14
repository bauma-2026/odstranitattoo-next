"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { scrollToSameHash } from "@/components/ui/HashLink";

type NavItem = {
  href: string;
  label: string;
};

type Props = {
  open: boolean;
  /** restoreFocus: fokus vrne na gumb za odpiranje (zapiranje brez odhoda s strani). */
  onClose: (restoreFocus?: boolean) => void;
  pathname: string;
  nav: NavItem[];
};

// Elementi brez interakcije, ki ostanejo aktivni (npr. live region za najavo strani).
const NOT_INERT_TAGS = [
  "SCRIPT",
  "STYLE",
  "LINK",
  "META",
  "TITLE",
  "HEAD",
  "NEXT-ROUTE-ANNOUNCER",
];

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
  const panelRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Izbira povezave: na isti strani fokus vrnemo na gumb za meni, ob odhodu
  // na drugo stran ali zunanji cilj ga ne vračamo (stran prevzame fokus).
  function handleSelect(href: string) {
    const external = /^https?:/.test(href);
    const path = href.split("#")[0] || "/";
    onClose(!external && window.location.pathname === path);
  }

  // Odprt meni je modalen: vse, kar ni drawer, njegov prednik ali overlay,
  // postane inert (tipkovnica, bralnik zaslona, klik). Ob zaprtju, navigaciji
  // in odmontiranju obnovimo prejšnje stanje (le elemente, ki smo jih mi označili).
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const changed: HTMLElement[] = [];
    let node: HTMLElement | null = panel;

    while (node && node !== document.documentElement) {
      const parent: HTMLElement | null = node.parentElement;
      if (!parent) break;

      for (const sibling of Array.from(parent.children)) {
        if (
          !(sibling instanceof HTMLElement) ||
          sibling === node ||
          sibling === overlayRef.current ||
          sibling === document.body ||
          NOT_INERT_TAGS.includes(sibling.tagName)
        ) {
          continue;
        }

        if (!sibling.inert) {
          sibling.inert = true;
          changed.push(sibling);
        }
      }

      node = parent;
    }

    return () => {
      for (const el of changed) el.inert = false;
    };
  }, [open]);

  // Ob odprtju fokus na gumb za zapiranje.
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus({ preventScroll: true });
  }, [open]);

  // Prehod na desktop širino med odprtim menijem: meni se zapre, zaklep se sprosti.
  useEffect(() => {
    if (!open) return;

    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (!mq.matches) return;

      // Drawer postane display:none; fokus ne sme ostati v njem.
      const active = document.activeElement as HTMLElement | null;
      if (active && panelRef.current?.contains(active)) active.blur();
      onClose(false);
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [open, onClose]);

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
      if (e.key === "Escape") {
        onClose(true);
        return;
      }

      // Omejitev fokusa na meni (modalni drawer).
      if (e.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (!active || !panel.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <>
  {/* overlay */}
<div
  ref={overlayRef}
  aria-hidden="true"
  onClick={() => onClose(true)}
  className={[
    "fixed inset-0 z-40 bg-black/50 backdrop-blur-[3px] transition-opacity duration-300 lg:hidden",
    open
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none opacity-0",
  ].join(" ")}
/>

{/* panel */}
<aside
  id="mobile-nav"
  ref={panelRef}
  role="dialog"
  aria-modal="true"
  aria-label="Glavni meni"
  inert={!open}
  className={[
    "fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[360px] border-r border-ink/10 bg-cta text-ink shadow-2xl transition-transform duration-300 ease-out lg:hidden",
    open ? "translate-x-0" : "-translate-x-full",
  ].join(" ")}
>
  <div className="flex h-full flex-col">
    
    {/* header */}
    <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5">
      <Link
        href="/"
        onClick={() => handleSelect("/")}
        className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink"
      >
        Odstrani Tattoo
      </Link>

      <button
        type="button"
        ref={closeButtonRef}
        onClick={() => onClose(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors duration-200 hover:bg-ink/5"
        aria-label="Zapri meni"
      >
        <span className="text-lg leading-none">×</span>
      </button>
    </div>

    {/* nav */}
    <nav className="flex-1 px-5 py-5">
      <div className="grid gap-2">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                handleSelect(item.href);
                scrollToSameHash(item.href);
              }}
              className={[
                "rounded-xl px-4 py-3 text-[1.05rem] font-medium tracking-tight transition-all duration-200",
                active
                  ? "border border-ink/10 bg-ink/5 text-ink"
                  : "text-ink-muted hover:bg-ink/[0.04] hover:text-ink",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>

    {/* CTA */}
    <div className="border-t border-ink/10 px-5 py-5">
      <div className="flex flex-col gap-4">
        <Link
          href="/posvet"
          onClick={() => handleSelect("/posvet")}
          className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#ffffff] transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
        >
          Posvet
        </Link>

        <p className="text-xs leading-5 text-ink-muted">
          Lasersko odstranjevanje tetovaž s Pico laserjem v Domžalah.
        </p>
      </div>
    </div>

  </div>
</aside>
    </>
  );
}