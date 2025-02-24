import { Code2, Server, Database, LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon; 
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: Code2,
    title: "Desenvolvimento Frontend",
    description: "Criação de interfaces responsivas e performáticas com React e Next.js.",
    items: [
      "Implementação de UI/UX Moderna",
      "Otimização de Performance",
      "Design Responsivo",
    ],
  },
  {
    icon: Server,
    title: "Desenvolvimento Backend",
    description: "Construção de aplicações server-side escaláveis e seguras.",
    items: [
      "Desenvolvimento de APIs",
      "Autenticação e Autorização",
      "Arquitetura de Microsserviços",
    ],
  },
  {
    icon: Database,
    title: "Design de Banco de Dados",
    description: "Projeto e otimização de estruturas de banco de dados para alta performance.",
    items: [
      "Design de Esquemas",
      "Otimização de Consultas",
      "Migração de Dados",
    ],
  },
];