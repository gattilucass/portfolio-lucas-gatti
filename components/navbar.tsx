"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Cambiar color de fondo en scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar el menú al tocar fuera
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("#mobile-menu") && !target.closest("#menu-toggle")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("mousedown", closeMenu)
    } else {
      document.body.style.overflow = "auto"
      document.removeEventListener("mousedown", closeMenu)
    }

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("mousedown", closeMenu)
    }
  }, [isOpen])

  const navItems = [
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#portfolio" },
    { name: "Campañas", href: "#campaigns" },
    { name: "Freelance", href: "#freelance" },
    { name: "Resultados", href: "#results" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[999] backdrop-blur-md transition-all duration-300 ${
    scrolled ? "bg-white/90 shadow-md py-3" : "bg-transparent py-5"
  }`}
      >
        <div className="flex items-center justify-between w-full px-4 md:px-6">
          <Link
            href="/"
            className={`text-xl font-bold font-playfair pl-1 sm:pl-2 md:pl-4 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              Lucas Gatti
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 justify-center absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={item.href}
                  className={`${
                    scrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white"
                  } transition-colors font-medium relative group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.button
            id="menu-toggle"
            className="md:hidden ml-2 z-[999]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className={scrolled ? "text-gray-900" : "text-white"} size={24} />
            ) : (
              <Menu className={scrolled ? "text-gray-900" : "text-white"} size={24} />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu + overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay negro visible todo el scroll */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Contenedor menú móvil */}
            <motion.div
              id="mobile-menu"
              className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-white dark:bg-gray-900 px-6 space-y-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 dark:text-white font-semibold text-xl hover:text-purple-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.03 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
