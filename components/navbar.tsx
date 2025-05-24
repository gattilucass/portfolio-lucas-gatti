"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import ThemeToggle from "@/components/theme-toggle"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#portfolio" },
    { name: "Campañas", href: "#campaigns" },
    { name: "Freelance", href: "#freelance" },
    { name: "Resultados", href: "#results" },
    { name: "Testimonios", href: "#testimonios"},
    { name: "Contacto", href: "#contact" },
    

  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
  <div className="flex items-center justify-between w-full px-4 md:px-6">
  {/* Logo con margen izquierdo */}
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

  {/* Navegación centrada */}
  <nav className="hidden md:flex items-center space-x-6 justify-center flex-grow">
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

  {/* Botón mobile */}
  <motion.button
    className="md:hidden ml-2"
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
  )
}
