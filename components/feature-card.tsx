"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface FeatureCardProps {
  feature: {
    title: string
    description: string
    icon: ReactNode
    color: string
  }
  index: number
  inView: boolean
}

export function FeatureCard({ feature, index, inView }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      whileHover={{ y: -10 }}
    >
      <Card className="h-full overflow-hidden">
        <CardContent className="p-0">
          <div className={`${feature.color} p-6 flex justify-center`}>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">{feature.icon}</div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
