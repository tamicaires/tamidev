import { LucideIcon, Star } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  items,
}: ServiceCardProps) {
  return (
    <div className="glass-effect p-6 rounded-xl space-y-4">
      <div className="text-primary">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
