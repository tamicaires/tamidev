"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background" />
      <div className="grid-pattern absolute inset-0 opacity-[0.02]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {" "}
                Transformar{" "}
              </span>
              seu Negócio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Vamos criar soluções digitais inovadoras que impulsionarão o
              crescimento da sua empresa.
            </p>
            <Button
              size="lg"
              className="relative group overflow-hidden bg-primary hover:bg-primary/90"
            >
              <span className="relative z-10">Iniciar Projeto Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </div>
    </section>
  );
}
