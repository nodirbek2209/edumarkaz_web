"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Star } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function MapComponent() {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)
  const [activePin, setActivePin] = useState<number | null>(null)

  const educationCenters = [
    { id: 1, name: "Spring Education Center", rating: 4.8, lat: 30, lng: 30, subjects: ["Mathematics", "English"] },
    { id: 2, name: "Bright Future Academy", rating: 4.5, lat: 60, lng: 60, subjects: ["Science", "IELTS"] },
    { id: 3, name: "Knowledge Hub", rating: 4.7, lat: 40, lng: 80, subjects: ["Computer Science", "Mathematics"] },
    { id: 4, name: "Excellence Learning Center", rating: 4.9, lat: 70, lng: 30, subjects: ["English", "IELTS"] },
    { id: 5, name: "Smart Kids Academy", rating: 4.6, lat: 20, lng: 70, subjects: ["Mathematics", "Science"] },
  ]

  // Simulate map pins pulsing
  useEffect(() => {
    const interval = setInterval(() => {
      const randomId = Math.floor(Math.random() * educationCenters.length) + 1
      setActivePin(randomId)

      setTimeout(() => {
        setActivePin(null)
      }, 2000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] bg-blue-50 overflow-hidden rounded-xl" ref={mapRef}>
      {/* Simulated map background */}
      <div className="absolute inset-0 bg-blue-50">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(0, 0, 255, 0.05)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Roads */}
          <path d="M 0 250 L 1000 250" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="10" />
          <path d="M 500 0 L 500 500" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="10" />
          <path d="M 200 100 L 800 400" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="6" />
          <path d="M 300 0 L 300 500" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="6" />
          <path d="M 700 0 L 700 500" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="6" />
          <path d="M 0 150 L 1000 150" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="6" />
          <path d="M 0 350 L 1000 350" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="6" />
        </svg>
      </div>

      {/* Map pins */}
      {educationCenters.map((center) => (
        <div
          key={center.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${center.lng}%`,
            top: `${center.lat}%`,
            zIndex: activePin === center.id ? 10 : 1,
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: activePin === center.id ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative"
          >
            <MapPin
              className={`w-8 h-8 ${activePin === center.id ? "text-red-500" : "text-[#1E4DB7]"}`}
              fill={activePin === center.id ? "rgba(239, 68, 68, 0.2)" : "rgba(30, 77, 183, 0.2)"}
            />

            {activePin === center.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 bottom-full mb-2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 w-48 z-10"
              >
                <div className="font-semibold text-[#1E4DB7]">{center.name}</div>
                <div className="flex items-center text-yellow-500 mt-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-sm">{center.rating}</span>
                </div>
                <div className="mt-1 text-xs text-gray-500">{center.subjects.join(" • ")}</div>
              </motion.div>
            )}
          </motion.div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
        <div className="flex flex-col space-y-2">
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">+</button>
          <div className="w-full h-px bg-gray-200"></div>
          <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">−</button>
        </div>
      </div>

      {/* Search overlay */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-2 flex items-center">
        <input type="text" placeholder="Search on map..." className="border-none outline-none text-sm w-40" />
        <button className="ml-2 text-gray-400 hover:text-[#1E4DB7]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
