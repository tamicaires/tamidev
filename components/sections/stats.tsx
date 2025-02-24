"use client";

import { StatsCard } from "../stats-card";
import { stats } from "@/constants/stats";

export function Stats() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatsCard value={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
