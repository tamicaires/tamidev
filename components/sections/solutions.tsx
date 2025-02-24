import { SolutionCard } from "../solution-card";
import { solutions } from "@/constants/solutions";

export function Solutions() {
  return (
    <section id="solutions" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
      <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossas{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Soluções{" "}
            </span>
            Inovadoras
          </h2>
          <p className="text-muted-foreground text-lg">
            Transformamos desafios em oportunidades com tecnologia de ponta
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <SolutionCard
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
