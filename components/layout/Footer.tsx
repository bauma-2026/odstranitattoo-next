import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";

const quickLinks = [
  { href: "/odstranjevanje-tattoojev", label: "Odstranjevanje" },
  { href: "/pico-laser", label: "Pico laser" },
  { href: "/rezultati", label: "Rezultati" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/posvet", label: "Posvet" },
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
 <footer className="border-t border-white/10 bg-neutral-950 text-white">
  <Container>
    <div className="grid gap-10 pt-12 pb-10 sm:pt-14 sm:pb-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:gap-14 lg:pt-16 lg:pb-14">
      {/* BRAND */}
      <div className="max-w-sm">
  <Link
    href="/"
    className="inline-flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
  >
    <Image
      src="/logo/laser-symbol-white.svg"
      alt="Odstrani Tattoo"
      width={48}
      height={48}
      className="h-12 w-12 opacity-95"
    />

    <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-white/90">
      Odstrani Tattoo
    </span>
  </Link>

  <p className="mt-5 text-sm leading-6 text-neutral-500">
  Lasersko odstranjevanje tattoojev s Pico laserjem v Domžalah.
</p>

<p className="mt-4 text-sm leading-6 text-neutral-500">
  Del studia{" "}
  <a
    href="https://artbite-tattoo.com/"
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-4 transition-colors duration-200 hover:text-white"
  >
    Artbite Tattoo
  </a>.
</p>
  <div className="mt-5">
    <Link
      href="/piskotki"
      className="text-[11px] underline underline-offset-4 text-neutral-600 transition-colors duration-200 hover:text-neutral-300"
    >
      Politika piškotkov
    </Link>
  </div>
</div>

      {/* NAV */}
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-500">
          Navigacija
        </p>

        <nav className="mt-4 grid gap-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-300 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* CONTACT */}
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-500">
          Kontakt
        </p>

        <div className="mt-4 grid gap-4 text-sm">
          <div>
            <p className="text-neutral-500">Telefon</p>
            <a
              href="tel:+38670553340"
              className="mt-1 inline-block text-neutral-300 transition-colors duration-200 hover:text-white"
            >
              070 55 33 40
            </a>
          </div>

          <div>
            <p className="text-neutral-500">E-pošta</p>
            <a
              href="mailto:odstranitattoo@gmail.com"
              className="mt-1 inline-block break-all text-neutral-300 underline underline-offset-4 transition-colors duration-200 hover:text-white"
            >
              odstranitattoo@gmail.com
            </a>
          </div>

          <div>
            <p className="text-neutral-500">Lokacija</p>
            <p className="mt-1 text-neutral-300">Ljubljanska 90, Domžale</p>
          </div>

          <div>
            <p className="text-neutral-500">Družbena omrežja</p>

            <div className="mt-2 flex flex-wrap gap-5">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-300 transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="grid gap-3 border-t border-white/5 py-5 text-sm text-neutral-500 sm:grid-cols-[1fr_auto] sm:items-center">
      <p>© {new Date().getFullYear()} Odstrani Tattoo</p>

      <p className="sm:text-right">Pico laser • Domžale</p>
    </div>
  </Container>
</footer>
  );
}