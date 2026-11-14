import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import HowItWorks from "@/components/home/HowItWorks";
import WhyPico from "@/components/home/WhyPico";
import ResultsSection from "@/components/home/ResultsSection";
import FaqSection from "@/components/home/FaqSection";
import FinalCta from "@/components/home/FinalCta";
import Hero from "@/components/home/Hero";
import SeoLocationSection from "@/components/home/SeoLocationSection";
import SeoPricingSection from "@/components/home/SeoPricingSection";
import ObjectionSection from "@/components/home/ObjectionSection";
import TreatmentExpectations from "@/components/sections/TreatmentExpectations";

export const metadata: Metadata = pageMetadata({
  path: "",
  title: "Lasersko odstranjevanje tattoojev s Pico laserjem",
  description:
    "Varno in postopno odstranjevanje tattoojev s Pico laser tehnologijo. Individualna ocena tattooja in strokovni postopek v Domžalah.",
  titleSuffix: false,
});

export default function HomePage() {
  return (
<main className="min-h-screen bg-white text-neutral-900">
  <Hero />

  <HowItWorks />
   <ObjectionSection />
  <WhyPico />

  <ResultsSection />
<TreatmentExpectations />
  <FaqSection />

  <SeoLocationSection />
  <SeoPricingSection />

  <FinalCta />
</main>
  );
}