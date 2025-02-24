"use client";

import { services } from "@/constants/services";
import { ServiceCard } from "../services-card";

export function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Soluções
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Completas
            </span>
            em Desenvolvimento
          </h2>
          <p className="text-muted-foreground text-lg">
            Transformamos complexidade em simplicidade com nossas soluções full
            stack
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
