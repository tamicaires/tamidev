import Link from "next/link";
import { Button } from "../ui/button";
import { Code2, Timer } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 bg-grid-white/[0.02]">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 ml-24">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse-glow mr-2" />
                <span className="text-sm text-muted-foreground">
                  Transformando ideias em realidade digital
                </span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight gap-3">
                Desenvolvimento
                <span className="text-primary"> Full Stack </span>de Alta
                Performance
              </h1>
              <p className="text-xl text-muted-foreground">
                Criamos soluções digitais completas e escaláveis para
                impulsionar seu negócio no mundo moderno.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Solicitar Orçamento</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projects">Ver Portifólio</Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="glass-effect rounded-lg p-4">
                <div className="text-primary mb-2">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">Tech Stack Moderna</h3>
                <p className="text-sm text-muted-foreground">
                  Using cutting-edge technologies for optimal performance
                </p>
              </div>
              <div className="glass-effect rounded-lg p-4">
                <div className="text-primary mb-2">
                  <Timer className="w-6 h-6" />
                </div>
                <h3 className="font-semibold">Entrega Rádipa</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento rápido sem afetar qualidade.
                </p>
              </div>
            </div>
          </div>
          <div className="relative lg:pl-16">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/30 rounded-full blur-3xl opacity-20" />
              <div className="relative z-10 glass-effect rounded-2xl p-6 animate-float">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        Full Stack Development
                      </div>
                      <div className="text-sm text-muted-foreground">
                        TypeScript & Node.js Expert
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-primary rounded-full w-[85%]" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      85% of projects delivered early
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
