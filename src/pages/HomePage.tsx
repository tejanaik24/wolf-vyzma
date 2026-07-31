import { SEO } from "@/components/seo";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { About } from "@/components/about";
import { Logos3 } from "@/components/ui/logos3";
import { VyzmaParallaxSlides } from "@/components/ui/text-parallax-content-scroll";
import { PainPointsSection } from "@/components/pain-points-section";
import { ServicesSection } from "@/components/services-section";
import { IndustriesSection } from "@/components/industries-section";
import { HowItWorks } from "@/components/how-it-works";
import { WhyVyzma } from "@/components/why-vyzma";
import { AboutSection } from "@/components/about-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Offices } from "@/components/offices";

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Vyzma AI | India's Premier AI Agency — Vizag & Bangalore"
        description="Vyzma AI is India's most affordable AI agency. AI chatbots, voice agents, workflow automation, SEO, and performance marketing for Indian businesses. Starting at ₹4,999/month. Based in Vizag and Bangalore."
        canonicalUrl="https://vyzma.in"
      />
      <Hero />
      <TrustBar />
      <About />
      <Logos3 />
      <VyzmaParallaxSlides />
      <PainPointsSection />
      <ServicesSection />
      <IndustriesSection />
      <HowItWorks />
      <WhyVyzma />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Offices />
    </>
  );
};
