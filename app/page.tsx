import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ObjectionSection from "@/components/home/ObjectionSection";
import WhyPico from "@/components/home/WhyPico";
import ResultsSection from "@/components/home/ResultsSection";
import FaqSection from "@/components/home/FaqSection";
import SeoLocationSection from "@/components/home/SeoLocationSection";
import SeoPricingSection from "@/components/home/SeoPricingSection";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = pageMetadata({
  path: "",
  title: "Lasersko odstranjevanje tattoojev s Pico laserjem",
  description:
    "Varno in postopno odstranjevanje tattoojev in tetovaž s Pico laser tehnologijo. Individualna ocena in strokovni postopek v Domžalah.",
  titleSuffix: false,
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <Hero />

      <HowItWorks />
      <ObjectionSection />
      <WhyPico />

      <ResultsSection />
      <FaqSection excludeIds={["full-removal"]} showClosingCta={false} />

      <SeoLocationSection />
      <SeoPricingSection />

      <FinalCta />
    </main>
  );
}