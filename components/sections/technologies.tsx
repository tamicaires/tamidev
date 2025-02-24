import { technologies } from "@/constants/technologies";
import { TechnologiesCard } from "../technologies-card";

export function Technologies() {
  return (
    <section id="technologies" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="grid-pattern absolute inset-0 opacity-[0.02]" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tecnologias
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}
              Avançadas{" "}
            </span>
            que Utilizamos
          </h2>
          <p className="text-muted-foreground text-lg">
            Trabalhamos com as mais recentes e poderosas tecnologias do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechnologiesCard key={index} img={tech.img} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
