import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { About } from "@/components/about";
import { Logos3 } from "@/components/ui/logos3";
import { VyzmaParallaxSlides } from "@/components/ui/text-parallax-content-scroll";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { IndustriesSection } from "@/components/industries-section";
import { HowItWorks } from "@/components/how-it-works";
import { WhyVyzma } from "@/components/why-vyzma";
import { AboutSection } from "@/components/about-section";
import { PilotOffer } from "@/components/pilot-offer";
import { FaqSection } from "@/components/faq-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Offices } from "@/components/offices";
import { Footer } from "@/components/footer";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Logos3 />
        <VyzmaParallaxSlides />
        <ProblemSection />
        <ServicesSection />
        <IndustriesSection />
        <HowItWorks />
        <WhyVyzma />
        <AboutSection />
        <PilotOffer />
        <FaqSection />
        <ProjectsSection />
        <ContactSection />
        <Offices />
        <Footer />
      </main>
    </div>
  );
};
export default App;
