"use client"

import { useEffect, useState } from "react"
import { SunIcon, MoonIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"

export default function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark"
    if (stored === "dark") {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-white/80 dark:bg-gray-800 shadow-md backdrop-blur border border-gray-300 dark:border-gray-700 hover:scale-110 transition-transform"
        title="Configuración"
      >
        <Cog6ToothIcon className="h-6 w-6 text-gray-800 dark:text-white" />
      </button>

      {/* Menú de opciones */}
      {isOpen && (
        <div className="mt-3 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-lg border border-gray-300 dark:border-gray-700 w-48 animate-fade-in">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
            {theme === "dark" ? "Modo claro" : "Modo oscuro"}
          </button>

          {/* Futuro: Selector de idioma aquí */}
        </div>
      )}
    </div>
  )
}
