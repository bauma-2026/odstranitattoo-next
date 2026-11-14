"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

/**
 * Next.js ne izvede ponovnega skoka, če je URL (vključno s #sidrom) že enak
 * trenutnemu. V tem primeru na razdelek skočimo ročno, da povezava deluje
 * tudi ob ponovnem kliku.
 */
export function scrollToSameHash(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  const path = href.slice(0, hashIndex) || "/";
  const hash = href.slice(hashIndex);

  if (window.location.pathname !== path || window.location.hash !== hash) {
    return;
  }

  document.getElementById(hash.slice(1))?.scrollIntoView();
}

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export default function HashLink({ href, onClick, ...rest }: Props) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e);
        scrollToSameHash(href);
      }}
      {...rest}
    />
  );
}
