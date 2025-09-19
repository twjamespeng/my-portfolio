import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CampaignCard from "@/components/CampaignCard";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { campaigns } from "@/data/campaigns";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />

      <section
        id="projects"
        className="w-full py-20 bg-gradient-to-b from-[#1a1a1a] to-[#171717]"
      >
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">專案 Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="campaigns"
        className="w-full py-20 bg-gradient-to-b from-[#1a1a1a] to-[#171717]"
      >
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-6">行銷活動頁 Campaigns</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {campaigns.map((p) => (
              <CampaignCard key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
