"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Search,
  MapPin,
  Book,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Star,
  Verified,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapComponent } from "@/components/map-component"
import { AppScreensCollage } from "@/components/app-screens-collage"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/components/language-context"
import { StatsCounter } from "@/components/stats-counter"
import Footer from "@/components/footer";

export default function Home() {
  const { t } = useLanguage()
  const [searchValue, setSearchValue] = useState("")
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const howItWorksRef = useRef(null)
  const appScreensRef = useRef(null)
  const ctaRef = useRef(null)
  const problemRef = useRef(null)
  const aboutRef = useRef(null)
  const mapRef = useRef(null)

  const heroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 })
  const howItWorksInView = useInView(howItWorksRef, { once: false, amount: 0.3 })
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 })
  const problemInView = useInView(problemRef, { once: false, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 })
  const appScreensInView = useInView(appScreensRef, { once: false, amount: 0.3 })
  const mapInView = useInView(mapRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const features = [
    {
      title: t("features.verified.title"),
      description: t("features.verified.description"),
      icon: <Verified className="w-10 h-10 text-white" />,
      color: "bg-blue-600",
    },
    {
      title: t("features.rankings.title"),
      description: t("features.rankings.description"),
      icon: <Star className="w-10 h-10 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: t("features.rscore.title"),
      description: t("features.rscore.description"),
      icon: <BarChart3 className="w-10 h-10 text-white" />,
      color: "bg-blue-700",
    },
    {
      title: t("features.quality.title"),
      description: t("features.quality.description"),
      icon: <CheckCircle className="w-10 h-10 text-white" />,
      color: "bg-blue-600",
    },
  ]

  const steps = [
    {
      title: t("howItWorks.step1.title"),
      description: t("howItWorks.step1.description"),
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: t("howItWorks.step2.title"),
      description: t("howItWorks.step2.description"),
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: t("howItWorks.step3.title"),
      description: t("howItWorks.step3.description"),
      icon: <Search className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: t("howItWorks.step4.title"),
      description: t("howItWorks.step4.description"),
      icon: <Book className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
    },
  ]

  const problems = [
    {
      title: t("problem.unknowns.title"),
      description: t("problem.unknowns.description"),
      icon: <div className="text-2xl">❓</div>,
    },
    {
      title: t("problem.transparency.title"),
      description: t("problem.transparency.description"),
      icon: <div className="text-2xl">📍</div>,
    },
    {
      title: t("problem.reviews.title"),
      description: t("problem.reviews.description"),
      icon: <div className="text-2xl">❌</div>,
    },
    {
      title: t("problem.insight.title"),
      description: t("problem.insight.description"),
      icon: <div className="text-2xl">🎥</div>,
    },
    {
      title: t("problem.decision.title"),
      description: t("problem.decision.description"),
      icon: <div className="text-2xl">🧭</div>,
    },
  ]

  const stats = [
    { value: 500, label: "Education Centers", suffix: "+" },
    { value: 2000, label: "Teachers", suffix: "+" },
    { value: 15000, label: "Students", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
  ]

  // Simulate typing animation for search bar
  useEffect(() => {
    if (heroInView) {
      const placeholders = ["Find math tutors...", "Find English courses...", "Find IELTS preparation..."]
      let currentPlaceholder = 0
      let charIndex = 0
      let isDeleting = false
      let typingTimeout: NodeJS.Timeout

      const type = () => {
        const placeholder = placeholders[currentPlaceholder]

        if (isDeleting) {
          setSearchValue(placeholder.substring(0, charIndex - 1))
          charIndex--

          if (charIndex === 0) {
            isDeleting = false
            currentPlaceholder = (currentPlaceholder + 1) % placeholders.length
          }
        } else {
          setSearchValue(placeholder.substring(0, charIndex + 1))
          charIndex++

          if (charIndex === placeholder.length) {
            isDeleting = true
            typingTimeout = setTimeout(type, 1500) // Pause before deleting
            return
          }
        }

        const typingSpeed = isDeleting ? 50 : 150
        typingTimeout = setTimeout(type, typingSpeed)
      }

      typingTimeout = setTimeout(type, 1000)

      return () => clearTimeout(typingTimeout)
    }
  }, [heroInView])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section
            id="hero"
            ref={heroRef}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900"
        >
          <div className="absolute top-4 right-4 z-20">
            <LanguageSelector />
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="b" gradientTransform="rotate(45 .5 .5)">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="a">
                    <path
                        fill="currentColor"
                        d="M854.5,801Q809,852,772.5,903Q736,954,678,957.5Q620,961,562,957Q504,953,442,953.5Q380,954,334.5,913.5Q289,873,235,841.5Q181,810,159,753Q137,696,126.5,638.5Q116,581,102,522.5Q88,464,93.5,406Q99,348,128.5,297Q158,246,196,201.5Q234,157,285,125.5Q336,94,392.5,74Q449,54,507,40.5Q565,27,623,33.5Q681,40,739,48.5Q797,57,834.5,105Q872,153,893,210.5Q914,268,931.5,326Q949,384,932,442Q915,500,909.5,558Q904,616,879.5,670.5Q855,725,854.5,801Z"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#a)">
                  <path
                      fill="url(#b)"
                      d="M854.5,801Q809,852,772.5,903Q736,954,678,957.5Q620,961,562,957Q504,953,442,953.5Q380,954,334.5,913.5Q289,873,235,841.5Q181,810,159,753Q137,696,126.5,638.5Q116,581,102,522.5Q88,464,93.5,406Q99,348,128.5,297Q158,246,196,201.5Q234,157,285,125.5Q336,94,392.5,74Q449,54,507,40.5Q565,27,623,33.5Q681,40,739,48.5Q797,57,834.5,105Q872,153,893,210.5Q914,268,931.5,326Q949,384,932,442Q915,500,909.5,558Q904,616,879.5,670.5Q855,725,854.5,801Z"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-full opacity-20 transform rotate-180">
              <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="d" gradientTransform="rotate(45 .5 .5)">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="c">
                    <path
                        fill="currentColor"
                        d="M816.5,721.5Q756,693,710,656.5Q664,620,637,570Q610,520,593.5,465Q577,410,553,355Q529,300,493,254.5Q457,209,401,179.5Q345,150,287.5,143Q230,136,172.5,152.5Q115,169,78,221.5Q41,274,31.5,337Q22,400,31,463Q40,526,73.5,581Q107,636,147,684Q187,732,236.5,771Q286,810,345,830Q404,850,463,851Q522,852,581,851.5Q640,851,699,851Q758,851,817,830Q876,809,906.5,750Q937,691,907,630.5Q877,570,816.5,721.5Z"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#c)">
                  <path
                      fill="url(#d)"
                      d="M816.5,721.5Q756,693,710,656.5Q664,620,637,570Q610,520,593.5,465Q577,410,553,355Q529,300,493,254.5Q457,209,401,179.5Q345,150,287.5,143Q230,136,172.5,152.5Q115,169,78,221.5Q41,274,31.5,337Q22,400,31,463Q40,526,73.5,581Q107,636,147,684Q187,732,236.5,771Q286,810,345,830Q404,850,463,851Q522,852,581,851.5Q640,851,699,851Q758,851,817,830Q876,809,906.5,750Q937,691,907,630.5Q877,570,816.5,721.5Z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Educational pattern background */}


            {/* Floating educational elements */}
            <div className="absolute top-[10%] left-[10%] animate-float opacity-20">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="white">
                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
              </svg>
            </div>

            <div className="absolute top-[30%] right-[15%] animate-float opacity-20" style={{ animationDelay: "1s" }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <path d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM9 4H11V9L10 8.25L9 9V4ZM18 20H6V4H7V13L10 10.75L13 13V4H18V20Z" />
              </svg>
            </div>

            <div className="absolute bottom-[20%] left-[20%] animate-float opacity-20" style={{ animationDelay: "1.5s" }}>
              <svg width="70" height="70" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L4 5V11.09C4 16.14 7.41 20.85 12 22C16.59 20.85 20 16.14 20 11.09V5L12 2ZM18 11.09C18 15.09 15.45 18.79 12 19.92C8.55 18.79 6 15.1 6 11.09V6.39L12 4.14L18 6.39V11.09Z" />
                <path d="M13 10H11V6H13V10ZM13 14H11V12H13V14Z" />
              </svg>
            </div>

            <div
                className="absolute bottom-[30%] right-[10%] animate-float opacity-20"
                style={{ animationDelay: "0.5s" }}
            >
              <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" />
                <path d="M7 12H9V17H7V12ZM11 7H13V17H11V7ZM15 9H17V17H15V9Z" />
              </svg>
            </div>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto z-10"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Image
                    src="/images/logo-with-text-white.png"
                    alt="EduMarkaz Logo"
                    width={280}
                    height={80}
                    className="h-auto"
                />
              </div>
            </div>

            <motion.h1
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-xl text-blue-100 mb-10"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative max-w-2xl mx-auto"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-gray-400" />
                <Input
                    type="text"
                    placeholder={t("hero.search.placeholder")}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="pl-12 pr-32 py-6 text-lg rounded-full shadow-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-white/50"
                />
                <Button className="absolute right-2 bg-white text-blue-700 hover:bg-blue-50 rounded-full px-6">
                  {t("hero.search.button")}
                </Button>
              </div>

              {/* Download buttons */}
              <div className="flex flex-row justify-center gap-4 mt-6 flex-wrap sm:flex-nowrap">
                {/* App Store */}
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 min-w-0"
                >
                  <img
                      src="/images/app_store.png"
                      alt="App Store Badge"
                      className="h-10 w-auto flex-shrink-0"
                  />
                  <div className="flex flex-col min-w-0 whitespace-nowrap">
                    <div className="text-[10px] sm:text-xs leading-tight truncate">Pre-Register on</div>
                    <div className="font-semibold text-xs sm:text-sm leading-tight truncate">App Store</div>
                  </div>
                </motion.a>

                {/* Google Play */}
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 min-w-0"
                >
                  <img
                      src="/images/play_market.png"
                      alt="Google Play Badge"
                      className="h-10 w-auto flex-shrink-0"
                  />
                  <div className="flex flex-col min-w-0 whitespace-nowrap">
                    <div className="text-[10px] sm:text-xs leading-tight truncate">Pre-Register on</div>
                    <div className="font-semibold text-xs sm:text-sm leading-tight truncate">Google Play</div>
                  </div>
                </motion.a>
              </div>





              <motion.div
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="flex flex-wrap justify-center gap-2 mt-6"
              >
              <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                {t("hero.tag.mathematics")}
              </span>
                <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                {t("hero.tag.english")}
              </span>
                <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                {t("hero.tag.ielts")}
              </span>
                <span className="text-sm bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                {t("hero.tag.science")}
              </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              onClick={() => scrollToSection("app-screens")}
          >
            <ChevronRight className="w-10 h-10 text-white rotate-90" />
          </motion.div>
        </section>

        {/* App Screens Showcase */}
        <section id="app-screens" ref={appScreensRef} className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={appScreensInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E4DB7] mb-4">{t("appScreens.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("appScreens.subtitle")}</p>
            </motion.div>

            <AppScreensCollage inView={appScreensInView} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={appScreensInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-20"
            >
              <StatsCounter stats={stats} />
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map" ref={mapRef} className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E4DB7] mb-4">{t("map.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("map.subtitle")}</p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <MapComponent />
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" ref={problemRef} className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E4DB7] mb-4">{t("problem.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("problem.subtitle")}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={problemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 p-3 bg-[#1E4DB7]/10 rounded-full">{problem.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-[#1E4DB7]">{problem.title}</h3>
                        <p className="text-gray-600">{problem.description}</p>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
            id="about"
            ref={aboutRef}
            className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 text-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("about.title")}</h2>
                <div className="space-y-6">
                  <p className="text-lg text-blue-100">{t("about.paragraph1")}</p>
                  <p className="text-lg text-blue-100">{t("about.paragraph2")}</p>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold">Rejabaliyev Nodirbek</h3>
                    <p className="text-blue-200">{t("about.founder")}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl overflow-hidden">
                  <Image
                      src="/images/founders.jpg"
                      alt="Founder"
                      width={600}
                      height={400}
                      className="rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E4DB7] mb-4">{t("features.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("features.subtitle")}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      whileHover={{ y: -10 }}
                  >
                    <div className="h-full overflow-hidden rounded-lg shadow-md">
                      <div className={`${feature.color} p-6 flex justify-center`}>
                        <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                          {feature.icon}
                        </div>
                      </div>
                      <div className="p-6 bg-white">
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" ref={howItWorksRef} className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={howItWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E4DB7] mb-4">{t("howItWorks.title")}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("howItWorks.subtitle")}</p>
            </motion.div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block" />

              <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={howItWorksInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        transition={{ duration: 0.6, delay: 0.2 * index }}
                        className={`relative md:${index % 2 === 0 ? "text-right md:mr-6" : "md:ml-6"}`}
                    >
                      {/* Step number */}
                      <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#1E4DB7] text-white items-center justify-center font-bold text-xl z-10">
                        {index + 1}
                      </div>

                      <div className="bg-white rounded-xl shadow-sm p-6 relative">
                        <div
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.color} mb-4`}
                        >
                          {step.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
            id="cta"
            ref={ctaRef}
            className="py-20 px-4 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 text-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("cta.title")}</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">{t("cta.subtitle")}</p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-100 text-lg px-8 py-6 rounded-full"
                    onClick={() => scrollToSection("map")}
                >
                  {t("cta.button")} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </main>
  )
}