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
      className={`mb-12 text-center relative ${light ? "" : "bg-white rounded-xl shadow-md p-6 mx-auto max-w-3xl"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {!light && <div className="absolute -bottom-3 -left-3 w-full h-full bg-purple-500/10 rounded-xl -z-10"></div>}
      <h2
        className={`text-3xl md:text-4xl font-bold font-playfair relative inline-block ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {children}
        <span className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg ${light ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto font-poppins`}>
          {subtitle}
        </p>
      )}
      {!light && (
        <>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        </>
      )}
    </motion.div>
  )
}
