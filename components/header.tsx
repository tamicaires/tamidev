import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Code } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex gap-2 items-center font-bold text-xl">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl" />
            <div className="relative flex items-center justify-center w-full h-full rounded-xl bg-primary/10 border border-primary/20">
              <Code className="h-4 w-4 text-primary" />
            </div>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Tami Dev
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 items-center">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground"
          >
            Sobre
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground hover:text-foreground"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground hover:text-foreground"
          >
            Projetos
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground"
          >
            Contato
          </Link>
          <ThemeToggle />
          <Button>Solicitar Orçamento</Button>
        </nav>
      </div>
    </header>
  );
}
