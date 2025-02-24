import { projects } from "@/constants/projects";
import { ProjectCard } from "../project-card";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/40">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Nossos
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {" "}
              Projetos{" "}
            </span>
            em Destaque
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça algumas das soluções que desenvolvemos para nossos clientes
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
