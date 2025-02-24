import { processSteps } from "@/constants/process";
import { ProcessStep } from "../process-step";
import Image from "next/image";

export function Process() {
  return (
    <section id="process" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nosso
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}
              Processo{" "}
            </span>
            de Desenvolvimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Uma abordagem estruturada para transformar sua visão em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {processSteps.map((step) => (
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/process-illustration.svg"
                alt="Processo de Desenvolvimento"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
