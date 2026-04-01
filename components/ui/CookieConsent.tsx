"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookiesAccepted";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);

    if (!accepted) {
      setVisible(true);
    }

    const t = window.setTimeout(() => {
      setMounted(true);
    }, 50);

    const openSettings = () => {
      setClosing(false);
      setVisible(true);
      setMounted(false);

      window.setTimeout(() => {
        setMounted(true);
      }, 20);
    };

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setClosing(true);

    window.setTimeout(() => {
      setVisible(false);
    }, 280);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-5 left-4 right-4 z-50 transition-all duration-300 ease-out sm:left-auto sm:right-6 sm:max-w-[410px] ${
        closing
          ? "translate-y-6 opacity-0"
          : mounted
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      }`}
    >
      <div className="rounded-[22px] border border-white/10 bg-neutral-950 p-5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="eyebrow-dark text-white/40">Piškotki</p>

            <p className="w-full text-body-inverse-sm text-white/75">
              Ta spletna stran uporablja piškotke za osnovno delovanje in boljšo
              uporabniško izkušnjo. Več informacij najdete v{" "}
              <a
                className="underline underline-offset-4 transition hover:text-white"
                href="/piskotki"
              >
                politiki piškotkov
              </a>.
            </p>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={acceptCookies}
              className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              V redu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}