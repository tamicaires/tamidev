import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import type React from "react";

export interface SolutionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function SolutionCard({
  icon: Icon,
  title,
  description,
}: SolutionCardProps) {
  return (
    <div>
      <Card className="p-6 h-full flex flex-col items-center text-center group hover:bg-primary/5 transition-colors">
        <div className="rounded-full bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </Card>
    </div>
  );
}
