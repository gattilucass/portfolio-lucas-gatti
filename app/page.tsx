"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Phone, ArrowDown, ExternalLink, Play, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import SectionTitle from "@/components/section-title"
import SectionDivider from "@/components/section-divider"
import AnimatedCard from "@/components/animated-card"
import AnimatedCounter from "@/components/animated-counter"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingShapes from "@/components/floating-shapes"
import FloatingContact from "@/components/floating-contact"
import MoreCampaignsModal from "@/components/more-campaigns-modal"
import CVViewer from "@/components/cv-viewer"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import ClientModal from "@/components/client-modal";

// Iconos
import {ThumbsUp, Quote } from "lucide-react"



export default function Home() {
  const [toolsOpen, setToolsOpen] = useState(false)

  const tools = [
  { name: "Adobe Photoshop", file: "adobephotoshop" },
  { name: "Adobe Premiere", file: "adobepremierepro" },
  { name: "Adobe Illustrator", file: "adobeillustrator" },
  { name: "Canva", file: "canva" },
  { name: "Figma", file: "figma" },
  { name: "Notion", file: "notion" },
  { name: "Excel", file: "microsoftexcel" },
  { name: "Visual Basic", file: "visualbasic" },
  { name: "Zoho CRM", file: "zoho" },
  { name: "Google Ads", file: "googleads" },
  { name: "Meta Ads", file: "facebook" },
  { name: "Next.js", file: "nextdotjs" },
]


  return (

    <main className="min-h-screen bg-white overflow-hidden">
      
      <Navbar />
      <CVViewer />
      <ScrollToTop />
      <FloatingContact />

      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
  <FloatingShapes />

  {/* Background overlays */}
  <div className="absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-pattern"></div>
  </div>
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/30 to-black/70"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10">
    {/* TITULO */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl md:text-8xl font-bold font-playfair tracking-tight text-white mb-4 animate-fade-in-up drop-shadow-md">
        Lucas Gatti
      </h1>
      <div className="h-1 w-40 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
      <h2 className="text-2xl md:text-4xl text-gray-200 mb-8 font-poppins">
        Diseñador Digital & Marketing Specialist
      </h2>
    </motion.div>

    {/* SUBTITULO */}
    <motion.p
      className="text-lg md:text-xl text-gray-100 max-w-2xl mb-10 font-poppins leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      Transformando ideas en{" "}
      <span className="relative inline-block">
        <span className="relative z-10 font-semibold">campañas digitales rentables</span>
        <span className="absolute bottom-0 left-0 w-full h-3 bg-purple-500/30 -z-10"></span>
      </span>{" "}
      y{" "}
      <span className="relative inline-block">
        <span className="relative z-10 font-semibold">contenido visual estratégico</span>
        <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/30 -z-10"></span>
      </span>
      .
    </motion.p>

    {/* BOTONES */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      <Link
        href="#portfolio"
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-medium w-64 group"
      >
        Ver mi trabajo
        <motion.span
          className="group-hover:translate-x-2 transition-transform"
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          →
        </motion.span>
      </Link>
      <button
        onClick={() => document.getElementById("cv-viewer-btn")?.click()}
        className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/20 transition-all duration-300 font-medium flex items-center justify-center gap-2 w-64"
      >
        Ver mi CV <FileText size={18} />
      </button>
    </motion.div>

    {/* SCROLL ICON */}
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Link href="#about" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
        <span className="text-sm mb-2 font-poppins">Descubre más</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </Link>
    </motion.div>
  </div>
</section>


       {/* About & Skills Combined Section */}
<section id="about" className="py-16 bg-white relative">
  <div className="container mx-auto px-4 md:px-6">
    <SectionTitle subtitle="Conoce mi experiencia y especialidades en el mundo digital">
      Sobre Mí
    </SectionTitle>

    {/* Texto principal centrado animado */}
    <motion.div
      className="max-w-3xl mx-auto text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-lg text-gray-800 mb-6 font-poppins drop-shadow-sm leading-relaxed">
        Profesional TI y <span className="font-semibold text-purple-700">Marketing Specialist</span> con más de 5
        años en sector asegurador y desarrollo de campañas digitales. Creo estrategias de alto impacto,
        contenido audiovisual y optimizo presupuestos en <span className="font-semibold text-blue-600">Meta y Google Ads</span>.
      </p>
      <p className="text-lg text-gray-800 mb-8 font-poppins drop-shadow-sm leading-relaxed">
        Además diseño y desarrollo <span className="font-semibold text-blue-700">landing pages</span> y 
        <span className="font-semibold text-blue-700"> sitios web</span>, como este portafolio. Domino herramientas y plataformas clave para tu proyecto.
      </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row gap-12 items-start">

      {/* Imagen con efecto animado y posición más baja */}
      <motion.div
        className="md:w-1/3 pt-8" // 👈 este padding mueve la imagen más abajo
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-[360px] h-[480px] mx-auto group transition-transform duration-500 hover:scale-105">
          {/* Marco animado encima */}
          <div className="absolute inset-0 z-10 rounded-lg border-6 border-transparent pointer-events-none">
            <div className="absolute inset-0 rounded-lg border-6 border-transparent animate-border-gradient bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:300%_300%]"></div>
          </div>
          {/* Imagen */}
          <Image
            src="/images/lucas-gatti-sinfondo.png"
            alt="Lucas Gatti"
            width={360}
            height={480}
            className="object-cover rounded-lg z-20 relative"
            priority
          />
        </div>
      </motion.div>

      {/* Cards: Experiencia, Especialidad, Herramientas, Resultados */}
      <motion.div
        className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Experiencia */}
        <AnimatedCard className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-purple-500 hover:shadow-md transition">
          <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4 flex items-center">
            🕒 Experiencia
          </h3>
          <ul className="text-gray-700 font-poppins list-disc list-inside space-y-2">
            <li>+5 años en marketing digital & gestión de campañas multi-plataforma.</li>
            <li>Implementación de embudos y automatizaciones en Zoho CRM.</li>
            <li>Coordinación de equipos creativos y producción audiovisual.</li>
            <li>Desarrollo de landing pages y sitios web (Next.js, Tailwind).</li>
          </ul>
        </AnimatedCard>

        {/* Especialidad */}
        <AnimatedCard className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition">
          <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4 flex items-center">
            🎯 Especialidad
          </h3>
          <p className="text-gray-700 font-poppins mb-4">
            <strong>Contenido visual impactante</strong>, campañas de alto CPL y ROI, y conversiones medibles.
          </p>
          <p className="text-gray-700 font-poppins mb-4">
          <li>Diseño de campañas efectivas con estética profesional.</li>
          <li>Trabajo orientado a resultados y conversión</li>
          <li>Optimizo cada pieza visual y cada palabra para lograr impacto en audiencias segmentadas.</li>
          </p>
          <Link href="#portfolio" className="text-blue-600 font-medium hover:underline font-poppins">
            Ver proyectos destacados →
          </Link>
        </AnimatedCard>

      <AnimatedCard className="group bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-purple-500 hover:shadow-md transition">
  <h3 className="flex items-center text-xl font-playfair font-semibold text-gray-900 mb-4">
    🧰 Herramientas
  </h3>

  {/* Vista previa: las 6 principales */}
  <div className="grid grid-cols-3 gap-4">
    {[
      { name: "Adobe Photoshop", file: "adobephotoshop" },
      { name: "Adobe Premiere", file: "adobepremierepro" },
      { name: "Adobe Illustrator", file: "adobeillustrator" },
      { name: "Canva", file: "canva" },
      { name: "Figma", file: "figma" },
      { name: "Notion", file: "notion" },
    ].map(({ name, file }) => (
      <figure key={name} className="flex flex-col items-center text-center">
        <div className="w-1 h-1 flex items-center justify-center"></div>
          <img
    src={`/icons/herramientas/${file}.png`}
    alt={name}
    className="max-w-12 max-h-10 object-contain"
  />
        <figcaption className="mt-2 text-xs font-poppins">{name}</figcaption>
      </figure>
    ))}
  </div>

  {/* Botón centrado */}
  <div className="flex justify-center mt-6">
    <button
      onClick={() => setToolsOpen(true)}
      className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
    >
      Ver todas
    </button>
  </div>

  {/* Modal con todas las herramientas */}
  {toolsOpen && (
    <ClientModal isOpen={toolsOpen} onRequestClose={() => setToolsOpen(false)}>
      <h2 className="text-xl font-semibold mb-4 text-center">Todas las herramientas</h2>
      <div className="grid grid-cols-4 gap-6">
        {[
          { name: "Adobe Photoshop", file: "adobephotoshop" },
          { name: "Adobe Premiere", file: "adobepremierepro" },
          { name: "Adobe Illustrator", file: "adobeillustrator" },
          { name: "Canva", file: "canva" },
          { name: "Figma", file: "figma" },
          { name: "Notion", file: "notion" },
          { name: "Excel", file: "microsoftexcel" },
          { name: "Visual Studio Code", file: "visualstudio" },
          { name: "Zoho CRM", file: "zoho" },
          { name: "Google Ads", file: "googleads" },
          { name: "Meta Ads", file: "facebook" },
          { name: "Next.js", file: "nextdotjs" },
        ].map(({ name, file }) => (
          <div key={name} className="flex flex-col items-center text-center">
            <img src={`/icons/herramientas/${file}.png`} alt={name} className="w-10 h-10" />
            <span className="mt-2 text-sm font-poppins text-center">{name}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => setToolsOpen(false)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Cerrar
        </button>
      </div>
    </ClientModal>
  )}
</AnimatedCard>



        {/* Resultados */}
        <AnimatedCard className="bg-gray-50 p-6 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition">
          <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4 flex items-center">
            📈 Resultados
          </h3>
          <ul className="text-gray-700 font-poppins list-disc list-inside space-y-2">
            <li><strong>200 leads/día</strong> con presupuestos de $3.000 ARS.</li>
            <li><strong>180K vistas</strong> en video viral de TikTok.</li>
            <li><strong>4.5% CTR</strong> promedio en campañas Meta Ads.</li>
            <li><strong>$50 CPL</strong> optimizado reduciendo costos un 30%.</li>
          </ul>
          <Link href="#results" className="mt-4 inline-block text-blue-600 font-medium hover:underline font-poppins">
            Ver todos los resultados →
          </Link>
        </AnimatedCard>
      </motion.div>
    </div>
  </div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="mt-12 flex justify-center"
>
  <div className="w-full max-w-2xl p-8 pt-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition duration-300 text-center">
    
    {/* Título arriba y centrado */}
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair mb-5 relative z-10">
      🎓 Formación Continua
      <span className="block w-12 h-1 mt-2 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
    </h3>

    {/* Contenido centrado */}
    <ul className="space-y-4 text-gray-700 dark:text-gray-200 font-poppins text-[17px] leading-relaxed max-w-lg mx-auto">
      <li className="flex items-start justify-center gap-2">
        <span className="text-purple-500">📘</span>
        <span><strong>Productividad con IA:</strong> ChatGPT y Notion AI – Udemy</span>
      </li>
      <li className="flex items-start justify-center gap-2">
        <span className="text-purple-500">📊</span>
        <span><strong>Introducción al análisis de datos:</strong> Google / Coursera</span>
      </li>
      <li className="flex items-start justify-center gap-2">
        <span className="text-purple-500">🎨</span>
        <span><strong>Marketing Digital y Diseño Gráfico:</strong> Edutin Academy</span>
      </li>
    </ul>
  </div>
</motion.div>

      </section>



        {/* Skills Section */}
        <section id="skills" className="py-16 bg-gray-50 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionTitle subtitle="Conocimientos y capacidades que aporto a cada proyecto">
              Mis Habilidades
            </SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Marketing Digital",
                  icon: "📊",
                  skills: [
                    "Campañas Meta y Google Ads",
                    "Estrategia de contenido",
                    "Segmentación y A/B tests",
                    "Optimización de ROI",
                  ],
                },
                {
                  title: "Diseño Gráfico",
                  icon: "🎨",
                  skills: [
                    "Posts y Stories",
                    "Banners y Flyers",
                    "Identidad de marca",
                    "Animaciones básicas",
                  ],
                },
                {
                  title: "Creación de Contenido",
                  icon: "🎬",
                  skills: [
                    "Edición TikTok/Instagram",
                    "Storytelling y guiones",
                    "Producción audiovisual",
                    "Voice-overs con IA",
                  ],
                },
                {
                  title: "Gestión de CRM",
                  icon: "👥",
                  skills: [
                    "Zoho CRM y Woztell",
                    "Automatizaciones",
                    "Seguimiento de leads",
                    "Análisis de datos",
                  ],
                },
                {
                  title: "Web y Landing Pages",
                  icon: "💻",
                  skills: [
                    "Next.js + Tailwind",
                    "Deploy Vercel",
                    "SEO On-Page",
                    "Formularios y APIs",
                  ],
                },
                {
                  title: "Soporte al Cliente",
                  icon: "🤝",
                  skills: [
                    "Atención y reclamos",
                    "Comunicación efectiva",
                    "Fidelización",
                    "Reportes y KPIs",
                  ],
                },
              ].map(({ title, icon, skills }, i) => (
                <AnimatedCard
                  key={i}
                  delay={0.1 + i * 0.1}
                  className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-purple-500 hover:shadow-md transition"
                >
                  <div className="w-14 h-14 mb-6 flex items-center justify-center bg-purple-100 rounded-lg">
                    <span className="text-2xl">{icon}</span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-3 text-gray-700 font-poppins">
                    {skills.map((s) => (
                      <li key={s} className="flex items-start">
                        <span className="mr-2 text-purple-500">•</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle subtitle="Una selección de mis mejores trabajos en video y diseño">
            Proyectos Destacados
          </SectionTitle>

          {/* Featured Project - Video Viral */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mb-10 shadow-sm"
            >
              <h3 className="text-2xl md:text-3xl font-semibold font-playfair text-gray-900 mb-4 text-center">
                Video Viral para TikTok - Motivacional (Colapinto)
              </h3>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto font-poppins text-center">
                Video motivacional con más de 160.000 visualizaciones orgánicas en TikTok, generando fuerte reconocimiento de marca y engagement.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="w-full lg:w-2/3"
>
  <div className="relative w-full aspect-[9/16] sm:aspect-video overflow-hidden rounded-xl shadow-xl group">
    <iframe
      src="https://www.tiktok.com/embed/v2/7429547977884142854"
      className="absolute inset-0 w-full h-full"
      allowFullScreen
    ></iframe>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <a
        href="https://www.tiktok.com/@segurline/video/7429547977884142854"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
      >
        <Play size={24} />
      </a>
    </div>
  </div>
</motion.div>

              <motion.div
                className="lg:w-1/3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-6 font-playfair text-xl">Detalles del Proyecto</h4>
                  <ul className="space-y-4 text-gray-700 font-poppins">
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-purple-700">👨‍💻</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Rol:</span>
                        Edición, guión, efectos, voz mejorada, producción total
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-blue-700">📊</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Alcance:</span>
                        +168.000 vistas, +12.000 likes, 657 guardados
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-purple-700">🚀</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Resultado:</span>
                        Aumentó la visibilidad orgánica de la marca en TikTok
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-blue-700">🛠️</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Herramientas:</span>
                        Premiere Pro, CapCut, IA de voz
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project 2 - Reel Informativo */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl mb-10 shadow-sm"
            >
              <h3 className="text-2xl md:text-3xl font-semibold font-playfair text-gray-900 mb-4 text-center">
                Reel Informativo con Impacto Visual
              </h3>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto font-poppins text-center">
                Contenido informativo diseñado para captar la atención rápidamente con elementos visuales de alto
                impacto.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="w-full lg:w-2/3 order-1 lg:order-2"
>
  <div className="relative w-full aspect-[9/16] sm:aspect-video overflow-hidden rounded-xl shadow-xl group">
    <iframe
      src="https://www.instagram.com/reel/DArKYzrySM7/embed"
      className="absolute inset-0 w-full h-full"
      allowFullScreen
    ></iframe>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <a
        href="https://www.instagram.com/reel/DArKYzrySM7/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
      >
        <Play size={24} />
      </a>
    </div>
  </div>
</motion.div>

              <motion.div
                className="lg:w-1/3 order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-6 font-playfair text-xl">Detalles del Proyecto</h4>
                  <ul className="space-y-4 text-gray-700 font-poppins">
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-blue-700">🎯</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Objetivo:</span>
                        Informar con impacto visual usando "balas visuales"
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-purple-700">📊</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Resultado:</span>
                        50.000 vistas orgánicas en Instagram
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-blue-700">🛠️</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Herramientas:</span>
                        Canva + edición básica rápida
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-purple-700">💡</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Lo valioso:</span>
                        Dominio del ritmo, la atención visual y el mensaje claro
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Project 3 - Video Promocional */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl mb-10 shadow-sm"
            >
              <h3 className="text-2xl md:text-3xl font-semibold font-playfair text-gray-900 mb-4 text-center">
                Video Promocional para Cotización de Autos
              </h3>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto font-poppins text-center">
                Pieza promocional que combina creatividad visual con información funcional para guiar al usuario.
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="w-full lg:w-2/3 order-1"
>
  <div className="relative w-full aspect-[9/16] sm:aspect-video overflow-hidden rounded-xl shadow-xl group">
    <iframe
      src="https://www.tiktok.com/embed/v2/7431323291614301446"
      className="absolute inset-0 w-full h-full"
      allowFullScreen
    ></iframe>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <a
        href="https://www.tiktok.com/@segurline/video/7431323291614301446"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
      >
        <Play size={24} />
      </a>
    </div>
  </div>
</motion.div>

              <motion.div
                className="lg:w-1/3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm border-l-4 border-purple-500">
                  <h4 className="font-semibold text-gray-900 mb-6 font-playfair text-xl">Detalles del Proyecto</h4>
                  <ul className="space-y-4 text-gray-700 font-poppins">
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-purple-700">🎨</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Enfoque:</span>
                        Creatividad visual + explicación funcional
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-blue-700">🎯</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Objetivo:</span>
                        Guiar al usuario a cotizar su vehículo
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-purple-700">📈</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Resultado:</span>
                        Impulsó el tráfico al link de cotización
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <span className="text-blue-700">🛠️</span>
                      </span>
                      <div>
                        <span className="font-medium block text-gray-900">Herramientas:</span>
                        Canva, edición de video
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-4"></div>

      {/* Ad Campaigns Section */}
      <section id="campaigns" className="py-16 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle subtitle="Diseños y estrategias para campañas publicitarias efectivas">
            Campañas Publicitarias
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {/* Campaign 1 */}
<AnimatedCard delay={0.1} className="bg-white rounded-lg overflow-hidden shadow-sm group flex flex-col justify-between">
  <div className="relative aspect-video rounded-t-lg overflow-hidden">
    <video
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      controls
      preload="metadata"
      playsInline
      muted
      poster="/images/preview-otono.jpg" // opcional: miniatura previa
    >
      <source src="/videos/promo-otono.mp4" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
    <div className="absolute top-4 left-4 z-10">
      <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">Meta Ads</span>
    </div>
  </div>

  <div className="p-8 flex flex-col justify-between flex-grow">
    <h3 className="text-xl font-semibold font-playfair text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">
      Campaña "Promo Otoño"
    </h3>
    <ul className="space-y-3 text-gray-700 font-poppins mb-6 text-sm leading-relaxed">
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span className="font-medium">Diseño:</span>
        <span className="ml-1">Temático con hojas otoñales.</span>
      </li>
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span className="font-medium">Público:</span>
        <span className="ml-1">Conductores entre 25 y 40 años.</span>
      </li>
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span className="font-medium">Presupuesto:</span>
        <span className="ml-1">ARS $3.000/día.</span>
      </li>
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span className="font-medium">Resultado:</span>
        <span className="ml-1">Hasta 170 leads diarios.</span>
      </li>
      <li className="flex items-start">
        <span className="text-purple-500 mr-2">•</span>
        <span className="font-medium">KPI:</span>
        <span className="ml-1">CTR ~3.2%, CPL promedio: $60</span>
      </li>
    </ul>
  </div>
</AnimatedCard>

{/* Campaign 2 */}
<AnimatedCard delay={0.2} className="bg-white rounded-lg overflow-hidden shadow-sm group flex flex-col justify-between">
  <div className="relative aspect-video rounded-t-lg overflow-hidden">
    <video
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      controls
      preload="metadata"
      playsInline
      muted
      poster="/images/preview-europa.jpg" // opcional
    >
      <source src="/videos/seguro-europa.mp4" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
    <div className="absolute top-4 left-4 z-10">
      <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">Google Ads</span>
    </div>
  </div>

  <div className="p-8 flex flex-col justify-between flex-grow">
    <h3 className="text-xl font-semibold font-playfair text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
      Campaña "Seguro de Viaje para Europa"
    </h3>
    <ul className="space-y-3 text-gray-700 font-poppins mb-6 text-sm leading-relaxed">
      <li className="flex items-start">
        <span className="text-blue-500 mr-2">•</span>
        <span className="font-medium">Diseño:</span>
        <span className="ml-1">Elementos visuales de viaje y seguridad.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-500 mr-2">•</span>
        <span className="font-medium">Estrategia:</span>
        <span className="ml-1">Enfoque en temporada de vacaciones.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-500 mr-2">•</span>
        <span className="font-medium">Presupuesto:</span>
        <span className="ml-1">ARS $3.500/día.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-500 mr-2">•</span>
        <span className="font-medium">Resultado:</span>
        <span className="ml-1">Incremento estimado del 25% en consultas y cotizaciones durante la temporada.</span>
      </li>
      <li className="flex items-start">
        <span className="text-blue-500 mr-2">•</span>
        <span className="font-medium">Plataformas:</span>
        <span className="ml-1">Meta Ads, Google Ads.</span>
      </li>
    </ul>
    <a
      href="https://www.canva.com/design/DAGhCWH0sVQ/vQ_zWijJKFyjJW7l3u2oBA/edit"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
    >
    </a>
  </div>
</AnimatedCard>

          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MoreCampaignsModal />
          </motion.div>
        </div>
      </section>

      <div className="py-4"></div>

      {/* Freelance Work Section */}
      <section id="freelance" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle subtitle="Proyectos independientes para diversos clientes y sectores">
            Trabajos Freelance
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Freelance Project 1 */}
            <AnimatedCard delay={0.1} className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full transition-all duration-300 hover:shadow-md">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="images/arum-logo.jpg"
                    alt="Diseño para Estética"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href="https://www.canva.com/design/DAGJyEGHEZM/xrILic1R26epW2xdi7LNBA/edit?utm_content=DAGJyEGHEZM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-playfair text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    Diseño de Logos y Branding para Estetica
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 font-poppins">
                    Diseño para página de instagram de un negocio de estética, adaptado al estilo que solicita la clienta.
                  </p>
                  <a
                    href="https://www.canva.com/design/DAGJyEGHEZM/xrILic1R26epW2xdi7LNBA/edit?utm_content=DAGJyEGHEZM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors group"
                  >
                    Ver diseño{" "}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedCard>

            {/* Freelance Project 2 */}
            <AnimatedCard delay={0.2} className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full transition-all duration-300 hover:shadow-md">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/promo-estetica.png"
                    alt="Promociones para Estética"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href="https://drive.google.com/file/d/1PVYnD0g2tGlIvUgYwdH8abOAs8Ab8kIE/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-playfair text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    Promociones para Estética
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 font-poppins">
                    Diseño de promociones especiales para página de estética, enfocado en tratamientos faciales..
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1PVYnD0g2tGlIvUgYwdH8abOAs8Ab8kIE/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                  >
                    Ver diseño{" "}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedCard>

            {/* Freelance Project 3 */}
            <AnimatedCard delay={0.3} className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full transition-all duration-300 hover:shadow-md">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/marketing1.png"
                    alt="Promoción para Cabañas"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href="https://www.canva.com/design/DAFDoR2S5fo/D9erZHPJmvYD9k-0DLh8IQ/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-gray-900 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-playfair text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                    Diseño para Agencia de Marketing
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 font-poppins">
                    Diseño promocional destacando los planes de servicios y sus características para una agencia de
                    marketing digital.
                  </p>
                  <a
                    href="https://www.canva.com/design/DAFDoR2S5fo/D9erZHPJmvYD9k-0DLh8IQ/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors group"
                  >
                    Ver diseño{" "}
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={14} />
                    </span>
                  </a>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <div className="py-4"></div>

      {/* KPIs and Results Section */}
<section
  id="results"
  className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative"
>
  <div className="absolute inset-0 bg-pattern opacity-10"></div>
  <FloatingShapes />

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <SectionTitle light subtitle="Datos concretos que demuestran la efectividad de mis estrategias">
      Resultados y Métricas
    </SectionTitle>

    {/* Métricas principales */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <AnimatedCard delay={0.1} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter prefix="+" end={200} />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">Leads diarios</p>
        <p className="text-gray-400 text-sm font-poppins">Con presupuesto de $3.000 ARS/día</p>
      </AnimatedCard>

      <AnimatedCard delay={0.2} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter prefix="+" end={180} suffix="k" />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">Vistas en video</p>
        <p className="text-gray-400 text-sm font-poppins">TikTok - Campaña Colapinto</p>
      </AnimatedCard>

      <AnimatedCard delay={0.3} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter end={4.5} suffix="%" />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">CTR promedio</p>
        <p className="text-gray-400 text-sm font-poppins">En campañas de Meta Ads</p>
      </AnimatedCard>

      <AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter end={50} prefix="$" />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">Costo por lead</p>
        <p className="text-gray-400 text-sm font-poppins">En campañas optimizadas</p>
      </AnimatedCard>

      {/* NUEVAS CARDS */}
      <AnimatedCard delay={0.5} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter end={7} suffix="%" />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">Tasa de conversión</p>
        <p className="text-gray-400 text-sm font-poppins">En campañas inbound + remarketing</p>
      </AnimatedCard>

      <AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter end={3.2} suffix="x" />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">ROAS</p>
        <p className="text-gray-400 text-sm font-poppins">Retorno promedio de inversión</p>
      </AnimatedCard>

      <AnimatedCard delay={0.8} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter end={3 } suffix=" minutos" />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">Tiempo de Respuesta</p>
        <p className="text-gray-400 text-sm font-poppins">Promedio en atención y gestión de leads</p>
      </AnimatedCard>

      <AnimatedCard delay={0.7} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center hover:bg-white/15 transition-colors duration-300">
        <div className="text-5xl font-bold text-white mb-4 font-playfair">
          <AnimatedCounter end={89} suffix="%" />
        </div>
        <p className="text-gray-200 font-medium text-lg mb-2 font-poppins">Satisfacción del cliente</p>
        <p className="text-gray-400 text-sm font-poppins">Basado en encuestas post-campaña</p>
      </AnimatedCard>
    </div>

   <motion.div
  className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 max-w-4xl mx-auto"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.5 }}
>
  {/* Título más destacado y con ícono animado */}
  <div className="flex items-center justify-center mb-6 gap-3">
    <motion.span
      initial={{ rotate: -15, scale: 0.8 }}
      whileInView={{ rotate: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.3 }}
      className="text-3xl"
    >
      🚀
    </motion.span>
    <h3 className="text-2xl font-semibold text-white font-playfair tracking-wide">
      Impacto de las Campañas
    </h3>
  </div>

  {/* Texto con frases clave destacadas */}
  <p className="text-gray-200 mb-6 font-poppins text-center leading-relaxed">
    Las campañas diseñadas y ejecutadas lograron un{" "}
    <span className="text-purple-400 font-semibold">balance óptimo entre presupuesto e impacto</span>, consiguiendo
    <span className="text-purple-400 font-semibold"> resultados superiores a la media del sector</span>. La combinación de{" "}
    <span className="text-blue-300 font-semibold">diseño estacional</span>,{" "}
    <span className="text-blue-300 font-semibold">mensajes claros</span> y{" "}
    <span className="text-blue-300 font-semibold">segmentación precisa</span> permitió{" "}
    <span className="text-purple-400 font-semibold">maximizar el retorno de inversión</span> publicitaria.
  </p>

  {/* Cuadro con estrategias y mejoras */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div className="bg-white/5 p-6 rounded-lg border border-white/10">
      <h4 className="font-medium text-white mb-4 font-playfair text-lg flex items-center">
        <span className="w-8 h-8 bg-purple-500/30 rounded-full flex items-center justify-center mr-3">
          <span className="text-purple-200">✓</span>
        </span>
        Estrategias Efectivas
      </h4>
      <ul className="space-y-2 text-gray-300 text-sm font-poppins">
        <li className="flex items-start">
          <span className="text-purple-400 mr-2">•</span>
          Adaptación visual por temporada
        </li>
        <li className="flex items-start">
          <span className="text-purple-400 mr-2">•</span>
          Mensajes directos con llamados a la acción claros
        </li>
        <li className="flex items-start">
          <span className="text-purple-400 mr-2">•</span>
          Segmentación precisa por intereses y comportamiento
        </li>
        <li className="flex items-start">
          <span className="text-purple-400 mr-2">•</span>
          Optimización continua basada en datos
        </li>
      </ul>
    </div>


        <div className="bg-white/5 p-6 rounded-lg border border-white/10">
          <h4 className="font-medium text-white mb-4 font-playfair text-lg flex items-center">
            <span className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-200">↗</span>
            </span>
            Mejoras Implementadas
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm font-poppins">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Rediseño de landing pages para mejorar conversión
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Pruebas A/B de creatividades y mensajes
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Ajuste de presupuestos según rendimiento
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              Implementación de remarketing estratégico
            </li>
          </ul>
        </div>
      </div>

{/* Línea animada con íconos representativos */}  
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 pt-6 px-2">
  {[
    { icon: "🎨", label: "Creatividad" },
    { icon: "⚙️", label: "Optimización" },
    { icon: "📊", label: "Métricas" },
    { icon: "💰", label: "ROI" },
    { icon: "📱", label: "Multicanal" },
  ].map(({ icon, label }, index) => (
    <motion.div
      key={label}
      className="flex flex-col items-center justify-center h-24 bg-white/10 rounded-xl border border-white/20 shadow-sm text-white text-xl transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm font-poppins text-white/90 mt-2 text-center">{label}</span>
    </motion.div>
  ))}
</div>



    </motion.div>
  </div>
</section>

{/* Testimonios Sectiongit init
 */}
<section id="testimonios" className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4 md:px-6">
    <motion.div
      className="bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-8 text-center max-w-4xl mx-auto mb-12 border border-gray-200"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold font-playfair text-gray-900 mb-3 relative inline-block">
        <span className="relative z-10">Testimonios</span>
        <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full -z-10"></span>
      </h2>
      <p className="text-gray-600 font-poppins text-base">
        Opiniones reales de personas con las que trabajé
      </p>
      <p className="text-xs text-center text-gray-400 mt-4 font-poppins">
        Los testimonios fueron expresados de forma directa o presencial. Para más información, podés contactar a cada persona con el botón de WhatsApp.
      </p>
    </motion.div>

    <Swiper
      slidesPerView={1}
      breakpoints={{ 768: { slidesPerView: 2 } }}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 6000 }}
      navigation={true}
      modules={[Autoplay, Navigation]}
    >
      {[
  {
    nombre: "Maximiliano",
    cargo: "CEO de Segurline",
    texto: "Hicimos campañas de publicidad en redes sociales y Google Ads. Lucas se encargó de todo el diseño y la estrategia. Los resultados fueron excelentes.",
    whatsapp: "5491169799220",
    avatar: "/images/avatar-maxi.png",
    emoji: "💼"
  },
  {
    nombre: "Verónica",
    cargo: "Salón de Belleza",
    texto: "Un genio, Lucas! Me ayudó a crear la página de Instagram y a hacer los diseños para las promociones. Tambien, se encargó de la publicidad en redes sociales. Estoy muy contenta con el resultado.",
    whatsapp: "5491122512637",
    avatar: "/images/avatar-vero.png",
    emoji: "💅"
  },
  {
    nombre: "Giselle",
    cargo: "Estética Arum",
    texto: "Muy prolijo. Me hizo los posteos, flyers, y hasta un video para TikTok. Me encantó el resultado! Siempre con buena onda y buena predisposición.",
    whatsapp: "5491149460114",
    avatar: "/images/avatar-gise.png",
    emoji: "🌸"
  },
  {
    nombre: "Pablo",
    cargo: "Ex compañero - Segurline",
    texto: "Lucas siempre está predispuesto a ayudar y a dar una mano. Un gran compañero y amigo. Lo recomiendo al 100% 👌",
    whatsapp: "5491136397426",
    avatar: "/images/avatar-pablo.png",
    emoji: "🤝"
  },
  {
    nombre: "Ezequiel",
    cargo: "Ex compañero - Segurline",
    texto: "Siempre con buena onda y mucha paciencia. Me enseñó a usar Canva y a hacer videos. Un genio! 🙌",
    whatsapp: "5491123950996",
    avatar: "/images/avatar-toni.png",
    emoji: "🙌"
  }
].map((t, i) => (

  <SwiperSlide key={i}>
    <motion.div
      className="h-full bg-white/60 backdrop-blur-lg rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col justify-between"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-3">
        <Image
          src={t.avatar}
          alt={t.nombre}
          width={48}
          height={48}
          className="rounded-full object-cover border-2 border-purple-300 shadow-sm"
        />
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400" />
          ))}
        </div>
      </div>

      <div className="mb-3">
        <div className="font-semibold text-gray-900 text-sm">{t.nombre}</div>
        <div className="text-xs text-gray-600">{t.cargo}</div>
      </div>

      <p className="text-gray-800 text-[15px] leading-relaxed font-poppins mb-4 min-h-[80px]">
        <span className="text-lg mr-1">{t.emoji}</span>
        {t.texto}
      </p>

      <a
        href={`https://api.whatsapp.com/send?phone=${t.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block px-3 py-1.5 bg-green-100 text-green-800 text-xs rounded-full font-medium hover:bg-green-500 hover:text-white transition-all text-center"
      >
        Contactar por WhatsApp
      </a>
    </motion.div>
  </SwiperSlide>
))}

    
    </Swiper>
  </div>
</section>




      {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-br from-white to-gray-50 relative">
  <div className="container mx-auto px-4 md:px-6">
    <SectionTitle subtitle="¿Querés potenciar tu marca o negocio? Hablemos de cómo puedo ayudarte a lograr resultados concretos.">
      Contacto
    </SectionTitle>

    <motion.div
      className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Burbuja de fondo animada */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* EMAIL */}
        <motion.a
          href="mailto:gattilucas2810@gmail.com"
          className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
            <Mail className="text-purple-600" size={20} />
          </div>
          <div>
            <span className="block text-sm text-gray-500 mb-1 font-poppins">Email</span>
            <span className="text-gray-900 font-medium font-poppins">gattilucas2810@gmail.com</span>
          </div>
        </motion.a>

        {/* TELÉFONO */}
        <motion.a
          href="tel:1159454830"
          className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
            <Phone className="text-blue-600" size={20} />
          </div>
          <div>
            <span className="block text-sm text-gray-500 mb-1 font-poppins">Teléfono</span>
            <span className="text-gray-900 font-medium font-poppins">1159454830</span>
          </div>
        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          href="https://www.linkedin.com/in/lucas-gatti-a67713206/"
          className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
            <Linkedin className="text-gray-900" size={20} />
          </div>
          <div>
            <span className="block text-sm text-gray-500 mb-1 font-poppins">LinkedIn</span>
            <span className="text-gray-900 font-medium font-poppins">Perfil de LinkedIn</span>
          </div>
        </motion.a>

        {/* WHATSAPP */}
        <motion.a
          href="https://api.whatsapp.com/send/?phone=5491159454830"
          className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300 group"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.975 7.975 0 0 0 8 0a7.978 7.978 0 0 0-6.842 11.953L0 16l4.193-1.12A7.974 7.974 0 0 0 8 16c4.418 0 8-3.582 8-8 0-2.121-.836-4.134-2.399-5.674zM8 14.5c-1.363 0-2.695-.387-3.841-1.117l-.274-.169-2.487.665.664-2.426-.178-.283A6.473 6.473 0 0 1 1.5 8a6.5 6.5 0 1 1 6.5 6.5zm3.687-4.6c-.196-.098-1.157-.571-1.336-.636-.18-.065-.31-.098-.438.099-.129.196-.504.636-.617.765-.114.129-.227.147-.423.049-.196-.098-.827-.304-1.575-.971-.582-.518-.975-1.156-1.089-1.352-.114-.196-.012-.302.086-.4.088-.088.196-.229.294-.343.098-.114.13-.196.196-.327.065-.131.033-.245-.017-.343-.049-.098-.438-1.059-.6-1.456-.157-.376-.317-.325-.438-.331l-.374-.006c-.131 0-.343.049-.522.245s-.686.671-.686 1.635.702 1.897.8 2.029c.098.131 1.38 2.11 3.342 2.96.467.201.831.32 1.114.408.467.148.891.127 1.228.077.375-.056 1.157-.473 1.321-.93.163-.457.163-.848.114-.93-.048-.082-.178-.131-.374-.229z" />
            </svg>
          </div>
          <div>
            <span className="block text-sm text-gray-500 mb-1 font-poppins">WhatsApp</span>
            <span className="text-gray-900 font-medium font-poppins">Chat Directo</span>
          </div>
        </motion.a>
      </div>

      {/* Footer info con íconos */}
      <div className="mt-10 text-center relative z-10 space-y-2">
        <div className="flex items-center justify-center gap-2 text-gray-700 font-medium font-poppins">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-500" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a5 5 0 0 0-5 5c0 3.25 5 11 5 11s5-7.75 5-11a5 5 0 0 0-5-5zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          Ubicación: Ciudad Autónoma de Buenos Aires, Argentina
        </div>
        <div className="text-gray-500 text-sm font-poppins">
          Disponible para <span className="font-semibold text-gray-700">trabajo remoto</span> y <span className="font-semibold text-gray-700">presencial</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>
      {/* Footer */}
      <footer className="py-10 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold font-playfair mb-4">Lucas Gatti</h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6"></div>
            <p className="text-gray-300 font-poppins">Diseñador Digital & Marketing Specialist</p>
            <p className="text-gray-400 text-sm mt-6 font-poppins">
              © {new Date().getFullYear()} Lucas Gatti. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}
