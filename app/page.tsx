import { Footer } from "@/components/sections/footer";
import { CTA } from "@/components/sections/cta";
import { Projects } from "@/components/sections/projects";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Process } from "@/components/sections/process";
import { Technologies } from "@/components/sections/technologies";
import { ROI } from "@/components/sections/roi";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <Projects />
      <Services />
      <Solutions />
      <Process />
      <ROI />
      <Technologies />      
      <CTA />
      <Footer />
    </main>
  );
}
