"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TestimonialProps {
  testimonial: {
    name: string
    role: string
    content: string
    rating: number
    image: string
  }
  index: number
  inView: boolean
}

export function TestimonialCard({ testimonial, index, inView }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[#1E4DB7]">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>

          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          >
            <p className="text-gray-600 italic">"{testimonial.content}"</p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
