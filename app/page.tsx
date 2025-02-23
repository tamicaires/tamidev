import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { StatsCard } from "@/components/stats-card"
import { Code2, Database, Server, Users, Star, Coffee, Timer, Laptop } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section with Floating Elements */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-grid-white/[0.02]">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Full Stack Developer
                  <span className="block text-primary">Building the Future</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transforming ideas into scalable solutions with modern technologies and best practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="#contact">Start a Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#projects">View Portfolio</Link>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 pt-8">
                <div className="glass-effect rounded-lg p-4">
                  <div className="text-primary mb-2">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Modern Tech Stack</h3>
                  <p className="text-sm text-muted-foreground">
                    Using cutting-edge technologies for optimal performance
                  </p>
                </div>
                <div className="glass-effect rounded-lg p-4">
                  <div className="text-primary mb-2">
                    <Timer className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">Quick turnaround without compromising quality</p>
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
                        <div className="font-semibold">Full Stack Development</div>
                        <div className="text-sm text-muted-foreground">TypeScript & Node.js Expert</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-2 bg-primary rounded-full w-[85%]" />
                      </div>
                      <div className="text-sm text-muted-foreground">85% of projects delivered early</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard value={50} label="Projects Completed" icon={<Laptop className="w-6 h-6" />} />
            <StatsCard value={99} label="Client Satisfaction" icon={<Star className="w-6 h-6" />} />
            <StatsCard value={1000} label="Coffee Consumed" icon={<Coffee className="w-6 h-6" />} />
            <StatsCard value={15} label="Happy Clients" icon={<Users className="w-6 h-6" />} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/40">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A showcase of my best work, demonstrating expertise in full-stack development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Site Empresa de Milhas"
              description="A modern e-commerce platform built with Next.js and Node.js"
              image="/placeholder.svg"
              tags={["Next.js", "Node.js", "PostgreSQL", "TypeScript"]}
              github="https://github.com"
              demo="https://demo.com"
            />
            <ProjectCard
              title="Gestão de Manutenção"
              description="Landing page de Saas de Gestão de Manutenção de Frotas."
              image="https://i.ibb.co/rG21dBmL/image.png"
              tags={["React", "NestJS", "Prisma ORM", "Postgres","WebSocket"]}
              github="https://github.com"
              demo="https://demo.com"
            />
            <ProjectCard
              title="Analytics Dashboard"
              description="Data visualization dashboard with real-time updates"
              image="/placeholder.svg"
              tags={["TypeScript", "D3.js", "Express", "Redis"]}
              github="https://github.com"
              demo="https://demo.com"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">What I Offer</h2>
            <p className="text-muted-foreground">Comprehensive development services tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-xl space-y-4">
              <div className="text-primary">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <p className="text-muted-foreground">
                Creating responsive and performant user interfaces with React and Next.js
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Modern UI/UX Implementation
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Responsive Design
                </li>
              </ul>
            </div>
            <div className="glass-effect p-6 rounded-xl space-y-4">
              <div className="text-primary">
                <Server className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Backend Development</h3>
              <p className="text-muted-foreground">Building scalable and secure server-side applications</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  API Development
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Authentication & Authorization
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Microservices Architecture
                </li>
              </ul>
            </div>
            <div className="glass-effect p-6 rounded-xl space-y-4">
              <div className="text-primary">
                <Database className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold">Database Design</h3>
              <p className="text-muted-foreground">Designing and optimizing database structures for performance</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Schema Design
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Query Optimization
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  Data Migration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40">
        <div className="container">
          <div className="glass-effect rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to create exceptional digital experiences that drive results
            </p>
            <Button size="lg" asChild>
              <Link href="#contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

