import { roiCards } from "@/constants/roi";
import { ROICard } from "../roi-card";

export function ROI() {
  return (
    <section id="roi" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/5 to-background" />
      <div className="grid-pattern absolute inset-0 opacity-[0.02]" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Impacto
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}
              Mensurável{" "}
            </span>
            nos Negócios
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja como nossas soluções podem transformar seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roiCards.map((roi, index) => (
            <ROICard
              key={index}
              rate={roi.rate}
              title={roi.title}
              description={roi.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
