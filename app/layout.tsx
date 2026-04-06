// app/layout.tsx
import React from "react"
import type { Metadata } from "next"
import { Montserrat, Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

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
  title: "Lucas Gatti | Desarrollo Web · Automatización · Marketing",
  description: "Portfolio de Lucas Gatti — Desarrollo web, automatización con IA, contenido audiovisual y marketing digital. Next.js, n8n, bots de WhatsApp y más.",
  generator: "v0.dev",
  keywords: "desarrollo web, automatización, marketing digital, Next.js, n8n, bots WhatsApp",
  authors: [{ name: "Lucas Gatti" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Lucas Gatti | Desarrollo Web · Automatización · Marketing",
    description: "Portfolio de Lucas Gatti — Desarrollo web, automatización con IA, contenido audiovisual y marketing digital.",
    type: "website",
    locale: "es_AR",
  },
  robots: "index, follow",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${montserrat.variable} ${poppins.variable} ${playfair.variable}`}>
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
      <Navbar />
        </ThemeProvider>
      </body>
    </html>
  )
}


