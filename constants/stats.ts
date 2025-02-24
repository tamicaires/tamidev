import { StatsCardProps } from "@/components/stats-card"
import { Coffee, Laptop, Star, Users } from "lucide-react"

export const stats: StatsCardProps[] = [
  {
    label: "Projetos Completos",
    value: 25,
    icon: Laptop
  },
  {
    label: "Clientes Satisfeitos",
    value: 47,
    icon: Star
  },
  {
    label: "Cafés Consumidos",
    value: 1000,
    icon: Coffee
  },
  {
    label: "Publico Alcançados",
    value: 3420,
    icon: Users
  },
]
