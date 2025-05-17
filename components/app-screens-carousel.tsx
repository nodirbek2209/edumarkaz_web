"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface AppScreen {
  title: string
  description: string
  image: string
}

interface AppScreensCarouselProps {
  screens: AppScreen[]
  inView: boolean
}

export function AppScreensCarousel({ screens, inView }: AppScreensCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length)
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [inView, screens.length])

  return (
    <div className="relative">
      <div className="flex justify-center">
        <div className="relative w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Main screen (center) */}
            <div className="hidden md:block">
              {screens.map((screen, index) => {
                const prevIndex = (currentIndex - 1 + screens.length) % screens.length
                return index === prevIndex ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: -100 }}
                    animate={{ opacity: 0.7, scale: 0.8, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden shadow-lg transform -rotate-6"
                  >
                    <Image
                      src={screen.image || "/placeholder.svg"}
                      alt={screen.title}
                      width={300}
                      height={600}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ) : null
              })}
            </div>

            {/* Main screen (center) */}
            <div className="col-span-1 md:col-span-1 flex justify-center">
              {screens.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 0.8,
                    zIndex: index === currentIndex ? 10 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute rounded-3xl overflow-hidden shadow-xl ${
                    index === currentIndex ? "z-10" : "z-0"
                  }`}
                >
                  <Image
                    src={screen.image || "/placeholder.svg"}
                    alt={screen.title}
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </motion.div>
              ))}
            </div>

            {/* Next screen (right) */}
            <div className="hidden md:block">
              {screens.map((screen, index) => {
                const nextIndex = (currentIndex + 1) % screens.length
                return index === nextIndex ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 0.7, scale: 0.8, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden shadow-lg transform rotate-6"
                  >
                    <Image
                      src={screen.image || "/placeholder.svg"}
                      alt={screen.title}
                      width={300}
                      height={600}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ) : null
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Screen info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <h3 className="text-2xl font-bold text-[#1E4DB7] mb-2">{screens[currentIndex].title}</h3>
        <p className="text-gray-600">{screens[currentIndex].description}</p>
      </motion.div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {screens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#1E4DB7] w-8" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
