import type { Metadata } from "next"
import { Montserrat, Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// Fuentes principales
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

export const metadata: Metadata = {
  title: "Lucas Gatti | Diseñador Digital & Marketing Specialist",
  description:
    "Portfolio profesional de Lucas Gatti, especialista en marketing digital, diseño gráfico y creación de contenido.",
  icons: {
    icon: "/favicon.ico", // 👈 ESTA es la forma correcta en App Router
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable} ${playfair.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
