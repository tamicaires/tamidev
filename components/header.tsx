import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="font-bold text-xl">
          tamidev
        </Link>
        <nav className="ml-auto flex gap-6 items-center">
          <Link href="#about" className="text-muted-foreground hover:text-foreground">
            Sobre
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground">
            Skills
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground">
            Projetos
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground">
            Contato
          </Link>
          <ThemeToggle />
          <Button>Hire Me</Button>
        </nav>
      </div>
    </header>
  )
}

