"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HowItWorksStepProps {
  step: {
    title: string
    description: string
    icon: ReactNode
    color: string
  }
  index: number
  inView: boolean
}

export function HowItWorksStep({ step, index, inView }: HowItWorksStepProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className={`relative md:${isEven ? "text-right md:mr-6" : "md:ml-6"}`}
    >
      {/* Step number */}
      <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#1E4DB7] text-white items-center justify-center font-bold text-xl z-10">
        {index + 1}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 relative">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.color} mb-4`}>
          {step.icon}
        </div>

        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
        <p className="text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  )
}
