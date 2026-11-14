"use client";

import { useEffect, useState } from "react";

/**
 * Video je viden samo od širine md naprej. Na telefonu ga sploh ne nalagamo,
 * da se brez potrebe ne prenaša skrito ozadje.
 */
export default function HeroVideo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!show) return null;

  return (
    <video
      className="absolute inset-0 h-full w-full object-cover object-[50%_28%]"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src="/videos/hero/hero-machine_1_2.webm" type="video/webm" />
      <source src="/videos/hero/hero-machine_1_2.mp4" type="video/mp4" />
    </video>
  );
}
