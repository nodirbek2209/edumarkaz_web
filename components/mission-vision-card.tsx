"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface MissionVisionCardProps {
  title: string
  content: ReactNode
  icon: ReactNode
  index: number
  inView: boolean
}

export function MissionVisionCard({ title, content, icon, index, inView }: MissionVisionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
    >
      <Card className="bg-transparent border border-blue-800/30 backdrop-blur-sm overflow-hidden h-full">
        <CardContent className="p-8">
          <div className="flex items-center">
            <div className="mr-3">{icon}</div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </div>
          <div className="mt-4">{content}</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
