import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import HashLink from "@/components/ui/HashLink";

const quickLinks = [
  { href: "/odstranjevanje-tattoojev", label: "Odstranjevanje" },
  { href: "/pico-laser", label: "Pico laser" },
  { href: "/rezultati", label: "Rezultati" },
  { href: "/faq", label: "FAQ" },
  { href: "/#cenik", label: "Cenik" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/posvet", label: "Povpraševanje" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/odstranitattoo/",
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/odstranitattoo/",
    label: "Facebook",
  },
];

export default function Footer() {
  return (
 <footer className="border-t border-neutral-200 bg-footer text-ink">
  <Container>
    <div className="grid gap-10 pt-12 pb-10 sm:pt-14 sm:pb-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:gap-14 lg:pt-16 lg:pb-14">
      {/* BRAND */}
      <div className="max-w-sm">
  <Link
    href="/"
    className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
  >
    <Image
      src="/logo/laser-symbol.svg"
      alt=""
      width={48}
      height={48}
      className="h-12 w-12 opacity-95"
    />

    <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-ink">
      Odstrani Tattoo
    </span>
  </Link>

  <p className="mt-5 text-sm leading-6 text-ink-muted">
  Odstranjevanje tattoojev in permanentnega pigmenta s Pico laserjem v Domžalah.
</p>

<p className="mt-4 text-sm leading-6 text-ink-muted">
  Del studia{" "}
  <a
    href="https://artbite-tattoo.com/"
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-4 transition-colors duration-200 hover:text-ink"
  >
    Artbite Tattoo
  </a>.
</p>
  <div className="mt-5">
    <Link
      href="/piskotki"
      className="text-[11px] underline underline-offset-4 text-neutral-600 transition-colors duration-200 hover:text-neutral-800"
    >
      Politika piškotkov
    </Link>
  </div>
</div>

      {/* NAV */}
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-600">
          Navigacija
        </p>

        <nav className="mt-4 grid gap-3">
          {quickLinks.map((item) => (
            <HashLink
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-700 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </HashLink>
          ))}
        </nav>
      </div>

      {/* CONTACT */}
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-600">
          Kontakt
        </p>

        <div className="mt-4 grid gap-4 text-sm">
          <div>
            <p className="text-neutral-600">Telefon</p>
            <a
              href="tel:+38670553340"
              className="mt-1 inline-block text-neutral-700 transition-colors duration-200 hover:text-ink"
            >
              070 55 33 40
            </a>
          </div>

          <div>
            <p className="text-neutral-600">E-pošta</p>
            <a
              href="mailto:odstranitattoo@gmail.com"
              className="mt-1 inline-block break-all text-neutral-700 underline underline-offset-4 transition-colors duration-200 hover:text-ink"
            >
              odstranitattoo@gmail.com
            </a>
          </div>

          <div>
            <p className="text-neutral-600">Lokacija</p>
            <p className="mt-1 text-neutral-700">Ljubljanska 90, Domžale</p>
          </div>

          <div>
            <p className="text-neutral-600">Družbena omrežja</p>

            <div className="mt-2 flex flex-wrap gap-5">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 transition-colors duration-200 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

 <div className="grid gap-3 border-t border-neutral-300/70 pb-8 pt-5 text-sm text-neutral-600 sm:grid-cols-[1fr_auto] sm:items-center sm:py-5">
  <p>© {new Date().getFullYear()} Odstrani Tattoo</p>

  <a
    href="https://bauma.si"
    target="_blank"
    rel="noreferrer"
    className="w-fit transition-colors duration-200 hover:text-neutral-800 sm:justify-self-end"
  >
    Struktura in izvedba: Bauma
  </a>
</div>
  </Container>
</footer>
  );
}