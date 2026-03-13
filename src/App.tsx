import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechStackSection from "./components/TechStackSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MarqueeBanner from "./components/MarqueeBanner";
import StatsBanner from "./components/StatsBanner";
import DividerBanner from "./components/DividerBanner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <StatsBanner />
      <DividerBanner label="Tech Stack" from="dark" to="surface" />
      <TechStackSection />
      <DividerBanner label="Projects" from="surface" to="dark" />
      <ProjectsSection />
      <DividerBanner label="Experience" from="dark" to="surface" />
      <ExperienceSection />
      <DividerBanner label="Contact" from="surface" to="dark" />
      <ContactSection />
      <Footer />
    </div>
  );
}
