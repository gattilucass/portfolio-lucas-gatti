"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Phone, ExternalLink, Play, FileText, TrendingUp, Palette, Film, Users, Code2, Zap, Globe, Bot, X, ChevronLeft, ChevronRight, Workflow, Sparkles, Scissors, Car, MessageSquare, MessageCircle, Clock, Video, Heart, Cpu, LayoutDashboard, Megaphone, Target, GraduationCap, BookOpen, BarChart3, Star, Monitor, Languages, Brain, Rocket, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import SectionTitle from "@/components/section-title"
import AnimatedCard from "@/components/animated-card"
import AnimatedCounter from "@/components/animated-counter"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingShapes from "@/components/floating-shapes"
import FloatingContact from "@/components/floating-contact"
import MoreCampaignsModal from "@/components/more-campaigns-modal"
import CVViewer from "@/components/cv-viewer"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState, useEffect, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import ClientModal from "@/components/client-modal";




export default function Home() {
  const [toolsOpen, setToolsOpen] = useState(false)
  const [showMoreProjects, setShowMoreProjects] = useState(false)
  const testimonialsSwiperRef = useRef<SwiperType | null>(null)
  const [moreProjectIdx, setMoreProjectIdx] = useState(0)

  // Bloquear scroll + ocultar navbar cuando el modal está abierto
  useEffect(() => {
    if (showMoreProjects) {
      document.body.style.overflow = "hidden"
      document.body.setAttribute("data-modal-open", "true")
    } else {
      document.body.style.overflow = ""
      document.body.removeAttribute("data-modal-open")
    }
    return () => {
      document.body.style.overflow = ""
      document.body.removeAttribute("data-modal-open")
    }
  }, [showMoreProjects])



  return (

    <main id="top" className="min-h-screen bg-white dark:bg-transparent overflow-hidden scroll-smooth">
      <CVViewer />
      <ScrollToTop />
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950 overflow-hidden">

        {/* Animated background blobs */}
        <div className="absolute top-1/4 left-[10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[110px] animate-pulse pointer-events-none" style={{ animationDelay: "1.8s" }} />

        <FloatingShapes />

        {/* Subtle pattern + vignette */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-pattern"></div>
        </div>
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10 py-24">

          {/* Nombre */}
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold font-playfair tracking-tight text-white mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Lucas Gatti
          </motion.h1>

          {/* Separador animado */}
          <motion.div
            className="h-[3px] w-36 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-9"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
            style={{ originX: 0.5 }}
          />

          {/* Headline — specialty pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.55 }}
          >
            {[
              { label: "Desarrollo Web", border: "border-purple-500/50", glow: "hover:border-purple-400/80 hover:shadow-purple-500/20" },
              { label: "Contenido Audiovisual", border: "border-blue-500/50", glow: "hover:border-blue-400/80 hover:shadow-blue-500/20" },
              { label: "Automatización con IA", border: "border-violet-500/50", glow: "hover:border-violet-400/80 hover:shadow-violet-500/20" },
            ].map(({ label, border, glow }, i) => (
              <motion.span
                key={label}
                className={`px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border ${border} ${glow} text-white/90 text-sm sm:text-base font-poppins font-medium tracking-wide transition-all duration-300 hover:shadow-lg cursor-default`}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.65 + i * 0.13, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl md:max-w-2xl mb-10 font-poppins leading-relaxed px-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: "easeOut" }}
          >
            Construyo lo que otros planifican.
            <br />
            Combino desarrollo web, video y automatización con IA para plasmar tu idea en un proyecto único.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 1.3, ease: "easeOut" }}
          >
            {/* Primario — shimmer + glow */}
            <Link
              href="#portfolio"
              className="relative overflow-hidden px-6 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium font-poppins w-full sm:w-64 flex items-center justify-center gap-2 group shadow-lg shadow-purple-900/50 hover:shadow-purple-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver mi trabajo
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Shimmer sweep */}
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full" />
            </Link>

            {/* Secundario — glass border glow */}
            <button
              onClick={() => document.getElementById("cv-viewer-btn")?.click()}
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-sm text-white border border-white/20 rounded-full font-medium font-poppins w-full sm:w-64 flex items-center justify-center gap-2 group hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              Ver mi CV
              <FileText size={17} className="group-hover:scale-110 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Scroll indicator — mouse wheel style */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Link
              href="#about"
              className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300 group"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase font-poppins">Scroll</span>
              <div className="w-6 h-10 border border-white/25 group-hover:border-white/50 rounded-full flex items-start justify-center pt-2 transition-colors duration-300">
                <motion.div
                  className="w-1 h-2 bg-white/70 rounded-full"
                  animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gradient bridge: Hero → About */}
      <div className="h-10 bg-gradient-to-b from-gray-950 to-white dark:from-gray-950 dark:to-transparent" />

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-transparent relative">
        {/* Blob decorativo de fondo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100/60 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/60 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle subtitle="Conocé mi experiencia, especialidades y las herramientas con las que trabajo">
            Sobre Mí
          </SectionTitle>

          {/* Párrafo principal — PLACEHOLDER (se reemplaza con variante elegida) */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 font-poppins leading-relaxed">
              Soy un profesional que combina{" "}
              <span className="font-semibold text-purple-700 dark:text-purple-400">desarrollo web</span>,{" "}
              <span className="font-semibold text-purple-700 dark:text-purple-400">creación de contenido audiovisual</span>{" "}
              y{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">automatización con IA</span>.
              {" "}No solo planifico — ejecuto y entrego. Desde desarrollo web hasta bots de WhatsApp con n8n, si un proyecto necesita funcionar y verse bien, me encargo de punta a punta.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-center">

            {/* Imagen */}
            <motion.div
              className="w-full lg:w-1/3 flex justify-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <div className="relative w-[260px] sm:w-[300px] md:w-[340px] h-[400px] sm:h-[450px] group transition-transform duration-500 hover:scale-[1.02]">
                {/* Marco gradiente animado */}
                <div className="absolute -inset-[3px] rounded-xl animate-border-gradient bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:300%_300%] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/images/lucas-gatti-sinfondo.png"
                  alt="Lucas Gatti"
                  width={340}
                  height={450}
                  className="relative z-10 object-cover rounded-xl w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Cards grid */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">

              {/* Experiencia */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AnimatedCard className="h-full bg-gray-50 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Clock size={24} className="text-purple-500" />
                    Experiencia
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 font-poppins space-y-2.5 text-sm leading-normal text-left">
                    <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">+5 años combinando marketing, desarrollo web y automatización.</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">Desarrollo de sitios y apps con <strong>Next.js</strong>, Tailwind y Vercel.</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">Automatización de flujos con <strong>n8n</strong>, Supabase, APIs y bots de WhatsApp.</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">Producción audiovisual: Reels, TikToks, edición y calendarios de contenido.</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">Gestión de CRM (Zoho + Woztell) y estrategia de comunicación.</span></li>
                  </ul>
                </AnimatedCard>
              </motion.div>

              {/* Especialidad */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AnimatedCard className="h-full bg-gray-50 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Target size={24} className="text-blue-500" />
                    Especialidad
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-poppins text-sm leading-relaxed mb-4">
                    Impulso negocios con estrategias planificadas. Combino <strong>contenido orgánico</strong>, desarrollo web, automatización de procesos y software a medida para que cada proyecto tenga presencia, alcance y tecnología de su lado.
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 font-poppins space-y-2 text-sm text-left">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">Diseño la estrategia, escribo el código y edito el video. Sin intermediarios.</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">Trabajo orientado a entregas precisas.</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">▸</span><span className="min-w-0">Cada proceso repetitivo es una automatización esperando ser creada.</span></li>
                  </ul>
                  <Link
                    href="#portfolio"
                    className="mt-5 inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-2 transition-all duration-200 font-poppins group"
                  >
                    Ver proyectos
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </AnimatedCard>
              </motion.div>

              {/* Herramientas */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AnimatedCard className="h-full bg-gray-50 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm border-l-4 border-purple-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Cpu size={24} className="text-purple-500" />
                    Herramientas
                  </h3>

                  {/* Grid de 6 íconos preview */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "Next.js", file: "nextdotjs", ext: "png" },
                      { name: "n8n", file: "n8n", ext: "svg" },
                      { name: "Adobe Premiere", file: "adobepremierepro", ext: "png" },
                      { name: "Canva", file: "canva", ext: "png" },
                      { name: "Figma", file: "figma", ext: "png" },
                      { name: "Notion", file: "notion", ext: "png" },
                    ].map(({ name, file, ext }) => (
                      <figure
                        key={name}
                        title={name}
                        className="flex flex-col items-center text-center group/tool cursor-default"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-slate-700 shadow-sm group-hover/tool:shadow-md group-hover/tool:scale-110 group-hover/tool:-translate-y-0.5 transition-all duration-200">
                          <img
                            src={`/icons/herramientas/${file}.${ext}`}
                            alt={name}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <figcaption className="mt-1.5 text-[10px] font-poppins text-gray-500 dark:text-gray-400 leading-tight">{name}</figcaption>
                      </figure>
                    ))}
                  </div>

                  <div className="flex justify-center mt-5">
                    <button
                      onClick={() => setToolsOpen(true)}
                      className="px-4 py-1.5 text-sm bg-purple-600 hover:bg-purple-700 active:scale-95 text-white rounded-full font-poppins font-medium transition-all duration-200"
                    >
                      Ver todas
                    </button>
                  </div>
                </AnimatedCard>
              </motion.div>

              {/* Resultados preview */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AnimatedCard className="h-full bg-gray-50 dark:bg-slate-800/60 p-6 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <TrendingUp size={24} className="text-blue-500" />
                    Resultados
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 font-poppins space-y-2.5 text-sm leading-normal text-left">
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">▸</span><span className="min-w-0"><strong>+500 hs</strong> ahorradas en automatización de procesos.</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">▸</span><span className="min-w-0"><strong>+15 proyectos web</strong> entregados en producción.</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">▸</span><span className="min-w-0"><strong>8 bots y flujos</strong> automatizados activos.</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5 shrink-0">▸</span><span className="min-w-0"><strong>+10k seguidores</strong> orgánicos gestionados.</span></li>
                  </ul>
                  <Link
                    href="#results"
                    className="mt-5 inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-2 transition-all duration-200 font-poppins group"
                  >
                    Ver todos los resultados
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                </AnimatedCard>
              </motion.div>

            </div>{/* /cards grid */}
          </div>{/* /flex row */}

          {/* Formación y Estudios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-14"
          >
            <div className="w-full max-w-4xl mx-auto p-7 md:p-9 bg-gray-50 dark:bg-slate-800/60 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-playfair mb-2 flex items-center justify-center gap-2.5">
                  <GraduationCap size={28} className="text-purple-500" />
                  Formación y Estudios
                </h3>
                <span className="block w-12 h-[3px] mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Columna izquierda: Formación completada */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white font-poppins uppercase tracking-wider">Formación completada</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Técnico en Informática",
                        place: "E.E.S.T. N°6 — Morón, Buenos Aires",
                        year: "2019",
                        icon: Monitor,
                        color: "purple",
                      },
                      {
                        title: "IA Generativa y Productividad",
                        place: "Udemy — ChatGPT, Notion AI, automatización",
                        year: "2024",
                        icon: Brain,
                        color: "violet",
                      },
                      {
                        title: "Marketing Digital",
                        place: "Edutin Academy — Estrategia, campañas y métricas",
                        year: "2022",
                        icon: Megaphone,
                        color: "blue",
                      },
                      {
                        title: "Análisis de Datos",
                        place: "Google / Coursera — Fundamentos y visualización",
                        year: "2023",
                        icon: BarChart3,
                        color: "emerald",
                      },
                      {
                        title: "Diseño Gráfico y Edición",
                        place: "Edutin Academy — Photoshop, Illustrator, Premiere",
                        year: "2022",
                        icon: Palette,
                        color: "pink",
                      },
                    ].map(({ title, place, year, icon: ItemIcon, color }) => {
                      const colorMap: Record<string, { bg: string; text: string; badge: string; badgeText: string }> = {
                        purple: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-600 dark:text-purple-400", badge: "bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800", badgeText: "text-purple-700 dark:text-purple-300" },
                        violet: { bg: "bg-violet-100 dark:bg-violet-900/30", text: "text-violet-600 dark:text-violet-400", badge: "bg-violet-100 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800", badgeText: "text-violet-700 dark:text-violet-300" },
                        blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", badge: "bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800", badgeText: "text-blue-700 dark:text-blue-300" },
                        emerald: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-600 dark:text-emerald-400", badge: "bg-emerald-100 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800", badgeText: "text-emerald-700 dark:text-emerald-300" },
                        pink: { bg: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-600 dark:text-pink-400", badge: "bg-pink-100 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800", badgeText: "text-pink-700 dark:text-pink-300" },
                      }
                      const c = colorMap[color]
                      return (
                        <div key={title} className="flex items-start gap-3 group">
                          <div className={`w-9 h-9 shrink-0 rounded-lg ${c.bg} flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-200`}>
                            <ItemIcon size={16} className={c.text} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <p className="text-sm font-semibold text-gray-900 dark:text-white font-poppins">{title}</p>
                              <span className={`text-[10px] font-semibold font-poppins px-2 py-0.5 rounded-full border ${c.badge} ${c.badgeText}`}>{year}</span>
                            </div>
                            <p className="text-[12px] text-gray-500 dark:text-gray-400 font-poppins leading-relaxed mt-0.5">{place}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Columna derecha: En curso */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Rocket size={16} className="text-amber-500" />
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white font-poppins uppercase tracking-wider">En curso</h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Inglés — Nivel intermedio/avanzado",
                        place: "Perfeccionamiento activo para comunicación profesional",
                        icon: Languages,
                        color: "amber",
                      },
                      {
                        title: "LLMs e Inteligencia Artificial",
                        place: "Modelos de lenguaje, prompt engineering, APIs de IA",
                        icon: Brain,
                        color: "violet",
                      },
                      {
                        title: "Full Stack Development",
                        place: "Profundización en backend, bases de datos y arquitectura",
                        icon: Code2,
                        color: "blue",
                      },
                    ].map(({ title, place, icon: ItemIcon, color }) => {
                      const colorMap: Record<string, { bg: string; text: string; pulse: string }> = {
                        amber: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-600 dark:text-amber-400", pulse: "bg-amber-500" },
                        violet: { bg: "bg-violet-100 dark:bg-violet-900/30", text: "text-violet-600 dark:text-violet-400", pulse: "bg-violet-500" },
                        blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-600 dark:text-blue-400", pulse: "bg-blue-500" },
                      }
                      const c = colorMap[color]
                      return (
                        <div key={title} className="flex items-start gap-3 group">
                          <div className={`w-9 h-9 shrink-0 rounded-lg ${c.bg} flex items-center justify-center mt-0.5 relative group-hover:scale-110 transition-transform duration-200`}>
                            <ItemIcon size={16} className={c.text} />
                            {/* Pulse indicator */}
                            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${c.pulse} opacity-75`} />
                              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${c.pulse}`} />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white font-poppins">{title}</p>
                            <p className="text-[12px] text-gray-500 dark:text-gray-400 font-poppins leading-relaxed mt-0.5">{place}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Mini frase motivacional */}
                  <div className="mt-5 p-3.5 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/15 dark:to-blue-900/15 rounded-xl border border-purple-100 dark:border-purple-800/30">
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 font-poppins italic leading-relaxed">
                      &ldquo;Siempre estoy aprendiendo algo nuevo. La tecnología avanza rápido y me gusta mantenerme al día para ofrecer lo mejor en cada proyecto.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>{/* /container */}
      </section>

      {/* Modal de herramientas — fuera de la section para evitar overflow */}
      {toolsOpen && (
        <ClientModal isOpen={toolsOpen} onRequestClose={() => setToolsOpen(false)}>
          <h2 className="text-xl font-semibold mb-1 text-center font-playfair">Todas las herramientas</h2>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 font-poppins mb-6">Plataformas y tecnologías que domino</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
            {[
              { name: "Adobe Photoshop", file: "adobephotoshop", ext: "png" },
              { name: "Adobe Premiere", file: "adobepremierepro", ext: "png" },
              { name: "Adobe Illustrator", file: "adobeillustrator", ext: "png" },
              { name: "Canva", file: "canva", ext: "png" },
              { name: "Figma", file: "figma", ext: "png" },
              { name: "Notion", file: "notion", ext: "png" },
              { name: "Excel", file: "microsoftexcel", ext: "png" },
              { name: "Visual Studio Code", file: "visualstudio", ext: "png" },
              { name: "Zoho CRM", file: "zoho", ext: "png" },
              { name: "Google Ads", file: "googleads", ext: "png" },
              { name: "Meta Ads", file: "facebook", ext: "png" },
              { name: "Next.js", file: "nextdotjs", ext: "png" },
              { name: "n8n", file: "n8n", ext: "svg" },
              { name: "Supabase", file: "supabase", ext: "svg" },
            ].map(({ name, file, ext }) => (
              <div
                key={name}
                className="flex flex-col items-center text-center group/modal cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-slate-700 shadow-sm group-hover/modal:shadow-md group-hover/modal:scale-110 group-hover/modal:-translate-y-0.5 transition-all duration-200">
                  <img
                    src={`/icons/herramientas/${file}.${ext}`}
                    alt={name}
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <span className="mt-2 text-xs font-poppins text-gray-700 dark:text-gray-300 text-center leading-tight">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <button
              onClick={() => setToolsOpen(false)}
              className="px-6 py-2 bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded-full text-sm font-poppins font-medium text-gray-700 dark:text-gray-200 transition-all duration-200 active:scale-95"
            >
              Cerrar
            </button>
          </div>
        </ClientModal>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-transparent relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle subtitle="Conocimientos y capacidades que aporto a cada proyecto">
            Mis Habilidades
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {([
              {
                title: "Marketing Digital",
                Icon: TrendingUp,
                accent: "purple",
                skills: [
                  "Estrategia digital y contenido orgánico",
                  "Planificación y calendario editorial",
                  "Segmentación y A/B tests",
                  "Meta Ads & Google Ads",
                ],
              },
              {
                title: "Diseño Gráfico",
                Icon: Palette,
                accent: "blue",
                skills: [
                  "Posts, Stories y Reels",
                  "Banners, flyers e identidad",
                  "Identidad de marca",
                  "Animaciones y motion",
                ],
              },
              {
                title: "Creación de Contenido",
                Icon: Film,
                accent: "violet",
                skills: [
                  "Edición TikTok/Instagram",
                  "Storytelling y guiones",
                  "Producción audiovisual",
                  "Calendarios de contenido",
                  "IA generativa para contenido",
                ],
              },
              {
                title: "Gestión de CRM",
                Icon: Users,
                accent: "blue",
                skills: [
                  "Zoho CRM y Woztell",
                  "Embudos y seguimiento de leads",
                  "Segmentación de contactos",
                  "Análisis y reportes",
                ],
              },
              {
                title: "Web y Landing Pages",
                Icon: Code2,
                accent: "purple",
                skills: [
                  "Next.js + Tailwind CSS",
                  "Supabase & APIs REST",
                  "Deploy en Vercel",
                  "SEO On-Page",
                ],
              },
              {
                title: "Automatización & IA",
                Icon: Zap,
                accent: "violet",
                skills: [
                  "Workflows con n8n",
                  "Bots de WhatsApp",
                  "Integración de APIs",
                  "Automatización de procesos",
                ],
              },
            ] as const).map(({ title, Icon, accent, skills }, i) => {
              const accentMap = {
                purple: {
                  border: "border-purple-500",
                  iconBg: "bg-purple-100 dark:bg-purple-900/30",
                  iconColor: "text-purple-600 dark:text-purple-400",
                  dot: "text-purple-500",
                  glow: "hover:shadow-purple-500/10",
                },
                blue: {
                  border: "border-blue-500",
                  iconBg: "bg-blue-100 dark:bg-blue-900/30",
                  iconColor: "text-blue-600 dark:text-blue-400",
                  dot: "text-blue-500",
                  glow: "hover:shadow-blue-500/10",
                },
                violet: {
                  border: "border-violet-500",
                  iconBg: "bg-violet-100 dark:bg-violet-900/30",
                  iconColor: "text-violet-600 dark:text-violet-400",
                  dot: "text-violet-500",
                  glow: "hover:shadow-violet-500/10",
                },
              }
              const c = accentMap[accent]
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: 0.08 * i, ease: "easeOut" }}
                  className={`group bg-white dark:bg-slate-800 p-6 md:p-7 rounded-2xl shadow-sm border-t-4 ${c.border} hover:shadow-xl ${c.glow} hover:-translate-y-1.5 transition-all duration-300 flex flex-col`}
                >
                  {/* Ícono */}
                  <div className={`w-11 h-11 mb-5 flex items-center justify-center rounded-xl ${c.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className={c.iconColor} />
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-playfair font-semibold text-gray-900 dark:text-white mb-3">
                    {title}
                  </h3>

                  {/* Bullets */}
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 font-poppins text-sm leading-normal text-left flex-1">
                    {skills.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className={`${c.dot} mt-[3px] shrink-0 text-xs`}>▸</span>
                        <span className="min-w-0">{s}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-white dark:bg-transparent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-300/8 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/8 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle subtitle="Desarrollo web, automatización e impacto audiovisual">
            Proyectos Destacados
          </SectionTitle>

          <div className="space-y-14">

            {/* ─── PROYECTO 1: Bot de WhatsApp EFEMAQ ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="group/card bg-white dark:bg-slate-800/60 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-emerald-500/5 dark:hover:shadow-emerald-500/10 transition-all duration-400 border border-gray-100 dark:border-slate-700/50 hover:border-emerald-200 dark:hover:border-emerald-800/50 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Demo teléfono */}
                <div className="lg:w-5/12 flex items-center justify-center p-6 md:p-10 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12)_0%,transparent_70%)] pointer-events-none" />
                  <div className="relative w-[220px] sm:w-[240px] bg-[#0a0a0a] rounded-[2rem] border-[5px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col aspect-[9/18]">
                    <div className="px-5 pt-2.5 pb-1.5 flex justify-between items-center text-white/80 bg-[#111]/95 text-[9px] font-medium">
                      <span>9:41</span>
                      <div className="flex items-center gap-1 opacity-70"><div className="w-3 h-2 border border-white/60 rounded-sm relative"><div className="absolute right-0.5 top-0.5 bottom-0.5 left-1 bg-white/60 rounded-sm" /></div></div>
                    </div>
                    <div className="bg-[#111]/95 border-b border-white/5 px-4 pb-2.5 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center"><Bot size={14} className="text-white" /></div>
                      <div>
                        <p className="text-white text-[11px] font-bold">EFEMAQ</p>
                        <div className="flex items-center gap-1"><span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-500 opacity-75" /><span className="relative rounded-full h-1.5 w-1.5 bg-emerald-500" /></span><span className="text-gray-400 text-[8px]">En línea</span></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#0a0a0a] p-3 flex flex-col gap-2 overflow-hidden text-[10px] leading-snug">
                      <div className="self-end px-3 py-1.5 rounded-2xl rounded-tr-sm bg-emerald-700 text-white max-w-[80%]">Hola</div>
                      <div className="self-start px-3 py-2 rounded-2xl rounded-tl-sm bg-[#1a1a1a] border border-white/5 text-gray-200 max-w-[85%]">Hola, soy Maqui tu asistente virtual. Elegí una opción:</div>
                      <div className="self-start grid grid-cols-2 gap-1.5 max-w-[85%]">
                        {[{ l: "Agua", c: "text-blue-400" }, { l: "Eléctrico", c: "text-yellow-400" }, { l: "Gas", c: "text-orange-400" }, { l: "Accesos", c: "text-purple-400" }].map((o) => (<div key={o.l} className="flex items-center justify-center px-2 py-1.5 rounded-lg bg-[#1a1a1a] border border-white/5"><span className={`${o.c} text-[9px] font-medium`}>{o.l}</span></div>))}
                      </div>
                      <div className="self-end px-3 py-1.5 rounded-2xl rounded-tr-sm bg-emerald-700 text-white max-w-[80%]">Agua / Desagües</div>
                      <div className="self-start px-3 py-2 rounded-2xl rounded-tl-sm bg-[#1a1a1a] border border-white/5 text-gray-200 max-w-[85%]">Enviame descripción y foto.</div>
                      <div className="self-end px-3 py-1.5 rounded-2xl rounded-tr-sm bg-emerald-700 text-white max-w-[80%]">Gotera en el hall</div>
                      <div className="self-start px-3 py-2 rounded-2xl rounded-tl-sm bg-[#0a2215] border-l-2 border-l-emerald-500 text-gray-200 max-w-[85%]">Ticket <strong className="text-white">#4590</strong> generado. Técnico en camino.</div>
                    </div>
                    <div className="bg-[#111] border-t border-white/5 px-3 py-2.5 flex items-center gap-2">
                      <div className="flex-1 bg-[#1a1a1a] rounded-full px-3 py-1.5 text-[9px] text-gray-500">Escribí un mensaje...</div>
                      <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center"><ArrowRight size={10} className="text-white" /></div>
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="lg:w-7/12 p-7 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform cursor-default">
                      <Workflow size={13} /> Automatización
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform cursor-default">
                      24/7
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
                    Bot de WhatsApp para Emergencias — EFEMAQ
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-poppins text-[15px] leading-relaxed mb-7">
                    Bot automatizado con n8n que recibe reportes de emergencias de mantenimiento edilicio por WhatsApp, clasifica la urgencia y despacha técnicos. Funciona las 24 horas, los 7 días.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    {[
                      { label: "Rol", value: "Desarrollo completo del flujo n8n + integración Twilio", icon: Code2 },
                      { label: "Resultado", value: "Automatización completa del proceso de emergencias", icon: Zap },
                    ].map((d) => (
                      <div key={d.label} className="bg-gray-50 dark:bg-slate-700/40 rounded-xl p-4 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors duration-200">
                        <div className="flex items-center gap-2 mb-2">
                          <d.icon size={15} className="text-emerald-600 dark:text-emerald-400" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-white font-poppins">{d.label}</span>
                        </div>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-relaxed">{d.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {["n8n", "Twilio", "Google Sheets", "Redis"].map((t) => (
                      <span key={t} className="px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 text-[13px] font-medium font-poppins border border-gray-200 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200 cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5491159454830?text=Hola%20Lucas!%20Quiero%20probar%20el%20bot%20de%20WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-poppins text-[15px] font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] w-fit"
                  >
                    <MessageSquare size={18} /> Quiero probarlo
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ─── PROYECTO 2: Sitio Web EFEMAQ ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group/card bg-white dark:bg-slate-800/60 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-all duration-400 border border-gray-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row-reverse">
                {/* Preview imagen */}
                <div className="lg:w-5/12 relative overflow-hidden min-h-[300px] lg:min-h-0 border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30">
                  <Image
                    src="/screenshotefemaq.png"
                    alt="Sitio web de EFEMAQ"
                    fill
                    className="object-contain p-4 md:p-8 transition-transform duration-700 group-hover/card:scale-105"
                  />
                </div>
                {/* Info */}
                <div className="lg:w-7/12 p-7 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform cursor-default">
                      <Globe size={13} /> Desarrollo Web
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform cursor-default">
                      <TrendingUp size={13} /> SEO
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
                    Sitio Web Corporativo — efemaq.com.ar
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-poppins text-[15px] leading-relaxed mb-7">
                    Diseño y desarrollo del sitio web institucional para EFEMAQ, empresa de mantenimiento edilicio. Arquitectura optimizada para cargas ultrarrápidas y posicionamiento en búsquedas locales.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    {[
                      { label: "Performance", value: "JSON-LD, metadata estructurada, sitemaps y SEO local", icon: TrendingUp },
                      { label: "Resultado", value: "Presencia web profesional con carga ultrarrápida", icon: Zap },
                    ].map((d) => (
                      <div key={d.label} className="bg-gray-50 dark:bg-slate-700/40 rounded-xl p-4 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors duration-200">
                        <div className="flex items-center gap-2 mb-2">
                          <d.icon size={15} className="text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-white font-poppins">{d.label}</span>
                        </div>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-relaxed">{d.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Framer Motion", "Lenis"].map((t) => (
                      <span key={t} className="px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 text-[13px] font-medium font-poppins border border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://efemaq.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins text-[15px] font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] w-fit"
                  >
                    <Globe size={18} /> Visitar sitio
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ─── PROYECTO 3: Video Colapinto ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group/card bg-white dark:bg-slate-800/60 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 transition-all duration-400 border border-gray-100 dark:border-slate-700/50 hover:border-purple-200 dark:hover:border-purple-800/50 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Video vertical — fondo con degradado púrpura */}
                <div className="lg:w-5/12 bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950 flex items-center justify-center px-6 py-8 relative overflow-hidden" style={{ minHeight: "500px" }}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.1)_0%,transparent_70%)] pointer-events-none" />
                  <div className="relative w-[320px] h-[650px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 shrink-0">
                    <iframe
                      src="https://www.tiktok.com/embed/v2/7429547977884142854"
                      style={{ position: 'absolute', top: 0, left: 0, width: '325px', height: '739px', border: 'none', transform: 'scale(0.9846)', transformOrigin: 'top left' }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Info — contenido enriquecido */}
                <div className="lg:w-7/12 p-7 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform cursor-default">
                      <Film size={13} /> Contenido Audiovisual
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform cursor-default">
                      <TrendingUp size={13} /> Viral
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
                    Video Viral TikTok — Motivacional (Colapinto)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-poppins text-[15px] leading-relaxed mb-6">
                    Video motivacional con más de 160.000 visualizaciones orgánicas en TikTok, generando fuerte reconocimiento de marca, engagement segmentado y nuevos seguidores para la cuenta de Segurline.
                  </p>
                  {/* Métricas expandidas */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">
                    {[
                      { n: "168K", l: "Vistas" },
                      { n: "12K", l: "Likes" },
                      { n: "657", l: "Guardados" },
                      { n: "+820", l: "Seguidores nuevos" },
                    ].map((s) => (
                      <div key={s.l} className="text-center bg-gray-50 dark:bg-slate-700/40 rounded-xl py-3 px-2 group-hover/card:bg-purple-50 dark:group-hover/card:bg-purple-900/10 transition-colors duration-300">
                        <p className="text-xl font-bold text-purple-600 dark:text-purple-400 font-poppins">{s.n}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-poppins mt-0.5">{s.l}</p>
                      </div>
                    ))}
                  </div>
                  {/* Detalles expandidos */}
                  <div className="grid grid-cols-2 gap-3 mb-7">
                    {[
                      { label: "Rol", value: "Edición, guión, efectos, voz IA y producción total", icon: Film },
                      { label: "Herramientas", value: "Premiere Pro, CapCut, IA de voz", icon: Palette },
                      { label: "Impacto comercial", value: "Aumentó consultas de seguros en un 35% esa semana", icon: TrendingUp },
                      { label: "Coordinación", value: "Alineado con el equipo de marketing de Segurline", icon: Users },
                    ].map((d) => (
                      <div key={d.label} className="bg-gray-50 dark:bg-slate-700/40 rounded-xl p-4 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors duration-200">
                        <div className="flex items-center gap-2 mb-2">
                          <d.icon size={15} className="text-purple-600 dark:text-purple-400" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-white font-poppins">{d.label}</span>
                        </div>
                        <p className="text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-relaxed">{d.value}</p>
                      </div>
                    ))}
                  </div>
                  <a href="https://www.tiktok.com/@segurline/video/7429547977884142854" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-poppins text-[15px] font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] w-fit">
                    <Play size={18} /> Ver en TikTok
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Botón Ver más proyectos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => { setShowMoreProjects(true); setMoreProjectIdx(0); }}
              aria-label="Ver más proyectos"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-poppins font-semibold text-[15px] hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 border border-gray-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-xl hover:shadow-purple-500/10 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
            >
              Ver más proyectos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal: Más Proyectos (4 tabs) */}
      {showMoreProjects && (
        <div className="fixed inset-0 z-[1999] flex items-center justify-center p-3 sm:p-4 md:p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setShowMoreProjects(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-5xl z-[2000] border border-gray-200 dark:border-slate-700 flex flex-col"
          >
            <button onClick={() => setShowMoreProjects(false)} className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 dark:bg-slate-700/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              <X size={16} />
            </button>

            {/* Tabs header */}
            <div className="px-4 sm:px-6 pt-4 pb-3 border-b border-gray-100 dark:border-slate-700 shrink-0">
              <h3 className="text-lg font-playfair font-bold text-gray-900 dark:text-white mb-2">Más Proyectos</h3>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { name: "Diseño Estética", icon: Scissors },
                  { name: "Video Promo", icon: Film },
                  { name: "Onda — IA", icon: Sparkles },
                  { name: "Volkswagen ID.4", icon: Car },
                ].map(({ name, icon: TabIcon }, idx) => (
                  <button key={name} onClick={() => setMoreProjectIdx(idx)} className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-poppins font-semibold px-2.5 sm:px-3 py-1.5 rounded-full transition-all duration-200 ${moreProjectIdx === idx ? "bg-purple-600 text-white shadow-md shadow-purple-500/20" : "bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600"}`}>
                    <TabIcon size={11} /> {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Content — STRICTLY fixed height: shrink-0 + h-[420px] so ALL tabs are identical */}
            <div className="shrink-0 overflow-y-auto lg:overflow-hidden h-auto lg:h-[420px] px-4 sm:px-6 py-4">

              {/* Tab 0: Centro de Estética */}
              {moreProjectIdx === 0 && (
                <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[388px]">
                  {/* Visual: 2 tall portrait photos side by side */}
                  <div className="lg:w-[42%] flex gap-2.5 h-[320px] lg:h-full">
                    {[1, 2].map((n) => (
                      <a
                        key={n}
                        href={`/images/estetica-${n}.jpg`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex-1 rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 shadow-md ring-1 ring-pink-100 dark:ring-pink-900/20 transition-all duration-300"
                      >
                        {/* Imagen con efecto de zoom */}
                        <Image
                          src={`/images/estetica-${n}.jpg`}
                          alt={`Diseño estética ${n}`}
                          fill
                          className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                        />

                        {/* Overlay de oscuridad y texto al pasar el mouse */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-white text-[10px] font-poppins font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-pink-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
                            Ver diseño completo
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Info - Esta parte se mantiene igual para no romper el diseño derecho */}
                  <div className="lg:w-[58%] flex flex-col justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 text-xs font-semibold font-poppins mb-2 w-fit hover:scale-105 transition-transform">
                      <Palette size={11} /> Diseño Gráfico
                    </span>
                    <h4 className="text-base sm:text-lg font-playfair font-bold text-gray-900 dark:text-white mb-2">Centro de Estética</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-poppins text-[13px] leading-relaxed mb-2.5">Diseño completo de la identidad visual y materiales gráficos. Listas de precios, vouchers, fichas de anamnesis y tarjetas de presentación.</p>

                    <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                      {[
                        { label: "Rol", value: "Diseño gráfico", icon: Palette },
                        { label: "Materiales", value: "Listas, vouchers, fichas, tarjetas", icon: FileText },
                        { label: "Identidad", value: "Visual completa del centro", icon: Sparkles },
                        { label: "Resultado", value: "Brand coherente y profesional", icon: TrendingUp },
                      ].map((item) => (
                        <div key={item.label} className="bg-gray-50 dark:bg-slate-700/40 rounded-lg p-2.5 hover:bg-pink-50 dark:hover:bg-pink-900/10 transition-colors">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <item.icon size={12} className="text-pink-600 dark:text-pink-400" />
                            <span className="text-[11px] font-semibold text-gray-900 dark:text-white font-poppins">{item.label}</span>
                          </div>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["Photoshop", "Illustrator", "Canva", "Diseño editorial"].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 text-[11px] font-medium font-poppins border border-gray-200 dark:border-slate-600 hover:border-pink-300 dark:hover:border-pink-700 transition-colors cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a href="https://www.instagram.com/stories/highlights/17911840682582507/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white font-poppins text-sm font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:scale-[1.02] w-fit">
                      <ExternalLink size={14} /> Ver en Instagram
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 1: Video Promocional */}
              {moreProjectIdx === 1 && (
                <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[388px]">
                  {/* TikTok: iframe rendered at natural 325×739, scaled down via CSS transform so TikTok sees real dimensions and creates no internal scroll */}
                  <div className="lg:w-[42%] flex items-center justify-center h-[280px] lg:h-full">
                    <div className="w-[200px] h-full bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative mx-auto">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.08)_0%,transparent_70%)] pointer-events-none z-10" />
                      <iframe
                        src="https://www.tiktok.com/embed/v2/7431323291614301446"
                        style={{ position: 'absolute', top: 0, left: 0, width: '325px', height: '739px', border: 'none', transform: 'scale(0.615)', transformOrigin: 'top left' }}
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="lg:w-[58%] flex flex-col justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs font-semibold font-poppins mb-2 w-fit hover:scale-105 transition-transform"><Film size={11} /> Contenido Audiovisual</span>
                    <h4 className="text-base sm:text-lg font-playfair font-bold text-gray-900 dark:text-white mb-2">Video Promocional — Cotización de Autos</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-poppins text-[13px] leading-relaxed mb-2.5">Pieza promocional que combina creatividad visual con información funcional para guiar al usuario a cotizar su vehículo.</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                      {[
                        { label: "Enfoque", value: "Creatividad visual + info funcional", icon: Palette },
                        { label: "Resultado", value: "Impulsó tráfico al link de cotización", icon: TrendingUp },
                        { label: "Plataforma", value: "TikTok + redes de Segurline", icon: Film },
                        { label: "Objetivo", value: "Leads de cotización online", icon: Users },
                      ].map((d) => (
                        <div key={d.label} className="bg-gray-50 dark:bg-slate-700/40 rounded-lg p-2.5 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-colors">
                          <div className="flex items-center gap-1.5 mb-1"><d.icon size={12} className="text-purple-600 dark:text-purple-400" /><span className="text-[11px] font-semibold text-gray-900 dark:text-white font-poppins">{d.label}</span></div>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">{d.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["Canva", "Edición de video", "TikTok", "Motion graphics"].map((t) => (<span key={t} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 text-[11px] font-medium font-poppins border border-gray-200 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-700 transition-colors cursor-default">{t}</span>))}
                    </div>
                    <a href="https://www.tiktok.com/@segurline/video/7431323291614301446" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-poppins text-sm font-semibold shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] w-fit">
                      <Play size={14} /> Ver en TikTok
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 2: Onda */}
              {moreProjectIdx === 2 && (
                <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[388px]">
                  <div className="lg:w-[42%] flex flex-col gap-2 h-[280px] lg:h-full">
                    <div className="flex-1 bg-white dark:bg-slate-700 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-600 overflow-hidden flex flex-col">
                      <div className="bg-gray-100 dark:bg-slate-600 px-3 py-1.5 flex items-center gap-2 border-b border-gray-200 dark:border-slate-500 shrink-0">
                        <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-400" /><div className="w-2 h-2 rounded-full bg-yellow-400" /><div className="w-2 h-2 rounded-full bg-green-400" /></div>
                        <div className="flex-1 bg-white dark:bg-slate-700 rounded px-2 py-0.5 text-[9px] text-gray-500 dark:text-gray-400 font-mono">onda-project.vercel.app</div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-slate-950 via-gray-900 to-neutral-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
                        <Sparkles size={28} className="text-amber-400 mb-2" />
                        <p className="text-white text-base font-bold tracking-wide">ONDA</p>
                        <p className="text-gray-400 text-[10px] mt-1 text-center">Modelos IA · Lookbook Interactivo</p>
                        <div className="flex gap-2 mt-2.5"><div className="px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white text-[9px]">Mujer</div><div className="px-2 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[9px]">Hombre</div></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 shrink-0">
                      {["Lookbook", "Galería IA", "Switch M/F"].map((label) => (
                        <div key={label} className="bg-gradient-to-br from-slate-900 to-neutral-900 rounded-lg p-2 text-center border border-white/5">
                          <p className="text-amber-400 text-[10px] font-poppins font-semibold">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-[58%] flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform"><Sparkles size={11} /> IA Generativa</span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform"><Globe size={11} /> Web</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-playfair font-bold text-gray-900 dark:text-white mb-2">Onda — Lookbook con IA Generativa</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-poppins text-[13px] leading-relaxed mb-2.5">Proyecto de IA generativa para presentar una camisa. Página web con modelos creados por IA posando el producto, con fotos, videos y switch interactivo hombre/mujer.</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                      {[
                        { label: "Concepto", value: "Lookbook con modelos IA generativa", icon: Sparkles },
                        { label: "Interacción", value: "Switch hombre/mujer por talle", icon: Users },
                        { label: "Contenido", value: "Fotos y videos 100% generados por IA", icon: Film },
                        { label: "Stack", value: "Next.js, Tailwind CSS, Vercel", icon: Code2 },
                      ].map((item) => (
                        <div key={item.label} className="bg-gray-50 dark:bg-slate-700/40 rounded-lg p-2.5 hover:bg-amber-50 dark:hover:bg-amber-900/10 transition-colors">
                          <div className="flex items-center gap-1.5 mb-0.5"><item.icon size={12} className="text-amber-600 dark:text-amber-400" /><span className="text-[11px] font-semibold text-gray-900 dark:text-white font-poppins">{item.label}</span></div>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["Next.js", "Tailwind CSS", "IA Generativa", "Vercel"].map((t) => (<span key={t} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 text-[11px] font-medium font-poppins border border-gray-200 dark:border-slate-600 hover:border-amber-300 dark:hover:border-amber-700 transition-colors cursor-default">{t}</span>))}
                    </div>
                    <a href="https://onda-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-poppins text-sm font-semibold shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-[1.02] w-fit">
                      <Globe size={14} /> Visitar sitio
                    </a>
                  </div>
                </div>
              )}

              {/* Tab 3: Volkswagen ID.4 */}
              {moreProjectIdx === 3 && (
                <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-[388px]">
                  {/* Two horizontal landscape images stacked */}
                  <div className="lg:w-[42%] flex flex-col gap-2.5 h-[280px] lg:h-full">
                    <div className="relative flex-1 rounded-xl overflow-hidden shadow-xl group">
                      <Image src="/images/volkswagen-cover.jpg" alt="Volkswagen ID.4 Web" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <p className="text-white text-sm font-bold font-playfair">Volkswagen ID.4</p>
                        <p className="text-gray-300 text-[10px] font-poppins">Web conceptual con IA generativa</p>
                      </div>
                    </div>
                    <div className="relative flex-1 rounded-xl overflow-hidden shadow-xl group">
                      <Image src="/images/volkswagen-cover-2.jpg" alt="Volkswagen ID.4 detalle" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2.5 left-3 right-3">
                        <p className="text-white text-sm font-bold font-playfair">IA Generativa + Storytelling</p>
                        <p className="text-gray-300 text-[10px] font-poppins">Key visuals · Spot audiovisual · Prompts</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[58%] flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform"><Sparkles size={11} /> IA Generativa</span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold font-poppins hover:scale-105 transition-transform"><Car size={11} /> Automotriz</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-playfair font-bold text-gray-900 dark:text-white mb-2">Web con IA Generativa — Volkswagen ID.4</h4>
                    <p className="text-gray-600 dark:text-gray-400 font-poppins text-[13px] leading-relaxed mb-2.5">Sitio web conceptual integrando inteligencia artificial generativa para contenido visual, storytelling y experiencia transmedia.</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                      {[
                        { label: "Framework", value: "Next.js + Tailwind CSS" },
                        { label: "Hosting", value: "Deploy en Vercel" },
                        { label: "IA Generativa", value: "ChatGPT, Gemini, VEO 3, ElevenLabs" },
                        { label: "Contenido", value: "Key visuals, spot audiovisual, prompts" },
                      ].map((item) => (
                        <div key={item.label} className="bg-gray-50 dark:bg-slate-700/40 rounded-lg p-2.5 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                          <p className="text-[11px] font-semibold text-gray-900 dark:text-white font-poppins mb-0.5">{item.label}</p>
                          <p className="text-[11px] text-gray-600 dark:text-gray-400 font-poppins leading-snug">{item.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {["Next.js", "Tailwind", "Vercel", "ChatGPT", "VEO 3", "Gemini"].map((t) => (<span key={t} className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-gray-300 text-[11px] font-medium font-poppins border border-gray-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-700 transition-colors cursor-default">{t}</span>))}
                    </div>
                    <a href="https://volkswagen-project.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-poppins text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] w-fit">
                      <Globe size={14} /> Visitar Proyecto
                    </a>
                  </div>
                </div>
              )}

            </div>

            {/* Nav footer */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-t border-gray-100 dark:border-slate-700 shrink-0">
              <button onClick={() => setMoreProjectIdx(moreProjectIdx === 0 ? 3 : moreProjectIdx - 1)} className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-poppins font-medium transition-colors"><ChevronLeft size={16} /> Anterior</button>
              <div className="flex gap-1.5">
                {[0, 1, 2, 3].map((idx) => (<button key={idx} onClick={() => setMoreProjectIdx(idx)} className={`w-2 h-2 rounded-full transition-all duration-200 ${moreProjectIdx === idx ? "bg-purple-500 w-5" : "bg-gray-300 dark:bg-slate-600 hover:bg-gray-400"}`} />))}
              </div>
              <button onClick={() => setMoreProjectIdx(moreProjectIdx === 3 ? 0 : moreProjectIdx + 1)} className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-poppins font-medium transition-colors">Siguiente <ChevronRight size={16} /></button>
            </div>
          </motion.div>
        </div>
      )}
      {/* Ad Campaigns Section */}
      <section id="campaigns" className="py-16 bg-gray-50 dark:bg-transparent relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300/10 dark:bg-purple-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300/10 dark:bg-blue-800/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle subtitle="Diseños y estrategias para campañas publicitarias efectivas">
            Campañas Publicitarias
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Campaign 1 — Promo Otoño */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-500/5 dark:hover:shadow-purple-500/10 border border-gray-100 dark:border-slate-700/50 hover:border-purple-200 dark:hover:border-purple-800/50 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <video className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" controls preload="metadata" playsInline muted poster="/images/preview-otono.jpg">
                  <source src="/videos/promo-otono.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-purple-600 text-white text-[11px] font-bold font-poppins px-3 py-1 rounded-full shadow-md">Meta Ads</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold font-playfair text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                  Campaña &ldquo;Promo Otoño&rdquo;
                </h3>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-relaxed mb-4">Campaña temática para seguros de auto orientada a conductores de 25-40 años. Presupuesto diario ARS $3.000.</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 text-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <p className="text-xl font-bold text-purple-700 dark:text-purple-400 font-poppins">170</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-poppins mt-0.5">Leads/día</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <p className="text-xl font-bold text-blue-700 dark:text-blue-400 font-poppins">3.2%</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-poppins mt-0.5">CTR</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3 text-center hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors">
                    <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 font-poppins">$60</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-poppins mt-0.5">CPL prom.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Campaign 2 — Seguro Europa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 border border-gray-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300 group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <video className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" controls preload="metadata" playsInline muted poster="/images/preview-europa.jpg">
                  <source src="/videos/seguro-europa.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-3 left-3 z-10 flex gap-1.5">
                  <span className="bg-blue-600 text-white text-[11px] font-bold font-poppins px-3 py-1 rounded-full shadow-md">Google Ads</span>
                  <span className="bg-purple-600 text-white text-[11px] font-bold font-poppins px-3 py-1 rounded-full shadow-md">Meta Ads</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold font-playfair text-gray-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  Campaña &ldquo;Seguro de Viaje Europa&rdquo;
                </h3>
                <p className="text-[13px] text-gray-600 dark:text-gray-400 font-poppins leading-relaxed mb-4">Campaña estacional enfocada en temporada de vacaciones. Elementos visuales de viaje y seguridad. Presupuesto ARS $3.500/día.</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 text-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <p className="text-xl font-bold text-blue-700 dark:text-blue-400 font-poppins">+25%</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-poppins mt-0.5">Consultas</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-3 text-center hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                    <p className="text-xl font-bold text-purple-700 dark:text-purple-400 font-poppins">$3.5k</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-poppins mt-0.5">Inv./día</p>
                  </div>
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-3 text-center hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors">
                    <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 font-poppins">Multi</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-poppins mt-0.5">Plataforma</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MoreCampaignsModal />
          </motion.div>
        </div>
      </section>

      {/* Gradient bridge: Campaigns → Results */}
      <div className="h-10 bg-gradient-to-b from-gray-50 to-gray-950 dark:from-transparent dark:to-gray-950" />

      {/* Results & Metrics Section */}
      <section id="results" className="py-14 relative overflow-hidden">
        {/* Background — gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/80 to-gray-950" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionTitle light subtitle="Mi trabajo en números.">
            Resultados y Métricas
          </SectionTitle>
          {/* Metrics grid — 2 rows of 4 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-8">
            {[
              { end: 500, suffix: "+", label: "Horas ahorradas", desc: "Con automatizaciones y bots en producción", icon: Clock, color: "purple" },
              { end: 15, suffix: "+", label: "Proyectos web entregados", desc: "Landing pages, sitios y apps con Next.js", icon: Globe, color: "blue" },
              { end: 8, suffix: "", label: "Bots y flujos activos", desc: "WhatsApp bots, CRMs y workflows con n8n", icon: Bot, color: "emerald" },
              { end: 100, suffix: "%", label: "Clientes satisfechos", desc: "Recontrataciones y recomendaciones directas", icon: Heart, color: "rose" },
              { end: 300, suffix: "k+", label: "Vistas en videos", desc: "Contenido orgánico en TikTok e Instagram", icon: Video, color: "violet" },
              { end: 300, suffix: "+", label: "Piezas de contenido", desc: "Diseños, videos, reels y piezas publicitarias", icon: LayoutDashboard, color: "amber" },
              { end: 2, suffix: "seg", label: "Respuesta promedio", desc: "Tiempo de respuesta en bots automatizados", icon: Zap, color: "cyan" },
              { end: 10, suffix: "k+", label: "Seguidores gestionados", desc: "Cuentas de RRSS con crecimiento orgánico", icon: Users, color: "pink" },
            ].map(({ end, suffix, label, desc, icon: Icon, color }, idx) => {
              const colorMap: Record<string, { bg: string; iconBg: string; iconText: string; number: string; ring: string }> = {
                purple: { bg: "from-purple-500/10 to-purple-600/5", iconBg: "bg-purple-500/20", iconText: "text-purple-400", number: "text-purple-300", ring: "border-purple-500/20 hover:border-purple-500/40" },
                blue: { bg: "from-blue-500/10 to-blue-600/5", iconBg: "bg-blue-500/20", iconText: "text-blue-400", number: "text-blue-300", ring: "border-blue-500/20 hover:border-blue-500/40" },
                emerald: { bg: "from-emerald-500/10 to-emerald-600/5", iconBg: "bg-emerald-500/20", iconText: "text-emerald-400", number: "text-emerald-300", ring: "border-emerald-500/20 hover:border-emerald-500/40" },
                rose: { bg: "from-rose-500/10 to-rose-600/5", iconBg: "bg-rose-500/20", iconText: "text-rose-400", number: "text-rose-300", ring: "border-rose-500/20 hover:border-rose-500/40" },
                violet: { bg: "from-violet-500/10 to-violet-600/5", iconBg: "bg-violet-500/20", iconText: "text-violet-400", number: "text-violet-300", ring: "border-violet-500/20 hover:border-violet-500/40" },
                amber: { bg: "from-amber-500/10 to-amber-600/5", iconBg: "bg-amber-500/20", iconText: "text-amber-400", number: "text-amber-300", ring: "border-amber-500/20 hover:border-amber-500/40" },
                cyan: { bg: "from-cyan-500/10 to-cyan-600/5", iconBg: "bg-cyan-500/20", iconText: "text-cyan-400", number: "text-cyan-300", ring: "border-cyan-500/20 hover:border-cyan-500/40" },
                pink: { bg: "from-pink-500/10 to-pink-600/5", iconBg: "bg-pink-500/20", iconText: "text-pink-400", number: "text-pink-300", ring: "border-pink-500/20 hover:border-pink-500/40" },
              }
              const c = colorMap[color]
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`relative bg-gradient-to-br ${c.bg} backdrop-blur-sm rounded-2xl border ${c.ring} p-5 md:p-6 transition-all duration-300 group overflow-hidden`}
                >
                  {/* Subtle glow on hover */}
                  <div className={`absolute -top-12 -right-12 w-24 h-24 ${c.iconBg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon size={20} className={c.iconText} />
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold ${c.number} font-playfair mb-1`}>
                    <AnimatedCounter end={end} suffix={suffix} />
                  </div>
                  <p className="text-white font-medium text-sm font-poppins mb-1">{label}</p>
                  <p className="text-gray-400 text-[11px] font-poppins leading-relaxed">{desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Impact section — asymmetric layout */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Left: main impact card (3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 p-7 md:p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-playfair">Impacto rentable.</h3>
              </div>

              <p className="text-gray-300 font-poppins text-[14px] leading-relaxed mb-6">
                Cada proyecto combina{" "}
                <span className="text-purple-400 font-semibold">desarrollo web</span>,{" "}
                <span className="text-blue-400 font-semibold">automatización inteligente</span> y{" "}
                <span className="text-emerald-400 font-semibold">contenido de alto impacto</span>{" "}
                para generar resultados medibles. No trabajo en partes, cada pieza se conecta con la siguiente para multiplicar el efecto.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: Code2, title: "Desarrollo", items: ["Sitios web con Next.js", "Landing pages optimizadas", "Apps y dashboards"], gradient: "from-purple-500/15 to-purple-600/5", accent: "text-purple-400", border: "border-purple-500/15" },
                  { icon: Workflow, title: "Automatización", items: ["Bots de WhatsApp con n8n", "CRMs personalizados", "Flujos inteligentes con IA"], gradient: "from-blue-500/15 to-blue-600/5", accent: "text-blue-400", border: "border-blue-500/15" },
                  { icon: Megaphone, title: "Contenido", items: ["Videos y reels virales", "Diseño gráfico", "Estrategia orgánica + paid"], gradient: "from-emerald-500/15 to-emerald-600/5", accent: "text-emerald-400", border: "border-emerald-500/15" },
                ].map(({ icon: PillarIcon, title, items, gradient, accent, border }) => (
                  <div key={title} className={`bg-gradient-to-br ${gradient} rounded-xl border ${border} p-4 hover:scale-[1.02] transition-transform duration-300`}>
                    <div className="flex items-center gap-2 mb-2.5">
                      <PillarIcon size={16} className={accent} />
                      <span className="text-white text-xs font-semibold font-poppins">{title}</span>
                    </div>
                    <div className="space-y-1.5">
                      {items.map((item) => (
                        <p key={item} className="text-[11px] text-gray-400 font-poppins flex items-start gap-1.5">
                          <span className={`${accent} mt-0.5`}>&bull;</span> {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: vertical stack (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Quote / philosophy card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-1 bg-gradient-to-br from-purple-600/15 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-purple-500/15 p-6 relative overflow-hidden"
              >
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                <Sparkles size={28} className="text-purple-400/60 mb-3" />
                <p className="text-white font-playfair text-[15px] leading-relaxed mb-3 italic">
                  &ldquo;Un negocio no necesita solo código, ni solo marketing; necesita que todo el engranaje gire junto. Diseño el sistema completo; desde la automatización que ahorra horas, hasta el contenido que trae al cliente&rdquo;
                </p>
                <p className="text-purple-400 text-xs font-poppins font-semibold">Lucas Gatti</p>
              </motion.div>

              {/* Tech stack badges */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/10 p-5"
              >
                <p className="text-gray-400 text-[11px] font-poppins font-semibold uppercase tracking-wider mb-3">Stack que impulsa los resultados</p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind", "n8n", "Supabase", "Vercel", "ChatGPT", "Premiere", "Figma", "Meta Ads"].map((tech) => (
                    <span key={tech} className="text-[11px] font-poppins font-medium text-gray-300 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient bridge: Results → Testimonials */}
      <div className="h-8 bg-gradient-to-b from-gray-950 to-gray-50 dark:from-gray-950 dark:to-transparent" />

      {/* Testimonios Section */}
      <section id="testimonios" className="py-12 bg-gradient-to-b from-gray-50 to-white dark:[background:transparent] relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-32 w-64 h-64 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-32 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-2 md:px-6 relative z-8">
          <SectionTitle subtitle="Opiniones de personas con las que trabajé">
            Testimonios
          </SectionTitle>
          <p className="text-xs text-center text-gray-400 dark:text-gray-500 -mt-3 mb-10 font-poppins max-w-xl mx-auto">
            Los testimonios fueron expresados de forma directa o presencial. Podés contactar a cada persona con el botón de WhatsApp.
          </p>

          <div className="relative max-w-[960px] mx-auto px-12 sm:px-14">
            {/* Custom nav arrows — live in the padding zone, always inside overflow */}
            <button
              onClick={() => testimonialsSwiperRef.current?.slidePrev()}
              className="testimonials-nav-btn testimonials-nav-prev"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => testimonialsSwiperRef.current?.slideNext()}
              className="testimonials-nav-btn testimonials-nav-next"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>

            <Swiper
              onSwiper={(swiper) => { testimonialsSwiperRef.current = swiper }}
              slidesPerView={1}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
              spaceBetween={20}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              modules={[Autoplay]}
              className="testimonials-swiper"
            >
              {[
                {
                  nombre: "Maximiliano",
                  cargo: "CEO de Segurline",
                  texto: "Hicimos campañas de publicidad en redes sociales y Google Ads. Lucas se encargó de todo el diseño y la estrategia. Los resultados fueron excelentes, superamos las metas de captación de leads que teníamos planteadas.",
                  whatsapp: "5491169799220",
                  avatar: "/images/avatar-maxi.png",
                  accentColor: "purple",
                },
                {
                  nombre: "Fernando",
                  cargo: "CEO de EFEMAQ",
                  texto: "Lucas me armó el bot de WhatsApp para emergencias de mantenimiento, me creó la web de EFEMAQ desde cero y me gestiona las redes. Muy profesional, rápido y siempre resolviendo. Lo recomiendo totalmente.",
                  whatsapp: "5491164261960",
                  avatar: "/images/avatar-fernando.png",
                  accentColor: "blue",
                },
                {
                  nombre: "Verónica",
                  cargo: "Salón de Belleza",
                  texto: "Un genio, Lucas! Me ayudó a crear la página de Instagram y a hacer los diseños para las promociones. También se encargó de la publicidad en redes sociales. Estoy muy contenta con el resultado, se nota la diferencia.",
                  whatsapp: "5491122512637",
                  avatar: "/images/avatar-vero.png",
                  accentColor: "pink",
                },
                {
                  nombre: "Giselle",
                  cargo: "Estética Arum",
                  texto: "Muy prolijo. Me hizo los posteos, flyers, y hasta un video para TikTok. Me encantó el resultado! Siempre con buena onda y buena predisposición. Sabe escuchar lo que uno necesita y lo traduce en diseños que funcionan.",
                  whatsapp: "5491149460114",
                  avatar: "/images/avatar-gise.png",
                  accentColor: "rose",
                },
                {
                  nombre: "Pablo",
                  cargo: "Ex compañero — Segurline",
                  texto: "Lucas siempre está predispuesto a ayudar y a dar una mano. Un gran compañero y amigo. Muy resolutivo, cuando hay un problema lo encara y lo soluciona. Lo recomiendo al 100%.",
                  whatsapp: "5491136397426",
                  avatar: "/images/avatar-pablo.png",
                  accentColor: "emerald",
                },
                {
                  nombre: "Ezequiel",
                  cargo: "Ex compañero — Segurline",
                  texto: "Siempre con buena onda y mucha paciencia. Me enseñó a usar Canva y a hacer videos. Un genio! Tiene una capacidad enorme para explicar las cosas de forma simple y clara.",
                  whatsapp: "5491123950996",
                  avatar: "/images/avatar-toni.png",
                  accentColor: "violet",
                },
              ].map((t, i) => {
                const accentMap: Record<string, { border: string; quote: string; badge: string; badgeText: string; starGlow: string }> = {
                  purple: { border: "hover:border-purple-300 dark:hover:border-purple-700", quote: "text-purple-300 dark:text-purple-700", badge: "bg-green-50 dark:bg-green-900/20 hover:bg-green-500", badgeText: "text-green-700 dark:text-green-400 hover:text-white", starGlow: "drop-shadow-[0_0_3px_#a78bfa]" },
                  blue: { border: "hover:border-blue-300 dark:hover:border-blue-700", quote: "text-blue-300 dark:text-blue-700", badge: "bg-green-50 dark:bg-green-900/20 hover:bg-green-500", badgeText: "text-green-700 dark:text-green-400 hover:text-white", starGlow: "drop-shadow-[0_0_3px_#60a5fa]" },
                  pink: { border: "hover:border-pink-300 dark:hover:border-pink-700", quote: "text-pink-300 dark:text-pink-700", badge: "bg-green-50 dark:bg-green-900/20 hover:bg-green-500", badgeText: "text-green-700 dark:text-green-400 hover:text-white", starGlow: "drop-shadow-[0_0_3px_#f472b6]" },
                  rose: { border: "hover:border-rose-300 dark:hover:border-rose-700", quote: "text-rose-300 dark:text-rose-700", badge: "bg-green-50 dark:bg-green-900/20 hover:bg-green-500", badgeText: "text-green-700 dark:text-green-400 hover:text-white", starGlow: "drop-shadow-[0_0_3px_#fb7185]" },
                  emerald: { border: "hover:border-emerald-300 dark:hover:border-emerald-700", quote: "text-emerald-300 dark:text-emerald-700", badge: "bg-green-50 dark:bg-green-900/20 hover:bg-green-500", badgeText: "text-green-700 dark:text-green-400 hover:text-white", starGlow: "drop-shadow-[0_0_3px_#34d399]" },
                  violet: { border: "hover:border-violet-300 dark:hover:border-violet-700", quote: "text-violet-300 dark:text-violet-700", badge: "bg-green-50 dark:bg-green-900/20 hover:bg-green-500", badgeText: "text-green-700 dark:text-green-400 hover:text-white", starGlow: "drop-shadow-[0_0_3px_#8b5cf6]" },
                }
                const a = accentMap[t.accentColor]
                return (
                  <SwiperSlide key={i} className="!h-auto">
                    <div
                      className={`h-full bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 dark:border-slate-700 ${a.border} p-5 flex flex-col transition-all duration-300 relative overflow-hidden group`}
                    >
                      {/* Top row: quote mark left + stars right */}
                      <div className="flex items-start justify-between mb-3">
                        <span className={`text-4xl font-playfair leading-none ${a.quote} select-none opacity-50`}>&ldquo;</span>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} size={13} className={`fill-yellow-400 text-yellow-400 ${a.starGlow}`} />
                          ))}
                        </div>
                      </div>

                      {/* Quote text */}
                      <p className="text-gray-700 dark:text-gray-300 text-[13px] leading-relaxed font-poppins mb-auto relative z-10">
                        {t.texto}
                      </p>

                      {/* Divider */}
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-600 to-transparent my-3" />

                      {/* Author + WhatsApp */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src={t.avatar}
                            alt={t.nombre}
                            width={36}
                            height={36}
                            className="rounded-full object-cover ring-2 ring-gray-100 dark:ring-slate-600 shadow-sm"
                          />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-[13px] font-poppins">{t.nombre}</p>
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-poppins">{t.cargo}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 font-poppins">Contacto:</span>
                          <a
                            href={`https://api.whatsapp.com/send?phone=${t.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-8 h-8 rounded-full ${a.badge} flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110`}
                            title="Contactar por WhatsApp"
                          >
                            <MessageSquare size={13} className={a.badgeText} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-100 dark:[background:transparent] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-200/15 dark:bg-purple-800/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200/15 dark:bg-blue-800/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* Hero headline — "Hablemos." */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5491159454830&text=Hola%20Lucas!%20Vi%20tu%20portfolio%20y%20me%20gustaría%20charlar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-playfair italic font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                Hablemos<span className="text-purple-500">.</span>
              </h2>
            </a>
            <p className="mt-4 text-gray-500 dark:text-gray-400 font-poppins text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              ¿Tenés un proyecto en mente? Escribime y lo hacemos realidad.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">

            {/* Main CTA — WhatsApp */}
            <motion.a
              href="https://api.whatsapp.com/send/?phone=5491159454830&text=Hola%20Lucas!%20Vi%20tu%20portfolio%20y%20me%20gustaría%20charlar%20sobre%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-5 p-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl text-white shadow-xl shadow-green-500/15 hover:shadow-green-500/25 transition-all duration-300 group mb-4"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                <MessageSquare size={26} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="block text-lg sm:text-xl font-semibold font-poppins">WhatsApp</span>
                <span className="block text-green-100 text-sm font-poppins mt-0.5">Respondo en menos de 24 horas</span>
              </div>
              <ArrowRight size={22} className="shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
            </motion.a>

            {/* Secondary row: Email + LinkedIn + CV */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {/* Email */}
              <motion.a
                href="mailto:gattilucas2810@gmail.com"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-white/[0.06] rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-500/15 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-purple-200 dark:group-hover:bg-purple-500/25 transition-colors duration-300">
                  <Mail size={17} className="text-purple-600 dark:text-purple-400" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-poppins font-semibold">Email</span>
                  <span className="text-gray-900 dark:text-white font-medium font-poppins text-xs truncate block">gattilucas2810@gmail.com</span>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/lucas-gatti-a67713206/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-white/[0.06] rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/15 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/25 transition-colors duration-300">
                  <Linkedin size={17} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-poppins font-semibold">LinkedIn</span>
                  <span className="text-gray-900 dark:text-white font-medium font-poppins text-xs truncate block">lucas-gatti</span>
                </div>
              </motion.a>

              {/* Ver CV */}
              <motion.button
                onClick={() => document.getElementById("cv-viewer-btn")?.click()}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3 p-4 bg-white dark:bg-white/[0.06] rounded-xl border border-gray-200 dark:border-white/10 hover:border-violet-300 dark:hover:border-violet-600/50 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 group text-left"
              >
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-500/15 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-violet-200 dark:group-hover:bg-violet-500/25 transition-colors duration-300">
                  <FileText size={17} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-poppins font-semibold">Currículum</span>
                  <span className="text-gray-900 dark:text-white font-medium font-poppins text-xs block">Ver mi CV</span>
                </div>
              </motion.button>
            </div>

            {/* Status bar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-poppins"
            >
              <span className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                Disponible para nuevos proyectos
              </span>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
              <span className="hidden sm:inline">Buenos Aires, Argentina</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="site-footer" className="pt-8 pb-10 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:[background:transparent] text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400/80 text-xs mt-3 font-poppins">Ideado y desarrollado por</p>
            <h2 className="text-2xl font-bold font-playfair mb-4">Lucas Gatti</h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4" />


            {/* Social icons */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <a
                href="https://www.linkedin.com/in/lucas-gatti-a67713206/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-blue-600/80 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://wa.me/5491159454830"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-green-600/80 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>

            <p className="text-gray-500 text-xs mt-5 font-poppins">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}