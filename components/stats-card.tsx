"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import CountUp from "react-countup"
import type React from "react" // Added import for React

interface StatsCardProps {
  value: number
  label: string
  icon: React.ReactNode
}

export function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 glass-effect">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
          <div>
            <div className="text-3xl font-bold">
              <CountUp end={value} duration={2.5} />+
            </div>
            <div className="text-muted-foreground">{label}</div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

