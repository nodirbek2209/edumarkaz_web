"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface SubjectCardProps {
  subject: {
    name: string
    icon: string
    color: string
  }
  index: number
  inView: boolean
}

export function SubjectCard({ subject, index, inView }: SubjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="flex-shrink-0"
    >
      <Card className={`w-40 h-40 ${subject.color} border-none`}>
        <CardContent className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-4xl mb-3">{subject.icon}</div>
          <h3 className="font-semibold text-center">{subject.name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}
