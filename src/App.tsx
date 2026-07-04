import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HomePage } from "@/pages/HomePage";
import { BlogListingPage } from "@/pages/BlogListingPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { CityHubPage, CityServicePage } from "@/pages/CityHubPage";
import { AboutPage } from "@/pages/AboutPage";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen w-screen overflow-x-clip">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/:city/:service" element={<CityServicePage />} />
            <Route path="/:city" element={<CityHubPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
