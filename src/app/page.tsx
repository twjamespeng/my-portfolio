import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CampaignsSection from "@/components/CampaignsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <ProjectsSection />

      <CampaignsSection />

      <Contact />

      <Footer />
    </main>
  );
}
