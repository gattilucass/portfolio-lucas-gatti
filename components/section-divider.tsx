"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  light?: boolean
}

export default function SectionDivider({ light = false }: SectionDividerProps) {
  const scrollToNextSection = () => {
    const currentPosition = window.scrollY
    const windowHeight = window.innerHeight

    // Scroll suavemente 100vh desde la posición actual
    window.scrollTo({
      top: currentPosition + windowHeight * 0.8,
      behavior: "smooth",
    })
  }

  return (
    <motion.div
      className="relative h-20 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`absolute inset-0 flex items-center justify-center ${light ? "opacity-30" : "opacity-20"}`}>
        <div
          className={`w-full h-px bg-gradient-to-r ${light ? "from-transparent via-purple-400 to-transparent" : "from-transparent via-purple-500 to-transparent"}`}
        ></div>
      </div>
      <motion.button
        onClick={scrollToNextSection}
        className={`relative w-14 h-14 flex items-center justify-center rounded-full ${
          light
            ? "bg-gray-800 hover:bg-gray-700"
            : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        } shadow-md cursor-pointer transition-colors duration-300`}
        whileHover={{ y: 5 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M7 13L12 18L17 13M7 6L12 11L17 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </motion.div>
  )
}
