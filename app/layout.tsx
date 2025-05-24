// app/layout.tsx
import React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SettingsButton from "@/components/settings-button"


// 1️⃣ Definición de fuentes
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

// 2️⃣ Metadata (incluye el favicon)
export const metadata: Metadata = {
  title: "Lucas Gatti | Diseñador Digital & Marketing Specialist",
  description:
    "Portfolio profesional de Lucas Gatti, especialista en marketing digital, diseño gráfico y creación de contenido.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable} ${playfair.variable}`}>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
    
        </ThemeProvider>
      </body>
    </html>
  )
}
