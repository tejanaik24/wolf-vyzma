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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vyzma AI",
  alternateName: "Vyzma",
  url: "https://vyzma.in",
  description: "AI and Digital Marketing Agency based in Visakhapatnam (Vizag) and Bangalore, India. We build AI chatbots, workflow automation, SEO, voice AI, and performance marketing systems for Indian businesses.",
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-8886720908",
    contactType: "sales",
    email: "vyzmaai.in@gmail.com",
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Visakhapatnam",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  ],
  sameAs: [
    "https://instagram.com/vyzmaai",
    "https://linkedin.com/company/vyzmaai",
    "https://youtube.com/@vyzmaai",
  ],
};

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Vyzma AI | India's Premier AI Agency — Vizag & Bangalore"
        description="Vyzma AI is India's most affordable AI agency. AI chatbots, voice agents, workflow automation, SEO, and performance marketing for Indian businesses. Starting at ₹4,999/month. Based in Vizag and Bangalore."
        canonicalUrl="https://vyzma.in"
        jsonLd={[organizationSchema]}
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
