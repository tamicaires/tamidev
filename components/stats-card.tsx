import { Card } from "@/components/ui/card";
import CountUp from "react-countup";
import type React from "react";
import { LucideIcon } from "lucide-react";

export interface StatsCardProps {
  value: number;
  label: string;
  icon: LucideIcon;
}

export function StatsCard({ value, label, icon: Icon }: StatsCardProps) {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {<Icon className="w-6 h-6" />}
        </div>
        <div>
          <div className="text-3xl font-bold">
            <CountUp end={value} duration={2.5} />+
          </div>
          <div className="text-muted-foreground">{label}</div>
        </div>
      </div>
    </Card>
  );
}
