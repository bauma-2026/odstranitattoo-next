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
          className="inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/logo/laser-symbol-white.svg"
            alt="Odstrani Tattoo"
            width={42}
            height={42}
            className="h-10 w-10"
          />

          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-white">
            Odstrani Tattoo
          </span>
        </Link>

    <p className="mt-5 text-sm leading-6 text-neutral-500">
          Lasersko odstranjevanje tetovaž s Pico laserjem v Domžalah.
          Individualna ocena, realna pričakovanja in postopen pristop do
          rezultata.
        </p>
        <p className="mt-5 text-sm leading-6 text-neutral-500">
  Odstrani Tattoo je del{" "}
  <a
    href="https://artbite-tattoo.com/"
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-4 transition-colors duration-200 hover:text-white"
  >
    Artbite Tattoo
  </a>.
</p>
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

   <div className="grid gap-3 border-t border-white/5 py-5 text-sm text-neutral-500 sm:grid-cols-[1.1fr_0.9fr_0.9fr] sm:items-center lg:gap-14">
  
  <p>© {new Date().getFullYear()} Odstrani Tattoo</p>

  {/* LEGAL LINKS */}
  <div className="flex flex-wrap gap-4 sm:justify-center">
    <Link
      href="/piskotki"
      className="transition-colors duration-200 hover:text-white"
    >
      Politika piškotkov
    </Link>

    <Link
      href="/zasebnost"
      className="transition-colors duration-200 hover:text-white"
    >
      Politika zasebnosti
    </Link>
  </div>

  <p className="sm:text-right">
    Odstranjevanje tetovaž v Domžalah
  </p>
</div>
  </Container>
</footer>
  );
}