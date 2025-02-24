import { Card } from "./ui/card";

export interface ROICardProps {
  rate: string;
  title: string;
  description: string;
}

export function ROICard({ rate, title, description }: ROICardProps) {
  return (
    <Card className="p-6 text-center">
      <h3 className="text-4xl font-bold text-primary mb-2">{rate}%</h3>
      <p className="text-xl font-semibold mb-4">{title}</p>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}
