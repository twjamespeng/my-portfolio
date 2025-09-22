import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import CampaignsSection from "@/components/CampaignsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import DesignsSection from "@/components/DesignsSection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <SkillsSection />

      <ProjectsSection />

      <CampaignsSection />

      <EventsSection />

      <DesignsSection />

      <Contact />

      <Footer />
    </main>
  );
}
