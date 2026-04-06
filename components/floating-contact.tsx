"use client"

import { useState, useEffect } from "react"
import { Linkedin, MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Hide when footer is in viewport
  useEffect(() => {
    const footer = document.getElementById("site-footer")
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const show = isVisible && !footerVisible

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed left-6 bottom-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="mb-4 flex flex-col gap-3"
              >
                <motion.a
                  href="https://wa.me/5491159454830"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-green-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                  title="Contactar por WhatsApp"
                >
                  <MessageCircle size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/lucas-gatti-a67713206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  title="Conectar en LinkedIn"
                >
                  <Linkedin size={24} />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-colors ${
              isOpen
                ? "bg-gray-700 dark:bg-slate-700 text-white hover:bg-gray-800 dark:hover:bg-slate-600"
                : "bg-gradient-to-r from-purple-600 to-blue-600 text-white dark:from-purple-500 dark:to-blue-500"
            }`}
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
