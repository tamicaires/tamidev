import { SolutionCardProps } from "@/components/solution-card";
import { Shield, TrendingUp, Zap } from "lucide-react";

export const solutions: SolutionCardProps[] = [
  {
    title: "Desenvolvimento Ágil",
    description: "Metodologias modernas e equipe experiente para entregar seu projeto rapidamente, sem comprometer a qualidade.",
    icon: Zap
  },
  {
    title: "Arquitetura Escalável",
    description: "Soluções projetadas para crescer com seu negócio, utilizando tecnologias cloud-native e práticas de DevOps.",
    icon: TrendingUp
  },
  {
    title: "Segurança Avançada",
    description: "Implementação de práticas de segurança de última geração para proteger seus dados e a privacidade dos seus clientes.",
    icon: Shield
  },
]
