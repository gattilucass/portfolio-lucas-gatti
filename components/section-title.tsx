"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ children, subtitle, light = false }: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-8 text-center relative ${light ? "" : "bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6 mx-auto max-w-3xl overflow-hidden"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {!light && <div className="absolute -bottom-1 sm:-bottom-3 -left-1 sm:-left-3 w-full h-full bg-purple-500/10 rounded-xl -z-10"></div>}
      <h2
        className={`text-3xl md:text-4xl font-bold font-playfair relative inline-block ${
          light ? "text-white" : "text-gray-900 dark:text-white"
        }`}
      >
        {children}
        <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg ${light ? "text-gray-300" : "text-gray-600 dark:text-gray-400"} max-w-2xl mx-auto font-poppins`}>
          {subtitle}
        </p>
      )}
      {!light && (
        <>
          <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        </>
      )}
    </motion.div>
  )
}
