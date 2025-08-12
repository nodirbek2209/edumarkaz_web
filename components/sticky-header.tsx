"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { LanguageSelector } from "./language-selector"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
      <AnimatePresence>
        {isScrolled && (
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
            >
              <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <Image src="/images/logo-with-text.png" alt="EduMarkaz Logo" width={150} height={40} className="h-auto" />
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                  <button
                      onClick={() => handleNavClick("features")}
                      className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {t("nav.features")}
                  </button>
                  <button
                      onClick={() => handleNavClick("about")}
                      className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {t("nav.about")}
                  </button>
                  <button
                      onClick={() => handleNavClick("how-it-works")}
                      className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {t("nav.howItWorks")}
                  </button>
                  <button
                      onClick={() => handleNavClick("map")}
                      className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {t("nav.map")}
                  </button>
                </nav>

                <div className="flex items-center space-x-4">
                  <LanguageSelector variant="outline" />
                  <Button
                      onClick={() => handleNavClick("cta")}
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-white"
                  >
                    {t("cta.button")}
                  </Button>
                </div>
              </div>
            </motion.header>
        )}
      </AnimatePresence>
  )
}