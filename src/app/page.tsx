import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  About,
  Contact,
  CtaFinal,
  Differentials,
  Faq,
  Hero,
  PracticeAreas,
  ProcessSteps,
  Services,
  Testimonials,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Services />
        <Differentials />
        <ProcessSteps />
        <Faq />
        <Testimonials />
        <Contact />
        <CtaFinal />
      </main>
      <SiteFooter />
    </>
  );
}
