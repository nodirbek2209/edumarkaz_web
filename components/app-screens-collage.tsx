"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

interface AppScreensCollageProps {
  inView: boolean
}

export function AppScreensCollage({ inView }: AppScreensCollageProps) {
  const controls = useAnimation()
  const { t } = useLanguage()

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.6 },
      }))
    }
  }, [inView, controls])

  const screens = [
    {
      title: t("appScreens.learn"),
      subtitle: t("appScreens.learn.subtitle"),
      image: "/images/app-screen-1.png",
      color: "bg-purple-600",
    },
    {
      title: t("appScreens.connect"),
      subtitle: t("appScreens.connect.subtitle"),
      image: "/images/app-screen-2.png",
      color: "bg-indigo-600",
    },
    {
      title: t("appScreens.discover"),
      subtitle: t("appScreens.discover.subtitle"),
      image: "/images/app-screen-3.png",
      color: "bg-blue-600",
    },
    {
      title: t("appScreens.compare"),
      subtitle: t("appScreens.compare.subtitle"),
      image: "/images/app-screen-4.png",
      color: "bg-blue-500",
    },
    {
      title: t("appScreens.achieve"),
      subtitle: t("appScreens.achieve.subtitle"),
      image: "/images/app-screen-5.png",
      color: "bg-blue-700",
    },
  ]

  return (
    <div className="relative">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {screens.map((screen, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={controls}
            className="flex flex-col items-center"
          >
            <div className={`${screen.color} rounded-xl p-3 mb-3 w-full`}>
              <h3 className="text-lg font-bold text-white text-center mb-1">{screen.title}</h3>
              <p className="text-xs text-white/80 text-center">{screen.subtitle}</p>
            </div>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={inView ? { scale: 1 } : { scale: 0.9 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="relative shadow-lg rounded-xl overflow-hidden"
              style={{ width: "160px", height: "320px" }}
            >
              <Image src={screen.image || "/placeholder.svg"} alt={screen.title} fill className="object-cover" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
