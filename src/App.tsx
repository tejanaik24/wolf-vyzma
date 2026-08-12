import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DevAnnotations } from "@/components/DevAnnotations";
import { HomePage } from "@/pages/HomePage";
import { BlogListingPage } from "@/pages/BlogListingPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { CityHubPage, CityServicePage } from "@/pages/CityHubPage";
import { AboutPage } from "@/pages/AboutPage";
import { ComparePage } from "@/pages/ComparePage";
import { ResearchPage } from "@/pages/ResearchPage";
import { CalculatorPage } from "@/pages/CalculatorPage";
import { CaseStudyPage } from "@/pages/CaseStudyPage";
import { FreeAuditPage } from "@/pages/FreeAuditPage";
import { FreeResourcesPage } from "@/pages/FreeResourcesPage";
import { StickyCTA } from "@/components/sticky-cta";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-screen overflow-x-clip">
        <CustomCursor />
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/case-studies/nifs-india-seo-transformation" element={<CaseStudyPage />} />
            <Route path="/free-audit" element={<FreeAuditPage />} />
            <Route path="/free-resources" element={<FreeResourcesPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/compare/:slug" element={<ComparePage />} />
            <Route path="/research/:slug" element={<ResearchPage />} />
            <Route path="/:city/:service" element={<CityServicePage />} />
            <Route path="/:city" element={<CityHubPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
        <DevAnnotations />
      </div>
    </Router>
  );
};


export default App;
